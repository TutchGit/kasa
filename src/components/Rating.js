import '../styles/Rating.css'

function Rating(props) {
    const range = [1, 2, 3, 4, 5]
    const rating = props.rating
    return(
        <div className='info_rating'>
            {range.map((rangeElem) => {
                return rating >= rangeElem ? (
                    <p>1</p>
                ) : <p>2</p>
            })}
        </div>
    )
}

export default Rating