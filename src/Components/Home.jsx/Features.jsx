import './Features.css'
function Features() {
  return (
    <section className="features">
      <div className="features-container">
        <h2 className="features-title">The Information Chaos</h2>

        <div className="chaos-section">
          <div className="chaos-visual">
            <svg className="chaos-icon" viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="100" r="40" stroke="#3dd68c" strokeWidth="3" opacity="0.3"/>
              <circle cx="100" cy="100" r="60" stroke="#3dd68c" strokeWidth="3" opacity="0.2"/>
              <circle cx="100" cy="100" r="80" stroke="#3dd68c" strokeWidth="3" opacity="0.1"/>
              <path d="M100 60 L100 140 M60 100 L140 100" stroke="#3dd68c" strokeWidth="3"/>
            </svg>
            <div className="chaos-cross">✕</div>
          </div>
          <div className="chaos-text">
            <p className="chaos-main">You're losing 2-3 hours<br />day just searching...</p>
            <p className="chaos-stat">60% of students fail to<br />complete their Syllabus</p>
          </div>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon compass">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                <path d="M16.24 7.76l-4.95 9.9-2.54-5.09-5.09-2.54 9.9-4.95" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="feature-title">Smart Roadmap</h3>
            <p className="feature-description">Generate Roadmaps for smart study</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon chat">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
            </div>
            <h3 className="feature-title">Real-Time YT Chatbot</h3>
            <p className="feature-description">Converts Large Videos into summary <br />with flashcards</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon chart">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/>
              </svg>
            </div>
            <h3 className="feature-title">PYQ Priority Engine</h3>
            <p className="feature-description">Arranges PYQ,important questions<br />for better preperation</p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Features;
