let chatWidget = document.getElementsByClassName('chat-widget')[0];
let chatWidgetInput = document.getElementById('chat-widget__input');
let botAnswers = ['Добрый день, мы ещё не проснулись. Позвоните через 10 лет', 'Добрый день', 'sometext']
chatWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
})

chatWidgetInput.addEventListener('keydown', (event) => {
    if (event.keyCode == 13 && chatWidgetInput.checkValidity()) {
        const messages = document.querySelector( '.chat-widget__messages' );
        messages.innerHTML += `
        <div class="message message_client">
                <div class="message__time">${String(new Date).substring(16, 21)}</div>
                <div class="message__text">${chatWidgetInput.value}</div>
            </div>
        <div class="message">
            <div class="message__time">${String(new Date).substring(16, 21)}</div>
            <div class="message__text">
                ${botAnswers[Math.floor((Math.random() * 3))]}
            </div>
        </div> `;
        chatWidgetInput.value = '';
    }
});


