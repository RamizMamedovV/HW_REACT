import React from "react";
import { useState } from "react";


function CommentsList() {
    
    const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" }
  ]);

    return ( 
        <div>
            <h2>Список комментариев</h2>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        {comment.text}
                        <button onClick={() => setComments(comments.filter(c => c.id !== comment.id))}>
                            Удалить
                        </button>
                    </li>
                ))}
            </ul>
            <button onClick={() => setComments([...comments, { id: comments.length + 1, text: `Это ${comments.length + 1} новый комментарий` }])}>
                Добавить комментарий
            </button>
            <button onClick={() => setComments([])}>
                Очистить список комментариев    
            </button>
        </div>
     );
}

export default CommentsList;

