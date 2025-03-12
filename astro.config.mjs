// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

const URL = 'https://MarcusChung.github.io';
// https://astro.build/config
export default defineConfig({
    base: "/",
    site: URL,
    vite: {
        plugins: [tailwindcss()],
    },
     // Ensures static file paths are correct
    output: "static", // Ensures full static output for GitHub Pages
    // define: {
    //     'import.meta.env.FMP_API_KEY': process.env.FMP_API_KEY,
    // },
});
