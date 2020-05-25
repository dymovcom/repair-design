const {src, dest, watch, series}  = require("gulp");
const browserSync                 = require('browser-sync').create();
const cleanCSS                    = require('gulp-clean-css');
const rename                      = require("gulp-rename");
const sass                        = require("gulp-sass");
const autoprefixer                = require('gulp-autoprefixer');
const minify                      = require('gulp-minify');
const htmlmin                     = require('gulp-htmlmin');
const tinypng                     = require('gulp-tinypng-compress');


// Static server
function bs() {
  serveSass();
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  watch("./*.html").on('change', browserSync.reload);
  watch("./sass/**/*.sass", serveSass);
  watch("./sass/**/*.scss", serveSass);
  watch("js/*.js").on('change', browserSync.reload);
};

function serveSass() {
  return src("./sass/**/*.sass", "./sass/**/*.scss")
    .pipe(sass())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(dest("./css"))
    .pipe(browserSync.stream());
};

function buildCSS(done) {
  src('css/**/**.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(dest("dist/css/"));
  done();
}

function buildJS(done) {
  src('js/**/**.js')
  .pipe(minify({
    noSource: true,
    ext:{
        min:'.js'
    },
    // exclude: ['tasks'],
    ignoreFiles: ['*min.js']
  }))
    .pipe(dest("dist/js/"));
  done();
}

function htmlMin(done) {
  src('**.html')
    .pipe(htmlmin({collapseWhitespace: true }))
    .pipe(dest("dist/"));
  done();
}

function php(done) {
  src(['**.php'])
    .pipe(dest('dist/'));
  src('phpmailer/**/**')
    .pipe(dest('dist/phpmailer/'));
  done();
}

function fonts(done) {
  src('fonts/**/**')
    .pipe(dest('dist/fonts/'));
  done();
}

// function imagemin(done) {
//   src('img/**/*.{png,jpg,jpeg}')
//     .pipe(tinypng({key: 'psTnYvCNQyLSyXZ4J84MlBnQk204XKYc'}))
//     .pipe(dest('dist/img/'));
//   src('img/**/*.svg')
//     .pipe(dest('dist/img/'));  
//   done();
// }

exports.serve = bs;
exports.build = series(buildCSS, buildJS, htmlMin, php, fonts);