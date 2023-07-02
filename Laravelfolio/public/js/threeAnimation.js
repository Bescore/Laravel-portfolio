import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.117.1/build/three.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.117.1/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js';

//ciblage des divs nécessaires
const myCanvas = document.querySelector( '#myCanvas' );
const myCanvasContainer = document.querySelector( '#myCanvasContainer' );

// Initialisation de la scène, de la caméra et du moteur de rendu ,creation sde la scene + rendu
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  50,
  myCanvas.offsetWidth / myCanvas.offsetHeight,
  0.1,
  1000
);
var renderer = new THREE.WebGLRenderer();
renderer.setSize( myCanvas.offsetWidth, myCanvas.offsetHeight );
//envoyer le rendu dans la div html
myCanvas.appendChild( renderer.domElement );

// Ajout des contrôles de caméra
const controls = new OrbitControls( camera, renderer.domElement );

//ici controle du mouvement possible avec la camera, maxdistance et min distance pour limiter les mouvements de zoom, pan desactiver le click droit
//controls.minPolarAngle = Math.PI/2; // radians
//controls.maxPolarAngle = Math.PI/2;
controls.maxDistance = 0.9;
controls.minDistance = 0.02;
controls.enablePan = false;

//chargement du modèle
const loader = new GLTFLoader();

//ajout de lumière (4 possible ambient lumiere globale, spotlight, point light, directionalLight revoir la doc)
const light = new THREE.AmbientLight( 0xffffff, 3 )
//const light = new THREE.SpotLight( 0xffffff, 4 )
light.position.set( 0, 1, 0)
camera.position.set( 1, 1, 1 )

//ajout da la lumière a la scene
scene.add( light )

const objetImported = await loader.loadAsync( '/models/pc.glb' );
scene.add( objetImported.scene );

//bg color // en paramettre ->recuperer le couleur de l'encart en haut à gauche de l'ecran
scene.background = new THREE.Color( getComputedStyle(document.querySelector('.little-square')).backgroundColor );


// Création d'un cube
//var geometry = new THREE.BoxGeometry( 1, 1, 1 );
//var material = new THREE.MeshBasicMaterial( { color: 0x1D2125, roughness:0 } );
//var cube = new THREE.Mesh( geometry, material );
//scene.add(cube);

// Positionnement de la caméra
camera.position.z = 0;
//camera.position.x = 0;
camera.position.y = 0.5;
objetImported.scene.rotation.y = 1.5




//animation contenu dans le glb
const mixer = new THREE.AnimationMixer( objetImported.scene );

const clips = objetImported.animations;

// Vous pouvez vérifier la liste des animations disponibles dans votre fichier GLB
//onsole.log( clips );

// Sélectionnez l'animation que vous souhaitez jouer (par exemple, la première animation)
const action = mixer.clipAction( clips[ 0] );

// Démarrer l'animation
action.play();
objetImported.scene.position.y = -0.2;

// Animation de la scène
function animate () {
  requestAnimationFrame( animate );
  // cube.rotation.x += 0.001;
  // cube.rotation.y += 0.001;
  //objetImported.scene.children[0].rotation.y += 0.0011;
  objetImported.scene.rotation.y -= 0.0010;
  // Mettre à jour le mélangeur à chaque frame
  const delta = 0.0045; // Temps écoulé depuis la dernière frame
  mixer.update( delta );

  //si on maintien le click l'animation s'arrete
  myCanvasContainer.addEventListener( "mousedown",function() {
  if ( action.isRunning() ) {
    action.paused=true
  } 
  } );
  
  //si on relache le click l'annimation s'arrête
  myCanvasContainer.addEventListener( "mouseup",function() {
    if(!action.isRunning()) {
      action.paused=false
    }
  } );

  //ici on active le controle camera et on active la scène
  controls.update();
  renderer.render( scene, camera );

}



animate();