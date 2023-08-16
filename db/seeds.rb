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

puts "Creating products..."
product_Sony_WH_CH720N = Product.create!(product_name: "Sony WH-CH720N Noise Canceling Wireless Headphones Bluetooth Over The Ear Headset with Microphone and Alexa Built-in, Black New",description:"Turn down the world's noise with the long-lasting noise cancellation performance. Featuring Dual Noise Sensor technology and an Integrated Processor V1, the WH-CH720N allows you to fully immerse yourself in music without any distractions. Ergonomically designed to be lightweight, comfortable, and with up to 35 hours of battery life, you’ll almost forget you’re wearing it.",categories:"audio,Headphones & earbuds,Portable Speakers",price:149.99,discount:35);
product_Sony_WH_CH720N_1 = File.open('frontend/src/assets/products/audio/Sony_WH_CH720N_1.jpg')
product_Sony_WH_CH720N_2 = File.open('frontend/src/assets/products/audio/Sony_WH_CH720N_2.jpg')
product_Sony_WH_CH720N.photos.attach(io: product_Sony_WH_CH720N_1, filename: 'Sony_WH_CH720N_1.jpg')
product_Sony_WH_CH720N.photos.attach(io: product_Sony_WH_CH720N_2, filename: 'Sony_WH_CH720N_2.jpg')

product_JBL_Vibe_200TWS = Product.create!(product_name: "JBL Vibe 200TWS True Wireless Earbuds - Black, Small",description:"Amp up your routine with the sound you love! Get powerful, JBL Deep Bass Sound and all the freedom of true wireless for up to 20 hours with the JBL Vibe 200TWS. Stay in touch with your friends hands-free with a simple touch and in full comfort.",categories:"audio,Headphones & earbuds,Portable Speakers",price:49.95,discount:40);
product_JBL_Vibe_200TWS_1 = File.open('frontend/src/assets/products/audio/JBL_Vibe_200TWS_1.jpg')
product_JBL_Vibe_200TWS_2 = File.open('frontend/src/assets/products/audio/JBL_Vibe_200TWS_2.jpg')
product_JBL_Vibe_200TWS.photos.attach(io: product_JBL_Vibe_200TWS_1, filename: 'JBL_Vibe_200TWS_1.jpg')
product_JBL_Vibe_200TWS.photos.attach(io: product_JBL_Vibe_200TWS_2, filename: 'JBL_Vibe_200TWS_2.jpg')

puts "Seeding complete!"
end