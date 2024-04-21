/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'celestePrimary': ' #0369a1',
      'moradoSecundary': '#5b21b6',
      'rojoWarn': '#dc2626',
      'huesoLetras': '#f5f5f4',
      'negrasLetras': '#0c0a09',
    extend: {},
  },
  plugins: [],
}
}