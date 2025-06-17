import { FaFacebookF, FaInstagram, FaLinkedin, FaXTwitter , FaYoutube } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-[#f8f3eb] text-[#2c1f16] px-6 py-10 text-sm font-serif">
      <div className="max-w-6xl mx-auto border-t border-[#2c1f16] pt-8">
        <div className="flex flex-col md:flex-row justify-between gap-12">

          {/* Left Section */}
          <div>
            <h2 className="text-2xl font-medium mb-6">Get Your Book</h2>
            <p>+91-7667874959<br/>getyourbook.club@nitp.ac.in</p>
            <p className="mt-2">National Institute of Technology Patna <br/>Ashok Rajpath, Mahendru<br/>Patna, Bihar 800005</p>
            <div className="flex space-x-4 mt-4 text-lg">
              <a target='_blank' href=""><FaFacebookF /></a>
              <a target='_blank' href="https://www.instagram.com/gyb_nitp/?igsh=M292bDFlMzM4MGVj"><FaInstagram /></a>
              <a target='_blank' href="https://www.linkedin.com/company/get-your-book-nitp/"><FaLinkedin /></a>
              <a target='_blank' href="https://www.youtube.com/@gybnitp"><FaYoutube /></a>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:text-right space-y-2">
            <a href="#" className="block hover:underline">Privacy Policy</a>
            <a href="#" className="block hover:underline">Accessibility Statement</a>
            <a href="#" className="block hover:underline">Terms & Conditions</a>
            <a href="#" className="block hover:underline">Refund Policy</a>
            <p className="mt-6 text-s">©2025 by GYB CLUB.</p>
          </div>

        </div>
      </div>
    </footer>
  );
}