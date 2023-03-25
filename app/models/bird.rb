class Bird < ApplicationRecord

  validates :name, uniqueness: {message: "oh sorry that bird is taken"}
end
