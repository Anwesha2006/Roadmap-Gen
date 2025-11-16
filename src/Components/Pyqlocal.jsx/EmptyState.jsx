import { FileText } from "lucide-react";
import "./EmptyState.css";

function EmptyState() {
  return (
    <div className="empty-box">
      <FileText className="empty-icon" />
      <h3>No Questions Found</h3>
      <p>Try adjusting your filters or search term</p>
    </div>
  );
}
export default EmptyState;