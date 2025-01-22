import type { Config } from 'tailwindcss';
import baseConfig from '@repo/tailwind';

export default {
  content: ['app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'ark-grey': '#fef9f1',
      },
    },
  },
  presets: [baseConfig],
} satisfies Config;
