import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';





class MyComponent extends HTMLElement {
    constructor() {
        super();
        const info_message_template = document.createElement("template");
        info_message_template.innerHTML =
        `
        <style>
            
        </style>
        <div class="3dcontainer">
            
        </div>
        `
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(info_message_template.content.cloneNode(true));

        const controls = new OrbitControls( camera, renderer.domElement );
        const loader = new GLTFLoader();
    }
    
    connectedCallback() {

    }
}

customElements.define('can', MyComponent);