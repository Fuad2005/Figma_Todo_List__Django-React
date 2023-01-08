import './CheckBox.scss'
import checkedIcon from '../../../assets/check.png'


function CheckBox({completed, checked}) {
    


    return (
        <div onClick={checked} className={"checkbox " + (completed ? 'checkbox-checked' : '')}>
            <img className='check-icon' src={checkedIcon} alt="" />
        </div>
    )
}




export default CheckBox