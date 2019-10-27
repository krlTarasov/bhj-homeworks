let nextButton = document.querySelector('.slider__arrow_next'),
prevButton = document.querySelector('.slider__arrow_prev'),
sliderItemsList = document.getElementsByClassName('slider__item'),
i = 0;

nextButton.onclick = () => {
    sliderItemsList.item(i % 5).className = 'slider__item';
    sliderItemsList.item((++i) % 5).className = 'slider__item slider__item_active';
}

prevButton.onclick = () => {
    if (i <= 0) i = 5;
    sliderItemsList.item(i % 5).className = 'slider__item';
    sliderItemsList.item((--i) % 5).className = 'slider__item slider__item_active';
}