// Croshes Design-System – Tailwind-Preset.
//
// Einbindung in der tailwind.config des Konsumenten:
//   module.exports = {
//     presets: [require('croshes-ui/tailwind-preset')],
//     content: [
//       './pages/*_/*.{js,ts,jsx,tsx}'.replace('*_', '**'),   // bzw. schlicht die üblichen Globs
//       './node_modules/croshes-ui/dist/' + '**/*.js',
//     ],
//   }
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7366F0',
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b7dff',
          600: '#7366F0',
          700: '#5d4ff2',
          800: '#4c3fb8',
          900: '#3d3494',
        },
        'primary-hover': '#5d4ff2',
        secondary: '#5C56D4',
        accent: '#A79EFF',
        surface: {
          DEFAULT: '#fcf8ff',
          'container-low': '#f6f1ff',
          container: '#efeaff',
          'container-high': '#e9e4ff',
          'container-highest': '#e4dfff',
        },
        'accent-yellow': {
          DEFAULT: '#ffe081',
          light: '#fff3cc',
          dark: '#f5c842',
        },
      },
      // Getrennte bg/text/border-Tokens (1:1 aus breeding-ui übernommen —
      // "dark" ist als Hintergrund #1F1F1F, als Textfarbe aber #DBDBDB)
      backgroundColor: {
        dark: '#1F1F1F',
        'dark-blue': '#00365a',
      },
      textColor: {
        'dark-blue': '#00365a',
        dark: '#DBDBDB',
        'dark-secondary': '#9E9E9E',
      },
      borderColor: {
        dark: '#1F1F1F',
        'dark-focus': '#DBDBDB',
      },
    },
  },
  plugins: [],
};
