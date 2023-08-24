import './RatingPart.css'
function RatingPart(props) {
const {averageRating,caller} = props;
const callerId = props.callerId || 0;
let starInfo;

switch(averageRating){
    case 1.5 :
        starInfo = (<>
                <input type="radio" name={`${caller}-${callerId}-rate`} id={`${caller}-rate-5`} checked={averageRating === 5} readOnly/>
                <label htmlFor={`${caller}-rate-5`} className="fas fa-star"></label>
                <input type="radio" name={`${caller}-${callerId}-rate`} id={`${caller}-rate-4`} checked={averageRating === 4} readOnly/>
                <label htmlFor={`${caller}-rate-4`} className="fas fa-star"></label>
                <input type="radio" name={`${caller}-${callerId}-rate`} id={`${caller}-rate-3`} checked={averageRating === 3} readOnly/>
                <label htmlFor={`${caller}-rate-3`} className="fas fa-star-half"></label>
                <input type="radio" name={`${caller}-${callerId}-rate`} id={`${caller}-rate-1.5`} checked={averageRating === 1.5} readOnly/>
                <label htmlFor={`${caller}-rate-1.5`} className="fas fa-star"></label>
                <input type="radio" name={`${caller}-${callerId}-rate`} id={`${caller}-rate-1`} checked={averageRating === 1} readOnly/>
                <label htmlFor={`${caller}-rate-1`} className="fas fa-star"></label>
        </>);
        break;
    case 2.5 :
        starInfo = (<>
                <input type="radio" name={`${caller}-${callerId}-rate`} id={`${caller}-rate-5`} checked={averageRating === 5} readOnly/>
                <label htmlFor={`${caller}-rate-5`} className="fas fa-star"></label>
                <input type="radio" name={`${caller}-${callerId}-rate`} id={`${caller}-rate-4`} checked={averageRating === 4} readOnly/>
                <label htmlFor={`${caller}-rate-4`} className="fas fa-star"></label>
                <input type="radio" name={`${caller}-${callerId}-rate`} id={`${caller}-rate-2.5`} checked={averageRating === 2.5} readOnly/>
                <label htmlFor={`${caller}-rate-2.5`} className="fas fa-star-half"></label>
                <input type="radio" name={`${caller}-${callerId}-rate`} id={`${caller}-rate-2`} checked={averageRating === 2} readOnly/>
                <label htmlFor={`${caller}-rate-2`} className="fas fa-star"></label>
                <input type="radio" name={`${caller}-${callerId}-rate`} id={`${caller}-rate-1`} checked={averageRating === 1} readOnly/>
                <label htmlFor={`${caller}-rate-1`} className="fas fa-star"></label>
        </>);
        break;
    case 3.5 :
        starInfo = (<>
                <input type="radio" name={`${caller}-${callerId}-rate`} id={`${caller}-rate-5`} checked={averageRating === 5} readOnly/>
                <label htmlFor={`${caller}-rate-5`} className="fas fa-star"></label>
                <input type="radio" name={`${caller}-${callerId}-rate`} id={`${caller}-rate-3.5`} checked={averageRating === 3.5} readOnly/>
                <label htmlFor={`${caller}-rate-3.5`} className="fas fa-star-half"></label>
                <input type="radio" name={`${caller}-${callerId}-rate`} id={`${caller}-rate-3`} checked={averageRating === 3} readOnly/>
                <label htmlFor={`${caller}-rate-3`} className="fas fa-star"></label>
                <input type="radio" name={`${caller}-${callerId}-rate`} id={`${caller}-rate-2`} checked={averageRating === 2} readOnly/>
                <label htmlFor={`${caller}-rate-2`} className="fas fa-star"></label>
                <input type="radio" name={`${caller}-${callerId}-rate`} id={`${caller}-rate-1`} checked={averageRating === 1} readOnly/>
                <label htmlFor={`${caller}-rate-1`} className="fas fa-star"></label>
        </>);
        break;
    case 4.5 :
        starInfo = (<>
            <input type="radio" name={`${caller}-${callerId}-rate`} id={`${caller}-rate-4.5`} checked={averageRating === 4.5} readOnly/>
            <label htmlFor={`${caller}-rate-4.5`} className="fas fa-star-half"></label>
            <input type="radio" name={`${caller}-${callerId}-rate`} id={`${caller}-rate-4`} checked={averageRating === 4} readOnly/>
            <label htmlFor={`${caller}-rate-4`} className="fas fa-star"></label>
            <input type="radio" name={`${caller}-${callerId}-rate`} id={`${caller}-rate-3`} checked={averageRating === 3} readOnly/>
            <label htmlFor={`${caller}-rate-3`} className="fas fa-star"></label>
            <input type="radio" name={`${caller}-${callerId}-rate`} id={`${caller}-rate-2`} checked={averageRating === 2} readOnly/>
            <label htmlFor={`${caller}-rate-2`} className="fas fa-star"></label>
            <input type="radio" name={`${caller}-${callerId}-rate`} id={`${caller}-rate-1`} checked={averageRating === 1} readOnly/>
            <label htmlFor={`${caller}-rate-1`} className="fas fa-star"></label>
        </>);
        break;
     default:
    starInfo = (<>
            <input type="radio" name={`${caller}-${callerId}-rate`} id={`${caller}-rate-5`} checked={averageRating === 5} readOnly/>
            <label htmlFor={`${caller}-rate-5`} className="fas fa-star"></label>
            <input type="radio" name={`${caller}-${callerId}-rate`} id={`${caller}-rate-4`} checked={averageRating === 4} readOnly/>
            <label htmlFor={`${caller}-rate-4`} className="fas fa-star"></label>
            <input type="radio" name={`${caller}-${callerId}-rate`} id={`${caller}-rate-3`} checked={averageRating === 3} readOnly/>
            <label htmlFor={`${caller}-rate-3`} className="fas fa-star"></label>
            <input type="radio" name={`${caller}-${callerId}-rate`} id={`${caller}-rate-2`} checked={averageRating === 2} readOnly/>
            <label htmlFor={`${caller}-rate-2`} className="fas fa-star"></label>
            <input type="radio" name={`${caller}-${callerId}-rate`} id={`${caller}-rate-1`} checked={averageRating === 1} readOnly/>
            <label htmlFor={`${caller}-rate-1`} className="fas fa-star"></label>
    </>);
    break;
}

return (caller ==='reviewItem'|| caller ==='listItem'? (<>{starInfo}</>) :(
        <div className='star-container'>
            <div className="star-widget">
                    {starInfo}
            </div>
        </div>
    )
)

}

export default RatingPart

