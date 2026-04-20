import { defineConfig } from 'vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  server: {
    proxy: {
      '/reqres-img': {
        target: 'https://reqres.in',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/reqres-img/, ''),
      },
    },
  },
});
