import React from 'react'
import TeamCard from '@/components/TeamCard'

function page() {
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
    image: '/images/ronak.jpg', // place the image in /public/images/
  },
{
    id: 3,
    name: 'Harshdeep',
    branch: 'Civil Engineering',
    year: '4th Year',
    position: 'Treasurer',
    email: 'harshdeep.ug22.ce@nitp.ac.in',
    image: '/images/harshdeep.jpg', // place the image in /public/images/
  },
{
    id: 4,
    name: 'Preety Rani',
    branch: 'Electrical Engineering',
    year: '4th Year',
    position: 'Secretary',
    email: 'preetyr.ug22.ee@nitp.ac.in',
    image: '/images/preety.jpg', // place the image in /public/images/
  },
{
    id: 5,
    name: 'Anusha Tank',
    branch: 'Civil Engineering',
    year: '4th Year',
    position: 'PR-Coordinator',
    email: 'anushat.ug22.ce@nitp.ac.in',
    image: '/images/anusha.jpg', // place the image in /public/images/
  },
{
    id: 6,
    name: 'Sameer Gupta',
    branch: 'Electronics and Communication Engineering',
    year: '4th Year',
    position: ' Technical Coordinator',
    email: 'sameerg.ug22.ec@nitp.ac.in',
    image: '/images/sameer.jpg', // place the image in /public/images/
  },
{
    id: 7,
    name: 'Piyush Kumar',
    branch: 'Electrical Engineering',
    year: '4th Year',
    position: 'Event Coordinator',
    email: 'piyushk.dd22.ee@nitp.ac.in',
    image: '/images/Piyush.jpg', // place the image in /public/images/
  },
{
    id: 8,
    name: 'Manab Mondal',
    branch: 'Electrical Engineering',
    year: '4th Year',
    position: 'Event Coordinator',
    email: 'manabm.dd22.ee@nitp.ac.in',
    image: '/images/manab.jpg', // place the image in /public/images/
  },
{
    id: 9,
    name: 'Hitesh Parmar',
    branch: 'Computer Science and Engineering',
    year: '4th Year',
    position: 'Media Coordinator',
    email: 'hiteshp.dd22.cs@nitp.ac.in',
    image: '/images/hitesh.jpg', // place the image in /public/images/
  },
{
    id: 10,
    name: 'Vaishnavi',
    branch: 'CSE',
    year: '1st Year',
    position: 'Media Coordinator',
    email: 'anantam@example.com',
    image: '/images/vaishnavi.jpg', // place the image in /public/images/
  },
{
    id: 11,
    name: 'Yuvraj',
    branch: 'Computer Science and Engineering',
    year: '4th Year',
    position: 'Outreach Coordinator',
    email: 'yuvraj.ug22.cs@nitp.ac.in',
    image: '/images/yuvraj.jpg', // place the image in /public/images/
  },
{
    id: 12,
    name: 'Harshit Raj',
    branch: 'Mechanical Engineering',
    year: '4th Year',
    position: 'Logistics Coordinator',
    email: 'harshitr.ug22.me@nitp.ac.in',
    image: '/images/harshit.jpg', // place the image in /public/images/
  },
{
    id: 13,
    name: 'Vikash',
    branch: 'Computer Science and Engineering',
    year: '1st Year',
    position: 'Logistics Coordinator',
    email: 'anantam@example.com',
    image: '/images/vikash.jpg', // place the image in /public/images/
  },
{
    id: 14,
    name: 'Aditya Kumar',
    branch: 'Electronics and Communication Engineering',
    year: '4th Year',
    position: 'Senior Member',
    email: 'adityak.ug22.ec@nitp.ac.in',
    image: '/images/aditya.jpg', // place the image in /public/images/
  },
{
    id: 15,
    name: 'Garima Kushwaha',
    branch: 'Mechanical Engineering',
    year: '4th Year',
    position: 'Senior Member',
    email: 'garimak.ug22.me@nitp.ac.in',
    image: '/images/garima.jpg', // place the image in /public/images/
  },
]

  return (
    <div>
      <h1 className="mt-2 text-4xl my-4 text-center fraunces">Meet the Cool Crew</h1>
      <TeamCard members={teamMembers}/>
    </div>
  )
}

export default page
