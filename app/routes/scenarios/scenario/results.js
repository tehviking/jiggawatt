import Ember from 'ember';

let $ = Ember.$;

export default Ember.Route.extend({
  currentIndex: 0,
  years: [2,5,10,30],
  move(offset) {
    let years = this.get('years');
    let currentIndex = this.get('currentIndex');
    let controller = this.get('controller');
    let updatedIndex = currentIndex + offset;
    if(currentIndex >= 0 && offset >= 1 && updatedIndex < years.get('length')) {
      controller.set('year', years[updatedIndex]);
      this.set('currentIndex', updatedIndex);
    } else if (currentIndex < years.get('length') && offset < 0 && updatedIndex >= 0) {
      controller.set('year', years[updatedIndex]);
      this.set('currentIndex', updatedIndex);
    }
  },
  activate() {
    $(window).on('keyup.ResultsRoute', (e)=> {
      switch (e.keyCode) {
      case 37:
        this.move(-1);
        break;
      case 39:
        this.move(1);
        break;
      }
    });
  },

  deactivate() {
    $(window).off('keyup.ResultsRoute');
  }
});
