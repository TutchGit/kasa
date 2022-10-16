function Rating(props) {
    const range = [1, 2, 3, 4, 5]
    const rating = props.rating
    return(
        <div className='info_rating'>
            {range.map((rangeElem) => {
                return rating >= rangeElem ? (
                    <i className={`fa-solid fa-star star fill_star`}></i>
                ) : <i className={`fa-solid fa-star star empty_star`}></i>
            })}
        </div>
    )
}

export default Rating