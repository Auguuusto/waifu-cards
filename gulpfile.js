const imagemin = require('gulp-imagemin');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() {
 return gulp.src('./www/src/styles/*.scss')
 .pipe(sass({outputStyle: 'compressed'}))
 .pipe(gulp.dest('./www/dist/styles'));
}

function images() {
 return gulp.src('./www/src/images/**/*')
 .pipe(imagemin())
 .pipe(gulp.dest('./www/dist/images'));
}

exports.default = gulp.parallel(styles, images);
exports.watch = function() {
 gulp.watch('./www/src/styles/*.scss', gulp.parallel(styles))
}