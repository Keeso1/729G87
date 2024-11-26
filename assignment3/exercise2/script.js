document.addEventListener('DOMContentLoaded', () => {
    init();
  });



function init (){
    const boxes = document.querySelector('.boxes');
    const dropdown = document.querySelector(".dropdown-button")


    dropdown.addEventListener('change', () => {
        const value = parseInt(dropdown.value);
        boxes.innerHTML = "" //Clears the boxes container
        for (i=0; i< value; i++) {
            let newDiv = document.createElement("div")
            boxes.appendChild(newDiv)
        }
    })
}
