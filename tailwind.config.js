module.exports = {
  content: ['./*.html'],
  theme: {

  screens:{
      'lg' : {'max' : '992px'},
      'md' : {'max' : '768px'},
      'sm': {'max' : '480px'}
  },

    container:{
        padding: '15px',
        center: true
    },

    extend: {

      colors:{
        pp: '#fff',
        black: '#333333',
        van: '#2489DA',
        border: '#B7E3FD',
        color_text: '#7A7A7A',
        bg_price: '#F6FCFF',
        color_menu:'#B7E3FD'
      },
      backgroundImage: {
        'hero-pattern': "url('/banner.png')",
      }
    },
  },
  plugins: [],
}
