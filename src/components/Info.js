import Tag from './Tag';
import Rating from './Rating';
import '../styles/Info.css';

function Info(props) {
    return (
        <div className="infos_appartement">
            <div className="info_appartement">
                <p className="info_appartement_name">{props.title}</p>
                <p className="info_appartement_location">{props.location}</p>
            </div>
            <div className="info_owner">
                <p className="info_owner_name">{props.ownerName}</p>
                <img className="info_owner_img" src={props.ownerImg} alt={props.ownerName} />
            </div>
            <Tag tags={props.tags} />
            <Rating rating={props.rating} />
        </div>
    )
}

export default Info