'use strict';

module.exports = function (grunt) {
    grunt.registerTask('npm', [
        'clean:modules',
        'exec'
    ]);
};