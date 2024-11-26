document.addEventListener('DOMContentLoaded', () => {
    init();
  });



function init (){
    const rectangles = document.querySelectorAll('#wrapper .rectangle');
    rectangles.forEach((element) => {
        element.addEventListener('mouseover', () =>{
            anime({
                targets: element,
                height: '70vh', 
                easing: 'easeInOutQuad',
                direction: 'alternative',
                loop: false
              });
            
        })
        element.addEventListener('mouseout', () =>{
            anime({
                targets: element,
                height: '5vh', 
                easing: 'easeInOutQuad',
                direction: 'alternative',
                loop: false
              });
    })
})
}