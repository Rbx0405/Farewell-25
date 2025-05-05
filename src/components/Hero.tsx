
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToContent = () => {
    document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 md:px-8">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-shadow animate-fadeIn mb-4 leading-tight">
          Embracing the <span className="text-[#D4AF37]">Golden Hour</span>
        </h1>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
          A nostalgic farewell to 2025, capturing moments in the warm glow of memories
        </p>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-float">
          <Button 
            variant="ghost" 
            size="icon"
            className="rounded-full h-12 w-12 border border-[#D4AF37]/50 hover:border-[#D4AF37] hover:bg-black/30"
            onClick={scrollToContent}
          >
            <ArrowDown className="h-6 w-6 text-[#D4AF37]" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
