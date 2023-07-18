import Component from '@glimmer/component';
import { computed } from '@ember/object';

export default class MyComponent extends Component {
  @computed('args.value')
  get convertedValue() {
    return Math.max(this.args.value * 20 - 2, 0);
  }
}
