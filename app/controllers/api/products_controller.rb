class Api::ProductsController < ApplicationController
    def index
        @products = Product.all.sort { |a,b| b.created_at <=> a.created_at }
    end

    def show
      # @product = Product.find_by(id: params[:id]) 
      @product = Product.includes(ratings: :reviewer).find_by(id: params[:id]) 
      render :show
  end

end
