'use client';
import { motion } from 'framer-motion';

export default function ContributePage() {
  return (
    <div className="bg-[#fdf8ef] min-h-screen px-6 py-12 font-sans text-[#2d1d15]">
      <motion.h1
        className="text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Ways You Can Support GYB
      </motion.h1>

      <motion.div
        className="max-w-4xl mx-auto text-lg leading-relaxed text-justify"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <p className="mb-6">
          At GYB, we believe every small effort leads to a ripple of change. Whether you’d like to empower learning through book
          contributions, extend support by sponsoring an event, or simply help us grow our outreach — your involvement means everything.
        </p>
        <p className="mb-6">
          Every contribution, regardless of its form, adds value to our cause and helps us reach more lives. You can:
        </p>

        <ul className="list-disc ml-6 mb-10 space-y-3">
          <li>📚 Donate books or learning materials</li>
          <li>🎉 Sponsor a workshop, awareness drive, or student event</li>
          <li>📢 Help us expand by spreading our story</li>
        </ul>
      </motion.div>

      {/* Contact Card */}
      <motion.div
        className="max-w-3xl mx-auto mt-12 p-6 rounded-xl shadow-lg"
        style={{ backgroundColor: '#ffe6ed' }} // light pink background
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-[#511d1d]">Reach Out to Us</h2>
        <div className="text-center space-y-2">
          <p><strong>Email:</strong> getyourbook.club@nitp.ac.in</p>
          <p><strong>Phone:</strong> +91-7667874959</p>
          <p><strong>Instagram:</strong> @gyb_nitp</p>
          <p><strong>Location:</strong> NIT Patna Campus, Bihar</p>
        </div>
      </motion.div>
    </div>
  );
}
