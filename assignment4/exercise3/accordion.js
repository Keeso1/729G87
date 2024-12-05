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
        let accordionHeadercollection = Array.from(this.getElementsByTagName('h2'));
        let buttonlist = this.shadowRoot.querySelectorAll('.accordion button');

        buttonlist.forEach(button => {
          button.innerHTML = header.innerHTML 
          
          console.log(button.innerHTML); 
        })
      
      }
        


      
    
  
  }

  customElements.define('accordion-component', MyComponent);