# == Schema Information
#
# Table name: products
#
#  id           :bigint           not null, primary key
#  product_name :string           not null
#  description  :string
#  categories   :string           not null
#  price        :float            not null
#  discount     :float
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Product < ApplicationRecord
    validates :product_name, :price, :categories,presence: true
    has_many_attached :photos
    before_destroy :purge_photos

    has_many :cartItems,
    class_name: :CartItem,
    dependent: :destroy

    private
    def purge_photos
      photos.purge
    end
end
