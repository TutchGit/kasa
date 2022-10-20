import '../styles/Dropdown.css'
import { useState } from 'react';

function Dropdown(props) {
    const [open, isOpen] = useState(false)

    return(
        (props.isList
            ?   <div className={props.classNameDisplay} onClick={() => isOpen(!open)}>
                    {open
                    ?   <div><div className={props.classNameDescription} >
                            <p className='dropdown_title'>{props.title}</p>
                            <i className="fa-solid fa-chevron-up"></i>
                        </div>
                        <div className='dropdown_content'>
                            {props.content.map((content) => {
                                return <p>{content}</p>
                            })}
                        </div></div>
                    :   <div className={props.classNameDescription} >
                            <p className='dropdown_title'>{props.title}</p>
                            <i className="fa-solid fa-chevron-down"></i>
                        </div> }
                </div>
            :
        <div className={props.classNameDisplay} onClick={() => isOpen(!open)}>
            {open
            ?   <div className='dropdown_container'>
                    <div className={props.classNameDescription} key={props.title} >
                        <p className='dropdown_title'>{props.title}</p>
                        <div className='dropdown_icon'><i className="fa-solid fa-chevron-up"></i>
                    </div>
                </div>
            <p className='dropdown_content'>{props.content}</p></div>
            :   <div className={props.classNameDescription} key={props.title} >
                    <p className='dropdown_title'>{props.title}</p>
                    <div className='dropdown_icon'><i className="fa-solid fa-chevron-down"></i></div>
                </div>
            }
        </div>
    ))
}

export default Dropdown