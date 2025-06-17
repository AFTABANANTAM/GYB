import React from 'react'
import Image from "next/image";


export default function EventsCard({ events }) {
  return (
    <div className="space-y-8">
      {events.map((event, idx) => (
        <div
          key={event.title}
          className={`flex flex-col md:flex-row ${
            idx % 2 === 1 ? "md:flex-row-reverse" : ""
          } bg-white rounded-lg overflow-hidden shadow-lg`}
        >
          <div className="md:w-1/2 w-full relative h-64 md:h-auto min-h-[16rem]">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
              priority={idx === 0}
            />
          </div>
          <div className="md:w-1/2 w-full flex flex-col justify-center p-6 text-black">
            <h2 className="text-2xl font-bold mb-2 text-yellow-400">{event.title}</h2>
            <p className="mb-4">{event.description}</p>
            <button className="bg-yellow-400 cursor-pointer text-black px-4 py-2 rounded hover:bg-yellow-300 font-semibold w-max">
              Learn More
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
