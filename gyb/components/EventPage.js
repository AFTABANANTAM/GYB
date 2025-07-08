"use client"
import React, { useEffect, useState, useRef } from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { motion, AnimatePresence } from "framer-motion";

export default function EventPage({ heading, description, images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const timeoutRef = useRef(null);

  useEffect(() => {
    setFade(false);
    timeoutRef.current = setTimeout(() => setFade(true), 50);
    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % images.length);
      }, 200);
    }, 3000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeoutRef.current);
    };
  }, [images.length]);

  const goPrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
    }, 200);
  };

  const goNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
    }, 200);
  };

  // Animation variants
  const imageVariants = {
    initial: { opacity: 0, scale: 0.96, x: 40 },
    animate: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.7, type: "spring" } },
    exit: { opacity: 0, scale: 0.96, x: -40, transition: { duration: 0.4 } }
  };

  const cardVariants = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-yellow-100 to-orange-200 p-6 flex flex-col items-center text-center"
      initial="initial"
      animate="animate"
      variants={cardVariants}
    >
      <div className="w-full max-w-4xl relative overflow-hidden rounded-3xl shadow-2xl mb-8 bg-white flex items-center justify-center" style={{ height: '24rem' }}>
        {/* MUI Swipe Buttons */}
        <div className="z-10">
          <IconButton
            onClick={goPrev}
            className="!absolute !left-4 !top-1/2 !-translate-y-1/2 z-10 !bg-yellow-400 hover:!bg-yellow-500 text-black shadow transition hover:scale-110"
            aria-label="Previous"
            size="large"
          >
            <ArrowBackIosNewIcon />
          </IconButton>
        </div>
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-contain rounded-3xl bg-yellow-100 absolute inset-0"
            style={{ zIndex: 1 }}
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          />
        </AnimatePresence>
        <div className="z-10">
          <IconButton
            onClick={goNext}
            className="!absolute !right-4 !top-1/2 !-translate-y-1/2 z-10 !bg-yellow-400 hover:!bg-yellow-500 text-black shadow transition hover:scale-110"
            aria-label="Next"
            size="large"
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </div>
        {/* Index Pointers */}
        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
        >
          {images.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              whileHover={{ scale: 1.3 }}
              className={`w-3 h-3 rounded-full border-2 border-yellow-400 transition-all duration-200 ${idx === currentIndex ? 'bg-yellow-400 scale-125' : 'bg-white'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </motion.div>
        <motion.div
          className="absolute bottom-4 right-4 bg-white/70 text-sm px-3 py-1 rounded-full shadow-md z-20"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.4 } }}
        >
          {currentIndex + 1} / {images.length}
        </motion.div>
      </div>

      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-yellow-900 mb-6 drop-shadow-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
      >
        {heading}
      </motion.h1>

      <motion.div
        className="max-w-4xl w-full bg-white/90 shadow-xl rounded-2xl p-8 text-left text-gray-800 backdrop-blur-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </motion.div>
  );
}

