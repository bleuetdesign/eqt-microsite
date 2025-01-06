import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import motion from 'tailwindcss-motion';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors:
      {
        emerald: {
          50: '#D0DDD5',
          100: '#7FA791',
          200: '#8EB79F',
          // 900: '#13332F'
          // '50': '#f3faf7',
          // '100': '#d7f0e8',
          // '200': '#aee1d2',
          '300': '#7ecab6',
          '400': '#53ae99',
          '500': '#3a9280',
          '600': '#2c7568',
          '700': '#275e54',
          '800': '#234c46',
          '900': '#21403b',
          '950': '#13332f',
        },

      }
    }
  },

  plugins: [typography, forms, containerQueries, motion]
} satisfies Config;
