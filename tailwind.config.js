/** @type {import('tailwindcss').Config} */
import windmill from '@windmill/react-ui';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [windmill],
};
