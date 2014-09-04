module.exports = function(grunt) {
  grunt.initConfig({
    exec: {
      csslint: "csslint .",
      tidy: "find . -type d -name node_modules -prune -o -type f -name '*.html' -print -exec tidy -qe {} \\; 2>&1 | grep -v 'canvas>' | grep -v 'proprietary attribute'; true"
    }
  });

  grunt.loadNpmTasks("grunt-exec");

  grunt.registerTask("default", ["exec:csslint", "exec:tidy"]);
  grunt.registerTask("lint", ["exec:csslint", "exec:tidy"]);
  grunt.registerTask("csslint", ["exec:csslint"]);
  grunt.registerTask("tidy", ["exec:tidy"]);
};
