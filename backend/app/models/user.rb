class User < ApplicationRecord
    has_secure_password
    has_one :review
    has_many :requests
    has_many :jobs, through: :requests
end
