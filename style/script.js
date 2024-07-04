document.addEventListener('DOMContentLoaded', function() {
    const addTaskButton = document.getElementById('add-task');
    const newTaskInput = document.getElementById('new-task');
    const tasksList = document.getElementById('tasks-list');

    addTaskButton.addEventListener('click', function() {
        const taskText = newTaskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            newTaskInput.value = '';
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskSpan.className = 'task-text';
        
        const completeButton = document.createElement('button');
        completeButton.innerHTML = '✔';
        completeButton.addEventListener('click', function() {
            taskSpan.classList.toggle('task-complete');
        });
        
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '✖';
        deleteButton.addEventListener('click', function() {
            tasksList.removeChild(li);
        });
        
        li.appendChild(taskSpan);
        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        tasksList.appendChild(li);
    }
});
