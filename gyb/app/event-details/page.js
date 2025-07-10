
// app/event-details/page.js

import Image from "next/image";

export default function EventDetails() {
  return (
    <div className="bg-[#fdf8ef] text-[#2d1d15] font-serif px-6 pt-16 pb-10">
      {/* Heading */}
      <h1 className="text-4xl md:text-6xl text-center font-semibold mb-4">
        ABHIYANTA
      </h1>

      {/* Date and Location */}
      <p className="text-center text-lg md:text-xl mb-6 font-light">
        COMING SOON.... &nbsp; | &nbsp; NIT PATNA
      </p>

      {/* Description */}
      <p className="max-w-3xl mx-auto text-center text-base md:text-lg mb-8 font-light">
        A Celebration by Engineers, for Engineers! 🎉
It is an evening bursting with energy, talent, and celebration as GYB (Get Your Book) Club, NIT Patna proudly presents Abhiyanta – an event specially crafted for Engineers, by Engineers!
      </p>

      {/* Registration Box */}
      <div className="bg-[#4d3131] text-white max-w-md mx-auto py-6 px-8 rounded-lg shadow-lg text-center mb-12">
        <p className="text-lg mb-2">Registration is closed</p>
        <a
          href="/events"
          className="underline text-sm hover:text-gray-200 transition"
        >
          See other events
        </a>
      </div>

      {/* Event Image */}
      <div className="w-full max-w-5xl mx-auto mb-12">
        <Image
  src="/images/Events.jpg"
  alt="Event Image"
  width={800}  // Or set your required width
  height={600} // Or set your required height
  className="rounded-md shadow"
/>
      </div>

      {/* Time & Location Section */}
      <div className="max-w-3xl mx-auto mb-10">
        <h2 className="text-2xl font-semibold mb-2">Time & Location</h2>
        <p className="mb-1">Time Will Be updated soon.</p>
        <p> Location will be upated soon.</p>
      </div>

      {/* About the Event Section */}
      <div className="max-w-3xl mx-auto mb-10">
        <h2 className="text-2xl font-semibold mb-2">About the event</h2>
        <p>Enhancing skills for impactful volunteering.</p>
      </div>

      {/* Google Map */}
      <div className="w-full max-w-4xl mx-auto mb-10 h-64">
        <iframe
          src="https://www.google.com/maps?q=NIT+Patna&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Share Section (Optional) */}
      <div className="text-center text-sm text-gray-600">
        Share this event:
        <div className="flex gap-4 justify-center mt-2">
          <a href="#" className="hover:text-[#4d3131]">Facebook</a>
          <a href="#" className="hover:text-[#4d3131]">X</a>
          <a href="#" className="hover:text-[#4d3131]">LinkedIn</a>
        </div>
      </div>
    </div>
  );
}
