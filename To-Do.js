const button = document.getElementById("mybutton");
button.addEventListener('click',theNewTask);


function theNewTask(e){
  e.preventDefault();

  const allTasks = document.getElementById("taskList")
  const newTask = document.getElementById("taskName").value;
  const li = document.createElement("li");
  const myNode = document.createTextNode(newTask);

  li.appendChild(myNode);

  allTasks.appendChild(li);
  document.getElementById("myForm").reset();
}