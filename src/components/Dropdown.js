import '../styles/Dropdown.css'
import { useState } from 'react';
import FontAwesome from '@fortawesome/react-fontawesome'

function Dropdown(props) {
    const [open, isOpen] = useState(false)

    return(
        (props.isList
            ?   <div className={props.classNameDisplay}>
                    <div className={props.classNameDescription} onClick={() => isOpen(!open)}>
                        <p className='dropdown_title'>{props.title}</p>
                        <div className='dropdown_icon'>AAA</div>
                    </div>
                    {open
                    ? <div className='dropdown_content'>
                        {props.content.map((content) => {
                            return <p>{content}</p>
                        })}</div>
                    : null}
                </div>
            :
        <div className={props.classNameDisplay}>
            <div className={props.classNameDescription} key={props.title} onClick={() => isOpen(!open)}>
                <p className='dropdown_title'>{props.title}</p>
                <div className='dropdown_icon'><i className="fa-regular fa-chevron-up"></i></div>
            </div>
            {open
            ? <p className='dropdown_content'>{props.content}</p>
            : null
            }
        </div>
    ))
}

export default Dropdown