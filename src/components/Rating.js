import PropTypes from 'prop-types';

function Rating(props) {
    const range = [1, 2, 3, 4, 5]
    const rating = props.rating
    return(
        /* ---------------------------------------------------------------------------
                                    RATING STARS
        Since rating is based on a scale of 0 to 5, set a const with array number.
        Loop 5 times in total, each time checking if range value is under or equal to
        rating value. If yes, create a colored star. If no, create a grey star.
        Rating props used =>
            key => Use rangeElement from range, since its unique.
        --------------------------------------------------------------------------- */ 
        <div className='info_rating'>
            {range.map((rangeElem) => {
                return rating >= rangeElem ? (
                    <i className={`fa-solid fa-star star fill_star`} key={rangeElem}></i>
                ) : <i className={`fa-solid fa-star star empty_star`} key={rangeElem}></i>
            })}
        </div>
    )
}

Rating.propTypes = {
    rating: PropTypes.string
}

export default Rating