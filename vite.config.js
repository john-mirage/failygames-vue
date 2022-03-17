import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@pages': resolve(__dirname, 'src/pages'),
            '@components': resolve(__dirname, 'src/components'),
            '@assets': resolve(__dirname, 'src/assets'),
        },
    },
})
