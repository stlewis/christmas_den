AFRAME.registerComponent('adaptive-controls', {

  init: function(){
    if (AFRAME.utils.device.checkHeadsetConnected()) {
      return this.attachLaserControls();
    } else {
      return this.attachCursorControls();
    }
  },

  attachLaserControls: function() {
    const laserR = document.createElement('a-entity');
    const laserL = document.createElement('a-entity');
    laserR.setAttribute('raycaster', { showLine: true, objects: '[gui-interactable]' })
    laserR.setAttribute('line', { color: 'red' });
    laserR.setAttribute('laser-controls', { hand: 'right'});

    laserL.setAttribute('raycaster', { showLine: true, objects: '[gui-interactable]' })
    laserL.setAttribute('line', { color: 'red' });
    laserL.setAttribute('laser-controls', { hand: 'left'});

    document.querySelector('#rig').appendChild(laserR)
    document.querySelector('#rig').appendChild(laserL)
  },

  attachCursorControls: function() {
    const cursor = document.createElement('a-entity');
    cursor.setAttribute('geometry', { primitive: 'circle', radius: 0.0002 });
    cursor.setAttribute('material', { color: 'red', shader: 'flat' });
    cursor.setAttribute('position', { x: 0, y: 0, z: -0.025 });

    cursor.setAttribute('cursor', { fuse: false });
    cursor.setAttribute('raycaster', { objects: '[gui-interactable]' })

    document.querySelector('[camera]').appendChild(cursor)
  }

});
