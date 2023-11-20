import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
    base: './',  // forces relative imports in index.html, only way to import in gh-pages
    build: {
        outDir: 'docs',
    },
    plugins: [vue(), svgLoader({ defaultImport: 'component' })],
    publicDir: './src/public',
    resolve: {
        alias: {
            '@/assets': './src/assets',
        },
    },
})
