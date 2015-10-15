import Ember from 'ember';
import scenarios from '../data/scenariolist';
import Scenario from '../models/scenario';

export default Ember.Route.extend({
  model: function model() {
    return scenarios.map(function (scenario) {
      return Scenario.create(scenario);
    });
  }
});