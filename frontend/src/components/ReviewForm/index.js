import { useEffect, useState } from 'react';
import './ReviewForm.css'
import { useLocation, useParams } from 'react-router-dom/cjs/react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct, getProduct } from "../../store/productsReducer";

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
    <div className="review-form">
      <h2>Create Review</h2>
      <span>{product.productName}</span>
      <form onSubmit={handleSubmit}>
        <label>
          Overall rating
          <div className="rating-stars">
            {[1, 2, 3, 4, 5].map((value) => (
              <span
                key={value}
                onClick={() => handleRatingChange(value)}
                className={value <= rating ? 'star selected' : 'star'}
              >
                ★
              </span>
            ))}
          </div>
        </label>

        <label>
          Add a headline
          <input
            type="text"
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
          />
        </label>

        <label>
          Add a written review
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ReviewForm;
