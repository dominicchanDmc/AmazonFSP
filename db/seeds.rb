# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ActiveRecord::Base.transaction do
puts "Destroying tables..."
User.destroy_all

puts "Resetting primary keys..."
ActiveRecord::Base.connection.reset_pk_sequence!('users')

puts "Creating users..."
mike = User.create!(username: 'mike', email: 'mike@google.com', password: '123456')
paulo = User.create!(username: 'paulo', email: 'paulo@google.com', password: '123456')
peter = User.create!(username: 'peter', email: 'peter@google.com', password: '123456')
john = User.create!(username: 'john', email: 'john@google.com', password: '123456')
mary = User.create!(username: 'mary', email: 'mary@google.com', password: '123456')
joe = User.create!(username: 'joe', email: 'joe@google.com', password: '123456')
george = User.create!(username: 'george', email: 'george@google.com', password: '123456')
thomas = User.create!(username: 'thomas', email: 'thomas@google.com', password: '123456')

puts "Seeding complete!"
end