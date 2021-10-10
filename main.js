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
