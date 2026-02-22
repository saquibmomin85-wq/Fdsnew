import React from 'react';
import { BookingForm } from './components/BookingForm';
import { FeatureCard } from './components/FeatureCard';
import { FleetAnimation } from './components/FleetAnimation';
import { Truck, Clock, Shield, MapPin, Phone, Mail, Package, Bike, CreditCard } from 'lucide-react';
import { motion } from 'motion/react';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="FDS Delivery Services" className="h-16 w-auto object-contain" />
            <span className="text-xl font-bold text-slate-900">Delivery Services</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
            <a href="#book" className="hover:text-blue-600 transition-colors">Book Now</a>
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
          <a 
            href="#book"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Book Now
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-slate-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616432043562-3671ea2e5242?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Fast, Reliable Delivery <br />
              <span className="text-blue-400">Right to Your Doorstep</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl"
            >
              From small parcels to heavy items, FDS ensures your packages arrive safely and on time. Book your delivery in seconds.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#book" className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2">
                <Truck className="w-5 h-5" />
                Start Booking
              </a>
              <a href="#services" className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors">
                Learn More
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fleet Animation */}
      <FleetAnimation />

      {/* Booking Section */}
      <section id="book" className="py-20 px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Book Your Delivery</h2>
            <p className="text-slate-600">Fill out the form below and we'll handle the rest.</p>
          </div>
          <BookingForm />
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose FDS?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We provide top-tier logistics solutions tailored to your needs, ensuring speed, safety, and reliability.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Real-Time Tracking"
              description="Monitor your package's journey from pickup to delivery with our advanced tracking system."
              icon={MapPin}
            />
            <FeatureCard 
              title="Secure Handling"
              description="Your items are precious. We treat every package with the utmost care and security."
              icon={Shield}
            />
            <FeatureCard 
              title="Express Delivery"
              description="Need it there fast? Our optimized routes ensure the quickest delivery times possible."
              icon={Clock}
            />
            <FeatureCard 
              title="Flexible Fleet"
              description="From motorbikes for documents to vans for heavy items, we have the right vehicle for the job."
              icon={Bike}
            />
            <FeatureCard 
              title="Multiple Payment Options"
              description="Pay your way. We accept cards, payment links, and cash on delivery for your convenience."
              icon={CreditCard}
            />
            <FeatureCard 
              title="24/7 Support"
              description="Our dedicated support team is always available to assist you with your delivery needs."
              icon={Phone}
            />
          </div>
        </div>
      </section>

      {/* Contact/Footer */}
      <footer id="contact" className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo.svg" alt="FDS Delivery Services" className="h-12 w-auto object-contain" />
                <span className="text-xl font-bold text-white">Delivery Services</span>
              </div>
              <p className="text-slate-400 max-w-sm">
                Professional delivery services for businesses and individuals. Fast, secure, and reliable logistics solutions.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="#book" className="hover:text-blue-400 transition-colors">Book Delivery</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="https://wa.me/971554185245" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                    +971 55 418 5245 (WhatsApp)
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:flipkartdeliveryservices1@gmail.com" className="hover:text-blue-400 transition-colors">
                    flipkartdeliveryservices1@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Al Qous industrial Area, Dubai</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
            &copy; {new Date().getFullYear()} FDS Delivery Services. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
