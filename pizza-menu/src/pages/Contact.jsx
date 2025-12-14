import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Footer from "./Footer";

const Contact = ({ setCurrentPage }) => {
  const [state, handleSubmit] = useForm("xanrvdde");

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat -z-10"
          style={{
            backgroundImage: "url('/contact.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600/70 to-red-600/60"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto max-w-4xl text-center relative z-10 h-full flex flex-col justify-center items-center px-4 py-20">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
            GET IN TOUCH
          </span>
          <h1 className="text-6xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl">
            Contact Us
          </h1>
          <p className="text-2xl text-white font-medium drop-shadow-lg">
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
                  Let's Talk Pizza!
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
                    <div className="bg-gradient-to-br from-orange-400 to-red-500 p-4 rounded-xl text-white text-2xl font-black shadow-lg flex items-center justify-center">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
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
                    <div className="bg-gradient-to-br from-red-400 to-orange-500 p-4 rounded-xl text-white text-2xl font-black shadow-lg flex items-center justify-center">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
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
                    <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-4 rounded-xl text-white text-2xl font-black shadow-lg flex items-center justify-center">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Email Us
                      </h3>
                      <a
                        href="mailto:koiryrishan1@gmail.com"
                        className="text-xl font-bold text-orange-600 hover:text-orange-700"
                      >
                        koiryrishan1@gmail.com
                      </a>
                      <p className="text-gray-600 mt-1">
                        We'll respond within 24 hours
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-green-500">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-green-400 to-emerald-500 p-4 rounded-xl text-white text-2xl font-black shadow-lg flex items-center justify-center">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                          clipRule="evenodd"
                        />
                      </svg>
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
                          Happy Hour: 3-6 PM Daily!
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
                    className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-orange-600"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-orange-600"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-orange-600"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-orange-600"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
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
                <form
                  onSubmit={handleSubmit}
                  action="https://formspree.io/f/xanrvdde"
                  method="POST"
                  className="space-y-5"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold text-gray-700 mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-600 focus:border-orange-600 outline-none transition-all text-lg"
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-600 focus:border-orange-600 outline-none transition-all text-lg"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-bold text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="(555) 123-4567"
                      className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-600 focus:border-orange-600 outline-none transition-all text-lg"
                    />
                    <ValidationError
                      prefix="Phone"
                      field="phone"
                      errors={state.errors}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-bold text-gray-700 mb-2"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
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
                    <label
                      htmlFor="message"
                      className="block text-sm font-bold text-gray-700 mb-2"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="5"
                      placeholder="Tell us what's on your mind..."
                      className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-600 focus:border-orange-600 outline-none resize-none transition-all text-lg"
                    ></textarea>
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-5 rounded-xl font-black text-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {state.submitting ? "Sending..." : "Send Message"}
                  </button>
                </form>

                {state.succeeded && (
                  <div className="mt-6 bg-green-100 border-2 border-green-500 text-green-800 px-6 py-4 rounded-xl font-bold flex items-center gap-3">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
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
