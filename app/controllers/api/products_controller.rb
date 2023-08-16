class Api::ProductsController < ApplicationController
    def index
        @products = Product.all.sort { |a,b| b.created_at <=> a.created_at }
      end
end
