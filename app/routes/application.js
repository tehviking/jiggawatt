import Ember from 'ember';

let $ = Ember.$;

export default Ember.Route.extend({
  activate() {
    $(window).on('keyup.ApplicationRoute', (e)=> {
      switch (e.keyCode) {
      case 49:
        this.transitionTo("scenarios.scenario", 1);
        break;
      case 50:
        this.transitionTo("scenarios.scenario", 2);
        break;
      case 51:
        this.transitionTo("scenarios.scenario", 3);
        break;
      case 52:
        this.transitionTo("scenarios.scenario", 4);
        break;
      case 53:
        this.transitionTo("scenarios.scenario", 5);
        break;
      case 54:
        this.transitionTo("scenarios.scenario", 6);
        break;
      case 55:
        this.transitionTo("scenarios.scenario", 7);
        break;
      case 56:
        this.transitionTo("scenarios.scenario", 8);
        break;
      case 57:
        this.transitionTo("scenarios.scenario", 9);
        break;
      case 48:
        this.transitionTo("character-select");
        break;
      }
    });
  },

  deactivate() {
    $(window).off('keyup.ApplicationRoute');
  }

});
