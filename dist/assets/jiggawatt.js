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
define('jiggawatt/data/scenariolist', ['exports'], function (exports) {

  'use strict';

  exports['default'] = [{
    id: 1,
    name: "Code Slinger",
    motto: "Leave me alone to code.",
    track: "technician",
    stats: {
      skill: 7,
      synthesis: 2,
      vision: 1
    },
    inventory: {
      leverage: 2,
      ambition: 1,
      education: 3,
      dedication: 7,
      community: 2
    },
    results: [{
      years: 2,
      title: "Jr. Developer",
      income: 1,
      stress: 3,
      freeTime: 4,
      satisfaction: 4,
      impact: 1
    }, {
      years: 5,
      title: "Developer",
      income: 4,
      stress: 4,
      freeTime: 6,
      satisfaction: 5,
      impact: 2
    }, {
      years: 10,
      title: "Senior Developer",
      income: 6,
      stress: 4,
      freeTime: 6,
      satisfaction: 5,
      impact: 3
    }, {
      years: 30,
      title: "Senior Developer",
      income: 7,
      stress: 4,
      freeTime: 6,
      satisfaction: 5,
      impact: 3
    }]
  }, {
    id: 4,
    name: "Thought Leader",
    motto: "I have something to say!",
    track: "technician",
    stats: {
      skill: 7,
      synthesis: 2,
      vision: 1
    },
    inventory: {
      leverage: 8,
      ambition: 9,
      education: 3,
      dedication: 5,
      community: 6
    },
    results: [{
      years: 2,
      title: "Jr. Developer",
      income: 1,
      stress: 5,
      freeTime: 4,
      satisfaction: 4,
      impact: 2
    }, {
      years: 5,
      title: "Senior Developer",
      income: 5,
      stress: 8,
      freeTime: 1,
      satisfaction: 3,
      impact: 3
    }, {
      years: 10,
      title: "Author & Speaker",
      income: 7,
      stress: 6,
      freeTime: 4,
      satisfaction: 6,
      impact: 4
    }, {
      years: 30,
      title: "Keynote Speaker",
      income: 9,
      stress: 3,
      freeTime: 5,
      satisfaction: 7,
      impact: 7
    }]
  }, {
    id: 7,
    name: "Chief Architect",
    motto: "Let's build better software together.",
    track: "technician",
    stats: {
      skill: 7,
      synthesis: 2,
      vision: 1
    },
    inventory: {
      leverage: 8,
      ambition: 7,
      education: 8,
      dedication: 6,
      community: 9
    },
    results: [{
      years: 2,
      title: "Jr. Developer",
      income: 1,
      stress: 5,
      freeTime: 4,
      satisfaction: 4,
      impact: 2
    }, {
      years: 5,
      title: "Senior Developer",
      income: 4,
      stress: 7,
      freeTime: 1,
      satisfaction: 6,
      impact: 4
    }, {
      years: 10,
      title: "VP of Engineering",
      income: 7,
      stress: 8,
      freeTime: 3,
      satisfaction: 6,
      impact: 6
    }, {
      years: 30,
      title: "Chief Architect",
      income: 8,
      stress: 2,
      freeTime: 6,
      satisfaction: 10,
      impact: 7
    }]
  }, {
    id: 2,
    name: "Cat Herder",
    motto: "Climb the ladder and wait your turn.",
    track: "manager",
    stats: {
      skill: 1,
      synthesis: 9,
      vision: 0
    },
    inventory: {
      leverage: 3,
      ambition: 5,
      education: 1,
      dedication: 8,
      community: 1
    },
    results: [{
      years: 2,
      title: "Jr. Developer",
      income: 1,
      stress: 5,
      freeTime: 4,
      satisfaction: 4,
      impact: 1
    }, {
      years: 5,
      title: "Dev Manager",
      income: 4,
      stress: 7,
      freeTime: 1,
      satisfaction: 3,
      impact: 3
    }, {
      years: 10,
      title: "Engineering Lead",
      income: 6,
      stress: 7,
      freeTime: 2,
      satisfaction: 3,
      impact: 4
    }, {
      years: 30,
      title: "Director of Development",
      income: 7,
      stress: 10,
      freeTime: 3,
      satisfaction: 3,
      impact: 5
    }]
  }, {
    id: 5,
    name: "Product Manager",
    motto: "How can I provide the most value?",
    track: "manager",
    stats: {
      skill: 0,
      synthesis: 9,
      vision: 1
    },
    inventory: {
      leverage: 7,
      ambition: 7,
      education: 5,
      dedication: 6,
      community: 3
    },
    results: [{
      years: 2,
      title: "Jr. Developer",
      income: 1,
      stress: 5,
      freeTime: 4,
      satisfaction: 4,
      impact: 2
    }, {
      years: 5,
      title: "Project Manager",
      income: 4,
      stress: 9,
      freeTime: 1,
      satisfaction: 2,
      impact: 2
    }, {
      years: 10,
      title: "Director of Product",
      income: 7,
      stress: 8,
      freeTime: 3,
      satisfaction: 5,
      impact: 5
    }, {
      years: 30,
      title: "VP of Products",
      income: 8,
      stress: 8,
      freeTime: 4,
      satisfaction: 8,
      impact: 7
    }]
  }, {
    id: 8,
    name: "Badass CTO",
    motto: "Let's solve an important problem together.",
    track: "manager",
    stats: {
      skill: 2,
      synthesis: 7,
      vision: 1
    },
    inventory: {
      leverage: 9,
      ambition: 9,
      education: 8,
      dedication: 4,
      community: 9
    },
    results: [{
      years: 2,
      title: "Jr. Developer",
      income: 1,
      stress: 4,
      freeTime: 4,
      satisfaction: 4,
      impact: 2
    }, {
      years: 5,
      title: "Team Lead",
      income: 5,
      stress: 6,
      freeTime: 3,
      satisfaction: 5,
      impact: 3
    }, {
      years: 10,
      title: "VP of Engineering",
      income: 6,
      stress: 8,
      freeTime: 3,
      satisfaction: 7,
      impact: 7
    }, {
      years: 30,
      title: "Chairperson",
      income: 9,
      stress: 8,
      freeTime: 3,
      satisfaction: 9,
      impact: 8
    }]
  }, {
    id: 3,
    name: "Harried Freelancer",
    motto: "I just don't want a boss.",
    track: "entrepreneur",
    stats: {
      skill: 3,
      synthesis: 3,
      vision: 6
    },
    inventory: {
      leverage: 2,
      ambition: 4,
      education: 3,
      dedication: 7,
      community: 3
    },
    results: [{
      years: 2,
      title: "Jr. Developer",
      income: 1,
      stress: 5,
      freeTime: 4,
      satisfaction: 4,
      impact: 2
    }, {
      years: 5,
      title: "Freelance Developer",
      income: 4,
      stress: 7,
      freeTime: 1,
      satisfaction: 5,
      impact: 1
    }, {
      years: 10,
      title: "Freelance Developer",
      income: 7,
      stress: 5,
      freeTime: 4,
      satisfaction: 8,
      impact: 2
    }, {
      years: 30,
      title: "Freelance Developer",
      income: 7,
      stress: 2,
      freeTime: 8,
      satisfaction: 8,
      impact: 4
    }]
  }, {
    id: 6,
    name: "Lifestyle Business Founder",
    motto: "Let's build the company I always wanted to work at.",
    track: "entrepreneur",
    stats: {
      skill: 1,
      synthesis: 2,
      vision: 7
    },
    inventory: {
      leverage: 7,
      ambition: 7,
      education: 5,
      dedication: 5,
      community: 5
    },
    results: [{
      years: 2,
      title: "Jr. Developer",
      income: 1,
      stress: 5,
      freeTime: 4,
      satisfaction: 4,
      impact: 2
    }, {
      years: 5,
      title: "Senior Developer",
      income: 6,
      stress: 7,
      freeTime: 5,
      satisfaction: 2,
      impact: 5
    }, {
      years: 10,
      title: "Solopreneur",
      income: 3,
      stress: 9,
      freeTime: 2,
      satisfaction: 7,
      impact: 6
    }, {
      years: 30,
      title: "Small Business CEO",
      income: 9,
      stress: 7,
      freeTime: 7,
      satisfaction: 10,
      impact: 8
    }]
  }, {
    id: 9,
    name: "Visionary CEO",
    motto: "We're going to change the world.",
    track: "entrepreneur",
    stats: {
      skill: 0,
      synthesis: 0,
      vision: 10
    },
    inventory: {
      leverage: 9,
      ambition: 9,
      education: 8,
      dedication: 9,
      community: 9
    },
    results: [{
      years: 2,
      title: "Jr. Developer",
      income: 1,
      stress: 5,
      freeTime: 4,
      satisfaction: 4,
      impact: 2
    }, {
      years: 5,
      title: "Founder",
      income: 4,
      stress: 8,
      freeTime: 1,
      satisfaction: 7,
      impact: 5
    }, {
      years: 10,
      title: "Founder of third company",
      income: 7,
      stress: 9,
      freeTime: 2,
      satisfaction: 8,
      impact: 7
    }, {
      years: 30,
      title: "Chairperson of the Board",
      income: 10,
      stress: 9,
      freeTime: 3,
      satisfaction: 9,
      impact: 10
    }]
  }];

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
define('jiggawatt/models/scenario', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Object.extend({});

});
define('jiggawatt/router', ['exports', 'ember', 'jiggawatt/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.route('welcome', {});
    this.route('scenarios', {}, function () {
      this.route('scenario', { path: '/:id' }, function () {
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

  exports['default'] = Ember['default'].Route.extend({
    model: function model(params) {
      return this.modelFor('scenarios').findBy('id', parseInt(params.id));
    }
  });

});
define('jiggawatt/routes/scenarios', ['exports', 'ember', 'jiggawatt/data/scenariolist', 'jiggawatt/models/scenario'], function (exports, Ember, scenarios, Scenario) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function model() {
      return scenarios['default'].map(function (scenario) {
        return Scenario['default'].create(scenario);
      });
    }
  });

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
            "line": 3,
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
        var el1 = dom.createTextNode("\nCHARACTER SELECT\n");
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
            "line": 3,
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
        var el1 = dom.createTextNode("\nINVENTORY\n");
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
            "line": 3,
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
        var el1 = dom.createTextNode("\nRESULTS\n");
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
            "line": 3,
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
        var el1 = dom.createTextNode("\nSTATS\n");
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
            "line": 7,
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
        var el1 = dom.createTextNode("\nSCENARIO\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
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
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,2,2,contextualElement);
        morphs[2] = dom.createMorphAt(fragment,4,4,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[1,0],[1,10]]]],
        ["content","model.id",["loc",[null,[4,0],[4,12]]]],
        ["content","model.name",["loc",[null,[6,0],[6,14]]]]
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
            "line": 3,
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
        var el1 = dom.createTextNode("\nSCENARIOS\n");
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
            "line": 3,
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
        var el1 = dom.createTextNode("\nWELCOME\n");
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
    assert.ok(false, 'app.js should pass jshint.\napp.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\napp.js: line 2, col 1, \'import\' is only available in ES6 (use esnext option).\napp.js: line 3, col 1, \'import\' is only available in ES6 (use esnext option).\napp.js: line 4, col 1, \'import\' is only available in ES6 (use esnext option).\napp.js: line 18, col 1, \'export\' is only available in ES6 (use esnext option).\n\n5 errors'); 
  });

});
define('jiggawatt/tests/data/scenariolist.jshint', function () {

  'use strict';

  QUnit.module('JSHint - data');
  QUnit.test('data/scenariolist.js should pass jshint', function(assert) { 
    assert.ok(false, 'data/scenariolist.js should pass jshint.\ndata/scenariolist.js: line 1, col 1, \'export\' is only available in ES6 (use esnext option).\n\n1 error'); 
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
    assert.ok(false, 'models/scenario.js should pass jshint.\nmodels/scenario.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nmodels/scenario.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
  });

});
define('jiggawatt/tests/router.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function(assert) { 
    assert.ok(false, 'router.js should pass jshint.\nrouter.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nrouter.js: line 2, col 1, \'import\' is only available in ES6 (use esnext option).\nrouter.js: line 21, col 1, \'export\' is only available in ES6 (use esnext option).\n\n3 errors'); 
  });

});
define('jiggawatt/tests/routes/scenarios/scenario/character-select.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/scenarios/scenario');
  QUnit.test('routes/scenarios/scenario/character-select.js should pass jshint', function(assert) { 
    assert.ok(false, 'routes/scenarios/scenario/character-select.js should pass jshint.\nroutes/scenarios/scenario/character-select.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/scenarios/scenario/character-select.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
  });

});
define('jiggawatt/tests/routes/scenarios/scenario/inventory.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/scenarios/scenario');
  QUnit.test('routes/scenarios/scenario/inventory.js should pass jshint', function(assert) { 
    assert.ok(false, 'routes/scenarios/scenario/inventory.js should pass jshint.\nroutes/scenarios/scenario/inventory.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/scenarios/scenario/inventory.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
  });

});
define('jiggawatt/tests/routes/scenarios/scenario/results.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/scenarios/scenario');
  QUnit.test('routes/scenarios/scenario/results.js should pass jshint', function(assert) { 
    assert.ok(false, 'routes/scenarios/scenario/results.js should pass jshint.\nroutes/scenarios/scenario/results.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/scenarios/scenario/results.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
  });

});
define('jiggawatt/tests/routes/scenarios/scenario/stats.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/scenarios/scenario');
  QUnit.test('routes/scenarios/scenario/stats.js should pass jshint', function(assert) { 
    assert.ok(false, 'routes/scenarios/scenario/stats.js should pass jshint.\nroutes/scenarios/scenario/stats.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/scenarios/scenario/stats.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
  });

});
define('jiggawatt/tests/routes/scenarios/scenario/view-track.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/scenarios/scenario');
  QUnit.test('routes/scenarios/scenario/view-track.js should pass jshint', function(assert) { 
    assert.ok(false, 'routes/scenarios/scenario/view-track.js should pass jshint.\nroutes/scenarios/scenario/view-track.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/scenarios/scenario/view-track.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
  });

});
define('jiggawatt/tests/routes/scenarios/scenario.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes/scenarios');
  QUnit.test('routes/scenarios/scenario.js should pass jshint', function(assert) { 
    assert.ok(false, 'routes/scenarios/scenario.js should pass jshint.\nroutes/scenarios/scenario.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/scenarios/scenario.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\nroutes/scenarios/scenario.js: line 4, col 3, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\n\n3 errors'); 
  });

});
define('jiggawatt/tests/routes/scenarios.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/scenarios.js should pass jshint', function(assert) { 
    assert.ok(false, 'routes/scenarios.js should pass jshint.\nroutes/scenarios.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/scenarios.js: line 2, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/scenarios.js: line 3, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/scenarios.js: line 5, col 1, \'export\' is only available in ES6 (use esnext option).\nroutes/scenarios.js: line 6, col 3, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\n\n5 errors'); 
  });

});
define('jiggawatt/tests/routes/welcome.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/welcome.js should pass jshint', function(assert) { 
    assert.ok(false, 'routes/welcome.js should pass jshint.\nroutes/welcome.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/welcome.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
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
  require("jiggawatt/app")["default"].create({"name":"jiggawatt","version":"0.0.0+3e7f2270"});
}

/* jshint ignore:end */
//# sourceMappingURL=jiggawatt.map