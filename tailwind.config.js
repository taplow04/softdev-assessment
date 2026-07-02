/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Pulled directly from the Figma design
        forest: '#1B2316', // page background (dark green)
        card: 'rgba(255,255,255,0.05)', // frosted card fill
        star: '#FFF84E', // rating star yellow
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        script: ['"Indie Flower"', 'cursive'],
      },
      maxWidth: {
        design: '1728px', // Figma desktop artboard width
      },
      boxShadow: {
        card: '0 40px 80px -20px rgba(0,0,0,0.45)',
        soft: '0 30px 60px -25px rgba(0,0,0,0.6)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
      },
    },
  },
  plugins: [],
}
