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
    flex: 1 0 100%;
    scroll-snap-align:start;
    object-fit:cover;
    position:relative;
    min-height: 43.75rem;
    max-width: 80rem;
    display: grid;
    grid-template-columns: auto 26.25rem auto auto;
    grid-template-rows: auto auto auto auto;
    column-gap: 2rem;
    font-family: 'Rajdhani';
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
  }
  
  .cardbackground {
  
    position: absolute;
    inset:0;
  
  }
    </style>
        <div class="card">
        <img src="images/rectangle-113-6.svg" class="cardbackground" alt="Decorative Rectangle" />
        
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
  


      this.querySelector('h1').remove();
      this.querySelector('p').remove();
      this.querySelector('img').remove();
    }
  }
  
  customElements.define('card-component', MyComponent);
  