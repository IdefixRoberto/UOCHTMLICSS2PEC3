/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        primary: '#ffbc00', 
        secondary: '#333',
        accent: '#f4f4f4',
        highlight: '#A4EBF3',
        muted: '#F0F4F8',
        'brand-green': '#00C851',
        'brand-orange': '#FF8800',
        "gray-500": "#5a5a5a",
        "red-500": "#ff6347",
        "blue-500": "#0000FF",
        "green-500": "#045423",
        "purple-500": "#9f7aea",
        "cirera-500": "#952F57",
        "cyan-500": "#00bcd4",
        'violet-500': "#d5d5ff",
        'gray-light-500': "#f2f2f2",
        'green-light-500' :'#d7e8d7'
        
      },

      fontFamily: {
        sans: ['Nunito', 'sans-serif'], 
        comic: ['Comic Neue', 'Times New Roman', 'serif'], 
        body: ['"Open Sans"', 'sans-serif'], 
        heading: ['"Roboto Slab"', 'serif'], 
        timi: ["Titillium Web",  'Comic Neue', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      screens: {
        'tablet': '991px',
        'phone': '600px',
        'desktop': '1200px',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      keyframes: {
        animacioArcoiris: {
          '0%': { color: '#ff6347' }, 
          '16.67%': { color: '#ff8800' }, 
          '33.33%': { color: '#ffbc00' }, 
          '50%': { color: '#045423' },
          '66.67%': { color: '#0000FF' },
          '83.33%': { color: '#4b0082' },
          '100%': { color: '#9f7aea' }, 
        },

        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        
        'blink-caret': {
          '0%': { border: 'transparent' },
          '10%': { border: '#000000' },
          '15%': { border: 'transparent' },
          '20%': { border: '#000000'},
          '25%': { border: 'transparent' },
          '30%': { border: '#000000' },
          '35%': { border: 'transparent' },
          '40%': { border: '#000000' },
          '45%': { border: 'transparent' },
          '50%': { border: '#000000', },
          '55%': { border: 'transparent' },
          '60%': { border: '#000000', },
          '65%': { border: 'transparent', },
          '70%': { border: '#000000', },
          '75%': { border: 'transparent',  },
          '80%': { border: '#000000',  },
          '85%': { border: 'transparent',  },
          '90%': { border: '#000000',  },
          '95%': { border: 'transparent' },
          '100%': { border: '#000000' },
        },
        
        deEsquerraADreta: {
          '0%': { transform: 'translateX(-50%)',  opacity: '0' },
          '10%': { transform: 'translateX(-45%)', color: '#ff8800', opacity: '0.1' },
          '20%': { transform: 'translateX(-40%)',  color: '#ff8800', opacity: '0.2' },
          '30%': { transform: 'translateX(-35%)', color: '#ffbc00', opacity: '0.3' },
          '40%': { transform: 'translateX(-30%)', color: '#ffbc00', opacity: '0.4' },
          '50%': { transform: 'translateX(-25%)', color: '#045423', opacity: '0.5' },
          '60%': { transform: 'translateX(-20%)', color: '#045423',opacity: '0.6' },
          '70%': { transform: 'translateX(-15%)', color: '#0000FF' ,opacity:  '0.7' },
          '80%': { transform: 'translateX(-10%)',color: '#0000FF' ,  opacity: '0.8' },
          '90%': { transform: 'translateX(-5%)', opacity: '0.9' },
          '100%': { transform: 'translateX(0%)', opacity: '1' },
        },
      },
      animation: {
        arcoiris1: 'animacioArcoiris 4s linear infinite  ',
        arcoiris2: 'animacioArcoiris 4.5s linear infinite ',
        arcoiris3: 'animacioArcoiris 5s linear infinite ',
        arcoiris4: 'animacioArcoiris 5.5s linear infinite ',
        arcoiris5: 'animacioArcoiris 6s linear infinite  ',
        arcoiris6: 'animacioArcoiris 6.5s linear infinite  ',
        arcoiris7: 'animacioArcoiris 7s linear infinite ',
        arcoiris8: 'animacioArcoiris 7.5s linear infinite  ',
        arcoiris9: 'animacioArcoiris 8s linear infinite ',

        deEsquerraADreta: 'deEsquerraADreta 2.2s linear',
        typing: '6s steps(30, end) forwards',
        'blink-caret': 'blink-caret .5s step-end  forwards',
      },
      width: {
        'vw7': '7vw',
        '20vw': '20vw',
        '30%': '30%',
        '90%' : '90%' 
      },
    },
  },
  plugins: [],
}
