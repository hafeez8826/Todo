import React from 'react'
import TodoItem from './TodoItem'

const TodoTable = (props) => {
    return (
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Assigned</th>
                </tr>
            </thead>
            <tbody>
                {props.todo.map(todoElemet => (
                    <TodoItem
                        key={todoElemet.rowNum}
                        rowNumber={todoElemet.rowNum}
                        rowDescription={todoElemet.rowDescription}
                        rowAssigned={todoElemet.rowAssigned}
                        deleteTodo={props.deleteTodo}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default TodoTable