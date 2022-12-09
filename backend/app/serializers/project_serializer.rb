class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :address, :job
end
