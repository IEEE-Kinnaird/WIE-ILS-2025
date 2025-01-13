import React from 'react';
import Navbar from './Navbar';
import background from '../assets/bg.jpg'; // Ensure the path is correct
import Footer from './Footer';
import cover from '../assets/cover.png'; // Your illustration image
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'; // Importing icons
import logo from "../assets/logoo.png";
import wie from "../assets/wier.png";

function Home() {
  return (
    <>
      <div className='flex justify-between items-center bg-[#fefefA] border-[#4e2659] p-4'>
        <div className="flex items-center ml-4">
          <img src={logo} alt="Logo" className="h-20 w-20" />
          <img src={wie} alt="WIE Logo" className="h-20 w-48 ml-10" />
        </div>
      
      </div>
      <Navbar />
      <div
        className="flex flex-col md:flex-row min-h-screen bg-cover bg-center relative mt-6 ml-6 mr-6 mb-6 rounded-3xl"
        style={{ backgroundImage: `url(${background})` }}
      >
        {/* Left Column for Content */}
        <div className="flex flex-col mt-48 ml-20 items-start text-white  p-6 w-full md:w-1/2">
        <h1 className="text-5xl font-bold mb-8 whitespace-nowrap">Welcome to IEEE Women in Engineering</h1>
        <h1 className="text-5xl mb-8 font-bold whitespace-nowrap">International Leadership Summit 2025</h1>
          
          {/* Event Details */}
          <div className=" p-6 rounded-lg shadow-lg mb-6">
            <div className="flex items-center mb-4">
              <FaCalendarAlt className="mr-2 text-5xl text-[#e065c5]" />
              <p className="text-5xl font-bold mb-1 ml-4">April 7-8, 2025</p>
            </div>
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="mr-2 text-5xl mt-1 text-[#e065c5]" />
              <p className="font-semibold text-5xl ml-4">Kinnaird College for Women</p> 
            </div>
            <p className='ml-20 text-2xl'>93 Jail Rd, G.O.R.-I, Lahore, Punjab</p>
          </div>
        </div>

        {/* Right Column for Cover Image */}
        <div className="flex mt-8 w-screen mr-24 h-screen md:w-1/2 ">
          <img src={cover} alt="Cover Illustration" className='w-full h-full ' />
        </div>
      </div>
      
      <Footer />
    </>
  );
}

export default Home;