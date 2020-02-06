var gulp = require('gulp');
var browserify = require('browserify'); // Organize and bundle code
var source = require('vinyl-source-stream'); // Bundle stream with gulp
var watchify = require('watchify');
var tsify = require('tsify'); // Browserify plugin for compiling TypeScript
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');

// var fancy_log = require('fancy-log'); // Logger with timestamp prefixes
// var ts = require('gulp-typescript');
// var tsProject = ts.createProject('tsconfig.json');

var paths = {
  // Fetch all html files in src dir
  pages: ['src/*.html']
}

gulp.task('copy-html', function () {
  return gulp.src(paths.pages)
    .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series(gulp.parallel('copy-html'), function () {
  return browserify({
      basedir: '.',
      debug: true,
      entries: ['src/main.ts'],
      cache: {},
      packageCache: {}
  })
  .plugin(tsify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(buffer())
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(uglify()) // minify bundle and sourcemap
  .pipe(sourcemaps.write('./')) // directory for bundle.js.map
  .pipe(gulp.dest('dist'));
}));

// Call watchify whenever the result of browserify has changed
// Assign this function to a variable to be callbed by gulp and watchify
// var watchedBrowserify = watchify(browserify({
//   basedir: '.',
//     debug: true, // set to true emits source maps inside the bundled js file
//     entries: ['src/main.ts'], // entry file
//     cache: {},
//     packageCache: {}
//   }).plugin(tsify));

// function bundle() {
//   return watchedBrowserify
//     .bundle()
//     .on('error', fancy_log)
//     .pipe(source('bundle.js'))
//     .pipe(gulp.dest('dist'));
// }

// gulp.task('default', gulp.series(gulp.parallel('copy-html'), bundle));
// watchedBrowserify.on('update', bundle);
// watchedBrowserify.on('log', fancy_log);

// copy-html first before default
// gulp.task('default', gulp.series(gulp.parallel('copy-html'), function () {
//   // Call browserify with tsify to pass same options to TypeScript compiler
//   return browserify({
//     basedir: '.',
//     debug: true, // set to true emits source maps inside the bundled js file
//     entries: ['src/main.ts'], // entry file
//     cache: {},
//     packageCache: {}
//   })
//   .plugin(tsify)
//   .bundle()
//   // source = alias for vinyl-source-stream
//   .pipe(source('bundle.js'))
//   .pipe(gulp.dest('dist'))
// }));
