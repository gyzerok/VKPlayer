'use strict';

module.exports = function (grunt) {

    grunt.config.set('copy', {
        dev: {
            files: [
                { expand: true, cwd: './src', src: ['**/*.!(less)', '!*.json'], dest: '.tmp' },
                { flatten: true, src: './src/package.json', dest: '.tmp/package.json' }
            ]
        },
        prod: {
            files: [
                { expand: true, cwd: './src', src: ['**/*.!(less)', '!*.json'], dest: '.tmp' },
                { flatten: true, src: './src/prod.json', dest: '.tmp/package.json' }
            ]
        },
        updaterWin: {
            files: [
                { flatten: true, src: './updater/win/bspatch.exe', dest: 'builds/releases/<%= pkg.project %>/win/bspatch.exe' },
                { flatten: true, src: './updater/win/updater.cmd', dest: 'builds/releases/<%= pkg.project %>/win/updater.cmd' },
                { flatten: true, src: './updater/win/Quiet.exe', dest: 'builds/releases/<%= pkg.project %>/win/Quiet.exe' }
            ]
        },
        updaterLinux: {
            files: [
                { flatten: true, src: './updater/linux/updater.sh', dest: 'builds/releases/<%= pkg.project %>/linux32/updater.sh' },
                { flatten: true, src: './updater/linux/updater.sh', dest: 'builds/releases/<%= pkg.project %>/linux64/updater.sh' }
            ]
        },
        updaterMac: {
            files: [
                { flatten: true, src: './updater/mac/updater.sh', dest: 'builds/releases/<%= pkg.project %>/osx64/Isoplex.app/Contents/updater.sh' }
            ]
        },
        pluginsMac: {
            files: [
                { expand: true, cwd: './plugins', src: ['**/*'], dest: '.tmp/plugins' }
            ]
        },
        winIco: {
            files: [
                { flatten: true, src: './icons/nw.ico', dest: 'builds/releases/<%= pkg.project %>/win/isoplex.ico' }
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
};