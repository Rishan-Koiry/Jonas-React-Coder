import React, { useState } from "react";
import Footer from "./Footer";

const Contact = ({ setCurrentPage }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xanrvdde", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormSubmitted(true);
        form.reset();
        setTimeout(() => setFormSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-orange-600 via-red-600 to-orange-700 py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzAgMy4zMTQtMi42ODYgNi02IDZzLTYtMi42ODYtNi02IDIuNjg2LTYgNi02IDYgMi42ODYgNiA2Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
            GET IN TOUCH
          </span>
          <h1 className="text-6xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl">
            Contact Us
          </h1>
          <p className="text-2xl text-orange-100 font-medium">
            We'd love to hear from you!
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-black text-gray-900 mb-4">
                  Let's Talk Pizza! 🍕
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Have questions? Want to book a party? Or just want to tell us
                  how much you love our pizza? We're here for you!
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-orange-500">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-orange-400 to-red-500 p-4 rounded-xl text-3xl shadow-lg">
                      📍
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Visit Us
                      </h3>
                      <p className="text-gray-600 font-medium">
                        123 Pizza Street
                      </p>
                      <p className="text-gray-600">Food City, FC 12345</p>
                      <a
                        href="#"
                        className="inline-block mt-2 text-orange-600 font-semibold hover:text-orange-700"
                      >
                        Get Directions →
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-red-500">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-red-400 to-orange-500 p-4 rounded-xl text-3xl shadow-lg">
                      📞
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Call Us
                      </h3>
                      <a
                        href="tel:5551234567"
                        className="text-2xl font-black text-orange-600 hover:text-orange-700"
                      >
                        (555) 123-4567
                      </a>
                      <p className="text-gray-600 mt-1">
                        Available 11 AM - 11 PM daily
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-yellow-500">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-4 rounded-xl text-3xl shadow-lg">
                      📧
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Email Us
                      </h3>
                      <a
                        href="mailto:info@koiryrishan1@gmail.com"
                        className="text-xl font-bold text-orange-600 hover:text-orange-700"
                      >
                        info@koiryrishan1@gmail.com
                      </a>
                      <p className="text-gray-600 mt-1">
                        We'll respond within 24 hours
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-green-500">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-green-400 to-emerald-500 p-4 rounded-xl text-3xl shadow-lg">
                      🕒
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Opening Hours
                      </h3>
                      <div className="space-y-1 text-gray-600">
                        <p className="font-semibold">
                          Monday - Friday: 11:00 AM - 11:00 PM
                        </p>
                        <p className="font-semibold">
                          Saturday - Sunday: 10:00 AM - 12:00 AM
                        </p>
                        <p className="text-sm text-orange-600 font-bold mt-2">
                          🎉 Happy Hour: 3-6 PM Daily!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border-2 border-orange-200">
                <h3 className="text-2xl font-black text-gray-900 mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-2xl"
                  >
                    📱
                  </a>
                  <a
                    href="#"
                    className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-2xl"
                  >
                    🐦
                  </a>
                  <a
                    href="#"
                    className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-2xl"
                  >
                    📷
                  </a>
                  <a
                    href="#"
                    className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-2xl"
                  >
                    👍
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white p-8 rounded-3xl shadow-2xl border-2 border-orange-200">
                <h2 className="text-3xl font-black text-gray-900 mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-600 focus:border-orange-600 outline-none transition-all text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="_replyto"
                      required
                      placeholder="john@example.com"
                      className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-600 focus:border-orange-600 outline-none transition-all text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="(555) 123-4567"
                      className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-600 focus:border-orange-600 outline-none transition-all text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-600 focus:border-orange-600 outline-none transition-all text-lg"
                    >
                      <option>General Inquiry</option>
                      <option>Catering / Party Booking</option>
                      <option>Feedback</option>
                      <option>Complaint</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows="5"
                      placeholder="Tell us what's on your mind..."
                      className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-600 focus:border-orange-600 outline-none resize-none transition-all text-lg"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-5 rounded-xl font-black text-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending... ⏳" : "Send Message 🚀"}
                  </button>
                </form>

                {formSubmitted && (
                  <div className="mt-6 bg-green-100 border-2 border-green-500 text-green-800 px-6 py-4 rounded-xl font-bold flex items-center gap-3 animate-pulse">
                    <span className="text-2xl">✅</span>
                    <span>
                      Message sent successfully! We'll get back to you soon.
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              src="https://maps.google.com/maps?q=Dhaka&z=16&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer setCurrentPage={setCurrentPage} />
    </>
  );
};

export default Contact;
