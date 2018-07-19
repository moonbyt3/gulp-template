var gulp = require('gulp'),
	iconfont         = require('gulp-iconfont'),
	iconfontCss      = require('gulp-iconfont-css'),
	sass 						 = require('gulp-sass');

var browserSync = require('browser-sync').create();
var runTimestamp = Math.round(Date.now()/1000);

gulp.task('sass', function(){
  return gulp.src('app/assets/sass/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/assets/css'))
    .pipe(gulp.dest('dist/stylesheets/css'))
    .pipe(browserSync.stream());
});

//icon fonts
gulp.task('iconfont', function(){
  gulp.src(['app/assets/svg/*.svg'])
    .pipe(iconfontCss({
      fontName: 'font-icons',
      path: 'app/assets/sass/templates/_icon-font.scss', // where is template for updateing sass file
      targetPath: '../../assets/sass/base/_icon-font.scss', //where to update sass file
			fontPath: '../../assets/fonts/' // where are fonts exported
    }))
    .pipe(iconfont({
			fontName: 'font-icons',
      formats: ['ttf', 'eot', 'woff'], // The font file formats that will be created
      normalize: true,
			timestamp: runTimestamp
     }))
    .pipe(gulp.dest('app/assets/fonts/'));
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});


gulp.task('watch', [ 'sass', 'browserSync'], function (){
  gulp.watch('app/assets/sass/**/*.scss', ['sass']); 
  // Reloads the browser whenever HTML, JS or SCSS files change
  gulp.watch('app/*.html', browserSync.reload); 
  gulp.watch('app/assets/js/*.js', browserSync.reload);
  gulp.watch('app/assets/sass/**/.scss', browserSync.reload);
});