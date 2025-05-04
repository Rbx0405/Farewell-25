
import { useEffect } from 'react';
import GoldenHourScene from '@/components/GoldenHourScene';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedMemories from '@/components/FeaturedMemories';
import Quote from '@/components/Quote';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* 3D Background Scene */}
      <GoldenHourScene />
      
      {/* Content Layer */}
      <div className="content-overlay flex flex-col min-h-screen">
        <Navbar />
        <Hero />
        <FeaturedMemories />
        <Quote />
      </div>
    </div>
  );
};

export default Index;
