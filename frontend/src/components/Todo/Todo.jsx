import CheckBox from '../UI/CheckBox/CheckBox'
import './Todo.scss'
import trash from '../../assets/trash.png'

function Todo({content, completed, checked, deleted}) {
    

    return (
        <div className='todo'>
            <div className="checkbox-div">
            <CheckBox completed={completed} checked={checked}/>
            </div>
            <div className={'content ' + (completed ? 'content-checked' : '')}>
                {content}
            </div>
            <div onClick={deleted} className="trash-div">
            <img src={trash} alt="delete" />
            </div>
        </div>
    )
}


export default Todo