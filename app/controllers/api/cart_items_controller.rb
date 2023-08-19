class Api::CartItemsController < ApplicationController
    def index
        user = User.find(params[:user_id]) # Get the user by user_id parameter
        cart_items = user.cart_items.includes(:product) # Eager load associated products
        render json: cart_items.to_json(include: :product)
    end

    private
    def cart_items_params
      params.require(:cart_items).permit(:quantity)
    end
end
