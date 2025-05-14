/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light_brown': '#F8EFEF',
        'medium_brown':'#D5C7B4',
        'dark_brown':'#3D0104',
        
      },
    },
  },
  plugins: [],
}