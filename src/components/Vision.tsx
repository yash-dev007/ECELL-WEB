'use client'

import { useState } from 'react'


export default function Vision() {
  // We can manage read more state individually if needed, 
  // but for simplicity and performance in a static list, 
  // we can just toggle a class or state per card.
  // Using a simple component for Card to handle its own state.

  return (
    <section className="vision-section section-common bg-bg">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="section-title">Our <span className="text-primary">Vision</span></h2>
          <div
            style={{
              height: '4px',
              width: '6rem',
              background: 'var(--primary-color)',
              borderRadius: '9999px',
              margin: '0 auto',
              marginTop: '1rem'
            }}
          ></div>
        </div>

        <div className="vision-feature-grid">
          <FeatureCard
            icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />}
            title="Tech-Driven Innovation"
            description="Leveraging cutting-edge technology to solve real-world problems and disrupt industries."
          />

          <FeatureCard
            icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />}
            title="Global Reach"
            description="Expanding boundaries beyond campus, connecting startups with global ecosystems."
          />

          <FeatureCard
            icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />}
            title="Sustainability"
            description="Focusing on ventures that create long-term value and positive social impact."
          />

          <FeatureCard
            icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />}
            title="Youth Empowerment"
            description="Nurturing student leaders to take charge and drive the future economy."
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description }: {
  icon: React.ReactNode,
  title: string,
  description: string
}) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="feature-card">
      <div className="feature-icon-wrapper">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {icon}
        </svg>
      </div>
      <div className="feature-content">
        <h3>{title}</h3>
        <p className={isExpanded ? 'expanded' : ''}>{description}</p>
        <button
          className="vision-read-more"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  )
}
