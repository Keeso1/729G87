document.addEventListener('DOMContentLoaded', () => {
    init();
  });



function init(){
    const styleInput = document.querySelector('#styleInput');
    const changeStyleBtn = document.querySelector(".changeStyle-btn");
    let styleOutput = document.querySelector(".content div");
    let styleSelect = document.querySelector('#styleSelect');
    const newParagraphBtn = document.querySelector(".newParagraph-btn");
    const content = document.querySelector(".content");

    let font = styleSelect.value;
    styleOutput.style.fontFamily = font;

    changeStyleBtn.addEventListener("click", () => {
        const output = styleSelect.value;
        styleOutput.style.fontFamily = output;
    });

    styleInput.addEventListener('input', ()=> {
        styleOutput.innerHTML = styleInput.value;
           }
    )

    newParagraphBtn.addEventListener('click',()=>{
        let newPar = document.createElement("div");
        content.appendChild(newPar);
        styleOutput = newPar;
        let font = styleSelect.value;
        styleOutput.style.fontFamily = font;
    }

    )
}