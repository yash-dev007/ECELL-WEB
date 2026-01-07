// Milestones Data - TypeScript interfaces and data

export interface Milestone {
  year: string
  title: string
  desc: string
  images: string[]
  link?: string
  highlight?: boolean
}

export const milestonesData: Milestone[] = [
  {
    year: '2024',
    title: 'IIT Bombay NEC',
    desc: 'AIR-5 Rank in National Entrepreneurship Challenge Basic Track at IIT Bombay E-Summit',
    images: [
      '/MilesIMG/wec/w1.JPG',
      '/MilesIMG/wec/w2.JPG'
    ],
    link: 'milestones/nec-basic.html'
  },
  {
    year: 'Winner',
    title: 'All India 1st Rank',
    desc: 'National Entrepreneurship Challenge Advanced Track at IIT Bombay E-Summit 2024',
    highlight: true,
    images: [
      '/MajarIMG/NEC2024/1.jpeg',
      '/MajarIMG/NEC2024/2.jpeg',
      '/MajarIMG/NEC2024/3.jpeg'
    ],
    link: 'milestones/nec-advanced.html'
  },
  {
    year: 'KIT Kolhapur',
    title: '1st Runner Up WEC',
    desc: 'Western Entrepreneurship Challenge 2025 - Winning the silver trophy at KIT Kolhapur',
    images: [
      '/MajarIMG/WEC2025/1.jpeg',
      '/MajarIMG/WEC2025/2.jpeg'
    ],
    link: 'milestones/wec.html'
  },
  {
    year: '2025',
    title: 'IdeaStorm Qualification',
    desc: 'Two teams successfully qualified for the prestigious IdeaStorm competition',
    images: [
      '/MilesIMG/Idea Storm/ideastorm.webp'
    ],
    link: 'milestones/eureka.html'
  },
  {
    year: '2024',
    title: 'InspireX Success',
    desc: 'Outstanding performance in our first Tech Startup Competition - InspireX',
    images: [
      '/MilesIMG/InspireX/1.jpg',
      '/MilesIMG/InspireX/2.jpg',
      '/MilesIMG/InspireX/3.jpg',
      '/MilesIMG/InspireX/4.jpg'
    ],
    link: 'milestones/demo.html'
  },
  {
    year: '2024',
    title: 'E-Cell Established',
    desc: 'Official establishment of MET E-Cell - Beginning of our entrepreneurial journey',
    images: [
      '/assets/ecell png.png'
    ],
    link: 'milestones/established.html'
  }
]

export default milestonesData
