
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
    .wrapper{
    display:flex;
    flex-direction:row;
    align-items:center;

    }

    .toggle{
    height: 2vh;
    width: 2vh;
    border: 0.1vh solid black;
    }

    [role="button"][aria-pressed="true"]{
    background: green;
    }
    


  </style>

      <div class="wrapper">
        <p>label text</p>
        <div class="toggle" role="button" aria-pressed="false"></div>
      </div>
`
 
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(this.toggle_button_template.content.cloneNode(true));



    }
    connectedCallback() {
     

      let wrapperp = this.shadowRoot.querySelector(".wrapper p");
      wrapperp.innerHTML = this.getAttribute("label");
      this.setAttribute("value", "0");
      
      this.shadowRoot.addEventListener("click", ()=>{
        let toggled = this.shadowRoot.querySelector(".toggle");
        let pressed = toggled.getAttribute("aria-pressed") === "true";

        toggled.setAttribute("aria-pressed", !pressed);
        this.setAttribute("value", !pressed ? "1" : "0");
        console.log(value);
      
       const customEvent = new customEvent("input", {bubbles: true}) 
       document.querySelector("#buttons").dispatchEvent(customEvent)
      })
    }
    get value() {
      return parseInt(this.getAttribute("value"), 10);
    }
  }

  customElements.define('toggle-button', MyComponent);