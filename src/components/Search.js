import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = ({ title, search, setSearch }) => {
  return (
    <>
      {/* <FontAwesomeIcon icon="envelope" />
      <FontAwesomeIcon icon="key" />
      <FontAwesomeIcon icon="face-smile" /> */}
      {/* <FontAwesomeIcon className="icon" icon="face-grin-hearts" /> */}

      <h1>{title}</h1>

      <p className="icon">👀</p>
      <p className="icon">🎯</p>
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
