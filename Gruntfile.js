module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            main: {
                expand: true,
                cwd: 'src',
                src: '**',
                dest: 'dist/'
            }
        },
        concat: {
            css: {
                src: [
                    'bower_components/normalize-css/normalize.css',
                    'bower_components/bootstrap/dist/css/bootstrap.css',
                    'bower_components/bootstrap/dist/css/bootstrap-theme.css',
                    'src/main.css'
                ],
                dest: 'dist/css/main.css'
            },
            js: {
                src: [
                    'js/vendor/modernizr-2.8.3.min.js',
                    'bower_components/jquery/dist/jquery.js',
                    'src/js/main.js'
                ],
                dest: 'dist/js/main.js'
            }
        },
        //uglify: {
        //    options: {
        //        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        //    },
        //    build: {
        //        src: 'dist/css/main.css',
        //        dest: 'dist/css/main.min.css'
        //    }
        //},
        watch: {
            main: {
                files: ['src/**/*', '!src/css/main.css'],
                tasks: ['copy']
            },
            scripts: {
                files: [
                    '**/*.css',
                    '**/*.js',
                    '!dist/**'
                ],
                tasks: ['concat']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['copy']);
};