const button = document.getElementById("mybutton");
button.addEventListener('click',theNewTask);




function theNewTask(e){
  e.preventDefault();

  //add if duplicate alert
  //} else {

  const allTasks = document.getElementById("taskList")
  const newTask = document.getElementById("taskName").value;
  
  const li = document.createElement("li");
  li.setAttribute("id", Date.now());

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
  //console.log(li.id)
  //console.log(deleteButton.id)
  //console.log(completeButton.id)


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
  //console.log(item);


  if (item.checked == true) {
    li.style="text-decoration: line-through";
  } else {
    li.style="text-decoration: normal"
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