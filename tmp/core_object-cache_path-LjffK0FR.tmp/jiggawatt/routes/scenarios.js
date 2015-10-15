define('jiggawatt/routes/scenarios', ['exports', 'ember', 'jiggawatt/data/scenariolist', 'jiggawatt/models/scenario'], function (exports, Ember, scenarios, Scenario) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function model() {
      return scenarios['default'].map(function (scenario) {
        return Scenario['default'].create(scenario);
      });
    }
  });

});