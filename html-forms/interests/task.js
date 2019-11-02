// let mainCheckboxes = document.querySelectorAll('.interests_main > * > .interest > * > .interest__check');

let mainCheckboxes = document.querySelectorAll('.interest__check');
console.log(mainCheckboxes);

mainCheckboxes.forEach((mainCheckbox) => {
    let children = mainCheckbox.parentElement.nextElementSibling ?
        Array.from(mainCheckbox.parentElement.nextElementSibling.children)
          .map((elem) => elem.firstElementChild.firstElementChild):
        [];
    mainCheckbox.addEventListener('change', () => {
        children.forEach((child) => {
            child.checked = mainCheckbox.checked;
        });
    });

    children.forEach((child) => {
        child.addEventListener('change', () => {
            mainCheckbox.checked =  children.every(elem => elem.checked)
        });
    })
});