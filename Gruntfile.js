module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                banner: '/*! <%= pkg.name %> v<%= pkg.version %> */\n'
            },
            all: [
                'src/js/*.js'
            ]
        },

        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'src/js', src: ['jAutochecklist.js'], dest: 'build/jautochecklist/js/'},
                    {expand: true, cwd: 'src/css', src: ['images/*'], dest: 'build/jautochecklist/css/'}
                ]
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> v<%= pkg.version %> */\n'
            },
            my_target: {
                files: {
                    "build/<%= pkg.name %>/js/jAutochecklist.min.js": ['src/js/*.js']
                }
            }
        },
        cssmin: {
            options: {
                banner: '/*! <%= pkg.name %> v<%= pkg.version %> */'
            },
            minify: {
                expand: true,
                cwd: 'src/css/',
//                src: ['*.css', '!*.min.css'],
                src: ['jAutochecklist.css'],
                dest: 'build/<%= pkg.name %>/css/',
                ext: '.min.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('verify', ['jshint']);
    grunt.registerTask('build', ['copy', 'uglify', 'cssmin']);
};
