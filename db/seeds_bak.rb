# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Destroying tables..."
# Rating.destroy_all
# CartItem.destroy_all
Product.destroy_all
User.destroy_all

puts "Resetting primary keys..."
# ActiveRecord::Base.connection.reset_pk_sequence!('ratings')
# ActiveRecord::Base.connection.reset_pk_sequence!('cartItems')
ActiveRecord::Base.connection.reset_pk_sequence!('products')
ActiveRecord::Base.connection.reset_pk_sequence!('users')

puts "Creating users..."
# mike_1 = User.create!(username: 'mike_1', email: 'mike_1@google.com', password: '123456')
# peter = User.create!(username: 'peter', email: 'peter@google.com', password: '123456')
 mary = User.create!(username: 'mary', email: 'mary@google.com', password: '123456')
 may = User.create!(username: 'may', email: 'may@google.com', password: '123456')
# rosalina = User.create!(username: 'rosalina', email: 'rosalina@google.com', password: '123456')
# yoshi = User.create!(username: 'yoshi', email: 'yoshi@google.com', password: '123456')
# daisy = User.create!(username: 'daisy', email: 'daisy@google.com', password: '123456')
# koba = User.create!(username: 'koba', email: 'koba@google.com', password: '123456')
# mario = User.create!(username: 'mario', email: 'mario@google.com', password: '123456')
# luigi = User.create!(username: 'luigi', email: 'luigi@google.com', password: '123456')


puts "Creating products..."
puts "Creating audio...................................................."
product_Sony_WH_CH720N = Product.create!(product_name: "Sony WH-CH720N Noise Canceling Wireless Headphones Bluetooth Over The Ear Headset with Microphone and Alexa Built-in, Black New",description:"Turn down the world's noise with the long-lasting noise cancellation performance. Featuring Dual Noise Sensor technology and an Integrated Processor V1, the WH-CH720N allows you to fully immerse yourself in music without any distractions. Ergonomically designed to be lightweight, comfortable, and with up to 35 hours of battery life, you’ll almost forget you’re wearing it.",categories:"electronic, audio,Headphones & earbuds",price:149.99,discount:0);
product_Sony_WH_CH720N_1 = File.open('frontend/src/assets/products/audio/Sony_WH_CH720N_1.jpg')
product_Sony_WH_CH720N_2 = File.open('frontend/src/assets/products/audio/Sony_WH_CH720N_2.jpg')
product_Sony_WH_CH720N.photos.attach(io: product_Sony_WH_CH720N_1, filename: 'Sony_WH_CH720N_1.jpg')
product_Sony_WH_CH720N.photos.attach(io: product_Sony_WH_CH720N_2, filename: 'Sony_WH_CH720N_2.jpg')

product_JBL_Vibe_200TWS = Product.create!(product_name: "JBL Vibe 200TWS True Wireless Earbuds - Black, Small",description:"Amp up your routine with the sound you love! Get powerful, JBL Deep Bass Sound and all the freedom of true wireless for up to 20 hours with the JBL Vibe 200TWS. Stay in touch with your friends hands-free with a simple touch and in full comfort.",categories:"electronic,audio,Headphones & earbuds",price:49.95,discount:40);
product_JBL_Vibe_200TWS_1 = File.open('frontend/src/assets/products/audio/JBL_Vibe_200TWS_1.jpg')
product_JBL_Vibe_200TWS_2 = File.open('frontend/src/assets/products/audio/JBL_Vibe_200TWS_2.jpg')
product_JBL_Vibe_200TWS.photos.attach(io: product_JBL_Vibe_200TWS_1, filename: 'JBL_Vibe_200TWS_1.jpg')
product_JBL_Vibe_200TWS.photos.attach(io: product_JBL_Vibe_200TWS_2, filename: 'JBL_Vibe_200TWS_2.jpg')

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

puts "Creating audio ratings..........................................."
rating_product_1_user_1 = Rating.create!(product_id:product_Sony_WH_CH720N.id,reviewer_id:mike_1.id,overall_rating:3,review_headline:"Good vs bad",review:"Good pints
    - sound quality
    Bad points:
    - i have connected it to my sony tv and have router also in same room .. so sometime voice drop while watching OTT platform… Don’t know technical reason behind it")
rating_product_1_user_2 = Rating.create!(product_id:product_Sony_WH_CH720N.id,reviewer_id:peter.id,overall_rating:4,review_headline:"Amazing!",review:"Works really well for office calls too, the dual pairing is good as well.")   
rating_product_2_user_1 = Rating.create!(product_id:product_JBL_Vibe_200TWS.id,reviewer_id:mike_1.id,overall_rating:3,review_headline:"Initial impressions",review:"Pros-
    *The sound quality is great
    Cons-
    *The ear buds are not ready to remove from the moulded docking seat in the case. Not a huge deal but noticable every time.")
rating_product_2_user_2 = Rating.create!(product_id:product_JBL_Vibe_200TWS.id,reviewer_id:peter.id,overall_rating:5,review_headline:"Good audio nearly no bass",review:"The normal audio is clear but the bass is almost non existent I had cheaper headphones with way more bass so deep bass is definitely false advertising")
rating_product_3_user_1 = Rating.create!(product_id:product_Sony_SRS_XB13.id,reviewer_id:mike_1.id,overall_rating:4,review_headline:"Improvement for me",review:"My previous brand of Bluetooth speaker started to malfunction so I wanted a change with a better overall sound quality than what I was used to. This one was slightly more expensive than the others but still cheap enough to try with no hesitation.")   
rating_product_3_user_2 = Rating.create!(product_id:product_Sony_SRS_XB13.id,reviewer_id:peter.id,overall_rating:5,review_headline:"Amazing!",review:"Works really well for office calls too, the dual pairing is good as well.")   
rating_product_4_user_1 = Rating.create!(product_id:product_JBL_Flip_6.id,reviewer_id:mike_1.id,overall_rating:4,review_headline:"good sounding small speaker",review:"Currently have the JBL CLIP 3 and was needing another portable bluetooth speaker. Bought this Sony speaker because it was on sale. ")   
rating_product_4_user_2 = Rating.create!(product_id:product_JBL_Flip_6.id,reviewer_id:peter.id,overall_rating:5,review_headline:"Best sound",review:"I tried four different speakers and this one is by far the best. Two sounded rather tinny and one sounded great. Until I tested it against this one")   
rating_product_5_user_1 = Rating.create!(product_id:product_Jabra_Elite_7_Pro.id,reviewer_id:mike_1.id,overall_rating:4,review_headline:"good sounding small speaker",review:"Currently have the JBL CLIP 3 and was needing another portable bluetooth speaker. Bought this Sony speaker because it was on sale. ")   
rating_product_5_user_2 = Rating.create!(product_id:product_Jabra_Elite_7_Pro.id,reviewer_id:peter.id,overall_rating:5,review_headline:"Excellent speaker!",review:"The sound of speaking is very clear with this speaker. I also like the compact size! I’m an English language teacher")   


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

puts "Creating airConditioners ratings..........................................."
rating_airConditioners_1_user_1 = Rating.create!(product_id:product_BLACK_DECKER_8000_BTU.id,reviewer_id:mary.id,overall_rating:3,review_headline:"Set it and forget it type of unit, rather cool",review:"To start things off, I'm not usually a real big B+D fan. ")
rating_airConditioners_1_user_2 = Rating.create!(product_id:product_BLACK_DECKER_8000_BTU.id,reviewer_id:may.id,overall_rating:4,review_headline:"Needs room for install!",review:"You'll need a few sqft for this to live by the window but it's a great product.")   
rating_airConditioners_2_user_1 = Rating.create!(product_id:product_Frigidaire_FHWC124WB1.id,reviewer_id:mary.id,overall_rating:5,review_headline:"So far, so great!, rather cool",review:"DISCLAIMER: I write all of this with the caveat that we live at 7,000 feet in elevation where there's low humidity, and it barely ekes into the 90s every now and then...")
rating_airConditioners_2_user_2 = Rating.create!(product_id:product_Frigidaire_FHWC124WB1.id,reviewer_id:may.id,overall_rating:3,review_headline:"Needs room for install!",review:"You'll need a few sqft for this to live by the window but it's a great product.")   
rating_airConditioners_3_user_1 = Rating.create!(product_id:product_Whynter_12000.id,reviewer_id:mary.id,overall_rating:5,review_headline:"Set it and forget it type of unit, rather cool",review:"To start things off, I'm not usually a real big B+D fan. ")
rating_airConditioners_3_user_2 = Rating.create!(product_id:product_Whynter_12000.id,reviewer_id:may.id,overall_rating:3,review_headline:"So far, so great!",review:"I'll start this review stating, if you CAN get an in-window or two part AC unit, get it. They are FAR better than ANY portable AC unit. A lot of bad reviews here are because people didn't understand portable AC's CANNOT compete with wall or window mount units for cooling efficiency. I'll explain why at the end.")   
rating_airConditioners_4_user_1 = Rating.create!(product_id:product_Frigidaire_FHPC082AC1.id,reviewer_id:mary.id,overall_rating:1,review_headline:"Good, but know what you are buying.",review:"To start things off, I'm not usually a real big B+D fan. ")
rating_airConditioners_4_user_2 = Rating.create!(product_id:product_Frigidaire_FHPC082AC1.id,reviewer_id:may.id,overall_rating:3,review_headline:"So far, so great!",review:"DISCLAIMER: I write all of this with the caveat that we live at 7,000 feet in elevation where there's low humidity, and it barely ekes into the 90s every now and then...")   
rating_airConditioners_5_user_1 = Rating.create!(product_id:product_Frigidaire_FHWC054WB1.id,reviewer_id:mary.id,overall_rating:3,review_headline:"Set it and forget it type of unit, rather cool",review:"To start things off, I'm not usually a real big B+D fan. ")
rating_airConditioners_5_user_2 = Rating.create!(product_id:product_Frigidaire_FHWC054WB1.id,reviewer_id:may.id,overall_rating:3,review_headline:"So far, so great!",review:"I'll start this review stating, if you CAN get an in-window or two part AC unit, get it. They are FAR better than ANY portable AC unit. A lot of bad reviews here are because people didn't understand portable AC's CANNOT compete with wall or window mount units for cooling efficiency. I'll explain why at the end.")   
 
# puts "Creating alexa............................................................."
# array_Echo_latest_release = []
# product_Echo_latest_release = Product.create!(product_name: "Echo (latest release) | Upgrade any room with premium rich, HD sound plus Alexa and smart home hub | Charcoal",description:"PREMIUM SOUND – Rich, detailed sound that automatically adapts to any room. Supports lossless HD audio available on select streaming services such as Amazon Music HD.VOICE CONTROL YOUR MUSIC – Stream songs from Amazon Music, Apple Music, Spotify, SiriusXM, and more. HD requires a compatible music streaming service.",categories:"alexa,Echo & Alexa, Amazon Devices",price:99.99,discount:35);
# array_Echo_latest_release.push({file:File.open('frontend/src/assets/products/alexa/Echo_latest_release_1.jpg'),filename:'Echo_latest_release_1.jpg'})
# array_Echo_latest_release.push({file:File.open('frontend/src/assets/products/alexa/Echo_latest_release_2.jpg'),filename:'Echo_latest_release_2.jpg'})
# array_Echo_latest_release.each do |img| 
#     product_Echo_latest_release.photos.attach(io:img[:file],filename:img[:filename])
# end
# array_Bose_Portable_Smart_Speaker = []
# product_Bose_Portable_Smart_Speaker = Product.create!(product_name: "Bose Portable Smart Speaker — Wireless Bluetooth Speaker with Alexa Voice Control Built-In, Black",description:"The Bose portable smart speaker is our most versatile smart speaker. It’s a home speaker, a portable speaker, and a voice control speaker, all in one. Around the house, you can move it from room to room and out of the house, You can take it with you wherever you go.",categories:"alexa,Echo & Alexa, Amazon Devices",price:399.00,discount:13)
# array_Bose_Portable_Smart_Speaker.push({file:File.open('frontend/src/assets/products/alexa/Bose_Portable_Smart_Speaker_1.jpg'),filename:'Bose_Portable_Smart_Speaker_1.jpg'})
# array_Bose_Portable_Smart_Speaker.push({file:File.open('frontend/src/assets/products/alexa/Bose_Portable_Smart_Speaker_2.jpg'),filename:'Bose_Portable_Smart_Speaker_2.jpg'})
# array_Bose_Portable_Smart_Speaker.each do |img| 
#     product_Bose_Portable_Smart_Speaker.photos.attach(io:img[:file],filename:img[:filename])
# end
# array_LG_50_Inch_Class_UQ9000 = []
# product_LG_50_Inch_Class_UQ9000 = Product.create!(product_name: "LG 50-Inch Class UQ9000 Series Alexa Built-in 4K Smart TV (3840 x 2160), 60Hz Refresh Rate, AI-Powered, Cloud Gaming (50UQ9000PUD, 2022)",description:"STREAM IT LIKE YOU MEAN IT Everything you need to bring your favorite content to life with the power of 4K and the extras you crave.",categories:"alexa,Echo & Alexa, Amazon Devices",price:529.99,discount:19);
# array_LG_50_Inch_Class_UQ9000.push({file:File.open('frontend/src/assets/products/alexa/LG_50_Inch_Class_UQ9000_1.jpg'),filename:'LG_50_Inch_Class_UQ9000_1.jpg'})
# array_LG_50_Inch_Class_UQ9000.push({file:File.open('frontend/src/assets/products/alexa/LG_50_Inch_Class_UQ9000_2.jpg'),filename:'LG_50_Inch_Class_UQ9000_2.jpg'})
# array_LG_50_Inch_Class_UQ9000.each do |img| 
#     product_LG_50_Inch_Class_UQ9000.photos.attach(io:img[:file],filename:img[:filename])
# end

# array_Fitbit_Sense_2_Advanced_Health = []
# product_Fitbit_Sense_2_Advanced_Health = Product.create!(product_name: "Fitbit Sense 2 Advanced Health and Fitness Smartwatch with Tools to Manage Stress and Sleep, ECG App, SpO2, 24/7 Heart Rate and GPS, Shadow Grey/Graphite, One Size (S & L Bands Included)",description:"Meet Sense 2—the smartwatch designed to help you stress less, sleep better & live healthier. Fitbit is part of the Google family.",categories:"alexa,Echo & Alexa, Amazon Devices",price:299.95,discount:24);
# array_Fitbit_Sense_2_Advanced_Health.push({file:File.open('frontend/src/assets/products/alexa/Fitbit_Sense_2_Advanced_Health_1.jpg'),filename:'Fitbit_Sense_2_Advanced_Health_1.jpg'})
# array_Fitbit_Sense_2_Advanced_Health.push({file:File.open('frontend/src/assets/products/alexa/Fitbit_Sense_2_Advanced_Health_2.jpg'),filename:'Fitbit_Sense_2_Advanced_Health_2.jpg'})
# array_Fitbit_Sense_2_Advanced_Health.each do |img| 
#     product_Fitbit_Sense_2_Advanced_Health.photos.attach(io:img[:file],filename:img[:filename])
# end

# array_Sonos_Roam = []
# product_Sonos_Roam = Product.create!(product_name: "Sonos Roam, The Portable Smart Speaker for All Your Listening Adventures (Black)",description:"Stream music and more over WiFi, and enjoy easy control with the Sonos app, Apple AirPlay 2, Amazon Alexa",categories:"alexa,Echo & Alexa, Amazon Devices",price:179.00,discount:0);
# array_Sonos_Roam.push({file:File.open('frontend/src/assets/products/alexa/Sonos_Roam_1.jpg'),filename:'Sonos_Roam_1.jpg'})
# array_Sonos_Roam.push({file:File.open('frontend/src/assets/products/alexa/Sonos_Roam_2.jpg'),filename:'Sonos_Roam_2.jpg'})
# array_Sonos_Roam.each do |img| 
#     product_Sonos_Roam.photos.attach(io:img[:file],filename:img[:filename])
# end

# puts "Creating alexa ratings..........................................."
# rating_alexa_1_user_1 = Rating.create!(product_id:product_Echo_latest_release.id,reviewer_id:rosalina.id,overall_rating:5,review_headline:"Worth every money",review:"The picture is great and I love the remote.")
# rating_alexa_1_user_2 = Rating.create!(product_id:product_Echo_latest_release.id,reviewer_id:yoshi.id,overall_rating:4,review_headline:"Its powerful",review:"Has amazing sound for the size.")   
# rating_alexa_2_user_1 = Rating.create!(product_id:product_Bose_Portable_Smart_Speaker.id,reviewer_id:rosalina.id,overall_rating:5,review_headline:"Excellent Speaker For Size!",review:"I currently own a variety of portable speakers, hard wired speakers and a home theater system.")
# rating_alexa_2_user_2 = Rating.create!(product_id:product_Bose_Portable_Smart_Speaker.id,reviewer_id:yoshi.id,overall_rating:3,review_headline:"Worth every money",review:"The picture is great and I love the remote.")   
# rating_alexa_3_user_1 = Rating.create!(product_id:product_LG_50_Inch_Class_UQ9000.id,reviewer_id:rosalina.id,overall_rating:2,review_headline:"Ok TV. Would not buy again though",review:"Review after using it for 5 months.- remote is too sensitive- TV is very slow. ")
# rating_alexa_3_user_2 = Rating.create!(product_id:product_LG_50_Inch_Class_UQ9000.id,reviewer_id:yoshi.id,overall_rating:3,review_headline:"Great TV",review:"Worth every money, deep soothing lows, table rumbling bass. Keep inside any wooden cabinet and see sounds coming to life.")   
# rating_alexa_4_user_1 = Rating.create!(product_id:product_Fitbit_Sense_2_Advanced_Health.id,reviewer_id:rosalina.id,overall_rating:1,review_headline:"Excellent Speaker For Size!",review:"Review after using it for 5 months.- remote is too sensitive- TV is very slow. ")
# rating_alexa_4_user_2 = Rating.create!(product_id:product_Fitbit_Sense_2_Advanced_Health.id,reviewer_id:yoshi.id,overall_rating:3,review_headline:"Amazing Picture Quality At A Great Price",review:"I wanted to upgrade my old television to a flat screen with 4K capability, as I am an avid gamer and wanted to experience my PS5 the way it was intended.")   
# rating_alexa_5_user_1 = Rating.create!(product_id:product_Sonos_Roam.id,reviewer_id:rosalina.id,overall_rating:3,review_headline:"Ok TV. Would not buy again though",review:"I currently own a variety of portable speakers, hard wired speakers and a home theater system.")
# rating_alexa_5_user_2 = Rating.create!(product_id:product_Sonos_Roam.id,reviewer_id:yoshi.id,overall_rating:4,review_headline:"Great TV",review:"The picture is great and I love the remote.")   

# puts "Creating games............................................................."
# array_Nintendo_Switch = []
# product_Nintendo_Switch = Product.create!(product_name: "Nintendo Switch – OLED Model w/ White Joy-Con",description:"Introducing the newest member of the Nintendo Switch family Play at home on the TV or on-the-go with a vibrant 7-inch OLED screen with the Nintendo Switch – OLED Model system. In addition to a new screen with vivid colors and sharp contrast, the Nintendo Switch – OLED Model includes a wide adjustable stand for more comfortable viewing angles, a dock with a wired LAN port for TV mode (LAN cable sold separately), 64GB of internal storage, and enhanced audio in Handheld and Tabletop modes using the system’s speakers.",categories:"videoGames,Nintendo Switch, Consoles",price:349.00,discount:0);
# array_Nintendo_Switch.push({file:File.open('frontend/src/assets/products/games/Nintendo_Switch_1.jpg'),filename:'Nintendo_Switch_1.jpg'})
# array_Nintendo_Switch.push({file:File.open('frontend/src/assets/products/games/Nintendo_Switch_2.jpg'),filename:'Nintendo_Switch_2.jpg'})
# array_Nintendo_Switch.each do |img| 
#     product_Nintendo_Switch.photos.attach(io:img[:file],filename:img[:filename])
# end
# array_PS5 = []
# product_PS5 = Product.create!(product_name: "PlayStation 5 Console (PS5)",description:"The PS5 console unleashes new gaming possibilities that you never anticipated. Experience lightning fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio, and an all-new generation of incredible PlayStation games.",categories:"videoGames,PlayStation 5, Consoles",price:499.00,discount:0);
# array_PS5.push({file:File.open('frontend/src/assets/products/games/PS5_1.jpg'),filename:'PS5_1.jpg'})
# array_PS5.push({file:File.open('frontend/src/assets/products/games/PS5_2.jpg'),filename:'PS5_2.jpg'})
# array_PS5.each do |img| 
#     product_PS5.photos.attach(io:img[:file],filename:img[:filename])
# end
# array_FIFA_23_Standard_Edition = []
# product_FIFA_23_Standard_Edition = Product.create!(product_name: "FIFA 23 Standard Edition Playstation 5 (FIFA_23_Standard_Edition)| English | Import Region Free",description:"IFA 23 Standard Edition Playstation 5 (FIFA_23_Standard_Edition)| English | Import Region Free EA SPORTS FIFA 23 brings even more of the action and realism of football to the pitch in The World’s Game HyperMotion2 Technology creates more true football animation than ever before in every match",categories:"videoGames,PlayStation 5, Games",price:44.49,discount:11);
# array_FIFA_23_Standard_Edition.push({file:File.open('frontend/src/assets/products/games/FIFA_23_Standard_Edition_1.jpg'),filename:'FIFA_23_Standard_Edition_1.jpg'})
# array_FIFA_23_Standard_Edition.push({file:File.open('frontend/src/assets/products/games/FIFA_23_Standard_Edition_2.jpg'),filename:'FIFA_23_Standard_Edition_2.jpg'})
# array_FIFA_23_Standard_Edition.each do |img| 
#     product_FIFA_23_Standard_Edition.photos.attach(io:img[:file],filename:img[:filename])
# end

# array_product_Splatoon_3_US_Version = []
# product_Splatoon_3_US_Version = Product.create!(product_name: "Splatoon 3 - US Version",description:"Winner - Best Multiplayer - The Game Awards 2022 Enter 4-on-4* ink-slinging battles in this colorful action shooter packed with style and attitude. As a squid-like Inkling, quickly cover your surroundings (and opponents) in ink with wild weaponry and swim through your own color to sneak and splat. Dive into the fresh fun with family and friends and make waves as a team.",categories:"videoGames,Nintendo Switch, Games",price:47.50,discount:0);
# array_product_Splatoon_3_US_Version.push({file:File.open('frontend/src/assets/products/games/Splatoon_3_US_Version_1.jpg'),filename:'Splatoon_3_US_Version_1.jpg'})
# array_product_Splatoon_3_US_Version.push({file:File.open('frontend/src/assets/products/games/Splatoon_3_US_Version_2.jpg'),filename:'Splatoon_3_US_Version_2.jpg'})
# array_product_Splatoon_3_US_Version.each do |img| 
#     product_Splatoon_3_US_Version.photos.attach(io:img[:file],filename:img[:filename])
# end
# array_product_Mario_Kart_8_Deluxe = []
# product_Mario_Kart_8_Deluxe = Product.create!(product_name: "Mario Kart 8 Deluxe",description:"Hit the road with the definitive version of Mario Kart 8 and play anytime, any-where! Race your friends or battle them in a revised battle mode on new and returning battle courses. Play locally in up to 4-player multiplayer in 1080p while playing in TV Mode. Every track from the Wii U version, including DLC, makes a glorious return. Plus, the Inklings appear as all-new guest characters, along with returning favorites, such as King Boo, Dry Bones, and Bowser Jr.!",categories:"videoGames,Nintendo Switch, Games",price:54.60,discount:19);
# array_product_Mario_Kart_8_Deluxe.push({file:File.open('frontend/src/assets/products/games/Mario_Kart_8_Deluxe_1.jpg'),filename:'Mario_Kart_8_Deluxe_1.jpg'})
# array_product_Mario_Kart_8_Deluxe.push({file:File.open('frontend/src/assets/products/games/Mario_Kart_8_Deluxe_2.jpg'),filename:'Mario_Kart_8_Deluxe_2.jpg'})
# array_product_Mario_Kart_8_Deluxe.each do |img| 
#     product_Mario_Kart_8_Deluxe.photos.attach(io:img[:file],filename:img[:filename])
# end

# puts "Creating games ratings..........................................."
# rating_games_1_user_1 = Rating.create!(product_id:product_Nintendo_Switch.id,reviewer_id:mario.id,overall_rating:5,review_headline:"I love this Nintendo Switch OLED Zelda Edition",review:"grew up to NES and all the old school stuff but I love the Switch OLED I mean realistically it's 3 in 1. TV/ Portable and you can pop controllers out and lean that bad boy back like a tablet and hold the controllers yourself and play.")
# rating_games_1_user_2 = Rating.create!(product_id:product_Nintendo_Switch.id,reviewer_id:luigi.id,overall_rating:4,review_headline:"Sorry I waited this long",review:"Now that I’ve got my hands on it, I regret not purchasing the oled model when it launched. I’m upgrading from the OG switch launch model")   
# rating_games_2_user_1 = Rating.create!(product_id:product_PS5.id,reviewer_id:mario.id,overall_rating:4,review_headline:"I like controller, but console feels cheap, and outer box came damaged.",review:"Was disappointed that the console tamper proof sleeve came partially ripped, but the main box was mostly intact, and all the cords and accessories were in the right place, seemingly, everything looked clean for the most.")
# rating_games_2_user_2 = Rating.create!(product_id:product_PS5.id,reviewer_id:luigi.id,overall_rating:5,review_headline:"Exceeded my expectations",review:"The PS5 was supremely hard to come by thanks to supply chain shortages and scalpers, but once I found one (I was NOT going to pay scalper prices), I didn't regret buying it.")   
# rating_games_3_user_1 = Rating.create!(product_id:product_FIFA_23_Standard_Edition.id,reviewer_id:mario.id,overall_rating:5,review_headline:"Amazing",review:"This game is so fun! It has so many cool game modes that you can play")
# rating_games_3_user_2 = Rating.create!(product_id:product_FIFA_23_Standard_Edition.id,reviewer_id:luigi.id,overall_rating:5,review_headline:"My son loves it.",review:"Happy boy.")   
# rating_games_4_user_1 = Rating.create!(product_id:product_Splatoon_3_US_Version.id,reviewer_id:mario.id,overall_rating:5,review_headline:"Great Game",review:"This game is so much fun. If you had played any of the previous games you will love this one. Its fun running around inking the maps which are so much fun to play through.")
# rating_games_4_user_2 = Rating.create!(product_id:product_Splatoon_3_US_Version.id,reviewer_id:luigi.id,overall_rating:4,review_headline:"Great game Love it",review:"Great game Love it nothing else really to say splatoon If you like splatoon you're like splatoon 3 same for two.")   
# rating_games_5_user_1 = Rating.create!(product_id:product_Mario_Kart_8_Deluxe.id,reviewer_id:mario.id,overall_rating:5,review_headline:"Fun game!",review:"is game but the Amazon delivery person ignored my notes about the package pirates in my building")
# rating_games_5_user_2 = Rating.create!(product_id:product_Mario_Kart_8_Deluxe.id,reviewer_id:luigi.id,overall_rating:4,review_headline:"Just what I looked for",review:"Excellent product!")   


# puts "Creating kitchen............................................................."
# array_Krups_One_Touch = []
# product_Krups_One_Touch = Product.create!(product_name: "Krups One-Touch Coffee and Spice Grinder 12 Cup Easy to Use, One Touch Operation 200 Watts Coffee, Spices, Dry Herbs, Nuts Black",description:"KRUPS F203 Electric Spice and Coffee Grinder with Stainless Steel Blades, 3 Ounce, Black. Grind whole coffee beans quickly and efficiently with this powerful KRUPS coffee grinder. A nice alternative to pre ground coffee, brewing freshly ground beans promotes maximum rich aroma and delicious full bodied flavor for better tasting coffee. When making any type of coffee drink, from simple drip to espresso and cappuccino, grinding beans right before brewing is a must for any true coffee lover. And it’s easy with the KRUPS coffee grinder.",categories:"kitchen,Home & Kitchen, Kitchen & Dining",price:24.99,discount:12);
# array_Krups_One_Touch.push({file:File.open('frontend/src/assets/products/kitchen/Krups_One_Touch_1.jpg'),filename:'Krups_One_Touch_1.jpg'})
# array_Krups_One_Touch.push({file:File.open('frontend/src/assets/products/kitchen/Krups_One_Touch_2.jpg'),filename:'Krups_One_Touch_2.jpg'})
# array_Krups_One_Touch.each do |img| 
#     product_Krups_One_Touch.photos.attach(io:img[:file],filename:img[:filename])
# end

# array_Breville_Smart_Oven_Air_Fryer_Pro = []
# product_Breville_Smart_Oven_Air_Fryer_Pro = Product.create!(product_name: "Breville Smart Oven Air Fryer Pro, Brushed Stainless Steel, BOV900BSS",description:"13 smart cooking functions with air fry and dehydrate. The Smart Oven Air with Element IQ is for the cook who desires a countertop oven that can roast for large gatherings, air fry crispy French fries & family favorites and dehydrate a wide range of healthy foods. The super convection setting reduces cooking time by up to 30 percent with great crispness. Capacity: 9 Slice Toaster, 13 Pizza, 9 x 13 baking pan, 12 cup muffin tray , 14 lb Turkey.",categories:"kitchen,Home & Kitchen, Kitchen & Dining",price:399.95,discount:20);
# array_Breville_Smart_Oven_Air_Fryer_Pro.push({file:File.open('frontend/src/assets/products/kitchen/Breville_Smart_Oven_Air_Fryer_Pro_1.jpg'),filename:'Breville_Smart_Oven_Air_Fryer_Pro_1.jpg'})
# array_Breville_Smart_Oven_Air_Fryer_Pro.push({file:File.open('frontend/src/assets/products/kitchen/Breville_Smart_Oven_Air_Fryer_Pro_2.jpg'),filename:'Breville_Smart_Oven_Air_Fryer_Pro_2.jpg'})
# array_Breville_Smart_Oven_Air_Fryer_Pro.each do |img| 
#     product_Breville_Smart_Oven_Air_Fryer_Pro.photos.attach(io:img[:file],filename:img[:filename])
# end

# array_OXO_Good_Grips_Soft = []
# product_OXO_Good_Grips_Soft = Product.create!(product_name: "OXO Good Grips Soft-Handled Manual Can Opener",description:"OXO International Soft Handle Can Opener The sharp cutting wheel is made of stainless steel and the handles are big and cushioned. This opener comes with a built in bottle cap opener. Model: 28081 Material: Stainless steel Color: Black handle Built in bottle cap opener Oversized knob Sharp cutting wheel Works on any size lid Height: 2 Width: 3 Length: 7 375373. Hand Wash only.",categories:"kitchen,Home & Kitchen, Kitchen & Dining",price:16.95,discount:0);
# array_OXO_Good_Grips_Soft.push({file:File.open('frontend/src/assets/products/kitchen/OXO_Good_Grips_Soft_1.jpg'),filename:'OXO_Good_Grips_Soft_1.jpg'})
# array_OXO_Good_Grips_Soft.push({file:File.open('frontend/src/assets/products/kitchen/OXO_Good_Grips_Soft_2.jpg'),filename:'OXO_Good_Grips_Soft_2.jpg'})
# array_OXO_Good_Grips_Soft.each do |img| 
#     product_OXO_Good_Grips_Soft.photos.attach(io:img[:file],filename:img[:filename])
# end
# array_Bodum_1928_16US4_Chambord_French = []
# product_Bodum_1928_16US4_Chambord_French = Product.create!(product_name: "Bodum 1928-16US4 Chambord French Press Coffee Maker, 1 Liter, 34 Ounce, Chrome",description:"Chambord is a true original – the classic French press Coffee maker designed in the fifties. And we still produce it with the same painstaking craftsmanship we used way back when with the original.",categories:"kitchen,Home & Kitchen, Kitchen & Dining",price:55.00,discount:46);
# array_Bodum_1928_16US4_Chambord_French.push({file:File.open('frontend/src/assets/products/kitchen/Bodum_1928_16US4_Chambord_French_1.jpg'),filename:'Bodum_1928_16US4_Chambord_French_1.jpg'})
# array_Bodum_1928_16US4_Chambord_French.push({file:File.open('frontend/src/assets/products/kitchen/Bodum_1928_16US4_Chambord_French_2.jpg'),filename:'Bodum_1928_16US4_Chambord_French_2.jpg'})
# array_Bodum_1928_16US4_Chambord_French.each do |img| 
#     product_Bodum_1928_16US4_Chambord_French.photos.attach(io:img[:file],filename:img[:filename])
# end
# array_OXO_Good_Grips_12_Inch = []
# product_OXO_Good_Grips_12_Inch = Product.create!(product_name: "OXO Good Grips 12-Inch Stainless-Steel Locking Tongs",description:"The OXO Good Grips 8-Inch Chef’s Knife is essential for any kitchen. It’s a workhorse, all-purpose knife for chopping, mincing, dicing and scooping. The soft handle is contoured for comfort and non-slip for a secure grip, even when wet. The sharp 8-inch blade is made from hardened Japanese stainless steel for strength and durability. To extend the life of your Knife, hand wash with warm, soapy water and dry promptly.",categories:"kitchen,Home & Kitchen, Kitchen & Dining",price:15.95,discount:0);
# array_OXO_Good_Grips_12_Inch.push({file:File.open('frontend/src/assets/products/kitchen/OXO_Good_Grips_12_Inch_1.jpg'),filename:'OXO_Good_Grips_12_Inch_1.jpg'})
# array_OXO_Good_Grips_12_Inch.push({file:File.open('frontend/src/assets/products/kitchen/OXO_Good_Grips_12_Inch_2.jpg'),filename:'OXO_Good_Grips_12_Inch_2.jpg'})
# array_OXO_Good_Grips_12_Inch.each do |img| 
#     product_OXO_Good_Grips_12_Inch.photos.attach(io:img[:file],filename:img[:filename])
# end

# puts "Creating kitchen ratings..........................................."
# rating_kitchen_1_user_1 = Rating.create!(product_id:product_Krups_One_Touch.id,reviewer_id:daisy.id,overall_rating:5,review_headline:"A Wonderful Addition to My Kitchen",review:"My feedback is really positive because the Breville Smart Oven Air Fryer Pro has exceeded my expectations in every way.")
# rating_kitchen_1_user_2 = Rating.create!(product_id:product_Krups_One_Touch.id,reviewer_id:koba.id,overall_rating:4,review_headline:"Does Everything!",review:"This oven makes fantastic pizza and flat breads along with many other foods. My problem is with shipping options.")   
# rating_kitchen_2_user_1 = Rating.create!(product_id:product_Breville_Smart_Oven_Air_Fryer_Pro.id,reviewer_id:daisy.id,overall_rating:5,review_headline:"Easy to use, fast, does nearly everything",review:"I bought this Breville Smart Oven after my wall oven died about eight months ago, and I wasn’t ready to drop $2000 to replace it right away.")
# rating_kitchen_2_user_2 = Rating.create!(product_id:product_Breville_Smart_Oven_Air_Fryer_Pro.id,reviewer_id:koba.id,overall_rating:3,review_headline:"A Wonderful Addition to My Kitchen",review:"My feedback is really positive because the Breville Smart Oven Air Fryer Pro has exceeded my expectations in every way.")   
# rating_kitchen_3_user_1 = Rating.create!(product_id:product_OXO_Good_Grips_Soft.id,reviewer_id:daisy.id,overall_rating:5,review_headline:"It s great",review:"My old one lasted a good 15 years. ")
# rating_kitchen_3_user_2 = Rating.create!(product_id:product_OXO_Good_Grips_Soft.id,reviewer_id:koba.id,overall_rating:5,review_headline:"My wife said she loves it.",review:"My wife said she loves it.")   
# rating_kitchen_4_user_1 = Rating.create!(product_id:product_Bodum_1928_16US4_Chambord_French.id,reviewer_id:daisy.id,overall_rating:5,review_headline:"Best looking Press",review:"Love this press it is my my second one.")
# rating_kitchen_4_user_2 = Rating.create!(product_id:product_Bodum_1928_16US4_Chambord_French.id,reviewer_id:koba.id,overall_rating:4,review_headline:"Cant beat the original",review:"If you like press coffee, then you know already. ")   
# rating_kitchen_5_user_1 = Rating.create!(product_id:product_OXO_Good_Grips_12_Inch.id,reviewer_id:daisy.id,overall_rating:5,review_headline:"Best Tongs Made !",review:"Been looking for tongs for a long time and decided to give these a try and let me tell you , boy they are great .")
# rating_kitchen_5_user_2 = Rating.create!(product_id:product_OXO_Good_Grips_12_Inch.id,reviewer_id:koba.id,overall_rating:4,review_headline:"Grips well",review:"Great size, grips well, easy to clean. Locks into place without coming apart.")   

# puts "Creating cartItems..."
# cartItem1 = CartItem.create!(quantity:1,user_id:peter.id,product_id:product_Sony_WH_CH720N.id)
# cartItem2 = CartItem.create!(quantity:1,user_id:peter.id,product_id:product_JBL_Vibe_200TWS.id)


puts "Seeding complete!"
