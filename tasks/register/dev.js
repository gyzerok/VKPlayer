'use strict';

module.exports = function (grunt) {
    grunt.registerTask('dev', [
        'clean:tmp',
        'copy:dev',
        'nodewebkit:dev'
    ]);
};