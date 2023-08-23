/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landing': "url('/images/landing.webp')",
      },
      fontFamily: {
        'DMSans': ['DM Sans', 'sans serif'],
      }
    },
  },
  plugins: [],
}

