import Ember from 'ember';

export default Ember.Component.extend({
  convertedValue: Ember.computed('value', function(){
    return this.get('value') * 20 - 2;
  })
});
