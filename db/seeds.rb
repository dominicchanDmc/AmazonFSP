# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Destroying tables..."
User.destroy_all
Product.destroy_all

puts "Resetting primary keys..."
ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('products')

puts "Creating users..."
mike = User.create!(username: 'mike', email: 'mike@google.com', password: '123456')
peter = User.create!(username: 'peter', email: 'peter@google.com', password: '123456')
john = User.create!(username: 'john', email: 'john@google.com', password: '123456')
george = User.create!(username: 'george', email: 'george@google.com', password: '123456')
thomas = User.create!(username: 'thomas', email: 'thomas@google.com', password: '123456')

puts "Creating products..."
puts "Creating audio..."
product_Sony_WH_CH720N = Product.create!(product_name: "Sony WH-CH720N Noise Canceling Wireless Headphones Bluetooth Over The Ear Headset with Microphone and Alexa Built-in, Black New",description:"Turn down the world's noise with the long-lasting noise cancellation performance. Featuring Dual Noise Sensor technology and an Integrated Processor V1, the WH-CH720N allows you to fully immerse yourself in music without any distractions. Ergonomically designed to be lightweight, comfortable, and with up to 35 hours of battery life, you’ll almost forget you’re wearing it.",categories:"audio,Headphones & earbuds,Portable Speakers",price:149.99,discount:0);
product_Sony_WH_CH720N_1 = File.open('frontend/src/assets/products/audio/Sony_WH_CH720N_1.jpg')
product_Sony_WH_CH720N_2 = File.open('frontend/src/assets/products/audio/Sony_WH_CH720N_2.jpg')
product_Sony_WH_CH720N.photos.attach(io: product_Sony_WH_CH720N_1, filename: 'Sony_WH_CH720N_1.jpg')
product_Sony_WH_CH720N.photos.attach(io: product_Sony_WH_CH720N_2, filename: 'Sony_WH_CH720N_2.jpg')

product_JBL_Vibe_200TWS = Product.create!(product_name: "JBL Vibe 200TWS True Wireless Earbuds - Black, Small",description:"Amp up your routine with the sound you love! Get powerful, JBL Deep Bass Sound and all the freedom of true wireless for up to 20 hours with the JBL Vibe 200TWS. Stay in touch with your friends hands-free with a simple touch and in full comfort.",categories:"audio,Headphones & earbuds,Portable Speakers",price:49.95,discount:40)
product_JBL_Vibe_200TWS_1 = File.open('frontend/src/assets/products/audio/JBL_Vibe_200TWS_1.jpg')
product_JBL_Vibe_200TWS_2 = File.open('frontend/src/assets/products/audio/JBL_Vibe_200TWS_2.jpg')
product_JBL_Vibe_200TWS.photos.attach(io: product_JBL_Vibe_200TWS_1, filename: 'JBL_Vibe_200TWS_1.jpg')
product_JBL_Vibe_200TWS.photos.attach(io: product_JBL_Vibe_200TWS_2, filename: 'JBL_Vibe_200TWS_2.jpg')

array_Sony_SRS_XB13 = []
product_Sony_SRS_XB13 = Product.create!(product_name: "Sony SRS-XB13 EXTRA BASS Wireless Bluetooth Portable Lightweight Compact Travel Speaker, IP67 Waterproof & Durable for Outdoor, 16 Hour Battery, USB Type-C, Removable Strap, and Speakerphone, Black",description:"Enjoy big sound with the super-compact SRS-XB13 wireless speaker, featuring EXTRA BASS™, an updated IP67 waterproof and dustproof design1,2, and up to 16 hours of battery life.3 Small enough to fit in a bag or cupholder, the XB13 also features a multiway strap to take it with you everywhere you go.",categories:"audio,Headphones & earbuds,Portable Speakers",price:59.99,discount:42)
array_Sony_SRS_XB13.push({file:File.open('frontend/src/assets/products/audio/Sony_SRS_XB13_1.jpg'),filename:'Sony_SRS_XB13_1.jpg'})
array_Sony_SRS_XB13.push({file:File.open('frontend/src/assets/products/audio/Sony_SRS_XB13_2.jpg'),filename:'Sony_SRS_XB13_2.jpg'})
array_Sony_SRS_XB13.each do |img| 
    product_Sony_SRS_XB13.photos.attach(io:img[:file],filename:img[:filename])
end

product_JBL_Flip_6 = Product.create!(product_name: "JBL Flip 6 - Portable Bluetooth Speaker, powerful sound and deep bass, IPX7 waterproof, 12 hours of playtime, JBL PartyBoost for multiple speaker pairing for home, outdoor and travel (Blue)",description:"Louder, more powerful sound The beat goes on with the JBL Flip 6 2-way speaker system, engineered to deliver loud, crystal clear, powerful sound. Its racetrack-shaped woofer delivers exceptional low frequencies and midrange, while a separate tweeter produces crisp, clear high-frequencies. Flip 6 also features optimized dual passive radiators for deep bass, fine-tuned with using Harman’s advanced algorithm.",categories:"audio,Headphones & earbuds,Portable Speakers",price:129.95,discount:31)
product_JBL_Flip_6_1 = File.open('frontend/src/assets/products/audio/JBL_Flip_6_1.jpg')
product_JBL_Flip_6_2 = File.open('frontend/src/assets/products/audio/JBL_Flip_6_2.jpg')
product_JBL_Flip_6.photos.attach(io: product_JBL_Flip_6_1, filename: 'JBL_Flip_6_1.jpg')
product_JBL_Flip_6.photos.attach(io: product_JBL_Flip_6_2, filename: 'JBL_Flip_6_2.jpg')

product_Jabra_Elite_7_Pro = Product.create!(product_name: "Jabra Elite 7 Pro in Ear Bluetooth Earbuds - Adjustable Active Noise Cancellation True Wireless Buds in a Compact Design MultiSensor Voice Technology for Clear Calls - Titanium Black",description:"Jabra Elite 7 Pro True Wireless Earbuds feature Jabra MultiSensor Voice technology, which combines four powerful microphones and an advanced voice sensor in each bud that automatically activates when it's windy. It transmits your voice through vibrations in your jaw to cancel out wind noise - for a new call experience, literally anywhere. Elite 7 Pro In-Ear Bluetooth Ear Buds include Adjustable Active Noise Cancellation and HearThrough technology, which allows you to tune out the world or become aware of your surroundings with five preset sound control levels.",categories:"audio,Headphones & earbuds,Portable Speakers",price:199.99,discount:40)
product_Jabra_Elite_7_Pro_1 = File.open('frontend/src/assets/products/audio/Jabra_Elite_7_Pro_1.jpg')
product_Jabra_Elite_7_Pro_2 = File.open('frontend/src/assets/products/audio/Jabra_Elite_7_Pro_2.jpg')
product_Jabra_Elite_7_Pro.photos.attach(io: product_Jabra_Elite_7_Pro_1, filename: 'Jabra_Elite_7_Pro_1.jpg')
product_Jabra_Elite_7_Pro.photos.attach(io: product_Jabra_Elite_7_Pro_2, filename: 'Jabra_Elite_7_Pro_2.jpg')

puts "Seeding complete!"
