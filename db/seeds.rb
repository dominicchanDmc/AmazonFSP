# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# puts "Destroying tables..."
# Rating.destroy_all
# CartItem.destroy_all
# Product.destroy_all
# User.destroy_all

# puts "Resetting primary keys..."
# ActiveRecord::Base.connection.reset_pk_sequence!('ratings')
# ActiveRecord::Base.connection.reset_pk_sequence!('cartItems')
# ActiveRecord::Base.connection.reset_pk_sequence!('products')
# ActiveRecord::Base.connection.reset_pk_sequence!('users')

# puts "Creating users..."
# mike = User.create!(username: 'mike', email: 'mike@google.com', password: '123456')
# peter = User.create!(username: 'peter', email: 'peter@google.com', password: '123456')
#  mary = User.create!(username: 'mary', email: 'mary@google.com', password: '123456')
#  may = User.create!(username: 'may', email: 'may@google.com', password: '123456')
john = User.create!(username: 'john', email: 'john@google.com', password: '123456')
george = User.create!(username: 'george', email: 'george@google.com', password: '123456')
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

# puts "Creating audio ratings..........................................."
# rating_product_1_user_1 = Rating.create!(product_id:product_Sony_WH_CH720N.id,reviewer_id:mike.id,overall_rating:3,review_headline:"Good vs bad",review:"Good pints
#     - sound quality
#     Bad points:
#     - i have connected it to my sony tv and have router also in same room .. so sometime voice drop while watching OTT platform… Don’t know technical reason behind it")
# rating_product_1_user_2 = Rating.create!(product_id:product_Sony_WH_CH720N.id,reviewer_id:peter.id,overall_rating:4,review_headline:"Amazing!",review:"Works really well for office calls too, the dual pairing is good as well.")   
# rating_product_2_user_1 = Rating.create!(product_id:product_JBL_Vibe_200TWS.id,reviewer_id:mike.id,overall_rating:3,review_headline:"Initial impressions",review:"Pros-
#     *The sound quality is great
#     Cons-
#     *The ear buds are not ready to remove from the moulded docking seat in the case. Not a huge deal but noticable every time.")
# rating_product_2_user_2 = Rating.create!(product_id:product_JBL_Vibe_200TWS.id,reviewer_id:peter.id,overall_rating:5,review_headline:"Good audio nearly no bass",review:"The normal audio is clear but the bass is almost non existent I had cheaper headphones with way more bass so deep bass is definitely false advertising")
# rating_product_3_user_1 = Rating.create!(product_id:product_Sony_SRS_XB13.id,reviewer_id:mike.id,overall_rating:4,review_headline:"Improvement for me",review:"My previous brand of Bluetooth speaker started to malfunction so I wanted a change with a better overall sound quality than what I was used to. This one was slightly more expensive than the others but still cheap enough to try with no hesitation.")   
# rating_product_3_user_2 = Rating.create!(product_id:product_Sony_SRS_XB13.id,reviewer_id:peter.id,overall_rating:5,review_headline:"Amazing!",review:"Works really well for office calls too, the dual pairing is good as well.")   
# rating_product_4_user_1 = Rating.create!(product_id:product_JBL_Flip_6.id,reviewer_id:mike.id,overall_rating:4,review_headline:"good sounding small speaker",review:"Currently have the JBL CLIP 3 and was needing another portable bluetooth speaker. Bought this Sony speaker because it was on sale. ")   
# rating_product_4_user_2 = Rating.create!(product_id:product_JBL_Flip_6.id,reviewer_id:peter.id,overall_rating:5,review_headline:"Best sound",review:"I tried four different speakers and this one is by far the best. Two sounded rather tinny and one sounded great. Until I tested it against this one")   
# rating_product_5_user_1 = Rating.create!(product_id:product_Jabra_Elite_7_Pro.id,reviewer_id:mike.id,overall_rating:4,review_headline:"good sounding small speaker",review:"Currently have the JBL CLIP 3 and was needing another portable bluetooth speaker. Bought this Sony speaker because it was on sale. ")   
# rating_product_5_user_2 = Rating.create!(product_id:product_Jabra_Elite_7_Pro.id,reviewer_id:peter.id,overall_rating:5,review_headline:"Excellent speaker!",review:"The sound of speaking is very clear with this speaker. I also like the compact size! I’m an English language teacher")   


# puts "Creating airConditioners................................................."
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

# array_Frigidaire_FHWC054WB1 = []
# product_Frigidaire_FHWC054WB1 = Product.create!(product_name: "Frigidaire FHWC054WB1 Window Air Conditioner, 5000 BTU Electronic Controls, White",description:"The Frigidaire 5,000 BTU window air conditioner keeps your room cool and comfortable with optimum circulation thanks to multi-directional airflow and three fan speeds. Easily install this air conditioner; this unit distributes the weight into two pieces using a slide-out chassis. Capture dust from the air and keep your air conditioner working efficiently with our easy-to-clean washable filter.",categories:"airConditioners, HEATING & COOLING & AIR QUALITY,Home & Kitchen",price:229.00,discount:35);
# array_Frigidaire_FHWC054WB1.push({file:File.open('frontend/src/assets/products/airConditioner/Frigidaire_FHWC054WB1_1.jpg'),filename:'Frigidaire_FHWC054WB1_1.jpg'})
# array_Frigidaire_FHWC054WB1.push({file:File.open('frontend/src/assets/products/airConditioner/Frigidaire_FHWC054WB1_2.jpg'),filename:'Frigidaire_FHWC054WB1_2.jpg'})
# array_Frigidaire_FHWC054WB1.each do |img| 
#     product_Frigidaire_FHWC054WB1.photos.attach(io:img[:file],filename:img[:filename])
# end

# puts "Creating airConditioners ratings..........................................."
# rating_airConditioners_1_user_1 = Rating.create!(product_id:product_BLACK_DECKER_8000_BTU.id,reviewer_id:mary.id,overall_rating:3,review_headline:"Set it and forget it type of unit, rather cool",review:"To start things off, I'm not usually a real big B+D fan. ")
# rating_airConditioners_1_user_2 = Rating.create!(product_id:product_BLACK_DECKER_8000_BTU.id,reviewer_id:may.id,overall_rating:4,review_headline:"Needs room for install!",review:"You'll need a few sqft for this to live by the window but it's a great product.")   
# rating_airConditioners_2_user_1 = Rating.create!(product_id:product_Frigidaire_FHWC124WB1.id,reviewer_id:mary.id,overall_rating:5,review_headline:"So far, so great!, rather cool",review:"DISCLAIMER: I write all of this with the caveat that we live at 7,000 feet in elevation where there's low humidity, and it barely ekes into the 90s every now and then...")
# rating_airConditioners_2_user_2 = Rating.create!(product_id:product_Frigidaire_FHWC124WB1.id,reviewer_id:may.id,overall_rating:3,review_headline:"Needs room for install!",review:"You'll need a few sqft for this to live by the window but it's a great product.")   
# rating_airConditioners_3_user_1 = Rating.create!(product_id:product_Whynter_12000.id,reviewer_id:mary.id,overall_rating:5,review_headline:"Set it and forget it type of unit, rather cool",review:"To start things off, I'm not usually a real big B+D fan. ")
# rating_airConditioners_3_user_2 = Rating.create!(product_id:product_Whynter_12000.id,reviewer_id:may.id,overall_rating:3,review_headline:"So far, so great!",review:"I'll start this review stating, if you CAN get an in-window or two part AC unit, get it. They are FAR better than ANY portable AC unit. A lot of bad reviews here are because people didn't understand portable AC's CANNOT compete with wall or window mount units for cooling efficiency. I'll explain why at the end.")   
# rating_airConditioners_4_user_1 = Rating.create!(product_id:product_Frigidaire_FHPC082AC1.id,reviewer_id:mary.id,overall_rating:1,review_headline:"Good, but know what you are buying.",review:"To start things off, I'm not usually a real big B+D fan. ")
# rating_airConditioners_4_user_2 = Rating.create!(product_id:product_Frigidaire_FHPC082AC1.id,reviewer_id:may.id,overall_rating:3,review_headline:"So far, so great!",review:"DISCLAIMER: I write all of this with the caveat that we live at 7,000 feet in elevation where there's low humidity, and it barely ekes into the 90s every now and then...")   
# rating_airConditioners_5_user_1 = Rating.create!(product_id:product_Frigidaire_FHWC054WB1.id,reviewer_id:mary.id,overall_rating:3,review_headline:"Set it and forget it type of unit, rather cool",review:"To start things off, I'm not usually a real big B+D fan. ")
# rating_airConditioners_5_user_2 = Rating.create!(product_id:product_Frigidaire_FHWC054WB1.id,reviewer_id:may.id,overall_rating:3,review_headline:"So far, so great!",review:"I'll start this review stating, if you CAN get an in-window or two part AC unit, get it. They are FAR better than ANY portable AC unit. A lot of bad reviews here are because people didn't understand portable AC's CANNOT compete with wall or window mount units for cooling efficiency. I'll explain why at the end.")   

puts "Creating alexa............................................................."
array_Echo_latest_release = []
product_Echo_latest_release = Product.create!(product_name: "Echo (latest release) | Upgrade any room with premium rich, HD sound plus Alexa and smart home hub | Charcoal",description:"PREMIUM SOUND – Rich, detailed sound that automatically adapts to any room. Supports lossless HD audio available on select streaming services such as Amazon Music HD.VOICE CONTROL YOUR MUSIC – Stream songs from Amazon Music, Apple Music, Spotify, SiriusXM, and more. HD requires a compatible music streaming service.",categories:"alexa,Echo & Alexa, Amazon Devices",price:99.99,discount:35);
array_Echo_latest_release.push({file:File.open('frontend/src/assets/products/alexa/Echo_latest_release_1.jpg'),filename:'Echo_latest_release_1.jpg'})
array_Echo_latest_release.push({file:File.open('frontend/src/assets/products/alexa/Echo_latest_release_2.jpg'),filename:'Echo_latest_release_2.jpg'})
array_Echo_latest_release.each do |img| 
    product_Echo_latest_release.photos.attach(io:img[:file],filename:img[:filename])
end
array_Bose_Portable_Smart_Speaker = []
product_Bose_Portable_Smart_Speaker = Product.create!(product_name: "Bose Portable Smart Speaker — Wireless Bluetooth Speaker with Alexa Voice Control Built-In, Black",description:"The Bose portable smart speaker is our most versatile smart speaker. It’s a home speaker, a portable speaker, and a voice control speaker, all in one. Around the house, you can move it from room to room and out of the house, You can take it with you wherever you go.",categories:"alexa,Echo & Alexa, Amazon Devices",price:399.00,discount:13)
array_Bose_Portable_Smart_Speaker.push({file:File.open('frontend/src/assets/products/alexa/Bose_Portable_Smart_Speaker_1.jpg'),filename:'Bose_Portable_Smart_Speaker_1.jpg'})
array_Bose_Portable_Smart_Speaker.push({file:File.open('frontend/src/assets/products/alexa/Bose_Portable_Smart_Speaker_2.jpg'),filename:'Bose_Portable_Smart_Speaker_2.jpg'})
array_Bose_Portable_Smart_Speaker.each do |img| 
    product_Bose_Portable_Smart_Speaker.photos.attach(io:img[:file],filename:img[:filename])
end
array_LG_50_Inch_Class_UQ9000 = []
product_LG_50_Inch_Class_UQ9000 = Product.create!(product_name: "LG 50-Inch Class UQ9000 Series Alexa Built-in 4K Smart TV (3840 x 2160), 60Hz Refresh Rate, AI-Powered, Cloud Gaming (50UQ9000PUD, 2022)",description:"STREAM IT LIKE YOU MEAN IT Everything you need to bring your favorite content to life with the power of 4K and the extras you crave.",categories:"alexa,Echo & Alexa, Amazon Devices",price:529.99,discount:19);
array_LG_50_Inch_Class_UQ9000.push({file:File.open('frontend/src/assets/products/alexa/LG_50_Inch_Class_UQ9000_1.jpg'),filename:'LG_50_Inch_Class_UQ9000_1.jpg'})
array_LG_50_Inch_Class_UQ9000.push({file:File.open('frontend/src/assets/products/alexa/LG_50_Inch_Class_UQ9000_2.jpg'),filename:'LG_50_Inch_Class_UQ9000_2.jpg'})
array_LG_50_Inch_Class_UQ9000.each do |img| 
    product_LG_50_Inch_Class_UQ9000.photos.attach(io:img[:file],filename:img[:filename])
end

array_Fitbit_Sense_2_Advanced_Health = []
product_Fitbit_Sense_2_Advanced_Health = Product.create!(product_name: "Fitbit Sense 2 Advanced Health and Fitness Smartwatch with Tools to Manage Stress and Sleep, ECG App, SpO2, 24/7 Heart Rate and GPS, Shadow Grey/Graphite, One Size (S & L Bands Included)",description:"Meet Sense 2—the smartwatch designed to help you stress less, sleep better & live healthier. Fitbit is part of the Google family.",categories:"alexa,Echo & Alexa, Amazon Devices",price:299.95,discount:24);
array_Fitbit_Sense_2_Advanced_Health.push({file:File.open('frontend/src/assets/products/alexa/Fitbit_Sense_2_Advanced_Health_1.jpg'),filename:'Fitbit_Sense_2_Advanced_Health_1.jpg'})
array_Fitbit_Sense_2_Advanced_Health.push({file:File.open('frontend/src/assets/products/alexa/Fitbit_Sense_2_Advanced_Health_2.jpg'),filename:'Fitbit_Sense_2_Advanced_Health_2.jpg'})
array_Fitbit_Sense_2_Advanced_Health.each do |img| 
    product_Fitbit_Sense_2_Advanced_Health.photos.attach(io:img[:file],filename:img[:filename])
end

array_Sonos_Roam = []
product_Sonos_Roam = Product.create!(product_name: "Sonos Roam, The Portable Smart Speaker for All Your Listening Adventures (Black)",description:"Stream music and more over WiFi, and enjoy easy control with the Sonos app, Apple AirPlay 2, Amazon Alexa",categories:"alexa,Echo & Alexa, Amazon Devices",price:179.00,discount:0);
array_Sonos_Roam.push({file:File.open('frontend/src/assets/products/alexa/Sonos_Roam_1.jpg'),filename:'Sonos_Roam_1.jpg'})
array_Sonos_Roam.push({file:File.open('frontend/src/assets/products/alexa/Sonos_Roam_2.jpg'),filename:'Sonos_Roam_2.jpg'})
array_Sonos_Roam.each do |img| 
    product_Sonos_Roam.photos.attach(io:img[:file],filename:img[:filename])
end

puts "Creating alexa ratings..........................................."
rating_alexa_1_user_1 = Rating.create!(product_id:product_Echo_latest_release.id,reviewer_id:john.id,overall_rating:5,review_headline:"Worth every money",review:"The picture is great and I love the remote.")
rating_alexa_1_user_2 = Rating.create!(product_id:product_Echo_latest_release.id,reviewer_id:george.id,overall_rating:4,review_headline:"Its powerful",review:"Has amazing sound for the size.")   
rating_alexa_2_user_1 = Rating.create!(product_id:product_Bose_Portable_Smart_Speaker.id,reviewer_id:john.id,overall_rating:5,review_headline:"Excellent Speaker For Size!",review:"I currently own a variety of portable speakers, hard wired speakers and a home theater system.")
rating_alexa_2_user_2 = Rating.create!(product_id:product_Bose_Portable_Smart_Speaker.id,reviewer_id:george.id,overall_rating:3,review_headline:"Worth every money",review:"The picture is great and I love the remote.")   
rating_alexa_3_user_1 = Rating.create!(product_id:product_LG_50_Inch_Class_UQ9000.id,reviewer_id:john.id,overall_rating:2,review_headline:"Ok TV. Would not buy again though",review:"Review after using it for 5 months.- remote is too sensitive- TV is very slow. ")
rating_alexa_3_user_2 = Rating.create!(product_id:product_LG_50_Inch_Class_UQ9000.id,reviewer_id:george.id,overall_rating:3,review_headline:"Great TV",review:"Worth every money, deep soothing lows, table rumbling bass. Keep inside any wooden cabinet and see sounds coming to life.")   
rating_alexa_4_user_1 = Rating.create!(product_id:product_Fitbit_Sense_2_Advanced_Health.id,reviewer_id:john.id,overall_rating:1,review_headline:"Excellent Speaker For Size!",review:"Review after using it for 5 months.- remote is too sensitive- TV is very slow. ")
rating_alexa_4_user_2 = Rating.create!(product_id:product_Fitbit_Sense_2_Advanced_Health.id,reviewer_id:george.id,overall_rating:3,review_headline:"Amazing Picture Quality At A Great Price",review:"I wanted to upgrade my old television to a flat screen with 4K capability, as I am an avid gamer and wanted to experience my PS5 the way it was intended.")   
rating_alexa_5_user_1 = Rating.create!(product_id:product_Sonos_Roam.id,reviewer_id:john.id,overall_rating:3,review_headline:"Ok TV. Would not buy again though",review:"I currently own a variety of portable speakers, hard wired speakers and a home theater system.")
rating_alexa_5_user_2 = Rating.create!(product_id:product_Sonos_Roam.id,reviewer_id:george.id,overall_rating:4,review_headline:"Great TV",review:"The picture is great and I love the remote.")   

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


puts "Seeding complete!"
