import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: "https://murtuzaalisurti.github.io",
    vite: {
        server: {
            hmr: {
                timeout: 10000
            }
        }
    }
});
