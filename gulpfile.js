var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();

gulp.task(
  'vendor',
  gulp.series(() => {
    gulp.src(['./node_modules/reveal.js/css/**/*']).pipe(gulp.dest('./css'));
    gulp.src(['./node_modules/reveal.js/js/**/*']).pipe(gulp.dest('./js'));
    gulp.src(['./node_modules/reveal.js/plugin/**/*']).pipe(gulp.dest('./plugin'));
    gulp.src(['./node_modules/reveal.js/lib/**/*']).pipe(gulp.dest('./lib'));
  }),
);

gulp.task(
  'css:compile',
  gulp.series(() => {
    return gulp
      .src('./scss/**/*.scss')
      .pipe(
        sass
          .sync({
            outputStyle: 'expanded',
          })
          .on('error', sass.logError),
      )
      .pipe(gulp.dest('./css'));
  }),
);

gulp.task(
  'css:minify',
  gulp.series('css:compile', () => {
    return gulp
      .src(['./css/*.css', '!./css/*.min.css'])
      .pipe(cleanCSS())
      .pipe(
        rename({
          suffix: '.min',
        }),
      )
      .pipe(gulp.dest('./css'))
      .pipe(browserSync.stream());
  }),
);

// CSS
gulp.task('css', gulp.series('css:compile', 'css:minify'));

gulp.task(
  'js:minify',
  gulp.series(() => {
    return gulp
      .src(['./js/*.js', '!./js/*.min.js'])
      .pipe(uglify())
      .pipe(
        rename({
          suffix: '.min',
        }),
      )
      .pipe(gulp.dest('./js'))
      .pipe(browserSync.stream());
  }),
);

// JS
gulp.task('js', gulp.series('js:minify'));

// Browser Sync
gulp.task(
  'browserSync',
  gulp.series(() => {
    browserSync.init({
      server: {
        baseDir: './',
      },
    });
  }),
);

// Watch
gulp.task('watch', () => {
  gulp.watch('./scss/**/*.scss', gulp.series('css'));
  gulp.watch(['./js/*.js', '!./js/reveal*.js'], gulp.series('js'));
  gulp.watch('./*.html', browserSync.reload);
});

// Dev
gulp.task('dev', gulp.series('css', 'js', 'browserSync', 'watch'));

// Default
gulp.task('default', done => {
  gulp.series('vendor', 'css', 'js');
  done();
});
