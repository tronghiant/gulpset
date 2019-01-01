const gulpset = require('./gulpset/gulpset');

gulpset.gulp.task(
  'default',
  gulpset.gulp.series(
    'clean',
    gulpset.gulp.parallel('copy', 'stylelint', 'eslint', 'imagemin', 'sass', 'scripts', 'jsx-static', 'styleguide'),
    'watch',
    'browsersync'
  )
);

gulpset.gulp.task(
  'production',
  gulpset.gulp.series(
    'clean',
    gulpset.gulp.parallel(
      'copy',
      'stylelint',
      'eslint',
      'imagemin',
      'sass-minify',
      'scripts-minify',
      'jsx-static:prod',
      'styleguide:prod'
    )
  )
);
