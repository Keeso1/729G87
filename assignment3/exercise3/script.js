document.addEventListener('DOMContentLoaded', () => {
    init();
  });



function init(){
    const styleInput = document.querySelector('#styleInput');
    let styleOutput = document.querySelectorAll('.content div');
    let styleSelect = document.querySelector("#styleSelect");
    const changeStyleBtn = document.querySelector(".changeStyle-btn");
    const newParagraphBtn = document.querySelector(".newParagraph-btn");
    const content = document.querySelector(".content")

    changeStyleBtn.addEventListener("click", () => {
        const selectedFont = styleSelect.value;
        styleOutput.style.fontFamily = selectedFont;
    });

    styleInput.addEventListener('input', ()=> {
        styleOutput.innerHMTL = styleInput.value;
           }
    )

    newParagraphBtn.addEventListener('click',()=>{
        let newPar = document.createElement("div")
        content.appendChild(newPar)
        styleOutput = newPar;
    }

    )
}