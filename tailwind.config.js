/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'noir': '#0e0c0a',
        'blanc': '#fffcf7',
        'doré': '#b8944a',
        'doré-foncé': '#8f7134',
        'ivoire': '#f7f3ec',
        'gris': '#6a645c',
        'gris-clair': '#ece6db',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        memorial: '0.01em',
        wide2: '0.2em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      boxShadow: {
        soft: '0 8px 32px -16px rgba(14, 12, 10, 0.12)',
        memorial: '0 28px 70px -28px rgba(14, 12, 10, 0.22)',
        innerlight: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.06)',
      },
      backgroundImage: {
        'memorial-mesh': 'none',
        'memorial-footer': 'none',
      },
      transitionTimingFunction: {
        reveal: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
