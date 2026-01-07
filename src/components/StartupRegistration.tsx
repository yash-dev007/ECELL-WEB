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

            {/* Floating Pills (Visible on Desktop) */}
            <div className="relative h-64 hidden md:block mt-20">
              <div className="contact-float-item" style={{ top: '0', left: '0', animationDelay: '0s' }}>
                <a href="mailto:ecell@met.edu" className="contact-pill">
                  <div className="icon-circle bg-red-500/20 text-red-500">
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Email Us</div>
                    <div className="font-semibold">ecell@met.edu</div>
                  </div>
                </a>
              </div>

              <div className="contact-float-item" style={{ top: '80px', left: '150px', animationDelay: '2s' }}>
                <div className="contact-pill">
                  <div className="icon-circle bg-blue-500/20 text-blue-500">
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Location</div>
                    <div className="font-semibold">Mumbai, India</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="w-full md:w-1/2">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="flex gap-4 mb-2">
                <div className="form-group w-1/2">
                  <label htmlFor="name">FULL NAME</label>
                  <input type="text" id="name" className="input-field" placeholder="John Doe" required />
                </div>
                <div className="form-group w-1/2">
                  <label htmlFor="phone">PHONE</label>
                  <input type="tel" id="phone" className="input-field" placeholder="+91 98765 43210" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">EMAIL ADDRESS</label>
                <input type="email" id="email" className="input-field" placeholder="john@example.com" required />
              </div>

              <div className="form-group">
                <label htmlFor="startup">STARTUP NAME</label>
                <input type="text" id="startup" className="input-field" placeholder="Your Startup Name" required />
              </div>

              <div className="form-group">
                <label htmlFor="pitch">ELEVATOR PITCH</label>
                <textarea id="pitch" className="input-field textarea-field" placeholder="Describe your idea in short..." required></textarea>
              </div>

              <button type="submit" className="btn-submit">
                Submit Application
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
