class Api::CartItemsController < ApplicationController
    def index
        user = User.find(params[:user_id]) 
        @cart_items = user.cartItems.includes(:product)

    end

    private
    def cartItems_params
      params.require(:cartItems).permit(:quantity)
    end
end
