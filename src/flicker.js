AFRAME.registerComponent('flicker', {

  init: function() {
    this.flicker = AFRAME.utils.throttle(this.flicker, 50, this)
  },

  tick: function() {
    this.flicker()
  },

  flicker: function() {
    this.el.getObject3D('light').intensity = 0.2 + Math.random();
  }



});
