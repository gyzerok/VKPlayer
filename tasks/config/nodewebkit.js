var prodForceDownload = false;
var nwVersion = "0.10.5";

module.exports = function (grunt) {

    grunt.config.set('nodewebkit', {
        dev: {
            options: {
                buildDir: './builds/releases',
                cacheDir: './builds/cache',
                platforms: ['osx64', 'linux32', 'linux64', 'win'],
                macZip: false,
                zip: false,
                forceDownload: false,
                version: nwVersion
            },
            src: [ './.tmp/**/*' ]
        },

        linux: {
            options: {
                buildDir: './builds/releases',
                cacheDir: './builds/cache',
                platforms: ['linux32', 'linux64'],
                macZip: false,
                zip: false,
                forceDownload: prodForceDownload,
                version: nwVersion
            },
            src: [ './.tmp/**/*' ]
        },

        mac: {
            options: {
                buildDir: './builds/releases',
                cacheDir: './builds/cache',
                platforms: ['osx64'],
                macZip: false,
                zip: false,
                forceDownload: prodForceDownload,
                macIcns: './icons/nw.icns',
                version: nwVersion
            },
            src: [ './.tmp/**/*' ]
        },

        win: {
            options: {
                buildDir: './builds/releases',
                cacheDir: './builds/cache',
                platforms: ['win'],
                macZip: false,
                zip: false,
                forceDownload: prodForceDownload,
                version: nwVersion
            },
            src: [ './.tmp/**/*' ]
        }
    });

    grunt.loadNpmTasks('grunt-node-webkit-builder');
};