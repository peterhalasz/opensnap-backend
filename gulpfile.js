'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('default', function () {
  nodemon({ script: './app/app.js'})
    .on('restart', function () {
      console.log('App restarted!')
    })
})