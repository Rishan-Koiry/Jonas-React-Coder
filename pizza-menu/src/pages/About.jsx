import React, { useEffect, useState } from "react";
import Footer from "./Footer";

const About = ({ setCurrentPage }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section with Parallax */}
      <div className="relative h-screen overflow-hidden">
        {/* Parallax Background Image */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            transition: "transform 0.1s ease-out",
            backgroundImage: "url('/about.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            imageRendering: "-webkit-optimize-contrast",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto max-w-4xl text-center relative z-10 h-full flex flex-col justify-center items-center px-4">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
            OUR STORY
          </span>
          <h1 className="text-6xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl">
            About Pizza RK
          </h1>
          <p className="text-2xl text-white font-medium max-w-2xl mx-auto drop-shadow-lg">
            Crafting authentic Italian pizzas with passion since 2008
          </p>
        </div>
      </div>
      {/* Story Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-bold mb-4">
                🍕 EST. 2008
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Our Journey
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Pizza RK was founded by Marco Rossi, a third-generation
                pizzaiolo from Naples, who brought his family's century-old
                recipes to create an authentic Italian pizza experience.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Our wood-fired oven, imported directly from Italy, reaches the
                perfect 900°F temperature to create that signature
                crispy-yet-chewy crust that our customers love.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we're proud to serve over 10,000 happy customers
                annually, maintaining the same dedication to quality and
                authenticity that started it all.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="text-5xl">🔥</div>
                    <div>
                      <div className="text-3xl font-black text-gray-900">
                        900°F
                      </div>
                      <div className="text-gray-600">Wood-Fired Oven</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-5xl">⏱️</div>
                    <div>
                      <div className="text-3xl font-black text-gray-900">
                        90 Sec
                      </div>
                      <div className="text-gray-600">Perfect Cook Time</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-5xl">👨‍🍳</div>
                    <div>
                      <div className="text-3xl font-black text-gray-900">
                        15+
                      </div>
                      <div className="text-gray-600">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Values Section */}
      <div className="bg-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-bold mb-4">
              WHAT WE BELIEVE
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group bg-gradient-to-br from-orange-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-orange-200">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-xl font-black text-gray-900 mb-3">
                Quality First
              </h3>
              <p className="text-gray-600">
                Only the finest ingredients sourced from local farms and trusted
                suppliers
              </p>
            </div>

            <div className="group bg-gradient-to-br from-red-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-red-200">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-black text-gray-900 mb-3">
                Community
              </h3>
              <p className="text-gray-600">
                Building relationships and serving our neighborhood with pride
              </p>
            </div>

            <div className="group bg-gradient-to-br from-yellow-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-yellow-200">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-black text-gray-900 mb-3">
                Authenticity
              </h3>
              <p className="text-gray-600">
                Traditional recipes and methods passed down through generations
              </p>
            </div>

            <div className="group bg-gradient-to-br from-green-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-green-200">
              <div className="text-5xl mb-4">💚</div>
              <h3 className="text-xl font-black text-gray-900 mb-3">
                Sustainability
              </h3>
              <p className="text-gray-600">
                Eco-friendly practices and supporting local sustainable farming
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Our Chefs Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-bold mb-4">
              👨‍🍳 MEET THE MASTERS
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Our Expert Chefs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate culinary artists bringing authentic Italian flavors to
              life
            </p>
          </div>

          {/* Chefs - Testimonial Style Layout */}
          <div className="space-y-8 lg:space-y-10 mb-20 max-w-5xl mx-auto">
            {/* Chef 1 - Image Left */}
            <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-gray-100 overflow-hidden flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&h=800&fit=crop&crop=faces"
                    alt="Marco Rossi"
                    className="w-auto h-auto max-w-full max-h-[400px] object-cover"
                    style={{ objectPosition: "50% 40%" }}
                  />
                </div>
                <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                  <div className="text-4xl lg:text-5xl mb-3 lg:mb-4">👨‍🍳</div>
                  <h3 className="text-2xl md:text-3xl lg:text-3xl font-black text-gray-900 mb-2 lg:mb-3">
                    Marco Rossi
                  </h3>
                  <p className="text-orange-600 font-bold text-base lg:text-lg mb-3 lg:mb-4">
                    Master Chef & Founder
                  </p>
                  <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-3 lg:mb-4">
                    "With over 20 years of experience crafting authentic
                    Neapolitan pizzas, I bring my family's century-old recipes
                    to every pie we create. Our wood-fired oven and traditional
                    techniques ensure each pizza is a masterpiece."
                  </p>
                  <div className="flex items-center gap-2 text-orange-500">
                    <span>⭐⭐⭐⭐⭐</span>
                    <span className="text-gray-600 text-sm">
                      Master Pizzaiolo
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Chef 2 - Image Right */}
            <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="order-2 md:order-1 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                  <div className="text-4xl lg:text-5xl mb-3 lg:mb-4">👩‍🍳</div>
                  <h3 className="text-2xl md:text-3xl lg:text-3xl font-black text-gray-900 mb-2 lg:mb-3">
                    Sofia Martinez
                  </h3>
                  <p className="text-orange-600 font-bold text-base lg:text-lg mb-3 lg:mb-4">
                    Head Pizzaiolo
                  </p>
                  <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-3 lg:mb-4">
                    "I specialize in traditional wood-fired techniques passed
                    down through generations. Every pizza that comes out of our
                    900°F oven is perfectly cooked with that signature
                    crispy-yet-chewy crust."
                  </p>
                  <div className="flex items-center gap-2 text-orange-500">
                    <span>⭐⭐⭐⭐⭐</span>
                    <span className="text-gray-600 text-sm">
                      15+ Years Experience
                    </span>
                  </div>
                </div>
                <div className="order-1 md:order-2 bg-gray-100 overflow-hidden flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=800&fit=crop&crop=faces"
                    alt="Sofia Martinez"
                    className="w-auto h-auto max-w-full max-h-[400px] object-cover"
                    style={{ objectPosition: "50% 40%" }}
                  />
                </div>
              </div>
            </div>

            {/* Chef 3 - Image Left */}
            <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-gray-100 overflow-hidden flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&fit=crop&crop=faces"
                    alt="Antonio Bianchi"
                    className="w-auto h-auto max-w-full max-h-[400px] object-cover"
                    style={{ objectPosition: "50% 40%" }}
                  />
                </div>
                <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                  <div className="text-4xl lg:text-5xl mb-3 lg:mb-4">🍕</div>
                  <h3 className="text-2xl md:text-3xl lg:text-3xl font-black text-gray-900 mb-2 lg:mb-3">
                    Antonio Bianchi
                  </h3>
                  <p className="text-orange-600 font-bold text-base lg:text-lg mb-3 lg:mb-4">
                    Sous Chef
                  </p>
                  <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-3 lg:mb-4">
                    "My passion is creating innovative specialty pizzas while
                    maintaining quality control. I ensure every ingredient meets
                    our high standards and every pizza tastes perfect."
                  </p>
                  <div className="flex items-center gap-2 text-orange-500">
                    <span>⭐⭐⭐⭐⭐</span>
                    <span className="text-gray-600 text-sm">
                      Innovation Expert
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Chef 4 - Image Right */}
            <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="order-2 md:order-1 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                  <div className="text-4xl lg:text-5xl mb-3 lg:mb-4">🔥</div>
                  <h3 className="text-2xl md:text-3xl lg:text-3xl font-black text-gray-900 mb-2 lg:mb-3">
                    Giovanni Leone
                  </h3>
                  <p className="text-orange-600 font-bold text-base lg:text-lg mb-3 lg:mb-4">
                    Pizza Chef
                  </p>
                  <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-3 lg:mb-4">
                    "As a specialist in Sicilian style pizzas, I bring bold
                    flavors and authentic techniques from my homeland. Each
                    pizza tells a story of Italian culinary tradition."
                  </p>
                  <div className="flex items-center gap-2 text-orange-500">
                    <span>⭐⭐⭐⭐⭐</span>
                    <span className="text-gray-600 text-sm">
                      Sicilian Specialist
                    </span>
                  </div>
                </div>
                <div className="order-1 md:order-2 bg-gray-100 overflow-hidden flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&h=800&fit=crop&crop=faces"
                    alt="Giovanni Leone"
                    className="w-auto h-auto max-w-full max-h-[400px] object-cover"
                    style={{ objectPosition: "50% 40%" }}
                  />
                </div>
              </div>
            </div>

            {/* Chef 5 - Image Left */}
            <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-gray-100 overflow-hidden flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=600&h=800&fit=crop&crop=faces"
                    alt="Elena Romano"
                    className="w-auto h-auto max-w-full max-h-[400px] object-cover"
                    style={{ objectPosition: "50% 40%" }}
                  />
                </div>
                <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                  <div className="text-4xl lg:text-5xl mb-3 lg:mb-4">🍰</div>
                  <h3 className="text-2xl md:text-3xl lg:text-3xl font-black text-gray-900 mb-2 lg:mb-3">
                    Elena Romano
                  </h3>
                  <p className="text-orange-600 font-bold text-base lg:text-lg mb-3 lg:mb-4">
                    Pastry Chef
                  </p>
                  <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-3 lg:mb-4">
                    "I create our famous Italian desserts using traditional
                    recipes and the finest ingredients. From tiramisu to
                    cannoli, every dessert is made fresh daily with love."
                  </p>
                  <div className="flex items-center gap-2 text-orange-500">
                    <span>⭐⭐⭐⭐⭐</span>
                    <span className="text-gray-600 text-sm">
                      Dessert Master
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Staff Section */}
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-bold mb-4">
              🌟 OUR DEDICATED STAFF
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Support Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The friendly faces that make your experience exceptional
            </p>
          </div>

          {/* Staff - Testimonial Style Layout */}
          <div className="space-y-8 lg:space-y-10 max-w-5xl mx-auto">
            {/* Staff 1 - Image Left */}
            <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-gray-100 overflow-hidden flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=faces"
                    alt="Isabella Costa"
                    className="w-auto h-auto max-w-full max-h-[400px] object-cover"
                    style={{ objectPosition: "50% 40%" }}
                  />
                </div>
                <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                  <div className="text-4xl lg:text-5xl mb-3 lg:mb-4">💼</div>
                  <h3 className="text-2xl md:text-3xl lg:text-3xl font-black text-gray-900 mb-2 lg:mb-3">
                    Isabella Costa
                  </h3>
                  <p className="text-blue-600 font-bold text-base lg:text-lg mb-3 lg:mb-4">
                    Restaurant Manager
                  </p>
                  <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-3 lg:mb-4">
                    "Our guests are family, and I ensure every visit is
                    memorable. From the moment you walk in to your last bite,
                    we're dedicated to providing an exceptional dining
                    experience."
                  </p>
                  <div className="flex items-center gap-2 text-blue-500">
                    <span>⭐⭐⭐⭐⭐</span>
                    <span className="text-gray-600 text-sm">
                      10+ Years Management
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Staff 2 - Image Right */}
            <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="order-2 md:order-1 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                  <div className="text-4xl lg:text-5xl mb-3 lg:mb-4">🎩</div>
                  <h3 className="text-2xl md:text-3xl lg:text-3xl font-black text-gray-900 mb-2 lg:mb-3">
                    Lucas Silva
                  </h3>
                  <p className="text-blue-600 font-bold text-base lg:text-lg mb-3 lg:mb-4">
                    Head Waiter
                  </p>
                  <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-3 lg:mb-4">
                    "Service with a warm smile is my specialty. I love helping
                    guests discover their perfect pizza and ensuring their
                    dining experience exceeds expectations."
                  </p>
                  <div className="flex items-center gap-2 text-blue-500">
                    <span>⭐⭐⭐⭐⭐</span>
                    <span className="text-gray-600 text-sm">
                      Expert Service
                    </span>
                  </div>
                </div>
                <div className="order-1 md:order-2 bg-gray-100 overflow-hidden flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=faces"
                    alt="Lucas Silva"
                    className="w-auto h-auto max-w-full max-h-[400px] object-cover"
                    style={{ objectPosition: "50% 40%" }}
                  />
                </div>
              </div>
            </div>

            {/* Staff 3 - Image Left */}
            <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-gray-100 overflow-hidden flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=800&fit=crop&crop=faces"
                    alt="Maria Santos"
                    className="w-auto h-auto max-w-full max-h-[400px] object-cover"
                    style={{ objectPosition: "50% 40%" }}
                  />
                </div>
                <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                  <div className="text-4xl lg:text-5xl mb-3 lg:mb-4">📞</div>
                  <h3 className="text-2xl md:text-3xl lg:text-3xl font-black text-gray-900 mb-2 lg:mb-3">
                    Maria Santos
                  </h3>
                  <p className="text-blue-600 font-bold text-base lg:text-lg mb-3 lg:mb-4">
                    Customer Service
                  </p>
                  <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-3 lg:mb-4">
                    "I'm always here to help with your orders, answer questions,
                    and make sure you have the best experience possible. Your
                    satisfaction is my priority!"
                  </p>
                  <div className="flex items-center gap-2 text-blue-500">
                    <span>⭐⭐⭐⭐⭐</span>
                    <span className="text-gray-600 text-sm">
                      Customer Care Expert
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Location Section with Map */}
      <div className="bg-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-bold mb-4">
              📍 FIND US
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Visit Our Location
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Come experience authentic Italian pizza in the heart of Dhaka
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">📍</div>
                  <div>
                    <h3 className="text-xl font-black text-gray-900 mb-2">
                      Address
                    </h3>
                    <p className="text-gray-600">
                      Pizza RK Restaurant
                      <br />
                      Dhaka, Bangladesh
                      <br />
                      Near Central Plaza
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🕐</div>
                  <div>
                    <h3 className="text-xl font-black text-gray-900 mb-2">
                      Opening Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Friday: 11:00 AM - 11:00 PM
                      <br />
                      Saturday - Sunday: 10:00 AM - 12:00 AM
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">📞</div>
                  <div>
                    <h3 className="text-xl font-black text-gray-900 mb-2">
                      Contact
                    </h3>
                    <p className="text-gray-600">
                      Phone: +880 1234-567890
                      <br />
                      Email: info@pizzark.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <iframe
                src="https://maps.google.com/maps?q=Dhaka&z=16&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                title="Pizza RK Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Try Our Award-Winning Pizza?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of satisfied customers
          </p>
          <button
            onClick={() => setCurrentPage("menu")}
            className="bg-white text-orange-600 px-12 py-5 rounded-full font-black text-xl hover:bg-orange-50 transition-all duration-300 shadow-2xl hover:scale-110 transform"
          >
            View Our Menu →
          </button>
        </div>
      </div>
      <Footer setCurrentPage={setCurrentPage} />
    </>
  );
};

export default About;
