class Request < ApplicationRecord
    validates :status, inclusion: { in: %w(pending canceled approved denied completed) }
    belongs_to :user
    belongs_to :job
end
