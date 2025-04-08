import React from 'react';
import { Phone, ShoppingCart, MessageCircle } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Shop from './components/Shop';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const handleWhatsAppRedirect = () => {
    window.open(`https://wa.me/918968696133`, '_blank');
  };

  const handlePhoneRedirect = () => {
    window.location.href = 'tel:+919773926025';
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-green-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold">PestControl</Link>
            <div className="flex items-center gap-6">
              <Link to="/" className="hover:text-green-200">Home</Link>
              <Link to="/about" className="hover:text-green-200">About</Link>
              <Link to="/shop" className="hover:text-green-200">Shop</Link>
              <Link to="/contact" className="hover:text-green-200">Contact</Link>
              <button 
                onClick={handleWhatsAppRedirect}
                className="flex items-center gap-2 bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700"
              >
                <MessageCircle size={20} />
                WhatsApp
              </button>
              <button 
                onClick={handlePhoneRedirect}
                className="flex items-center gap-2 bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700"
              >
                <Phone size={20} />
                Call Us
              </button>
              <Link to="/shop" className="text-green-200">
                <ShoppingCart size={24} />
              </Link>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-green-900 text-white py-8 mt-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                <p>Phone: +91 97739 26025</p>
                <p>WhatsApp: +91 89686 96133</p>
                <p>Email: freindlypestcontrol@gmail.com</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link to="/" className="hover:text-green-200">Home</Link></li>
                  <li><Link to="/about" className="hover:text-green-200">About</Link></li>
                  <li><Link to="/shop" className="hover:text-green-200">Shop</Link></li>
                  <li><Link to="/contact" className="hover:text-green-200">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                <p>Sunday: Closed</p>
                <p className="mt-4">24/7 Emergency Service Available</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;