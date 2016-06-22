var NwBuilder = require('nwjs-builder');

module.exports = function(grunt) {

  grunt.registerMultiTask('nwjs', 'Grunt wrapper for nwjs-builder', function() {
    var done = this.async();

    // Run nwbuilder
    NwBuilder.commands.nwbuild(this.data.src, this.options(), function(err) {
      if(err) {
        grunt.fail.fatal(err);
      } else {
        grunt.log.ok('Task completed with great success.');
      }
      done();
    });

  });

};
