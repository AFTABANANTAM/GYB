"use client"
import React, { useState } from 'react'
import TeamCard from '@/components/TeamCard'

function Page() {
  const teamMembers = [
  {
     id: 1,
    name: 'Shiv Ranjan Kumar',
    branch: 'Civil Engineering',
    year: '4th Year',
    position: 'President',
    email: 'shivk.ug22.ce@nitp.ac.in',
    image: '/images/shiv.jpg', // place the image in /public/images/
  },
{
   id: 2,
    name: 'Ronak Dass',
    branch: 'Computer Science and Engineering',
    year: '4th Year',
    position: 'Vice President',
    email: 'ronakd.ug22.cs@nitp.ac.in',
    image: '/images/RONAK DASS.jpg', // place the image in /public/images/
  },
{
    id: 3,
    name: 'Harshdeep',
    branch: 'Civil Engineering',
    year: '4th Year',
    position: 'Treasurer',
    email: 'harshdeep.ug22.ce@nitp.ac.in',
    image: '/images/HARSHDEEP.jpg', // place the image in /public/images/
  },
{
    id: 4,
    name: 'Preety Rani',
    branch: 'Electrical Engineering',
    year: '4th Year',
    position: 'Secretary',
    email: 'preetyr.ug22.ee@nitp.ac.in',
    image: '/images/PREETY RANI.jpg', // place the image in /public/images/
  },
{
    id: 5,
    name: 'Anusha Tank',
    branch: 'Civil Engineering',
    year: '4th Year',
    position: 'PR-Coordinator',
    email: 'anushat.ug22.ce@nitp.ac.in',
    image: '/images/ANUSHA TANK.jpg', // place the image in /public/images/
  },
{
    id: 6,
    name: 'Sameer Gupta',
    branch: 'Electronics and Communication Engineering',
    year: '4th Year',
    position: ' Technical Coordinator',
    email: 'sameerg.ug22.ec@nitp.ac.in',
    image: '/images/SAMEER GUPTA.jpg', // place the image in /public/images/
  },
{
    id: 7,
    name: 'Piyush Kumar',
    branch: 'Electrical Engineering',
    year: '4th Year',
    position: 'Event Coordinator',
    email: 'piyushk.dd22.ee@nitp.ac.in',
    image: '/images/PIYUSH KUMAR.jpg', // place the image in /public/images/
  },
{
    id: 8,
    name: 'Manab Mondal',
    branch: 'Electrical Engineering',
    year: '4th Year',
    position: 'Event Coordinator',
    email: 'manabm.dd22.ee@nitp.ac.in',
    image: '/images/MANAV MONDAL.jpg', // place the image in /public/images/
  },
{
    id: 9,
    name: 'Hitesh Parmar',
    branch: 'Computer Science and Engineering',
    year: '4th Year',
    position: 'Media Coordinator',
    email: 'hiteshp.dd22.cs@nitp.ac.in',
    image: '/images/HITESH.png', // place the image in /public/images/
  },
{
    id: 10,
    name: 'Vaishnavi',
    branch: 'CSE',
    year: '1st Year',
    position: 'Media Coordinator',
    email: 'anantam@example.com',
    image: '/images/VAISHNAVI.png', // place the image in /public/images/
  },
{
    id: 11,
    name: 'Yuvraj',
    branch: 'Computer Science and Engineering',
    year: '4th Year',
    position: 'Outreach Coordinator',
    email: 'yuvraj.ug22.cs@nitp.ac.in',
    image: '/images/YUVRAJ.jpg', // place the image in /public/images/
  },
{
    id: 12,
    name: 'Harshit Raj',
    branch: 'Mechanical Engineering',
    year: '4th Year',
    position: 'Logistics Coordinator',
    email: 'harshitr.ug22.me@nitp.ac.in',
    image: '/images/HARSHIT RAJ.jpg', // place the image in /public/images/
  },
{
    id: 13,
    name: 'Vikash',
    branch: 'Computer Science and Engineering',
    year: '1st Year',
    position: 'Logistics Coordinator',
    email: 'anantam@example.com',
    image: '/images/VIKASH.jpg', // place the image in /public/images/
  },
{
    id: 14,
    name: 'Aditya Kumar',
    branch: 'Electronics and Communication Engineering',
    year: '4th Year',
    position: 'Senior Member',
    email: 'adityak.ug22.ec@nitp.ac.in',
    image: '/images/aditya.jpeg', // place the image in /public/images/
  },
{
    id: 15,
    name: 'Garima Kushwaha',
    branch: 'Mechanical Engineering',
    year: '4th Year',
    position: 'Senior Member',
    email: 'garimak.ug22.me@nitp.ac.in',
    image: '/images/GARIMA.png', // place the image in /public/images/
  },
]

  // Get unique positions for filter options
  const positions = ["All", ...Array.from(new Set(teamMembers.map(m => m.position)))];
  const [selectedPosition, setSelectedPosition] = useState("All");

  const filteredMembers =
    selectedPosition === "All"
      ? teamMembers
      : teamMembers.filter(m => m.position === selectedPosition);

  return (
    <div>
      <h1 className="mt-2 text-4xl my-4 text-center fraunces text-yellow-400 drop-shadow">
        Meet the Cool Crew
      </h1>
      {/* Simple Filter Dropdown */}
      <div className="flex justify-center mb-8">
        <label
          htmlFor="position-filter"
          className="mr-3 text-lg font-medium text-gray-800"
        >
          Filter by Team and Positions :
        </label>
        <select
          id="position-filter"
          className="border border-yellow-400 rounded px-4 py-2 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition"
          value={selectedPosition}
          onChange={e => setSelectedPosition(e.target.value)}
        >
          {positions.map(pos => (
            <option key={pos} value={pos}>{pos}</option>
          ))}
        </select>
      </div>
      <TeamCard  members={filteredMembers} />
    </div>
  )
}

export default Page
