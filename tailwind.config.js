/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'regal-blue': '#243c5a',
        'text-color': '#475f7b',
        'primary-500':' #5a8dee',
        'background-color-input': '#fff',
        'border':"#dfe3e7",
        'background-color':'e0e3e8'
      },
    },
  },
  plugins: [],
}
