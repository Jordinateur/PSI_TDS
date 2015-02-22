var gulp = require('gulp'),
    gulp_concat = require('gulp-concat'),
    gulp_rename = require('gulp-rename'),
    gulp_uglify = require('gulp-uglify'),
    gulp_react = require('gulp-react'),
    gulp_sass = require('gulp-sass'),
    gulp_minify_css = require('gulp-minify-css'),
    gulp_livereload = require('gulp-livereload');

gulp.task('jsx', function(){
	return gulp.src(['components/*.jsx'])
		.pipe(gulp_react())
        .pipe(gulp_concat('components.js'))
		.pipe(gulp.dest('components'));
});

gulp.task('js', function(){
    return gulp.src(['js/MicroEvent.js','dispatcher/*.js','constants/*.js','actions/*.js','stores/*.js','components/components.js'])
        .pipe(gulp_uglify())
        .pipe(gulp_concat('main.js'))
        .pipe(gulp.dest('js'))
        .pipe(gulp_livereload());
});


gulp.task('css', function(){
    return gulp.src('scss/*.scss')
        .pipe(gulp_sass())
        .pipe(gulp_concat('main.css'))
        .pipe(gulp_minify_css())
        .pipe(gulp.dest('css'))
        .pipe(gulp_livereload());
});

gulp.task('watch',function(){
    gulp_livereload.listen();
    gulp.watch('scss/*.scss',['css']);
    gulp.watch('components/*.jsx',['jsx']);
    gulp.watch(['js/MicroEvent.js','dispatcher/*.js','constants/*.js','actions/*.js','stores/*.js','components/components.js'],['js']);
});
