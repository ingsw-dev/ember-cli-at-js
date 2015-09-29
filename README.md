# ember-cli-at-who

A thin wrapper around [At.js](https://github.com/ichord/At.js).

## Installation

`ember install ember-cli-at-js`

## Explanation

This addon wraps [At.js](https://github.com/ichord/At.js) and gives you an  [Ember.TextArea](http://emberjs.com/api/classes/Ember.TextArea.html)
with an extra property called `settings`. This property is handled over to [At.js constructor](https://github.com/ichord/At.js/wiki/Base-Document#settings).

## Sample Code

```
// /app/controller/application.js
import Ember from 'ember';

export default Ember.Controller.extend({

  settings: {
    data: ['juan', 'pedro']
  },

  value: null

});
```

```
// /app/templates/application.hbs
{{at-who-textarea settings=settings value=value}}
```

## Other options

Maybe you are creating your own component and want to drop off support for
At.js, in that case you may want to use the [AtWhoSupport](https://github.com/cherta/ember-cli-at-js/tree/master/addon/mixins)
class that has everything the TextArea does but without subclassing it.

```
// /app/components/my-component.js
import Ember from 'ember';
import AtWhoSupport from 'ember-cli-at-js/mixins/at-who-support';

export default Ember.Component.extend(AtWhoSupport, {
});

```

## Styling

By default this component ships with no styles but you can easily add them in
your `ember-cli.build.js` file.

```
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // Linking to At.js default styles
  app.import(app.bowerDirectory + '/At.js/dist/css/jquery.atwho.css');

  /*
    This build file specifes the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};
```
