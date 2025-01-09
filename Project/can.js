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
            :host {
                display: block;
                width: 100%;
            }

            * {
                box-sizing: border-box;
            }
                
            div {
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
        
        <div id="bg"></div>
        `
        this.attachShadow({ mode: 'open' });
        this.host = this.shadowRoot.host;
        this.shadowRoot.appendChild(CanTemplate.content.cloneNode(true));
        this.container = this.shadowRoot.querySelector("#bg");
    }
    
    connectedCallback() {
        this.init();
        this.renderer.render(this.scene, this.camera);
    }

    init() {
        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(50, this.host.offsetWidth / this.host.offsetWidth, 0.1, 100);
        console.log( "camera:", this.host.offsetWidth, this.host.offsetHeight );

        this.object;

        this.controls;

        this.renderobject = "can";

        this.Loader = new GLTFLoader();

        this.Loader.load(
            "models/${soda_can}/scene.gltf",

            function(gltf){
                object = gltf.this.scene;
                this.scene.add(object);
            },

            function(xhr){
                console.log((xhr.loaded / xhr.total * 100) + "% loaded");
            },

            function(error){
                console.error(error);
            }
        );

        this.renderer = new THREE.WebGLRenderer({ alpha: true});

        const width = this.container.width;
		const height = this.container.height;
        this.renderer.setSize(width, height, false);

        this.container.appendChild(this.renderer.domElement);

        this.camera.position.z = 5;

        this.toplight = new THREE.DirectionalLight(0xffffff, 1);
        this.topLight.position.set(500, 500, 500);
        this.topLight.castShadow = true;
        this.scene.add(this.topLight);

        this.ambientLight = new THREE.AmbientLight(0x333333, this.renderobject === "soda_can" ? 5 : 1);
        this.scene.add(this.ambientLight);

        if (this.renderobject === "soda_can") {
            this.controls = new OrbitControls(this.camera, this.renderer.domElement);
          }
	}
}

customElements.define('my-can', MyCan);