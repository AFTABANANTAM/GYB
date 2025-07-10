'use client';
import { motion } from 'framer-motion';

export default function JoinUsPage() {
  return (
    <div className="bg-[#fdf8ef] min-h-screen px-6 py-12 text-[#2d1d15] font-sans">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Join the Movement, Be the Change
      </motion.h1>

      <div className="grid md:grid-cols-3 gap-10">
        {/* Member Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="bg-white rounded-xl shadow-2xl p-6 hover:shadow-3xl transition-all text-center"
        >
          <h2 className="text-2xl font-semibold mb-4 text-[#562c2c]">Become a Member</h2>
          <p className="mb-6 text-gray-700">
            Join a community of students passionate about creating real impact.
            Every book you donate, every smile you spark — it all starts with YOU.
            <br/>
            Below link will be active soon
          </p>
          <button className="bg-[#622932] text-white py-2 px-5 rounded-full hover:bg-[#411c21] transition">
            Join as Member
          </button>
        </motion.div>

        {/* Sponsor Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="bg-white rounded-xl shadow-2xl p-6 hover:shadow-3xl transition-all text-center"
        >
          <h2 className="text-2xl font-semibold mb-4 text-[#562c2c]">Become a Sponsor</h2>
          <p className="mb-6 text-gray-700">
            Your contribution fuels dreams. Sponsor a child’s education, a book drive, or a school kit.
            Your support writes a better future.
            <br/>
            <br/>
            Below link will be active soon
          </p>
          <button className="bg-[#622932] text-white py-2 px-5 rounded-full hover:bg-[#411c21] transition">
            Join as Sponsor
          </button>
        </motion.div>

        {/* Volunteer Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="bg-white rounded-xl shadow-2xl p-6 hover:shadow-3xl transition-all text-center"
        >
          <h2 className="text-2xl font-semibold mb-4 text-[#562c2c]">Become a Volunteer</h2>
          <p className="mb-6 text-gray-700">
            Your time is the greatest gift. From organizing events to enjoy with kids — your hands can hold hope.
            <br/>
            <br/>
            Below link will be active soon
          </p>
          <button className="bg-[#622932] text-white py-2 px-5 rounded-full hover:bg-[#411c21] transition">
            Join as Volunteer 
          </button>
        </motion.div>
      </div>
    </div>
  );
}
