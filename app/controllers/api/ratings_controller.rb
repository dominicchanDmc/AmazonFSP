class Api::RatingsController < ApplicationController
    def index
        @ratings = Rating.all.sort { |a,b| b.created_at <=> a.created_at }
    end

    def create
        @product = Product.find(params[:product_id])
        @rating = @product.ratings.build(review_params)
        if @rating.save
          render json: @rating, status: :created
        else
          render json: { errors: @rating.errors.full_messages }, status: :unprocessable_entity
        end
    end
    
    def destroy
      @rating = Rating.find_by(id: params[:id])
  
      if @rating
        @rating.destroy
      else
        render json: { error: "Review not found" }, status: :not_found
      end
    end

    private

    def review_params
      params.require(:rating).permit(:overall_rating, :review_headline, :review,:reviewer_id)
    end
end
