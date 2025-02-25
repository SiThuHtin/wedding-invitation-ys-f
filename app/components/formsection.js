'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Attending from '../../public/attending.jpeg'; // Replace with your actual image path
import emailjs from 'emailjs-com';

export default function RSVPSection() {
  const [name, setName] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async () => {
    if (!response || !name) {
      return alert('Please provide your name and select Yes or No.');
    }

    const templateParams = {
      name: name,
      response: response,
    };

    try {
      const result = await emailjs.send(
        'service_hsk7dbl',  // Replace with your service ID from EmailJS
        'template_c8xjf0k', // Replace with your template ID from EmailJS
        templateParams,
        'Yr5LLxycrBU7nirw6'   // Replace with your public key from EmailJS
      );

      alert('Email sent successfully!');
      setName('');
      setResponse(null);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send the email. Please try again.');
    }
  };

  return (
    <div className="h-screen w-full flex flex-col md:flex-row bg-[#F5F5DC]">
      {/* Image Section */}
      <div className="md:w-1/2 w-full h-1/2 md:h-full bg-gray-200"> {/* Fallback background color */}
        <Image
          src={Attending}
          alt="Wedding Rings"
          className="w-full h-full object-contain " // object-contain for mobile, object-cover for desktop
          priority
        />
      </div>

      {/* Form Section */}
      <div className="md:w-1/2 w-full flex flex-col justify-center items-center p-12 md:p-12">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md"
        >
          <h1 className="text-xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900">
            Will you be attending?
          </h1>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full"
          >
            <motion.input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-2 py-1 md:px-4 md:py-3 mb-3 md:mb-4 text-gray-900 text-sm md:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              whileHover={{
                x: [0, -3, 3, -3, 3, 0],
                transition: { duration: 0.3 },
              }}
            />
            <div className="flex justify-center space-x-2 md:space-x-6 mb-2 md:mb-6">
              <motion.button
                type="button"
                className={`px-3 py-1 md:px-8 md:py-4 rounded-md text-sm md:text-lg font-semibold transition duration-300 ${
                  response === 'Yes'
                    ? 'bg-green-500 shadow-lg text-white'
                    : 'bg-white bg-opacity-80 text-gray-900 hover:bg-opacity-100'
                }`}
                onClick={() => setResponse('Yes')}
                whileHover={{ scale: 1.1 }}
              >
                Yes
              </motion.button>
              <motion.button
                type="button"
                className={`px-3 py-1 md:px-8 md:py-4 rounded-md text-sm md:text-lg font-semibold transition duration-300 ${
                  response === 'No'
                    ? 'bg-red-500 shadow-lg text-white'
                    : 'bg-white bg-opacity-80 text-gray-900 hover:bg-opacity-100'
                }`}
                onClick={() => setResponse('No')}
                whileHover={{ scale: 1.1 }}
              >
                No
              </motion.button>
            </div>

            {response && (
              <motion.button
                type="button"
                onClick={handleSubmit}
                className="px-2 py-2 bg-blue-600 text-white  font-semibold text-lg transition hover:bg-blue-700 shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                Submit
              </motion.button>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
}