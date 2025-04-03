import './App.css';
import TodoList from './ToDoList';
import React, { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList />  {/* Utilisation du composant TodoList */}
      </header>
    </div>
  );
}

export default App;
