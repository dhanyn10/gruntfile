module.exports = function(grunt) {

    //konfigurasi
    grunt.initConfig({
        concat: {
            js: {
                src: ['js/*.js'],
                dest: 'build/scripts.js'
            }
        }
    });

    //load pugins
    grunt.loadNpmTasks('grunt-contrib-concat');
  };