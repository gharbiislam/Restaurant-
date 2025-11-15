/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
     keyframes: {
        float: {
          '0%, 100%': { transform: 'rotate(var(--tw-rotate)) scale(var(--tw-scale-x)) translateY(0)' },
          '50%': { transform: 'rotate(var(--tw-rotate)) scale(var(--tw-scale-x)) translateY(-10%)' },
        },
      },
      animation: {
        float: 'float 4s  infinite',
      },
      fontFamily: {
        outfit: ['Inter', 'sans-serif'],
      },
      colors: {
        black: '#0E0E0E',
        black_60: 'rgba(14, 14, 14, 0.6)',
        black_5: 'rgba(14, 14, 14, 0.05)',
        white: '#ffffff',
        white_60: 'rgba(255, 255, 255, 0.6)',
        white_20: 'rgba(255, 255, 255, 0.2)',
        bg_white: '#F4F4F4',
      },
      fontSize: {
 logo: ['40px', { fontWeight: '1000', fontStyle: 'italic' }],
        h1: ['260px', { fontWeight: '600', fontStyle: 'italic' }],
        h2: ['60px', { fontWeight: '600', fontStyle: 'italic' }],
        h3: ['40px', { fontWeight: '600', fontStyle: 'italic' }],
        h4: ['28px', { fontWeight: '600', fontStyle: 'italic' }],
        h5: ['20px', { fontWeight: '600', fontStyle: 'italic' }],
        body: ['16px', { fontWeight: '400', fontStyle: 'italic' }],
        caption: ['13px', { fontWeight: '400', fontStyle: 'italic' }],
        bubble: ['18px', { fontWeight: '500', fontStyle: 'italic' }],

        //(md) 
        
        
        'h1-md': ['120px', { fontWeight: '600', fontStyle: 'italic' }],
        'h2-md': ['40px', { fontWeight: '600', fontStyle: 'italic' }],
        'h3-md': ['38px', { fontWeight: '600', fontStyle: 'italic' }],
        'h4-md': ['22px', { fontWeight: '600', fontStyle: 'italic' }],
        'h5-md': ['16px', { fontWeight: '600', fontStyle: 'italic' }],

        //(sm)
        'h1-sm': ['80px', { fontWeight: '600', fontStyle: 'italic' }],
        'h2-sm': ['30px', { fontWeight: '600', fontStyle: 'italic' }],
        'h3-sm': ['22px', { fontWeight: '600', fontStyle: 'italic' }],
        'h4-sm': ['16px', { fontWeight: '600', fontStyle: 'italic' }],
        'h5-sm': ['14px', { fontWeight: '600', fontStyle: 'italic' }],
      
      },
    },
  },
  plugins: [],
}
