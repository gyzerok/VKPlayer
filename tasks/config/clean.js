'use strict';

module.exports = function (grunt) {

    grunt.config.set('clean', {
        tmp: ['.tmp'],
        modules: ['./src/node_modules'],
        mac: ['builds/releases/Isoplex/osx/Isoplex.app/Contents/Resources/app.nw'],
        plugins: ['.tmp/plugins']
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
};