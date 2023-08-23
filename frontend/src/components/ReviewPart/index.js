import RatingPart from '../RatingPart'
import ReviewItem from '../ReviewItem';
import './ReviewPart.css'
function ReviewPart(props) {
    const reviewInfo = Object.values(props);
    const totalRatingCount = reviewInfo['0'].length;
    const sumOfRatings = reviewInfo['0'].reduce((sum, rating) => sum + rating.overallRating, 0);
    const averageRating = Math.round((sumOfRatings / totalRatingCount) * 2) / 2;
    return (<>
            <div className="review-rating">
                {totalRatingCount> 0 ? (
                    <div class="rating-box">
                        {/* <h1><span>Customer reviews</span></h1> */}
                        <RatingPart averageRating={averageRating} caller={"review"} />
                        <span>{totalRatingCount} <span>global ratings</span></span>
                        <div class="rating-number">{averageRating} out of 5 stars</div>
                    </div>
                ):null}            
            </div>
            <div className="review-review">
                <h1><span>Customer reviews</span></h1>
                {Object.values(reviewInfo['0']).map(reviewItem => (
                    <div key={reviewItem.id}>
                        <ReviewItem reviewItem={reviewItem}/>
                    </div>
                ))}
            </div>
    </>
    )
}

export default ReviewPart