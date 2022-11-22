class RequestSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :job_id, :address, :is_urgent
end
