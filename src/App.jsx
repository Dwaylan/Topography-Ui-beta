import * as THREE from 'three'

// Creating a new scene object
const scene = new THREE.Scene();

// Creates a new perspective camera to view objects
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
// .setSize() Resizes the output canvas to (width, height), and also sets the viewport to fit that size, starting in (0, 0).
renderer.setSize( window.innerWidth, window.innerHeight );
// Appending the renderer to the DOM
document.body.appendChild( renderer.domElement );

// Box geomerty paramaters are length, width, and height, creating three dimensions 
const geometry = new THREE.BoxGeometry( 1, 1, 1 );

const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

// Creating a new instance of "Mesh" with geometry and material a parameters.
// geometry will provide the length, width, and height
// material will provide color and a physical material to envelop the object
const cube = new THREE.Mesh( geometry, material );

// Adding the cube object to the scene
// Think of this as literally adding a cube to the front of a newly created stage
scene.add( cube );

// Providing a local position for a camera
camera.position.z = 5;


// This will create a loop that causes the renderer to draw the scene every time the screen is refreshed (on a typical screen this means 60 times per second).
// If you're new to writing games in the browser, you might say "why don't we just create a setInterval ?"
// The thing is - we could, but requestAnimationFrame which is internally used in WebGLRenderer has a number of advantages. 
// Perhaps the most important one is that it pauses when the user navigates to another browser tab, hence not wasting their precious processing power and battery life.
 function animate() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );

function App() {
}

export default App;
