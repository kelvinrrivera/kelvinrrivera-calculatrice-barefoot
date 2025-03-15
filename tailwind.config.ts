/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          'barefoot-blue': '#3a7bd5',
          'barefoot-dark': '#2d62aa',
          'natural-brown': '#8B7355',
          'sand-beige': '#F5F5DC',
        },
        fontFamily: {
          sans: ['Poppins', 'sans-serif'],
        },
        animation: {
          'float': 'float 6s ease-in-out infinite',
          'fade-in': 'fadeIn 0.5s ease-out forwards',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
          },
          fadeIn: {
            'from': { opacity: 0, transform: 'translateY(20px)' },
            'to': { opacity: 1, transform: 'translateY(0)' },
          },
        },
      },
    },
    plugins: [],
  }
  