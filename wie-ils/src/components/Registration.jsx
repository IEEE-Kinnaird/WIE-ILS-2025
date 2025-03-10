import React from 'react';

function Registration() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-6">
      <div className="bg-transparent backdrop-blur-lg  rounded-lg shadow-xl p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Registration</h2>
        
        <p className="text-white mb-8 text-center">
          Please complete your registration by clicking the button below. You will be redirected to our official registration form.
        </p>
        
        <div className="flex justify-center">
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSe-El6OO_yuMeOZeHCYtkXe4gMvMLdRNJ4km_PAdZN4fHO-vA/viewform"
            className="inline-block bg-[#e065c5] hover:bg-[#c95bb1] text-white font-semibold py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg text-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register Now
          </a>
        </div>
        
        <p className="mt-6 text-sm text-white text-center">
          If you have any questions, please contact our support team.
        </p>
      </div>
    </div>
  );
}

export default Registration;