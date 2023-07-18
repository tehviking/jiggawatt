import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class SliderControl extends Component {
  get yearTwo() {
    return this.args.activeYear === 2;
  }

  get yearFive() {
    return this.args.activeYear === 5;
  }

  get yearTen() {
    return this.args.activeYear === 10;
  }

  get yearThirty() {
    return this.args.activeYear === 30;
  }

  @action
  setYear(year) {
    this.args.setYear(year);
  }
}
