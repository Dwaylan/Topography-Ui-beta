import * as THREE from "three";

// Creating a new function for drawing lines rather than creating a box
const LinesUI = () => {
  const renderer = new THREE.WebGLRenderer();
  // .setSize() Resizes the output canvas to (width, height), and also sets the viewport to fit that size, starting in (0, 0).
  renderer.setSize(window.innerWidth, window.innerHeight);
  // Appending the renderer to the DOM
  document.body.appendChild(renderer.domElement);

  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    500
  );
  camera.position.set(0, 0, 100);
  camera.lookAt(0, 0, 0);

  const scene = new THREE.Scene();

  //create a blue LineBasicMaterial
  const material = new THREE.LineBasicMaterial({ color: 0x0000ff });

  // After material we will need a geometry with some vertices using the XYZ axis
  const points = [];
  points.push(new THREE.Vector3(-10, 0, 0));
  points.push(new THREE.Vector3(0, 10, 0));
  points.push(new THREE.Vector3(10, 0, 0));

  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const line = new THREE.Line(geometry, material);
  scene.add(line);
  renderer.render(scene, camera);
  // You should now be seeing an arrow pointing upwards, made from two blue lines.
};

export default LinesUI;
