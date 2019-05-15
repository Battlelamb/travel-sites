var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function() {
  console.log('Gulp task');
});

gulp.task('html', function() {
  console.log('HTML task');
});

gulp.task('styles', function() {
  console.log('CSS task');
});

gulp.task('watch', function() {
  watch('./app/index.html', function() {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
  });
});
