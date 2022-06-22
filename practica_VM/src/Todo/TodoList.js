import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";//библиотека для проверки типов

const styles = {//прописываем css-свойства как JS объект
   ul: {//для какого элемента свойства
      listStyle: 'none',//свойство camelCase:"значение"
      margin: 0,
      padding: 0,

   }
}

function TodoList(props) {
   return (
      <ul style={styles.ul}>  {/*атрибут  style={styles.ul} объект styles значения для ключа ul*/}
         {/*<li>1</li>
         <li>2</li> создадим в отдельном файле компоненты TodoItem*/}
         {/*<TodoItem />
         <TodoItem />
         <TodoItem /> проитерируем массив todos*/}
         
         { props.todos.map((todo, index) =>{ //в App у TodoList атрибут todos,итерируем массив map
            return <TodoItem todo = {todo} key={todo.id} index = {index}/> //при итериции в реакте у каждого итерируемого элеменгта должен быть key атрибут
            })
         }

      </ul>
   )
}

TodoList.propTypes = {
   todos: PropTypes.arrayOf(PropTypes.object).isRequired//проверка на соответствие типа массив объектов
}

export default TodoList