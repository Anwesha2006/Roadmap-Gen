import "./Banner.css";

export default function Banner() {
  return (
    <div className="recommend-box">
      <h2>Get Personalized PYQ Recommendations</h2>
      <p>Our AI analyzes your learning patterns to suggest the most relevant practice questions</p>
      <button className="recommend-btn">Generate My Practice Plan</button>
    </div>
  );
}