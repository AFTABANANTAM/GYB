"use client"
import React, { useState } from 'react'
import TeamCard from '@/components/TeamCard'

function Page({params}) {
    const filter = params.slug;
    console.log(filter);
  const teamMembers = [
  {
     id: 1,
    name: 'Shiv Ranjan Kumar',
    filter : 'flagbearers',
    branch: 'Civil Engineering',
    year: '4th Year',
    position: 'President',
    email: 'shivk.ug22.ce@nitp.ac.in',
    image: '/images/SHIV.jpg', // place the image in /public/images/
  },
{
   id: 2,
    name: 'Ronak Dass',
    filter : 'flagbearers',
    branch: 'Computer Science and Engineering',
    year: '4th Year',
    position: 'Vice President',
    email: 'ronakd.ug22.cs@nitp.ac.in',
    image: '/images/RONAK DASS.jpg', // place the image in /public/images/
  },
{
    id: 3,
    name: 'Harshdeep',
    filter : 'flagbearers',
    branch: 'Civil Engineering',
    year: '4th Year',
    position: 'Treasurer',
    email: 'harshdeep.ug22.ce@nitp.ac.in',
    image: '/images/HARSHDEEP.jpg', // place the image in /public/images/
  },
{
    id: 4,
    name: 'Preety Rani',
    filter : 'flagbearers',
    branch: 'Electrical Engineering',
    year: '4th Year',
    position: 'Secretary',
    email: 'preetyr.ug22.ee@nitp.ac.in',
    image: '/images/PREETY RANI.jpg', // place the image in /public/images/
  },
{
    id: 5,
    name: 'Anusha Tank',
    filter : 'flagbearers',
    branch: 'Civil Engineering',
    year: '4th Year',
    position: 'PR-Coordinator',
    email: 'anushat.ug22.ce@nitp.ac.in',
    image: '/images/ANUSHA TANK.jpg', // place the image in /public/images/
  },
{
    id: 6,
    name: 'Sameer Gupta',
    filter : 'flagbearers',
    branch: 'Electronics and Communication Engineering',
    year: '4th Year',
    position: ' Technical Coordinator',
    email: 'sameerg.ug22.ec@nitp.ac.in',
    image: '/images/SAMEER GUPTA.jpg', // place the image in /public/images/

  },
{
    id: 7,
    name: 'Piyush Kumar',
    filter : 'flagbearers',
    branch: 'Electrical Engineering',
    year: '4th Year',
    position: 'Event Coordinator',
    email: 'piyushk.dd22.ee@nitp.ac.in',
    image: '/images/PIYUSH KUMAR.jpg', // place the image in /public/images/
  },
{
    id: 8,
    name: 'Manab Mondal',
    filter : 'flagbearers',
    branch: 'Electrical Engineering',
    year: '4th Year',
    position: 'Event Coordinator',
    email: 'manabm.dd22.ee@nitp.ac.in',
    image: '/images/MANAV MONDAL.jpg', // place the image in /public/images/
  },
{
    id: 9,
    name: 'Hitesh Parmar',
    filter : 'flagbearers',
    branch: 'Computer Science and Engineering',
    year: '4th Year',
    position: 'Media Coordinator',
    email: 'hiteshp.dd22.cs@nitp.ac.in',
    image: '/images/HITESH.png', // place the image in /public/images/
  },
{
    id: 10,
    name: 'Vaishnavi',
    filter : 'flagbearers',
    branch: 'CSE',
    year: '1st Year',
    position: 'Media Coordinator',
    email: 'anantam@example.com',
    image: '/images/VAISHNAVI.png', // place the image in /public/images/
  },
{
    id: 11,
    name: 'Yuvraj',
    filter : 'flagbearers',
    branch: 'Computer Science and Engineering',
    year: '4th Year',
    position: 'Outreach Coordinator',
    email: 'yuvraj.ug22.cs@nitp.ac.in',
    image: '/images/YUVRAJ.jpg', // place the image in /public/images/
  },
{
    id: 12,
    name: 'Harshit Raj',
    filter : 'flagbearers',
    branch: 'Mechanical Engineering',
    year: '4th Year',
    position: 'Logistics Coordinator',
    email: 'harshitr.ug22.me@nitp.ac.in',
    image: '/images/HARSHIT RAJ.jpg', // place the image in /public/images/
  },
{
    id: 13,
    name: 'Vikash',
    filter : 'flagbearers',
    branch: 'Computer Science and Engineering',
    year: '1st Year',
    position: 'Logistics Coordinator',
    email: 'anantam@example.com',
    image: '/images/VIKASH.jpg', // place the image in /public/images/
  },
{
    id: 14,
    name: 'Aditya Kumar',
    filter : 'flagbearers',
    branch: 'Electronics and Communication Engineering',
    year: '4th Year',
    position: 'Senior Member',
    email: 'adityak.ug22.ec@nitp.ac.in',
    image: '/images/aditya.jpeg', // place the image in /public/images/
  },
{
    id: 15,
    name: 'Garima Kushwaha',
    filter : 'flagbearers',
    branch: 'Mechanical Engineering',
    year: '4th Year',
    position: 'Senior Member',
    email: 'garimak.ug22.me@nitp.ac.in',
    image: '/images/garima.png', // place the image in /public/images/
  },
]

    // Only show members matching the filter from the URL
    const filteredMembers = teamMembers.filter(m => m.filter === filter);

    return (
        <div>
            <h1 className="mt-2 text-4xl my-4 text-center fraunces text-yellow-400 drop-shadow">
                Meet the Cool Crew
            </h1>
            <TeamCard members={filteredMembers} />
        </div>
    )
}

export default Page
