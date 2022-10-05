import '../styles/Thumb.css'
import { appartements } from '../datas/data'

function Thumb() {
    return (
        {appartements.map((title, cover, id) => (
            <div className="thumb" key={`${id}`}>
                <img src={`${cover}`} alt={`${title}`} />
                <p className="thumb_title">{title}</p>
            </div>
        )}
    )
}

export default Thumb