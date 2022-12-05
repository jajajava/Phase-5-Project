class RequestSerializer < ActiveModel::Serializer
  attributes :id, :address, :is_urgent, :status
  belongs_to :user
  belongs_to :job
end
