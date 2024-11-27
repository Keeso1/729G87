document.addEventListener('DOMContentLoaded', () => {
    init();
  });



function init (){
    const circles = document.querySelectorAll('.row .circle');
    const squares = document.querySelectorAll('.row .square');
    const rectangles = document.querySelectorAll('.row .rectangle');

    circles.forEach((element) => {
    element.addEventListener('click', ()=>{
        element.classList.toggle("green")
      
     })
    })

    squares.forEach((element) => {
        element.addEventListener('click', () =>{
            const currentHeight = parseFloat(getComputedStyle(element).height); 
            const currentWidth = parseFloat(getComputedStyle(element).width); 
            element.style.height = (currentHeight / 2) + "px"; 
            element.style.width = (currentWidth / 2) + "px"; 
        })
    })
    
    rectangles.forEach((element) => {
        element.addEventListener('click', () =>{
            const currentPosition = parseFloat(getComputedStyle(element).marginBottom); 
            element.style.marginBottom = (currentPosition - 10) + "px"; 
        })
    })
}