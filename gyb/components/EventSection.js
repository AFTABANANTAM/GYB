"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function EventSection() {
  return (
    <motion.section
      className="bg-[#fdf8ef] px-6 py-12 text-[#2d1d15] font-sans"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Side */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-6 font-serif">Upcoming Events</h2>
          <h3 className="text-3xl font-semibold mb-3 font-serif">
            ABHIYANTA
          </h3>
          <p className="mb-1 text-black/90">Time will be updated soon.</p>
          <p className="mb-6 text-black/70">
            A Celebration for ENGINEERS BY THE ENGINEERS
          </p>
          <Link
  href="/event-details"
  className="bg-[#4c2e28] text-white px-6 py-2 rounded-md hover:bg-[#3a211d] transition cursor-pointer inline-block text-center"
>
  Details
</Link>
        </div>

        {/* Right Side */}
        <div className="flex-1">
          <Image
            src="/images/Events.jpg"
            alt="Volunteer Training Workshop"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </motion.section>
  );
}
