import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';


function MyList() {
    return ( 
        <div>
            <h2>Список комментариев</h2>
            <List>
                <ListItem>Это первый комментарий</ListItem>
                <ListItem>Это второй комментарий</ListItem>
                <ListItem>Это третий комментарий</ListItem>
            </List>
        </div>
     );
}

export default MyList;