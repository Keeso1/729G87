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
          animation: rotate 1s;
          animation-direction: reverse;
        }

        .accordion button[aria-expanded="true"]::before {
          content: "▼︎ ";
          animation: rotate 1s;
        }
        
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
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

        button.addEventListener('click', () =>{
          let expanded = button.getAttribute("aria-expanded") === "true";
          console.log(expanded);
          button.setAttribute("aria-expanded", !expanded);
          text.hidden = !text.hidden;
          if (expanded){

          } else{
            
          }
        })
      });
      
      
        }
        


      
    
  
  }

  customElements.define('accordion-component', MyComponent);