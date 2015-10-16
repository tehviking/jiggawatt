import Ember from 'ember';

export default Ember.Component.extend({
  convertedValue: Ember.computed('value', function(){
    return Math.max(this.get('value') * 20 - 2, 0);
  })
});
