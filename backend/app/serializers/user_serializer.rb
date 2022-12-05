class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :phone, :is_admin
  has_many :requests
  has_many :jobs, through: :requests
  has_one :review
end
