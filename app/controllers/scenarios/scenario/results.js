import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ResultsController extends Controller {
  @tracked year = 2;

  @computed('model.results.@each.years', 'year')
  get selectedYear() {
    let results = this.model.results;
    let selectedYear = this.year;
    return results.find((result) => result.years === selectedYear);
  }

  @action
  setYear(year) {
    this.year = year;
  }
}
