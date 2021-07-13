import { useState } from "react"
import TodoItem from "./TodoItem"
import { v4 as uuidv4 } from 'uuid';
import './TodoList.css'
function TodoList() {
  
  /*
  States are attributes of components. You can change them and the component will automatically update.
  Formula: const [stateVariable, functionToChangeStateVariable] = useState(initialValue);
  Calling functionToChangeStateVariable updates the component as well (no need to deal with HTML!)

  Q1- For a todo list, what do we want to keep track of?
  */

  const [todoItems, setTodoItems] = useState([]); // all of the items in the todo list
  const [inputValue, setInputValue] = useState(''); // value of a new item user is inputting

  function handleRemove(id) {
    setTodoItems([...todoItems].filter(function(x) { return x.id !== id }));
  }

  function handleInput(event) {
    setInputValue(event.target.value);
  }

  // this function adds a new item to todoItems (the list of todo items)
  //Q6- why do we need this function when we're already looping through todoItems?
  function addNewTodoItem() {
    if (inputValue) {
      const newTodoItem = {
        id: uuidv4(),
        name: inputValue,
      }
      setTodoItems([...todoItems, newTodoItem]);
    }
  }

  // wrap everything you want to return in a div
  return (
    <>
      <div className="todo-list">
        <input value={inputValue} onInput={handleInput} placeholder="Add new todo item"/>
        <button onClick={}>ADD</button> {/* Q2- could you make the add button work? use a function that already exist in the code*/}
        <div className="todo-items">
          {/* Q5- this is where the magic happens! could you show the list of todo items?
            * Hint- make a list of <TodoItem></> from todoItems (for loop, or .map if you're familiar with JS)
            * Hint- you should pass these things as props to TodoItem: 
            * key={item.id}
              name={item.name}
              handleRemove={handleRemove}
              id={item.id} 
            */ }
        </div>
      </div>
    </>
  )
}

export default TodoList;