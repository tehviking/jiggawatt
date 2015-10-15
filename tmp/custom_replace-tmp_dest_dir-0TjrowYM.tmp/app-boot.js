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
