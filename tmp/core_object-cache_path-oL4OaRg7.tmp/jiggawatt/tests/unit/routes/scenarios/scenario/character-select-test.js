define('jiggawatt/tests/unit/routes/scenarios/scenario/character-select-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:scenarios/scenario/character-select', 'Unit | Route | scenarios/scenario/character select', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});