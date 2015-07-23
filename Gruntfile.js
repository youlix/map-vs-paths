module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  var pkg = grunt.file.readJSON('package.json');

  grunt.initConfig({
    pkg: pkg,
    clean: {
      src: ['dist/']
    },
    copy:{
      js:{          
        files: [{
          expand: true,
          flatten: true,
          src: ['bower_components/requirejs/require.js'],
          dest: 'dist/bower_components/requirejs/',
          filter: 'isFile'
        }]
      }
    },
    requirejs: {
      compile: {
        options: {
          mainConfigFile: 'config.js',
          optimize: 'none',
          include: ['main', 'config'],
          out: 'dist/main.js'
        }
      }
    },
    processhtml: {
      dist: {
        files: {
          'dist/index.html': ['index.html']
        }
      }
    },
  });

  // Default task.
  grunt.registerTask('default', [
    'clean',
    'requirejs',
    'copy:js',
    'processhtml'
  ]);
};
