import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('welcome', {});
  this.route('scenarios', {}, function() {
    this.route('scenario', {path: '/:id'}, function() {
      this.route('character-select', {});
      this.route('stats', {});
      this.route('inventory', {});
      this.route('view-track', {});
      this.route('results', {});
    });
  });
});

export default Router;
