/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
    ],
    safelist:[
        'bg-green-400',
        'bg-green-600',
        'hover:bg-green-600',
        'bg-red-400',
        'bg-red-600',
        'hover:bg-red-600'
    ],
  theme: {
    extend: {},
  },
  plugins: [],
}

