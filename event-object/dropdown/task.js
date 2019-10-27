let dropdown = document.getElementsByClassName('dropdown').item(0),
dropdownItems = document.getElementsByClassName('dropdown__item'),
dropdownValue = document.getElementsByClassName('dropdown__value').item(0);
console.log(dropdown);

dropdown.addEventListener('click', () => {
    document.querySelector('.dropdown__list').classList.toggle('dropdown__list_active');  
})

for (const elem of dropdownItems) {
    elem.addEventListener('click',(event) => {
        event.preventDefault();
        dropdownValue.textContent = elem.textContent;
    })
}