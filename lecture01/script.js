function createNewTodo() {
    const todoText = document.getElementById('new-todo').value;
    const newTodo = generateItemHTML(todoText);
    const todoList = document.getElementById('todo-list');
    todoList.appendChild(newTodo);
    document.getElementById('new-todo').value = '';
}

function markAsDone(e) {
    e.target.classList.add('done');
    e.target.addEventListener('click', e.target.remove);
}

function generateItemHTML(itemText) {
    const newItem = document.createElement('li');
    newItem.innerText = itemText;
    newItem.addEventListener('click', markAsDone);
    return newItem;
}

