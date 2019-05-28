var gulp = require('gulp'),
	iconfont         = require('gulp-iconfont'),
  iconfontCss      = require('gulp-iconfont-css'),
  svgmin           = require('gulp-svgmin'),
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

// SVG optimization
gulp.task('svgomg', function () {
	return gulp.src('assets/svg/*.svg')
		.pipe(svgmin({
			plugins: [
				{ removeTitle: true },
				{ removeRasterImages: true },
				{ sortAttrs: true }
				//{ removeStyleElement: true }
			]
		}))
		.pipe(gulp.dest('assets/svg'))
});


//icon fonts
gulp.task('fonticons', function(){
  gulp.src(['app/assets/svg/*.svg'])
    .pipe(iconfontCss({
      fontName: 'fonticons',
      cssClass: 'font',
      path: 'app/assets/config/icon-font-config.scss', // where is template for updateing sass file
      targetPath: '../../assets/sass/base/_icon-font.scss', //where to update sass file
			fontPath: '../../assets/icons/' // where are fonts exported
    }))
    .pipe(iconfont({
      fontName: 'fonticons',
			prependUnicode: true, // recommended option
      formats: ['woff2', 'woff', 'ttf'], // The font file formats that will be created
      normalize: true,
			centerHorizontally: true
    }))
    .on('glyphs', function(glyphs, options) {
			// CSS templating, e.g.
			console.log(glyphs, options);
		})
    .pipe(gulp.dest('app/assets/icons/'));
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
  //watch added or changed svg files to optimize them
	gulp.watch('assets/svg/*.svg', ['svgomg']);
});

// Build
gulp.task('build', ['sass']);