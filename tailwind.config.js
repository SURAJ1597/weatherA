/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sunny': "url('/src/assets/sunny.jpg')",
        'main': "url('/src/assets/main.jpg')",
        'partly-cloudy': "url('/src/assets/partly-cloudy.jpg')",
        'overcast': "url('/src/assets/overcast.jpg')",
        'mist': "url('/src/assets/mist.jpg')",
        'snowy': "url('/src/assets/snowy.jpg')",
        'blowing-snow': "url('/src/assets/blowing-snow.jpg')",
        'blizzard': "url('/src/assets/blizzard.jpg')",
        'rain': "url('/src/assets/rain.jpg')",
        'fog': "url('/src/assets/fog.jpg')",
      }
    },
  },
  plugins: [],
}

