const gulp = require("gulp");
const babel = require("gulp-babel");

gulp.task("js", () =>
  gulp
    .src("src/app.js")
    .pipe(
      babel({
        presets: ["@babel/env"]
      })
    )
    .pipe(gulp.dest("build"))
);
