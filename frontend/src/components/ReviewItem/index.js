import RatingPart from '../RatingPart';
import './ReviewItem.css'
function ReviewItem(props) {
    const reviewItem = props.reviewItem;
    const reviewer = reviewItem.reviewer[reviewItem.reviewerId]

    return (<>
          <div className="review-item">
          <div className="thumbnail"></div>
              <div className="review-item-comment-content">
                <div className="review-item-comment-top">
                  <div className="review-item-title">
                    <i className="fa-solid fa-user"></i>
                  {"  "+reviewer.username}</div>
                  <div className="review-item-rating"> 
                    <div className='review-star-container'>
                        <div className='review-star-widget'>
                            <RatingPart averageRating={reviewItem.overallRating} 
                            caller={"reviewItem"} callerId={reviewItem.id}/>
                        </div>
                    </div>
                  </div>
                </div>
                <span className="review-item-subtitle">{reviewItem.reviewHeadline}</span>
                <p className='price-fontSize-14'>
                    {reviewItem.review}
                </p>
              </div>
            </div>


        {/* <div className="box-top">
            <div className="profile">
                <div className="name-user">
                    <span>{reviewer.username}</span>
                </div>
            </div>
            <div className="reviews">
                <RatingPart averageRating={reviewItem.overallRating} 
                caller={"reviewItem"} callerId={reviewItem.id}/>
            </div>
            <div>
                <span>{reviewItem.reviewHeadline}</span>
            </div>
        </div>
        <div className="client-comment">
            <p>
                {reviewItem.review}
            </p>
        </div> */}
    </>
    )
}

export default ReviewItem