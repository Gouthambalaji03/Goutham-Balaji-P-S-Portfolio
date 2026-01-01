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
          light: '#1e1e35',
        },
        primary: {
          DEFAULT: '#f5a623',
          light: '#ffc107',
          dark: '#e09000',
        },
        secondary: {
          DEFAULT: '#ffc107',
          light: '#ffca28',
          dark: '#f5a623',
        },
        accent: {
          DEFAULT: '#f5a623',
          hover: '#ffc107',
          light: '#ffca28',
        },
        'text-primary': '#ffffff',
        'text-secondary': '#a0a0b0',
        'text-muted': '#7a7a8c',
      },
      spacing: {
        '15': '60px',
        '18': '72px',
        '45': '180px',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'space': ['Space Grotesk', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(245, 166, 35, 0.3), 0 0 40px rgba(255, 193, 7, 0.2)',
        'glow-lg': '0 0 30px rgba(245, 166, 35, 0.4), 0 0 60px rgba(255, 193, 7, 0.3)',
        'card': '0 20px 40px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
