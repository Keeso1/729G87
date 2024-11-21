// hämta alla nödvändiga element för pilfunktioner
const images = document.querySelectorAll('#middle .imgBox img');
const bottomImages = document.querySelectorAll('.boxContainer .imgBox img');

let currentIndex = 0;

const arrows = {
  arrowlist: [document.getElementById('leftarrow'), document.getElementById('rightarrow')],

  mouseOver (element) {
    element.style.borderRight = '2vw solid green';
  },
  mouseOut (element) {
    element.style.borderRight = '2vw solid gray';
  },

  init(){
    this.arrowlist.forEach((element) => {
      element.addEventListener('mouseover', () => this.mouseOver(element));
      element.addEventListener('mouseout', () => this.mouseOut(element));
      element.addEventListener('click', () => {
        if (element.id === "leftarrow") {
          currentIndex--;
        } else if (element.id === "rightarrow"){
          currentIndex++;
        };
        currentIndex = (currentIndex + images.length) % images.length;
        updateImages(currentIndex);
      });
    });
  }
}

arrows.init();

// Funktion för att gömma alla foton som inte är markerade
function updateImages(index) {
  // gömmer alla ej markerade foton
  images.forEach((img, idx) => {
    img.style.display = idx === index ? 'block' : 'none';
  });

  // Sätter större border runt foto ifall image index = index, dvs ifall det är markerat, annars mindre border.
  bottomImages.forEach((img, idx) => {
    img.parentElement.style.borderWidth = idx === index ? '0.5vw' : '0.2vw';
  });
}

bottomImages.forEach((img, idx) => {
  img.addEventListener('click', () => {
    currentIndex = idx;
    updateImages(currentIndex);
  });
});



// instanserar första fotot
updateImages(currentIndex);
