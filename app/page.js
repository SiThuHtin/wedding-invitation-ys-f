
import FormSection from "./components/formsection";
import WeddingSection from "./components/letter";
import GallerySection from "./components/gallery";
import Weddinginfo from "./components/weddinginfo";
import Weddingevents from "./components/weddingevents";
import HeroSection from "./components/hero";





export default function Home() {
  return (
    <main className="bg-white">
      <HeroSection/>
      <GallerySection/>
      <Weddinginfo/>
      <Weddingevents/>
      <FormSection/>
      <WeddingSection/>
    </main>
  );
}
