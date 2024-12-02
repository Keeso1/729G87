const toggle_button_template = document.createElement("template");
toggle_button_template.innerHTML =
`
<div class="wrapper">
  <p>label text</p>
  <div class="toggle" aria-pressed="false"></div>
</div>
`

class MyComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(toggle_button_template.content.cloneNode(true));



    }
    connectedCallback() {

    }
  }

  customElements.define('toggle-button', MyComponent);