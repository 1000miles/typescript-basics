var gulp = require('gulp');
var browserify = require('browserify'); // Organize and bundle code
var source = require('vinyl-source-stream'); // Bundle stream with gulp
var tsify = require('tsify'); // Browserify plugin for compiling TypeScript
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

// copy-html first before default
gulp.task('default', gulp.series(gulp.parallel('copy-html'), function () {
  // Call browserify with tsify to pass same options to TypeScript compiler
  return browserify({
    basedir: '.',
    debug: true, // set to true emits source maps inside the bundled js file
    entries: ['src/main.ts'], // entry file
    cache: {},
    packageCache: {}
  })
  .plugin(tsify)
  .bundle()
  // source = alias for vinyl-source-stream
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('dist'))
}));
