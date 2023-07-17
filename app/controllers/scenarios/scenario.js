import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default class ScenarioController extends Controller {

  @computed('application.currentRouteName')
  get onResults() {
    let currentRouteName = this.routeName;
    return currentRouteName === 'scenarios.scenario.results';
  }
}
