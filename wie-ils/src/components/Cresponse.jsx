import React from 'react';

function Cresponse() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-center px-4">
          {/* Adjust text size and spacing for mobile */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
             Your message has been sent successfully!
          </h1>
       
          {/* Button with responsive padding and hover effect */}
          {/* <button className="bg-[#532160] text-white py-2 px-6 sm:px-8 rounded-full hover:bg-[#28112E] transition duration-300">
            .
          </button> */}
        </div>
      </div>
    </>
  );
}

export default Cresponse;