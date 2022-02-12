# Gulp Boilerplate [![Build Status](https://travis-ci.org/cferdinandi/gulp-boilerplate.svg)](https://github.com/vaibhavr2107/Gulp-boilerplate)

A boilerplate for building web projects with [Gulp](https://gulpjs.com/). Uses Gulp 4.x.


**Features**

- Concatenate, minify, JavaScript.
- Compile, minify, autoprefix, Sass.
- Minify images and convert into next-gen image format WEBP.
- Watch for file changes, and automatically recompile build and reload webpages.

## Getting Started

### Dependencies

Make sure these are installed first.

- [Node.js](http://nodejs.org)
- [Gulp Command Line Utility](http://gulpjs.com) `npm install --global gulp-cli`

### Quick Start

1. In bash/terminal/command line, `cd` into your project directory.
2. Run `npm install` to install required files and dependencies.
3. When it's done installing, run one of the task runners to get going:
	- `gulp start` automatically compiles files and applies changes using [BrowserSync](https://browsersync.io/) when you make changes to your source files.


## Documentation

Add your source files to the appropriate `src` subdirectories. Gulp will process and and compile them into `dist`.

- JavaScript files in the `src/js` directory will be compiled to `dist/js`. Files in subdirectories under the `js` folder will be concatenated. For example, files in `js/detects` will compile into `detects.js`.
- Files in the `src/sass` directory will be compiled to `dist/css`.
- image files placed in the `src/images` directory will be optimized with imagemin and webp and compiled into `dist/images`.
