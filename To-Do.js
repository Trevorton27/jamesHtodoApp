//Monitor the add button
const todoArray = JSON.parse(localStorage.getItem('todoArray')) || [];
const button = document.getElementById('mybutton');
const lineItem = document.createElement('li');
setAttributes(lineItem, { id: Date.now(), name: 'incompleteTask' });
button.addEventListener('click', (e) => {
  e.preventDefault();
  const newTask = document.getElementById('taskName').value;

  addTask(newTask);
});

function addTask(todo) {
  renderNewTask(todo);
  todoArray.push({ id: todo.id, todoItem: todo });
  pushToLocalStorage(todo);
  console.log('todo id tho: ', todo.id);
}
//Create all necessary elements for new list items
function renderNewTask(todo) {
  const taskList = document.getElementById('taskList');

  //Create basic line item

  console.log('todoArray: ', todoArray);

  //Create line delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'X';
  setAttributes(deleteButton, {
    name: 'theDeleteButtons',
    id: lineItem.id,
    onClick: 'deleteItem(this.id)'
  });

  //Create task complete task checkbox
  const completeButton = document.createElement('input');
  setAttributes(completeButton, {
    type: 'checkbox',
    id: 'c' + lineItem.id,
    onClick: 'completeItem(this.id)'
  });

  //Inject all elements into line and clear input box
  const myNode = document.createTextNode(todo);
  lineItem.appendChild(completeButton);
  lineItem.appendChild(myNode);
  lineItem.appendChild(deleteButton);
  taskList.appendChild(lineItem);
  document.getElementById('myForm').reset();
}

//Set attributes helper function
function setAttributes(element, attributes) {
  for (let key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

function pushToLocalStorage(todo) {
  localStorage.setItem('todoArray', JSON.stringify(todoArray));
}

//Delete button functional code
function deleteItem(id) {
  const item = document.getElementById(id);
  document.getElementById('taskList').removeChild(item);
  for (let i = 0; i < todoArray.length; i++) {
    if (todoArray[i].id === id) {
      console.log('todoArray[i].id in for loop: ', todoArray[i].id);
      todoArray.splice(i, 1);
      pushToLocalStorage(todoArray);
    }
  }
}

//Complete task checkbox functional code
function completeItem(id) {
  const item = document.getElementById(id);
  const lineItem = item.parentNode;

  if (item.checked == true) {
    lineItem.style = 'text-decoration: line-through';
    lineItem.setAttribute('name', 'completeTask');
  } else {
    lineItem.style = 'text-decoration: normal';
    lineItem.setAttribute('name', 'incompleteTask');
  }
}
console.log('taskName tho', taskName.value.trim());
//Disable add task button when input is blank
function EnableDisable() {
  const addButton = document.getElementById('mybutton');
  const taskName = document.getElementById('taskName');

  return taskName.value.trim() != ''
    ? (addButton.disabled = false)
    : (addButton.disabled = true);
}
setInterval(EnableDisable, 100);

window.addEventListener('load', (e) => {
  e.preventDefault();
  todoArray.forEach((todo) => {
    renderNewTask(todo.todoItem);
  });
});
