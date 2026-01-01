import './App.css'

function TodoForm({formSubmit, formInput, inputValue}){
  return(
    <form className="input-form" onSubmit={(e) => formSubmit(e)}>
      <div >
        <input 
          className="todo-input" 
          type="text" 
          placeholder="Enter your task" 
          value={inputValue}
          onChange={(e) => formInput(e.target.value)}
          />
      </div>
      <div>
        <button className="todo-btn" type="submit">Add Task</button>
      </div>
    </form>
  );
}

export default TodoForm;