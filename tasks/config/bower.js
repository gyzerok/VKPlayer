'use strict';

module.exports = function (grunt) {

    grunt.config.set('bower', {
        install: {
            options: {
                targetDir: './src/vendors',
                cleanTargetDir: true,
                cleanBowerDir: true,
                layout: 'byComponent'
            }
        }
    });

    grunt.loadNpmTasks('grunt-bower-task');
};