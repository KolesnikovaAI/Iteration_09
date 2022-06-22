import React from "react";
import TodoList from "./Todo/TodoList";

function App() {
  const todos = [//этот массив необходимо отобразить в <TodoList />
    {id: 1, completed: false, title: 'Купить хлеб'},
    {id: 2, completed: false, title: 'Купить масло'},
    {id: 3, completed: false, title: 'Купить молоко'},
  ]
  return (
    <div className="wrapper">
      <h1>Список покупок</h1>

      <TodoList todos = {todos}/>{/*атрибут props todos */}
    </div>
  );
}

export default App;

//устанавливаем дополнительную библиотеку npm install prop-types
