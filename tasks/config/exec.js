'use strict';

module.exports = function (grunt) {

    grunt.config.set('exec', {
        install: {
            cmd: 'npm i',
            cwd: './src',
            stdout: false,
            stderr: true
        }
    });

    grunt.loadNpmTasks('grunt-exec');
};