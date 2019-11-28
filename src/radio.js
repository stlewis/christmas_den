AFRAME.registerComponent('radio', {

  init: function() {
    this.el.addEventListener('sound-ended', this.nextSong.bind(this));
    this.songIds = [
                    'silent_night',
                    'joy_world',
                    'carol_bell',
                    'christmas_tree',
                    'merry_christmas' ]

    this.currentSongId = 'silent_night'
  },

  playPause: function() {
    let soundId = 'sound__'+ this.currentSongId
    let soundSelector = '['+soundId+']'
    let btn  = document.querySelector('#playPause')
    let cont = btn.parentNode;

    let currentSong = document.querySelector(soundSelector)
    let sound       = currentSong.components[soundId]

    let newBtn = document.createElement('a-gui-icon-button')
    newBtn.setAttribute('id', 'playPause')
    newBtn.setAttribute('margin', '0.25 0.25 0.25 0.25')
    newBtn.setAttribute('width', '0.75')
    newBtn.setAttribute('height', '0.75')
    newBtn.setAttribute('radio-controls', '')
    newBtn.setAttribute('gui-interactable', '')
    newBtn.setAttribute('gui-item', '')
    newBtn.setAttribute('gui-icon-button', '')
    newBtn.setAttribute('role', 'button')

    if(sound.isPlaying) {
      sound.pauseSound()
      newBtn.setAttribute('icon', 'ios-play')
    } else {
      sound.playSound()
      newBtn.setAttribute('icon', 'ios-pause')
    }

    cont.replaceChild(newBtn, btn)
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

    nextSong.components[soundId].playSound()
  },

  _stopCurrentSong: function() {
    let soundId     = 'sound__' + this.currentSongId;
    let currentSong = document.querySelector('['+soundId+']')

    currentSong.components[soundId].stopSound()
  }

});
