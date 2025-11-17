import "./App.css";
import Listing from "./components/Listing";
import rawData from "../data/etsy.json?raw";
import { Item } from "./types";

const items: Item[] = JSON.parse(rawData);

function App() {
  return (
    <div className="App">
      <Listing items={items} />
    </div>
  );
}

export default App;
