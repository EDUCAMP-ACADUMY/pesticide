import React from 'react';
import { Bug, SprayCan as Spray, Droplet, Bug as Bug2, Car, Monitor as Mosquito, Building2, MoreHorizontal, Rat, BedDouble } from 'lucide-react';

const services = [
  {
    id: 1,
    name: 'Sanitization',
    price: 999,
    icon: Spray,
    description: 'Complete sanitization service for your space for 2Bhk'
  },
  {
    id: 2,
    name: 'Dreiont Control',
    price: 1499,
    icon: Bug,
    description: 'Professional dreiont pest control treatment for 2bhk'
  },
  {
    id: 3,
    name: 'Liquid Sanitization',
    price: 1199,
    icon: Droplet,
    description: 'Thorough liquid sanitization service for 2bhk'
  },
  {
    id: 4,
    name: 'Ant Control',
    price: 899,
    icon: Bug2,
    description: 'Effective ant control treatment for 2bhk'
  },
  {
    id: 5,
    name: 'Vehicle Sanitization',
    price: 1299,
    icon: Car,
    description: 'Complete vehicle sanitization service for 2bhk'
  },
  {
    id: 6,
    name: 'Mosquito Control',
    price: 1799,
    icon: Mosquito,
    description: 'Professional mosquito control treatment for 2bhk'
  },
  {
    id: 7,
    name: 'Termite Treatment',
    price: 1999,
    icon: Building2,
    description: 'Comprehensive termite control solution for 2bhk'
  },
  {
    id: 8,
    name: 'Other Service',
    price: 1499,
    icon: MoreHorizontal,
    description: 'Custom pest control services for 2bhk'
  },
  {
    id: 9,
    name: 'Cockroach Control',
    price: 1399,
    icon: Rat,
    description: 'Effective cockroach control treatment for 2bhk'
  },
  {
    id: 10,
    name: 'Bed Bugs',
    price: 1299,
    icon: BedDouble,
    description: 'Complete bed bug elimination service for 2bhk'
  }
];

function Shop() {
  const handleWhatsAppRedirect = (service: string) => {
    const message = `Hi, I'm interested in your ${service} service. Can you provide more information?`;
    window.open(`https://wa.me/918968696133?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <service.icon className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">{service.name}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-green-600">₹{service.price}</span>
              <button
                onClick={() => handleWhatsAppRedirect(service.name)}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
