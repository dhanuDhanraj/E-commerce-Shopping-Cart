import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white py-20 px-6 md:px-16">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        
        {/* Left Text Section */}
        <div className="text-center md:text-left md:w-1/2 space-y-6">
          <h1 className="text-5xl font-extrabold leading-tight">
            Your Dream Shopping Destination 🛒
          </h1>
          <p className="text-lg max-w-lg mx-auto md:mx-0">
            Discover trending gadgets, fashion & lifestyle essentials — all in one
            colorful place.
          </p>
          <button className="mt-4 px-8 py-3 bg-yellow-400 text-black font-bold text-lg rounded-full hover:bg-yellow-300 transition">
            Explore Now
          </button>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/29/05/08/blur-1868696_1280.jpg"
            alt="Shopping Illustration"
            className="rounded-2xl shadow-lg w-80 md:w-96 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Bottom Gradient Strip */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-600"></div>
    </section>
  );
};

export default Hero;
