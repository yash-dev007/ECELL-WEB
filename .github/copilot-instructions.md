<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# E-Cell MET Next.js Project Instructions

## Project Overview
This is a Next.js 14 application for E-Cell MET (Maharashtra Institute of Technology's Entrepreneurship Cell). The project uses TypeScript, Tailwind CSS, and follows modern React patterns.

## Key Technologies & Patterns
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Language**: TypeScript
- **Components**: Server and Client components pattern
- **Database**: MongoDB with Mongoose (for API routes)
- **Deployment**: Designed for static export and Netlify deployment

## Design System
- **Colors**: Primary (#FF1744), Secondary (#667eea), Background (#0a0a0a), Surface (#1a1a1a)
- **Fonts**: Plus Jakarta Sans (primary), Outfit (headings)
- **Components**: Glass morphism effects, gradient buttons, floating animations

## Component Structure
- All components are in `src/components/`
- Use TypeScript interfaces for props
- Follow the existing naming convention (PascalCase)
- Implement responsive design with Tailwind classes

## API Routes
- MongoDB integration for startup registration
- Follow REST conventions
- Use proper error handling and validation

## Conversion Guidelines
When converting the original HTML/CSS/JS to Next.js:
1. Convert HTML to JSX syntax
2. Use Next.js Image component for optimizations
3. Convert CSS classes to Tailwind where possible
4. Use React hooks for interactive functionality
5. Implement proper TypeScript typing

## Assets
- Images should be in `public/assets/` directory
- Use Next.js Image component with proper alt text
- Optimize for both performance and accessibility

## SEO & Meta Tags
- Implement proper metadata in layout.tsx
- Use JSON-LD structured data
- Maintain canonical URLs and Open Graph tags
