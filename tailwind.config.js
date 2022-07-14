/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'xs': {'max' : '475px'},
      'ss': '475px',
    },
    extend: {
      colors:{
        primary:{
          900 : '#0096D1',
        },
        secondary:{
          900 : '#3EBDC6',
          800 : '#A9EAD6'
        },
        cream:{
          900 : '#FEF4EA'
        }
      },
    },
  },
  plugins: [],
}
