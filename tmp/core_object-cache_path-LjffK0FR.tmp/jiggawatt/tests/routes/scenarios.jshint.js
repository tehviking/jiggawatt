define('jiggawatt/tests/routes/scenarios.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/scenarios.js should pass jshint', function(assert) { 
    assert.ok(false, 'routes/scenarios.js should pass jshint.\nroutes/scenarios.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/scenarios.js: line 2, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/scenarios.js: line 3, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/scenarios.js: line 5, col 1, \'export\' is only available in ES6 (use esnext option).\nroutes/scenarios.js: line 6, col 3, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\n\n5 errors'); 
  });

});