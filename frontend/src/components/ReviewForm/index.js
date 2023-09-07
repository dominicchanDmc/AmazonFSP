import { useEffect, useState } from 'react';
import './ReviewForm.css'
import { useHistory, useLocation, useParams } from 'react-router-dom/cjs/react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct, getProduct } from "../../store/productsReducer";
import { postRatingRequest } from '../../store/productsReducer';
import RatingPart from '../RatingPart';

function ReviewForm() {
  const [overall_rating, setOverAllRatingRating] = useState(0); 
  const [review_headline, setHeadline] = useState('');
  const [review, setReview] = useState('');
  const { productId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const [productReview, setProductReview] = useState(null);
  const product = useSelector(getProduct(productId));
  const location = useLocation();
  const { pathname } = location;
  const [errors, setErrors] = useState([]);
  const sessionUser = useSelector(state => state.session.user);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
      dispatch(fetchProduct(productId));
  }, [dispatch,productId]);


  const handleRatingChange = (value) => {
    setOverAllRatingRating(value);
  };

  const createReview = async () => {
    setErrors([]);
    try {
      const reviewData = {
        overall_rating,
        review_headline,
        review,
        productId, 
        reviewer_id:sessionUser.id
      };

      const response  = await  dispatch(postRatingRequest(reviewData))

      if (response.success) {
        setOverAllRatingRating(0);
        setHeadline('');
        setReview('');
        history.push(`/products/${productId}`);
        // console.log('Review created successfully');
      } else {
        if (response.error !== null && response.error !== undefined && response.error !== ""){
          setErrors([...errors, response.error]);
        }
      }
    } catch (error) {
     console.error('Error creating review:', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);

    if (!overall_rating) {
      // setErrors([...errors, "Rating is required."]);
      setErrors(["Rating is required."]);
      return; 
    }

    if (!review_headline || !review) {
      // setErrors([...errors, "Headline and review are required."]);
      setErrors(["Headline and review are required."]);
      return; 
    }
    createReview();
  };

  return (
    <section className='bgcolor-white' id="review-form-section">
      <div className="review-form">
        <div><h2>Create Review</h2>
          <span>                    
            {product?.productName.length > 150 ? product?.productName.slice(0, 150) + "..." : product?.productName}
          </span>
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            <h3>Overall rating (1-5)</h3>
            <RatingPart averageRating={0} caller={"reviewForm"} handleRatingChange={handleRatingChange} />
          </label>
          <div>
            <h3>Add a headline</h3>
              <input
                type="text"
                id='headline'
                value={review_headline}
                onChange={(e) => setHeadline(e.target.value)}
              />
          </div>
      
          <div>
                <h3>Add a written review</h3>        
                  <textarea
                    value={review}
                    id='review'
                    className='reviewInputTextArea'
                    onChange={(e) => setReview(e.target.value)}
                  />
              <br/>
              <ul className="errorUl">
                {errors? errors.map(error => <li key={error}><b>{error}</b></li>):null}
              </ul>
              <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ReviewForm;
