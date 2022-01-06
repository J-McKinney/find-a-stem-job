const gulp = require("gulp");
const gap = require("gulp-append-prepend");

gulp.task("licenses", async function () {
  gulp
    .src("build/static/js/*chunk.js", { base: "./" })
    .pipe(
      gap.prependText(`/*!

=========================================================
* build/static/js/chunk.js
=========================================================

*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));
  gulp
    .src("build/static/js/runtime*.js", { base: "./" })
    .pipe(
      gap.prependText(`/*!

  =========================================================
  * build/static/js/runtime.js
  =========================================================

  */`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));
  gulp
    .src("build/index.html", { base: "./" })
    .pipe(
      gap.prependText(`<!--

=========================================================
* build/index.html
=========================================================

-->`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));
  gulp
    .src("build/static/css/*chunk.css", { base: "./" })
    .pipe(
      gap.prependText(`/*!

=========================================================
* build/static/css/chunk.css
=========================================================

*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));
  return;
});
