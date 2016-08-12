import Ember from 'ember';

var soundMap = Ember.Object.extend({
  soundName: null,
  selectedBeats: null,
  activeBeat: null,
  audio: Ember.computed('soundName', function() {
    var soundclipFilePath = 'assets/' + this.get('soundName') + '.wav';
    var soundclip = new Audio(soundclipFilePath);
    soundclip.volume = 0.5;
    return soundclip;
  }),
  clearBeats: function() {
    this.set('selectedBeats', [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
  },
  volume: Ember.computed.alias('audio.volume'),
  init: function() {
    this.setProperties({
      soundName: 'silent',
      selectedBeats: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
    });
    this._super(...arguments);
  }
});

export default Ember.Component.extend({
  soundMaps: [
    soundMap.create(),
    soundMap.create(),
    soundMap.create(),
    soundMap.create(),
    soundMap.create(),
    soundMap.create(),
    soundMap.create(),
    soundMap.create(),
    soundMap.create(),
    soundMap.create(),
    soundMap.create(),
    soundMap.create()
  ],

  selectedBeats: Ember.computed('soundMaps.[]', function() {
    return this.get('soundMaps').map(function(soundMap) {
      return soundMap.get('selectedBeats');
    });
  }),

  activeBeatIndex: null,

  bpm: 60,

  songInterval: null,

  // beatLabels: [1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4],
  beatLabels: ['•','•','•','•','•','•','•','•','•','•','•','•','•','•','•','•'],

  isPaused: Ember.computed.none('songInterval'),
  isPlaying: Ember.computed.not('isPaused'),

  playPauseButtonText: Ember.computed('isPlaying', function() {
    if (this.get('isPlaying')) {
      return 'Stop';
    } else {
      return 'Play';
    }
  }),

  updateActiveBeat: function() {
    var activeBeatIndex = this.get('activeBeatIndex');
    if (activeBeatIndex === 15 || activeBeatIndex === null) {
      this.set('activeBeatIndex', 0);
    } else {
      this.set('activeBeatIndex', activeBeatIndex + 1);
    }
  },

  playBeat: function() {
    var activeBeatIndex = this.get('activeBeatIndex');
    var soundsToPlay = this.get('soundMaps').filter((soundMap) => {
      return soundMap.get('selectedBeats')[activeBeatIndex];
    });
    soundsToPlay.forEach((soundMap) => {
      var audio = soundMap.get('audio');
      audio.currentTime = 0;
      audio.play();
    });
  },

  startSong: function() {
    var bpm = this.get('bpm');
    var interval = 15000 / bpm;
    if (this.get('isPaused')) {
      $(".play-pause").removeClass('paused');
      this.set('songInterval', setInterval((function(self) {
        return function() {
          self.updateActiveBeat();
          self.playBeat();
        };
      })(this), interval));
    }
  },

  stopSong: function() {
    if (this.get('isPlaying')) {
      $(".play-pause").addClass('paused');
      this.set('activeBeatIndex', null);
      clearInterval(this.get('songInterval'));
      this.set('songInterval', null);
    }
  },

  actions: {
    startStopSong: function() {
      if (this.get('isPlaying')) {
        this.stopSong();
      } else {
        this.startSong();
      }
    },

    changeSpeed: function(value) {
      this.set('bpm', parseInt(value));
      if (this.get('songInterval') !== null) {
        var activeBeatIndex = this.get('activeBeatIndex');
        this.stopSong();
        this.set('activeBeatIndex', activeBeatIndex);
        this.startSong();
      }
    },

    clearBeats: function() {
      this.get('soundMaps').forEach(function(soundMap) {
        soundMap.clearBeats();
      });
    }
  }
});
