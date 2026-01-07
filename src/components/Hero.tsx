'use client'

import React from 'react'


export default function Hero() {
  return (
    <main id="home" className="hero-section">

      {/* Main Content */}
      <div className="relative z-10 w-full container flex flex-col items-center justify-center">

        <h1 className="hero-title text-white">
          Igniting the Spirit of <br />
          <span className="swoosh-underline">Innovation</span>
        </h1>

        <p className="hero-description">
          We are the driving force for aspiring entrepreneurs at MET, fostering creativity, collaboration, and a premium startup culture in nashik and beyond.
        </p>

        <div className="flex flex-row gap-4 items-center justify-center flex-wrap">
          <a href="#about" className="btn btn-white shadow-[0_0_20px_rgba(255,255,255,0.4)]">
            Get Started
          </a>
          <a href="#startup-registration" className="btn btn-glass">
            Register Startup
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Floating Elements (Absolute Positioned) */}
      <div className="absolute inset-0 pointer-events-none">

        {/* Badge 1: IITB Winner (Top Left) */}
        <div className="floating-badge badge-pos-1 animate-float-slow">
          <div className="badge-content glass-panel">
            <div className="rounded-full w-8 h-8 bg-[#1E1E1E] flex items-center justify-center border border-gray-700">
              <span className="text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              </span>
            </div>
            <div className="flex flex-col items-start leading-none">
              <span className="text-[10px] text-gray-400 font-bold tracking-widest uppercase mb-1">IITM</span>
              <span className="text-xs font-bold text-primary">EDD Cohort</span>
            </div>
          </div>
        </div>

        {/* Badge 2: #1 Rank (Bottom Left) */}
        <div className="floating-badge badge-pos-3 animate-float-fast">
          <div className="badge-content glass-panel">
            <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex flex-col items-start leading-none">
              <span className="text-xs font-bold text-white mb-1">#1 Rank</span>
              <span className="text-[10px] text-gray-400">NEC IITB</span>
            </div>
          </div>
        </div>

        {/* Badge 3: Live Event (Top Right) */}
        <div className="floating-badge badge-pos-4 animate-float-medium">
          <div className="badge-content glass-panel">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-bold text-white">Live Event</span>
          </div>
        </div>

        {/* Badge 4: Visitors (Bottom Right) */}
        <div className="floating-badge badge-pos-2 animate-float-slow">
          <div className="glass-panel p-4 flex flex-col items-start min-w-[120px]">
            {/* Bar Graph Graphic */}
            <div className="flex items-end gap-1 h-8 mb-2">
              <div className="w-1 bg-gray-600 rounded-t h-3"></div>
              <div className="w-1 bg-gray-600 rounded-t h-5"></div>
              <div className="w-1 bg-primary rounded-t h-8"></div>
              <div className="w-1 bg-gray-600 rounded-t h-4"></div>
              <div className="w-1 bg-gray-600 rounded-t h-6"></div>
            </div>
            <span className="text-lg font-bold text-white leading-none">4,000+</span>
            <span className="text-[10px] text-gray-400 uppercase mt-1">Visitors</span>
          </div>
        </div>

      </div>
    </main>
  )
}
