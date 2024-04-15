let mix = require('laravel-mix');

mix
    .js('src/scripts/main.js', 'dist/scripts')
    .css('src/styles/main.css', 'dist/styles')
    .browserSync({
        watch: true,
        server: true
    });