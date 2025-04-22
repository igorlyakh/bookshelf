import { glob } from 'glob';
import { defineConfig } from 'vite';
import FullReload from 'vite-plugin-full-reload';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
  define: {
    _global: {},
  },
  root: 'src',
  build: {
    rollupOptions: {
      input: glob.sync('./src/*.html'),
    },
    outDir: '../dist',
  },
  plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
});
