let reveals = document.getElementsByClassName('reveal')

window.addEventListener('scroll', () => {
    console.log(window.pageYOffset - window.innerHeight);
    for (const reveal of reveals) {
        console.log('__________________________________________________________' + reveal.getBoundingClientRect().top);
        if (reveal.getBoundingClientRect().top - window.innerHeight <= 0) {
            reveal.classList.add('reveal_active');
        }
    }
})