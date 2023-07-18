import Route from '@ember/routing/route';
import scenarios from '../data/scenariolist';
import Scenario from '../models/scenario';

export default class CharacterSelectRoute extends Route {
  model() {
    return scenarios.map((scenario) => Scenario.create(scenario));
  }
}
