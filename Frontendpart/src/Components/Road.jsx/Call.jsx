import {React,useState} from 'react'
import './Call.css'

export default function Call(){
  return (
    <div className="experts-wrapper">
     
      <div className="experts-container">
        <h1 className="experts-title">Talk to our Experts</h1>
        <p className="experts-subtitle">
          Have questions about pricing, plans, or how we can help? We’d love to chat!
        </p>

        {/* CONTACT CARDS */}
        <div className="experts-card-grid">
          <div className="experts-card">
            <span className="icon"><i class="ri-chat-1-line"></i></span>
            <h3>Chat to sales</h3>
            <p>Speak to our friendly team.</p>
            <a href="mailto:sales@example.com">sales@example.com</a>
          </div>

          <div className="experts-card">
            <span className="icon"><i class="ri-user-line"></i></span>
            <h3>Chat to support</h3>
            <p>We’re here to help.</p>
            <a href="mailto:support@example.com">support@example.com</a>
          </div>

          <div className="experts-card">
            <span className="icon"><i class="ri-map-pin-line"></i></span>
            <h3>Visit us</h3>
            <p>Come say hello at our office HQ.</p>
            <a href="#">View on Google Maps</a>
          </div>

          <div className="experts-card">
            <span className="icon"><i class="ri-phone-line"></i></span>
            <h3>Call us</h3>
            <p>Mon–Fri from 8am to 5pm.</p>
            <a href="tel:+15550009000">+1 (555) 000-0000</a>
          </div>
        </div>
        </div>
        {/* FAQ SECTION */}
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>

          <div className="faq-item">
            <h4>Is there a free trial available?</h4>
            <p>Yes, you can try our services free for 30 days.</p>
          </div>

          <div className="faq-item">
            <h4>Can I change my plan later?</h4>
            <p>Absolutely! You can upgrade or downgrade anytime.</p>
          </div>

          <div className="faq-item">
            <h4>What is your cancellation policy?</h4>
            <p>You can cancel anytime, no extra fees.</p>
          </div>

          <div className="faq-item">
            <h4>Can other info be added to an invoice?</h4>
            <p>Yes, please contact support to customize your invoice.</p>
          </div>
        </div>
    
      </div>);
}

