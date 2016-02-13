// Load modules
var gulp = require('gulp');
var gutil = require('gulp-util');
var debug = require('gulp-debug');
var inject = require('gulp-inject');
var tsc = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var tscProject = tsc.createProject('tsconfig.json');
var connect = require('gulp-connect');
var open = require('gulp-open');
var nodemon = require('gulp-nodemon');
var livereload = require('gulp-livereload');

// Declare file sources
var TypeScriptSources = [
    './server/**/*.ts',
    './typings/**/*.ts'];
    
// This task Transpiles TypeScript to JavaScript
gulp.task('transpile', function () {
    gutil.log("transpiling...");

    var tsResult = gulp.src(TypeScriptSources)
        .pipe(sourcemaps.init())
        .pipe(tsc(tscProject))
        .on('error', gutil.log);

    tsResult.dts.pipe(gulp.dest('./server/'));
    return tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./server/'))
        .on('error', gutil.log)
        .pipe(connect.reload());

});

gulp.task("develop", function(){
    livereload.listen();
    nodemon({ script: 'server.js'
          , ext: 'html ts css ejs'
          , tasks: ['transpile'] })
    .on('restart', function () {
        //gulp.src(__filename)
           //.pipe(livereload());
        gutil.log('restarted!');
    });
});

// This task opens Chrome within the local connect server
gulp.task('open', function () {
    gulp.src(__filename)
        .pipe(open({uri: 'http://localhost:3000', app: 'Chrome'}));
});

// This is the default task that runs everything
gulp.task("default", ["transpile", "develop", "open"]);