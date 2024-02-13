'use strict';

const { src, dest } = require('gulp');

const svgSprite = require('gulp-svg-sprite');

function svgSprites() {
  return src('./public/assets/icons/sprite/**/*.svg')
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: '../sprite.svg',
          },
        },
      })
    )
    .pipe(dest('./public/assets/icons/'));
}

exports.svgSprites = svgSprites;

exports.svg = svgSprites;
