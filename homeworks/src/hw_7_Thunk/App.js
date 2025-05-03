import React from 'react';
import TasksList from './components/TasksList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Менеджер задач</h1>
      </header>
      <main>
        <TasksList />
      </main>
    </div>
  );
}

export default App;