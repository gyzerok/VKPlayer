'use strict';

module.exports = function (grunt) {
    grunt.registerTask('install', [
        'bower',
        'npm'
    ]);
};