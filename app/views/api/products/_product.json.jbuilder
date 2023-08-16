json.extract! product, :id, :product_name,:description,:categories,:price,:discount
json.photoUrls product.photos.map { |file| file.url }

