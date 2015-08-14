var gulp    = require('gulp'),
    connect = require('gulp-connect'),
    connectLivereload = require('connect-livereload'),
    concat = require('gulp-concat');


var Vendor = './src';


var path = {
    'indexHtml': Vendor + '/index.html',
    'dustJson' : Vendor + '/dust-json.js',
    'initDust' : Vendor + '/init-dust.js'
};


/**
 * init gulp server
 * */
gulp.task('connect', function () {
    connect.server({
        root: '',
        port: 8000,
        livereload: true
    });
});

/**
 * livereload index*/
gulp.task('indexHtml', function(){
    gulp.src(path.indexHtml)
        .pipe(connect.reload())
});

/**
 * livereload dustJson*/
gulp.task('indexHtml', function(){
    gulp.src(path.dustJson)
        .pipe(connect.reload())
});

/**
 * livereload initDust*/
gulp.task('indexHtml', function(){
    gulp.src(path.initDust)
        .pipe(connect.reload())
});


/**
 * live reload*/
gulp.task('watch', [], function () {
    gulp.watch(path.indexHtml,['indexHtml']);
    gulp.watch(path.dustJson, ['dustJson']);
    gulp.watch(path.initDust, ['initDust']);

});


gulp.task('default',['connect', 'watch']);