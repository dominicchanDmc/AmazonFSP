class Api::RatingsController < ApplicationController
    def index
        @ratings = Rating.all.sort { |a,b| b.created_at <=> a.created_at }
    end

    def create
        @product = Product.find(params[:product_id])
        @review = @product.ratings.build(review_params)
        debugger
        if @review.save
          render json: { message: 'Review created successfully' }, status: :created
        else
          render json: { errors: @review.errors.full_messages }, status: :unprocessable_entity
        end
    end
    
    private

    def review_params
      params.require(:rating).permit(:overall_rating, :review_headline, :review,:reviewer_id)
    end
end
