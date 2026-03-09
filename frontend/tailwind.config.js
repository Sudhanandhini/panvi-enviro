/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8dc63f',
        'primary-dark': '#6fa027',
        secondary: '#2d3561',
        'secondary-light': '#3d4a8a',
        navy: '#0d1b35',
        'nav-blue': '#1a8fd1',
        'top-bar': '#d6eef7',
        accent: '#00b5cc',
        teal: '#17a89e',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

