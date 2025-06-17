import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-[#ffff] text-[#2c1f16] font-serif">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h1 className="text-4xl font-bold mb-6">Welcome to Get Your Book</h1>
          <p className="text-lg mb-4">Your one-stop solution for all your book needs.</p>
          
        </div>
      </main>
      <Footer />

    </>
  );
}
