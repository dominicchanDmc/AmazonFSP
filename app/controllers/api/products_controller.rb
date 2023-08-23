class Api::ProductsController < ApplicationController
    def index
        # @products = Product.all.sort { |a,b| b.created_at <=> a.created_at }
        @products = Product.all

      if params[:search] 
          # @products = @products.where("product_name ILIKE '%#{params[:search]}%'")
          @products = @products.where("product_name ILIKE ?", "%#{params[:search]}%")
      end

      if params[:category].present?
        categories = params[:category]
        @products = @products.where("ARRAY[?] && STRING_TO_ARRAY(categories, ',')", categories)
      end
    end

    def show
      # @product = Product.find_by(id: params[:id]) 
      @product = Product.includes(ratings: :reviewer).find_by(id: params[:id]) 
      render :show
  end

end
