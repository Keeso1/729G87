document.addEventListener('DOMContentLoaded', () => {
    init();
  });

  function init() {
    const buttons = document.querySelectorAll('.left button');
    const boxes = document.querySelectorAll('.right .box');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const id = button.getAttribute('data-id');
            button.classList.toggle("active")



            boxes.forEach((box) => {
                const boxId = box.getAttribute('data-id');
                if (boxId === id) {
                    // Animate the active box
                    anime({
                        targets: box,
                        scale: 1.5, // Scale up
                        easing: 'easeInOutQuad',
                        duration: 800,
                    });
                } else {
                    // Reset scaling for inactive boxes
                    anime({
                        targets: box,
                        scale: 1, // Reset to original size
                        easing: 'easeInOutQuad',
                        duration: 800,
                    });
                }
            });
        });
    });
}