class MyComponent extends HTMLElement {
    constructor() {
      super();
      this.accordion_component_template = document.createElement("template");
      this.accordion_component_template.innerHTML =
      `
      <style>
    html {
      box-sizing: border-box;
    }
   .accordion button::before {
  content: "▶︎ ";
}

.accordion button[aria-expanded="true"]::before {
  content: "▼︎ ";
}


  </style>
     <div class="accordion">
  <ul>
    <li>
       <button aria-expanded="false">Accordion 1 title</button>
       <div role="region" hidden=""><p>Content for Accordion 1</p></div>
    </li>
  </ul>
</div>

      `
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(this.accordion_component_template.content.cloneNode(true));

    }
    connectedCallback() {
        let accordionHeadercollection = Array.from(this.getElementsByTagName('h2'));
        console.log(accordionHeadercollection);

        accordionHeadercollection.forEach(element => {
          this.createElement
          this.shadowRoot.querySelector()
          console.log(element.textContent); // Loop over and log each element's text
      });
      
        }
        


      
    
  
  }

  customElements.define('accordion-component', MyComponent);