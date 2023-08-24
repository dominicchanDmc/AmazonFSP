export const getRatingInfo = product=>{
    let reviewInfov,totalRatingCount,sumOfRatings,averageRating,reviewInfo=[] ; 

    if (product && product.ratings){
        reviewInfo = Object.values(product.ratings);
        reviewInfov = Object.values(reviewInfo);
        totalRatingCount = reviewInfov.length;
        sumOfRatings = reviewInfov.reduce((sum, rating) => sum + rating.overallRating, 0);
        averageRating = Math.round((sumOfRatings / totalRatingCount) * 2) / 2;

        return {totalRatingCount:totalRatingCount,averageRating:averageRating}
    }
    else
    return {totalRatingCount:0,averageRating:0};  
}