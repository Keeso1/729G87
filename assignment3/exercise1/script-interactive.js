const blueSquare = document.getElementById('blueSquare');

function mouseOver(Object){
    Object.style.display = 'none';
  }

document.addEventListener('DOMContentLoaded', () => {
    blueSquare.addEventListener('mouseover',
        () => {
          mouseOver(blueSquare);
        },);
  });