function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const taskList = document.getElementById('task-list');

        const li = document.createElement('li');
        li.innerHTML = `
            ${taskText}
            <div>
                <button class="done-btn" onclick="toggleDone(this)">Done</button>
                <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function toggleDone(button) {
    const li = button.parentElement.parentElement;
    li.classList.toggle('done');
}

function deleteTask(button) {
    const li = button.parentElement.parentElement;
    li.remove();
}
