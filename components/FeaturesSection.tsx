import React, { useEffect, useRef } from 'react';
import { features } from '../constants';
import type { Feature } from '../types';

const FeatureCard: React.FC<{ feature: Feature, icon: React.ReactNode }> = ({ feature, icon }) => (
  <div className="glass-panel p-6 rounded-2xl h-full transition-all duration-300 hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/20 transform hover:-translate-y-2">
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center glow-border">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-bold text-white flex items-center">
          {feature.title}
          {feature.isLocked && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 text-yellow-500 shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
            </svg>
          )}
        </h3>
        <p className="mt-1 text-gray-400">{feature.description}</p>
      </div>
    </div>
  </div>
);

const FeatureIcons = [
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#7B61FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FF6EC7]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#00E1FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>,
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#7B61FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>,
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FF6EC7]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#00E1FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
];

const FeaturesSection: React.FC = () => {
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

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
      {
        threshold: 0.1,
      }
    );

    featureRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      featureRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
      observer.disconnect();
    };
  }, []);

  return (
    <section id="features" className="py-20 md:py-28">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why Choose Sudarshan AI 2.0</h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">Discover the unparalleled capabilities that set us apart.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            // FIX: The ref callback was implicitly returning a value, which is not allowed for a ref callback. Changed to a block body to ensure it returns void.
            ref={(el) => { featureRefs.current[index] = el; }}
            className="feature-card-container"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <FeatureCard feature={feature} icon={FeatureIcons[index % FeatureIcons.length]} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
