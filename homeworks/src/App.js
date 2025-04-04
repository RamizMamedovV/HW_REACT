import React from "react";
import Message from "./hw_1/Message";
import './hw_1/Style.css';
import CommentsList from "./hw_2/CommentsList";

function App() {

                // homework 1

  //   Развернуть новый проект с использованием create-react-app.
  // Создать компонент Message, отображающий переданный ему props текст.
  // Стилизовать компоненты через css (при желании можно использовать less или sass).
  // Дополнительное задание: Установить расширение React Devtools.

  // const messages = [
  //   {content: 'hello world'},
  //   {content: 'hello 2 world'},
  // ];


                // homework 2

  // Создать компонент CommentsList, который отображает список комментариев. 
  // Каждый комментарий должен иметь кнопку для его удаления.
  // При нажатии на кнопку комментарий должен удаляться из списка.

  return (
    <div className="App">
      {/* homework 1 */}
      {/* {messages.map((message, index) => (
        <Message key={index} content={message.content} />
      ))} */}

      {/* homework 2 */}
      <CommentsList />
    </div>
  );
}

export default App;
