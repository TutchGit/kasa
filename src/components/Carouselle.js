import PropTypes from 'prop-types';
import { useState } from 'react'
import '../styles/Carouselle.css'

function Carouselle(props) {

    const [index, setIndex] = useState(0)

    function nextPicture() {
        (index === props.pictures.length - 1 ? setIndex(0) : setIndex(index + 1))
    }

    function previousPicture() {
        (index === 0 ? setIndex(props.pictures.length - 1) : setIndex(index - 1))
    }

    return (
        <div className='carouselle'>
            <div className="fiche_img_content">
                <img className='fiche_img' src={props.pictures[index]} key={props.pictures[index]} alt={props.title} />
            </div>
            <div className='buttons'>
                <i className="fa-solid fa-chevron-left previous_img" onClick={(e) => previousPicture(e)}></i>
                <i className="fa-solid fa-chevron-right next_img" onClick={nextPicture}></i>
            </div>
        </div>
    )
}

Carouselle.propTypes = {
    pictures: PropTypes.array,
    title: PropTypes.string
}

export default Carouselle
