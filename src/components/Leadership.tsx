'use client'

import React from 'react'
import '../styles/leadership.css'

export default function Leadership() {
  return (
    <>
      {/* Leadership & Guidance Section - Split Panel Layout */}
      <section id="leadership" className="leadership-section">
        {/* Section Heading */}
        <div className="container">
          <div className="leadership-heading-wrapper">
            <h2 className="leadership-title">Leadership</h2>
            <div className="leadership-underline"></div>
            <p className="leadership-subtitle">The visionaries guiding E-Cell MET</p>
          </div>
        </div>

        <div className="leadership-panels">
          {/* Principal Panel */}
          <div className="leadership-panel">
            <div
              className="panel-bg-image"
              style={{ backgroundImage: "url('/assets/blank img.jpg')" }}
            ></div>
            <div className="panel-overlay"></div>
            <div className="panel-content">
              <h3 className="panel-label">PRINCIPAL</h3>
              <div className="panel-details">
                <h4 className="leader-full-name">Dr. Rajendra Narkhede</h4>
                <p className="leader-position">Principal, MET Institute of Technology</p>
                <p className="leader-description">"Fostering innovation and academic excellence, guiding students toward entrepreneurial success."</p>
                <p className="leader-tagline">Leading with vision · Inspiring tomorrow's entrepreneurs</p>
              </div>
            </div>
          </div>

          {/* Trustee Panel */}
          <div className="leadership-panel">
            <div
              className="panel-bg-image"
              style={{ backgroundImage: "url('/assets/Shefhali mam.jpg')" }}
            ></div>
            <div className="panel-overlay"></div>
            <div className="panel-content">
              <h3 className="panel-label">TRUSTEE</h3>
              <div className="panel-details">
                <h4 className="leader-full-name">Dr. Shaifali Bhujbal</h4>
                <p className="leader-position">Trustee, MET Group</p>
                <p className="leader-description">"Empowering the next generation through strategic vision and unwavering support."</p>
              </div>
            </div>
          </div>

          {/* External Mentor Panel */}
          <div className="leadership-panel">
            <div
              className="panel-bg-image"
              style={{ backgroundImage: "url('/assets/Deepak sir.jpg')" }}
            ></div>
            <div className="panel-overlay"></div>
            <div className="panel-content">
              <h3 className="panel-label">EXTERNAL MENTOR</h3>
              <div className="panel-details">
                <h4 className="leader-full-name">Prof. Deepak Vartak</h4>
                <p className="leader-position">Industry Expert</p>
                <p className="leader-description">"Bringing real-world insights to nurture bold ideas into sustainable ventures."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Advisor Section */}
      <section className="faculty-advisor-section section-common" style={{ background: '#0a0a0a' }}>
        <div className="container">
          <div className="faculty-advisor-card-wrapper">
            <div className="faculty-advisor-testimonial-card">
              <div className="faculty-advisor-image-container">
                <img src="/assets/Pathak sir .jpeg" alt="Prof. Umesh Pathak" className="faculty-advisor-profile" />
              </div>
              <div className="faculty-advisor-content">
                <h3 className="faculty-advisor-name">Dr. Umesh Pathak</h3>
                <p className="faculty-advisor-designation">Faculty Advisor, MET Institute of Technology</p>
                <p className="faculty-advisor-quote">Supporting and nurturing student entrepreneurs with academic wisdom, practical guidance, and a commitment to transforming innovative ideas into impactful ventures that shape the future.</p>
              </div>
            </div>

            {/* New Card: Nayan Sir */}
            <div className="faculty-advisor-testimonial-card">
              <div className="faculty-advisor-image-container">
                <img src="/assets/nayansir.jpeg" alt="Prof. Nayan" className="faculty-advisor-profile" />
              </div>
              <div className="faculty-advisor-content">
                <h3 className="faculty-advisor-name">Nayan Sir</h3>
                <p className="faculty-advisor-designation">Faculty Advisor, MET Institute of Technology</p>
                <p className="faculty-advisor-quote">Guiding students to explore new horizons, fostering a culture of innovation, and building a strong foundation for future leaders.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
