AFRAME.registerComponent('card-animator', {

  init: function() {
    this.el.addEventListener('click', this.handleClick.bind(this));
    this.open = false
  },

  handleClick: function(e) {
    if(this.open) {
      this.open = false
      this.el.setAttribute('animation', { property: 'object3D.rotation.y', from: 170, to: 60, dur: 2000, dir: 'reverse', easing: 'easeInOutQuad' })
    } else {
      this.open = true
      this.el.setAttribute('animation', { property: 'object3D.rotation.y', from: 60, to: 170, dur: 2000, dir: 'reverse', easing: 'easeInOutQuad' })
    }
  }

});
