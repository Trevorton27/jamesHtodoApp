const button = document.getElementById("mybutton");
button.addEventListener('click',theNewTask);


function theNewTask(e){
  e.preventDefault();

    //add if blank styling
  //if (taskInput === "") {.

  const allTasks = document.getElementById("taskList")
  const newTask = document.getElementById("taskName").value;
  
  const li = document.createElement("li");
  li.setAttribute("id", "listItem");

  const deleteButton=document.createElement("button");
  deleteButton.innerHTML="X";
  deleteButton.setAttribute("id", "myDeleteButton");
  deleteButton.onclick = function() {
    li.style.display = "none";
  }

  const completeButton=document.createElement("input");
  completeButton.setAttribute("type", "checkbox");
  completeButton.setAttribute("id", "myCompleteButton");
  



  const myNode = document.createTextNode(newTask);
  li.appendChild(completeButton);
  li.appendChild(myNode);
  li.appendChild(deleteButton);

  completeButton.onclick = function() {
    if (myCompleteButton.checked == true){
      li.style="text-decoration: line-through";
    } else {
      li.style="text-decoration: normal";
    }
  }



  allTasks.appendChild(li);
  document.getElementById("myForm").reset();
}