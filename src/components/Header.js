import React, { useState } from 'react';
import { FaCar, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <FaCar className="text-primary text-2xl" />
            <span className="text-2xl font-bold text-dark">AutoElite</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-dark hover:text-primary font-medium transition-colors">
              Services
            </a>
            <a href="#how-it-works" className="text-dark hover:text-primary font-medium transition-colors">
              How It Works
            </a>
            <a href="#testimonials" className="text-dark hover:text-primary font-medium transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-dark hover:text-primary font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <button className="hidden md:block bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Book Service
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#services" className="text-dark hover:text-primary font-medium">
                Services
              </a>
              <a href="#how-it-works" className="text-dark hover:text-primary font-medium">
                How It Works
              </a>
              <a href="#testimonials" className="text-dark hover:text-primary font-medium">
                Testimonials
              </a>
              <a href="#contact" className="text-dark hover:text-primary font-medium">
                Contact
              </a>
              <button className="bg-primary text-white px-6 py-2 rounded-lg font-semibold w-full">
                Book Service
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;