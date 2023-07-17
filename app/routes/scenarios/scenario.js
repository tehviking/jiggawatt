import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';

export default class ScenarioRoute extends Route {
  @service router;
  scenario = null;
  handler = null;

  constructor() {
    super(...arguments);
    this.handler = (e) => this.handleKeyUp(e);
  }

  model(params) {
    this.scenario = this.modelFor('scenarios').findBy(
      'id',
      parseInt(params.id)
    );
    return this.scenario;
  }

  @action
  afterModel() {
    this.router.transitionTo('scenarios.scenario.stats', this.scenario);
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
      case 83: // "s"
        this.router.transitionTo('scenarios.scenario.stats', this.scenario);
        break;
      case 73: // "i"
        this.router.transitionTo('scenarios.scenario.inventory', this.scenario);
        break;
      case 82: // "r"
        this.router.transitionTo('scenarios.scenario.results', this.scenario);
        break;
      case 27: // "esc"
        this.router.transitionTo('character-select');
        break;
    }
  }
}
