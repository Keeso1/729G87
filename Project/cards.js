class MyComponent extends HTMLElement {
    constructor() {
      super();
      this.card_component_template = document.createElement("template");
      this.card_component_template.innerHTML = `
<style>
    * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
 

  .card {
    z-index: 1;
    position: relative;
    min-height: 43.75rem;
    display: grid;
    justify-content: center;
    grid-template-columns: auto 26.25rem auto auto;
    grid-template-rows: auto auto auto auto;
    column-gap: 2rem;
    font-family: 'Rajdhani';
    overflow: hidden;
    background-image: url("images/rectangle-113-6.svg");
    background-repeat:no-repeat;
    border-right: 8px solid rgba(94, 246, 255, 0.5);
    width:0px;
    margin-right: 1077px;
    transition: 1.5s ease-in;
    animation:flicker 0.1s infinite;
}

.card.reveal{
    width:1077px;
    clip-path: inset(0); 
    margin:0px;
}

  .cardheader{
    grid-row-start:2;
    grid-column-start: 2;
    grid-row-end: 2;
    grid-column-end: 2;
    font-size: 3rem;
    font-weight:bold;
    text-align: left;
    color: rgba(94, 246, 255, 1);
    filter:drop-shadow(0 0 5px rgba(94, 246, 255, 0.7));
  }
  
  
  .cardparagraph {
    grid-row-start:3;
    grid-column-start: 2;
    grid-row-end: 3;
    grid-column-end: 2;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: left;
    color: rgba(94, 246, 255, 1);
    filter:drop-shadow(0 0 5px rgba(94, 246, 255, 0.7));
  }
  
  
  
 
  .cardimage {
    grid-row-start:3;
    grid-column-start: 3;
    grid-row-end: 3;
    grid-column-end: 3;
    border: 1px solid rgba(94, 246, 255, 1);
    border-radius: 1.25rem;
    width: 23.125rem;
    height: 21.875rem;
    filter:drop-shadow(0 0 5px rgba(94, 246, 255, 1));
  }
  
  .scaled {
    transform: scale(1.1); 
    
}
     @keyframes flicker {
    0%, 100% {
        border-color: rgba(94, 246, 255, 0.5); 
    }
    50% {
        border-color: rgba(94, 246, 255, 1);
    }
    25%, 75% {
        border-color: rgba(94, 246, 255, 0.0); 
    }
}
    


    </style>
        <div class="card">
        </div>
      `
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(this.card_component_template.content.cloneNode(true));
      this.card = this.shadowRoot.querySelector('.card');
    }
  
    connectedCallback() {

      let origionalHeader = this.querySelector('h1');
      let origionalText = this.querySelector('p');
      let showcaseimage = this.querySelector('img');

      this.querySelector('h1').remove();
      this.querySelector('p').remove();
      this.querySelector('img').remove();
  
    
      let newheader = document.createElement("h1");
      let newtext = document.createElement("p");
      let newshowcaseimage = document.createElement('img');

      newheader.classList.add("cardheader");
      newtext.classList.add("cardparagraph");
      newshowcaseimage.classList.add("cardimage");
  

      newheader.innerHTML = origionalHeader.innerHTML;
      newtext.innerHTML = origionalText.innerHTML;
      newshowcaseimage.src = showcaseimage.src;

     
      this.card.appendChild(newheader);
      this.card.appendChild(newtext);
      this.card.appendChild(newshowcaseimage);
      
      setTimeout(() => {
        this.card.classList.add('reveal');
    }, 1500);

    setTimeout(() => {
      this.card.style.borderRight="none"
    this.card.style.animation="none";
  }, 3000);
    
      const slider = document.querySelector(".slider");

        if (slider) {
            let isScrolling;

            const scaleSlider = () =>{
              slider.classList.add("scaled");
            }

            const scaleCard = () => {
                this.card.classList.add("scaled");
            };

            const resetCard = () => {
                this.card.classList.remove("scaled");
            };

            const resetSlider = () => {
              slider.classList.remove("scaled");
            }

            slider.addEventListener("scroll", () => {
                scaleSlider();
                scaleCard();
                

                clearTimeout(isScrolling);

                isScrolling = setTimeout(() => {
                    resetCard();
                    resetSlider();
                }, 0);
            });
      }
    }
  }
  
  
  customElements.define('card-component', MyComponent);
  