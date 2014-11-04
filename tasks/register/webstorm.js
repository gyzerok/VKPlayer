'use strict';

module.exports = function (grunt) {
    grunt.registerTask('webstorm', [
        'clean:tmp',
        'copy:dev'
    ]);
};