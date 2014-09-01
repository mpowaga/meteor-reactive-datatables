Package.describe({
  summary: "Create state-aware reactive datatables",
  version: "1.0.0",
  git: "https://github.com/ephemer/meteor-reactive-datatables.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.use(['templating'], 'client');
  api.addFiles([
  	'jquery.dataTables.min.js',
  	'reactive-datatables.js',
  	'reactive-datatable-template.html',
  	'reactive-datatable-template.js',
  ], 'client');
});

/*Package.onTest(function(api) {
  api.use('tinytest');
  api.use('reactive-datatable');
  api.addFiles('reactive-datatable-tests.js');
});
*/