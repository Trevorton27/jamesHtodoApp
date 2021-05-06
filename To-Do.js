const button = document.getElementById("mybutton");
button.addEventListener('click',theNewTask);


function theNewTask(e){
  e.preventDefault();

    //add if blank styling
  //if (taskInput === "") {.

  const allTasks = document.getElementById("taskList")
  const newTask = document.getElementById("taskName").value;
  const li = document.createElement("li");


  const deleteButton=document.createElement("button");
  deleteButton.innerHTML="X";
  deleteButton.setAttribute("id", "myDeleteButton");

  const myNode = document.createTextNode(newTask);
  li.appendChild(myNode);
  li.appendChild(deleteButton);

  allTasks.appendChild(li);
  document.getElementById("myForm").reset();
}