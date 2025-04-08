import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-12">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-green-700">Get in Touch</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Phone className="text-green-600" size={24} />
              <div>
                <p className="font-medium">Phone</p>
                <p>+91 97739 26025</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-green-600" size={24} />
              <div>
                <p className="font-medium">Email</p>
                <p>freindlypestcontrol@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-green-600" size={24} />
              <div>
                <p className="font-medium">Address</p>
                <p>Greater Noida, Uttar Pradesh, India

Hc6x+cwq, Sector 1, Aimnabad, Bisrakh Jalalpur, Greater Noida, Bisrakh Jalalpur, Uttar Pradesh 201306, India </p>
                <p>New Delhi, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-green-700 mb-6">Send us a Message</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                placeholder="Your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
