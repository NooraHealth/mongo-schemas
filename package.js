Package.describe({
  name: 'noorahealth:mongo-schemas',
  version: '0.0.2',
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
  api.use('dburles:collection-helpers@1.0.4');
  api.use('ground:db@0.3.15');

  api.addFiles([
    'schemas/curriculums/curriculums.js',
    'schemas/curriculums/lessons.js',
    'schemas/curriculums/modules.js',
    'schemas/offline_files.js',
    'schemas/conditions.js',
    'schemas/facilities.js',
  ]);
  api.addFiles('publications/publications.js', "server");
  
  api.mainModule('mongo-schemas.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('aldeed:simple-schema@1.5.3');
  api.use('aldeed:collection2@2.9.1');
  api.use('mdg:validation-error@0.1.0');
  api.use('ground:db@0.3.15');
  api.use('practicalmeteor:mocha');
  api.use('practicalmeteor:chai');
  api.use('dburles:collection-helpers@1.0.4');
  api.use('xolvio:cleaner');
  api.use('noorahealth:mongo-schemas');

  api.addFiles([
    'tests/curriculums/schema.js',
    'tests/curriculums/helpers.js',
    'tests/lessons/schema.js',
    'tests/lessons/helpers.js',
    'tests/modules/audio-validation.js',
    'tests/modules/correct-audio-validation.js',
    'tests/modules/helpers-tests.js',
    'tests/modules/image-validation.js',
    'tests/modules/title-validation.js',
    'tests/modules/type-validation.js',
    'tests/modules/video-validation.js',
    'tests/modules/options-validation.js'
  ], "server");

});
