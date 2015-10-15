define('jiggawatt/router', ['exports', 'ember', 'jiggawatt/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.route('welcome', {});
    this.route('scenarios', {}, function () {
      this.route('scenario', {}, function () {
        this.route('character-select', {});
        this.route('stats', {});
        this.route('inventory', {});
        this.route('view-track', {});
        this.route('results', {});
      });
    });
  });

  exports['default'] = Router;

});