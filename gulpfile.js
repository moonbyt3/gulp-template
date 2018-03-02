var gulp = require('gulp');

var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('app/assets/sass/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/assets/css'))
    .pipe(gulp.dest('dist/stylesheets/css'))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})

gulp.task('watch', ['sass', 'browserSync'], function (){
  gulp.watch('app/assets/sass/*.scss', ['sass']); 
  // Reloads the browser whenever HTML, JS or SCSS files change
  gulp.watch('app/*.html', browserSync.reload); 
  gulp.watch('app/assets/js/*.js', browserSync.reload);
  gulp.watch('app/assets/sass/*.scss', browserSync.reload);
});