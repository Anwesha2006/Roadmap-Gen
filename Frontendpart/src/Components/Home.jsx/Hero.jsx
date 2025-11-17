import './Hero.css'
 function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="hero-title">
          STOP SEARCHING.<br />
          START MASTERING
        </h1>
        <p className="hero-subtitle">
          The AI powered platform that turns YouTube chaos into a<br />
          a clear, guaranteed roadmap for exam success.
        </p>
        <button className="hero-button">
          GENERATE YOUR FREE ROADMAP NOW
        </button>
        <div className="hero-stats">
          <div className="stat-item">
            <svg className="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Trusted by 30K+ Students</span>
          </div>
          <div className="stat-item">
            <svg className="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>Faster Syllabus Completion</span>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Hero;