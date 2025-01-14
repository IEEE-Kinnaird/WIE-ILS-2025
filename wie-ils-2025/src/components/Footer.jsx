import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-[#4e2659] text-white p-4 m-6 rounded-2xl">
      <div className="container mx-auto text-center">
       

        <h1>Follow Us </h1>
        {/* Social Media Links */}
        <div className="mb-4 flex col-span-4 justify-center mt-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#e065c5] mx-2">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#e065c5] mx-2">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#e065c5] mx-2">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#e065c5] mx-2">
            <FaInstagram size={24} />
          </a>
        </div>
        <p className='mb-2 text-xl'>Content © Copyright 2025 WIE-ILS</p>
        {/* Contact Information */}
        {/* <div className="mb-4">
          <p className="text-sm">Email: <a href="mailto:info@wie-ils.org" className="text-white hover:text-[#e065c5]">info@wie-ils.org</a></p>
          <p className="text-sm">Phone: <a href="tel:+1234567890" className="text-white hover:text-[#e065c5]">+1 (234) 567-890</a></p>
        </div> */}

    
      </div>
    </footer>
  );
};

export default Footer;