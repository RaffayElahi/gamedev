/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    // '*'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-header': 'linear-gradient(180deg, rgba(198,21,242,1) 0%, rgba(96,23,170,1) 66%)',
        'image-home-main-hero':"url('/UI design/1-page/background1.png')",
        'image-home-image-second-section': "url('/UI design/1-page/filled_games_bg.png')"
      },
    },
  },
  plugins: [],
}
