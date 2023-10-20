import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    
  ],
  theme: {
    colors: {
      primary: '#FFFFFF',
      main: '#10172A',
      secondary: '#64748B',
      addition: '#58dad9',
      dark: '#0B101E',
      background: '#F1F5F9',
    },
    screens: {
      mobile: '375px',
      tablet: '768px',
      laptop: '1024px',
    },
    extend: {
      boxShadow: {
        hovered_primary: 'inset 0px 0px 1rem 0px #58dad9, 0px 0px 1rem 0px #58dad9',
        hovered_default: 'inset 0px 0px 1rem 0px transparent, 0px 0px 1rem 0px #58dad9'
      },
    },
  },
  plugins: [],
};
export default config;
