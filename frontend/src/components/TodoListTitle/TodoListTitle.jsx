import './TodoListTitle.scss'
import React from 'react'
import { todoContext } from '../../App'



function TodoListTitle() {
    
    const {todos, setTodos} = React.useContext(todoContext)

    const stat = React.useMemo(() => {
        const totalTodos = todos.length
        const completedTodos = todos.filter(todo => todo.completed).length
        return {totalTodos, completedTodos}
    }, [todos])


    return (
        <div className='todo-list-title'>
            <div className="total-todo">
                <div className="text">Total Tasks</div>
                <div className="count">{stat.totalTodos}</div>
            </div>
            <div className="completed-todo">
                <div className="text">Completed Tasks</div>
                <div className="count">{stat.completedTodos} / {stat.totalTodos}</div>
            </div>
        </div>
    )
}


export default TodoListTitle