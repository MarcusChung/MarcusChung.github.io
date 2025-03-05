// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

const URL = 'https://MarcusChung.github.io';
// https://astro.build/config
export default defineConfig({
    site: URL,
    vite: {
        plugins: [tailwindcss()],
    },
    // define: {
    //     'import.meta.env.FMP_API_KEY': process.env.FMP_API_KEY,
    // },
});
