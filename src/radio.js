AFRAME.registerComponent('radio', {

  init: function() {
    this.el.addEventListener('sound-ended', this.nextSong.bind(this));
  },

  nextSong: function(e) {
    let songIds = [
                    'silent_night',
                    'joy_world',
                    'carol_bell',
                    'christmas_tree',
                    'merry_christmas' ]

    let currentSongId = e.detail.id
    let currentIdx    = songIds.indexOf(currentSongId)
    let nextIdx       = currentIdx + 1;

    if(nextIdx > songIds.length - 1) nextIdx = 0;

    let nextSongId = songIds[nextIdx]
    let soundId    = 'sound__' + nextSongId;

    let nextSong = document.querySelector('['+soundId+']')

    console.log(nextSong.components)

    nextSong.components[soundId].playSound()
  }

});
