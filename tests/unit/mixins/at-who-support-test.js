import Ember from 'ember';
import AtWhoSupportMixin from '../../../mixins/at-who-support';
import { module, test } from 'qunit';

module('Unit | Mixin | at who support');

// Replace this with your real tests.
test('it works', function(assert) {
  var AtWhoSupportObject = Ember.Object.extend(AtWhoSupportMixin);
  var subject = AtWhoSupportObject.create();
  assert.ok(subject);
});
