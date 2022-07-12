import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = ({ title, search, setSearch }) => {
  return (
    <>
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
