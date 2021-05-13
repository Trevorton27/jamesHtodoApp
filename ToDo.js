const todoArray = JSON.parse(localStorage.getItem('todoArray')) || [];
const submitButton = document.getElementById('submit-button');
const taskInput = document.getElementById('task-name');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (isInputEmpty()) {
    alert('Please add a todo item before submitting');
    return;
  }

  const newTodo = {
    id: Date.now(),
    text: taskInput.value
  };
  addTask(newTodo);
});

function addTask(todo) {
  renderNewTask(todo);
  todoArray.push(todo);
  pushToLocalStorage(todo);
}

function renderNewTask(todo) {
  const taskList = document.getElementById('task-list');

  const lineItem = document.createElement('li');
  setAttributes(lineItem, { id: todo.id, name: 'incompleteTask' });

  const deleteButton = createDeleteButton(todo);

  const completeButton = createCompleteButton(todo);
  const myNode = document.createTextNode(todo.text);
  lineItem.appendChild(completeButton);
  lineItem.appendChild(myNode);
  lineItem.appendChild(deleteButton);
  taskList.appendChild(lineItem);
  document.getElementById('myForm').reset();
}

function createDeleteButton(task) {
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'X';
  deleteButton.setAttribute('id', task.id);
  deleteButton.setAttribute('name', 'theDeleteButtons');
  deleteButton.addEventListener('click', () => {
    deleteItem(task.id);
  });
  return deleteButton;
}

function createCompleteButton(task) {
  const completeButton = document.createElement('input');
  completeButton.setAttribute('type', 'checkbox');
  completeButton.setAttribute('id', task.id);
  completeButton.addEventListener('click', () => {
    completeItem(task.id);
  });
  return completeButton;
}

function setAttributes(element, attributes) {
  for (let key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

function pushToLocalStorage(todo) {
  localStorage.setItem('todoArray', JSON.stringify(todoArray));
}

function deleteItem(id) {
  const item = document.getElementById(id);
  document.getElementById('task-list').removeChild(item);
  deleteSavedTodos(id);

  // for (let i = 0; i < todoArray.length; i++) {
  //   if (todoArray[i].id === id) {
  //     todoArray.splice(i, 1);
  //     pushToLocalStorage(todoArray);
  //   }
  // }
}

function deleteSavedTodos(id) {
  todoArray.filter((todo) => {
    return todo.id !== id;
  });
  pushToLocalStorage(todoArray);
}

function completeItem(id) {
  const item = document.getElementById(id);
  const lineItem = item.parentNode;
  lineItem.classList.toggle('lineThrough');
}

function isInputEmpty() {
  return !taskInput.value ? true : false;
}

window.addEventListener('load', () => {
  todoArray.forEach((todo) => {
    renderNewTask(todo);
  });
});
