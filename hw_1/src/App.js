import React from "react";
import Message from "./Message";
import './Style.css';

function App() {
  const messages = [
    {content: 'hello world'},
    {content: 'hello 2 world'},
  ];
  return (
    <div className="App">
      {messages.map((message, index) => (
        <Message key={index} content={message.content} />
      ))}
    </div>
  );
}

export default App;
