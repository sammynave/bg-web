/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var shim = require('flexi/lib/pod-templates-shim');

shim(EmberApp);

module.exports = function(defaults) {
  var env = EmberApp.env() || 'development';
  var fingerprintOptions = {
    enabled: true
  }
  var app = new EmberApp(defaults, {
    fingerprint: fingerprintOptions
  });

  return app.toTree();
};
