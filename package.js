Package.describe({
  name: 'queuetue:slackbots',
  version: '0.1.0',
  // Brief, one-line summary of the package.
  summary: 'Slackbots NPM smart package for Meteor`',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/queuetue/meteor-slackbots',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "slackbots":"0.5.0"
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('slackbots.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('queuetue:slackbots');
  api.addFiles('slackbots-tests.js');
});
