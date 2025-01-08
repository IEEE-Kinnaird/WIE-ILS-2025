// // src/components/SpeakerCard.jsx
// const SpeakerCard = ({ speaker }) => {
//   return (
//     <div className="w-full max-w-xs bg-[#2d2d44] rounded-2xl p-6 text-center text-white transition-transform hover:scale-105">
//       <div className="w-[180px] h-[180px] mx-auto rounded-full mb-4 bg-gradient-to-b from-sky-300 to-green-300">
//         <img 
//           src={speaker.img} 
//           alt={speaker.name} 
//           className="w-full h-full rounded-full object-cover"
//         />
//       </div>
//       <h3 className="text-xl font-semibold mb-2">{speaker.name}</h3>
//       <p className="text-sm text-gray-400">{speaker.title}</p>
//       <div className="flex justify-center gap-4 mt-4">
//         <button className="hover:text-blue-400 transition-colors text-lg">
//           <i className="fas fa-envelope"></i>
//         </button>
//         <button className="hover:text-blue-500 transition-colors text-lg">
//           <i className="fab fa-linkedin"></i>
//         </button>
//         <button className="hover:text-blue-400 transition-colors text-lg">
//           <i className="fab fa-twitter"></i>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SpeakerCard;

import React from 'react';

const SpeakerCard = ({ name, title, img }) => {
  return (
    <div className="bg-[#2d2d44] p-6 rounded-lg flex flex-col items-center shadow-md transition-transform transform hover:scale-105 h-full w-full">
      <img
        src={img}
        alt={name}
        className="w-28 h-28 rounded-full mb-4 bg-gray-300 object-cover"
      />
      <h2 className="text-lg font-bold text-white text-center">{name}</h2>
      <p className="text-sm text-gray-300 text-center mb-4">{title}</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="#" className="text-gray-400 hover:text-blue-500">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-blue-500">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-pink-500">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default SpeakerCard;

