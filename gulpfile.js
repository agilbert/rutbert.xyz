var gulp        = require('gulp');
var harp        = require('harp');

gulp.task('serve', function () {
  harp.server(__dirname, {
    port: 9000
  }, function () {
    gulp.watch(["*.css", "*.sass", "*.scss", "*.less"]);
    gulp.watch(["*.html", "*.ejs", "*.jade", "*.js", "*.json", "*.md"]);
  })
});

gulp.task('default', ['serve']);
