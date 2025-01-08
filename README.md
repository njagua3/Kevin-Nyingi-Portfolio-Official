# Kevin Nyingi's Portfolio

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
```bash
git clone https://github.com/yourusername/portfolio.git
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

## 📝 Customization

### Adding Your CV

1. Place your CV (PDF format) in the `public` folder
2. Name it `Kevin-Nyingi-Resume.pdf`
3. The download button in the Resume section will automatically link to it

### Updating Profile Picture

1. Replace the image URL in `src/config/constants.ts`:
```typescript
export const SITE_CONFIG = {
  // ...
  profileImage: 'your-image-url-here',
  // ...
}
```

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
```typescript
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
```

