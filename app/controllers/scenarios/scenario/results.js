import Ember from 'ember';

export default Ember.Controller.extend({
  year: 2,

  selectedYear: Ember.computed('model.results.@each.years', 'year', function(){
    let results = this.get('model.results');
    let selectedYear = this.get('year');
    return results.findBy('years', selectedYear);
  }),
  actions: {
    setYear(year) {
      this.set('year', year);
    }
  }
});
