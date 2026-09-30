import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
                'resources/css/college.css',
                'resources/js/college.js',
                'resources/css/college-form.css',
                'resources/js/college-form.js',
                'resources/css/college-detail.css',
                'resources/js/college-detail.js',
                'resources/css/college-course.css',
            ],
            refresh: true,
        }),
    ],
});
