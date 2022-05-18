module.exports = {
  content: ['./*.html'],
  darkMode:'class',
  theme: {
    screens:{
      'lg':{'max': '992px'},
      'md':{'max':'768px'},
      'md-crash':{'max':'646px'},
      'sm':{'max':'480px'},
    },
    container:{
      padding:'20px',
      center: true
    },
    extend: {
      colors:{
        blue:'#4F99FC',
        black:'#092C4C',
        lightgray:'#1F1534',
        white:'#FAFBFF'
      },
      boxShadow:{
        'def_shadow':'5px -1px 40px rgba(0, 0, 0, 0.07)'
      }
    },
  },
  plugins: [],
}
