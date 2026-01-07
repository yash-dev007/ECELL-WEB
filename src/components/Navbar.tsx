'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Lock scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <>
      <nav className="nav-wrapper">
        <div className="nav-card glass-panel">
          <div className="flex items-center gap-3">
            <img src="/assets/ecell png.png" alt="E-Cell MET" className="nav-logo" />
            <div className="text-xl font-bold tracking-tight">
              ECell <span className="text-primary">MET</span>
            </div>
          </div>

          <div className="nav-links md-flex hidden-mobile">
            <Link href="#home">Home <span></span></Link>
            <Link href="#events">Events <span></span></Link>
            <Link href="/tec">TEC <span></span></Link>
            <Link href="#startup-registration">Startup Registration <span></span></Link>
            <Link href="#team">Team <span></span></Link>
            <Link href="#contact">Contact <span></span></Link>
          </div>

          <Link
            href="https://www.whatsapp.com/channel/0029VaE4pti6LwHuWQ1v4W2S"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-join md-flex hidden-mobile"
          >
            Join Community
          </Link>

          <button
            className={`hamburger-btn md-hidden ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <div className="hamburger-icon">
              <span className="hamburger-line"></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          <button
            className="mobile-close-btn"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <Link href="#home" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="#events" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Events</Link>
          <Link href="/tec" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>TEC</Link>
          <Link href="#startup-registration" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Startup Registration</Link>
          <Link href="#team" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Team</Link>
          <Link href="#contact" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>

          <Link
            href="https://www.whatsapp.com/channel/0029VaE4pti6LwHuWQ1v4W2S"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-join"
            style={{ alignSelf: 'flex-start', marginTop: '1rem' }}
          >
            Join Community
          </Link>
        </div>
      </div>
    </>
  )
}
