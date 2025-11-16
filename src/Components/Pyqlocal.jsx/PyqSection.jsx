import { useState,useEffect } from "react";
import SearchBar from "./SearchBar";
import PYQCard from "./PYQCard";
import EmptyState from "./EmptyState";
import Banner from "./Banner";
import "./PyqSection.css";

 function PyqSection() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
 const [mockData, setMockData] = useState([]);

  useEffect(() => {
    fetch("/mockData.json")
      .then(res => res.json())
      .then(data => setMockData(data))
      .catch(err => console.error(err));
  }, []);

  console.log(mockData);
  const filteredPYQs = mockData.filter((pyq) => {
    const matchesFilter =
      selectedFilter === "all"
        ? true
        : selectedFilter === "solved"
        ? pyq.solved
        : !pyq.solved;

    const matchesSearch =
      pyq.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pyq.exam.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pyq-wrapper">
      <div className="pyq-container">
        <div className="pyq-header">
          <h1>Previous Year Questions</h1>
          <p>Practice with curated previous year questions to master your exams</p>
        </div>

        <div className="top-controls">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
         
        </div>

        <div className="pyq-grid">
          {filteredPYQs.length ? (
            filteredPYQs.map((pyq) => <PYQCard key={pyq.id} pyq={pyq} />)
          ) : (
            <EmptyState />
          )}
        </div>
    <Banner />
      </div>
 </div>);
}
export default PyqSection;