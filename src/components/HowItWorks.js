import React, { useState, useEffect, useRef } from 'react';
import { FaMobileAlt, FaCalendarCheck, FaTools, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const steps = [
    {
      icon: <FaMobileAlt className="text-3xl text-white" />,
      step: "01",
      title: "Book Online",
      description: "Select your service and schedule an appointment through our website or app",
      details: [
        "Choose from 20+ services",
        "Select preferred date & time",
        "Get instant confirmation"
      ]
    },
    {
      icon: <FaCalendarCheck className="text-3xl text-white" />,
      step: "02",
      title: "Confirm Schedule",
      description: "Our expert will confirm your booking and arrive at your preferred location",
      details: [
        "Expert assigned within 30 mins",
        "Receive mechanic details",
        "Track arrival in real-time"
      ]
    },
    {
      icon: <FaTools className="text-3xl text-white" />,
      step: "03",
      title: "Get Service",
      description: "Professional service performed at your home, office, or preferred location",
      details: [
        "Professional equipment",
        "Transparent process",
        "Live service updates"
      ]
    },
    {
      icon: <FaCheckCircle className="text-3xl text-white" />,
      step: "04",
      title: "Quality Check",
      description: "Thorough quality inspection and digital service report delivered",
      details: [
        "50-point quality check",
        "Digital service report",
        "6-month warranty"
      ]
    }
  ];

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start step-by-step animation
          const timer = setInterval(() => {
            setActiveStep(prev => {
              if (prev >= steps.length - 1) {
                clearInterval(timer);
                return prev;
              }
              return prev + 1;
            });
          }, 600); // Delay between each step animation

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Manual step navigation
  const goToStep = (stepIndex) => {
    setActiveStep(stepIndex);
  };

  return (
    <section id="how-it-works" ref={sectionRef} className="py-20 bg-gradient-to-br from-dark to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Simple, convenient, and professional - get your car serviced in 4 easy steps
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex justify-between items-center relative">
            {/* Progress Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-700 -translate-y-1/2 -z-10">
              <div 
                className="h-full bg-primary transition-all duration-1000 ease-out"
                style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              ></div>
            </div>
            
            {/* Step Indicators */}
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => goToStep(index)}
                className={`flex flex-col items-center transition-all duration-300 ${
                  index <= activeStep ? 'scale-110' : 'scale-100'
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 transition-all duration-500 ${
                  index <= activeStep 
                    ? 'bg-primary border-primary shadow-lg shadow-primary/50' 
                    : 'bg-transparent border-gray-600'
                }`}>
                  {index <= activeStep && (
                    <div className="text-white font-bold text-sm">
                      {step.step}
                    </div>
                  )}
                </div>
                <span className={`mt-2 text-sm font-medium transition-all duration-300 ${
                  index <= activeStep ? 'text-white' : 'text-gray-500'
                }`}>
                  Step {index + 1}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Steps Visualization */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl border-2 transition-all duration-700 transform ${
                  index === activeStep
                    ? 'border-primary bg-primary/10 scale-105 shadow-2xl shadow-primary/20'
                    : index < activeStep
                    ? 'border-green-500 bg-green-500/5 scale-100 opacity-80'
                    : 'border-gray-700 bg-gray-800/50 scale-95 opacity-50'
                } ${
                  isVisible ? 'translate-x-0' : '-translate-x-10'
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                    index === activeStep
                      ? 'bg-primary scale-110'
                      : index < activeStep
                      ? 'bg-green-500 scale-100'
                      : 'bg-gray-700 scale-90'
                  }`}>
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">{step.title}</h3>
                      {index === activeStep && (
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                          <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                          <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                        </div>
                      )}
                    </div>
                    <p className="text-gray-300 mb-3">{step.description}</p>
                    
                    {/* Step Details */}
                    <div className={`space-y-2 transition-all duration-500 ${
                      index === activeStep ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}>
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Demo */}
          <div className="sticky top-24">
            <div className="bg-gray-800 rounded-2xl p-8 border-2 border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-center">Interactive Demo</h3>
              
              {/* Step Content */}
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <div className="text-6xl font-bold text-primary mb-2">
                    {steps[activeStep].step}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    {steps[activeStep].title}
                  </h4>
                  <p className="text-gray-300">
                    {steps[activeStep].description}
                  </p>
                </div>

                {/* Step-specific Content */}
                {activeStep === 0 && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="bg-gray-700 rounded-lg p-4">
                      <h5 className="font-semibold mb-3">Book Your Service</h5>
                      <div className="space-y-3">
                        <select className="w-full bg-gray-600 border border-gray-500 rounded px-3 py-2 text-white">
                          <option>Select Service</option>
                          <option>Oil Change</option>
                          <option>Battery Service</option>
                          <option>AC Service</option>
                        </select>
                        <input 
                          type="datetime-local" 
                          className="w-full bg-gray-600 border border-gray-500 rounded px-3 py-2 text-white"
                        />
                        <button className="w-full bg-primary hover:bg-blue-700 text-white py-2 rounded font-semibold">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 1 && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="bg-gray-700 rounded-lg p-4">
                      <h5 className="font-semibold mb-3">Confirmation Details</h5>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Mechanic:</span>
                          <span className="text-primary">Raj Kumar</span>
                        </div>
                        <div className="flex justify-between">
                          <span>ETA:</span>
                          <span className="text-secondary">30 minutes</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Service:</span>
                          <span>Oil Change</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 2 && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="bg-gray-700 rounded-lg p-4">
                      <h5 className="font-semibold mb-3">Service in Progress</h5>
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span>Status:</span>
                          <span className="text-secondary">In Progress</span>
                        </div>
                        <div className="w-full bg-gray-600 rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full transition-all duration-1000"
                            style={{ width: '75%' }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-400 text-center">
                          75% Complete
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 3 && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="bg-gray-700 rounded-lg p-4">
                      <h5 className="font-semibold mb-3">Service Completed</h5>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Quality Score:</span>
                          <span className="text-green-500">98%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Time Taken:</span>
                          <span>45 minutes</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Warranty:</span>
                          <span className="text-secondary">6 Months</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-4">
                  <button
                    onClick={() => goToStep(activeStep - 1)}
                    disabled={activeStep === 0}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                      activeStep === 0
                        ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                        : 'bg-gray-700 hover:bg-gray-600 text-white'
                    }`}
                  >
                    <FaArrowRight className="rotate-180" />
                    <span>Previous</span>
                  </button>
                  
                  <button
                    onClick={() => goToStep(activeStep + 1)}
                    disabled={activeStep === steps.length - 1}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                      activeStep === steps.length - 1
                        ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                        : 'bg-primary hover:bg-blue-700 text-white'
                    }`}
                  >
                    <span>Next</span>
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-white text-dark rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience Elite Service?</h3>
            <p className="text-gray-600 mb-6">
              Join 2,500+ satisfied customers who trust AutoElite for their car care needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all transform hover:scale-105">
                Book Your Service Now
              </button>
              <button className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary hover:text-white transition-all transform hover:scale-105">
                Call: +91-9876543210
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;