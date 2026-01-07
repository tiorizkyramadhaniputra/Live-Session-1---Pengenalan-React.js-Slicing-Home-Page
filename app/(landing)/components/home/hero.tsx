import { FiFastForward } from "react-icons/fi";
import Button from "../ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="hero-section" className="container mx-auto h-screen flex">
      <div className="relative self-center">
        <Image src="/images/img-basketball.svg" alt="Basketball" width={432} height={423} className="grayscale absolute left-0 top--0"/>
        
        <div className="relative ml-40 w-full">
          <div className="text-red-500 italic">Friday Sale, 50%</div>
          
          <h1 className="font-extrabold text-[95px] italic bg-gradient-to-b leading-tight from-black to-[#979797] bg-clip-text text-transparent">
            WEAR YOUR <br /> TOP-QUALITY <br /> SPORTWEAR
          </h1>
          
          <p className="w-1/2 mt-10 leading-loose">
            Engineered for endurance and designed for speed. Experience gear
            that moves as fast as you do. Premium fabrics. Unmatched comfort.
            Limitless motion.
          </p>

          {/* Bagian Button */}
          <div className="flex gap-5 mt-14">
            <Button size="normal" variant="primary">
              Explore More <FiFastForward />
            </Button>
            
            <Button size="normal" variant="ghost">
              Watch Video
              <Image
                src="/images/icon-play-video.svg"
                alt="Play Video"
                width={29}
                height={29}
              />
            </Button>
          </div>
        </div>
        <Image 
        src="/images/img-hero.svg" 
        alt="Hero Image" 
        width={700} 
        height={950} 
        className="absolute -right-50 top-1/2 -translate-y-1/2"
        />
      </div>
      <Image src="images/img-ornament-hero.svg" alt="Ornament Hero" width={420} height={420} className="absolute -right-[200px] top-1/2 -translate-y-1/2"/>
    </section>
  );
};

export default HeroSection;