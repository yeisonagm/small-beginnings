/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landing-desktop': "url('/images/landing-desktop.png')",
      }
    },
  },
  plugins: [],
}

