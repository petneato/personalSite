module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}',
  ],
  theme: {
    extend: {
      colors: {
        'beach-red': '#fe5d26',
        'beach-orange4': '#F2C078',
        'beach-yellow': '#FAEDCA',
        'beach-green': '#C1DBB3',
        'beach-dgreen': '#7EBC89',

        'dv-green': '#0F5257',
        'dv-blue': '#0B3142',
        'dv-quartz': '#9C92A3',
        'dv-pink': '#C6B9CD',
        'dv-lavender': '#D6D3F0',
      }
    },
  },
  plugins: [
    '@tailwindcss/aspect-ratio'
  ],
};
