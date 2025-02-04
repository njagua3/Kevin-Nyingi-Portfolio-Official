# Kevin Nyingi's Portfolio

https://njaguanyingi.netlify.app/

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- Responsive design for all devices
- Dark/Light mode toggle
- Smooth animations
- Project showcase
- Contact form
- Downloadable CV
- Social media links

## 🛠️ Technologies

- React
- TypeScript
- Tailwind CSS
- Vite
- Lucide Icons

## 🏃‍♂️ Getting Started

1. Clone the repository


2. Install dependencies

npm install


3. Start the development server

npm run dev


## 📝 Customization

### Adding Your CV

1. Place your CV (PDF format) in the `public` folder
2. Name it `Kevin-Nyingi-Resume.pdf`
3. The download button in the Resume section will automatically link to it

### Updating Profile Picture

1. Replace the image URL in `src/config/constants.ts`:

export const SITE_CONFIG = {
  
  profileImage: 'https://prnt.sc/6KNi_iYGWobB',
  
}


### Responsive Breakpoints

The site is responsive across all devices with these breakpoints:
- Mobile: 0-640px
- Tablet: 641-768px
- Laptop: 769-1024px
- Desktop: 1025px+

## 📱 Mobile-First Approach

The portfolio is built with a mobile-first approach, ensuring:
- Readable typography at all screen sizes
- Touch-friendly navigation
- Optimized images
- Responsive grid layouts
- Accessible on all devices

## 🔧 Configuration

Update your personal information in `src/config/constants.ts`:

export const SITE_CONFIG = {
  name: 'Your Name',
  title: 'Your Title',
  location: 'Your Location',
  social: {
    github: 'your-github-url',
    twitter: 'your-twitter-url',
    linkedin: 'your-linkedin-url',
    medium: 'your-medium-url'
  }
}


Features to add in the future

A section for the certifications alongside their Credential ID
Highlight my medium blog more
Finish the vagi fashion ecommerce site
add 2 more featured work
section for figma design
