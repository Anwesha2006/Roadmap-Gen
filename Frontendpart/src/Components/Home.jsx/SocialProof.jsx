import './SocialProof.css'
export default function SocialProof() {
  return (
    <section className="social-proof">
      <div className="social-proof-container">
        <h2 className="social-proof-title">Social Proof</h2>
        <div className="proof-content">
          <div className="testimonial-section">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="phone-header">
                  <div className="phone-time">9:41</div>
                </div>
                <div className="phone-content">
                  <div className="progress-card">
                    <div className="progress-header">
                      <span>Generated Roadmap</span>
                    </div>
                    <div className="progress-items">
                      <div className="progress-item">
                        <div className="progress-bar">
                          <div className="progress-fill" style={{width: '70%'}}></div>
                        </div>
                      </div>
                      <div className="progress-item">
                        <div className="progress-bar">
                          <div className="progress-fill" style={{width: '45%'}}></div>
                        </div>
                      </div>
                      <div className="progress-item">
                        <div className="progress-bar">
                          <div className="progress-fill" style={{width: '90%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonials">
              <div className="testimonial-card">
                <div className="testimonial-avatar">S</div>
                <div className="testimonial-content">
                  <p>No more hassle in the last minute.Prepare yourself better with us.</p>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-avatar">S</div>
                <div className="testimonial-content">
                  <p>Highlighted notes,Important PYQs,practice set just like you do for yourself.</p>
                </div>
              </div>
            </div>
            <button className="trial-button">
              START YOUR<br />FREE TRIAL NOW
            </button>
          </div>
          <div className="stats-grid">
            <div className="stat-box">
              <div className="stat-number">50%</div>
              <div className="stat-label">Faster Completion</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">100%</div>
              <div className="stat-label">Original Content</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">80+</div>
              <div className="stat-label">Flashcards</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">10k+</div>
              <div className="stat-label">Valid Users</div>
            </div>
          </div>
        </div>
      </div>
      <div className="sparkle-decoration"></div>
    </section>
  )
}


