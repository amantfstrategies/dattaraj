"use client";
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Page = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    city: '',
    message: '',
    vehicleType: 'car',
    isRobotVerified: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleCaptchaChange = (value) => {
    setFormData({
      ...formData,
      isRobotVerified: !!value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.isRobotVerified) {
      alert('Please confirm you are not a robot.');
      return;
    }
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-40">
      <div className="bg-white shadow-md rounded px-8 py-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Enquiry Form</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label className="block text-gray-700">Mobile:</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label className="block text-gray-700">City:</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label className="block text-gray-700">Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700">Vehicle Type:</label>
            <select
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            >
              <option value="car">Car</option>
              <option value="mini bus">Mini Bus</option>
              <option value="luxury bus">Luxury Bus</option>
            </select>
          </div>
          <div>
            <ReCAPTCHA
              sitekey="your-site-key"
              onChange={handleCaptchaChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#04DBC0] text-white py-2 px-4 rounded-md  focus:outline-none focus:ring focus:[#04DBC0]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
