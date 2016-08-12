import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['beat-toggle'],
  classNameBindings: ['selected'],

  click: function() {
    this.toggleProperty('selected');
    this.sendAction('beatToggled', this.get('beatIndex'), this.get('selected'));
  }
});
