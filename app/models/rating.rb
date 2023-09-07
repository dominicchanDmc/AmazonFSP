# == Schema Information
#
# Table name: ratings
#
#  id              :bigint           not null, primary key
#  overall_rating  :integer          not null
#  review_headline :string           not null
#  review          :string           not null
#  reviewer_id     :bigint           not null
#  product_id      :bigint           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class Rating < ApplicationRecord
    validates :overall_rating, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 5 }
    validates :review_headline, presence: true
    validates :review, presence: true    
    validates :reviewer_id, uniqueness: {scope: :product_id}

    belongs_to :reviewer,
    foreign_key: :reviewer_id,
    class_name: :User

    belongs_to :product,
    optional: true
end
