/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Montserrat': 'Montserrat',
      'Poppins' : 'Poppins'
    },
    extend: {
      colors: {
        'slategreen' : "#2B3A38",
        'darkcharcol' : '#1F1F1F',
        "DeepTeal" : "#1A5E63",
        "shadowgray" : '#4E5D5A',
        'steelblue' : '#468C98'
      }
    },
  },
  plugins: [],
}

