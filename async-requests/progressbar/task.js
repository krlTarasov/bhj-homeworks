let progress = document.getElementById( 'progress' );
let form = document.getElementById('form');
form.addEventListener('submit', (event) => {
    let formData = new FormData(form);
    let request = new XMLHttpRequest();
    request.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    request.upload.onprogress = (event) => {
        progress.value = `${event.loaded / event.total}`;
    }
    request.send(formData);
    event.preventDefault();
})