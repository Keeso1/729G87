// hämta alla nödvändiga element
const leftArrow = document.getElementById('leftarrow');
const rightArrow = document.getElementById('rightarrow');
const images = document.querySelectorAll('#middle .imgBox img');
const bottomImages = document.querySelectorAll('.boxContainer .imgBox img');

let currentIndex = 0;

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

// Event listener för vänster pil, klick sänker current index med 1 och använder modulo för att sätta current index till 7 och loopa bak.
leftArrow.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImages(currentIndex);
});

// Event listener för höger pil, klick höjer current index med 1 och använder modulo för att sätta current index till 0 och loopa fram.
rightArrow.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImages(currentIndex);
});

// instanserar första fotot
updateImages(currentIndex);
