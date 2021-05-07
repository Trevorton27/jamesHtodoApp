//Monitor the add button
const button = document.getElementById("mybutton");
button.addEventListener('click',theNewTask);

//Create all necessary elements for new list items
function theNewTask(e){
  e.preventDefault();

  const taskList = document.getElementById("taskList")
  const newTask = document.getElementById("taskName").value;
  
  //Create basic line item
  const lineItem = document.createElement("li");
  setAttributes(lineItem, {"id": Date.now(), "name": "incompleteTask"});

  //Create line delete button
  const deleteButton=document.createElement("button");
  deleteButton.innerHTML="X";
  setAttributes(deleteButton, {"name": "theDeleteButtons", "id": lineItem.id, "onClick":"deleteItem(this.id)" });

  //Create task complete task checkbox
  const completeButton=document.createElement("input");
  setAttributes(completeButton, {"type": "checkbox", "id": "c"+lineItem.id, "onClick":"completeItem(this.id)"});
  
  //Inject all elements into line and clear input box
  const myNode = document.createTextNode(newTask);
  lineItem.appendChild(completeButton);
  lineItem.appendChild(myNode);
  lineItem.appendChild(deleteButton);
  taskList.appendChild(lineItem);
  document.getElementById("myForm").reset();
}

//Set attributes helper function
function setAttributes(element, attributes) {
  for(let key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

//Delete button functional code
function deleteItem(id) {
  const item = document.getElementById(id);
  document.getElementById("taskList").removeChild(item);
}

//Complete task checkbox functional code
function completeItem(id) {
  const item = document.getElementById(id);
  const lineItem = item.parentNode;

  if (item.checked == true) {
    lineItem.style="text-decoration: line-through";
    lineItem.setAttribute("name", "completeTask");
  } else {
    lineItem.style="text-decoration: normal"
    lineItem.setAttribute("name", "incompleteTask");
  }
}

//Disable add task button when input is blank
function EnableDisable(taskName) {
  const addButton = document.getElementById("mybutton");
  var taskName = document.getElementById("taskName");

  return taskName.value.trim() != "" ? addButton.disabled = false :addButton.disabled = true;
}
setInterval(EnableDisable, 100);