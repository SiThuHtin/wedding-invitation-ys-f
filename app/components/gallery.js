import Image from "next/image";
import One from "../../public/1.jpeg";  // Replace with your actual image path
import Two from "../../public/2.jpg";  // Replace with your actual image path
import Three from "../../public/3.jpeg";  // Replace with your actual image path
import Four from "../../public/4.jpeg";  // Replace with your actual image path

const GallerySection = () => {
  return (
    <div className="bg-[#F5D9B1] h-auto">
    <div className="max-w-4xl mx-auto p-6 ">
      <div className="grid grid-cols-3 gap-4">
        <Image
          src={One}
          alt="Window Photo 1"
          className=" col-span-1 h-64 object-cover rounded-lg shadow-md"
        />
        <Image
          src={Two}
          alt="Window Photo 2"
          className="col-span-2 h-64 object-cover rounded-lg shadow-md"
        />
      </div>

      <h2 className="text-center text-black text-2xl font-satisfy tracking-widest font-bold my-4">
        Love is like a movie,a journey of heartbeats & timeless memories
      </h2>

      <div className="grid grid-cols-3 gap-4">
        <Image
          src={Four}
          alt="Tree Photo"
          className="col-span-2 h-64 object-cover rounded-lg shadow-md"
        />
        <Image
          src={Three}
          alt="Picnic Photo"
          className="col-span-1 h-64 object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  </div>
  )
}

export default GallerySection;