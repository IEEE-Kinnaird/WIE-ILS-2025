// src/pages/ContactUs.jsx
import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-gradient-to-br from-[#4e2659] to-purple-700 text-white py-10 px-5 min-h-screen flex justify-center items-center">
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl w-full">
        {/* Contact Information Section */}
        <div className="flex-1 flex flex-col justify-center gap-6">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg">
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

        {/* Map Section */}
        <div className="flex-1">
          <div className="w-full h-64 md:h-full rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://maps.googleapis.com/maps/api/staticmap?center=31.5204,74.3587&zoom=15&size=600x400&markers=color:red%7Clabel:K%7C31.5204,74.3587&key=YOUR_GOOGLE_MAPS_API_KEY"
              alt="Map of Kinnaird College for Women University"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
