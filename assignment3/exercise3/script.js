document.addEventListener('DOMContentLoaded', () => {
    init();
  });



function init(){
    const styleInput = document.querySelector('#styleInput');
    let styleOutput = document.querySelector('#styleOutput');
    const styleSelect = document.querySelector("#styleSelect");
    const changeStyleBtn = document.querySelector(".changeStyle-btn");
    const newParagraphBtn = document.querySelector(".newParagraph-btn");
    const content = document.querySelector(".content")

    changeStyleBtn.addEventListener("click", () => {
        const selectedFont = styleSelect.value;
        styleOutput.style.fontFamily = selectedFont;
    });

    styleInput.addEventListener('input', ()=> {
        styleOutput.value = styleInput.value;
           }
    )

    newParagraphBtn.addEventListener('click',()=>{
        let newPar = document.createElement("textarea")
        content.appendChild(newPar)
        styleOutput = newPar;
    }

    )
}