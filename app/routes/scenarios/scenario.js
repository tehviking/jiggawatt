import Ember from 'ember';

let $ = Ember.$;

export default Ember.Route.extend({
  model(params) {
    return this.modelFor('scenarios').findBy('id', parseInt(params.id));
  },
  afterModel: function(model, transition) {
    // TODO: handle redirecting to correct nested route when switching scenario routes
    console.log(transition);
    this.set("scenario", model);
    this.transitionTo('scenarios.scenario.stats', model);
  },
  activate() {
    let scenario = this.get("scenario");
    $(window).on('keyup.ScenarioRoute', (e)=> {
      switch (e.keyCode) {
      case 83: // "s"
        this.transitionTo("scenarios.scenario.stats", scenario);
        break;
      case 73: // "i"
        this.transitionTo("scenarios.scenario.inventory", scenario);
        break;
      case 82: // "r"
        this.transitionTo("scenarios.scenario.results", scenario);
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
