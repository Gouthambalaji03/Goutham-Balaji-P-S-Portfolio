/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
        'text-primary': '#ffffff',
        'text-secondary': '#a0a0b0',
        'text-muted': '#7a7a8c',
      },
      spacing: {
        '15': '60px',
        '45': '180px',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
