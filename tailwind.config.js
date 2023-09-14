/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'components/**/*.{js,ts,vue}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'composables/**/*.{js,ts}',
    'plugins/**/*.{js,ts}',
    'App.{js,ts,vue}',
    'app.{js,ts,vue}',
    'error.vue'
  ],
  theme: {
    extend: {
      dropShadow:{
        glow:'2px 4px 6px black'
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        glow: '0 10px 80px -15px  rgb(247 209 76)'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
      },
    }
  },
  plugins: [
  ]
}
