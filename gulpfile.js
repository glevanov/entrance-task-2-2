const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('images', function(){
  return gulp.src(['app/**/*.+(png|jpg|gif|svg)', '!app/guide/preview/*'])
    .pipe(imagemin())
    .pipe(rename({dirname: ''}))
    .pipe(gulp.dest('img'))
});

gulp.task('styles', function() {
  return gulp.src('app/scss/**/*.+(scss)')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./'))
});
