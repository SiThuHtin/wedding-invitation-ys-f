'use client';
import { useState,useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Attending from '../../public/attending.jpeg'; // Replace with your actual image path

export default function RSVPSection({ onRSVPSubmit }) {
  const [name, setName] = useState('');
  const [response, setResponse] = useState(null);
  const [numberOfGuests, setNumberOfGuests] = useState(''); 
  
  useEffect(() => {
    const handleFocus = (e) => {
      setTimeout(() => {
        e.target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    };

    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach((input) => {
      input.addEventListener('focus', handleFocus);
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener('focus', handleFocus);
      });
    };
  }, []);// Default to 1 guest

  const handleSubmit = async () => {
    if (!response || !name) {
      return alert('Please provide your name and select Yes or No.');
    }

    // Validate number of guests if the response is "Yes"
  

    // Pass the data to the parent component
    onRSVPSubmit({ name, response, numberOfGuests });

    // Clear the form
    setName('');
    setResponse(null);
    setNumberOfGuests(''); // Reset to default
  };

  return (
    <div className="md:h-screen min-h-screen w-full flex flex-col md:flex-row bg-[#F5F5DC]">
      {/* Image Section */}
      <div className="md:w-1/2 w-full h-1/2 md:h-full bg-gray-200">
        <Image
          src={Attending}
          alt="Wedding Rings"
          className="w-full h-full object-contain md:object-cover"
          priority
        />
      </div>

      {/* Form Section */}
      <div className="md:w-1/2 w-full h-1/2 md:h-full  flex flex-col justify-center items-center p-4">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center w-full max-w-xs"
        >
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-gray-900">
            Will you be attending?
          </h1>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full space-y-4 flex-grow"
          >
            <motion.input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 text-gray-900 text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              whileHover={{
                x: [0, -3, 3, -3, 3, 0],
                transition: { duration: 0.3 },
              }}
            />
            <div className="flex justify-center space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="response"
                  value="Yes"
                  checked={response === 'Yes'}
                  onChange={() => setResponse('Yes')}
                  className="form-radio h-5 w-5 text-green-500"
                />
                <span className="text-gray-900">Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="response"
                  value="No"
                  checked={response === 'No'}
                  onChange={() => setResponse('No')}
                  className="form-radio h-5 w-5 text-red-500"
                />
                <span className="text-gray-900">No</span>
              </label>
            </div>

            {/* Number of Guests Input (only shown if response is "Yes") */}
            {response === 'Yes' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <label className="block text-gray-900 text-sm font-medium mb-1">
                  Number of Guests
                </label>
                <input
                  
                  
                  value={numberOfGuests}
                  onChange={(e) => setNumberOfGuests(e.target.value)} // Ensure minimum value is 1
                  className="w-full px-4 py-2 text-gray-900 text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </motion.div>
            )}

            {response && (
              <motion.button
                type="button"
                onClick={handleSubmit}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold text-base transition hover:bg-blue-700 shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                Submit RSVP
              </motion.button>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
}