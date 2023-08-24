# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# puts "Destroying tables..."
# User.destroy_all
# Product.destroy_all

# puts "Resetting primary keys..."
# ActiveRecord::Base.connection.reset_pk_sequence!('users')
# ActiveRecord::Base.connection.reset_pk_sequence!('products')

# puts "Creating users..."
# mike = User.create!(username: 'mike', email: 'mike@google.com', password: '123456')
# peter = User.create!(username: 'peter', email: 'peter@google.com', password: '123456')
# john = User.create!(username: 'john', email: 'john@google.com', password: '123456')
# george = User.create!(username: 'george', email: 'george@google.com', password: '123456')
# thomas = User.create!(username: 'thomas', email: 'thomas@google.com', password: '123456')

# puts "Creating products..."
# puts "Creating audio...................................................."
# product_Sony_WH_CH720N = Product.create!(product_name: "Sony WH-CH720N Noise Canceling Wireless Headphones Bluetooth Over The Ear Headset with Microphone and Alexa Built-in, Black New",description:"Turn down the world's noise with the long-lasting noise cancellation performance. Featuring Dual Noise Sensor technology and an Integrated Processor V1, the WH-CH720N allows you to fully immerse yourself in music without any distractions. Ergonomically designed to be lightweight, comfortable, and with up to 35 hours of battery life, you’ll almost forget you’re wearing it.",categories:"electronic, audio,Headphones & earbuds",price:149.99,discount:0);
# product_Sony_WH_CH720N_1 = File.open('frontend/src/assets/products/audio/Sony_WH_CH720N_1.jpg')
# product_Sony_WH_CH720N_2 = File.open('frontend/src/assets/products/audio/Sony_WH_CH720N_2.jpg')
# product_Sony_WH_CH720N.photos.attach(io: product_Sony_WH_CH720N_1, filename: 'Sony_WH_CH720N_1.jpg')
# product_Sony_WH_CH720N.photos.attach(io: product_Sony_WH_CH720N_2, filename: 'Sony_WH_CH720N_2.jpg')

# product_JBL_Vibe_200TWS = Product.create!(product_name: "JBL Vibe 200TWS True Wireless Earbuds - Black, Small",description:"Amp up your routine with the sound you love! Get powerful, JBL Deep Bass Sound and all the freedom of true wireless for up to 20 hours with the JBL Vibe 200TWS. Stay in touch with your friends hands-free with a simple touch and in full comfort.",categories:"electronic,audio,Headphones & earbuds",price:49.95,discount:40);
# product_JBL_Vibe_200TWS_1 = File.open('frontend/src/assets/products/audio/JBL_Vibe_200TWS_1.jpg')
# product_JBL_Vibe_200TWS_2 = File.open('frontend/src/assets/products/audio/JBL_Vibe_200TWS_2.jpg')
# product_JBL_Vibe_200TWS.photos.attach(io: product_JBL_Vibe_200TWS_1, filename: 'JBL_Vibe_200TWS_1.jpg')
# product_JBL_Vibe_200TWS.photos.attach(io: product_JBL_Vibe_200TWS_2, filename: 'JBL_Vibe_200TWS_2.jpg')

# array_Sony_SRS_XB13 = []
# product_Sony_SRS_XB13 = Product.create!(product_name: "Sony SRS-XB13 EXTRA BASS Wireless Bluetooth Portable Lightweight Compact Travel Speaker, IP67 Waterproof & Durable for Outdoor, 16 Hour Battery, USB Type-C, Removable Strap, and Speakerphone, Black",description:"Enjoy big sound with the super-compact SRS-XB13 wireless speaker, featuring EXTRA BASS™, an updated IP67 waterproof and dustproof design1,2, and up to 16 hours of battery life.3 Small enough to fit in a bag or cupholder, the XB13 also features a multiway strap to take it with you everywhere you go.",categories:"electronic,audio,Portable Speakers",price:59.99,discount:42);
# array_Sony_SRS_XB13.push({file:File.open('frontend/src/assets/products/audio/Sony_SRS_XB13_1.jpg'),filename:'Sony_SRS_XB13_1.jpg'})
# array_Sony_SRS_XB13.push({file:File.open('frontend/src/assets/products/audio/Sony_SRS_XB13_2.jpg'),filename:'Sony_SRS_XB13_2.jpg'})
# array_Sony_SRS_XB13.each do |img| 
#     product_Sony_SRS_XB13.photos.attach(io:img[:file],filename:img[:filename])
# end

# product_JBL_Flip_6 = Product.create!(product_name: "JBL Flip 6 - Portable Bluetooth Speaker, powerful sound and deep bass, IPX7 waterproof, 12 hours of playtime, JBL PartyBoost for multiple speaker pairing for home, outdoor and travel (Blue)",description:"Louder, more powerful sound The beat goes on with the JBL Flip 6 2-way speaker system, engineered to deliver loud, crystal clear, powerful sound. Its racetrack-shaped woofer delivers exceptional low frequencies and midrange, while a separate tweeter produces crisp, clear high-frequencies. Flip 6 also features optimized dual passive radiators for deep bass, fine-tuned with using Harman’s advanced algorithm.",categories:"electronic,audio,Portable Speakers",price:129.95,discount:31);
# product_JBL_Flip_6_1 = File.open('frontend/src/assets/products/audio/JBL_Flip_6_1.jpg')
# product_JBL_Flip_6_2 = File.open('frontend/src/assets/products/audio/JBL_Flip_6_2.jpg')
# product_JBL_Flip_6.photos.attach(io: product_JBL_Flip_6_1, filename: 'JBL_Flip_6_1.jpg')
# product_JBL_Flip_6.photos.attach(io: product_JBL_Flip_6_2, filename: 'JBL_Flip_6_2.jpg')

# product_Jabra_Elite_7_Pro = Product.create!(product_name: "Jabra Elite 7 Pro in Ear Bluetooth Earbuds - Adjustable Active Noise Cancellation True Wireless Buds in a Compact Design MultiSensor Voice Technology for Clear Calls - Titanium Black",description:"Jabra Elite 7 Pro True Wireless Earbuds feature Jabra MultiSensor Voice technology, which combines four powerful microphones and an advanced voice sensor in each bud that automatically activates when it's windy. It transmits your voice through vibrations in your jaw to cancel out wind noise - for a new call experience, literally anywhere. Elite 7 Pro In-Ear Bluetooth Ear Buds include Adjustable Active Noise Cancellation and HearThrough technology, which allows you to tune out the world or become aware of your surroundings with five preset sound control levels.",categories:"electronic,audio,Headphones & earbuds",price:199.99,discount:40);
# product_Jabra_Elite_7_Pro_1 = File.open('frontend/src/assets/products/audio/Jabra_Elite_7_Pro_1.jpg')
# product_Jabra_Elite_7_Pro_2 = File.open('frontend/src/assets/products/audio/Jabra_Elite_7_Pro_2.jpg')
# product_Jabra_Elite_7_Pro.photos.attach(io: product_Jabra_Elite_7_Pro_1, filename: 'Jabra_Elite_7_Pro_1.jpg')
# product_Jabra_Elite_7_Pro.photos.attach(io: product_Jabra_Elite_7_Pro_2, filename: 'Jabra_Elite_7_Pro_2.jpg')

puts "Creating airConditioners................................................."
# array_BLACK_DECKER_8000_BTU = []
# product_BLACK_DECKER_8000_BTU = Product.create!(product_name: "BLACK+DECKER 8,000 BTU Portable Air Conditioner up to 350 Sq. with Remote Control, White",description:"Portable AC: Use this personal air conditioner (15.3” x 14” x 24.8”) in rooms up to 350 sq. ft. Stay cool in the hot summer months and sleep well with this BLACK+DECKER ac unit for bedroom.3-in-1: Our 4,100 BTU DOE (8000 BTU ASHRAE 128) air conditioner also functions as a dehumidifier & fan. This portable air conditioner (45.8 lbs.) has a convenient remote control & top mounted control panel with LED display.",categories:"airConditioners, HEATING & COOLING & AIR QUALITY,Home & Kitchen",price:419.99,discount:48);
# array_BLACK_DECKER_8000_BTU.push({file:File.open('frontend/src/assets/products/airConditioner/BLACK_DECKER_8000_BTU_1.jpg'),filename:'BLACK_DECKER_8000_BTU_1.jpg'})
# array_BLACK_DECKER_8000_BTU.push({file:File.open('frontend/src/assets/products/airConditioner/BLACK_DECKER_8000_BTU_2.jpg'),filename:'BLACK_DECKER_8000_BTU_2.jpg'})
# array_BLACK_DECKER_8000_BTU.each do |img| 
#     product_BLACK_DECKER_8000_BTU.photos.attach(io:img[:file],filename:img[:filename])
# end

# array_Frigidaire_FHWC124WB1 = []
# product_Frigidaire_FHWC124WB1 = Product.create!(product_name: "Frigidaire FHWC124WB1 Window Air Conditioner, 12000 BTU, White",description:"The Frigidaire 12,000 BTU window air conditioner keeps your room cool and comfortable with optimum circulation thanks to multi-directional airflow and three fan speeds. Easily install this air conditioner; this unit distributes the weight into two pieces using a slide-out chassis. Capture dust from the air and keep your air conditioner working efficiently with our easy-to-clean washable filter.",categories:"airConditioners, HEATING & COOLING & AIR QUALITY,Home & Kitchen",price:439.00,discount:32);
# array_Frigidaire_FHWC124WB1.push({file:File.open('frontend/src/assets/products/airConditioner/Frigidaire_FHWC124WB1_1.jpg'),filename:'Frigidaire_FHWC124WB1_1.jpg'})
# array_Frigidaire_FHWC124WB1.push({file:File.open('frontend/src/assets/products/airConditioner/Frigidaire_FHWC124WB1_2.jpg'),filename:'Frigidaire_FHWC124WB1_2.jpg'})
# array_Frigidaire_FHWC124WB1.each do |img| 
#     product_Frigidaire_FHWC124WB1.photos.attach(io:img[:file],filename:img[:filename])
# end

# array_Whynter_12000 = []
# product_Whynter_12000 = Product.create!(product_name: "Whynter 12,000 (7,000 BTU SACC) Elite Dual Hose Portable Air Conditioner Dehumidifier, Fan and Storage Bag, up to 400 sq ft, Grey",description:"Stay comfortable with this small portable air conditioner. Designed to align with environmental standards and reduce energy consumption, this portable dehumidifier and air conditioner includes CFC-free R-32 refrigerant and lead-free RoHS-compliant components. This dual hose air conditioner features auto-drain technology that uses and recycles moisture collected during the cooling process to produce cool air with a dehumidifying capacity of 82 pints per day.",categories:"airConditioners, HEATING & COOLING & AIR QUALITY,Home & Kitchen",price:398.51,discount:12);
# array_Whynter_12000.push({file:File.open('frontend/src/assets/products/airConditioner/Whynter_12000_1.jpg'),filename:'Whynter_12000_1.jpg'})
# array_Whynter_12000.push({file:File.open('frontend/src/assets/products/airConditioner/Whynter_12000_2.jpg'),filename:'Whynter_12000_2.jpg'})
# array_Whynter_12000.each do |img| 
#     product_Whynter_12000.photos.attach(io:img[:file],filename:img[:filename])
# end

# array_Frigidaire_FHPC082AC1 = []
# product_Frigidaire_FHPC082AC1 = Product.create!(product_name: "Frigidaire FHPC082AC1 Portable Room Air Conditioner, 5500 BTU with a Multi-Speed Fan, Dehumidifier Mode, Easy-to-Clean Washable Filter, in White",description:"The Frigidaire 8,000 BTU portable air conditioner keeps your home cool and comfortable when and where you need it. Remove excess moisture with Dehumidifying Dry Mode and capture dust from the air with an easy-to-clean washable filter. Enjoy maximum comfort and quiet operation throughout the evening hours with Sleep Mode. All with the ability to easily move from room to room using caster wheels.Stay comfortable with this small portable air conditioner. Designed to align with environmental standards and reduce energy consumption, this portable dehumidifier and air conditioner includes CFC-free R-32 refrigerant and lead-free RoHS-compliant components. This dual hose air conditioner features auto-drain technology that uses and recycles moisture collected during the cooling process to produce cool air with a dehumidifying capacity of 82 pints per day.",categories:"airConditioners, HEATING & COOLING & AIR QUALITY,Home & Kitchen",price:349.00,discount:49);
# array_Frigidaire_FHPC082AC1.push({file:File.open('frontend/src/assets/products/airConditioner/Frigidaire_FHPC082AC1_1.jpg'),filename:'Frigidaire_FHPC082AC1_1.jpg'})
# array_Frigidaire_FHPC082AC1.push({file:File.open('frontend/src/assets/products/airConditioner/Frigidaire_FHPC082AC1_2.jpg'),filename:'Frigidaire_FHPC082AC1_2.jpg'})
# array_Frigidaire_FHPC082AC1.each do |img| 
#     product_Frigidaire_FHPC082AC1.photos.attach(io:img[:file],filename:img[:filename])
# end

array_Frigidaire_FHWC054WB1 = []
product_Frigidaire_FHWC054WB1 = Product.create!(product_name: "Frigidaire FHWC054WB1 Window Air Conditioner, 5000 BTU Electronic Controls, White",description:"The Frigidaire 5,000 BTU window air conditioner keeps your room cool and comfortable with optimum circulation thanks to multi-directional airflow and three fan speeds. Easily install this air conditioner; this unit distributes the weight into two pieces using a slide-out chassis. Capture dust from the air and keep your air conditioner working efficiently with our easy-to-clean washable filter.",categories:"airConditioners, HEATING & COOLING & AIR QUALITY,Home & Kitchen",price:229.00,discount:35);
array_Frigidaire_FHWC054WB1.push({file:File.open('frontend/src/assets/products/airConditioner/Frigidaire_FHWC054WB1_1.jpg'),filename:'Frigidaire_FHWC054WB1_1.jpg'})
array_Frigidaire_FHWC054WB1.push({file:File.open('frontend/src/assets/products/airConditioner/Frigidaire_FHWC054WB1_2.jpg'),filename:'Frigidaire_FHWC054WB1_2.jpg'})
array_Frigidaire_FHWC054WB1.each do |img| 
    product_Frigidaire_FHWC054WB1.photos.attach(io:img[:file],filename:img[:filename])
end

# puts "Creating alexa............................................................."
# array_Echo_latest_release = []
# product_Echo_latest_release = Product.create!(product_name: "Echo (latest release) | Upgrade any room with premium rich, HD sound plus Alexa and smart home hub | Charcoal",description:"PREMIUM SOUND – Rich, detailed sound that automatically adapts to any room. Supports lossless HD audio available on select streaming services such as Amazon Music HD.VOICE CONTROL YOUR MUSIC – Stream songs from Amazon Music, Apple Music, Spotify, SiriusXM, and more. HD requires a compatible music streaming service.",categories:"alexa,Echo & Alexa, Amazon Devices",price:99.99,discount:35);
# array_Echo_latest_release.push({file:File.open('frontend/src/assets/products/alexa/Echo_latest_release_1.jpg'),filename:'Echo_latest_release_1.jpg'})
# array_Echo_latest_release.push({file:File.open('frontend/src/assets/products/alexa/Echo_latest_release_2.jpg'),filename:'Echo_latest_release_2.jpg'})
# array_Echo_latest_release.each do |img| 
#     product_Echo_latest_release.photos.attach(io:img[:file],filename:img[:filename])
# end

# puts "Creating games............................................................."
# array_Nintendo_Switch = []
# product_Nintendo_Switch = Product.create!(product_name: "Nintendo Switch – OLED Model w/ White Joy-Con",description:"Introducing the newest member of the Nintendo Switch family Play at home on the TV or on-the-go with a vibrant 7-inch OLED screen with the Nintendo Switch – OLED Model system. In addition to a new screen with vivid colors and sharp contrast, the Nintendo Switch – OLED Model includes a wide adjustable stand for more comfortable viewing angles, a dock with a wired LAN port for TV mode (LAN cable sold separately), 64GB of internal storage, and enhanced audio in Handheld and Tabletop modes using the system’s speakers.",categories:"videoGames,Nintendo Switch, Consoles",price:349.00,discount:0);
# array_Nintendo_Switch.push({file:File.open('frontend/src/assets/products/games/Nintendo_Switch_1.jpg'),filename:'Nintendo_Switch_1.jpg'})
# array_Nintendo_Switch.push({file:File.open('frontend/src/assets/products/games/Nintendo_Switch_2.jpg'),filename:'Nintendo_Switch_2.jpg'})
# array_Nintendo_Switch.each do |img| 
#     product_Nintendo_Switch.photos.attach(io:img[:file],filename:img[:filename])
# end

# puts "Creating kitchen............................................................."
# array_Krups_One_Touch = []
# product_Krups_One_Touch = Product.create!(product_name: "Krups One-Touch Coffee and Spice Grinder 12 Cup Easy to Use, One Touch Operation 200 Watts Coffee, Spices, Dry Herbs, Nuts Black",description:"KRUPS F203 Electric Spice and Coffee Grinder with Stainless Steel Blades, 3 Ounce, Black. Grind whole coffee beans quickly and efficiently with this powerful KRUPS coffee grinder. A nice alternative to pre ground coffee, brewing freshly ground beans promotes maximum rich aroma and delicious full bodied flavor for better tasting coffee. When making any type of coffee drink, from simple drip to espresso and cappuccino, grinding beans right before brewing is a must for any true coffee lover. And it’s easy with the KRUPS coffee grinder.",categories:"kitchen,Home & Kitchen, Kitchen & Dining",price:24.99,discount:12);
# array_Krups_One_Touch.push({file:File.open('frontend/src/assets/products/kitchen/Krups_One_Touch_1.jpg'),filename:'Krups_One_Touch_1.jpg'})
# array_Krups_One_Touch.push({file:File.open('frontend/src/assets/products/kitchen/Krups_One_Touch_2.jpg'),filename:'Krups_One_Touch_2.jpg'})
# array_Krups_One_Touch.each do |img| 
#     product_Krups_One_Touch.photos.attach(io:img[:file],filename:img[:filename])
# end

# puts "Creating cartItems..."
# cartItem1 = CartItem.create!(quantity:1,user_id:peter.id,product_id:product_Sony_WH_CH720N.id)
# cartItem2 = CartItem.create!(quantity:1,user_id:peter.id,product_id:product_JBL_Vibe_200TWS.id)

# puts "Creating ratings..."
# rating_product_1_user_1 = Rating.create!(product_id:product_Sony_WH_CH720N.id,reviewer_id:mike.id,overall_rating:3,review_headline:"Good vs bad",review:"Good pints
#     - sound quality
#     Bad points:
#     - i have connected it to my sony tv and have router also in same room .. so sometime voice drop while watching OTT platform… Don’t know technical reason behind it")
# rating_product_1_user_2 = Rating.create!(product_id:product_Sony_WH_CH720N.id,reviewer_id:peter.id,overall_rating:4,review_headline:"Amazing!",review:"Works really well for office calls too, the dual pairing is good as well.")   
# rating_product_2_user_1 = Rating.create!(product_id:product_JBL_Vibe_200TWS.id,reviewer_id:mike.id,overall_rating:3,review_headline:"Initial impressions",review:"Pros-
#     *The sound quality is great
#     Cons-
#     *The ear buds are not ready to remove from the moulded docking seat in the case. Not a huge deal but noticable every time.")


puts "Seeding complete!"
