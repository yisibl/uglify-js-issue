const gulp = require('gulp')
// const uglify = require('gulp-uglify')
const composer = require('gulp-uglify/composer')

const uglifyjs_3_18 = require('uglifyjs-3.18.0')
const minify_3_18 = composer(uglifyjs_3_18, console)

const uglifyjs_3_19 = require('uglifyjs-3.19.0')
const minify_3_19 = composer(uglifyjs_3_19, console)

const opts = {
    output: {
        semicolons: false,
        max_line_len: 80,
    }
}

async function js() {
    // uglify-js 3.18.0
    gulp.src([
      './input/day.js',
    ])
      .pipe(minify_3_18(opts))
      .on('error', function (err) { log.error(err.toString()) })
      .pipe(gulp.dest('./build_3_18/'))

    // uglify-js 3.19.0
    gulp.src([
        './input/day.js',
      ])
      .pipe(minify_3_19(opts))
      .on('error', function (err) { log.error(err.toString()) })
      .pipe(gulp.dest('./build_3_19/'))
}

exports.default = gulp.series(js)
