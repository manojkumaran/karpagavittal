let gulp      = require('gulp');
let spritesmith = require('gulp.spritesmith');
let htmlPartial = require('gulp-html-partial');
let sass = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');

let htmlsrc = "src/*.html";
let sassrc = "src/scss/*.scss";
let spriteSrc = "./src/img";
let cssrc = "css/temp/*.css";
let jssrc = "/src/*.js";
let jsdest = "/js";

gulp.task('combine-js', function(){
		return gulp.src([jssrc])
						.pipe(concat('combined.js'))
						.pipe(gulp.dest(jsdest))
});

gulp.task('html', function(){
  gulp.src([htmlsrc])
          .pipe(htmlPartial({
            basePath: 'src/partials/'
          }))
          .pipe(gulp.dest(''));
});

gulp.task('sass',  function(){
    return gulp.src(sassrc)
                  .pipe(sass().on('error', sass.logError))
                  .pipe(gulp.dest('css'));
});

gulp.task('minify-css', function(){
    return gulp.src(cssrc)
                  .pipe(cleanCSS())
                  .pipe(gulp.dest('css'))

});

//    gulp.watch('css/*.css', ['minify-css']);
gulp.task('watch', function(){
    gulp.watch('src/*.html',['sass']);
    gulp.watch('src/scss/*.scss',['sass']);
});

gulp.task('default', ['watch']);