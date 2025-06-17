import React from 'react'
import TeamCard from '@/components/TeamCard'

function page() {
  const teamMembers = [
  {
    name: "Ayush Bhardwaj",
    branch: "Computer Science",
    year: "3rd Year",
    position: "Tech Lead",
    image: "/images/img1.jpg",
    email: "abc.ug.abc@gmail.com"
  },
  {
    name: "Aman Chaudhary",
    branch: "Electrical Engineering",
    year: "2nd Year",
    position: "Event Coordinator",
    image: "/images/img2.jpg",
    email: "abc.ug.abc@gmail.com"
  },
  {
    name: "Anantam",
    branch: "Computer Science",
    year: "3rd Year",
    position: "Tech Lead",
    image: "/images/img3.jpg",
    email: "abc.ug.abc@gmail.com"
  },
  {
    name: "Shiv Chaudhary",
    branch: "Electrical Engineering",
    year: "2nd Year",
    position: "Event Coordinator",
    image: "/images/img4.jpg",
    email: "abc.ug.abc@gmail.com"
  },
  {
    name: "Member Bhardwaj",
    branch: "Computer Science",
    year: "3rd Year",
    position: "Tech Lead",
    image: "/images/img5.jpg",
    email: "abc.ug.abc@gmail.com"
  },
  {
    name: "Aman Chaudhary",
    branch: "Electrical Engineering",
    year: "2nd Year",
    position: "Event Coordinator",
    image: "/images/img2.jpg",
    email: "abc.ug.abc@gmail.com"
  },
];

  return (
    <div>
      <h1 className="mt-2 text-4xl my-4 text-center fraunces">Meet the Cool Crew</h1>
      <TeamCard members={teamMembers}/>
    </div>
  )
}

export default page
