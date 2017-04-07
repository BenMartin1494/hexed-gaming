var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

var sassPaths = [
  'hexed_gaming/static/bower_components/normalize.scss/sass',
  'hexed_gaming/static/bower_components/foundation-sites/scss',
  'hexed_gaming/static/bower_components/motion-ui/src'
];

gulp.task('sass', function() {
  return gulp.src('hexed_gaming/static/scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths,
      outputStyle: 'compressed'
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('hexed_gaming/static/css'));
});

gulp.task('default', ['sass'], function() {
  gulp.watch(['hexed_gaming/static/scss/**/*.scss'], ['sass']);
});
