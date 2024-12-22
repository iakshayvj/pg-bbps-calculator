/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F1FF',
          100: '#CCE4FF',
          500: '#1F56C3',
          600: '#1A47A3',
          700: '#153B85',
        },
        success: {
          50: '#ECFDF5',
          500: '#22C55E',
          600: '#16A34A',
        }
      },
      fontFamily: {
        sans: ['Matter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
};