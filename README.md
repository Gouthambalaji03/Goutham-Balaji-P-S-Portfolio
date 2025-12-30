# Goutham Balaji P S - Portfolio

A modern, responsive portfolio website built with React and Tailwind CSS, showcasing my skills, projects, and professional experience as a Full Stack Web Developer.

## Live Demo

[View Portfolio](#) <!-- Add your deployed URL here -->

## Features

- Responsive design that works on all devices
- Smooth scrolling navigation
- Animated skill progress bars
- Interactive project cards
- Contact form with mailto functionality
- Scroll-to-top button
- Custom scrollbar styling
- Dark theme with orange accent colors

## Tech Stack

- **Frontend:** React 19
- **Styling:** Tailwind CSS 3
- **Build Tool:** Vite 7
- **Icons:** Lucide React
- **Fonts:** Inter, Poppins (Google Fonts)

## Sections

- **Hero** - Introduction with profile image and CTA buttons
- **About** - Personal info and background
- **Skills** - Technical skills with animated progress bars
- **Experience** - Work experience timeline
- **Projects** - Featured projects with links
- **Certifications & Leadership** - Certifications and leadership roles
- **Contact** - Contact form and social links

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Gouthambalaji03/My-Portfolio.git
   cd My-Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
My-Portfolio/
├── public/
│   └── resume.pdf
├── src/
│   ├── assets/
│   │   └── profile.png
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── ScrollToTop.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Customization

### Colors

Edit the theme colors in `tailwind.config.js`:

```javascript
colors: {
  dark: {
    DEFAULT: '#0f0f23',
    card: '#1a1a2e',
    border: '#2a2a45',
    footer: '#0a0a18',
  },
  accent: {
    DEFAULT: '#f5a623',
    hover: '#ffc107',
  },
  // ...
}
```

### Content

- Update personal information in each component file
- Replace `src/assets/profile.png` with your own photo
- Add your resume as `public/resume.pdf`
- Update social links in `Contact.jsx` and `Footer.jsx`


## License

This project is open source and available under the [MIT License](LICENSE).
