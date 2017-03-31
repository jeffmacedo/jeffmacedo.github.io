/**
 * Created by kirill on 3/31/17.
 */
var gulp       = require('gulp'),
    connect    = require('gulp-connect'),
    plumber    = require("gulp-plumber"),
    sourcemaps = require("gulp-sourcemaps"),
    uglify     = require("gulp-uglify"),
    concat     = require("gulp-concat");


gulp.task('connect', function () {
    connect.server({
        port : 8888
    });
});

gulp.task('default', ['connect']);
