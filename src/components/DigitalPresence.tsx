'use client'

import React, { useEffect, useState, useRef } from 'react'
import '../styles/digital-presence.css'

const STATS = [
  {
    label: 'Instagram Followers',
    value: 5000,
    icon: (
      <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
    )
  },
  {
    label: 'LinkedIn Connections',
    value: 2500,
    icon: (
      <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
    )
  },
  {
    label: 'YouTube Subscribers',
    value: 1200,
    icon: (
      <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
    )
  },
  {
    label: 'Community Members',
    value: 8000,
    icon: (
      <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2.2a9.8 9.8 0 1 0 0 19.6 9.8 9.8 0 0 0 0-19.6zm1 13.8h-2v-2h2v2zm0-4h-2v-6h2v6z" /></svg>
    )
  }
]

export default function DigitalPresence() {
  const [counts, setCounts] = useState(STATS.map(() => 0))
  const sectionRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true

        STATS.forEach((stat, index) => {
          const duration = 2000
          const steps = 60
          const increment = stat.value / steps
          let step = 0

          const timer = setInterval(() => {
            step++
            setCounts(prev => {
              const newCounts = [...prev]
              newCounts[index] = Math.min(Math.ceil(step * increment), stat.value)
              return newCounts
            })

            if (step >= steps) clearInterval(timer)
          }, duration / steps)
        })
      }
    }, { threshold: 0.3 })

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="digital-presence" className="digital-presence-section" ref={sectionRef}>
      <div className="container">
        <div className="digital-presence-header">
          <h2 className="digital-presence-title">Our <span className="text-primary">Digital Presence</span></h2>
          <div className="digital-presence-underline"></div>
        </div>

        <div className="digital-stats-grid">
          {STATS.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon-wrapper">
                <div className="stat-icon">
                  {stat.icon}
                </div>
              </div>
              <div className="stat-number">
                {counts[index]}+
              </div>
              <div className="stat-label">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
