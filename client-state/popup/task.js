let modal = document.getElementById('subscribe-modal');
let button = document.getElementsByClassName('modal__close')[0];
if (!document.cookie.includes('remove-popup=true')){
    modal.classList.add('modal_active');
    button.addEventListener('click', () => {
        modal.classList.remove('modal_active');
        document.cookie = "remove-popup=true";
    })
    console.log(document.cookie);
}