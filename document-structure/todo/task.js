let input = document.getElementById('task__input'),
addTaskButton = document.querySelector('.tasks__add'),
taskList = document.getElementById('tasks__list'),
removeTaskButton = document.getElementsByClassName('task__remove');

function addTask() {
    console.log('add task');
    if (input.checkValidity()) {
        taskList.insertAdjacentHTML('afterend', `<div class="task">
        <div class="task__title">
        ${input.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
        </div>
        `);
        input.value = '';
        removeTaskButton = document.getElementsByClassName('task__remove');
        setRemoveTaskButton();
    }
}

input.addEventListener('keypress', (event) => {
    if (event.keyCode == 13) {
        addTask();
        event.preventDefault();
    }; 
});

addTaskButton.addEventListener('click', (event) =>{
    addTask();
    event.preventDefault();
});

function setRemoveTaskButton() {
    Array.from(removeTaskButton).forEach((button) => {
    button.addEventListener('click', () => {
        button.parentElement.remove();
        removeTaskButton = document.getElementsByClassName('task__remove');
    })
})
}