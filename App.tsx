import React, { useRef, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ExclusiveModelsSection from './components/ExclusiveModelsSection';
import OfferSection from './components/OfferSection';
import PlansSection from './components/PlansSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import ScrollProgressBar from './components/ScrollProgressBar';

const App: React.FC = () => {
  const glow1Ref = useRef<HTMLDivElement>(null);
  const glow2Ref = useRef<HTMLDivElement>(null);
  const glow3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (glow1Ref.current) {
        glow1Ref.current.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
      if (glow2Ref.current) {
        glow2Ref.current.style.transform = `translateY(${scrollY * 0.1}px)`;
      }
      if (glow3Ref.current) {
        glow3Ref.current.style.transform = `translateY(${scrollY * 0.15}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <ScrollProgressBar />
      <ParticleBackground />
      
      {/* Background Glows */}
      <div ref={glow1Ref} className="absolute top-0 -left-1/4 w-full h-full md:w-1/2 md:h-1/2 bg-[#7B61FF]/20 rounded-full filter blur-[150px] opacity-30 animate-pulse"></div>
      <div ref={glow2Ref} className="absolute bottom-0 -right-1/4 w-full h-full md:w-1/2 md:h-1/2 bg-[#FF6EC7]/20 rounded-full filter blur-[150px] opacity-30 animate-pulse animation-delay-2000"></div>
      <div ref={glow3Ref} className="absolute top-1/4 left-1/4 w-full h-full md:w-1/2 md:h-1/2 bg-[#00E1FF]/20 rounded-full filter blur-[150px] opacity-20 animate-pulse animation-delay-4000"></div>

      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
          <HeroSection />
          <FeaturesSection />
          <ExclusiveModelsSection />
          <OfferSection />
          <PlansSection />
          <FAQSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
