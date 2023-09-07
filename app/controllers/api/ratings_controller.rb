class Api::RatingsController < ApplicationController
    def index
        @ratings = Rating.all.sort { |a,b| b.created_at <=> a.created_at }
    end

    def show
      @ratings = Rating.find_by(id: params[:id]) 
      render json: @ratings
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
    
    def update
      @rating = Rating.find(params[:id])
  
      if current_user.id == @rating.reviewer_id
        if @rating.update(review_params)
          render @rating, status: :ok
        else
          render json: { errors: @rating.errors.full_messages }, status: :unprocessable_entity
        end
      else
        render json: { errors: 'You are not authorized to update this review' }, status: :unauthorized
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
