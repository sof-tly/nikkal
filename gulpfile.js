var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    cleanCSS = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps'),
    notify = require('gulp-notify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache')


gulp.task('minify-css', function() {
    return gulp.src('./css/*.css')
        .pipe(rename({ suffix: '.min'}))
        .pipe(sourcemaps.init())
        .pipe(cleanCSS({relativeTo: './', processImport: true }))
        .pipe(sourcemaps.write('../sourcemaps'))
        .pipe(gulp.dest('dist/css'))
        .pipe(livereload())
        .pipe(notify({ message: 'CSS minified. Site reloaded.', onLast: true }))
});

gulp.task('images', function() {
  return gulp.src('img/**')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/img'))
    .pipe(notify({ message: 'Images optimized' }));
});

gulp.task('reload', function() {
    return gulp.src('./index.html')
        .pipe(livereload())
        .pipe(notify({ message: 'Site reloaded.', onLast: true }))
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(['css/*.css'], ['minify-css'])
    gulp.watch(['index.html', '**/*.html'], ['reload'])
});
