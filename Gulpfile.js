var gulp 		    = require('gulp');
var browserSync = require("browser-sync").create();
var sass 		    = require('gulp-sass');


var paths = {
  scripts: 	['./js/**/*.js'],
  images: 	'./img/**/*.{gif,jpg,png,svg}',
  sass: 	'./styles/sass/**/*.scss',
  css: 		'./styles/css/'
};

// Copy all static images 
  
gulp.task('sass', function () {
  gulp.src(paths.sass)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest(paths.css));
});

gulp.task('serve', ['sass'], function(){
  browserSync.init({
        server: "./"
        //proxy: 'http://timsautoupholstery.com'
    });

    gulp.watch(paths.sass, ['sass']);
    //gulp.watch(['./*.php', paths.sass, paths.scripts]).on('change', browserSync.reload);
});

gulp.task('default', ['serve']);