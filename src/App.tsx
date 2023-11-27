import "./App.css";
import { NewTodoForm } from "./components/NewTodoForm";
import { TodoTable } from "./components/TodoTable";
import React, { useState } from "react";

export const App = () => {

  const [showAddTodoForm, setShowAddTodoForm] = useState(false)
  
  const [todo, setTodo] = useState([
    { rowNumber: 1, rowDescription: "Eat healthy", rowAssigned: "HZ" },
    { rowNumber: 2, rowDescription: "Workout", rowAssigned: "Hafeez" },
    { rowNumber: 3, rowDescription: "Study", rowAssigned: "Hafeez" },
  ]);


  const addTodo = (description: string, assigned: string) => {
    let rowNum = 0;
    if (todo.length > 0) {
      rowNum = todo[todo.length - 1].rowNumber + 1;
    } else{
      rowNum = 1;
    }
      const newTodo = {
        rowNumber: rowNum,
        rowDescription: description,
        rowAssigned: assigned,
      };
      setTodo(todo => [...todo, newTodo])
  };

  const deleteTodo = (deleteTodoNumber: number) =>  {
    let filtered = todo.filter(function (value){
      return value.rowNumber !== deleteTodoNumber;
    });
    setTodo(filtered);
  }

  return (
    <div className="bck">
      <div className="mt-5 container">
        <div className="card">
          <div className="card-header">Your Todo's..</div>
          <div className="card-body">
            {/* Rendering the TodoTable component and passing the todo prop */}
            <TodoTable todo={todo} deleteTodo={deleteTodo}/>
            <button className="btn btn-primary" onClick={() => setShowAddTodoForm(!showAddTodoForm)}>
              {showAddTodoForm ? 'Close New Todo' : 'New Todo'}
            </button>
            
            {/** addTodo is the pointer to the above function
             * if addTodo() then JSX will automatically do that witout manual clikc
             */}
            {showAddTodoForm &&                 // Conditional render
            <NewTodoForm addTodo={addTodo}/>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

