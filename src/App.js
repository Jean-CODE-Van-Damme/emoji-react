import "./App.css";
import Search from "./components/Search";
import Line from "./components/Line";
import Footer from "./components/Footer";
import { useState } from "react";
import data from "./assets/emojiList.json";

function App() {
  const [search, setSearch] = useState("");
  // console.log(search);

  const regex = new RegExp(search, "i");

  return (
    <>
      <section className="search-div">
        <Search title="EmojiSearch" search={search} setSearch={setSearch} />
      </section>
      <section className="line-div">
        {data.map((element, index) => {
          if (regex.test(element.keywords) === true) {
            return (
              <Line title={element.title} emoji={element.symbol} key={index} />
            );
          }
        })}
      </section>
      <Footer end="Made with React at Le Reacteur by Olivier" />;
    </>
  );
}

export default App;
