export interface ItemImage {
  url_570xN: string;
}

export interface Item {
  listing_id: number;
  url: string;
  MainImage: ItemImage;
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
}