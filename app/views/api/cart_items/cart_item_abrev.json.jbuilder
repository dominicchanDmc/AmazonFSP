json.partial! 'cart_item', cart_item: @cart_item
json.products do
    json.set! @cart_item.product.id do
      json.extract! @cart_item.product, :id, :product_name, :price, :discount
      json.photoUrls @cart_item.product.photos.map { |file| file.url }
    end
  end  
# json.photoUrls @cartItem.product.photos.map { |file| file.url }
