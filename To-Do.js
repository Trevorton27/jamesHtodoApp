
let allTasks = ["task1", "task2"];



function theNewTask(){
  var newTask = document.getElementById("taskName").value;
  console.log(newTask);
}


function displayList() {
  let result = "";
  allTasks.forEach(function (item) {
    result += "<li>" + item;
  });
  
  document.getElementById("taskList").innerHTML = result;
}

displayList()
onkeyup="theNewTask()"
