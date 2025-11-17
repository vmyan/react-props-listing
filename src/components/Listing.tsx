import { FC } from "react";
import { Item } from "../types";

interface ListingProps {
  items: Item[];
}

const Listing: FC<ListingProps> = ({ items }) => {
  return (
    <div className="item-list">
      {items.map((item) => {
        if (!item.MainImage) return null;

        // ограничение title
        const title =
          item.title.length > 50
            ? item.title.slice(0, 50) + "…"
            : item.title;

        // форматирование цены
        let price = "";
        if (item.currency_code === "USD") {
          price = `$${item.price}`;
        } else if (item.currency_code === "EUR") {
          price = `€${item.price}`;
        } else {
          price = `${item.price} ${item.currency_code}`;
        }

        // класс для quantity
        let level = "";
        if (item.quantity <= 10) level = "level-low";
        else if (item.quantity <= 20) level = "level-medium";
        else level = "level-high";

        return (
          <div className="item" key={item.listing_id}>
            <div className="item-image">
              <a href={item.url}>
                <img src={item.MainImage.url_570xN} />
              </a>
            </div>

            <div className="item-details">
              <p className="item-title">{title}</p>
              <p className="item-price">{price}</p>
              <p className={`item-quantity ${level}`}>
                {item.quantity} left
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Listing;
