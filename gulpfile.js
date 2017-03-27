const gulp = require("gulp"),
      path = require('path'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      cssmin = require('gulp-cssmin'),
      typescript = require('gulp-typescript'),
      plumber = require('gulp-plumber'),
      rename = require("gulp-rename"),
      watch = require('gulp-watch'),
      uglify = require('gulp-uglify'),
      concat = require('gulp-concat'),
      del = require('del'),
      runSequence = require('run-sequence'),
      browserSync = require("browser-sync"),
      browserify = require('browserify'),
      source = require('vinyl-source-stream');

const FILE_NAME = 'social-share-count.js';

/**
 * File Path
 */
// src
const ROOT           = __dirname;
const SRC_PATH       = path.join(ROOT, './src');
const SCSS_SRC_PATH  = path.join(SRC_PATH, 'scss');
const SCSS_SRC_FILES = path.join(SCSS_SRC_PATH, './**/*.scss');
const TS_SRC_PATH    = path.join(SRC_PATH, 'ts');
const TS_SRC_FILES   = path.join(TS_SRC_PATH, './**/*.ts');
const JS_SRC_PATH    = path.join(SRC_PATH, 'js');
const JS_SRC_FILES   = path.join(JS_SRC_PATH, './**/*.js');

// docs
const DOCS_PATH      = path.join(ROOT, './docs');
const CSS_DOCS_PATH  = path.join(DOCS_PATH, 'css');
const CSS_DOCS_FILES = path.join(CSS_DOCS_PATH, './**/*.css');
const JS_DOCS_PATH   = path.join(DOCS_PATH, 'js');
const JS_DOCS_FILES  = path.join(JS_DOCS_PATH, './**/*.js');

// dist
const DIST_PATH = path.join(ROOT, './dist');

// Clean Task
gulp.task('css.docs.clean', function() {
  return del([CSS_DOCS_FILES], { force: true });
});

gulp.task('js.clean', function(cb) {
  return del([JS_SRC_FILES], { force: true }, cb);
});

gulp.task('js.docs.clean', function(cb) {
  return del([JS_DOCS_FILES], { force: true }, cb);
});


// Sass, CSS
gulp.task('sass', function() {
  return gulp.src(SCSS_SRC_FILES)
    .pipe(sass({
      outputStyle: 'expanded'
    })
    .on('error', sass.logError))
    .pipe(gulp.dest(CSS_DOCS_PATH));
});


// typescript
gulp.task('ts', function() {
  return browserify({
    entries: './src/ts/index.ts'
  }).plugin('tsify')
    .bundle()
    .pipe(source(FILE_NAME))
    .pipe(gulp.dest(JS_SRC_PATH));
});


// JavaScript
gulp.task('js.docs', function() {
  return gulp.src([JS_SRC_FILES])
    .pipe(gulp.dest(JS_DOCS_PATH));
});

gulp.task('js.min', function() {
  return gulp.src([
    JS_SRC_FILES,
    '!' + SRC_PATH + '/js/**/*min.js'
  ])
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(JS_SRC_PATH));
});

gulp.task('js.dist', function() {
  return gulp.src([JS_SRC_FILES])
    .pipe(gulp.dest(DIST_PATH));
});

function setHeader(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
}

// ファイル更新監視
gulp.task('watch', function() {
  // SCSS
  gulp.watch([SCSS_SRC_FILES], ['build.css']);

  // Typescript
  gulp.watch([TS_SRC_FILES], ['build.js']);
});

gulp.task('browser-sync', function() {
  browserSync.init({
    files: [JS_SRC_FILES],
    server: {
      baseDir: "./docs/",
      middleware: function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    }
  });

  browserSync.reload();
});

/**
 * Build Task
 **/
gulp.task('dist', function(callback) {
  return runSequence(
    'js.clean',
    'ts',
    'js.min',
    'js.dist',
    callback
  );
});

gulp.task('build.css', function(callback) {
  return runSequence(
    'css.docs.clean',
    'sass',
    callback
  );
});

gulp.task('build.js', function(callback) {
  return runSequence(
    'js.docs.clean',
    'ts',
    'js.min',
    'js.docs',
    callback
  );
});

/**
 * All Task
 **/
gulp.task('default', function(callback) {
  runSequence(
    'build.js',
    'build.css',
    'watch',
    'browser-sync',
    callback
  );
});
