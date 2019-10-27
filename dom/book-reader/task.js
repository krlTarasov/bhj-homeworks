let fontSizeButtons = document.getElementsByClassName('font-size'),
book = document.getElementsByClassName('book')[0];

for (const elem of fontSizeButtons) {
    elem.addEventListener('click', () => {
        event.preventDefault();
        for (const element of fontSizeButtons) {
            element.classList.remove('font-size_active')
        }
        elem.classList.add('font-size_active');
        if (elem.dataset.size == "big") {
            book.classList.remove('book_fs-small');
            book.classList.add('book_fs-big');
        } else if (elem.dataset.size == 'small') {
            book.classList.remove('book_fs-big');
            book.classList.add('book_fs-small');
        } else {
            book.classList.remove('book_fs-big');
            book.classList.remove('book_fs-small');
        }
    })
}