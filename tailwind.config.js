/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*.{html,js}"],
  theme: {
    extend: {
        colors:{
          "blue":"#2900E8",
          "darkgrey":"#1B1B1F",
          "yellow":"#FFF480",
          "lightpurple":"#A5A1FF",
          "purple":"#A5A1ff",
          "pink":"#FFAED8",
          "darkyellow":"#1D1C16",
          "yellow-2":"#D4C951"
        },
        backgroundImage:{
          "logo":"url('./assets/logo.svg')",
          "portfolio":"url('./assets/portfolio.svg')",
          "portfolio-desktop":"url('./assets/portfolio-desktop.svg')",
          "project-1":"url('./assets/project-1.svg')",
          "project-1-desktop":"url('./assets/project-1-desktop.svg')",
          "team-1":"url('./assets/team-1.webp')",
          "team-2":"url('./assets/team-2.webp')",
          "team-3":"url('./assets/team-3.webp')",
          "team-4":"url('./assets/team-4.webp')",
        },
        screens:{
          "xs":"500px",
        }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

