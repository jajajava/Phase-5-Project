class User < ApplicationRecord
    validates :email, uniqueness: true, presence: true
    validates :phone, uniqueness: true

    has_secure_password
    has_one :review
    has_many :requests
    has_many :jobs, through: :requests
end
