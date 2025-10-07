import React from 'react';
import { 
  FaOilCan, 
  FaCarBattery, 
  FaCog, 
  FaTools, 
  FaCar, 
  FaFan,
  FaTachometerAlt 
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaOilCan className="text-3xl text-primary" />,
      title: "Oil Change",
      description: "Premium oil change with filter replacement",
      price: "₹1,499",
      features: ["Synthetic Oil", "Oil Filter", "20-Point Check"]
    },
    {
      icon: <FaCarBattery className="text-3xl text-primary" />,
      title: "Battery Service",
      description: "Battery testing and replacement",
      price: "₹999",
      features: ["Free Testing", "2-Year Warranty", "Installation"]
    },
    {
      icon: <FaCog className="text-3xl text-primary" />,
      title: "Tire Service",
      description: "Tire rotation, balancing and replacement",
      price: "₹799",
      features: ["Tire Rotation", "Wheel Balancing", "Pressure Check"]
    },
    {
      icon: <FaFan className="text-3xl text-primary" />,
      title: "AC Service",
      description: "Complete AC system maintenance",
      price: "₹1,999",
      features: ["Gas Refill", "AC Cleaning", "Performance Check"]
    },
    {
      icon: <FaTools className="text-3xl text-primary" />,
      title: "General Service",
      description: "Comprehensive vehicle servicing",
      price: "₹2,499",
      features: ["50-Point Check", "Fluid Top-up", "Brake Inspection"]
    },
    {
      icon: <FaCar className="text-3xl text-primary" />,
      title: "Emergency Repair",
      description: "24/7 emergency roadside assistance",
      price: "Call for Quote",
      features: ["24/7 Service", "Quick Response", "On-site Repair"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark mb-4">
            Our Premium Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional automotive services delivered to your location with 
            quality guarantees and competitive pricing.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-light rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark">{service.title}</h3>
                  <p className="text-primary font-semibold">{service.price}</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Book This Service
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;