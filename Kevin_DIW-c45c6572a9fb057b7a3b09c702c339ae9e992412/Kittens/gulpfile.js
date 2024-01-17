const { src, dest, series } = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const watch = require('gulp-watch');
const limpiarCSS = require('gulp-clean-css');
const limpiarJS = require('gulp-uglify');
const concat = require('gulp-concat');

//Compila todo application.scss a 'application.css'
function compilaSCSS(){
    return src('src/sass/*.scss')
    .pipe(sass())
    .pipe(dest('src/css'));
};

//Cualquier modificacion dentro de .scss modifica a 'src/css/application.css'
function watchSCSS(){
    watch('src/sass/*.scss',compilaSCSS);
};

//Todo lo de 'application.css' lo inserta a 'dist/css' y lo simplifica en 1 linea
function minimizaCSS(){
    return src('src/css/*.css')
    .pipe(limpiarCSS())
    .pipe(dest('dist/css'));
};

//Comprime todo 'src/js/*.js' a 'dist/js' 
function minimizaJS(){
    return src('src/js/*.js')
    .pipe(limpiarJS())
    .pipe(dest('dist/js'));
};
//Coge todo los .css y lo manda a 'disct/css' con el archivo llamado 'all.css'
function concatenaCSS(){
    return src('dist/css/*.css')
    .pipe(concat('all.css'))
    .pipe(dest('dist/css'));
};
// Coge todo los .js y lo manda a 'disct/js' con el archivo llamado 'all.js'
function concatenaJS(){
    return src('dist/js/*.js')
    .pipe(concat('all.js'))
    .pipe(dest('dist/js'));
};

//Tasca 1
exports.compilaSCSS = compilaSCSS;
//Tasca 2
exports.watchSCSS = watchSCSS;
//Tasca 3
exports.minimizaCSS = minimizaCSS;
//Tasca 4
exports.minimizaJS = minimizaJS;
//Tasca 5
exports.concatenaCSS = concatenaCSS;
//Para ordenar primero minimizaCSS y despues concatenaCSS
exports.build = series(concatenaCSS,minimizaCSS);
//Tasca 6
exports.concatenaJS = concatenaJS;
exports.build = series(concatenaJS,minimizaJS);
//Tasca 7
exports.kittens=series(compilaSCSS,minimizaCSS,minimizaJS,concatenaCSS,concatenaJS);