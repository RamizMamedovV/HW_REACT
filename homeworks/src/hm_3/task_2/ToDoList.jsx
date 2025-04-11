import React from 'react';
import DelButton from './DelButton';
import AddButton from './AddButton';
import classes from './StyleToDoList.module.css';
import MyList from './MyList';

function ToDoList() {

    const toDoList = [
        { id: 1, task: 'Task 1' },
        { id: 2, task: 'Task 2' },
        { id: 3, task: 'Task 3' },
    ];

    return ( 
        <div className={classes.todo_list} >
            <div >
            <input className={classes.inputItm} placeholder='title'/>
            <input className={classes.inputItm} placeholder='toDo'/>
            <AddButton>Add Task</AddButton>
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

            <MyList list={toDoList} title="My To-Do List" />
            
        </div>
     );
}

export default ToDoList;