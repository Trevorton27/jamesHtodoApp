const button = document.getElementById("mybutton");
button.addEventListener('click',theNewTask);

function theNewTask(e){
  e.preventDefault();

  const allTasks = document.getElementById("taskList")
  const newTask = document.getElementById("taskName").value;
  
  const li = document.createElement("li");
  li.setAttribute("id", Date.now());
  li.setAttribute("name", "incompleteTask");

  const deleteButton=document.createElement("button");
  deleteButton.innerHTML="X";
  deleteButton.setAttribute("name", "theDeleteButtons");
  deleteButton.setAttribute("id", li.id);
  deleteButton.setAttribute("onClick","deleteItem(this.id)");


  const completeButton=document.createElement("input");
  completeButton.setAttribute("type", "checkbox");
  completeButton.setAttribute("id", "c"+li.id);
  completeButton.setAttribute("onClick","completeItem(this.id)");
  

  const myNode = document.createTextNode(newTask);
  li.appendChild(completeButton);
  li.appendChild(myNode);
  li.appendChild(deleteButton);

  allTasks.appendChild(li);
  document.getElementById("myForm").reset();
}

function deleteItem(id) {
  var item = document.getElementById(id);
  document.getElementById("taskList").removeChild(item);
}

function completeItem(id) {
  var item = document.getElementById(id);
  let li = item.parentNode;

  if (item.checked == true) {
    li.style="text-decoration: line-through";
    li.setAttribute("name", "completeTask");
  } else {
    li.style="text-decoration: normal"
    li.setAttribute("name", "incompleteTask");
  }
}

function EnableDisable(taskName) {
  var addButton = document.getElementById("mybutton");
  var taskName = document.getElementById("taskName");

  if (taskName.value.trim() != "") {
    addButton.disabled = false;
  } else {
    addButton.disabled = true;
  }
};
setInterval(EnableDisable, 100);