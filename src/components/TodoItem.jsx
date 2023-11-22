import React from 'react'

const TodoItem = (props) => {

    return (
        <tr onClick={() => props.deleteTodo(props.rowNumber)}>
            <th scope='col'>{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssigned}</td>
        </tr>
    )
}

export default TodoItem