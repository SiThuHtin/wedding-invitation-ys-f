'use client';
import { useState } from 'react';
import Image from 'next/image';
import Wishes from '../../public/formphoto.jpeg'; // Replace with your actual image path

const WeddingSection = () => {
    const [wish, setWish] = useState('');

    const handleInputChange = (e) => {
        setWish(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Your wedding wish: ${wish}`);
        // Here, you can send the wish to an API or handle it as needed
    };

    return (
        <div className="flex flex-col md:flex-row h-screen bg-[#F5F5DC]">
            {/* Upper photo section (50% on mobile, 50% width on desktop/tablet) */}
            <div className="h-1/2 md:h-full md:w-1/2 w-full overflow-hidden md:pl-9">
                <Image
                    src={Wishes}
                    alt="Wedding Photo"
                    className="w-full h-full object-cover md:object-contain"
                    priority
                />
            </div>

            {/* Lower form section (50% on mobile, 50% width on desktop/tablet) */}
            <div className="h-1/2 md:h-full md:w-1/2 w-full flex justify-center items-center bg-[#F5F5DC] p-4 md:p-6 font-satisfy">
                <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
                    <textarea
                        value={wish}
                        onChange={handleInputChange}
                        rows="5"
                        placeholder="Share Your Blessings & Wishes for us"
                        className="w-full p-4 border-2 bg-[#FFB1B1] rounded-lg text-gray-800 placeholder:text-gray-800 focus:outline-none focus:ring-2 resize-none leading-loose"
                        style={{
                            backgroundImage:
                                'linear-gradient(to bottom, rgba(0,0,0,0) 31px, rgba(0,0,0,0.05) 31px)',
                            backgroundSize: '100% 32px',
                            lineHeight: '32px',
                        }}
                    />
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="px-6 py-3 bg-[#FFB1B1] text-gray-800 font-semibold rounded-lg hover:bg-[#FF9B9B] transition"
                        >
                            Send with Love
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default WeddingSection;