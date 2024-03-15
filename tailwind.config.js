/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '90': '90%',
        '10': '10%'
      },
      colors: {
        'primary': '#1677ff',
        'lightGray':'#f5f5f5'
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}