class ReviewSerializer < ActiveModel::Serializer
  attributes :stars, :title, :message
  belongs_to :user, serializer: ReviewUserSerializer
end
