import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#28112E] text-white py-6 px-4 md:py-8 md:px-6 m-4 lg:py-8 lg:px-8 mt-auto rounded-3xl">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Information */}
          <div className="text-sm">
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <address className="not-italic">
              <p className="mb-1">Kinnaird College for Women University Lahore, Pakistan</p>
      
              <p>
                <a href="mailto:ilswielhr@gmail.com" className="hover:text-[#e065c5] transition-colors">
                ilswielhr@gmail.com
                </a>
               
              </p>
              <a href="mailto:ieee@kinnaird.edu.pk" className="hover:text-[#e065c5] transition-colors">
                Ieee@kinnaird.edu.pk
                </a>
            </address>
          </div>
          
          {/* Social Media Links */}
          <div className="text-sm">
            <h3 className="text-lg font-semibold mb-3">Connect With Us</h3>
            <div className="flex space-x-5">
              <a href="https://m.facebook.com/wie.lahore/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#e065c5] transition-colors" aria-label="Facebook">
                <FaFacebook size={22} />
              </a>
          
              <a href="https://www.linkedin.com/company/ieee-women-in-engineering-lahore-section/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#e065c5] transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={22} />
              </a>
              <a href="https://www.instagram.com/ieeewielahore?igsh=NXIzbWV1c3hvd2I0" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#e065c5] transition-colors" aria-label="Instagram">
                <FaInstagram size={22} />
              </a>
            </div>
            <p className="mt-4 text-xs text-gray-300">
              Stay connected with us on social media for the latest updates and announcements.
            </p>
          </div>
        </div>
        
        {/* Copyright line */}
        <div className="mt-6 pt-4 border-t border-gray-700 text-center text-xs text-gray-400">
          <p>© 2025 WIE-ILS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;