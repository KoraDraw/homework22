document.addEventListener('DOMContentLoaded', function() {
    const task = document.getElementById('task');
    const addNewTask = document.getElementById('add');
    const createNewTask = document.getElementById('createNewTask');
    const clearTask = document.getElementById('clear');
    
    loadTasks();

    addNewTask.addEventListener('click', function() {
        const textTask = task.value.trim();
        if(textTask){
            addTask(textTask);
            task.value = "";
            }
        });
    
    function addTask(task) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(comments));
        displayTask(task);
    }
    function displayTask(task) {
        const taskElement = document.createElement('div');
        taskElement.textContent = task;
        createNewTask.appendChild(taskElement)
    } 
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach((task) => {
            displayTask(task);
        });
    }
});