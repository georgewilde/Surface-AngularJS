module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            main: {
                expand: true,
                cwd: 'src',
                src: ['**', '!**/css/**', '!**/js/**', '**/js/directives/*.html', '!**/less/**', '**/js/vendor/*.js'],
                dest: 'dist/'
            }
        },
        less: {
            development: {
                files: {
                    'src/css/main.css': ['src/**/*.less', '!src/bootstrap/*.less']
                }
            }
        },
        concat: {
            options: {
                sourceMap: true
            },
            css: {
                src: [
                    'bower_components/normalize-css/normalize.css',
                    'src/css/reset.css',
                    'src/css/main.css'
                ],
                dest: 'dist/css/main.css'
            },
            js: {
                src: [
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/velocity/velocity.js',
                    'bower_components/velocity/velocity.ui.js',
                    'bower_components/angular/angular.js',
                    'bower_components/angular-resource/angular-resource.js',
                    'bower_components/angular-route/angular-route.js',
                    'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
                    'bower_components/angular-animate/angular-animate.js',
                    'bower_components/velocity-ui-angular/velocity.ui.angular.js',
                    'bower_components/angular-relative-date/dist/angular-relative-date.js',
                    'bower_components/angular-confirm-modal/angular-confirm.js',
                    'bower_components/underscore/underscore.js',
                    'bower_components/jquery-numerator/jquery-numerator.js',
                    'bower_components/satellizer/satellizer.js',
                    'src/js/vendor/angular-velocity.js',
                    'src/js/annotated.js'
                ],
                dest: 'dist/js/main.js'
            }
        },
        uglify: {
           options: {
               banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
               '<%= grunt.template.today("yyyy-mm-dd") %> */\n',
               sourceMap: true
           },
           my_target: {
                files: {
                    'dist/js/main.js': ['dist/js/main.js']
                }
           }
        },
        ngAnnotate: {
            app1: {
                files: {
                    'src/js/annotated.js': ['src/**/*.js', '!src/js/vendor/*.js']
                }
            }
        },
        'customize-bootstrap': {
            development: {
                options: {
                    bootstrapPath: 'bower_components/bootstrap/',
                    src: 'src/css/bootstrap/',
                    dest: 'src/css/',
                }
            },
        },
        watch: {
            main: {
                files: ['src/**/*', '!src/**/*.css', '!src/**/*.less', '!src/**/*.js'],
                tasks: ['copy']
            },
            css: {
                files: [
                    'src/**/*.css',
                    'src/**/*.less'
                ],
                tasks: ['customize-bootstrap', 'less', 'concat:css']
            },
            js: {
                files: [
                    'src/**/*.js'
                ],
                tasks: ['ngAnnotate', 'concat:js']
            }
        }
    });

    grunt.registerTask('default', [
        'release'
    ]);

    grunt.registerTask('release', [
        'copy',
        'less',
        'ngAnnotate',
        'concat',
        'uglify'
    ]);

    grunt.registerTask('prepare_develop', [
        'copy',
        'less',
        'ngAnnotate',
        'concat'
    ]);

    grunt.registerTask('watch', [
        'watch'
    ]);

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-customize-bootstrap');
};