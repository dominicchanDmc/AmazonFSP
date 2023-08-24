# json.array! @products do |product|
#   json.partial! 'api/products/product', product: product
# end

@products.each do |product|
  json.set! product.id do
      json.partial! 'product', product: product
      json.ratings do
        product.ratings.each do |rating|
            json.set! rating.id do
                json.extract! rating, :id,:reviewer_id,:overall_rating,:review_headline,:review
                json.reviewer do
                  json.set! rating.reviewer.id do
                      json.extract! rating.reviewer, :id, :username,:email          
                  end
              end
            end
        end
    end 
  end
end
