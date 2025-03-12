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
});
