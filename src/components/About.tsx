import React from 'react';
import { Shield, Users, Award, Clock } from 'lucide-react';

function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-green-800 mb-4">About Our Pest Control Service</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          With over 25 years of experience, we're committed to providing safe, effective, and environmentally conscious pest control solutions for homes and businesses.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <div className="flex justify-center mb-4">
            <Shield className="w-12 h-12 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
          <p className="text-gray-600">Fully certified professionals you can trust</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <div className="flex justify-center mb-4">
            <Users className="w-12 h-12 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
          <p className="text-gray-600">Highly trained and experienced staff</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <div className="flex justify-center mb-4">
            <Award className="w-12 h-12 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Quality Service</h3>
          <p className="text-gray-600">Guaranteed satisfaction with every visit</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <div className="flex justify-center mb-4">
            <Clock className="w-12 h-12 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
          <p className="text-gray-600">Emergency services available anytime</p>
        </div>
      </div>

      {/* Company Story */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Our Story</h2>
          <div className="prose lg:prose-lg text-gray-600">
            <p className="mb-4">
              Founded in 1995, our journey began with a simple mission: to provide effective, safe, and environmentally responsible pest control solutions. What started as a small family operation has grown into one of the region's most trusted pest management companies, serving thousands of satisfied customers across residential and commercial sectors.
            </p>
            <p className="mb-4">
              Throughout our 25+ years of service, we've witnessed significant changes in pest control technology and methods. We've consistently stayed ahead of the curve, investing in the latest equipment, training our staff in cutting-edge techniques, and adopting eco-friendly solutions that protect both our clients and the environment.
            </p>
            <p className="mb-4">
              Our commitment to excellence extends beyond just eliminating pests. We focus on prevention, education, and using the most advanced, eco-friendly methods available in the industry. Every member of our team undergoes rigorous training and stays updated with the latest pest control techniques.
            </p>
            <p>
              We take pride in our community involvement and our role in maintaining public health standards. Our service isn't just about pest control – it's about creating safer, healthier environments for our clients and their families.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        <div className="bg-green-800 text-white p-6 rounded-lg">
          <div className="text-4xl font-bold mb-2">25+</div>
          <div className="text-lg">Years Experience</div>
        </div>
        <div className="bg-green-800 text-white p-6 rounded-lg">
          <div className="text-4xl font-bold mb-2">10k+</div>
          <div className="text-lg">Happy Customers</div>
        </div>
        <div className="bg-green-800 text-white p-6 rounded-lg">
          <div className="text-4xl font-bold mb-2">24/7</div>
          <div className="text-lg">Emergency Service</div>
        </div>
        <div className="bg-green-800 text-white p-6 rounded-lg">
          <div className="text-4xl font-bold mb-2">100%</div>
          <div className="text-lg">Satisfaction Rate</div>
        </div>
      </div>
    </div>
  );
}

export default About;