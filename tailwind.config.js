module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
    './_projects/**/*.{md,mdx}',
    './_posts/**/*.{md,mdx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"Mukta"', 'Helvetica', 'Arial', 'sans-serif'],
    },
    colors: {
      light: '#ffffff',
      dark: '#211B13',
      main: '#193158',
      secondary: '#E4B4C3',
      title: '#211B13',
      body: '#211B13',
      muted: '#737373',
      adalov: '#E3DBCF',
      transparent: 'transparent',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
