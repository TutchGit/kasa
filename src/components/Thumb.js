import '../styles/Thumb.css';
import { appartements } from '../datas/data';
import Appartement from './Appartement';

function Thumb() {
    
    return (
        <div className='appartements_list'>
            {appartements.map((appartement) => (
                <Appartement key={appartement.id} appartement={appartement}/>
            ))}
        </div>
    )
}

export default Thumb