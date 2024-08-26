/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Light mode colors
        primary: '#7d98a1', // Cadet Gray as the primary color
        secondary: '#a9b4c2', // Powder Blue as a complementary color
        background: '#eef1ef', // Antiflash White for a light, clean background
        headline: '#1c2321', // Eerie Black for strong, contrasting headlines
        paragraph: '#5e6572', // Paynes Gray for readable paragraphs
        button: '#7d98a1', // Cadet Gray for buttons
        buttonText: '#FFFFFF', // White text on buttons for readability
        highlight: '#a9b4c2', // Powder Blue for highlights and accent colors
        stroke: '#5e6572', // Paynes Gray for borders and strokes
        overlay: 'rgba(28, 35, 33, 0.5)', // Eerie Black overlay for modals and popups

        // Dark mode colors
        'dark-primary': '#a9b4c2', // Powder Blue as the primary color in dark mode
        'dark-secondary': '#7d98a1', // Cadet Gray as the secondary color in dark mode
        'dark-background': '#1c2321', // Eerie Black for the background in dark mode
        'dark-headline': '#eef1ef', // Antiflash White for headlines in dark mode
        'dark-paragraph': '#eef1ef', // Antiflash White for paragraphs in dark mode
        'dark-button': '#7d98a1', // Cadet Gray for buttons in dark mode
        'dark-buttonText': '#FFFFFF', // White text on buttons for readability in dark mode
        'dark-highlight': '#a9b4c2', // Powder Blue for highlights and accents in dark mode
        'dark-stroke': '#eef1ef', // Antiflash White for borders and strokes in dark mode
        'dark-overlay': 'rgba(238, 241, 239, 0.5)', // Antiflash White overlay for modals and popups in dark mode
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        robotoSlab: ['Roboto Slab', 'serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
