let timer = document.getElementById('timer');
let i = timer.textContent;
setInterval(() => {
    if (i <= 0) {
        alert('You win!', i)
    }
    i--;
    timer.textContent = i;
}, 1000);