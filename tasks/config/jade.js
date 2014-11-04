'use strict';

module.exports = function(grunt) {

    grunt.config.set('jade', {
        dev: {
            files: [{
                expand: true,
                cwd: 'src',
                src: ['**/*.jade'],
                dest: '.tmp',
                ext: '.html'
            }]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jade');
};