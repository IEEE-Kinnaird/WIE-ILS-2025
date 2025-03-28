import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const SpeakerCard = ({ name, title, role, img, linkedin }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-6 text-center relative w-full sm:w-1/2 md:w-80 mx-2 my-4 border border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="absolute top-4 right-4">
        {linkedin && (
          <a 
            href={linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            <FaLinkedin
              size={24} 
              className="hover:scale-110 transition-transform"
            />
          </a>
        )}
      </div>
      <img 
        src={img} 
        alt={name} 
        className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white/30 mb-4" 
      />
      <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
      <p className="text-gray-300 text-sm mb-1">{title}</p>
      {role && (
        <p className="text-gray-400 text-xs italic">({role})</p>
      )}
    </div>
  );
}; 

export default SpeakerCard;