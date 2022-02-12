const { src, dest, watch, series, parallel } = require("gulp");
const gulp = require("gulp");
const plugins = require("gulp-load-plugins")();
const sass = require("gulp-sass")(require("sass"));
const del = require("del");
const browserSync = require("browser-sync");
var autoprefixer = require("autoprefixer");
var cssnano = require("cssnano");
const imagemin = require("gulp-imagemin");


function style() {
  return src("src/scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(plugins.plumber())
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.postcss([autoprefixer(), cssnano()]))
    .pipe(plugins.concat("style.css"))
    .pipe(plugins.sourcemaps.write("."))
    .pipe(dest("./dist/css/"));
}

function script() {
  return src("src/script/*.js")
    .pipe(plugins.plumber())
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.babel({ presets: ["@babel/preset-env"] }))
    .pipe(plugins.uglify())
    .pipe(plugins.concat("script.js"))
    .pipe(plugins.sourcemaps.write("."))
    .pipe(dest("./dist/js/"));
}

const html = () => src("./src/*.html").pipe(dest("./dist"));
const clean = () => del(["./dist"]);

const image = () =>
  gulp
    .src("./src/images/*")
    .pipe(imagemin())
    .pipe(plugins.webp())
    .pipe(dest("./dist/images"));

function watchFiles() {
  browserSync.init({
    server: "./dist",
  });

  watch("./src/scss/*.scss", style).on("change", browserSync.reload);
  watch("./src/*.html", html).on("change", browserSync.reload);
  watch("./src/script/*.js", script).on("change", browserSync.reload);
  watch("./src/image/*", image).on("change", browserSync.reload);
}

const start = series(clean, parallel(html, style, script, image), watchFiles);

exports.style = style;
exports.script = script;
exports.image = image;
exports.html = html;
exports.clean = clean;
exports.start = start;
