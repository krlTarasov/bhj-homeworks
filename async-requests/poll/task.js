let pollTitle = document.getElementById('poll__title');
let pollAnswers = document.getElementById('poll__answers');
let request = new XMLHttpRequest();
request.responseType = "json";
request.open('GET', ' https://netology-slow-rest.herokuapp.com/poll.php');

request.onreadystatechange = () => {
    if (request.readyState === 4){
        let response = request.response;
        pollTitle.insertAdjacentHTML('beforebegin', response.data.title);
        response.data.answers.forEach(answer => {
            pollAnswers.insertAdjacentHTML('beforebegin', `<button class="poll__answer">${answer}</button>`);
        });

        let buttons = document.getElementsByClassName('poll__answer');
        Array.from(buttons).forEach(button => {
                button.onclick = () => {
                alert('Спасибо, ваш голос засчитан!');
            }
        })
    }
}
request.send();

