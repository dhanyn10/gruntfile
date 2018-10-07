module.exports = function(grunt) {

    /**
     * register task 'run'
     * jalankan dengan command: grunt run
     */
    grunt.registerTask('run', function(){
        console.log('i am running');
    });

    /**
     * register task 'sleep'
     * jalankan dengan command: grunt sleep
     */
    grunt.registerTask('sleep', function(){
        console.log('i am sleeping');
    });
    /**
     * register task 'all'
     * jalankan dengan command: grunt all
     */
    grunt.registerTask('all', ['sleep', 'run']);

    /**
     * sumber tutorial:
     * https://www.youtube.com/watch?v=hQKqcmjEkqk&list=PL4cUxeGkcC9j85fkVyCzCMJDfteLtrl_y&index=3
     * --------------------------------------------
     */
  };