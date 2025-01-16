import React, { useState } from 'react';
import background from '../assets/bg.jpg'; // Example path

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div
      className="text-white min-h-screen flex justify-center items-center px-4 mt-6 ml-6 mr-6 mb-6 rounded-3xl"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="backdrop-blur-sm p-8 md:p-16 border border-white rounded-3xl shadow-lg max-w-6xl w-full">
        {/* Contact Us Content */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Form Section */}
          <div className="flex-1 flex flex-col justify-center gap-6">
            <h1 className="text-4xl font-bold text-center md:text-left">Contact Us</h1>
            <p className="text-lg text-center md:text-left">
              Feel free to reach out to us! We're here to help and answer any questions you might have.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="font-bold text-lg">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 mt-1 rounded-lg border text-[#28112E] bg-white opacity-40 border-gray-300"
                />
              </div>
              <div>
                <label className="font-bold text-lg">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 mt-1 rounded-lg text-[#28112E] bg-white opacity-40 border border-gray-300"
                />
              </div>
              <div>
                <label className="font-bold text-lg">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full p-2 mt-1 bg-white opacity-40 text-[#28112E] rounded-lg border border-gray-300"
                />
              </div>
              <button type="submit" className="bg-[#52295d]  w-64 mx-auto text-white p-4 rounded-lg hover:bg-[#4d2e54] transition duration-200">
                Send Message
              </button>
            </form>
          </div>

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
        </div>
      </div>
    </div>
  );
};

export default ContactUs;