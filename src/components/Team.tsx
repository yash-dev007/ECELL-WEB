'use client'

import React, { useState, useEffect, useRef } from 'react'
import '../styles/team.css'

// 2025-26 Team Data (Current Team)
const TEAM_2025 = [
  {
    name: 'Vidhi Belani',
    role: 'President',
    email: 'vidhib.btech_iot@met.bkc.edu',
    linkedin: 'https://www.linkedin.com/in/vidhi-belani-b89a85323/',
    image: '/assets/Vidhi.jpeg'
  },
  {
    name: 'Roshan Bhagat',
    role: 'Vice President',
    email: 'roshanbhagatbusiness2005@gmail.com',
    linkedin: 'https://www.linkedin.com/in/roshanbhagat2005/',
    image: '/assets/Roshan dada.jpeg'
  },

  {
    name: 'Rutuja Gawali',
    role: 'General Secretary',
    email: 'gavalirutuja2005@gmail.com',
    linkedin: 'https://www.linkedin.com/in/rutujagavali/',
    image: '/assets/Rutuja.jpeg'
  },

  {
    name: 'Shubham Jadhav',
    role: 'Tech Team',
    email: 'shubhamja9863@gmail.com',
    linkedin: 'https://www.linkedin.com/in/shubham-jadhav-b209a6307/',
    image: '/assets/Shubham.png'
  },
  {
    name: 'Yash Patil',
    role: 'Design Team',
    email: 'yashpatil76317@gmail.com',
    linkedin: 'https://www.linkedin.com/in/yash-patil-4a4aa329a',
    image: '/assets/yash.jpeg'
  },
  {
    name: 'Kavita Boradee',
    role: 'Event Team',
    email: 'kavitaboradee@gmail.com',
    linkedin: 'https://www.linkedin.com/in/kavita-borade',
    image: '/assets/kavita.jpg'
  },

  {
    name: 'Rohan Patil',
    role: 'Marketing Team',
    email: 'rohanp.btech_iot@blc.met.edu',
    linkedin: 'https://www.linkedin.com/in/rohansaschinpatil',
    image: '/assets/Rohan Patil.jpeg'
  },
  {
    name: 'Vaishnavi Kumavat',
    role: 'Outreach Team',
    email: 'vnkumavat05@gmail.com',
    linkedin: 'https://www.linkedin.com/in/vaishnavi-kumavat-459228253',
    image: '/assets/Vaishnavi.jpg'
  },
  {
    name: 'Kapil Jadhav',
    role: 'Media Team',
    email: 'kapiljadhav1008@gmail.com',
    linkedin: 'https://in.linkedin.com/in/kapil-jadhav-b9589b3a2',
    image: '/assets/Kapil dada.jpeg'
  },
  {
    name: 'Bhushan Bhusare',
    role: 'Operations Team',
    email: 'bbhusarephotos73@gmail.com',
    linkedin: 'https://www.linkedin.com/in/bhushan-bhusare-581972318',
    image: '/assets/Bhushan.jpeg'
  }
];

// Seed Team Data (Pre-2021-22)
const TEAM_SEED = [
  {
    name: 'Siddhart Perkar',
    role: 'President',
    email: 'siddharbtech_iot@blc.met.edu',
    linkedin: 'https://www.linkedin.com/in/siddharth-perkar/',
    image: '/assets/seed team/Sidhhart P.png'
  },
  {
    name: 'Shyam Nair',
    role: 'Vice President',
    email: 'shyambtech_iot@blc.met.edu',
    linkedin: 'https://linkedin.com/in/shyam-nair-410192292',
    image: '/assets/seed team/Shyam VP.png'
  },
  {
    name: 'Samarth Kuar',
    role: 'Secretary',
    email: 'samarthkuar2005@gmail.com',
    linkedin: 'https://linkedin.com/in/samarth-kuwar-96993422b',
    image: '/assets/seed team/Samarth secretory.png'
  },
  {
    name: 'Tanmay Hirodkar',
    role: 'Treasurer',
    email: 'tanmayhirodkar@gmail.com',
    linkedin: 'https://linkedin.com/in/hirodkar',
    image: '/assets/seed team/Tanmay T.png'
  },
  {
    name: 'Hitesh Patil',
    role: 'Operation Team',
    email: 'hiteshp.btech_iot@blc.met.edu',
    linkedin: 'https://linkedin.com/in/hiteshpatil26A',
    image: '/assets/seed team/Hitesh O.png'
  },
  {
    name: 'Abhishek Pawar',
    role: 'Marketing Team',
    email: 'abhishekpawar2005@gmail.com',
    linkedin: 'https://linkedin.com/in/pawar-abhishek17',
    image: '/assets/seed team/Abhishek M.png'
  },
  {
    name: 'Snehal Deshmukh',
    role: 'Events Team',
    email: 'snehaldeshmukh2005@gmail.com',
    linkedin: 'https://linkedin.com/in/snehal-deshmukh-aa5666275',
    image: '/assets/seed team/Snehal E.png'
  },
  {
    name: 'Aditya Sonje',
    role: 'Design Team',
    email: 'adityasonje2005@gmail.com',
    linkedin: 'https://linkedin.com/in/aditya-sonje',
    image: '/assets/seed team/Aditya D.png'
  }
];

// 2021-22 Team Data
const TEAM_2021 = [
  {
    name: 'Abhishek Pawar',
    role: 'President',
    email: 'abhishekpawar2005@gmail.com',
    linkedin: 'https://linkedin.com/in/pawar-abhishek17',
    image: '/assets/Abhishek dada.jpeg'
  },
  {
    name: 'Tanmay Hirodkar',
    role: 'Vice President',
    email: 'tanmayhirodkar@gmail.com',
    linkedin: 'https://linkedin.com/in/hirodkar',
    image: '/assets/tanmay.jpg'
  },
  {
    name: 'Aditya Sonje',
    role: 'General Secretary',
    email: 'aditysonje2006@gmail.com',
    linkedin: 'https://www.linkedin.com/in/aditya-sonje/',
    image: '/assets/sonje.jpg'
  },
  {
    name: 'Darshan Mali',
    role: 'Treasurer',
    email: 'darshanmali2005@gmail.com',
    linkedin: 'https://www.linkedin.com/in/darshan-mali-6a740728b/',
    image: '/assets/darshan.jpg'
  },
  {
    name: 'Samarth Kuar',
    role: 'Operations Head',
    email: 'samarthkuar2005@gmail.com',
    linkedin: 'https://www.linkedin.com/in/samarth-kuwar-96993422b',
    image: '/assets/samarth.jpeg'
  },
  {
    name: 'Ashwin Shinde',
    role: 'Design Head',
    email: 'ashwinshinde2005@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ashwin-shinde-00541b329',
    image: '/assets/ashwin.jpg'
  },
  {
    name: 'Siddharth Perkar',
    role: 'Marketing Head',
    email: 'siddharthperkar2005@gmail.com',
    linkedin: 'https://www.linkedin.com/in/siddharth-perkar-15a4a8244/',
    image: '/assets/siddharth.png'
  },
  {
    name: 'Vidhi Belani',
    role: 'Event Head',
    email: 'vidhibelani2005@gmail.com',
    linkedin: 'https://www.linkedin.com/in/vidhi-belani-b89a85323/',
    image: '/assets/Vidhi.jpeg'
  }
];

export default function Team() {
  const [activeYear, setActiveYear] = useState<'seed' | 'elite' | 'legacy'>('seed')
  const [highlightStyle, setHighlightStyle] = useState<React.CSSProperties>({})

  // Refs for buttons to calculate highlight position
  const btnRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({})

  const updateHighlight = () => {
    const btn = btnRefs.current[activeYear]
    if (btn) {
      setHighlightStyle({
        width: `${btn.offsetWidth}px`,
        left: `${btn.offsetLeft}px`,
        height: `${btn.offsetHeight}px`
      })
    }
  }

  useEffect(() => {
    // Initial and on activeYear change
    const timer = setTimeout(updateHighlight, 150)

    window.addEventListener('resize', updateHighlight)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', updateHighlight)
    }
  }, [activeYear])

  const getTeamData = () => {
    switch (activeYear) {
      case 'elite': return TEAM_2025;
      case 'legacy': return TEAM_2021;
      case 'seed': return TEAM_SEED;
      default: return TEAM_SEED;
    }
  }

  const teamData = getTeamData();
  const gridYearClass = activeYear === 'elite' ? 'team-2023' : `team-${activeYear}`;

  const handleYearChange = (year: 'seed' | 'elite' | 'legacy') => {
    setActiveYear(year);
  }

  return (
    <section id="team" className="section-common bg-surface">
      <div className="container">
        <div className="section-header text-center mb-12">
          <h2 className="section-title text-4xl md:text-5xl font-bold mb-4">
            Meet The <span className="text-primary">Core Team</span>
          </h2>
          <p className="section-desc text-gray-400 text-lg mb-8">
            The minds behind the magic.
          </p>

          <div className="team-year-switcher inline-block">
            <div className="segmented-control relative">
              <div
                className="segmented-highlight"
                style={{
                  ...highlightStyle,
                  position: 'absolute',
                  top: '4px'
                }}
              ></div>

              <button
                type="button"
                ref={el => { btnRefs.current['seed'] = el }}
                className={`segment-btn ${activeYear === 'seed' ? 'active' : ''}`}
                onClick={() => handleYearChange('seed')}
              >
                Team Seed
              </button>

              <button
                type="button"
                ref={el => { btnRefs.current['elite'] = el }}
                className={`segment-btn ${activeYear === 'elite' ? 'active' : ''}`}
                onClick={() => handleYearChange('elite')}
              >
                Team Elite
              </button>

              <button
                type="button"
                ref={el => { btnRefs.current['legacy'] = el }}
                className={`segment-btn ${activeYear === 'legacy' ? 'active' : ''}`}
                onClick={() => handleYearChange('legacy')}
              >
                Team Legacy
              </button>
            </div>
          </div>
        </div>

        <div className={`core-team-grid ${gridYearClass}`}>
          {teamData.map((member, index) => (
            <div key={`${activeYear}-${index}`} className="leader-card">
              <div className="leader-bg-img">
                <img src={member.image} alt={member.name} />
              </div>

              <div className="leader-content-wrapper">
                <div className="leader-avatar">
                  <img src={member.image} alt={member.name} />
                </div>

                <div className="leader-info">
                  <h3 className="leader-name">{member.name}</h3>
                  <p className="leader-role">{member.role}</p>
                </div>

                <div className="leader-contacts">
                  <a href={`mailto:${member.email}`} className="contact-icon" title="Email">
                    <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="contact-icon" title="LinkedIn">
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
