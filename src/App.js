import "./App.css";
import Search from "./components/Search";
import Line from "./components/Line";
import Footer from "./components/Footer";
import { useState } from "react";
import data from "./assets/emojiList.json";

// import { library } from "@fortawesome/fontawesome-svg-core";
// import {
//   faEnvelope,
//   faKey,
//   faListAlt,
//   faFaceSmile,
//   faFaceGrinHearts,
// } from "@fortawesome/free-solid-svg-icons";
// library.add(faEnvelope, faKey, faListAlt, faFaceSmile, faFaceGrinHearts);

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
        {data.map((element) => {
          if (regex.test(element.keywords) === true) {
            return <Line title={element.title} emoji={element.symbol} />;
          }
        })}
      </section>
      <Footer end="Made with React at Le Reacteur by Olivier" />;
    </>
  );
}

export default App;
