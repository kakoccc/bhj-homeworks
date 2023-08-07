const tasksInput = document.querySelector('.tasks__input');
const tasksControl = document.querySelector('.tasks__control');
const tasksList = document.querySelector('.tasks__list');

tasksControl.addEventListener('submit', (e) => {
    e.preventDefault();

    if (tasksInput.value) {
        tasksList.insertAdjacentHTML('afterBegin', `<div class="task"><div class="task__title">${tasksInput.value}</div><a href="#" class="task__remove">&times;</a></div>`);
    }

    tasksInput.value = null;
    tasksInput.focus();
})

tasksList.addEventListener('click', (ev) => {
    ev.preventDefault();
    const deletTaskButton = document.querySelectorAll('.task__remove');
    deletTaskButton.forEach(element => {
        if (element === ev.target) {
            element.parentElement.remove();
        }
    });
})





















/*const tasksList = document.querySelector('#tasks__list');
const tasksForm = document.querySelector("#tasks__form");
const tasksInput = document.querySelector("#task__input");

tasksForm.addEventListener ('submit', formHeandler);

function formHeandler (el) {
    
    el.preventDefault();
    
    const taskText = tasksInput.value;

    const newTask = document.createElement('div');

    newTask.innerText = taskText;

    let btnDelete = document.createElement('button');
    btnDelete.setAttribute('role', 'button');
    btnDelete.innerText = "Удалить"
    btnDelete.style.display = 'flex';
    btnDelete.style['bottom'] = '150px';
    btnDelete.style['color'] = 'red';
    newTask.append(btnDelete);
    console.log(btnDelete)

    btnDelete.addEventListener('click', (e) => e.target.closest('div').remove());

    tasksList.append(newTask);

    tasksInput.value = "";

    tasksInput.focus();
}
*/




