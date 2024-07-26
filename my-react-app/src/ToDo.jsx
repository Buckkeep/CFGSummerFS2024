import React, {useState} from 'react'

function ToDo() {

    const [tasks, setTasks] = useState(["Make the bed", "Wash hair", "Food shop"]);

    function handleAddTask() {
        const newTask = document.getElementById("taskInput").value
        document.getElementById("taskInput").value = ""
        setTasks((prevTasks) => [...prevTasks, newTask])
    }

    function handleRemoveTask(index) {
        setTasks(tasks.filter((_, i) => i !== index))
    }


  return (
    <div className='todo-container'>
        <h1>Things To Do:</h1>
        <ul className='todo-display'>
            {tasks.map((task, index) => 
            <li key={index} onClick={() => handleRemoveTask(index)}>
                {task}
            </li>)}
            
        </ul>
        <input type="text" id="taskInput" placeholder='Enter your task here'/><br />
        <button className="add-button" type="button" onClick={handleAddTask}>Add Task</button>
        <p>(Click an item to delete it)</p>
    </div>
  )
}

export default ToDo