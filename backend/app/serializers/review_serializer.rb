class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :stars, :title, :message
  belongs_to :user, serializer: ReviewUserSerializer
end
