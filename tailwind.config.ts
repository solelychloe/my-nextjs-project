import type { Config } from 'tailwindcss';
import catppuccin from '@catppuccin/tailwindcss';

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    catppuccin({
      prefix: 'ctp'
    }),
  ],
}
export default config;
