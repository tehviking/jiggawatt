import EmberRouter from '@ember/routing/router';
import config from 'jiggawatt/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('welcome');
  this.route('character-select');
  this.route('scenarios', {}, function () {
    this.route('scenario', { path: '/:id' }, function () {
      this.route('stats', {});
      this.route('inventory', {});
      this.route('view-track', {});
      this.route('results', {});
    });
  });
});
