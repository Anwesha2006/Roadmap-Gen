import { FileText, Download, Clock, CheckCircle } from "lucide-react";
import "./PYQCard.css";

function PYQCard({ pyq }) {
  return (
    <div className="pyq-card">
      <div className="card-header">
        <div className="icon-box">
          <FileText />
        </div>
      </div>

      {pyq.solved && (
        <div className="solved-tag">
          <CheckCircle />
        </div>
      )}

      <h3 className="card-title">{pyq.subject}</h3>

      <div className="card-info">
        <div className="info-row">
          <Clock />
          <span>{pyq.year} - {pyq.exam}</span>
        </div>
        <p>{pyq.questions} Questions</p>
      </div>

      <div className="card-actions">
        <button className="primary-btn">
          {pyq.solved ? "Review" : "Start Practice"}
        </button>

        <button className="download-btn">
          <Download />
        </button>
      </div>
    </div>
  );
}
export default PYQCard;