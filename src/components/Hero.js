import React, { useState, useEffect } from 'react';
import { FaTools, FaClock, FaShieldAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Hero = () => {
  // Array of high-quality car service images from Unsplash
  const heroImages = [
    "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1603712610496-5362a2c6c0d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 2000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const nextImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 300);
  };

  const prevImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 300);
  };

  const goToImage = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex(index);
      setIsTransitioning(false);
    }, 300);
  };

  const handleImageError = (e) => {
    console.error('Image failed to load:', e.target.src);
    nextImage();
  };

  return (
    <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-5xl font-bold leading-tight">
              Premium Car Care 
              <span className="text-secondary"> At Your Doorstep</span>
            </h1>
            <p className="text-xl text-blue-100">
              Experience elite automotive servicing with our mobile mechanics. 
              We bring the garage to you with professional, convenient, and reliable service.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-secondary text-dark px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-colors transform hover:scale-105">
                Book Now - 20% Off First Service
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition-colors transform hover:scale-105">
                Learn More
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center transform hover:scale-110 transition-transform">
                <FaTools className="text-secondary text-3xl mx-auto mb-2" />
                <p className="font-semibold">Expert Mechanics</p>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform">
                <FaClock className="text-secondary text-3xl mx-auto mb-2" />
                <p className="font-semibold">Quick Service</p>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform">
                <FaShieldAlt className="text-secondary text-3xl mx-auto mb-2" />
                <p className="font-semibold">6 Month Warranty</p>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Image Slider */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-2 shadow-2xl relative overflow-hidden">
              {/* Main Image */}
              <div className={`relative h-96 rounded-xl overflow-hidden transition-opacity duration-300 ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}>
                <img 
                  src={heroImages[currentImageIndex]}
                  alt="Professional Car Service"
                  className="w-full h-full object-cover rounded-xl"
                  onError={handleImageError}
                  loading="eager"
                />
                
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
                
                {/* Navigation Arrows */}
                <button 
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-dark p-2 rounded-full transition-all duration-200 hover:scale-110"
                >
                  <FaChevronLeft size={20} />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-dark p-2 rounded-full transition-all duration-200 hover:scale-110"
                >
                  <FaChevronRight size={20} />
                </button>
              </div>

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-secondary scale-125' 
                        : 'bg-white/60 hover:bg-white'
                    }`}
                  />
                ))}
              </div>

              {/* Image Counter */}
              <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {heroImages.length}
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white text-dark p-6 rounded-xl shadow-2xl transform hover:scale-105 transition-transform">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">2,500+</div>
                <div className="text-sm">Happy Customers</div>
              </div>
            </div>

            {/* Additional Floating Element */}
            <div className="absolute -top-4 -right-4 bg-secondary text-dark p-4 rounded-xl shadow-2xl transform hover:scale-105 transition-transform">
              <div className="text-center">
                <div className="text-lg font-bold">24/7</div>
                <div className="text-xs">Service Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;