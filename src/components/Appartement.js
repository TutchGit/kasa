import PropTypes from 'prop-types';
import '../styles/Thumb.css'
import { Link } from 'react-router-dom'

function Appartement(props) {

    /* ---------------------------------------------------------------------------
    Easier understanding to put props in const
    --------------------------------------------------------------------------- */ 
    const title = props.appartement.title;
    const id = props.appartement.id

    /* ---------------------------------------------------------------------------
                        DISPLAY ONE APPARTEMENT ON HOME PAGE
    Return a Link who sent to ROUTE "/FicheLogement/id"
    Background image is done by style.
    --------------------------------------------------------------------------- */ 
    return (
        <Link to={`/FicheLogement/${id}`} className="thumb" style={{backgroundImage: `url(${props.appartement.cover})`}}>
            <p className="thumb_title">{title}</p>
        </Link>
    )
}

Appartement.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    cover: PropTypes.string
}

export default Appartement