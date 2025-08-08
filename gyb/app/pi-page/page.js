'use client';
"use client";
import { FaEnvelope } from "react-icons/fa";

export default function PIPage() {
  return (
    <div className="min-h-screen bg-[#fff2ee] py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="bg-white rounded-3xl shadow-xl max-w-5xl w-full p-8 sm:p-10 md:p-12 border border-[#e5c6be]">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Image */}
          <img
            src="/images/PI.jpg"
            alt="Dr. Shiv Shankar Kumar"
            className="w-48 h-48 rounded-full object-cover border-4 border-[#ecc8a0] shadow-lg"
          />

          {/* Info */}
          <div>
            <h1 className="text-3xl font-extrabold text-[#6a1b1a] mb-2">Dr. Shiv Shankar Kumar</h1>
            <p className="text-lg text-gray-700 font-medium mb-2">
              Professor In-Charge, GYB Club, NIT Patna
            </p>

            <a
              href="mailto:k.shiv.ce@nitp.ac.in"
              className="inline-flex items-center gap-2 bg-[#6a1b1a] text-white px-4 py-2 rounded-full shadow hover:bg-[#8b2c2b] transition"
            >
              <FaEnvelope className="text-sm" />
              Connect with our PI
            </a>
          </div>
        </div>

        {/* Paragraph Section */}
        <div className="mt-8 bg-gradient-to-r from-[#fff5f2] via-[#fbe9e7] to-[#fff5f2] p-6 rounded-2xl shadow-md border border-[#ecc8a0]">
  <p className="text-lg text-[#4a2f2a] leading-relaxed font-serif text-justify">
  
      At the core of GYB’s sustained growth and meaningful impact
  
    lies the guidance and leadership of our esteemed <strong>Professor-in-Charge, Dr. Shiv Shankar Kumar</strong>.
    <br /><br />
    A well-respected faculty member at <strong>NIT Patna</strong> and a committed mentor to socially conscious student initiatives,
    Dr. Shiv Shankar Kumar has been instrumental in shaping the club’s <em>direction, values,</em> and outreach.
    <br/><br/>
    Under his visionary mentorship, GYB has flourished as a platform that empowers youth to lead with empathy,
    responsibility, and a deep commitment to community development — always aligning our efforts with both
    institutional principles and real-world social needs.
  </p>
</div>

      </div>
    </div>
  );
}
