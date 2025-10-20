
import React, { useEffect, useRef } from 'react';
import { heroSection } from '../constants';

const GlowVisual: React.FC = () => (
  <div className="relative w-full h-64 sm:h-80 flex items-center justify-center glow-shadow-purple">
    <div className="absolute w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-[#7B61FF]/50 to-[#FF6EC7]/50 opacity-50 filter blur-2xl animate-pulse"></div>
    <div className="absolute w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-gradient-to-tl from-[#00E1FF]/50 to-[#7B61FF]/50 opacity-50 filter blur-2xl animate-pulse animation-delay-2000"></div>
    <svg className="absolute w-full h-full text-white/10" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="circuit" patternUnits="userSpaceOnUse" width="40" height="40">
          <path d="M0 10h10v10H0zM10 0v10h10V0zM20 20h10v10H20zM30 10v10h10V10zM10 20h10v10H10zM20 10v10h10V10z" stroke="currentColor" strokeWidth="0.5" fill="none"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit)"/>
    </svg>
    <div className="absolute text-5xl sm:text-7xl font-black gradient-text opacity-80">
      AI 2.0
    </div>
  </div>
);


const HeroSection: React.FC = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elementsToAnimate = [headlineRef.current, subheadlineRef.current, ctaRef.current, subtextRef.current];
    
    elementsToAnimate.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      elementsToAnimate.forEach(el => {
        if (el) observer.unobserve(el);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <section className="py-20 md:py-32 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 ref={headlineRef} className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 leading-tight fade-in-up">
          <span className="gradient-text">{heroSection.headline.split('—')[0]}</span>
          <br/>
          {heroSection.headline.split('—')[1]}
        </h1>
        <p ref={subheadlineRef} className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-8 fade-in-up" style={{ transitionDelay: '150ms' }}>
          {heroSection.subheadline}
        </p>
        <a 
          ref={ctaRef}
          href={heroSection.ctaButton.link}
          target="_blank"
          rel="noopener noreferrer"
          className="gradient-button inline-block text-lg font-bold text-white px-8 py-4 rounded-xl bg-gradient-to-r from-[#7B61FF] via-[#FF6EC7] to-[#00E1FF] transition-all duration-300 transform hover:scale-105 fade-in-up"
          style={{ transitionDelay: '300ms' }}
        >
          {heroSection.ctaButton.text}
        </a>
        <p ref={subtextRef} className="mt-4 text-sm text-gray-500 fade-in-up" style={{ transitionDelay: '450ms' }}>{heroSection.subtext}</p>
      </div>
      <div className="mt-16">
        <GlowVisual />
      </div>
    </section>
  );
};

export default HeroSection;