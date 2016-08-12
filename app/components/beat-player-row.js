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
    { label: 'Low Bass', value: 'low-bass' },
    { label: 'High Bass', value: 'high-bass' },
    { label: 'Kick Drum', value: 'kick-drum' },
    { label: 'Tom', value: 'tom' },
    { label: 'Snare (Open)', value: 'open-snare' },
    { label: 'Snare (Closed)', value: 'closed-snare' },
    { label: 'Hi-hat (Open)', value: 'open-hi-hat' },
    { label: 'Hi-hat (Closed)', value: 'closed-hi-hat' },
    { label: 'Airhorn', value: 'air-horn' },
    { label: 'Addepar', value: 'addepar2' },
    { label: 'Build', value: 'build' },
    { label: 'Together', value: 'together' },
    { label: 'Fix Finance', value: 'fix-finance' },
    { label: 'Get Sh*t Done', value: 'gsd' },
    { label: 'Let the best idea win', value: 'best-idea' },
    { label: 'Livin\' the dream!', value: 'livin-the-dream' },
    { label: 'Attribute, damn it!', value: 'attribute-damnit' },
    { label: 'Does that make sense?', value: 'does-that-make-sense' },
    { label: 'Deployment manager', value: 'deployment-manager' },
    { label: 'Ka-ching!', value: 'ka-ching' },
    { label: 'Coins', value: 'money-bag' },
    { label: 'Fire', value: 'fire' },
    { label: 'Pants', value: 'pants' },
    { label: 'Ship it!', value: 'ship-it' },
    { label: 'Cyril', value: 'cyril' },
    { label: 'No Money', value: 'no-money' },
    { label: 'Not bitter', value: 'not-bitter' }
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
