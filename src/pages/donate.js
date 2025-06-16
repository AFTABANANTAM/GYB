// src/pages/events.js
export default function Events() {
   return (
    <div className="bg-white text-gray-800 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="text-center py-16 px-6 bg-yellow-100">
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-600 mb-4">
          Donate to GYB – Get Your Book
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-700">
          Your contribution helps us put a book in every curious hand.
        </p>
      </section>

      {/* Donation Form */}
      <section className="flex justify-center items-center px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 max-w-xl w-full p-8">
          <h2 className="text-2xl font-semibold text-yellow-500 mb-4 text-center">
            Make a Donation
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-yellow-400 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-yellow-400 focus:outline-none"
            />
            <input
              type="number"
              placeholder="Donation Amount (₹)"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-yellow-400 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 rounded-md shadow-md transition duration-200"
            >
              Donate Now
            </button>
          </form>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-yellow-50">
        <h3 className="text-3xl font-bold text-center text-yellow-600 mb-10">
          What Donors Are Saying
        </h3>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { name: 'Riya A.', msg: 'Books are the best gift. Happy to support GYB!' },
            { name: 'Manoj K.', msg: 'A small donation, a big impact.' },
            { name: 'Elena S.', msg: 'A lovely initiative. Proud to contribute!' },
          ].map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white border border-yellow-200 rounded-lg p-6 max-w-sm w-full shadow-sm hover:shadow-lg transition"
            >
              <p className="italic text-gray-700">“{testimonial.msg}”</p>
              <p className="mt-4 font-medium text-yellow-600">– {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-4">
          Every Page You Fund Turns Into a Brighter Future 📖
        </h2>
        <p className="text-gray-700 mb-6">
          Help us keep the stories flowing to the ones who need them most.
        </p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-8 py-3 rounded-md shadow-md transition">
          Contribute Now
        </button>
      </section>
    </div>
  );
}
