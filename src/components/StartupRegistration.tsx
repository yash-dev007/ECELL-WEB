'use client'

import React from 'react'
import '../styles/startup-registration.css'

export default function StartupRegistration() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted')
  }

  return (
    <section id="startup-registration" className="contact-section">
      <div className="container relative">
        <div className="flex flex-col md:flex-row gap-12 items-start">

          {/* Left Content */}
          <div className="w-full md:w-1/2 relative z-10">
            <div className="startup-registration-header">
              <h2 className="startup-registration-title">Register Your <span className="text-primary">Startup</span></h2>
              <div className="startup-registration-underline"></div>
              <p className="startup-registration-subtitle">
                Turn your vision into reality. Join our incubation program and get access to mentorship, funding, and resources.
              </p>
            </div>

            {/* Feature Benefits */}
            <div className="features-list">
              <div className="feature-item">
                <span className="feature-icon">
                  <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                </span>
                <span className="feature-text">Expert Mentorship & Guidance</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">
                  <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </span>
                <span className="feature-text">Funding Opportunities</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">
                  <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                </span>
                <span className="feature-text">Networking & Community Access</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">
                  <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                </span>
                <span className="feature-text">Co-working Space & Resources</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="w-full md:w-1/2">
            <div className="form-card">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" className="input-field" placeholder="John Doe" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" className="input-field" placeholder="+91 98765 43210" required />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" className="input-field" placeholder="john@example.com" required />
                </div>

                <div className="form-group">
                  <label htmlFor="startup">Startup Name</label>
                  <input type="text" id="startup" className="input-field" placeholder="Your Startup Name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="pitch">Elevator Pitch</label>
                  <textarea id="pitch" className="input-field textarea-field" placeholder="Describe your startup idea in a few sentences..." required></textarea>
                </div>

                <button type="submit" className="btn-submit">
                  Submit Application
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
