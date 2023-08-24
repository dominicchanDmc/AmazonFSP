export const getRatingInfo = product=>{
    let reviewInfoValue,totalRatingCount,sumOfRatings,averageRating,reviewInfo=[] ; 

    if (product && product.ratings){
        reviewInfo = Object.values(product.ratings);
        reviewInfoValue = Object.values(reviewInfo);
        totalRatingCount = reviewInfoValue.length;
        sumOfRatings = reviewInfoValue.reduce((sum, rating) => sum + rating.overallRating, 0);
        averageRating = Math.round((sumOfRatings / totalRatingCount) * 2) / 2;

        return {totalRatingCount:totalRatingCount,averageRating:averageRating,reviewInfo:reviewInfoValue}
    }
    else
    return {totalRatingCount:0,averageRating:0,reviewInfo:0};  
}