define('jiggawatt/tests/routes/scenarios.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/scenarios.js should pass jshint', function(assert) { 
    assert.ok(false, 'routes/scenarios.js should pass jshint.\nroutes/scenarios.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/scenarios.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
  });

});