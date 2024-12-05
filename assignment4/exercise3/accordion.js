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

      .accordion button {
        display: flex;
        align-items: center;
        z-index: 1;
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
      </ul>
    </div>
    `
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(this.accordion_component_template.content.cloneNode(true));
    this.accordion = this.shadowRoot.querySelector('.accordion ul');
  }
  connectedCallback() {
    let HeaderCollection = Array.from(this.getElementsByTagName('h2'));
    let contentCollection = Array.from(this.getElementsByTagName('div'));

    HeaderCollection.forEach((heading, index) => {
      let listItem = document.createElement("li");
      let text = document.createElement("div");
      let button = document.createElement("button");

      text.setAttribute("role", "region");
      text.setAttribute("hidden", "");
      button.setAttribute("aria-expanded", "false");

      this.accordion.appendChild(listItem);
      listItem.appendChild(button);
      listItem.appendChild(text);

      button.innerHTML = heading.textContent;
      text.textContent = contentCollection[index].textContent;

      text.style.opacity="0";
      //text.style.translateY="-20";
      
      button.addEventListener('click', () =>{
        let expanded = button.getAttribute("aria-expanded") === "true";
        console.log(expanded);
        button.setAttribute("aria-expanded", !expanded);

        if (expanded) {
          anime({
            targets: text,
            opacity: 0,
            zIndex: 0,
            //translateY: -20,
            duration: 500,
            easing: 'easeInOutQuad',
            complete: () => {
              text.hidden = true;
            }
          });
        } else {
          text.hidden = false;
          anime({
            targets: text,
            opacity: 1,
            zIndex: 0,
            //translateY: 0,
            duration: 500,
            easing: 'easeInOutQuad'
          });
        }
      });
    });
    
    
  }
        


      
    
  
}

customElements.define('accordion-component', MyComponent);