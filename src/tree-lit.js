AFRAME.registerComponent('tree-lit', {

  init: function() {
    let colors = ['green', 'red', 'blue', 'white', 'purple', 'yellow', 'orange']
    let delays = [1000, 3000, 5000, 7000, 9000, 11000, 13000]

    for(let c = 0; c < colors.length; c++){

      for(let i = 0; i <= 20; i++) {
        let randX = this._randomFloat(-0.3, 0.25)
        let randY = this._randomFloat(0.2, 2.3)
        let randZ = this._randomFloat(-0.3, 0.25)


        let pos = { x: randX, y: randY, z: randZ }

        let entity = document.createElement('a-entity')

        entity.setAttribute('class', 'tree_light')
        entity.setAttribute('position', pos)
        entity.setAttribute('mixin', 'tree-light')
        entity.setAttribute('animation__' + c , { property: 'material.emissiveIntensity',
          from: 1,
          to: 0.2,
          loop: true,
          easing: 'linear',
          delay: delays[c],
          duration: delays[c] })
        entity.setAttribute('material', { emissive: colors[c], emissiveIntensity: 1 })

        this.el.appendChild(entity)
      }



    }

  },

  _randomFloat: function(min, max) {
    return Math.random() * (max - min) + min;
  },

  _randomInt: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

})
