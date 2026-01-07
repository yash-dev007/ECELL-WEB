'use client'

import React from 'react'
import Link from 'next/link'
import '../styles/tec.css'
import NetworkAnimation from './NetworkAnimation'

export default function Tec() {
  return (
    <section id="tec" className="section-common relative" style={{ overflow: 'hidden' }}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-surface"></div>
      <div
        className="absolute right-0 top-0 w-1/2 h-full"
        style={{
          background: 'linear-gradient(to left, rgba(255,23,68,0.05), transparent)',
          pointerEvents: 'none'
        }}
      ></div>

      <div className="container relative z-10 flex flex-col-mobile items-center justify-between gap-16 md-flex">
        {/* Text Content */}
        <div className="relative md-w-1-2">
          <span className="tec-bg-text">TEC</span>
          <div className="relative">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">New Initiative</span>
            <h2 className="tec-title text-white">
              The <span className="gradient-text">Entrepreneurship</span> Community
            </h2>
            <p className="text-gray-400 text-lg mb-4 max-w-md">
              A new initiative to connect, educate & empower innovators. Join a network of like-minded individuals building the future.
            </p>
            <Link href="/tec" className="tec-btn">
              <span>Explore -&gt;</span>
            </Link>
          </div>
        </div>

        {/* Animation Container */}
        <div className="relative md-w-1-2 h-64 md:h-96 flex items-center justify-center">
          {/* Network Connections Animation */}
          <div className="w-full h-full">
            <NetworkAnimation />
          </div>
        </div>
      </div>
    </section>
  )
}
