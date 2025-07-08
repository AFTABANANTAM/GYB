import React from 'react'
import { FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

function TeamCard({ members }) {
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center px-5">
            {members.map((member, idx) => (
                <motion.div
                    key={idx}
                    className="bg-yellow-300 py-15 rounded-2xl shadow-xl p-6 text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl w-full max-w-sm"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={cardVariants}
                    whileHover={{ scale: 1.07, boxShadow: "0 8px 32px 0 rgba(255, 193, 7, 0.25)" }}
                >
                    <div className="flex justify-center mb-4">
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-24 h-24 rounded-full border-4 border-white object-cover shadow-md"
                        />
                    </div>
                    <h2 className="text-xl font-bold text-black my-2">{member.name}</h2>
                    <p className="text-sm text-black/80 my-4">{member.branch}</p>
                    <p className="text-sm text-black/70 my-4">{member.year}</p>
                    <div className="mt-3 font-medium text-black my-4">{member.position}</div>
                    <p className='flex items-center gap-2 justify-center my-4'><FaEnvelope />{member.email}</p>
                </motion.div>
            ))}
        </div>
    )
}

export default TeamCard
