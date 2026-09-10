/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // MARSA Custom Colors
        marsa: {
          ink: '#122124',
          deep: '#071417',
          'deep-soft': '#102326',
          sea: '#17494b',
          'sea-bright': '#2f7772',
          'sea-soft': '#dce9e3',
          sand: '#ead7a8',
          'sand-deep': '#cbb37e',
          pearl: '#f5f2eb',
          warm: '#e8e3d8',
          muted: '#718083',
          accent: '#c37960',
        },
        // Dark mode colors
        'marsa-dark': {
          ink: '#f2eee4',
          deep: '#061114',
          'deep-soft': '#102b2d',
          sea: '#83bcb1',
          'sea-bright': '#a8d4c7',
          'sea-soft': '#183637',
          pearl: '#0d2224',
          warm: '#112b2d',
          muted: '#a2b0ab',
          sand: '#ead7a8',
          'sand-deep': '#dcc58f',
        },
      },
      fontFamily: {
        'marsa': ['Manrope', 'Noto Sans Arabic', 'sans-serif'],
        'mono': ['DM Mono', 'monospace'],
      },
      borderRadius: {
        'marsa-sm': '12px',
        'marsa-md': '20px',
        'marsa-lg': '30px',
        'marsa-pill': '999px',
      },
      container: {
        center: true,
        padding: '48px',
        maxWidth: '1280px',
      },
      spacing: {
        'marsa': '1280px',
      },
      animation: {
        rise: 'rise 0.9s cubic-bezier(0.22, 0.75, 0.18, 1) both',
        fade: 'fade 0.2s ease both',
      },
      keyframes: {
        rise: {
          from: {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fade: {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
