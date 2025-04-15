import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import DelButton from './DelButton';
import classes from './StyleToDoList.module.css';


function MyList({list, title, checkBtn}) {

    // const[item, setItem] = React.useState();

    function handleClick(item) {
        // console.log(item.id);
        checkBtn(item?.id);
        
    }
    return (
        <div>
            <h2 className={classes.list_title}>{title}</h2>
            <List>
                {list.map((item, index) => 
                    <div key= {item.id} className={classes.list_item}> 
                    <ListItem>
                        {item.id} {item.task}
                    </ListItem>
                        {/* <ListItem>{item.toDo}</ListItem> */}
                        <button className= {classes.myBtn} onClick={() => handleClick(item)} >Delete</button>
                    </div>
                )}
            </List>
        </div>
    );
}

export default MyList;