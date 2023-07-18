import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';

export default class ScenarioIndexRoute extends Route {
  @service router;

  @action
  redirect(model, transition) {
    set(this, 'router', this.router);
    this.router.transitionToRoute('scenarios.scenario.stats', model);
  }
}
