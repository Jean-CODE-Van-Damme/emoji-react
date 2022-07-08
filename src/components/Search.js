import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = ({ title, search, setSearch }) => {
  return (
    <>
      {/* <FontAwesomeIcon icon="envelope" />
      <FontAwesomeIcon icon="key" />
      <FontAwesomeIcon icon="face-smile" /> */}

      <div className="search-top">
        {/* <FontAwesomeIcon className="icon" icon="face-grin-hearts" /> */}
        <p className="icon">👀🍀</p>

        <h1>{title}</h1>
        {/* <FontAwesomeIcon className="icon" icon="face-grin-hearts" /> */}
        <p className="icon">🍀 👀</p>
      </div>
      <input
        type="search"
        placeholder="What emoji are you looking for ?"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    </>
  );
};

export default Search;
