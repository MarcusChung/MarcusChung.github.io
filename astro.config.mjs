// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

const URL = 'https://MarcusChung.github.io';
// https://astro.build/config
// https://marcuschung.github.io/MC-site/
export default defineConfig({
    site: URL,
    vite: {
        plugins: [tailwindcss()],
    },
});
