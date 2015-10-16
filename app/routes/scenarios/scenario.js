import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.modelFor('scenarios').findBy('id', parseInt(params.id));
  },
  afterModel: function(model, transition) {
    // TODO: handle redirecting to correct nested route when switching scenario routes
    this.transitionTo('scenarios.scenario.stats', model);
  }
});
