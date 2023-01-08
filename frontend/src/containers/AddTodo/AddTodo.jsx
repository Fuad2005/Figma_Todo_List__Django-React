import './AddTodo.scss'
import { Fragment } from 'react'
import plus from '../../assets/plus.png'
import React from 'react'


function AddTodo({add}) {
    const inputRef = React.useRef(null);

    const submitHandler = React.useCallback(() => {
        const content = inputRef.current.value
        add(content)
        inputRef.current.value = '';
    }, [add])

    const enterKeyHandler = React.useCallback((e) => {
        if(e.code === 'Enter') submitHandler()
    }, [inputRef])

    return (
        <Fragment>
        <input onKeyDown={enterKeyHandler} ref={inputRef} className='add-todo-input' type="text" placeholder='Enter task'/>
        <div onClick={submitHandler} className='add-todo-btn'>
            <div>Add</div>
            <img src={plus} alt="add" />
        </div>
        </Fragment>
    )
}



export default AddTodo