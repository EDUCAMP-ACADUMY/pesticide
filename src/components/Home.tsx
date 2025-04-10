import React from 'react';
import { Shield, Award, Leaf, Clock, Users, Building, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="h-[600px] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("src/components/487961285_1311747676595900_4100945100147295966_n.jpg")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Safe & Effective Pest Control Services</h1>
            <p className="text-xl mb-8">Professional pest control and sanitization services for your home or business.</p>
            <div className="flex gap-4">
              <Link 
                to="/shop"
                className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition"
              >
                View Services
              </Link>
              <Link 
                to="/contact"
                className="bg-white text-green-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="w-16 h-16 mx-auto text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Safe & Reliable</h3>
              <p>We use eco-friendly and safe pest control solutions</p>
            </div>
            <div className="text-center">
              <Award className="w-16 h-16 mx-auto text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Experienced Team</h3>
              <p>Professional and trained pest control experts</p>
            </div>
            <div className="text-center">
              <Leaf className="w-16 h-16 mx-auto text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Eco-Friendly</h3>
              <p>Environmental-conscious pest control methods</p>
            </div>
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Legacy of Excellence</h2>
            <p className="text-gray-600 mb-8">
              Since our establishment in 1995, we've been at the forefront of pest control innovation. What started as a small family business has grown into one of the most trusted names in pest management across the region. Our journey has been marked by continuous improvement, adoption of eco-friendly practices, and unwavering commitment to customer satisfaction.
            </p>
            <p className="text-gray-600">
              Through decades of service, we've protected countless homes and businesses, developed cutting-edge pest control methods, and built a reputation for reliability and excellence. Our history is not just about eliminating pests – it's about creating safer, healthier environments for our community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto text-green-600 mb-4" />
              <h4 className="font-bold mb-2">25+ Years</h4>
              <p>Of Experience</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto text-green-600 mb-4" />
              <h4 className="font-bold mb-2">10,000+</h4>
              <p>Happy Customers</p>
            </div>
            <div className="text-center">
              <Building className="w-12 h-12 mx-auto text-green-600 mb-4" />
              <h4 className="font-bold mb-2">5,000+</h4>
              <p>Projects Completed</p>
            </div>
            <div className="text-center">
              <CheckCircle2 className="w-12 h-12 mx-auto text-green-600 mb-4" />
              <h4 className="font-bold mb-2">100%</h4>
              <p>Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8">Schedule your pest control service today and enjoy a pest-free environment.</p>
            <div className="flex justify-center gap-4">
              <Link 
                to="/contact"
                className="bg-white text-green-800 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition flex items-center gap-2"
              >
                Get Free Quote <ArrowRight size={20} />
              </Link>
              <Link 
                to="/shop"
                className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
