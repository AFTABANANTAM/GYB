import React from 'react'
import Image from "next/image";
import Link from 'next/link';

export default function EventsCard({ events }) {
  return (
    <div className="flex flex-col gap-12 w-full">
      {events.map((event, idx) => {
        const gradient =
          idx % 2 === 1
            ? "bg-gradient-to-bl from-yellow-50 via-white to-yellow-100" 
            : "bg-gradient-to-br from-yellow-50 via-white to-yellow-100"; 

        return (
          <div
            key={event.title}
            className={`flex flex-col md:flex-row ${
              idx % 2 === 1 ? "md:flex-row-reverse" : ""
            } w-full bg-white rounded-2xl overflow-hidden shadow-xl min-h-[350px]`}
          >
            {/* Image section */}
            <div className="md:w-1/2 w-full h-[40vh] md:h-[60vh] relative">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
                priority={idx === 0}
              />
            </div>
            {/* Text section with dynamic gradient */}
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
          </div>
        );
      })}
    </div>
  )
}
