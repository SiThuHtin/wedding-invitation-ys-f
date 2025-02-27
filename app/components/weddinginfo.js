import Image from "next/image";
import Contact from "../../public/contact.jpeg";  // Replace with your actual image path
import ColorPalette from "./colorpalette";  // Import the ColorPalette component        

const Weddinginfo = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#3C3D37] p-6">
            {/* Wedding Info Section */}
            <div className="md:w-1/2 text-center space-y-6 flex flex-col items-center justify-center">
                <div className="text-center">
                    <div className="text-3xl md:text-4xl text-left font-serif text-white leading-relaxed">
                        <div className="pb-6 font-satisfy">
                            Save the date! <br /> Shun & Ye are getting married on
                        </div>
                        <div className="text-left pb-11">
                            <span className="text-yellow-500 text-xl  italic font-light">
                                March 05, 2025 at 5:00 PM
                            </span>
                            <br />
                            <span className="text-yellow-500 text-xl italic font-light">
                                Golden Inya, Yangon
                            </span>
                            <br />
                            <span className="text-yellow-500 text-xl italic font-light">
                                Dress code : formal attire
                            </span>
                        </div>

                        <ColorPalette />
                    </div>
                </div>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                <Image
                    src={Contact}
                    alt="Couple Photo"
                    className="w-72 md:w-96 rounded-xl shadow-lg border-4 border-yellow-500"
                />
            </div>
        </div>
    )
}

export default Weddinginfo;