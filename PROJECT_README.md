# 🚀 Space-Themed Portfolio Website

A stunning space-themed animated portfolio website for **Paras Miglani** - Full Stack Web Developer & Data Science Enthusiast.

## ✨ Features

- **Animated Space Background**: Interactive Three.js space scene with floating particles and stars
- **Smooth Scrolling**: Full-screen section-based layout with smooth transitions
- **Navigation System**: Bottom-left navigation dots with section indicators
- **Responsive Design**: Mobile-first approach with beautiful animations
- **Modern Tech Stack**: React, TypeScript, Tailwind CSS, and Framer Motion

## 🎨 Design Elements

- **Space-themed Color Palette**: Deep space blues, cosmic purples, and stellar accents
- **Futuristic Typography**: Glowing text effects and smooth typewriter animations
- **Glass Morphism**: Translucent cards with backdrop blur effects
- **Interactive Elements**: Hover effects, floating animations, and particle systems

## 📱 Sections

### 1. Hero Section
- Full-screen landing with animated name
- Typewriter effect for subtitle
- Floating cosmic elements

### 2. Projects Section
- Tabbed interface for different project categories:
  - Frontend Projects
  - Full Stack Projects
  - Data Science Projects
  - Cloud Projects
- Interactive project cards with live demo and GitHub links

### 3. Resume Section
- PDF preview integration
- Download functionality
- Professional statistics display

### 4. Contact Section
- Contact form with EmailJS integration
- Social media links (GitHub, LinkedIn, Email)
- Interactive form validation

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion + Three.js
- **Background**: Three.js particle system
- **Scrolling**: React Scroll
- **Form**: EmailJS integration
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd space-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) in your browser

### Build for Production

```bash
npm run build
```

## 🎯 Customization

### Colors & Design System
All colors and design tokens are defined in `src/index.css`. The space theme uses:
- **Primary**: Cosmic Purple (`hsl(262 80% 50%)`)
- **Accent**: Stellar Blue (`hsl(193 76% 60%)`)
- **Background**: Deep Space (`hsl(230 35% 7%)`)

### Projects Data
Update the projects in `src/components/sections/ProjectsSection.tsx` to showcase your own work.

### Contact Form
Configure EmailJS in `src/components/sections/ContactSection.tsx` for working contact functionality.

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                     # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── tabs.tsx
│   │   └── TypewriterEffect.tsx
│   ├── sections/               # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ResumeSection.tsx
│   │   └── ContactSection.tsx
│   ├── SpaceBackground.tsx     # Three.js animated background
│   └── Navigation.tsx          # Navigation system
├── pages/
│   ├── Index.tsx              # Main page
│   └── NotFound.tsx           # 404 page
├── hooks/
│   └── use-toast.ts           # Toast notifications
├── lib/
│   └── utils.ts               # Utility functions
├── index.css                  # Design system & animations
└── main.tsx                   # App entry point
```

## 🌟 Key Features Implementation

### Space Background Animation
- Custom Three.js scene with 2000+ animated stars
- Floating particles with cosmic colors
- Smooth rotation and interactive elements

### Smooth Scrolling Navigation
- Section-based navigation with visual indicators
- Smooth scroll transitions between sections
- Responsive scroll-down arrow

### Glass Morphism Design
- Translucent cards with backdrop blur
- Cosmic borders with glowing effects
- Interactive hover animations

### Responsive Design
- Mobile-first approach
- Adaptive layouts for all screen sizes
- Touch-friendly navigation

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push
3. Custom domain configuration available

### GitHub Pages
1. Build the project: `npm run build`
2. Deploy the `dist` folder to GitHub Pages
3. Configure custom domain in repository settings

### Netlify
1. Connect repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

## 📞 Contact

**Paras Miglani**
- Email: paras@example.com
- GitHub: [Your GitHub Profile]
- LinkedIn: [Your LinkedIn Profile]

---

Built with ❤️ and ✨ cosmic energy