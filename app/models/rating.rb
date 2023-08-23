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
    validates :overall_rating,:review_headline,:review, presence: true
    validates :reviewer_id, uniqueness: {scope: :product_id}

    belongs_to :reviewer,
    foreign_key: :reviewer_id,
    class_name: :User

    belongs_to :product,
    optional: true
end
