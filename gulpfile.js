const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');

gulp.task('images', function(){
  return gulp.src(['app/**/*.+(png|jpg|gif|svg)', '!app/guide/preview/*'])
    .pipe(imagemin())
    .pipe(rename({dirname: ''}))
    .pipe(gulp.dest('img'))
});
