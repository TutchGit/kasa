import PropTypes from 'prop-types';
import '../styles/Dropdown.css'
import { useState } from 'react';

function Dropdown(props) {
    const [open, isOpen] = useState(false)

    return(
        (props.isList
            ?   <div className={props.classNameDisplay} onClick={() => isOpen(!open)}>
                    {open
                    ?   <div><div className={props.classNameDescription} key={props.title}>
                            <p className='dropdown_title'>{props.title}</p>
                            <i className="fa-solid fa-chevron-up"></i>
                        </div>
                        <div className='dropdown_content'>
                            {props.content.map((content) => {
                                return <p key={content}>{content}</p>
                            })}
                        </div></div>
                    :   <div className={props.classNameDescription} key={props.title}>
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

Dropdown.propTypes = {
    isList: PropTypes.bool,
    classNameDisplay: PropTypes.string,
    classNameDescription: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
}

export default Dropdown