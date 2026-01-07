/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    unoptimized: true, // For static export compatibility
  },
  // Enable static exports for Netlify deployment
  output: 'export',
  trailingSlash: true,
}

module.exports = nextConfig
