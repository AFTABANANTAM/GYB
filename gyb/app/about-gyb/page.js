'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutGYBPage() {
  return (
    <div className="bg-[#fdf8ef] min-h-screen px-6 py-12 text-[#2d1d15] font-sans">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-serif font-bold mb-10 text-center"
      >
        About Get Your Book (GYB)
      </motion.h1>

      <motion.section
        className="mb-16 text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-lg md:text-xl leading-relaxed text-justify font-[500] tracking-wide text-[#2d1d15]">
  Get Your Book (GYB), founded in 2017 at NIT Patna, is a student-driven social initiative that believes in the power of books
  to inspire change, ignite curiosity, and transform lives. With a passionate mission to make education accessible for all,
  GYB organizes impactful activities such as book donation drives, awareness campaigns, mentorship programs, and learning
  workshops for underprivileged children and communities.

  <br /><br />

  Our club operates with a simple yet powerful vision: to bridge the gap between potential and opportunity. We collect used
  or new books from donors and redirect them to students who need them the most—whether in rural schools, orphanages, or shelters.
  But our work doesn&apos;t stop at books. Through regular volunteering, community outreach, and partnerships with NGOs and academic leaders,
  we aim to foster a culture of empathy, literacy, and social responsibility among students at NIT Patna and beyond.

  <br /><br />

  Over the years, GYB has grown from a small group of dreamers into a vibrant movement of changemakers dedicated to spreading joy,
  knowledge, and hope—one book at a time.
</p>
      </motion.section>


      <motion.section
        className="mb-20 flex justify-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <div className="max-w-3xl bg-white rounded-xl shadow-2xl p-8 flex flex-col md:flex-row items-center gap-8">
          <Image
            src="/images/PI.jpg"
            alt="Professor In-Charge"
            width={160}
            height={160}
            className="w-40 h-40 rounded-full object-cover border-4 border-[#2d1d15] shadow-md"
          />
          <div>
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
              Dr. SHIV SHANKAR KUMAR
              <a
                href="mailto:k.shiv.ce@nitp.ac.in"
                className="ml-2 text-[#2d1d15] hover:text-[#794d2b]"
                title="Send Email"
              >
                {/* Email SVG Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm2 0v.01L12 13l8-8.99V4H4zm16 2.41l-7.29 7.29a1 1 0 0 1-1.42 0L4 6.41V20h16V6.41z"/>
                </svg>
              </a>
            </h2>
            <h3 className="text-md font-medium text-gray-700 mb-2">Meet our Professor In-Charge </h3>
            <p className="text-gray-600">
              Dr. Shiv Shankar Kumar, a dedicated educator from NIT Patna, serves as the guiding force behind GYB Club&apos;s mission. With a passion for community empowerment, Dr. Kumar leads the club in celebrating festivals with underprivileged children, organizing book collection drives, and hosting inclusive fun events. His strategic leadership, mentorship, and commitment to social impact drive the club&apos;s efforts to create positive change and brighter futures for all.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="mb-10 flex justify-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
      >
        <div className="max-w-3xl bg-[#fff9f3] border-2 border-[#ecc8a0] rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-xl hover:shadow-2xl transition">
          <Image
  src="/images/SHIV.jpg"
  alt="Club President"
  width={160} // corresponds to w-40
  height={160} // corresponds to h-40
  className="rounded-full object-cover border-4 border-[#ecc8a0] shadow-lg"
/>

          <div>
            <h2 className="text-2xl font-bold text-[#2d1d15] mb-2">SHIV RANJAN KUMAR</h2>
            <h3 className="text-md font-medium text-[#794d2b] mb-2">President, Get Your Book</h3>
            <p className="text-[#4b3c2d]">
              Led GYB with a strong belief in the transformative power of books,
              our president leadership bring GYB to a different level — a bridge of opportunity and inspiration.
            </p>
          </div>
        </div>
      </motion.section>


    </div>
  );
}
