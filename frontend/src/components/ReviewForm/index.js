import { useEffect, useState } from 'react';
import './ReviewForm.css'
import { useLocation, useParams } from 'react-router-dom/cjs/react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct, getProduct } from "../../store/productsReducer";
import RatingPart from '../RatingPart';

function ReviewForm() {
  const [rating, setRating] = useState(0); 
  const [headline, setHeadline] = useState('');
  const [review, setReview] = useState('');
  const { productId } = useParams();
  const dispatch = useDispatch();
  const [productReview, setProductReview] = useState(null);
  const product = useSelector(getProduct(productId));
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
      dispatch(fetchProduct(productId));
  }, [dispatch,productId]);


  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const reviewData = {
      rating,
      headline,
      review,
    };

    setRating(0);
    setHeadline('');
    setReview('');

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
            <RatingPart averageRating={0} caller={"reviewForm"} />
          </label>
          <div>
            <h3>Add a headline</h3>
              <input
                type="text"
                id='headline'
                value={headline}
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
              <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ReviewForm;
