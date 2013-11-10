module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
	// the banner is inserted at the top of the output
	banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      build: {
	src: 'dist/scripts.js',
	dest: 'dist/scripts.min.js'
      }
    },
    concat: {
      dist: {
        src: ['src/vendor/*.js','src/*.js'],
        dest: 'dist/scripts.js'
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('default',['concat','uglify']);
}
