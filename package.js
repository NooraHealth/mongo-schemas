Package.describe({
  name: 'noorahealth:mongo-schemas',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Noora Healths mongo schemas, including Curriculums, Lessons, and Modules'
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.1');
  api.use('ecmascript');
  api.mainModule('mongo-schemas.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('noorahealth:mongo-schemas');
  api.mainModule('mongo-schemas-tests.js');
});
