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
    <li>
      <button aria-expanded="false">Accordion 2 title</button>
      <div role="region" hidden=""><p>Content for Accordion 2</p></div>
    </li>
    <li>
      <button aria-expanded="false">Accordion 3 title</button>
      <div role="region" hidden=""><p>Content for Accordion 3</p></div>
    </li>
  </ul>
</div>

      `
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(this.accordion_component_template.content.cloneNode(true));

    }
    connectedCallback() {
        let accordionButtonlist = this.shadowRoot.querySelectorAll(".accordion button");
        let accordionHeaderlist = document.querySelectorAll('h2');
        console.log(accordionButtonlist);
        console.log(accordionHeaderlist);
      
        }
        


      
    
  
  }

  customElements.define('accordion-component', MyComponent);