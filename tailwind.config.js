/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./src/app/*.{html,ts}",
    "./src/app/components/*.{html,ts}",
  ],
  theme: {
    extend: {
      spacing: {
        '-160': '-40rem', // Adjust the value as needed
        '-120': '-30rem',
        '-200': '-50rem',
        '-256': '-64rem',
      },
      colors: {
        customYellow: '#FFCD00',
        customPurple: '#A158FF',
        customBlue: '#0000FF',
        customGreen: '#00FF00',
        customRed: '#FF0000',
        customLightBlue: "#00FFFF",
        customOrange: "#FF8700",
      },
      fontFamily: {
        'plus-jakarta-sans': ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}