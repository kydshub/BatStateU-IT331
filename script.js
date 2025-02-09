document.addEventListener("DOMContentLoaded", () => {
    // Initialize an empty array for tasks
    let tasks = [];

    // Load tasks from local storage if available
    if (localStorage.getItem("tasks")) {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    // Function to add a task
    function addTask() {
        const taskInput = document.getElementById("task");
        const task = taskInput.value;

        if (task.trim() === "") {
            alert("Please enter a task.");
            return;
        }

        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        taskInput.value = "";
        displayTasks();
    }

    // Function to display tasks
    function displayTasks() {
        const taskList = document.getElementById("taskList");
        taskList.innerHTML = "";

        tasks.forEach(task => {
            const li = document.createElement("li");
            li.textContent = task;
            taskList.appendChild(li);
        });
    }

    // Display tasks when the page loads
    displayTasks();

    // Attach addTask function to the button
    document.querySelector("button").addEventListener("click", addTask);
});
