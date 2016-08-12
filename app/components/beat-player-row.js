import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  classNames: ['beat-player-row'],

  selectedBeats: Ember.computed.alias('soundMap.selectedBeats'),

  didRender: function() {
    $('.track-select:eq(' + this.get('rowIndex') + ')').val(this.get('soundMap.soundName'));
    this._super(...arguments);
  },

  sounds: [
    { label: 'None', value: 'silent' },
    { label: 'Kick Drum', value: 'kick_drum2' },
    { label: 'High Bass', value: 'bass' },
    { label: 'Low Bass', value: 'deep_bass' },
    { label: 'Tom', value: 'tom' },
    { label: 'Snare (Closed)', value: 'snare2_2' },
    { label: 'Snare (Open)', value: 'snare1_2' },
    { label: 'Hi-hat (Tight)', value: 'hi_hat' },
    { label: 'Hi-hat (Loose)', value: 'hi_hat2' },
    { label: 'Airhorn', value: 'airhorn2' },
    { label: 'Addepar', value: 'addepar3' },
    { label: 'Build', value: 'build' },
    { label: 'Together', value: 'together5' },
    { label: 'Fix Finance', value: 'fix_finance2' },
    { label: 'Get Sh*t Done', value: 'gsd2' },
    { label: 'Let the best idea win', value: 'best_idea' },
    { label: 'Livin\' the dream!', value: 'livin_the_dream2' },
    { label: 'Attribute, damn it!', value: 'attribute_damnit2' },
    { label: 'Does that make sense?', value: 'does_that_make_sense3' },
    { label: 'Deployment manager', value: 'deployment_manager' },
    { label: 'Ka-ching!', value: 'register' },
    { label: 'Coins', value: 'money_bag' },
    { label: 'Fire', value: 'fire4' },
    { label: 'Pants', value: 'pants2' },
    { label: 'Ship it!', value: 'ship_it3' },
    { label: 'Cyril', value: 'cyril' },
    { label: 'No Money', value: 'no_money2' },
    { label: 'Not bitter', value: 'not_bitter' }
  ],

  actions: {
    trackChanged: function(soundName) {
      this.set('soundMap.soundName', soundName);
    },

    beatToggled: function(beatIndex, selected) {
      this.get('selectedBeats')[beatIndex] = selected;
    },

    volumeChanged: function(volume) {
      this.set('soundMap.audio.volume', volume);
    },

    clearTrack: function() {
      this.set('soundMap.soundName', 'silent');
      this.get('soundMap').clearBeats();
      $('.track-select')[this.get('rowIndex')].value = 'silent  ';
    }
  }
});
