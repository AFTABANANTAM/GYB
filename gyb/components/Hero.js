// components/about.js
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      className="h-screen bg-cover bg-center flex flex-col justify-center items-start px-10"
      style={{ backgroundImage: "url('/images/Kid.jpg')" }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold text-white mb-4 font-serif"
      >
        Stories of Impact
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-xl text-white mb-8"
      >
        Spreading Joy Through Books
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Link
  href="/join-us"
  className="bg-white text-black font-medium px-6 py-2 rounded-full hover:bg-black hover:text-white transition cursor-pointer inline-block text-center"
>
  Join Us
</Link>
      </motion.div>
    </section>
  );
}
