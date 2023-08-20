# json.cartItems @cart_items do |cartItem|
#   json.extract! cartItem, :id, :quantity, :user_id, :product_id
# end

@cart_items.each do |cartItem|
  json.set! cartItem.id do
    json.partial! 'cart_items', cart_items: cartItem
  end
end

json.products do
  @cart_items.each do |cart_item|
      json.set! cart_item.product.id do
          json.extract! cart_item.product, :id, :product_name,:price,:discount
      end
   end
end   