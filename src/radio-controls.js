AFRAME.registerComponent('radio-controls', {

  init: function() {
    this.el.addEventListener('click', this.handleClick.bind(this));
  },

  handleClick: function(e) {
    let buttonId = e.target.getAttribute('id')
    let radio    = document.querySelector('[radio]').components.radio

    switch(buttonId){
      case 'skipBack':
        radio.previousSong()
        break;
      case 'skipForward':
        radio.nextSong()
        break;
      case 'playPause':
        radio.playPause()
        break;
    }

  }

})
