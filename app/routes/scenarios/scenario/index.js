import Ember from 'ember';

export default Ember.Route.extend({
  redirect: function(model, transition) {
    // TODO: handle redirecting to correct nested route when switching scenario routes
    this.transitionTo('scenarios.scenario.stats', model);
  }
});
