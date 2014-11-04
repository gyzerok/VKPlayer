'use strict';

module.exports = function (grunt) {

    grunt.config.set('copy', {
        dev: {
            files: [
                { expand: true, cwd: './src', src: ['**/*.!(jade|sass)', '!*.json'], dest: '.tmp' },
                { flatten: true, src: './src/package.json', dest: '.tmp/package.json' }
            ]
        },
        prod: {
            files: [
                { expand: true, cwd: './src', src: ['**/*.!(jade|sass)', '!*.json'], dest: '.tmp' },
                { flatten: true, src: './src/prod.json', dest: '.tmp/package.json' }
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
};