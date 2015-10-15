define('jiggawatt/tests/routes/scenarios/scenario.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/scenarios');
  QUnit.test('routes/scenarios/scenario.js should pass jshint', function(assert) { 
    assert.ok(false, 'routes/scenarios/scenario.js should pass jshint.\nroutes/scenarios/scenario.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/scenarios/scenario.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
  });

});