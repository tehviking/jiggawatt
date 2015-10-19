import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  onResults: Ember.computed('controllers.application.currentRouteName', function(){
    return this.get('controllers.application.currentRouteName') === "scenarios.scenario.results";
  })
});
