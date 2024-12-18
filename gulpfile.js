const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('imagemin', () => {
 return gulp.src('www/source/images/*').pipe(imagemin()).pipe(gulp.dest('www/build/images/waifus'));
});

gulp.task('default', gulp.series('imagemin'));
