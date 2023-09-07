import { useDispatch, useSelector } from 'react-redux';
import RatingPart from '../RatingPart';
import './ReviewItem.css'
import { fetchRemoveReview } from '../../utils/ratingApiUtils';


function ReviewItem(props) {
    const reviewItem = props?.reviewItem;
    const reviewer = reviewItem?.reviewer ? reviewItem?.reviewer[reviewItem?.reviewerId] : null; // Check if reviewer exists
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    let isSessionUserReview = false;
    if (sessionUser)
        isSessionUserReview = reviewItem?.reviewerId === sessionUser.id;

  const onEdit=()=>{
    
  }

  const onDelete=()=>{
    dispatch(fetchRemoveReview(props.productId,reviewItem.id));
  };

    return (<>
    {reviewer? (<div className="review-item">
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
              {isSessionUserReview && (
                <div>
                    <button  onClick={() => onEdit()}>Edit</button>
                    <button  onClick={() => onDelete()}>Delete</button>
                </div>
                )}
            </div>):null}
            
    </>
    )
}

export default ReviewItem