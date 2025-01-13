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
                background: url("images/Frame 3.svg") no-repeat center center;
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
        this.animate();
        this.onmousemove = (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY; 
            // TODO
          }
    }

    init() {
        this.scene = new THREE.Scene();
       

        this.camera = new THREE.PerspectiveCamera(50, this.container.offsetWidth / this.container.offsetHeight, 0.1, 100);
        console.log( "camera:", this.host.offsetWidth, this.host.offsetHeight );

        this.object;

        this.controls;

        const width = this.container.offsetWidth;
        const height = this.container.offsetHeight;

        this.mouseX = width / 2;
        this.mouseY = height / 2;

        this.renderobject = "soda_can";

        this.Loader = new GLTFLoader();

        this.Loader.load(
            `models/${this.renderobject}/scene.gltf`,

            (gltf) =>{
                this.object = gltf.scene;

                const box = new THREE.Box3().setFromObject(this.object);
                const size = new THREE.Vector3();
                box.getSize(size);
                const can_height = size.y;
                this.object.position.set(0, -can_height / 2, 0);
                this.scene.add(this.object);
            },

            (xhr) => {
                console.log((xhr.loaded / xhr.total * 100) + "% loaded");
            },

            (error) => {
                console.error(error);
            }
        );

        this.renderer = new THREE.WebGLRenderer({ alpha: true});

        this.renderer.setSize(width, height, false);

        this.container.appendChild(this.renderer.domElement);

        this.camera.position.set(7, -3, 3);

        this.topLight = new THREE.DirectionalLight(0xffffff, 1);
        this.topLight.position.set(1, 1, 1);
        this.topLight.castShadow = true;
        this.scene.add(this.topLight);
        

        this.ambientLight = new THREE.AmbientLight(0x333333, this.renderobject === "soda_can" ? 5 : 1);
        this.scene.add(this.ambientLight);


        if (this.renderobject === "soda_can") {
            this.controls = new OrbitControls(this.camera, this.renderer.domElement);
            this.controls.enableZoom = false;
          }

        window.addEventListener("resize", () => {
            const width = this.container.offsetWidth;
            const height = this.container.offsetHeight;
            console.log(width, height)
            this.camera.aspect = width/height;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(width, height);
        });

        const axesHelper = new THREE.AxesHelper(5);
        this.scene.add(axesHelper);
	}

    animate() {
        requestAnimationFrame(() => this.animate());
        if (this.object && this.objToRender === "soda_can") {
            this.object.rotation.y = -3 + this.mouseX / width * 3;
            this.object.rotation.x = -1.2 + this.mouseY * 2.5 / height;
            // TODO
          }
        this.renderer.render(this.scene, this.camera);
    }
}

customElements.define('my-can', MyCan);