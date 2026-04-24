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
        'noir': '#0a0a0a',
        'blanc': '#fafafa',
        'doré': '#d4af37',
        'doré-foncé': '#b8941f',
        'ivoire': '#f7f5f2',
        'gris': '#6b7280',
        'gris-clair': '#f3f4f6',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        memorial: '0.02em',
      },
      boxShadow: {
        soft: '0 4px 24px -4px rgba(10, 10, 10, 0.07)',
        memorial: '0 25px 50px -12px rgba(10, 10, 10, 0.12)',
        innerlight: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.06)',
      },
      backgroundImage: {
        'memorial-mesh':
          'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(201, 162, 39, 0.12), transparent), radial-gradient(ellipse 60% 40% at 100% 50%, rgba(10, 10, 10, 0.04), transparent), radial-gradient(ellipse 50% 30% at 0% 80%, rgba(201, 162, 39, 0.06), transparent)',
        'memorial-footer': 'linear-gradient(180deg, transparent 0%, rgba(201, 162, 39, 0.04) 100%)',
      },
    },
  },
  plugins: [],
}
