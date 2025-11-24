/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#05060B',
        slate: '#0F172A',
        neon: {
          orange: '#FF8A3C',
          cyan: '#2EE4FF',
          purple: '#C084FC'
        }
      }
    }
  },
  plugins: []
};

