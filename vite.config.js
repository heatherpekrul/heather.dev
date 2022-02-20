import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
const pathSrc = path.resolve(__dirname, './src');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use '${pathSrc}/assets/settings.scss';`
      }
    }
  }
});
