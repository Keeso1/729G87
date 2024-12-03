
class MyComponent extends HTMLElement {
    constructor() {
      this.toggle_button_template = document.createElement("template");
      this.toggle_button_template.innerHTML =
      `
      <div class="wrapper">
        <p>label text</p>
        <div class="toggle" aria-pressed="false"></div>
      </div>
`
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(this.toggle_button_template.content.cloneNode(true));



    }
    connectedCallback() {
      let wrapperp = this.shadowRoot.querySelector(".wrapper p");
      wrapperp.innerHTML = document.getAttribute("label").value;
    }
  }

  customElements.define('toggle-button', MyComponent);