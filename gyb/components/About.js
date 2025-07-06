'use client';
import { motion } from 'framer-motion';

export default function InspiringStory() {
  return (
    <div className="bg-[#fdf8ef] px-6 py-12 text-[#2d1d15] font-sans">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-semibold mb-6 font-serif">
          Our Inspiring Story
        </h1>
        <p className="text-lg leading-relaxed mb-8">
          Get Your Book (GYB), established in 2017, is a vibrant social club at NIT Patna dedicated to fostering personal growth, social responsibility, and community engagement through a diverse range of activities...
        </p>
        <hr className="border-[#2d1d15] mb-6" />
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <p className="text-sm text-gray-700 max-w-lg">
            At GYB, we believe every book has the power to transform lives...
          </p>
          <button className="bg-[#752e2e] text-white rounded-full px-6 py-2 text-sm hover:bg-[#5f2323] transition">
            Discover More
          </button>
        </div>
      </motion.div>
    </div>
  );
}
