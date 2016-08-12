import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['sound-grid'],

  sounds: [
    'build',
    'together',
    'fire',
    'pants',
    'livin-the-dream',
    'addepar2',
    'attribute-damnit',
    'gsd',
    'best-idea',
    'deployment-manager',
    'does-that-make-sense',
    'fix-finance',
    'ship-it',
    'no-money',
    'not-bitter',
    'ka-ching'
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
