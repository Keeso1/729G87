const info_message_template = document.createElement("template");
info_message_template.innerHTML =
`
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fork-awesome@1.2.0/css/fork-awesome.min.css" integrity="sha256-XoaMnoYC5TH6/+ihMEnospgm0J1PM/nioxbOUdnM8HY=" crossorigin="anonymous">
  <style>
    html {
      box-sizing: border-box;
    }

    .heading{
      background-color: orange;
      color:white;
      font-weight: bold;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    
    .title{
    margin-left: 1%;
    }

    .message{
    margin: 1%;
    }
    
    .infobox{
    border: 0.1vw solid black;
    margin: 4%;
    font-family: Sans-serif;
    }
  </style>
  <div class="infobox">
    <div class="heading">
      <div class="icon center">
        <i class="fa fa-info-circle fa-lg fa-inverse fa-fw" aria-hidden="true"></i>
      </div>
      <div class="title">
        <p><slot name="title">TITLE GOES HERE</slot></p>
      </div>
    </div>
    <div class="message">
      <slot name="message">MESSAGE</slot>
    </div>
  </div>
`

class MyComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(info_message_template.content.cloneNode(true));
    }
    
    connectedCallback() {

    }
  }

  customElements.define('my-component', MyComponent);