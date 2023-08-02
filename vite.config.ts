import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import Pages from 'vite-plugin-pages';
import mix from 'vite-plugin-mix';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Pages({ dirs: 'src/pages' }),
    mix({
      handler: './api.js',
    }),
  ],
  // server: {
  //   cors: false,
  //   open: true,
  //   origin: '*',
  //   proxy: {
  //     '/api': {
  //       target: 'https://api.imagekit.io/v1',
  //       changeOrigin: true,
  //       secure: false,
  //       ws: true,
  //     },
  //   },
  // },
});
