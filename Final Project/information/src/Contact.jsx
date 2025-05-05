import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Sending message...');

    axios.post('/api/contact', formData)
      .then(response => {
        setFormStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(error => {
        console.error('Error sending message:', error);
        setFormStatus('Failed to send message. Please try again later.');
      });
  };

  return (
    <div>
      {/* Page heading */}
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Me</h2>
      {/* Grid layout for contact information and form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Information Card */}
        <div className="rounded-lg shadow-md p-8 bg-white">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Email:</span>{' '}
            <a href="mailto:your.email@example.com" className="text-blue-500 hover:underline transition duration-300">your.email@example.com</a>
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">LinkedIn:</span>{' '}
            <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline transition duration-300">linkedin.com/in/yourlinkedin</a>
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">GitHub:</span>{' '}
            <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline transition duration-300">github.com/yourgithub</a>
          </p>
          {/* Add other contact details if needed */}
        </div>

        {/* Contact Form Card */}
        <div className="rounded-lg shadow-md p-8 bg-white"> {/* <--- Here's the likely fix */}
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Send a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </form>
          <div id="form-status" className="mt-4 text-sm">{formStatus}</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;