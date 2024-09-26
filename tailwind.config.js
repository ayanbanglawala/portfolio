/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'reactBlue': '0 10px 30px #0a4ee066',
        'expressYellow': '0 10px 30px #dce00a66',
        'mongoGreen': '0 10px 30px #0ae00a66',
        'bootPurple': '0 10px 30px #950ae066',
      },
    },
  },
  plugins: [],
}