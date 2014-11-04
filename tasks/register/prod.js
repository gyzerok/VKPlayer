'use strict';

module.exports = function (grunt) {
    grunt.registerTask('prod', [
        'clean:tmp',
        'install',
        'copy:prod',
        'nodewebkit:linux'
    ]);
};