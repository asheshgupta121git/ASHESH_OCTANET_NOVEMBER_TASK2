function addTask() {
    var newTaskInput = document.getElementById("newTask");
    var taskList = document.getElementById("taskList");

    if (newTaskInput.value !== "") {
        var li = document.createElement("li");
        li.innerHTML = newTaskInput.value + '<button onclick="removeTask(this)">Remove</button>';
        taskList.appendChild(li);
        newTaskInput.value = "";
    }
}

function removeTask(button) {
    var li = button.parentElement;
    li.parentNode.removeChild(li);
}
