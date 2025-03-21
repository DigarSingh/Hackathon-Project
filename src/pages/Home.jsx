import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import '../assets/styles/global.css';

// Import icons (You'll need to install a package like react-icons)
// npm install react-icons --save
import { FaLeaf, FaTree, FaAward, FaChartLine, FaHandHoldingHeart } from "react-icons/fa";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden text-gray-900 bg-gradient-to-b from-green-50 to-green-100">
      {/* Hero Section with Parallax Effect */}
      <section className="relative flex items-center justify-center h-screen overflow-hidden">
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1920')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.7)",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        ></div>
        
        <div className="relative z-10 max-w-6xl px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold text-white md:text-8xl drop-shadow-lg"
          >
            GreenWaves
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-6 text-xl font-light text-white md:text-3xl drop-shadow-md"
          >
            Creating ripples of environmental impact, one action at a time.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <NavLink to="/register">
              <button className="px-8 py-4 mt-10 text-lg font-bold text-white transition duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-green-500 to-green-600 hover:shadow-xl hover:scale-105">
                Join The Movement
              </button>
            </NavLink>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute transform -translate-x-1/2 bottom-10 left-1/2"
          >
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="mb-6 text-3xl font-bold text-green-800">"The Earth does not belong to us; we belong to the Earth."</h2>
          <p className="text-xl leading-relaxed text-gray-700">
            At GreenWaves, we believe every small action creates ripples of change. 
            Our mission is to empower individuals and communities to make sustainable choices 
            that collectively transform our planet's future.
          </p>
        </motion.div>
      </section>

      {/* Stats Section - Animated counting */}
      <section className="py-16 text-white bg-green-700">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6"
            >
              <h3 className="mb-2 text-5xl font-bold">10+</h3>
              <p className="text-xl">Trees Planted</p>
            </motion.div>
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6"
            >
              <h3 className="mb-2 text-5xl font-bold">50+</h3>
              <p className="text-xl">Active Users</p>
            </motion.div>
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6"
            >
              <h3 className="mb-2 text-5xl font-bold">1+</h3>
              <p className="text-xl">Countries Reached</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section with Icons and Hover Effects */}
      <section className="px-4 py-24 bg-white">
        <div className="mx-auto max-w-7xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-4xl font-bold text-center text-gray-900"
          >
            Our Innovative Ecosystem
          </motion.h2>
          
          <div className="grid gap-10 md:grid-cols-3">
            {/* Feature 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 transition-all duration-300 transform shadow-lg bg-gradient-to-br from-green-50 to-green-100 rounded-2xl hover:shadow-xl hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 text-white bg-green-600 rounded-full">
                <FaTree className="text-2xl" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-center text-green-800">AI-Powered Verification</h3>
              <p className="text-center text-gray-700">
                Our cutting-edge AI technology verifies your environmental actions, 
                ensuring authenticity and building trust in our ecosystem.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 transition-all duration-300 transform shadow-lg bg-gradient-to-br from-green-50 to-green-100 rounded-2xl hover:shadow-xl hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 text-white bg-green-600 rounded-full">
                <FaAward className="text-2xl" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-center text-green-800">Gamified Experience</h3>
              <p className="text-center text-gray-700">
                Turn sustainability into a rewarding journey. Complete challenges, 
                earn points, and unlock badges as you progress on your green path.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-8 transition-all duration-300 transform shadow-lg bg-gradient-to-br from-green-50 to-green-100 rounded-2xl hover:shadow-xl hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 text-white bg-green-600 rounded-full">
                <FaChartLine className="text-2xl" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-center text-green-800">Eco-Card & Rewards</h3>
              <p className="text-center text-gray-700">
                Build your sustainability score and redeem exclusive eco-friendly rewards 
                from our network of responsible business partners.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="px-4 py-20 bg-green-50">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16 text-4xl font-bold text-center text-gray-900"
          >
            Voices of Change
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-10 bg-white shadow-xl rounded-2xl"
          >
            <p className="mb-6 text-xl italic text-gray-700">
              "The most profound joy comes from leading with purpose. GreenWaves has given 
              me a platform to translate my environmental passion into measurable impact. 
              Every action I take ripples outward, inspiring others in my community."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 mr-4 bg-green-200 rounded-full"></div>
              <div>
                <h4 className="font-bold">Vansh Goyal</h4>
                <p className="text-gray-600">Community Leader, Dehradun</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section with Animated Background */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-800"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1920')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
            opacity: 0.2
          }}
        ></div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl px-4 mx-auto text-center"
        >
          <h2 className="mb-8 text-4xl font-bold text-white md:text-5xl">
            "In nature's economy, the currency is not money, it's life."
          </h2>
          <p className="mb-10 text-xl text-white opacity-90">
            Join thousands of changemakers who are rewriting our planet's future.
            Your journey starts with a single step.
          </p>
          <NavLink to="/register">
            <button className="px-10 py-4 text-lg font-bold text-green-700 transition duration-300 transform bg-white rounded-full shadow-xl hover:shadow-2xl hover:scale-105">
              Begin Your Green Journey
            </button>
          </NavLink>
        </motion.div>
      </section>

      {/* Footer with animated waves */}
      <footer className="relative pt-20 pb-10 overflow-hidden text-white bg-green-900">
        <div className="container relative z-10 px-4 mx-auto">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold">GreenWaves</h2>
            <p className="max-w-lg mx-auto opacity-75">
              Together, we can turn the tide on climate change.
              One wave of action at a time.
            </p>
          </div>
          
          <div className="flex justify-center mb-8 space-x-6">
            <FaLeaf className="text-2xl transition-colors cursor-pointer hover:text-green-400" />
            <FaHandHoldingHeart className="text-2xl transition-colors cursor-pointer hover:text-green-400" />
            <FaTree className="text-2xl transition-colors cursor-pointer hover:text-green-400" />
          </div>
          
          <p className="text-sm text-center opacity-75">
            © {new Date().getFullYear()} GreenWaves. All rights reserved.
          </p>
        </div>
        
        {/* Animated wave effect */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto opacity-10">
            <path fill="#ffffff" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,186.7C960,213,1056,235,1152,224C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </footer>
    </div>
  );
};

export default Home;