module.exports = {
  theme: {
    extend: {
      colors: {
        
        main: {
          100: '#0072e4',    //main blue
          200: '#233d74',    //Footer headings
          300: '#eff8fe',    //Footer background    
        },  

        sec: {
          100: '#ff9800'    //orange
        }, 

        nuetral: {
          100: '#272727',     //text
          200: '#efefef'      //background
        }
      },

      spacing: {
        '2px': '2px',
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/10': '10%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        '1/20': '5%',
        full: '100%',
        screen: '100vw',
      }
    }
  },
  variants: {
    border: ['responsive', 'hover', 'focus', 'active'],
    borderWidth: ['responsive', 'hover', 'focus', 'active'],
    borderStyles: ['responsive', 'hover', 'focus', 'active'],
    borderColor: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: []
}
