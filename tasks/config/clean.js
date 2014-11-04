'use strict';

module.exports = function (grunt) {

    grunt.config.set('clean', {
        tmp: ['.tmp'],
        modules: ['./src/node_modules']
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
};