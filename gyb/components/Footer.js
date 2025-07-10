import { FaFacebookF, FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-[#f8f3eb] text-[#2c1f16] px-6 py-10 text-sm font-serif">
      <div className="max-w-6xl mx-auto border-t border-[#2c1f16] pt-8">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Left Section */}
          <div>
            <h2 className="text-2xl font-medium mb-6">Get Your Book</h2>
            <p>+91-7667874959<br />getyourbook.club@nitp.ac.in</p>
            <p className="mt-2">National Institute of Technology Patna <br />Ashok Rajpath, Mahendru<br />Patna, Bihar 800005</p>
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
<<<<<<< HEAD
            <p className="text-lg mt-2">Developed by <span className='underline font-bold'>Ayush</span> and <span className='underline font-bold'>Anantam</span></p>
=======
            <p className="text-md mt-4">
              <span className="inline-block px-3 py-1 bg-[#f1e5d1] rounded-full font-bold text-[#2c1f16] shadow-md">
                Developed by <span className="underline text-lg">Ayush</span> & <span className="underline text-lg">Anantam</span>
              </span>
            </p>

>>>>>>> d559044a39be56b142f656adec6129cd26a8533e
          </div>
        </div>
      </div>
    </footer>
  );
}