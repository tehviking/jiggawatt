QUnit.module('JSHint - routes');
QUnit.test('routes/welcome.js should pass jshint', function(assert) { 
  assert.ok(false, 'routes/welcome.js should pass jshint.\nroutes/welcome.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/welcome.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
});
