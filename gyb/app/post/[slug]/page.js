"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg"
];

export default function PostPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleManualSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Event Title */}
      <div className="text-center py-6">
        <h1 className="text-4xl font-bold text-yellow-500">EventX</h1>
      </div>

      {/* Image Slider */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        <Image
          src={images[currentIndex]}
          alt={`Event Image ${currentIndex + 1}`}
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-700"
          priority
        />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => handleManualSlide(i)}
              className={`w-3 h-3 rounded-full ${
                i === currentIndex ? "bg-yellow-500" : "bg-black"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Event Description */}
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <h2 className="text-3xl font-bold text-yellow-500">Welcome to EventX</h2>
        <p className="text-lg">
          EventX is not just another college event – it's a vibrant celebration of creativity,
          talent, and community. Held annually, the event brings together passionate individuals
          from diverse backgrounds to share, perform, and engage in unforgettable moments.
        </p>
        <Image
          src="/images/img1.jpg"
          alt="Event Interaction"
          width={800}
          height={400}
          className="rounded-lg shadow-lg mx-auto"
        />
        <p className="text-lg">
          From electrifying performances and insightful talks to fun-filled activities and art
          displays, EventX has something for everyone. The energy, the vibe, and the memories
          created here stay with you forever.
        </p>
        <Image
          src="/images/img2.jpg"
          alt="Event Crowd"
          width={800}
          height={400}
          className="rounded-lg shadow-lg mx-auto"
        />
        <p className="text-lg">
          Join us and be part of an experience where passion meets purpose, and where every
          moment is worth capturing.
        </p>
      </div>
    </div>
  );
}
