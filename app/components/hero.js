import Image from "next/image";
import HeroImage from "../../public/heroimage.jpg";


const HeroSection = () => {
    return (
        <div className="h-screen w-full flex flex-col md:flex-row overflow-hidden">
            {/* Left Section - Text */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white p-6 md:p-12 overflow-y-auto">
                <div className="text-3xl md:text-5xl font-satisfy pb-6 md:pb-12 text-yellow-700 text-center">
                    Shun & Ye's Wedding
                </div>

                <p className="text-base md:text-xl italic text-yellow-900 mt-2 text-center">
                    "A Great Marriage is not when the perfect couple comes together.
                    <br />
                    It is when an imperfect couple learns to enjoy their differences"
                </p>
                <div className="py-3 font-normal text-yellow-700 italic text-center">-Dave Meurer</div>
            </div>

            {/* Right Section - Image */}
            <div className="w-full md:w-1/2 h-[60vh] md:h-full flex-none">
                <Image
                    src={HeroImage}
                    alt="Wedding Rings"
                    className="w-full h-full object-contain"
                />
            </div>
        </div>
    )
}

export default HeroSection