const blueSquare = document.getElementById('blueSquare');

document.addEventListener('DOMContentLoaded', () => {
    blueSquare.addEventListener('mouseover',
        () => {
          blueSquare.style.display = 'none';
        },);
  });