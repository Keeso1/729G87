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
            }

            #bg {
                width: 100%;
	            height: 100%;
	            display: block;
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

        const width = this.container.offsetWidth;
        const height = this.container.offsetHeight;

        this.mouseX = width / 2;
        this.mouseY = height / 2;

        this.isMouseOver = false;

        this.container.addEventListener("mouseenter", () => {
            this.isMouseOver = true;
        });

        this.container.addEventListener("mouseleave", () => {
            this.isMouseOver = false;
        });

        this.container.addEventListener("mousemove", (e) => {
            const rect = this.container.getBoundingClientRect();
            this.mouseX = e.clientX - rect.left *2;
            this.mouseY = e.clientY - rect.top * 2;
        });
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

        this.renderobject = "soda_can(1)";

        this.Loader = new GLTFLoader();

        this.Loader.load(
            `models/${this.renderobject}/scene.gltf`,

            (gltf) =>{
                this.object = gltf.scene;
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

        //Light 1
        this.topLight = new THREE.DirectionalLight(0xffffff, 1);
        this.topLight.position.set(10, 10, 0);
        this.topLight.castShadow = false;
        this.topLight.intensity = 100;
        this.scene.add(this.topLight);

        //Light 2
        this.topLight2 = new THREE.DirectionalLight(0xffffff, 1);
        this.topLight2.position.set(-10, 10, 0);
        this.topLight2.castShadow = false;
        this.topLight2.intensity = 100;
        this.scene.add(this.topLight2);

        //AmbientLight
        this.ambientLight = new THREE.AmbientLight(0xffffff, 1);
        this.ambientLight.position.set(-5,-5,0);
        this.scene.add(this.ambientLight);

        if (this.renderobject === "soda_can(1)") {
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

	}

    animate() {
        requestAnimationFrame(() => this.animate());
        const width = this.container.offsetWidth;
        const height = this.container.offsetHeight;

        const sensitivityX = 2.5; // Increase this value for greater left-right effect
        const sensitivityY = 0.2;   // Keep this lower for vertical movements

        if (this.object) {
            if (this.isMouseOver) {
                // Rotate based on mouse position
                this.object.rotation.y = (this.mouseX - width / 2) / width * Math.PI * sensitivityX; // Adjust scaling factor if necessary
                this.object.rotation.x = (this.mouseY - height / 2) / height * Math.PI * sensitivityY; // Adjust scaling factor if necessary
            } else {
                const idleRotationSpeed = 0.05; // Adjust speed of interpolation
                const targetRotationY = this.object.rotation.y + 0.01; // Slow spin
                const targetRotationX = 0; // Reset vertical tilt

                // Smoothly interpolate current rotation to the target
                this.object.rotation.y += (targetRotationY - this.object.rotation.y) * idleRotationSpeed;
                this.object.rotation.x += (targetRotationX - this.object.rotation.x) * idleRotationSpeed;
            }
        }

        this.renderer.render(this.scene, this.camera);
    }
}

customElements.define('my-can', MyCan);