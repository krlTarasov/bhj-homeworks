let form = document.getElementById('signin__form'),
formData = new FormData(form);
let welcome = document.getElementById('welcome'),
userIdElement = document.getElementById('user_id');
if (!localStorage.userId){
    document.getElementById('signin').classList.add('signin_active');
    let singinRequest = new XMLHttpRequest();
    form.addEventListener('submit', (event) => {
        singinRequest.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
        singinRequest.responseType = "json";
        formData = new FormData(form);
        singinRequest.send(formData);
        event.preventDefault();
    });

    singinRequest.addEventListener('readystatechange', () => {
        if (singinRequest.readyState === 4) {
            if (singinRequest.response.success) {
                welcome.classList.add('welcome_active');
                userIdElement.textContent = singinRequest.response['user_id'];
                document.getElementById('signin').classList.remove('signin_active');
                console.log(singinRequest.response);
                localStorage.userId = singinRequest.response['user_id'];
            } else {
                alert('Неверный пароль');
                console.log(singinRequest.response.success);
            }
        }
    })
} else {
    welcome.classList.add('welcome_active');
    userIdElement.textContent = localStorage.userId;
}