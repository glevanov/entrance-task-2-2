const gulp = require('gulp');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');

gulp.task('images', function(){
  return gulp.src(['app/**/*.+(png|jpg|gif|svg)', '!app/guide/preview/*'])
    .pipe(imagemin())
    .pipe(rename({dirname: ''}))
    .pipe(gulp.dest('img'))
});

gulp.task('styles', function() {
  return gulp.src('app/blocks/**/*.+(css)')
    .pipe(autoprefixer())
    .pipe(concat('main.css'))
    .pipe(cssnano())
    .pipe(gulp.dest('./'))
});

gulp.task('watch', function() {
  gulp.watch('app/blocks/**/*.+(css)', ['styles'])
});
