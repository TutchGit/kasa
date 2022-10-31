import PropTypes from 'prop-types';
import '../styles/Thumb.css';
import { appartements } from '../datas/data';
import Appartement from './Appartement';

function Thumb() {

    /* ---------------------------------------------------------------------------
                            MAIN CONTENT OF HOME PAGE
    Take data from "appartements", then map to each appartement for
    display individual Appartement comp.
    Appartement comp props send :
        key => Needed for react. Use id for safety
        appartement => all data from specific apppartement
    --------------------------------------------------------------------------- */ 
    
    return (
        <div className='appartements_list'>
            {appartements.map((appartement) => (
                <Appartement key={appartement.id} appartement={appartement}/>
            ))}
        </div>
    )
}

Thumb.propTypes = {
    key: PropTypes.string,
    appartement: PropTypes.array
}

export default Thumb