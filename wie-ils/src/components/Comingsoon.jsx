import React from 'react';

function Comingsoon() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-center px-4">
          {/* Adjust text size and spacing for mobile */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
            We're Still
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-white">
            Working On Our Website.
          </h2>
          <p className="text-base sm:text-lg mb-8 text-white">
            We are going to launch our website Very Soon.
          </p>
          {/* Button with responsive padding and hover effect */}
          <button className="bg-[#532160] text-white py-2 px-6 sm:px-8 rounded-full hover:bg-[#28112E] transition duration-300">
            Stay Tuned.
          </button>
        </div>
      </div>
    </>
  );
}

export default Comingsoon;