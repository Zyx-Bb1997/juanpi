//一、导入模块
let gulp = require('gulp');
let sass = require('gulp-sass');
let concat = require('gulp-concat');
let htmlmin = require('gulp-htmlmin');
let imagemin = require('gulp-imagemin');
let rename = require('gulp-rename');
let uglify = require('gulp-uglify');
let cssnano = require('gulp-cssnano');
//二、发布任务
//测试任务
// function test(){
//     console.log('test');
// }
//优化js任务
function fnJS(){
    return gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(rename({suffix : '.min'}))
        .pipe(gulp.dest('./dist/js'));
}
//优化css
function fnSass(){
    return gulp.src('./src/sass/*.scss')
        .pipe(sass())
        .pipe(cssnano())
        .pipe(rename({suffix : '.min'}))
        .pipe(gulp.dest('./dist/css'));
}

//优化图片
function fnImg(){
    return gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}
//复制index.html
function fnCopyIndex(){
    return gulp.src('./src/*.html')
        .pipe(gulp.dest('./dist/'));
}

//监听任务
function fnWatch(){
    gulp.watch('./src/js/*.js',fnJS);
    gulp.watch('./src/sass/*.scss',fnSass);
    gulp.watch('./src/*.html',fnCopyIndex);
    gulp.watch('./src/images',fnImg);
}
//三、导出任务
// exports.test = test;
exports.js = fnJS;
exports.css = fnSass;
exports.img = fnImg;
exports.copyIndex = fnCopyIndex;
exports.default = fnWatch;