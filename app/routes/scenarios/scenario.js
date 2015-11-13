import Ember from 'ember';

let $ = Ember.$;

export default Ember.Route.extend({
  model(params) {
    this.scenario = this.modelFor('scenarios').findBy('id', parseInt(params.id));
    return this.scenario;
  },
  afterModel: function(model, transition) {
    // TODO: handle redirecting to correct nested route when switching scenario routes
    this.transitionTo('scenarios.scenario.stats', model);
  },
  activate() {
    $(window).on('keyup.ScenarioRoute', (e)=> {
      switch (e.keyCode) {
      case 83: // "s"
        this.transitionTo("scenarios.scenario.stats", this.scenario);
        break;
      case 73: // "i"
        this.transitionTo("scenarios.scenario.inventory", this.scenario);
        break;
      case 82: // "r"
        this.transitionTo("scenarios.scenario.results", this.scenario);
        break;
      case 27: // "esc"
        this.transitionTo("character-select");
        break;
      }
    });
  },

  deactivate() {
    $(window).off('keyup.ScenarioRoute');
  }

});
