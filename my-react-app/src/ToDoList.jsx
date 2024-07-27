import React, {useState} from 'react'

function ToDoList() {

    const [tasks, setTasks] = useState(["Eat breakfast", "Take a shower", "Walk the dog"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {

        if (newTask.trim() !== "") {  // trim for whitespace, if still not empty...
            setTasks(t => [...t, newTask]);  // input is previous tasks, spread prevtasks and add the new task
            setNewTask(""); // empty the new task from the input 
        }

        
    }

    function deleteTask(index) { // take in the index number of task to be deleted 
        const updatedTasks = tasks.filter((_, i) => i !== index); // create a constant filtering out the i in tasks that matches the index passed in (the element replaced with underscore as irrelevant)
        setTasks(updatedTasks); // setTasks is now the updated (i.e. filtered out) array 
    }

    function moveTaskUp(index) {
        if(index > 0) {   // check whether the item is already at the top
            const updatedTasks = [...tasks];  // create a new array with the previous tasks 
            [updatedTasks[index], updatedTasks[index -1]] = [updatedTasks[index - 1], updatedTasks[index]]; // array destructuing to swap two elements within an array
            setTasks(updatedTasks);                    
        }
    }

    function moveTaskDown(index) {
        if(index < tasks.length - 1) {   // check whether the item is already at the top
            const updatedTasks = [...tasks];  // create a new array with the previous tasks 
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]; // array destructuing to swap two elements within an array
            setTasks(updatedTasks);                    
        }
    }
    

    return (
        <div className='to-do-list'> 
            <h1>To Do List</h1>
            <div>
                <input 
                type="text" 
                placeholder='Enter a task...'
                value={newTask}
                onChange={handleInputChange}/>
                <button className='add-button'
                onClick={addTask}>Add</button>
            </div>

            <ol>
                {tasks.map((task, index) => 
                <li key={index}>
                    <span className="text">{task}</span>
                    <button 
                        className="delete-button" 
                        onClick={() => deleteTask(index)}>
                        Delete
                    </button>
                    <button 
                        className="move-button" 
                        onClick={() => moveTaskUp(index)}>
                        ⬆️
                    </button>
                    <button 
                        className="move-button" 
                        onClick={() => moveTaskDown(index)}>
                        ⬇️
                    </button>
                </li>
                    
            )}
            </ol>
        </div>
    )
}

export default ToDoList