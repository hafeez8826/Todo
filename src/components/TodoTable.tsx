import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoTable: React.FC<{
  todo: TodoModel[];
  deleteTodo: Function;
}> = (props) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Description</th>
          <th scope="col">Assigned</th>
        </tr>
      </thead>
      <tbody>
        {props.todo.map((todoElemet) => (
          <TodoItem
            key={todoElemet.rowNumber}
            rowNumber={todoElemet.rowNumber}
            rowDescription={todoElemet.rowDescription}
            rowAssigned={todoElemet.rowAssigned}
            deleteTodo={props.deleteTodo}
          />
        ))}
      </tbody>
    </table>
  );
};
