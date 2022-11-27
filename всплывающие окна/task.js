let close = Array.from(document.querySelectorAll('div.modal__close'))
let modalMain = document.getElementById('modal_main')
let modalSuccess = document.getElementById('modal_success')

modalMain.classList.add('modal_active');


closePopup();

function closePopup() {
    close.forEach(function (modal) {
        modal.onclick = function () {
            modal.closest('div.modal').classList.remove('modal_active');
        };
    });
};

document.querySelector('div#modal_main div.modal__content a').onclick = function () {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
};