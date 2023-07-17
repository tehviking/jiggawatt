import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { computed } from '@ember/object';

export default class IncrementScaleComponent extends Component {
  @tracked
  value = this.args.value || 0;

  get convertedValue() {
    return Math.max(this.value * 20 - 2, 0);
  }

  @action
  increment() {
    if (this.value < 10) {
      this.value += 1;
    }
  }

  @action
  decrement() {
    if (this.value > 0) {
      this.value -= 1;
    }
  }
}
