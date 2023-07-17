import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service router;
  handler = null;

  constructor() {
    super(...arguments);
    this.handler = (e) => this.handleKeyUp(e);
  }

  activate() {
    window.addEventListener('keyup', this.handler);
  }

  deactivate() {
    window.removeEventListener('keyup', this.handler);
  }

  @action
  handleKeyUp(e) {
    switch (e.keyCode) {
      
      case 97: // numlock 4
      case 49: // "1"
        this.router.transitionTo('scenarios.scenario', 1);
        break;
        
      case 98: // numlock 4
      case 50:// "2"
        this.router.transitionTo('scenarios.scenario', 2);
        break;
        
      case 99: // numlock 4
      case 51:
        this.router.transitionTo('scenarios.scenario', 3);
        break;
      case 100: // numlock 4
      case 52:
        this.router.transitionTo('scenarios.scenario', 4);
        break;
      case 101: // numlock 4
      case 53:// "5"
        this.router.transitionTo('scenarios.scenario', 5, { queryParams: { randomValue: "asdass" } });
        break;
      case 102: // numlock 6
      case 54:  // "6"
        this.router.transitionTo('scenarios.scenario', 6);
        break;
      case 103: // numlock 7
      case 55: // "7"
        this.router.transitionTo('scenarios.scenario', 7);
        break;
      case 104: // numlock 8
      case 56: // "8"
        this.router.transitionTo('scenarios.scenario', 8);
        break;
      case 105: // numlock 9
      case 57:
        this.router.transitionTo('scenarios.scenario', 9, );
        break;
      case 96: // numlock 0
      case 48:// "0"
        this.router.transitionTo('character-select');
        break;
    }
  }
}
