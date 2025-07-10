'use client';
import React from 'react';
import Link from 'next/link';
export default function ImpactfulProjects() {
const projects = [
    {
        title: 'Book Donation Drives',
        tagline: 'Spreading Knowledge and Joy',
    },
    {
        title: 'Awareness Campaigns',
        tagline: 'Educating Communities',
    },
    {
        title: 'Entertainment Events',
        tagline: 'Supporting Our Cause',
    },
    {
        title: 'Stationery Distribution',
        tagline: 'Enabling Learning',
    },
];

  return (
    <div className="bg-[#fdf8ef] px-6 py-12 font-sans text-[#2d1d15]">
      <h2 className="text-3xl font-bold mb-2">Our Impactful Projects</h2>
      <p className="mb-1 text-sm">Creating Lasting Change</p>
      <p className="text-sm mb-6 max-w-2xl">
        Explore our ongoing or upcoming projects to see the difference we&apos;re making.
        Contact us to learn how you can be part of our mission.
      </p>
      <div className="divide-y divide-[#2d1d15] border-t border-b border-[#2d1d15]">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-6"
          >
            <span className="text-lg">{proj.title}</span>
            <span className="text-xs text-right">{proj.tagline}</span>
          </div>
        ))}
      </div>
      <Link
  href="/join-us"
  className="inline-block mt-6 px-4 py-2 bg-[#6a1b1a] text-white text-sm rounded-full hover:bg-[#8b2c2b] transition cursor-pointer text-center"
>
  Get Involved As A Volunteer
</Link>
    </div>
  );
}
