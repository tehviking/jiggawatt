import Route from '@ember/routing/route';
import scenarios from '../data/scenariolist';
import Scenario from '../models/scenario';
import { A } from '@ember/array';

export default class ScenariosRoute extends Route {
  model() {
    return A(scenarios.map((scenario) => {
      return Scenario.create(scenario);
    }));
  }
}
