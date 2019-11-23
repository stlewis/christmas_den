AFRAME.registerComponent('radio', {

  init: function() {
    this.el.addEventListener('sound-ended', this.nextSong.bind(this));
    this.songIds = [
                    'sample',
                    'silent_night',
                    'joy_world',
                    'carol_bell',
                    'christmas_tree',
                    'merry_christmas' ]

    this.currentSongId = 'silent_night'
  },

  playPause: function() {
    console.log(this.currentSongId)
    let currentIdx    = this.songIds.indexOf(this.currentSongId)
    this._playSongByIndex(currentIdx)
  },

  nextSong: function(e) {

    let currentIdx    = this.songIds.indexOf(this.currentSongId)
    let nextIdx       = currentIdx + 1;

    if(nextIdx > this.songIds.length - 1) nextIdx = 0; // Cirlce to the beginning
    if(!e) this._stopCurrentSong()
    this._playSongByIndex(nextIdx)
  },

  previousSong: function() {
    let currentIdx    = this.songIds.indexOf(this.currentSongId)
    let prevIdx       = currentIdx - 1;

    if(prevIdx < 0) prevIdx = this.songIds.length - 1 // Circle to the end
    this._stopCurrentSong()
    this._playSongByIndex(prevIdx)
  },

  _playSongByIndex: function(idx) {
    this.currentSongId = this.songIds[idx]
    let soundId        = 'sound__' + this.currentSongId;
    let nextSong       = document.querySelector('['+soundId+']')

    if(nextSong.components[soundId].isPlaying){
      nextSong.components[soundId].pauseSound()
    } else {
      nextSong.components[soundId].playSound()
    }
  },

  _stopCurrentSong: function() {
    let soundId     = 'sound__' + this.currentSongId;
    let currentSong = document.querySelector('['+soundId+']')

    currentSong.components[soundId].stopSound()
  }

});
