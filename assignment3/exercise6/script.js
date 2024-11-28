document.addEventListener('DOMContentLoaded', () => {
    init();
  });

  function init() {
    const buttons = document.querySelectorAll('.left button');
    const boxes = document.querySelectorAll('.right .box');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const id = button.getAttribute('data-id');
            

            buttons.forEach((btn) => {
                anime.remove(btn);
                const btnId = btn.getAttribute('data-id');

                if (btnId === id) {
                    btn.style.borderColor = "blue";
                    anime({
                        targets: btn,
                        borderWidth: "1vh",
                        easing: 'easeInOutQuad',
                        duration: 800,
                    });
                } else {
                    btn.style.borderColor = "#000";
                    anime({
                        targets: btn,
                        borderWidth: "0.1vh",
                        easing: 'easeInOutQuad',
                        duration: 800,
                    });
                }
            });
        

            boxes.forEach((box) => {
                anime.remove(box);
                const boxId = box.getAttribute('data-id');
                if (boxId === id) {
                    anime({
                        targets: box,
                        scale: 1.5,
                        easing: 'easeInOutQuad',
                        duration: 800,
                    });
                } else {
                    anime({
                        targets: box,
                        scale: 1,
                        easing: 'easeInOutQuad',
                        duration: 800,
                    });
                }
            });
        });
    });
}