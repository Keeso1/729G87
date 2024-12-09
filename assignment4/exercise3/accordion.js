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
        margin-bottom: 0.1vh;
        text-align: left;
        background-color: rgb(120, 132, 148);
        color:white;
        height: 5vh;
        width: 50vh;
        border: 0;
       font-size: 2vh;
      }

      .accordion button::before {
        content: "▶︎ ";
        margin-right: 1vh;
      }

      .accordion button[aria-expanded="true"]::before {
        content: "▼︎ ";
      }

      div {
      width: 49.7vh;
      font-size: 1.6vh;
      }

      .accordion ul {
      list-style: none; 
      margin: 0; 
      padding: 0;
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
      let paragraphArray = Array.from(contentCollection[index].children);
      let listItem = document.createElement("li");
      let text = document.createElement("div");
      let button = document.createElement("button");

      text.setAttribute("role", "region");
      text.setAttribute("hidden", "");
      button.setAttribute("aria-expanded", "false");

      this.accordion.appendChild(listItem);
      listItem.appendChild(button);
      listItem.appendChild(text);

      paragraphArray.forEach((element)=>{
        text.appendChild(element);
      })

      button.innerHTML = heading.textContent;

      this.getElementsByTagName("h2")[0].remove();
      this.getElementsByTagName("div")[0].remove();

      text.style.opacity="0";
    
      button.addEventListener('click', () =>{
        let expanded = button.getAttribute("aria-expanded") === "true";
        button.setAttribute("aria-expanded", !expanded);

        if (expanded) {
          anime({
            targets: text,
            opacity: 0,
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
            duration: 500,
            easing: 'easeInOutQuad',
            border:"0.1vh solid rgba(0, 0, 0, 0.3)"
          });
        }
      });
    });
  }
}

customElements.define('accordion-component', MyComponent);