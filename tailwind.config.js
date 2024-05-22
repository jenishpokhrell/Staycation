/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#152C5B',
        'bu' : '#3252df',
        'yellow': '#ffcb47',
        'green': '#1abc9c',
        'orange': '#e74c3c',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
        'mdlg' : '222px',
        'large': '90px',
    },
    width:{
      '80': '81%',
      '110': '110%',
      '30': '40%',
      '400': '400px',
    },
    height:{
      '550': '550px',
    },
    inset:{
      '120': '130%',
      '30': '12%',
      '40': '40%',
      '45': '45%'
    },
    borderRadius:{
      'large': '110px',
    },
    text:{
      '4xl': '40px',
    }
  },
  plugins: [],
}
}
