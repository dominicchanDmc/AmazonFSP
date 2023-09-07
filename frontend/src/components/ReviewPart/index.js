import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import RatingPart from '../RatingPart'
import ReviewItem from '../ReviewItem';
import './ReviewPart.css'
import { useSelector } from 'react-redux';
function ReviewPart(props) {
    const {reviewInfo,averageRating,totalRatingCount,productId} = props;
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const userReviewed = hasUserReviewed(reviewInfo, sessionUser);

    function hasUserReviewed(reviewInfo, sessionUser) {
        if (!sessionUser) {
          // If there is no session user, return false.
          return false;
        }
      
        // Check if there's any review with the same reviewerId as sessionUser's id.
        return reviewInfo.some((review) => review.reviewerId === sessionUser.id);
    }

    const handleReview = (e) => {
        if (sessionUser)
            history.push(`/products/${productId}/reviewForm`);
        else
            history.push('/login');
    };
    const filteredReviewInfo = reviewInfo.filter((reviewItem) => !reviewItem.isDeleted);

    return (<>
            <div className="review-rating">
                {totalRatingCount> 0 ? (<>
                    <div className="rating-box">
                        <RatingPart averageRating={averageRating} caller={"review"} />
                        <span>{totalRatingCount} <span>global ratings</span></span>
                        <div className="rating-number">{averageRating} out of 5 stars</div>
                        <div className="breck"></div> 
                        <div className="review-card">
                            <span className="price-fontSize-18"><strong>Review this product</strong></span>
                            <span className="price-fontSize-14">Share your thoughts with other customers</span>
                            {!userReviewed ? (<button className='review-card-button' onClick={handleReview}>Write a customer review</button>): null}
                            <div className="breck"/>
                        </div>
                    </div>
                </>
                ):null}            
            </div>
            <div className="review-review">
                <h1><span>Customer reviews</span></h1>
                {filteredReviewInfo.map(reviewItem => (
                    <div key={reviewItem.id}>
                        <ReviewItem productId={productId} reviewItem={reviewItem}/>
                    </div>
                ))}
            </div>
    </>
    )
}

export default ReviewPart