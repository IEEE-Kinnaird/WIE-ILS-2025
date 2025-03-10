import React from 'react';

import cover from '../assets/loog.png';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="relative mt-4 mx-4 md:mx-6 mb-6 rounded-3xl overflow-hidden bg-transparent ">
        {/* Mobile Hero Section */}
        <div className="md:hidden pt-2 px-2 pb-10 text-center">
          <img 
            src={cover} 
            alt="IEEE WIE ILS 2025" 
            className="w-full h-auto mx-auto mb-8 rounded-lg shadow-xl" 
          />
          
          <h1 className="text-2xl font-bold text-white mb-2 leading-tight">
            Welcome to IEEE Women in Engineering
          </h1>
          <h2 className="text-xl font-bold text-white mb-6 leading-tight">
            International Leadership Summit 2025
          </h2>
          
          <div className="bg-black bg-opacity-30 p-6 rounded-xl shadow-lg mt-6 mb-4">
            <div className="flex items-center mb-5">
              <FaCalendarAlt className="text-2xl text-[#e065c5] flex-shrink-0" />
              <p className="ml-3 text-xl font-bold text-white">April 7-8, 2025</p>
            </div>
            
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-2xl text-[#e065c5] mt-1 flex-shrink-0" />
              <div className="ml-3 text-left">
                <p className="text-xl font-bold text-white">
                  Kinnaird College for Women
                </p>
                <p className="text-base text-gray-200">
                  93 Jail Rd, G.O.R.-I, Lahore, Punjab
                </p>
              </div>
            </div>
          </div>
          
          <a href='https://docs.google.com/forms/d/e/1FAIpQLSe-El6OO_yuMeOZeHCYtkXe4gMvMLdRNJ4km_PAdZN4fHO-vA/viewform' target='_blank' className="bg-[#e065c5] hover:bg-[#ce45b5] text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 mt-6">
            Register Now
          </a>
        </div>

        {/* Desktop Layout - Keeping Original Styling */}
        <div className="hidden md:flex md:flex-row min-h-screen bg-cover bg-center">
          {/* Left Column for Content */}
          <div className="flex flex-col justify-center items-start text-white p-4 md:ml-10 w-full md:w-1/2">
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:whitespace-nowrap">Welcome to IEEE Women in Engineering</h1>
            <h1 className="text-2xl md:text-6xl mb-6 font-bold md:whitespace-nowrap">International Leadership Summit 2025</h1>
            
            {/* Event Details - Keeping Original */}
            <div className="p-6 rounded-lg mt-6 sm:mt-20 shadow-lg mb-6 text-left">
              <div className="flex items-center mb-4 justify-start ">
                <FaCalendarAlt className="mr-2 text-3xl md:text-6xl text-[#e065c5]" />
                <p className="text-2xl md:text-5xl md:ml-3 font-bold mb-1">April 7-8, 2025</p>
              </div>
              <div className="flex items-center mb-4 justify-start">
                <FaMapMarkerAlt className="mr-2 text-4xl md:text-6xl mb-10 md:mb-0 text-[#e065c5]" />
                <div className=''>
                  <p className="text-2xl md:text-5xl md:ml-3 font-bold mb-1 mt-8">Kinnaird College for Women</p>
                  <p className='text-lg md:text-3xl md:ml-4'>93 Jail Rd, G.O.R.-I, Lahore, Punjab</p>
                </div>
              </div>
            </div>
            
            {/* Register button for desktop */}
            <a href='https://docs.google.com/forms/d/e/1FAIpQLSe-El6OO_yuMeOZeHCYtkXe4gMvMLdRNJ4km_PAdZN4fHO-vA/viewform' target='_blank' className="bg-[#e065c5] hover:bg-[#ce45b5] text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 mt-6">
            Register Now
          </a>
          </div>

          {/* Right Column for Cover Image */}
          <div className="flex w-full md:w-1/2">
            <img src={cover} alt="Cover Illustration" className='w-full h-auto rounded-lg' />
          </div>
        </div>
      </div>
      
      {/* <Footer /> */}
    </>
  );
}

export default Home;