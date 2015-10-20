import Ember from 'ember';

export default Ember.Component.extend({
  convertedValue: Ember.computed('value', function(){
    return Math.max(this.get('value') * 20 - 2, 0);
  }),
  actions: {
    increment(){
      let value = this.get('value');
      if(value < 10){
        this.set('value', value + 1);
      }
    },
    decrement(){
      let value = this.get('value');
      if(0 < value){
        this.set('value', value - 1);
      }
    }
  }
});
