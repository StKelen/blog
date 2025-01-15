import type { Config } from 'tailwindcss';
import baseConfig from '@repo/tailwind';

export default {
  content: ['src/**/*.{ts,tsx}'],
  presets: [baseConfig],
} satisfies Config;
