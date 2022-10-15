import '../styles/Thumb.css'
import { Link } from 'react-router-dom'

function Appartement(props) {
    const title = props.appartement.title;
    const id = props.appartement.id

    return (
        <Link to={`/FicheLogement/${id}`} className="thumb" style={{backgroundImage: `url(${props.appartement.cover})`}}>
            <p className="thumb_title">{title}</p>
        </Link>
    )
}

export default Appartement