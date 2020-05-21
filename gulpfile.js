var gulp = require('gulp'),
  iconfont = require('gulp-iconfont'),
  iconfontCss = require('gulp-iconfont-css'),
  svgmin = require('gulp-svgmin'),
  sass = require('gulp-sass');

var browserSync = require('browser-sync').create();
var runTimestamp = Math.round(Date.now() / 1000);

// SVG optimization
function svgomg() {
  return gulp.src('assets/svg/*.svg')
    .pipe(svgmin({
      plugins: [{
          removeTitle: true
        },
        {
          removeRasterImages: true
        },
        {
          sortAttrs: true
        }
        //{ removeStyleElement: true }
      ]
    }))
    .pipe(gulp.dest('assets/svg'));
};


//icon fonts
gulp.task('fonticons', function (done) {
  gulp.src(['app/assets/svg/*.svg'])
    .pipe(iconfontCss({
      fontName: 'fonticons',
      cssClass: 'font',
      path: 'app/assets/config/icon-font-config.scss', // where is template for updateing sass file
      targetPath: '../../assets/scss/base/_icon-font.scss', //where to update sass file
      fontPath: '../../assets/icons/' // where are fonts exported
    }))
    .pipe(iconfont({
      fontName: 'fonticons',
      prependUnicode: true, // recommended option
      formats: ['woff2', 'woff', 'ttf'], // The font file formats that will be created
      normalize: true,
      centerHorizontally: true
    }))
    .on('glyphs', function (glyphs, options) {
      // CSS templating, e.g.
      console.log(glyphs, options);
    })
    .pipe(gulp.dest('app/assets/icons/'));
    done();
});

function scss() {
  return gulp.src('app/assets/scss/**/*.scss')
  .pipe(sass().on('error',sass.logError))
  .pipe(gulp.dest('app'))
  .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
      server: {
         baseDir: "./app",
         index: "/index.html"
      }
  });
  gulp.watch('app/assets/scss/**/*.scss', scss)
  gulp.watch('app/*.html').on('change', browserSync.reload);
  gulp.watch('app/assets/js/**/*.js').on('change', browserSync.reload);
  gulp.watch('app/assets/svg/*.svg', svgomg);
}

exports.scss = scss;
exports.watch = watch;