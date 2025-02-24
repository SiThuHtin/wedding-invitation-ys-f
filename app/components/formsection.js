// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import Attending from "../../public/attending.jpeg";
// import Image from "next/image";

// export default function RSVP() {
//   const [response, setResponse] = useState("");
//   const [name, setName] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Name: ${name}\nResponse: ${response}`);
//   };

//   const shakeAnimation = {
//     whileHover: { x: [0, -5, 5, -5, 5, 0], transition: { duration: 1 } },
//     whileTap: { x: [0, -8, 8, -8, 8, 0], transition: { duration: 1 } },
//   };

//   return (
//     <div class="h-screen w-full flex bg-beige">
//       <div class="w-1/2 h-full">
//         <Image
//           src={Attending}
//           alt="Wedding Rings"
//           class="w-full h-full object-contain"
//         />
//       </div>
//       <div class="w-1/2 flex flex-col justify-center items-center  p-12">
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           className="relative p-8   text-center  max-w-md"
//         >
//           <h1 className="text-4xl font-bold mb-6 ">
//             Will you be attending?
//           </h1>
//           <form onSubmit={handleSubmit}>
//             <motion.input
//               type="text"
//               placeholder="Enter your name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full px-4 py-3 mb-4 text-gray-900 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//               whileHover={{
//                 x: [0, -3, 3, -3, 3, 0],
//                 transition: { duration: 0.3 },
//               }}
//             />
//             <div className="flex justify-center space-x-6 mb-6">
//               <motion.button
//                 type="button"
//                 className={`px-8 py-4 rounded-full text-lg font-semibold transition duration-300 ${
//                   response === "Yes"
//                     ? "bg-green-500 shadow-lg"
//                     : "bg-white bg-opacity-80 text-gray-900 hover:bg-opacity-100"
//                 }`}
//                 onClick={() => setResponse("Yes")}
//                 {...shakeAnimation}
//               >
//                 Yes
//               </motion.button>
//               <motion.button
//                 type="button"
//                 className={`px-8 py-4 rounded-full text-lg font-semibold transition duration-300 ${
//                   response === "No"
//                     ? "bg-red-500 shadow-lg"
//                     : "bg-white bg-opacity-80 text-gray-900 hover:bg-opacity-100"
//                 }`}
//                 onClick={() => setResponse("No")}
//                 {...shakeAnimation}
//               >
//                 No
//               </motion.button>
//             </div>
//             <motion.button
//               type="submit"
//               className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg transition hover:bg-blue-700 shadow-md"
//               {...shakeAnimation}
//             >
//               Submit
//             </motion.button>
//           </form>
//         </motion.div>
//       </div>
//     </div>
//   );
// }



'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Attending from '../../public/attending.jpeg'; // Replace with your actual image path

export default function RSVPSection() {
  const [name, setName] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!response) return alert('Please select Yes or No');
    alert(`Thank you, ${name}. Your response: ${response}`);
  };

  return (
    <div className="h-screen w-full flex flex-col md:flex-row bg-[#F5F5DC]">
      {/* Image Section */}
      <div className="md:w-1/2 w-full h-full">
        <Image
          src={Attending}
          alt="Wedding Rings"
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {/* Form Section */}
      <div className="md:w-1/2 w-full flex flex-col justify-center items-center p-4 md:p-12">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md"
        >
          <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900">
            Will you be attending?
          </h1>
          <form onSubmit={handleSubmit} className="w-full">
            <motion.input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 md:px-4 md:py-3 mb-3 md:mb-4 text-gray-900 text-sm md:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              whileHover={{
                x: [0, -3, 3, -3, 3, 0],
                transition: { duration: 0.3 },
              }}
            />
            <div className="flex justify-center space-x-4 md:space-x-6 mb-4 md:mb-6">
              <motion.button
                type="button"
                className={`px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-lg font-semibold transition duration-300 ${
                  response === 'Yes' ? 'bg-green-500 shadow-lg text-white' : 'bg-white bg-opacity-80 text-gray-900 hover:bg-opacity-100'
                }`}
                onClick={() => setResponse('Yes')}
                whileHover={{ scale: 1.1 }}
              >
                Yes
              </motion.button>
              <motion.button
                type="button"
                className={`px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-lg font-semibold transition duration-300 ${
                  response === 'No' ? 'bg-red-500 shadow-lg text-white' : 'bg-white bg-opacity-80 text-gray-900 hover:bg-opacity-100'
                }`}
                onClick={() => setResponse('No')}
                whileHover={{ scale: 1.1 }}
              >
                No
              </motion.button>
            </div>
            <motion.button
              type="submit"
              className="px-6 py-3 md:px-8 md:py-4 bg-blue-600 text-white rounded-full font-semibold text-sm md:text-lg transition hover:bg-blue-700 shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

