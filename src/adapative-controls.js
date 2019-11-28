AFRAME.registerComponent('adaptive-controls', {

  init: function(){
    if (AFRAME.utils.device.isMobileVR() || AFRAME.utils.device.checkHeadsetConnected()) {
      return this.attachLaserControls();
    } else {
      return this.attachCursorControls();
    }
  },

  attachLaserControls: function() {
    const laser = document.createElement('a-entity');
    laser.setAttribute('raycaster', { showLine: true, objects: '[data-clickable]' })
    laser.setAttribute('line', { color: 'red' });
    laser.setAttribute('laser-controls', { hand: 'right'});
    document.querySelector('#rig').appendChild(laser)
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
