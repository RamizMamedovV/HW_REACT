import React, { useState } from 'react';
import DelButton from './DelButton';
import AddButton from './AddButton';
import classes from './StyleToDoList.module.css';
import MyList from './MyList';

function ToDoList() {

    const[toDo, setToDo] = useState( [
        { id: 1, task: 'Task 1' },
        { id: 2, task: 'Task 2' },
        { id: 3, task: 'Task 3' },
    ]);

    const[count, setCount] = useState(3);

    const[newToDO, setNewToDo] = useState('');

    const handleDelBtn = (id) => {
        setToDo(toDo.filter(item => item.id !== id));
    }

    const handleAddBtn = () => {
        if (newToDO.trim() === '') {
            alert('Please enter a task!'); // Alert if the input is empty
            return; // Prevent adding empty tasks
        }
        setToDo([...toDo, { id: count + 1, task: newToDO }]);
        setCount(count + 1);
        setNewToDo('');
    }


    return ( 
        <div className={classes.todo_list} >
            <div style={{ height: '70px' }} >
            <input 
                value={newToDO}
                onChange={(e) => setNewToDo(e.target.value)}
                className={classes.inputItm} 
                placeholder='todo'/>
            {/* <input 
                className={classes.inputItm} 
                placeholder='toDo'/> */}
            {/* <AddButton onClick={handleAddBtn} >Add Task</AddButton> */}
            <button className= {classes.myBtn} onClick={handleAddBtn} >Add Task</button>
            </div>

            {/* <h2 className={classes.list_title}>To-Do List</h2>
            <ul>
                {toDoList.map(item => (
                    <div className={classes.list_item}>
                    <li  key={item.id}>
                        {item.task}
                    </li>
                        <DelButton>Delete</DelButton>
                    </div>
                ))}
            </ul> */}

            <MyList list={toDo} title="My To-Do List" checkBtn={(click) => handleDelBtn(click)}/>
            
        </div>
     );
}

export default ToDoList;