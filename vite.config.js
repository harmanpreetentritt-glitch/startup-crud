import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    server: {
        host: '127.0.0.1',
        port: 5173,
        strictPort: true,
    },
    preview: {
        host: '127.0.0.1',
        port: 4173,
        strictPort: true,
    },
    plugins: [
        laravel({
            input: [
                'resources/css/college.css',
                'resources/js/college.js',
                'resources/css/college-detail.css',
                'resources/js/college-detail.js',
                'resources/css/login.css',
                'resources/js/login.js',
            ],
            refresh: true,
        }),
    ],
});
