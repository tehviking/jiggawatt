import Ember from 'ember';

export default Ember.Component.extend({
  yearTwo: Ember.computed.equal('activeYear', 2),
  yearFive: Ember.computed.equal('activeYear', 5),
  yearTen: Ember.computed.equal('activeYear', 10),
  yearThirty: Ember.computed.equal('activeYear', 30),
  actions: {
    setYear(year) {
      this.sendAction('setYear', year);
    }
  }
});
