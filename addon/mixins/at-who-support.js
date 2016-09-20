import Ember from 'ember';

export default Ember.Mixin.create({
  /*
      A hash defined in https://github.com/ichord/At.js/wiki/Base-Document#settings
      to configure At.js.
  */
  settings: {},

  /*
      A small default.
  */
  defaults: { at: '@' },

  calculatedSettings: Ember.computed('settings', 'defaults', function () {
    return Ember.merge(this.get('defaults'), this.get('settings'));
  }),

  didInsertElement: function () {
    this._super(...arguments);
    this.$().atwho(this.get('calculatedSettings'));
  },

  willDestroyElement: function() {
    this.$().atwho('destroy');
  },
});
