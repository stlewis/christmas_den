AFRAME.registerComponent('tree-lights', {

  init: function() {
    let colors = ['#008000', '#ff0000', '#0000ff', '#ffffff', '#800080', '#ffff00', '#ff5733']
    let delays = [1000, 3000, 5000, 7000, 9000, 11000, 13000]
    let el     = this.el;

    for(let i = 0; i < 50; i++) {
      let idx = this._randomInt(0, colors.length - 1)
      let thisColor = colors[idx]

      let newLight = document.createElement('a-entity');

      newLight.setAttribute('geometry', { primitive: 'icosahedron', radius: 0.008, height: 0.008 });
      newLight.setAttribute('material', { shader: 'flat', color: thisColor });
      newLight.setAttribute('animation__blink_' + idx,
        { property: 'material.color',
          from: thisColor,
          type: 'color',
          to: '#000000',
          loop: true,
          round: true,
          easing: 'linear',
          dir: 'alternate',
          delay: delays[idx] })

      this.el.appendChild(newLight);
    }


  },

  _randomFloat: function(min, max) {
    return Math.random() * (max - min) + min;
  },

  _randomInt: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

})

