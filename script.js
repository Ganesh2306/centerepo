function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  li.onclick = function () {
    this.remove(); // remove task on click
  };

  document.getElementById("taskList").appendChild(li);
  input.value = ""; // clear input
}



