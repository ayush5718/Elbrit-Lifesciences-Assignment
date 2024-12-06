'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ProductBottle, Pill } from './icons/ProductIcons';

const FloatingPill = ({ className = '', delay = 0, x = 0, y = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay }}
    className={`absolute ${className}`}
  >
    <motion.div
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
        rotate: [0, 10, 0],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        repeatType: "reverse"
      }}
    >
      <Pill className="w-12 h-12 md:w-16 md:h-16" />
    </motion.div>
  </motion.div>
);

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#E3F2F9] via-[#E3F2F9]/50 to-white min-h-[90vh] flex items-center">
      {/* Background Decorative Elements */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ opacity }}
      >
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FFE4B8]/20 rounded-full blur-3xl"
          style={{ y: y1 }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#E3F2F9]/40 rounded-full blur-3xl"
          style={{ y: y2 }}
        />
      </motion.div>

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block text-sm font-medium text-[#1B4B66] mb-4 tracking-wider uppercase bg-white/50 px-4 py-2 rounded-full"
            >
              Premium Quality
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B4B66] mb-6 leading-tight"
            >
              Your Daily Dose <br />of Wellness
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-gray-600 mb-8 max-w-lg"
            >
              Premium quality vitamins and supplements for your optimal health and vitality. 
              Enhance your daily routine with our scientifically formulated products.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <button className="group bg-[#1B4B66] text-white px-8 py-3 rounded-full hover:bg-[#1B4B66]/90 transition-all duration-300 relative overflow-hidden">
                <span className="relative z-10">Shop Now</span>
                <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
              <button className="group border-2 border-[#1B4B66] text-[#1B4B66] px-8 py-3 rounded-full hover:bg-[#1B4B66]/10 transition-all duration-300">
                <span className="group-hover:translate-x-2 inline-block transition-transform duration-300">
                  Learn More
                </span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Product Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10"
            >
              <ProductBottle className="w-full h-auto max-w-md mx-auto" />
            </motion.div>

            {/* Floating Pills */}
            <FloatingPill className="top-0 right-0" delay={0.4} />
            <FloatingPill className="bottom-1/4 right-1/4" delay={0.6} />
            <FloatingPill className="top-1/3 left-0" delay={0.8} />

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-radial from-[#FFE4B8]/20 via-transparent to-transparent blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
