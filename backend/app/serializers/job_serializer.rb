class JobSerializer < ActiveModel::Serializer
  attributes :id, :task, :category
end
