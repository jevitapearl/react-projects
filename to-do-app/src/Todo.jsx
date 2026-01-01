import {useState} from "react"
import "./App.css"
import DateTime from "./DateTime"
import TodoForm from "./TodoForm"
import Task from "./Task"


const todoKey = "todoItems";

function Todo() {
  const [inputValue, setInputValue] = useState({id: "", value: "", status: false});

  const [todoList, setTodoList] = useState(() => {
    const rawTodos = localStorage.getItem(todoKey);
    if (!rawTodos) return [];
    return JSON.parse(rawTodos);
  });
  
  function handleInput(value){
    setInputValue({id: value, value: value, status: false});
  }

  function handleSubmit(e){
    e.preventDefault();
    const {id, value, status} = inputValue;

    if (!value) return;
    const taskExists = todoList.find((currElem) => currElem.value === value);

    if (taskExists){
      setInputValue({id: "", value: "", status: false});
      return;
    }
    
    setTodoList([...todoList, {id,value, status}]);
    setInputValue({id: "", value: "", status: false});
  }

  //Setting up local storage
  localStorage.setItem(todoKey, JSON.stringify(todoList));

  function handleComplete(compID){
    setTodoList(
      todoList.map((currElem, index) => {
        if (currElem.id === compID){
          currElem.status = !currElem.status;
        }
        return currElem;
      })
    );

  }

  function handleDelete(delID){
    setTodoList(
      todoList.filter(
        (currElem) => (currElem.id!==delID && currElem)
      )
    );
  }

  function handleClearAll(){
    setTodoList([]);
    localStorage.removeItem(todoKey);
  }

  return(
    <section className="todo-container">
      <section className="form-container">
        <h1>To-do List</h1>
        <DateTime/>
        <TodoForm
          formSubmit={handleSubmit}
          formInput={handleInput}
          inputValue={inputValue.value}
        />
      </section>

      <section>
        <ul>
          {
            todoList.map((task, index) => {
              return(
                <Task
                  key={index}
                  task={task}
                  completeTask={handleComplete}
                  deleteTask={handleDelete}
                />
              );
            })
          }
                  
        </ul>
        <div>
          {todoList.length>0 && <button className="clear-btn" onClick={handleClearAll}>Clear All</button>}
        </div>
      </section>
      
    </section>
    
  );
}

export default Todo