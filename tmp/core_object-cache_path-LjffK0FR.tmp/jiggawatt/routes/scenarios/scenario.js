define('jiggawatt/routes/scenarios/scenario', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function model(params) {
      return this.modelFor('scenarios').findBy('id', parseInt(params.id));
    }
  });

});