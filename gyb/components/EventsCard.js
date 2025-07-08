"use client"
import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { motion } from "framer-motion";

export default function EventsCard({ events }) {
  // Animation variants for card entrance
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.0 } }
  };

  // Animation for image hover
  const imageHover = {
    scale: 0.8,
    boxShadow: "0 8px 32px 0 rgba(255, 193, 7, 0.18)"
  };

  return (
    <div className="flex flex-col gap-12 w-full">
      {events.map((event, idx) => {
        const gradient =
          idx % 2 === 1
            ? "bg-gradient-to-bl from-yellow-50 via-white to-yellow-100"
            : "bg-gradient-to-br from-yellow-50 via-white to-yellow-100";

        return (
          <motion.div
            key={event.title}
            className={`flex flex-col md:flex-row items-stretchstretch ${
              idx % 2 === 1 ? "md:flex-row-reverse" : ""
            } w-full bg-white rounded-2xl overflow-hidden shadow-xl min-h-[350px]`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={cardVariants}
          >
            
            <motion.div
              className="md:w-1/2 w-full flex items-stretch "
              whileHover={imageHover}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
            >
              <div className="relative w-full">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-full"
                  priority={idx === 0}
                />
              </div>
            </motion.div>

            <div className={`md:w-1/2 w-full flex flex-col justify-center p-8 md:p-12 gap-4 ${gradient}`}>
              <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-500 mb-2">{event.title}</h2>
              <div
                className="mb-4 text-base md:text-lg text-gray-800 font-serif leading-relaxed"
                dangerouslySetInnerHTML={{ __html: event.description }}
              />
              {!event.open && (
                <Link href={`/post/${event.folder}`} passHref>
                  <button className="bg-yellow-400 cursor-pointer text-black px-6 py-3 rounded-lg hover:bg-yellow-300 font-bold shadow transition w-max mt-2">
                    Learn More
                  </button>
                </Link>
              )}
              {event.open && (
                <div className="mt-2">
                  <a
                    href="#"
                    target="_blank"
                    className="inline-block bg-purple-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200 shadow"
                  >
                    Register Now
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  )
}
