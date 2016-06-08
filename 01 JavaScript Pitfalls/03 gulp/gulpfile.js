var gulp = require("gulp");

gulp.task("copy", function () {
    gulp.src("*.js").pipe(gulp.dest("./lib"));
});
