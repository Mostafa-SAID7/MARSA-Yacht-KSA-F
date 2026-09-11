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
          field: '#121a19',
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
          field: '#0c1718',
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
        'marsa-sm': '10px',
        'marsa-md': '18px',
        'marsa-lg': '28px',
        'marsa-pill': '9999px',
      },
      container: {
        center: true,
        padding: '48px',
        maxWidth: '1280px',
      },
      spacing: {
        'marsa': '1280px',
        '4.5': '1.125rem',
        '18': '4.5rem',
      },
      opacity: {
        '8': '0.08',
        '14': '0.14',
      },
      animation: {
        rise: 'rise 0.9s cubic-bezier(0.22, 0.75, 0.18, 1) both',
        fade: 'fade 0.6s ease both',
        'bounce-slow': 'bounce-slow 2.4s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
      },
      keyframes: {
        rise: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fade: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':       { transform: 'translateY(5px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backdropBlur: {
        xs: '4px',
      },
      boxShadow: {
        'marsa': '0 4px 32px rgba(7, 20, 23, 0.24), 0 1px 0 rgba(255,255,255,0.05) inset',
        'marsa-lg': '0 12px 48px rgba(7, 20, 23, 0.32)',
        'marsa-glow': '0 0 24px rgba(47, 119, 114, 0.3)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
