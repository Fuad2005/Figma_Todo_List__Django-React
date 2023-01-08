import React from "react";
import { todoContext } from "../../App";
import Todo from "../../components/Todo/Todo";
import TodoListTitle from "../../components/TodoListTitle/TodoListTitle";
import "./TodoList.scss";
import axios from 'axios'

function TodoList() {
  const { todos, setTodos} = React.useContext(todoContext);

  const checkHandler = React.useCallback((id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id)
    const todo = todos[todoIndex]
    const url = 'http://127.0.0.1:8000/api/todo-list/' + id + '/'
    axios.put(url, {
        content: todo.content,
        completed: !todo.completed
    }).then(() => {
        setTodos(prev => {
            const newState = [...prev]
            const newTodo = {...todo, completed: !todo.completed}
            newState[todoIndex] = newTodo
            return newState
        })

    })

  }, [todos]);


  const deleteHandler = React.useCallback(async (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id)
    const todo = todos[todoIndex]
    const url = 'http://127.0.0.1:8000/api/todo-list/' + id + '/'
    await axios.delete(url)
    setTodos(prevState => {
        const newState = [...prevState]
        newState.splice(todoIndex, 1)
        return newState
    })
  }, [todos])


  const selectAll = React.useCallback(() => {
    const url = 'http://127.0.0.1:8000/api/select-all/'
    axios.post(url)
    .then(() => {
        setTodos(prevState => prevState.map((todo) => ({...todo, completed:true})))
        return todos
    })
    
  }, [todos])
  
  const unselectAll = React.useCallback(() => {
    const url = 'http://127.0.0.1:8000/api/unselect-all/'
    axios.post(url)
    .then(() => {
        setTodos(prevState => prevState.map((todo) => ({...todo, completed:false})))
        return todos
    })
    
  }, [todos])
  
  const deleteAll = React.useCallback(() => {
    const url = 'http://127.0.0.1:8000/api/delete-all/'
    axios.post(url)
    .then(() => {
        setTodos([])
        return todos
    })
    
  }, [todos])
  

  return (
    <>
      <TodoListTitle />
      <div>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            /*completed*/ {...todo}
            content={todo.content}
            checked={() => checkHandler(todo.id)}
            deleted={() => deleteHandler(todo.id)}
          />
        ))}
      </div>
      <div className="controls">
        <div className="un-select-all" >
            <button onClick={selectAll} className="select-all">Select All</button>
            <button onClick={unselectAll} className="unselect-all">Unselect All</button>
        </div>
        <button onClick={deleteAll} className="delete-all">Delete All</button>
      </div>
    </>
  );
}

export default TodoList;
