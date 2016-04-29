Package.describe({
  name: 'noorahealth:mongo-schemas',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Noora Healths mongo schemas, including Curriculums, Lessons, and Modules',
  // URL to the Git repository containing the source code for this package.
  git: 'http://github.com/noorahealth/mongo-schemas',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.1');
  api.use('ecmascript');
  api.use('aldeed:simple-schema@1.5.3');
  api.use('aldeed:collection2@2.9.1');
  api.use('mdg:validation-error@0.1.0');
  api.use('ground:db@0.3.15');
  api.addFiles({
    'schemas/curriculums.coffee',
    'schemas/lessons.coffee',
    'schemas/modules.coffee',
    'schemas/offline_files.coffee'
  })

  api.mainModule('mongo-schemas.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('noorahealth:mongo-schemas');
  api.mainModule('mongo-schemas-tests.js');
});
