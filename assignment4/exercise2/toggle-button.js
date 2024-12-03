
class MyComponent extends HTMLElement {
    constructor() {
      super();
      this.toggle_button_template = document.createElement("template");
      this.toggle_button_template.innerHTML =
      `
    <style>
    html {
      box-sizing: border-box;
    }
    


  </style>

      <div class="wrapper">
        <p>label text</p>
        <div class="toggle" aria-pressed="false">
        <div class="box">
        </div>
      </div>
`
 
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(this.toggle_button_template.content.cloneNode(true));



    }
    connectedCallback() {
      let wrapperp = this.shadowRoot.querySelector(".wrapper p");
      wrapperp.innerHTML = this.getAttribute("label");
    }
  }

  customElements.define('toggle-button', MyComponent);