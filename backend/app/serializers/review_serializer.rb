class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :stars, :title, :message, :is_verified
  belongs_to :user, serializer: ReviewUserSerializer
end
