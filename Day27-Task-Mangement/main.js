const taskForm = document.getElementById('taskForm');
const taskContainer = document.getElementById('taskContainer');

const taskArray = [];

taskForm.addEventListener('submit', function(e){
    e.preventDefault();
    const formData = new FormData(e.target);

    const title = formData.get('title')
    const date  = formData.get('date')
    const message = formData.get('message')

    if(!title || title.length < 3){
        alert("Please Provide title!");
        return;
    }
    if(!date){
        alert("Please Provide Task Due Date!")
        return;
    }
    if(!message || message.length < 5){
        alert("Please provide Description for the task! And Make sure its can't be less then 5 chars");
        return;
    }
    // creating task 
    const task = {title, message, date};

    // pushing task on the task array
    taskArray.push(task);

    // render the all task
    renderTask(taskArray);

    // reset the form
    taskForm.reset();
})

// render task function 

function renderTask(arr){
    // clearing the existing row 
    taskContainer.innerHTML = '';

    arr.forEach((task, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td class= "px-4 py-2">${task.title}</td>
        <td class= "px-4 py-2">${task.message}</td>
        <td class= "px-4 py-2">${task.date}</td>
        `;

        // update action
        const actionColumn = document.createElement('td');
        actionColumn.classList = `flex flex-col gap-2 justify-center`
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit'
        editButton.classList = `bg-orange-400 text-white rounded-lg hover:bg-orange-600`
        editButton.addEventListener('click', function(e){
            const newTask = prompt("Edit title: ", task.title)
            const newMessage = prompt("Edit Description:", task.message)
            const newDate = prompt("Edit Date:" , task.date);

            // // modify the actual data
            task.title = newTask;
            task.message = newMessage;
            task.date = newDate;

            row.querySelector('td:nth-child(1)').innerText = newTask;
            row.querySelector('td:nth-child(2)').innerText = newDate;
            row.querySelector('td:nth-child(3)').innerText = newMessage;
        })

        // delete action
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList = `bg-red-400 text-white rounded-lg hover:bg-red-600`
        deleteButton.addEventListener('click', function(){
            if(confirm("Are you sure you want to delete this Task!")){
                // remove from array and re-render
                taskArray.splice(index, 1);
                renderTask(taskArray);
            }
        });

        //append edit and delete button
        actionColumn.appendChild(editButton);
        actionColumn.appendChild(deleteButton);
        row.appendChild(actionColumn);

        taskContainer.appendChild(row);
    });
}