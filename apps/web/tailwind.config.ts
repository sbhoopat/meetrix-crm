import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#05060B',
        slate: '#0F172A',
        neon: {
          orange: '#FF8A3C',
          cyan: '#2EE4FF',
          purple: '#A855F7'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        neon: '0 0 20px rgba(46, 228, 255, 0.45)'
      }
    }
  },
  plugins: []
} satisfies Config;

