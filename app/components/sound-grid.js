import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['sound-grid'],

  sounds: [
    'build',
    'together5',
    'fire4',
    'pants2',
    'livin_the_dream2',
    'addepar2',
    'attribute_damnit2',
    'gsd2',
    'best_idea',
    'deployment_manager',
    'does_that_make_sense3',
    'fix_finance2',
    'ship_it3',
    'no_money2',
    'not_bitter',
    'register'
  ],

  firstRow: Ember.computed('sounds', function() {
    return this.get('sounds').slice(0,4);
  }),

  secondRow: Ember.computed('sounds', function() {
    return this.get('sounds').slice(4,8);
  }),

  thirdRow: Ember.computed('sounds', function() {
    return this.get('sounds').slice(8,12);
  }),

  fourthRow: Ember.computed('sounds', function() {
    return this.get('sounds').slice(12);
  }),
});
