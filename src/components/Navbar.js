// src/components/Navbar.js
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#f8f3eb] text-[#2c1f16] font-serif text-base shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Left: Logo + Title */}
        <div className="flex items-center space-x-3">
          <Image src="/GYBlogo.png" alt="GYB" width={45} height={45} />
          <span className="text-xl font-medium">Get Your Book</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/events" className="hover:underline">Events</Link>
          <Link href="/members" className="hover:underline">Members</Link>
        </div>

        {/* Donate Button */}
        <div className="hidden md:block">
          <Link href="/donate">
            <button className="border border-[#2c1f16] px-4 py-1 rounded hover:bg-[#2c1f16] hover:text-[#f8f3eb] transition">
              Donate Us
            </button>
          </Link>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-sm">
          <Link href="/" className="block" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/events" className="block" onClick={() => setMenuOpen(false)}>Events</Link>
          <Link href="/members" className="block" onClick={() => setMenuOpen(false)}>Members</Link>
          <Link href="/donate" className="inline-block mt-2">
            <button className="w-full border border-[#2c1f16] px-4 py-1 rounded hover:bg-[#2c1f16] hover:text-[#f8f3eb] transition">
              Donate Us
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
