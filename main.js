import "./style.css";
import * as THREE from "three";
// OrbitControls allows us to move around the scene using our mouse
import { OrbitControls } from "three/examples/jsm/controls/orbitcontrols";

// Setup:

// Scene is like a container that holds all of your objects cameras and lights
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
// Make it fullscreen canvas by setting the renderer size to window size
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

// Render in renderer means draw it
renderer.render(scene, camera);

// Torus:

// Add objest to the screen:
// Big 3D ring
const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
// Material is like a wrapping paper for an object (MeshBasicMaterial need no light)
const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });

const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

// Light:

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// Helpers:

// const lightHelper = new THREE.PointLightHelper(pointLight);
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper);

// What this will do is listen to DOM events on the mouse and update the camera position accordingly
// const controls = new OrbitControls(camera, renderer.domElement);

// Star:

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  // Randomly position stars through the scene
  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

// How many stars do we want to add to the scene?
Array(200).fill().forEach(addStar);

// Background:

const spaceTexture = new THREE.TextureLoader().load("space.jpg");
scene.background = spaceTexture;
