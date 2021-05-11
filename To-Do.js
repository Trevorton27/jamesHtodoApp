//Monitor the add button
const todoArray = JSON.parse(localStorage.getItem('todoArray')) || [];
const button = document.getElementById('mybutton');
const taskInput = document.getElementById('taskName');

button.addEventListener('click', (e) => {
  e.preventDefault();

  // if (isInputEmpty()) {
  //   ;
  //   return;
  // }

  const newTodo = {
    id: Date.now(),
    todoItem: taskInput.value
  };
  isInputEmpty(taskInput)
    ? alert('Please add a todo item before submitting')
    : addTask(newTodo);
  console.log('in eventListener: ', isInputEmpty());
});

console.log(isInputEmpty());
function addTask(todo) {
  renderNewTask(todo);
  todoArray.push(todo);
  pushToLocalStorage(todo);
  console.log('todo id tho: ', todo.id);
}
//Create all necessary elements for new list items
function renderNewTask(todo) {
  const taskList = document.getElementById('taskList');

  //Create basic line item
  const lineItem = document.createElement('li');
  setAttributes(lineItem, { id: todo.id, name: 'incompleteTask' });

  console.log('todoArray: ', todoArray);

  //Create line delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'X';
  deleteButton.setAttribute('id', todo.id);
  deleteButton.setAttribute('name', 'theDeleteButtons');
  deleteButton.addEventListener('click', () => {
    deleteItem(todo.id);
  });

  //Create task complete task checkbox
  const completeButton = document.createElement('input');
  setAttributes(completeButton, {
    type: 'checkbox',
    id: 'c' + lineItem.id,
    onClick: 'completeItem(this.id)'
  });

  //Inject all elements into line and clear input box
  const myNode = document.createTextNode(todo.todoItem);
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
function isInputEmpty() {
  const isEmpty = !taskInput.value;
  return isEmpty ? true : false;
}

window.addEventListener('load', (e) => {
  e.preventDefault();
  todoArray.forEach((todo) => {
    renderNewTask(todo);
  });
});
