import RatingPart from '../RatingPart'
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
                        <h1><span>Customer reviews</span></h1>
                        <RatingPart averageRating={averageRating} caller={"review"}/>
                        <span>{totalRatingCount} <span>global ratings</span></span>
                        <div class="rating-number">{averageRating} out of 5 stars</div>
                    </div>
                ):null}            
            </div>
            <div className="review-review">
                <div className="testimonial-box">
                    <div className="box-top">
                        <div className="profile">
                            <div className="name-user">
                                <strong>Touseeq Ijaz</strong>
                                <span>@touseeqijazweb</span>
                            </div>
                        </div>
                        <div className="reviews">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="fa-solid fa-star-half"></i>
                        </div>
                    </div>
                    <div className="client-comment">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.</p>
                    </div>
                </div>
            </div>
    </>
    )
}

export default ReviewPart