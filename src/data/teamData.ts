// Team Data Structure for MET E-Cell

interface TeamMember {
  name: string
  role: string
  designation?: string
  image?: string
  email?: string
  phone?: string
}

interface TeamSection {
  name: string
  leader: TeamMember
  members: TeamMember[]
}

// Faculty Advisors
export const faculty: TeamMember[] = [
  {
    name: "Dr. Deepak Sharma",
    role: "Faculty Advisor",
    designation: "Professor, Dept of Computer Engineering",
    image: "/assets/Deepak sir.jpg"
  },
  {
    name: "Prof. Nayan Sir",
    role: "Faculty Advisor", 
    designation: "Assistant Professor",
    image: "/assets/nayansir.jpeg"
  },
  {
    name: "Prof. Shefali Mam",
    role: "Faculty Advisor",
    designation: "Assistant Professor", 
    image: "/assets/Shefhali mam.jpg"
  },
  {
    name: "Prof. Pathak Sir",
    role: "Faculty Advisor",
    designation: "Assistant Professor",
    image: "/assets/Pathak sir .jpeg"
  }
]

// Current Team Leadership (2025-26)
export const currentTeamLeadership: TeamMember[] = [
  { 
    name: "Vidhi Belani", 
    role: "President", 
    image: "/assets/Vidhi.jpeg"
  },
  { 
    name: "Roshan Bhagat", 
    role: "Vice President", 
    image: "/assets/Roshan dada.jpeg"
  },
  { 
    name: "Rutuja Gavali", 
    role: "General Secretary", 
    image: "/assets/Rutuja.jpeg"
  }
]

// Current Core Team
export const currentCoreTeam: TeamMember[] = [
  { name: "Rutuja Gavali", role: "Graphic Designing", image: "/assets/Rutuja.jpeg" },
  { name: "Vaishnavi Kumavat", role: "Public Relations", image: "/assets/Vaishnavi.jpg" },
  { name: "Kavita Borade", role: "Events Team Lead", image: "/assets/kavita.jpg" },
  { name: "Shubham Jadhav", role: "Technical Team Lead", image: "/assets/shubham.jpg" },
  { name: "Bhushan Bhusare", role: "Operations Team Lead", image: "/assets/Bhushan.jpeg" },
  { name: "Kapil Jadhav", role: "Media Team Lead", image: "/assets/Kapil dada.jpeg" },
  { name: "Abhishek Pawar", role: "Senior Member", image: "/assets/Abhishek dada.jpeg" },
  { name: "Tanmay Hirodkar", role: "Senior Member", image: "/assets/tanmay.jpg" },
  { name: "Aditya Sonje", role: "Senior Member", image: "/assets/sonje.jpg" },
  { name: "Darshan Mali", role: "Senior Member", image: "/assets/darshan.jpg" },
  { name: "Siddharth Perkar", role: "Senior Member", image: "/assets/siddharth.png" },
  { name: "Samarth Kuwar", role: "Senior Member", image: "/assets/samarth.jpeg" },
  { name: "Ashwin Shinde", role: "Senior Member", image: "/assets/ashwin.jpg" }
]

// Design Team
export const designTeam: TeamSection = {
  name: "Design Team",
  leader: { name: "Yash Patil", role: "Design Team Lead", image: "/assets/yash.jpeg" },
  members: [
    { name: "Mohit Borse", role: "Design Team" },
    { name: "Sneha Dagwar", role: "Design Team" },
    { name: "Sakshi Wasaikar", role: "Design Team" },
    { name: "Rushikesh Saskar", role: "Design Team" },
    { name: "Bhagya Patil", role: "Design Team" },
    { name: "Harshal Wadge", role: "Design Team" }
  ]
}

// Events Team
export const eventsTeam: TeamSection = {
  name: "Events Team",
  leader: { name: "Kavita Borade", role: "Events Team Lead", image: "/assets/kavita.jpg" },
  members: [
    { name: "Eklavya Hire", role: "Events Team" },
    { name: "Sneha Dagwar", role: "Events Team" },
    { name: "Khushi Pal", role: "Events Team" },
    { name: "Purva Dhamne", role: "Events Team" },
    { name: "Priyanka Ripote", role: "Events Team" },
    { name: "Vaishnavi Nikam", role: "Events Team" }
  ]
}

// Technical Team
export const technicalTeam: TeamSection = {
  name: "Technical Team",
  leader: { name: "Shubham Jadhav", role: "Technical Team Lead", image: "/assets/shubham.jpg" },
  members: [
    { name: "Yash Patil", role: "Technical Team", image: "/assets/yash.jpeg" },
    { name: "Rohan Patil", role: "Technical Team", image: "/assets/Rohan Patil.jpeg" },
    { name: "Rahul", role: "Technical Team" },
    { name: "Eklavya Hire", role: "Technical Team" },
    { name: "Sneha Dagwar", role: "Technical Team" },
    { name: "Khushi Pal", role: "Technical Team" }
  ]
}

// Media Team
export const mediaTeam: TeamSection = {
  name: "Media Team",
  leader: { name: "Kapil Jadhav", role: "Media Team Lead", image: "/assets/Kapil dada.jpeg" },
  members: [
    { name: "Rohan Patil", role: "Media Team", image: "/assets/Rohan Patil.jpeg" },
    { name: "Purva Dhamne", role: "Media Team" },
    { name: "Tanvi Wagh", role: "Media Team" },
    { name: "Harshal Wadge", role: "Media Team" },
    { name: "Priyanka Ripote", role: "Media Team" },
    { name: "Kaif Kazi", role: "Media Team" }
  ]
}

// Previous Teams
export const previousTeams = {
  elite: {
    leadership: [
      { name: "Abhishek Pawar", role: "President", image: "/assets/Abhishek dada.jpeg" },
      { name: "Tanmay Hirodkar", role: "Vice President", image: "/assets/tanmay.jpg" },
      { name: "Aditya Sonje", role: "General Secretary", image: "/assets/sonje.jpg" },
      { name: "Darshan Mali", role: "Treasurer", image: "/assets/darshan.jpg" }
    ],
    teams: [
      {
        name: "Design Team",
        leader: { name: "Ashwin Shinde", role: "Design Lead", image: "/assets/ashwin.jpg" },
        members: [
          { name: "Rutuja", role: "Design Member" },
          { name: "Yash", role: "Design Member", image: "/assets/yash.jpeg" },
          { name: "Mohit", role: "Design Member" },
          { name: "Bhushan", role: "Design Member", image: "/assets/Bhushan.jpeg" }
        ]
      }
    ]
  },
  seed: {
    leadership: [
      { name: "Siddharth Perkar", role: "President", image: "/assets/siddharth.png" },
      { name: "Shyam Naie", role: "Vice President" },
      { name: "Samarth Kuwar", role: "Secretary", image: "/assets/samarth.jpeg" },
      { name: "Tanmay Hirodkar", role: "Treasurer", image: "/assets/tanmay.jpg" }
    ],
    teams: [
      {
        name: "Operations Team",
        leader: { name: "Hitesh Patil", role: "Operations Lead" },
        members: [
          { name: "Mariya Ghasletwala", role: "Operations Member" },
          { name: "Tanvi Shinde", role: "Operations Member" }
        ]
      }
    ]
  }
}

// Combined export for easy access
export const teamData = {
  faculty,
  currentTeam: {
    leadership: currentTeamLeadership,
    coreTeam: currentCoreTeam,
    designTeam,
    eventsTeam,
    technicalTeam,
    mediaTeam
  },
  previousTeams
}
