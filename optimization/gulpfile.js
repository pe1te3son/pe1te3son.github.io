var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

///////////////
//// Paths set up
///////////////

//images
var imgSrc = './**/*.jpg'; //*src = source
var imgDist = './'; //*Dist = distribution

//css
var cssSrc = ['./**/*.css', '!./**/*.min.css' ];
var cssDist = './';

//js
var jsSrc = ['./js/**/*.js', '!./js/**/*.min.js'];
var jsDist = './js/';

var jsSrcViews = ['./views/js/**/*.js', '!./views/js/**/*.min.js'];
var jsDistViews = './views/js/';
///////////////
//// CSS
///////////////
gulp.task('css', function () {
	gulp.src(cssSrc)
		.pipe(cssmin())
		.pipe(rename({suffix: ".min"}))
		.pipe(gulp.dest(cssDist));
});

///////////////
//// Images
///////////////
gulp.task('resize', function () {
  gulp.src(imgSrc)
    .pipe(imageResize({
      imageMagick: true,
      width : 800,
      quality: 0.4,
      upscale : false

    }))
    .pipe(gulp.dest(imgDist));
});

///////////////
//// JS
///////////////

gulp.task('js', function() {
  return gulp.src(jsSrc)
    .pipe(uglify())
		.pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest(jsDist));
});

gulp.task('jsViews', function() {
  return gulp.src(jsSrcViews)
    .pipe(uglify())
		.pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest(jsDistViews));
});

gulp.task('default', ['css', 'js', 'jsViews', 'resize']);
