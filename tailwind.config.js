/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0d1117',
          card: '#161b22',
          border: '#30363d',
          footer: '#010409',
          light: '#21262d',
        },
        primary: {
          DEFAULT: '#58a6ff',
          light: '#79c0ff',
          dark: '#388bfd',
        },
        secondary: {
          DEFAULT: '#58a6ff',
          light: '#79c0ff',
          dark: '#388bfd',
        },
        accent: {
          DEFAULT: '#58a6ff',
          hover: '#79c0ff',
          light: '#a5d6ff',
        },
        'text-primary': '#f0f6fc',
        'text-secondary': '#c9d1d9',
        'text-muted': '#8b949e',
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
