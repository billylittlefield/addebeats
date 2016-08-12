import Ember from 'ember';

export default Ember.Component.extend({
  name: "",

  classNames: ['beat-toggle sound-button'],

  soundclip: Ember.computed('name', function() {
    var soundclipFilePath = 'assets/' + this.get('name') + '.wav';
    var soundclip = new Audio(soundclipFilePath);
    soundclip.volume = 0.5;
    return soundclip;
  }),

  click: function() {
    this.get('soundclip').currentTime = 0;
    this.get('soundclip').play();
  },
});
