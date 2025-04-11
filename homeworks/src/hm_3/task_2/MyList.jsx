import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import DelButton from './DelButton';
import classes from './StyleToDoList.module.css';


function MyList(props) {
    return (
        <div>
            <h2 className={classes.list_title}>{props.title}</h2>
            <List>
                {props.list.map((item, index) =>
                    <div key={item.id}  className={classes.list_item}> 
                    <ListItem>
                        {item.task}
                    </ListItem>
                        {/* <ListItem>{item.toDo}</ListItem> */}
                        <DelButton>Delete</DelButton>
                    </div>
                )}
            </List>
        </div>
    );
}

export default MyList;