import React from 'react'
import EventsCard from '@/components/EventsCard'
function page() {
  const events = [
    {
      title: "Book Fair 2025",
      description: "Join us for the annual Book Fair featuring local authors, publishers, and a wide range of books.",
      image: "/images/img1.jpg"
    },
    {
      title: "Author Meet & Greet",
      description: "Meet your favorite authors and get your books signed at this exclusive event.",
      image: "/images/img2.jpg"
    },
    {
      title: "Reading Marathon",
      description: "Participate in our 24-hour reading marathon and win exciting prizes!",
      image: "/images/img3.jpg"
    }
  ];
  return (
    <div>
      <h1 className="text-4xl text-center my-8 fraunces">Highlights from our past events</h1>
      <EventsCard events={events} />
    </div>
  )
}

export default page
