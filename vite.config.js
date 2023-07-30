import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: [{
      /* VITE_DOCS # replacement value MUST BE absolute path ! */
      find: '@my-portfolio/styling', replacement: '/src/app.css'
    }]
  }
});
