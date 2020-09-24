const subscribeBtn = document.querySelector('.technologies__button');
const input = document.querySelector('#focus');
const formBtn = document.querySelector('.form__button');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close');


subscribeBtn.addEventListener('click', function() {
    input.focus();
    input.style.border = "3px solid red";
});

formBtn.addEventListener('click', function () {
    input.style.border = "none";

    if (input && input.value) {
        input.value = "";
    }

    if (window.screen.width > 719) {
        modal.classList.add("open-modal");
    };
});

closeModal.addEventListener('click', function () {
        modal.classList.remove("open-modal");
});


