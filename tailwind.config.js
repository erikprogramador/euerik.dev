module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
    './_projects/**/*.{md,mdx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      light: '#ffffff',
      dark: '#000000',
      main: '#4025E8',
      title: '#080520',
      body: '#272536',
      branding: {
        adalov: '#000000',
        simulaimob: '#C4CAEB',
        simulaplano: '#FF1617',
        salescity: '#1A1A1A',
        linkedin: '#0077b5',
        youtube: '#ff0000',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
