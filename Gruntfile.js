module.exports = function(grunt){
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
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> v<%= pkg.version %> */\n'
            },
            my_target: {
                files: {
                    "build/<%= pkg.name %>/js/<%= pkg.name %>.min.js": ['src/js/<%= pkg.name %>.js']
                }
            }
        },
        cssmin: {
            options: {
                banner: '/*! <%= pkg.name %> v<%= pkg.version %> */'
            },
//            combine: {
//                files: {
//                    'path/to/output.css': ['path/to/input_one.css', 'path/to/input_two.css']
//                }
//            },
            minify: {
                expand: true,
                cwd: 'src/css/',
//                src: ['*.css', '!*.min.css'],
                src: ['<%= pkg.name %>.css'],
                dest: 'build/<%= pkg.name %>/css/',
                ext: '.min.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('verify', ['jshint']);
    grunt.registerTask('build', ['uglify', 'cssmin']);

};
