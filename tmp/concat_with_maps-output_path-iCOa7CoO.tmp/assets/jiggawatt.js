"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('jiggawatt/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'jiggawatt/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  var App;

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('jiggawatt/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'jiggawatt/config/environment'], function (exports, AppVersionComponent, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = AppVersionComponent['default'].extend({
    version: version,
    name: name
  });

});
define('jiggawatt/controllers/array', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('jiggawatt/controllers/object', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('jiggawatt/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'jiggawatt/config/environment'], function (exports, initializerFactory, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = {
    name: 'App Version',
    initialize: initializerFactory['default'](name, version)
  };

});
define('jiggawatt/initializers/export-application-global', ['exports', 'ember', 'jiggawatt/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (config['default'].exportApplicationGlobal !== false) {
      var value = config['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember['default'].String.classify(config['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };

});
define('jiggawatt/models/scenario', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	exports['default'] = DS['default'].Model.extend({});

});
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
define('jiggawatt/routes/scenarios/scenario/character-select', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('jiggawatt/routes/scenarios/scenario/inventory', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('jiggawatt/routes/scenarios/scenario/results', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('jiggawatt/routes/scenarios/scenario/stats', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('jiggawatt/routes/scenarios/scenario/view-track', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('jiggawatt/routes/scenarios/scenario', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('jiggawatt/routes/scenarios', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('jiggawatt/routes/welcome', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('jiggawatt/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "jiggawatt/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1,"id","title");
        var el2 = dom.createTextNode("Welcome to Ember");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,2,2,contextualElement);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[3,0],[3,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('jiggawatt/templates/scenarios/scenario/character-select', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "jiggawatt/templates/scenarios/scenario/character-select.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[1,0],[1,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('jiggawatt/templates/scenarios/scenario/inventory', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "jiggawatt/templates/scenarios/scenario/inventory.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[1,0],[1,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('jiggawatt/templates/scenarios/scenario/results', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "jiggawatt/templates/scenarios/scenario/results.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[1,0],[1,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('jiggawatt/templates/scenarios/scenario/stats', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "jiggawatt/templates/scenarios/scenario/stats.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[1,0],[1,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('jiggawatt/templates/scenarios/scenario/view-track', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "jiggawatt/templates/scenarios/scenario/view-track.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[1,0],[1,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('jiggawatt/templates/scenarios/scenario', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "jiggawatt/templates/scenarios/scenario.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[1,0],[1,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('jiggawatt/templates/scenarios', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "jiggawatt/templates/scenarios.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[1,0],[1,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('jiggawatt/templates/welcome', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "jiggawatt/templates/welcome.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[1,0],[1,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('jiggawatt/tests/app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function(assert) { 
    assert.ok(true, 'app.js should pass jshint.'); 
  });

});
define('jiggawatt/tests/helpers/resolver', ['exports', 'ember/resolver', 'jiggawatt/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('jiggawatt/tests/helpers/resolver.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function(assert) { 
    assert.ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('jiggawatt/tests/helpers/start-app', ['exports', 'ember', 'jiggawatt/app', 'jiggawatt/config/environment'], function (exports, Ember, Application, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('jiggawatt/tests/helpers/start-app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function(assert) { 
    assert.ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('jiggawatt/tests/models/scenario.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/scenario.js should pass jshint', function(assert) { 
    assert.ok(true, 'models/scenario.js should pass jshint.'); 
  });

});
define('jiggawatt/tests/router.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function(assert) { 
    assert.ok(true, 'router.js should pass jshint.'); 
  });

});
define('jiggawatt/tests/routes/scenarios/scenario/character-select.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/scenarios/scenario');
  QUnit.test('routes/scenarios/scenario/character-select.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/scenarios/scenario/character-select.js should pass jshint.'); 
  });

});
define('jiggawatt/tests/routes/scenarios/scenario/inventory.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/scenarios/scenario');
  QUnit.test('routes/scenarios/scenario/inventory.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/scenarios/scenario/inventory.js should pass jshint.'); 
  });

});
define('jiggawatt/tests/routes/scenarios/scenario/results.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/scenarios/scenario');
  QUnit.test('routes/scenarios/scenario/results.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/scenarios/scenario/results.js should pass jshint.'); 
  });

});
define('jiggawatt/tests/routes/scenarios/scenario/stats.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/scenarios/scenario');
  QUnit.test('routes/scenarios/scenario/stats.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/scenarios/scenario/stats.js should pass jshint.'); 
  });

});
define('jiggawatt/tests/routes/scenarios/scenario/view-track.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/scenarios/scenario');
  QUnit.test('routes/scenarios/scenario/view-track.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/scenarios/scenario/view-track.js should pass jshint.'); 
  });

});
define('jiggawatt/tests/routes/scenarios/scenario.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/scenarios');
  QUnit.test('routes/scenarios/scenario.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/scenarios/scenario.js should pass jshint.'); 
  });

});
define('jiggawatt/tests/routes/scenarios.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/scenarios.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/scenarios.js should pass jshint.'); 
  });

});
define('jiggawatt/tests/routes/welcome.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/welcome.js should pass jshint', function(assert) { 
    assert.ok(true, 'routes/welcome.js should pass jshint.'); 
  });

});
define('jiggawatt/tests/test-helper', ['jiggawatt/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('jiggawatt/tests/test-helper.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function(assert) { 
    assert.ok(true, 'test-helper.js should pass jshint.'); 
  });

});
define('jiggawatt/tests/unit/models/scenario-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('scenario', 'Unit | Model | scenario', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('jiggawatt/tests/unit/models/scenario-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/scenario-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/models/scenario-test.js should pass jshint.'); 
  });

});
define('jiggawatt/tests/unit/routes/scenarios/scenario/character-select-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:scenarios/scenario/character-select', 'Unit | Route | scenarios/scenario/character select', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('jiggawatt/tests/unit/routes/scenarios/scenario/character-select-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes/scenarios/scenario');
  QUnit.test('unit/routes/scenarios/scenario/character-select-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/scenarios/scenario/character-select-test.js should pass jshint.'); 
  });

});
define('jiggawatt/tests/unit/routes/scenarios/scenario/inventory-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:scenarios/scenario/inventory', 'Unit | Route | scenarios/scenario/inventory', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('jiggawatt/tests/unit/routes/scenarios/scenario/inventory-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes/scenarios/scenario');
  QUnit.test('unit/routes/scenarios/scenario/inventory-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/scenarios/scenario/inventory-test.js should pass jshint.'); 
  });

});
define('jiggawatt/tests/unit/routes/scenarios/scenario/results-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:scenarios/scenario/results', 'Unit | Route | scenarios/scenario/results', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('jiggawatt/tests/unit/routes/scenarios/scenario/results-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes/scenarios/scenario');
  QUnit.test('unit/routes/scenarios/scenario/results-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/scenarios/scenario/results-test.js should pass jshint.'); 
  });

});
define('jiggawatt/tests/unit/routes/scenarios/scenario/stats-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:scenarios/scenario/stats', 'Unit | Route | scenarios/scenario/stats', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('jiggawatt/tests/unit/routes/scenarios/scenario/stats-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes/scenarios/scenario');
  QUnit.test('unit/routes/scenarios/scenario/stats-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/scenarios/scenario/stats-test.js should pass jshint.'); 
  });

});
define('jiggawatt/tests/unit/routes/scenarios/scenario/view-track-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:scenarios/scenario/view-track', 'Unit | Route | scenarios/scenario/view track', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('jiggawatt/tests/unit/routes/scenarios/scenario/view-track-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes/scenarios/scenario');
  QUnit.test('unit/routes/scenarios/scenario/view-track-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/scenarios/scenario/view-track-test.js should pass jshint.'); 
  });

});
define('jiggawatt/tests/unit/routes/scenarios/scenario-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:scenarios/scenario', 'Unit | Route | scenarios/scenario', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('jiggawatt/tests/unit/routes/scenarios/scenario-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes/scenarios');
  QUnit.test('unit/routes/scenarios/scenario-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/scenarios/scenario-test.js should pass jshint.'); 
  });

});
define('jiggawatt/tests/unit/routes/scenarios-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:scenarios', 'Unit | Route | scenarios', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('jiggawatt/tests/unit/routes/scenarios-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/scenarios-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/scenarios-test.js should pass jshint.'); 
  });

});
define('jiggawatt/tests/unit/routes/welcome-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:welcome', 'Unit | Route | welcome', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('jiggawatt/tests/unit/routes/welcome-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/welcome-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/routes/welcome-test.js should pass jshint.'); 
  });

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('jiggawatt/config/environment', ['ember'], function(Ember) {
  var prefix = 'jiggawatt';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("jiggawatt/tests/test-helper");
} else {
  require("jiggawatt/app")["default"].create({"name":"jiggawatt","version":"0.0.0+e0f16cd2"});
}

/* jshint ignore:end */
//# sourceMappingURL=jiggawatt.map