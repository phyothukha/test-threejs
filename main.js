import * as Three from "three";

const canvas = document.querySelector("canvas.webgl");

/* import 4 step first
- to render canvas  
- to see 3d main caracter for camera
- to placeholder main cracter
*/
const Renderer = new Three.WebGL1Renderer({ canvas });

const scene = new Three.Scene();
const Camera = new Three.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
// to render size
Renderer.setSize(window.innerWidth, window.innerHeight);

/** Cube */
/*long way*/
/* Geometry */
// const geometry = new Three.BoxGeometry();
// /* Material */
// /*box mesh */
// const box = new Three.Mesh(geometry, material);

// scene.add(box);

/* short way */

const box = new Three.Mesh(
  new Three.BoxGeometry(),
  new Three.MeshBasicMaterial({ wireframe: true })
);
scene.add(box);

const axesHelper = new Three.AxesHelper(3);

/** to change camera position */

Camera.position.set(0, 0.1, 3);
scene.add(axesHelper);

/* 

) scale.x= width;
) scale.y= height;
) scale.z= depth;

*/

box.scale.set(2, 1.5, 2);
// box.quaternion.y = 1;

/** position to transform  x axes and y axes and z axes */

const tick = () => {
  Renderer.render(scene, Camera);
  box.rotation.x += 0.01;
  window.requestAnimationFrame(tick);
};
tick();
