import React from "react";
import Message from "./hw_1/Message";
import './hw_1/Style.css';
import CommentsList from "./hw_2/CommentsList";
import TemperatureConverter from "./hm_3/TemperatureConverter";
import Button from "./hm_3/MyButton";
import IconLabelButtons from "./hm_3/task_2/DelButton";
import ToDoList from "./hm_3/task_2/ToDoList";

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
      {/* <CommentsList /> */}

      {/* homework 3 */}

        {/* <TemperatureConverter /> */}

        {/* <IconLabelButtons /> */}
        <ToDoList />

    </div>
  );
}

export default App;
