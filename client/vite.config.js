import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // configure the JSX syntax
  esbuild: {
    // tell Vite.js how to process JSX code
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
  },

  // configure the handling of CSS files
  css: {
    modules: {
      // tell Vite.js to use camel case naming for CSS modules
      localsConvention: 'camelCaseOnly',
    },
  },

  server: {
    // port: 3000, // To run the app on port 3000
    open: true, // If we want to open the app once its started
    // https: true, // To run the app in https mode
  },
});
