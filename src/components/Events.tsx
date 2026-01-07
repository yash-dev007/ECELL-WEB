'use client'

import React from 'react'
import '../styles/events.css'

const EVENTS = [
  {
    title: 'E-Summit 2024',
    date: 'March 15, 2024',
    image: '/assets/events/event1.jpg' // Placeholder path
  },
  {
    title: 'Startup Bootcamp',
    date: 'Jan 20, 2024',
    image: '/assets/events/event2.jpg'
  },
  {
    title: 'Hackathon X',
    date: 'Nov 12, 2023',
    image: '/assets/events/event3.jpg'
  },
  {
    title: 'Investor Pitch Day',
    date: 'Oct 05, 2023',
    image: '/assets/events/event4.jpg'
  },
  {
    title: 'Innovators Meetup',
    date: 'Sept 18, 2023',
    image: '/assets/events/event5.jpg'
  },
  {
    title: 'Tech Talk Series',
    date: 'Aug 22, 2023',
    image: '/assets/events/event6.jpg'
  }
]

export default function Events() {
  // Triple the list for seamless loop and sufficient items for diagonal pattern
  const displayEvents = [...EVENTS, ...EVENTS, ...EVENTS, ...EVENTS]

  return (
    <section id="events" className="section-common bg-bg">
      <div className="container">
        <div className="section-header text-center mb-16">
          <h2 className="section-title">Major Events <span className="text-gray-500">2024-25</span></h2>
          <div style={{ height: '4px', width: '5rem', background: 'var(--primary-color)', borderRadius: '9999px', margin: '0 auto' }}></div>
        </div>

        <div className="events-loop-wrapper">
          <div className="events-diagonal-wrapper">
            <div className="events-track">
              {displayEvents.map((event, index) => (
                <div key={`event-${index}`} className="event-card">
                  {/* Fallback image if assets don't exist yet */}
                  <div className="event-img bg-gray-800 relative">
                    {/* We could use real Next.js Image if we had valid paths, for now using div with bg or generic placeholder */}
                    <div className="w-full h-full flex items-center justify-center text-gray-600">
                      Image
                    </div>
                  </div>
                  <div className="event-content">
                    <span className="event-date">{event.date}</span>
                    <h3 className="event-title">{event.title}</h3>
                    <button className="event-view-btn">View</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
