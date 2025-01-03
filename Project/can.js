import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';





class MyCan extends HTMLElement {
    constructor() {
        super();
        const CanTemplate = document.createElement("template");
        CanTemplate.innerHTML =
        `
        <style>
            * {
                box-sizing: border-box;
            }
                
            canvas {
                width: 100%;
                min-height: 100%;
                border: 3px solid #73AD21;
            }

            #bg {
                width: 100%;
	            height: 100%;
	            display: block;
	            border: 1px solid red;
            }

        </style>
        
        <canvas id="bg"></canvas>
        `
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(CanTemplate.content.cloneNode(true));
        this.canvas = this.shadowRoot.querySelector("#bg");

        // const controls = new OrbitControls( camera, renderer.domElement );
        // const loader = new GLTFLoader();
    }
    
    connectedCallback() {
        this.init();
        this.renderer.render(this.scene, this.camera);
    }

    init() {
        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas
        });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.camera.position.setZ(30);

        this.geometry = new THREE.BoxGeometry(1, 1, 1);
		this.material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
		this.cube = new THREE.Mesh(this.geometry, this.material);
		this.scene.add( this.cube );

	}
}

customElements.define('my-can', MyCan);