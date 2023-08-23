class Api::ProductsController < ApplicationController
    def index
        # @products = Product.all.sort { |a,b| b.created_at <=> a.created_at }
        @products = Product.all

      if params[:search] 
          # @products = @products.where("product_name ILIKE '%#{params[:search]}%'")
          @products = @products.where("product_name ILIKE ?", "%#{params[:search]}%")
      end

      if params[:categories].present?
        categories = params[:categories].split(',')  # Split the comma-separated categories
        @products = @products.where("categories IN (?)", categories)
      end
    end

    def show
      # @product = Product.find_by(id: params[:id]) 
      @product = Product.includes(ratings: :reviewer).find_by(id: params[:id]) 
      render :show
  end

end
