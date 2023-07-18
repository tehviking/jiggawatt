import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { on } from '@ember/object/evented';

export default class ResultsRoute extends Route {

  constructor() {
    super(...arguments);
    this.handler = (e) => this.handleKeyUp(e);
  }

  currentIndex = 0;
  years = [2, 5, 10, 30];

  @action
  move(offset) {
    let years = this.years;
    let currentIndex = this.currentIndex;
    let controller = this.controller;
    let updatedIndex = currentIndex + offset;

    if (offset === 1 && updatedIndex <= years.length - 1) {
      controller.set('year', years[updatedIndex]);
      this.currentIndex = updatedIndex;
    } else if (offset === -1 && updatedIndex >= 0) {
      controller.set('year', years[updatedIndex]);
      this.currentIndex = updatedIndex;
    }
  }

  @action
  activate() {
    window.addEventListener('keyup', this.handler);
  }

  @action
  deactivate() {
    window.removeEventListener('keyup', this.handler);
  }

  @action
  handleKeyUp(e) {
    switch (e.keyCode) {
      case 37: // left arrow
        this.move(-1);
        break;
      case 39: // right arrow
        this.move(1);
        break;
    };
  }

  resetController(controller, isExiting) {
    super.resetController(controller, isExiting);
    if (isExiting) {
      this.currentIndex = 0;
      controller.set('year', 2);
    }
  }
}
