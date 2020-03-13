"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var csso = require("gulp-csso");
var htmlmin = require("gulp-htmlmin");
var autoprefixer = require("gulp-autoprefixer");
var uglify = require('gulp-uglify');

const AUTOPREFIXER_BROWSERS = [
  "ie >= 10",
  "ie_mob >= 10",
  "ff >= 30",
  "chrome >= 34",
  "safari >= 7",
  "opera >= 23",
  "ios >= 7",
  "android >= 4.4",
  "bb >= 10"
];

gulp.task("styles", function() {
  return gulp
    .src("./src/scss/*.scss")
    .pipe(
      sass({
        outputStyle: "nested",
        precision: 10,
        includePaths: ["."],
        onError: console.error.bind(console, "Sass error:")
      })
    )
    .pipe(autoprefixer({ browsers: AUTOPREFIXER_BROWSERS }))
    .pipe(csso())
    .pipe(gulp.dest("./dist/css"));
});

gulp.task("html", function() {
  return gulp
    .src(["./src/index.html"])
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true
      })
    )
    .pipe(gulp.dest("./dist"));
});

gulp.task('scripts', function() {
  return gulp.src('./src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
});

gulp.task("build", gulp.series("styles", "html", "scripts"));