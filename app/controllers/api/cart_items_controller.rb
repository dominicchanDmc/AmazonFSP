class Api::CartItemsController < ApplicationController
    def index
        user = User.find(params[:user_id]) 
        @cart_items = user.cartItems.includes(:product)

    end

    def create
      product = Product.find_by(id: params[:product_id])
      if product
        @cart_item = CartItem.new(quantity:params[:quantity],
          user_id:current_user.id,product_id:product.id)
        # @cart_item = current_user.cart_items.build(product: product, quantity: params[:quantity])
  
        if @cart_item.save
          render :cart_item_abrev
        else
          render json: @cart_item.errors.full_messages, status: :unprocessable_entity
        end
      
      end
    end

    def destroy
      @cart_item = CartItem.find_by(id: params[:id])
  
      if @cart_item
        @cart_item.destroy
      else
        render json: { error: "Cart item not found" }, status: :not_found
      end
    end

    private
    def cartItems_params
      params.require(:cartItems).permit(:quantity)
    end
end
