import "./FilterBar.css";

export default function FilterBar({ selected, setSelected }) {
  return (
    <div className="filter-bar">
      {["all", "solved", "unsolved"].map((filter) => (
        <button
          key={filter}
          className={`filter-btn ${selected === filter ? "active" : ""}`}
          onClick={() => setSelected(filter)}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
}