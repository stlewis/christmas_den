AFRAME.registerComponent('tree-lights', {

  init: function() {
    let colors    = ['#008000', '#ff0000', '#0000ff', '#ffffff', '#800080', '#ffff00', '#ff5733']
    //let colors    = ['#008000', '#ff0000', '#0000ff']
    let durations = [1000, 1200, 1300, 1400, 1500, 1600, 1700]
    let el        = this.el;

    for(let i = 0; i < 50; i++) {
      let idx = this._randomInt(0, colors.length - 1)
      let thisColor = colors[idx]

      let newLight = document.createElement('a-entity');

      newLight.setAttribute('geometry', { primitive: 'dodecahedron', radius: 0.008 });
      newLight.setAttribute('material', { shader: 'flat', color: thisColor });
      newLight.setAttribute('rotation', { x: -90 })
      newLight.setAttribute('animation',
        { property: 'components.material.material.color',
          from: thisColor,
          type: 'color',
          to: '#000000',
          loop: true,
          round: true,
          isRawProperty: true,
          dir: 'alternate',
          dur: 3000,
          delay: durations[idx]
        })

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

