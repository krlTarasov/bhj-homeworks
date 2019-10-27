let popup = document.getElementById('modal_main');
popup.className = 'modal modal_active';
let mainCloseButton = document.querySelector('#modal_main .modal__close');
console.log(mainCloseButton);
let showSucces = document.querySelector('#modal_main .show-success'),
modalSuccess = document.getElementById('modal_success'),
successCloseButton = document.querySelector('#modal_success .modal__close');

mainCloseButton.onclick = () => {
    popup.className = 'modal';
}

successCloseButton.onclick = () => {
    modalSuccess.className = 'modal';
}

showSucces.onclick = () => {
    modalSuccess.className = 'modal modal_active';
}
