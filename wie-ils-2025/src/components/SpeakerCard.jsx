// import React from 'react';
// import { FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa';

// const SpeakerCard = ({ name, title, img }) => {
//   return (
//     <div className="bg-[#2d2d44] p-6 rounded-lg flex flex-col items-center shadow-md transition-transform transform hover:scale-105 w-full max-w-sm mx-auto">
//       <img
//         src={img}
//         alt={name}
//         className="w-28 h-28 rounded-full mb-4 bg-gray-300 object-cover"
//       />
//       <h2 className="text-lg font-bold text-white text-center">{name}</h2>
//       <p className="text-sm text-gray-300 text-center mb-4">{title}</p>
//       <div className="flex justify-center space-x-4 mt-4">
//         <a href="#" className="text-gray-400 hover:text-blue-500">
//           <FaEnvelope className="w-5 h-5" />
//         </a>
//         <a href="#" className="text-gray-400 hover:text-blue-500">
//           <FaLinkedin className="w-5 h-5" />
//         </a>
//         <a href="#" className="text-gray-400 hover:text-pink-500">
//           <FaInstagram className="w-5 h-5" />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default SpeakerCard;

// import React from 'react';
// import { FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa';

// const SpeakerCard = ({ name, title, img }) => {
//   return (
//     <div className="bg-[#2d2d44] p-6 rounded-lg flex flex-col items-center shadow-md transition-transform transform hover:scale-105 w-full max-w-xs mx-auto">
//       <img
//         src={img}
//         alt={name}
//         className="w-28 h-28 rounded-full mb-4 bg-gray-300 object-cover"
//       />
//       <h2 className="text-lg font-bold text-white text-center">{name}</h2>
//       <p className="text-sm text-gray-300 text-center mb-4">{title}</p>
//       <div className="flex justify-center space-x-4 mt-4">
//         <a href="#" className="text-gray-400 hover:text-blue-500">
//           <FaEnvelope className="w-5 h-5" />
//         </a>
//         <a href="#" className="text-gray-400 hover:text-blue-500">
//           <FaLinkedin className="w-5 h-5" />
//         </a>
//         <a href="#" className="text-gray-400 hover:text-pink-500">
//           <FaInstagram className="w-5 h-5" />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default SpeakerCard;

import React from 'react';
import { FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa';

const SpeakerCard = ({ name, title, img }) => {
  return (
    <div className="bg-[#4e2659] p-4 md:p-6 rounded-lg flex flex-col items-center shadow-md transition-transform transform hover:scale-105 w-full max-w-xs mx-auto">
      <img
        src={img}
        alt={name}
        className="w-24 h-24 md:w-28 md:h-28 rounded-full mb-4 bg-gray-300 object-cover"
      />
      <h2 className="text-base md:text-lg font-bold text-white text-center">{name}</h2>
      <p className="text-xs md:text-sm text-gray-300 text-center mb-3">{title}</p>
      <div className="flex justify-center space-x-4 mt-1">
        <a href="#" className="text-gray-400 hover:text-blue-500">
          <FaEnvelope className="w-5 h-5" />
        </a>
        <a href="#" className="text-gray-400 hover:text-blue-500">
          <FaLinkedin className="w-5 h-5" />
        </a>
        <a href="#" className="text-gray-400 hover:text-pink-500">
          <FaInstagram className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default SpeakerCard;
