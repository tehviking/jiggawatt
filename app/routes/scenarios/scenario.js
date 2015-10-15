import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.modelFor('scenarios').findBy('id', parseInt(params.id));
  }
});
