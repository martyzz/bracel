const gulp = require("gulp");
const browserify = require("gulp-browserify");
const rename = require("gulp-rename");
const minify = require("gulp-minify");

gulp.task("build", () => {
  return gulp.src("./src/bracel.js")
    .pipe(browserify({
      insertGlobals: false,
      debug: false,
      transform: ["babelify"]
    }))
    .pipe(rename(`bracel.js`))
    .pipe(minify({
      ext: {
        src: ".js",
        min: ".min.js"
      }
    }))
    .pipe(gulp.dest("./build/"));
});

gulp.task('default', ['build']);