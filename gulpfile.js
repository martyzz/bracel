const gulp = require("gulp");
const browserify = require("gulp-browserify");
const rename = require("gulp-rename");
const minify = require("gulp-minify");

const package = require("./package.json");

gulp.task("build", () => {
  return gulp.src("./src/bracel.js")
    .pipe(browserify({
      insertGlobals: false,
      debug: false,
      transform: ["babelify"]
    }))
    .pipe(rename(`bracel-${package.version}.js`))
    .pipe(minify({
      ext: {
        src: ".js",
        min: ".min.js"
      }
    }))
    .pipe(gulp.dest("./build/"));
});

gulp.task('default', ['build']);