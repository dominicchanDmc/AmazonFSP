function RatingUpdatePart(props) {
const {averageRating,caller,handleRatingChange} = props;
const callerId = props.callerId || 0;

return (
        <div className='star-container'>
            <div className="star-widget">
            <input type="radio" name={`${caller}-${callerId}-rate`} id={`${caller}-rate-5`} checked={averageRating === 5} onChange={() => handleRatingChange(5)} />
            <label htmlFor={`${caller}-rate-5`} className="fas fa-star"></label>
            <input type="radio" name={`${caller}-${callerId}-rate`} id={`${caller}-rate-4`} checked={averageRating === 4} onChange={() => handleRatingChange(4)}/>
            <label htmlFor={`${caller}-rate-4`} className="fas fa-star"></label>
            <input type="radio" name={`${caller}-${callerId}-rate`} id={`${caller}-rate-3`} checked={averageRating === 3} onChange={() => handleRatingChange(3)}/>
            <label htmlFor={`${caller}-rate-3`} className="fas fa-star"></label>
            <input type="radio" name={`${caller}-${callerId}-rate`} id={`${caller}-rate-2`} checked={averageRating === 2} onChange={() => handleRatingChange(2)}/>
            <label htmlFor={`${caller}-rate-2`} className="fas fa-star"></label>
            <input type="radio" name={`${caller}-${callerId}-rate`} id={`${caller}-rate-1`} checked={averageRating === 1} onChange={() => handleRatingChange(1)}/>
            <label htmlFor={`${caller}-rate-1`} className="fas fa-star"></label>
            </div>
        </div> 
    )

}

export default RatingUpdatePart

