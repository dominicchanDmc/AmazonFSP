import { useState } from 'react';
import './RatingPart.css'
function RatingPart(props) {
// const rating = props.averageRating;
const {averageRating,caller} = props;
let starInfo;

switch(averageRating){
    case 1.5 :
        starInfo = (<>
                <input type="radio" name={`${caller}-rate`} id={`${caller}-rate-5`} checked={averageRating === 5} readOnly/>
                <label for={`${caller}-rate-5`} className="fas fa-star"></label>
                <input type="radio" name={`${caller}-rate`} id={`${caller}-rate-4`} checked={averageRating === 4} readOnly/>
                <label for={`${caller}-rate-4`} className="fas fa-star"></label>
                <input type="radio" name={`${caller}-rate`} id={`${caller}-rate-3`} checked={averageRating === 3} readOnly/>
                <label for={`${caller}-rate-3`} className="fas fa-star-half"></label>
                <input type="radio" name={`${caller}-rate`} id={`${caller}-rate-1.5`} checked={averageRating === 1.5} readOnly/>
                <label for={`${caller}-rate-1.5`} className="fas fa-star"></label>
                <input type="radio" name={`${caller}-rate`} id={`${caller}-rate-1`} checked={averageRating === 1} readOnly/>
                <label for={`${caller}-rate-1`} className="fas fa-star"></label>
        </>);
        break;
    case 2.5 :
        starInfo = (<>
                <input type="radio" name={`${caller}-rate`} id={`${caller}-rate-5`} checked={averageRating === 5} readOnly/>
                <label for={`${caller}-rate-5`} className="fas fa-star"></label>
                <input type="radio" name={`${caller}-rate`} id={`${caller}-rate-4`} checked={averageRating === 4} readOnly/>
                <label for={`${caller}-rate-4`} className="fas fa-star"></label>
                <input type="radio" name={`${caller}-rate`} id={`${caller}-rate-2.5`} checked={averageRating === 2.5} readOnly/>
                <label for={`${caller}-rate-2.5`} className="fas fa-star-half"></label>
                <input type="radio" name={`${caller}-rate`} id={`${caller}-rate-2`} checked={averageRating === 2} readOnly/>
                <label for={`${caller}-rate-2`} className="fas fa-star"></label>
                <input type="radio" name={`${caller}-rate`} id={`${caller}-rate-1`} checked={averageRating === 1} readOnly/>
                <label for={`${caller}-rate-1`} className="fas fa-star"></label>
        </>);
        break;
    case 3.5 :
        starInfo = (<>
                <input type="radio" name={`${caller}-rate`} id={`${caller}-rate-5`} checked={averageRating === 5} readOnly/>
                <label for={`${caller}-rate-5`} className="fas fa-star"></label>
                <input type="radio" name={`${caller}-rate`} id={`${caller}-rate-3.5`} checked={averageRating === 3.5} readOnly/>
                <label for={`${caller}-rate-3.5`} className="fas fa-star-half"></label>
                <input type="radio" name={`${caller}-rate`} id={`${caller}-rate-3`} checked={averageRating === 3} readOnly/>
                <label for={`${caller}-rate-3`} className="fas fa-star"></label>
                <input type="radio" name={`${caller}-rate`} id={`${caller}-rate-2`} checked={averageRating === 2} readOnly/>
                <label for={`${caller}-rate-2`} className="fas fa-star"></label>
                <input type="radio" name={`${caller}-rate`} id={`${caller}-rate-1`} checked={averageRating === 1} readOnly/>
                <label for={`${caller}-rate-1`} className="fas fa-star"></label>
        </>);
        break;
    case 4.5 :
        starInfo = (<>
            <input type="radio" name={`${caller}-rate`} id={`${caller}-rate-4.5`} checked={averageRating === 4.5} readOnly/>
            <label for={`${caller}-rate-4.5`} className="fas fa-star-half"></label>
            <input type="radio" name={`${caller}-rate`} id={`${caller}-rate-4`} checked={averageRating === 4} readOnly/>
            <label for={`${caller}-rate-4`} className="fas fa-star"></label>
            <input type="radio" name={`${caller}-rate`} id={`${caller}-rate-3`} checked={averageRating === 3} readOnly/>
            <label for={`${caller}-rate-3`} className="fas fa-star"></label>
            <input type="radio" name={`${caller}-rate`} id={`${caller}-rate-2`} checked={averageRating === 2} readOnly/>
            <label for={`${caller}-rate-2`} className="fas fa-star"></label>
            <input type="radio" name={`${caller}-rate`} id={`${caller}-rate-1`} checked={averageRating === 1} readOnly/>
            <label for={`${caller}-rate-1`} className="fas fa-star"></label>
        </>);
        break;
     default:
    starInfo = (<>
            <input type="radio" name={`${caller}-rate`} id={`${caller}-rate-5`} checked={averageRating === 5} readOnly/>
            <label for={`${caller}-rate-5`} className="fas fa-star"></label>
            <input type="radio" name={`${caller}-rate`} id={`${caller}-rate-4`} checked={averageRating === 4} readOnly/>
            <label for={`${caller}-rate-4`} className="fas fa-star"></label>
            <input type="radio" name={`${caller}-rate`} id={`${caller}-rate-3`} checked={averageRating === 3} readOnly/>
            <label for={`${caller}-rate-3`} className="fas fa-star"></label>
            <input type="radio" name={`${caller}-rate`} id={`${caller}-rate-2`} checked={averageRating === 2} readOnly/>
            <label for={`${caller}-rate-2`} className="fas fa-star"></label>
            <input type="radio" name={`${caller}-rate`} id={`${caller}-rate-1`} checked={averageRating === 1} readOnly/>
            <label for={`${caller}-rate-1`} className="fas fa-star"></label>
    </>);
    break;
}
    // const ratingArr = Object.values(props);
    // const [totalScore, setTotalScore] = useState(0);

    // const [rating, setRating] = useState(0) 
    // const handleRating = (rate) => {
    //   setRating(rate)
    // }
    // if (ratingArr && ratingArr.length > 0){
    //     const totalRatingCount = ratingArr.length;
    //     const sumOfRatings = ratingArr.reduce((sum, rating) => sum + rating.overallRating, 0);
    //     const averageRating = sumOfRatings / totalRatingCount;
    //     setTotalScore(averageRating);
    //     return (
    //     <div class="rating-box">
    //         <h1><span>Customer reviews</span></h1>
    //         <div class="rating-number">{averageRating}</div>
    //         <span>{totalRatingCount} <span>global ratings</span></span>
    //     </div>
    //     )
    // }
    // else{
    //     return null;
    // }

return (
    <div className='star-container'>
        <div className="star-widget">
                {starInfo}
        </div>
    </div>
)

}

export default RatingPart

