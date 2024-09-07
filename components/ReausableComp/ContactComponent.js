
'use client';

import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { MdSend } from 'react-icons/md';
import Image from 'next/image';

const ContactComponent = () => {
    // Form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    // Handle form input changes
    const handleChange = (e ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send data to an API)
        console.log('Form Data:', formData);
        // Reset form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    };

    return (
        <div className="w-full py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">Contact Us</h2>
                <div className="flex flex-col lg:flex-row lg:space-x-8">
                    {/* Contact Information */}
                    <div className="lg:w-1/3 mb-8 lg:mb-0">
                        <div className="flex items-center mb-6">
                            <FaMapMarkerAlt className="text-primary text-3xl mr-4" />
                            <div>
                                <h3 className="text-xl font-medium text-gray-800">Address</h3>
                                <p className="text-gray-600">1234 Street Name, City, State, Country</p>
                            </div>
                        </div>
                        <div className="flex items-center mb-6">
                            <FaPhoneAlt className="text-primary text-3xl mr-4" />
                            <div>
                                <h3 className="text-xl font-medium text-gray-800">Phone</h3>
                                <p className="text-gray-600">+1 (234) 567-890</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <FaEnvelope className="text-primary text-3xl mr-4" />
                            <div>
                                <h3 className="text-xl font-medium text-gray-800">Email</h3>
                                <p className="text-gray-600">info@example.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:w-2/3 bg-white p-8 rounded shadow">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Subject"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full flex items-center justify-center bg-primary text-white px-6 py-3 rounded hover:bg-primary-dark transition-colors"
                            >
                                <MdSend className="mr-2" />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Google Maps */}
                <div className="mt-12">
                    <h3 className="text-3xl font-semibold text-center text-gray-800 mb-6">Find Us Here</h3>
                    <div className="w-full h-96">
                        <iframe
                            title="Google Maps"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1753.6552620861937!2d77.31876663857417!3d28.470193601777083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce76d72271335%3A0x171e706a4e7b113f!2sPalla%2C%20Faridabad%2C%20Haryana%20121003!5e0!3m2!1sen!2sin!4v1725704491366!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded"
                        ></iframe>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactComponent;
