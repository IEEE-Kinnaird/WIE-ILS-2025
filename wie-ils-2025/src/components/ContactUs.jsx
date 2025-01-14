// // src/pages/ContactUs.jsx
// import React, { useState, useEffect } from 'react';
// import background from '../assets/bg.jpg'; // Example path


// const ContactUs = () => {
//   return (
//     <div className=" text-white py-10 px-5 min-h-screen flex justify-center items-center mt-6 ml-6 mr-6 mb-6 rounded-3xl"
//     style={{ backgroundImage: `url(${background})` }}
//     >
      
//       <div className="flex flex-col md:flex-row gap-8 max-w-6xl w-full">

//         {/* Map Section */}
//         <div className="flex-1">
//           <div className="w-full h-64 md:h-full rounded-lg overflow-hidden shadow-lg">
//             <div className="contact-area">
//               <div className="map">
//                 <div className="map-border">
//                   <iframe
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.496461796169!2d74.3405255!3d31.5379871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904ebcc18c7bf%3A0x1c311b2dddb7ab8f!2sKinnaird%20College%20For%20Women%20University!5e0!3m2!1sen!2s!4v1729690252453!5m2!1sen!2s"
//                     title="Google Map"
//                     style={{ border: 0, width: "100%", height: "400px" }} // Adjust height and width as needed
//                     allowFullScreen
//                     loading="lazy"
//                     referrerPolicy="no-referrer-when-downgrade"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Contact Information Section */}
//         <div className="flex-1 flex flex-col justify-center gap-6">
//           <h1 className="text-4xl font-bold mb-4 justify-center">Contact Us</h1>
//           <p className="text-lg">
//             Feel free to reach out to us! We're here to help and answer any questions you might have.
//           </p>
//           <div className="flex flex-col gap-4">
//             <div>
//               <h3 className="font-bold text-lg">Address</h3>
//               <p>Kinnaird College for Women University, Lahore, Pakistan</p>
//             </div>
//             <div>
//               <h3 className="font-bold text-lg">Phone</h3>
//               <p>+92 42 111 000 000</p>
//             </div>
//             <div>
//               <h3 className="font-bold text-lg">Email</h3>
//               <p>info@kinnaird.edu.pk</p>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default ContactUs;

import React from 'react';
import background from '../assets/bg.jpg'; // Example path

const ContactUs = () => {
  return (
    <div
      className="text-white min-h-screen flex justify-center items-center px-4 mt-6 ml-6 mr-6 mb-6 rounded-3xl"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="backdrop-blur-sm p-8 md:p-16 rounded-3xl shadow-lg max-w-6xl w-full">
        {/* Contact Us Content */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Map Section */}
          <div className="flex-1">
            <div className="w-full h-64 md:h-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.496461796169!2d74.3405255!3d31.5379871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904ebcc18c7bf%3A0x1c311b2dddb7ab8f!2sKinnaird%20College%20For%20Women%20University!5e0!3m2!1sen!2s!4v1729690252453!5m2!1sen!2s"
                title="Google Map"
                style={{ border: 0, width: "100%", height: "100%" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="flex-1 flex flex-col justify-center gap-6">
            <h1 className="text-4xl font-bold text-center md:text-left">Contact Us</h1>
            <p className="text-lg text-center md:text-left">
              Feel free to reach out to us! We're here to help and answer any questions you might have.
            </p>
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="font-bold text-lg">Address</h3>
                <p>Kinnaird College for Women University, Lahore, Pakistan</p>
              </div>
              <div>
                <h3 className="font-bold text-lg">Phone</h3>
                <p>+92 42 111 000 000</p>
              </div>
              <div>
                <h3 className="font-bold text-lg">Email</h3>
                <p>info@kinnaird.edu.pk</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
