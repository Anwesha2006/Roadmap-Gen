import { useState } from "react";
import "./SearchBar.css";
import FilterBar from "./FilterBar";
function SearchBar({ searchTerm, setSearchTerm }) {
   const [selectedFilter, setSelectedFilter] = useState("all");
  return (
    <div className="searchbar-wrapper">
    <input
      type="text"
      placeholder="Search by subject or exam..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="search-input"/>
       <FilterBar selected={selectedFilter} setSelected={setSelectedFilter} />
</div>);
}
export default SearchBar;