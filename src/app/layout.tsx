import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '../styles/hero.css'
import '../styles/navbar.css'
import '../styles/vision.css'
import '../styles/milestones.css'
import '../styles/events.css'
import '../styles/tec.css'
import '../styles/team.css'
import '../styles/leadership.css'
import '../styles/digital-presence.css'
import '../styles/startup-registration.css'
import '../styles/footer.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'E-Cell MET | Igniting Innovation & Entrepreneurship | Maharashtra Institute of Technology',
  description: 'E-Cell MET is the entrepreneurship cell of MET Institute of Technology, fostering innovation, startup culture, and business development among students. Led by Vidhi Belani, Tanmay Hirodkar, Shubham Jadhav, and Abhishek Pawar.',
  keywords: 'E-Cell MET, ECell MET, E-Cell Nashik, ECell Nashik, Vidhi Belani, Tanmay Hirodkar, Shubham Jadhav, Abhishek Pawar, entrepreneurship, startup, innovation, MIT, Maharashtra Institute of Technology',
  authors: [{ name: 'ECell MET - MET Bhujbal Knowledge City BTech Nashik' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://ecell-met.tech/',
    title: 'E-Cell MET | Igniting Innovation & Entrepreneurship',
    description: 'E-Cell MET is the entrepreneurship cell of Maharashtra Institute of Technology, led by Vidhi Belani, Tanmay Hirodkar, Shubham Jadhav, and Abhishek Pawar.',
    images: [
      {
        url: 'https://ecell-met.tech/assets/ecell-png.png',
        width: 1200,
        height: 630,
        alt: 'E-Cell MET Logo',
      },
    ],
    siteName: 'E-Cell MET',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Cell MET | Igniting Innovation & Entrepreneurship',
    description: 'E-Cell MET led by Vidhi Belani, Tanmay Hirodkar, Shubham Jadhav, and Abhishek Pawar. Fostering innovation and startup culture.',
    images: ['https://ecell-met.tech/assets/ecell-png.png'],
  },
  alternates: {
    canonical: 'https://ecell-met.tech/',
  },
  icons: {
    icon: '/assets/ecell-png.png',
    shortcut: '/assets/ecell-png.png',
    apple: '/assets/ecell-png.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Outfit:wght@300;400;600;700;900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "E-Cell MET",
              "alternateName": ["Entrepreneurship Cell MET", "ECell MET", "E-Cell Nashik", "ECell Nashik"],
              "description": "The entrepreneurship cell of Maharashtra Institute of Technology, led by Vidhi Belani, Tanmay Hirodkar, Shubham Jadhav, and Abhishek Pawar, fostering innovation, startup culture, and business development among students.",
              "url": "https://ecell-met.tech/",
              "logo": "https://ecell-met.tech/assets/ecell-png.png",
              "foundingDate": "2020",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "email": "ecell@met.edu"
              },
              "sameAs": [
                "https://www.instagram.com/ecell.met/",
                "https://www.linkedin.com/company/ecell-met/",
                "https://twitter.com/ecell_met"
              ],
              "areaServed": ["India", "Maharashtra", "Pune", "Nashik"],
              "knowsAbout": [
                "Entrepreneurship",
                "Startup Development",
                "Business Incubation",
                "Innovation",
                "Technology Startups",
                "Student Entrepreneurship"
              ]
            }),
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
