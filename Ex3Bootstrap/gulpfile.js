const {src, dest, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');

function compilaSCSS(){
    return src('src/scss/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(dest('src/dist'))
};

function watcher(){
    watch('src/scss/*.scss',compilaSCSS);
};

function concatenaCSS(){
    return src('src/dist/*.css')
    .pipe(concat('mains.css'))
    .pipe(dest('src/dist'));
};

exports.compilaSCSS = compilaSCSS;
exports.watcher = watcher;
exports.concatenaCSS = concatenaCSS;