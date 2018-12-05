var inputElement = document.querySelector('input');
var buttonElement = document.querySelector('button');
var ulElement = document.querySelector('ul');
buttonElement.addEventListener('click', addTodoItem);

function addTodoItem() {
    var userInput = inputElement.value;
    if (userInput.trim() == '') {
        return;
    }
    var todoListItem = document.createElement('li');
    todoListItem.textContent = userInput;
    ulElement.appendChild(todoListItem);
}