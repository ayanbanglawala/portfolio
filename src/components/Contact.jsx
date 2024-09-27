import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa'; // Import icons

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await fetch('http://127.0.0.1:3000/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Pass the formData object correctly in the body
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Response from server:", data);
        alert("Message sent successfully!"); // Display a success message
      } else {
        console.error("Error: Something went wrong.");
      }
    } catch (err) {
      console.error("Request failed:", err);
    }
  };

  return (
    <div id="contact" className="min-h-screen flex flex-col md:flex-row bg-[#04071D]">
      {/* Left Side: Contact Form */}
      <div className="md:w-1/2 p-10 flex items-center justify-center">
        <div className="max-w-md w-full bg-[#060A28] border border-[#2C2F3A] rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full bg-[#04071D] text-white border border-[#2C2F3A] rounded-md p-2 focus:outline-none focus:ring focus:ring-purple-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full bg-[#04071D] text-white border border-[#2C2F3A] rounded-md p-2 focus:outline-none focus:ring focus:ring-purple-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-gray-300">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="mt-1 block w-full bg-[#04071D] text-white border border-[#2C2F3A] rounded-md p-2 focus:outline-none focus:ring focus:ring-purple-500"
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-purple-600 text-white font-semibold rounded-md p-2 hover:bg-purple-700 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Right Side: Social Links */}
      <div className="md:w-1/2 p-10 flex flex-col items-center justify-center bg-[#060a28]  border-[#2C2F3A]">
        <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
        <div className="text-gray-300 mb-4">
          <p className="flex items-center mb-2 flex justify-center"><FaEnvelope className="mr-2" /> ayanchhipa2278@gmail.com</p>
          <p className="flex items-center mb-2 flex justify-center"><FaPhone className="mr-2 rotate-90" /> +91 81608 79660 </p>
          <p className="flex items-center mb-2 flex justify-center"><FaPhone className="mr-2 rotate-90" /> +91 93164 89878</p>
        </div>
        <div className="flex space-x-6 text-2xl">
          <a href="https://github.com/ayan2278" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition duration-200">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/ayan-banglawala-542056253" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition duration-200">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/ayan_banglawala/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition duration-200">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
