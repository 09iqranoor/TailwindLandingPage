// tailwind.config.js
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      colors:{
        'primary': '#116466',
        
      },
      fontFamily:{
        'display':['poppins' , 'arial'],
        'body' : ['Inter' , 'sans-sarif']
       },
       animation: {
        "loop-scroll": 'loop-scroll  50s linear infinite',
        // marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        "loop-scroll": {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        // marquee2: {
        //   '0%': { transform: 'translateX(100%)' },
        //   '100%': { transform: 'translateX(0%)' },
        // },

      },
    },
  },
  plugins: [],
};
