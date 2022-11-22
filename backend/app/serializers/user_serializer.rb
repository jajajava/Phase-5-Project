class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :public_name, :password_digest, :email, :phone, :is_admin
end
