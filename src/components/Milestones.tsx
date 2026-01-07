'use client'

import React, { useState, useEffect } from 'react'
import '../styles/milestones.css'

// Placeholder images for now
const PLACEHOLDER_IMG = "https://placehold.co/600x400/222/FFF?text=Milestone"

const MILESTONES = [
  {
    year: '2016',
    title: 'Inception',
    description: 'The Entrepreneurship Cell was founded with a vision to foster innovation.',
    images: [PLACEHOLDER_IMG, PLACEHOLDER_IMG]
  },
  {
    year: '2017',
    title: 'First Mega Event',
    description: 'Hosted our first state-level hackathon with over 500 participants.',
    images: [PLACEHOLDER_IMG]
  },
  {
    year: '2018',
    title: 'Incubation Center',
    description: 'Launched our dedicated incubation center to support early-stage startups.',
    images: [PLACEHOLDER_IMG, PLACEHOLDER_IMG, PLACEHOLDER_IMG]
  },
  {
    year: '2019',
    title: 'National Recognition',
    description: 'Recognized as one of the top 10 E-Cells in the region.',
    images: [PLACEHOLDER_IMG]
  },
  {
    year: '2020',
    title: 'Virtual Transition',
    description: 'Successfully transitioned all operations online during the pandemic.',
    images: [PLACEHOLDER_IMG, PLACEHOLDER_IMG]
  },
  {
    year: '2021',
    title: 'Seed Funding',
    description: 'Facilitated seed funding for 5 student startups.',
    images: [PLACEHOLDER_IMG]
  },
  {
    year: '2022',
    title: 'Corporate Partnerships',
    description: 'Partnered with major industry players.',
    images: [PLACEHOLDER_IMG, PLACEHOLDER_IMG]
  },
  {
    year: '2023',
    title: 'Global Summit',
    description: 'Hosted an international entrepreneurship summit.',
    images: [PLACEHOLDER_IMG]
  }
]

export default function Milestones() {
  const [modalOpen, setModalOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Infinite scroll list
  const displayMilestones = [...MILESTONES, ...MILESTONES, ...MILESTONES]
  const realLength = MILESTONES.length

  const openModal = (index: number) => {
    const realIndex = index % realLength
    setCurrentIndex(realIndex)
    setModalOpen(true)
    document.body.classList.add('no-scroll')
  }

  const closeModal = () => {
    setModalOpen(false)
    document.body.classList.remove('no-scroll')
  }

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev + 1) % realLength)
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev - 1 + realLength) % realLength)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!modalOpen) return
      if (e.key === 'Escape') closeModal()
      if (e.key === 'ArrowRight') setCurrentIndex((prev) => (prev + 1) % realLength)
      if (e.key === 'ArrowLeft') setCurrentIndex((prev) => (prev - 1 + realLength) % realLength)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [modalOpen, realLength])

  const currentMilestone = MILESTONES[currentIndex]

  return (
    <section id="milestones" className="section-common bg-bg">
      {/* Background Glow */}
      <div
        className="absolute left-0 top-20 w-full"
        style={{
          height: '700px',
          background: 'radial-gradient(circle at left, rgba(255,23,68,0.15), transparent 70%)',
          pointerEvents: 'none'
        }}
      ></div>

      <div className="container relative z-10">
        <div className="section-header mb-16">
          <h2 className="section-title">Our <span className="text-primary">Milestones</span></h2>
          <p className="section-desc">From our inception to national recognition, here is the timeline of our rapid growth.</p>
        </div>

        <div className="carousel-overflow">
          <div className="carousel-track">
            {displayMilestones.map((milestone, index) => (
              <div
                key={`${milestone.year}-${index}`}
                className="milestone-card"
                onClick={() => openModal(index)}
              >
                <div className="milestone-box">
                  <div className="milestone-circle-badge">
                    <img
                      src={milestone.images[0]}
                      alt="thumb"
                    />
                    {milestone.images.length > 1 && (
                      <div className="badge-count">+{milestone.images.length}</div>
                    )}
                  </div>

                  <div className="milestone-content">
                    <div className="milestone-year">{milestone.year}</div>
                    <h3 className="milestone-title">{milestone.title}</h3>
                    <p className="milestone-desc">{milestone.description}</p>

                    <button className="milestone-btn">
                      More Info <span className="arrow">→</span>
                    </button>
                  </div>
                </div>
                <div className="milestone-dot"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      <div className={`gallery-modal ${modalOpen ? 'open' : ''}`} onClick={closeModal}>
        <div className="modal-close" onClick={closeModal}>&times;</div>
        <button className="modal-prev" onClick={prevImage}>&#10094;</button>
        <div className="modal-img-container" onClick={(e) => e.stopPropagation()}>
          {currentMilestone && (
            <>
              <img src={currentMilestone.images[0]} alt={currentMilestone.title} />
              <div className="modal-caption">
                <h3>{currentMilestone.title} ({currentMilestone.year})</h3>
                <p>{currentMilestone.description}</p>
              </div>
            </>
          )}
        </div>
        <button className="modal-next" onClick={nextImage}>&#10095;</button>
      </div>
    </section>
  )
}
