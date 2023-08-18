    json.set! @product.id do
        json.partial! 'product', product: @product
        # json.extract! @product, :id, :product_name, :description, :categories, :price, :discount
        json.photoUrls @product.photos.attached? ? @product.photos.map { |file| file.url } :nil
    end
    # json.photoUrls @product.photos.attached? ? url_for(@product.photos) : nil

