import { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/SearchBar.css'

const SearchBar = ({ onSearch, onReset }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() === "") return; // Do nothing if the search bar is empty
    onSearch(query.trim());
  };

  const handleClear = () => {
    setQuery(""); // Clear the input field
    onReset(); // Show all trips again
  };

  return (
    <div className="container d-flex flex-column align-items-center mt-5">
      <h5 className="mb-2 text-muted">Search Trips</h5>
      <div className="input-group shadow-sm" style={{ maxWidth: "400px", width: "100%" }}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter trip name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSearch()}
        />
        {query && (
          <button className="btn btn-light border" onClick={handleClear}>
            <FaTimes />
          </button>
        )}
        <button className="btn btn-outline-secondary" onClick={handleSearch}>
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
