Package.describe({
  name: 'nachoab:classjs',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/nachoab/classjs',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.addFiles('bower_components/class.js/src/class.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('nachoab:classjs');
  api.addFiles('nachoab:classjs-tests.js');
});
