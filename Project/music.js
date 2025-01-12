class Musicbtn extends HTMLElement {
    constructor() {
        super();
        const musictemplate = document.createElement("template");
        musictemplate.innerHTML = `
        <style>
            :host{
                width: 3rem;
                height: 3rem;
                overflow: hidden;
            }
            
            audio {
                display: none;
            }

            .mute-btn{
                background: none;
                border: none;
                cursor: pointer;
                width: 100%;
                height: 100%;
            }

            .mute-btn:hover img {
                filter: brightness(0) invert(1);
            }

            .mute-btn img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        </style>
        
        <audio controls autoplay loop muted>
            <source src="/audio/technoloop.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
        <button class="mute-btn">
            <img src="/icons/mute.svg" alt="mute Button">
        </button>
        `
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(musictemplate.content.cloneNode(true));
    }
    connectedCallback() {
        const audio = this.shadowRoot.querySelector('audio');
        audio.volume = 0.1;
        const button = this.shadowRoot.querySelector('.mute-btn');
        const icon = button.querySelector('img');


        button.addEventListener("click", () => {
            audio.muted = !audio.muted;
            console.log(audio.getAttributeNames());
            console.log(icon.src);
            if(audio.muted){
                icon.src = "/icons/mute.svg";
                icon.alt = 'mute Button';
            } else {
                icon.src = "/icons/unmute.svg";
                icon.alt = 'Unmute Button';
            }
        });
    }
}
customElements.define('music-btn', Musicbtn);