class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :phone, :is_admin
end
