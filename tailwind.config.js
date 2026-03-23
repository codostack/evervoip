/** @type {import('tailwindcss').Config} */  
module.exports = {  
  content: [  
    "./src/**/*.{js,jsx,ts,tsx}",  
  ],  
  theme: {  
    extend: {  
      animation: {  
        'fade-in-up': 'fadeInUp 1s ease-out',  
      },  
      keyframes: {  
        fadeInUp: {  
          '0%': { opacity: '0', transform: 'translateY(30px)' },  
          '100%': { opacity: '1', transform: 'translateY(0)' },  
        }  
      },
          fontFamily: {
      inter: ['Inter', 'system-ui', 'sans-serif'],
    }, 
    },  
  },  
  plugins: [],  
}  
