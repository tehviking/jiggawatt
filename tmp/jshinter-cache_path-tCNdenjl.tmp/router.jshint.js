QUnit.module('JSHint - .');
QUnit.test('router.js should pass jshint', function(assert) { 
  assert.ok(false, 'router.js should pass jshint.\nrouter.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nrouter.js: line 2, col 1, \'import\' is only available in ES6 (use esnext option).\nrouter.js: line 21, col 1, \'export\' is only available in ES6 (use esnext option).\n\n3 errors'); 
});
