import React from "react";
import Message from "./hw_1/Message";
import './hw_1/Style.css';

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
