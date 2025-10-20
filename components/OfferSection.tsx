import React, { useState, useEffect } from 'react';
import { offerSection } from '../constants';

const AnimatedCountdown: React.FC = () => {
  const calculateTimeLeft = (): { days: number, hours: number, minutes: number, seconds: number } => {
    let countDownDate = localStorage.getItem('diwaliOfferEndDate');
    if (!countDownDate) {
      const newEndDate = new Date();
      newEndDate.setDate(newEndDate.getDate() + 10);
      countDownDate = newEndDate.getTime().toString();
      localStorage.setItem('diwaliOfferEndDate', countDownDate);
    }
    
    const difference = +countDownDate - +new Date();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });
  
  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <div className="flex items-center justify-center space-x-1 sm:space-x-2 md:space-x-4">
      <div className="text-center">
        <div className="text-4xl md:text-6xl font-black text-orange-400 animate-pulse">{formatTime(timeLeft.days)}</div>
        <div className="text-sm md:text-base text-orange-200">Days</div>
      </div>
      <div className="text-4xl md:text-6xl font-black text-orange-400">:</div>
      <div className="text-center">
        <div className="text-4xl md:text-6xl font-black text-orange-400 animate-pulse">{formatTime(timeLeft.hours)}</div>
        <div className="text-sm md:text-base text-orange-200">Hours</div>
      </div>
      <div className="text-4xl md:text-6xl font-black text-orange-400">:</div>
       <div className="text-center">
        <div className="text-4xl md:text-6xl font-black text-orange-400 animate-pulse">{formatTime(timeLeft.minutes)}</div>
        <div className="text-sm md:text-base text-orange-200">Mins</div>
      </div>
      <div className="text-4xl md:text-6xl font-black text-orange-400">:</div>
       <div className="text-center">
        <div className="text-4xl md:text-6xl font-black text-orange-400 animate-pulse">{formatTime(timeLeft.seconds)}</div>
        <div className="text-sm md:text-base text-orange-200">Secs</div>
      </div>
    </div>
  );
};


const OfferSection: React.FC = () => {
  return (
    <section id="offer" className="py-20 md:py-28">
      <div className="glass-panel rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden border-orange-500/30">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-500/20 rounded-full filter blur-3xl"></div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-orange-200">{offerSection.title}</h2>
            <p className="text-lg text-gray-300 mb-6">{offerSection.description}</p>
            <ul className="space-y-2 mb-8 flex flex-col items-center lg:items-start">
              {offerSection.benefits.map(benefit => (
                <li key={benefit} className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  {benefit}
                </li>
              ))}
            </ul>
            <a 
              href={offerSection.ctaButton.link} 
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-button inline-block text-lg font-bold text-white px-8 py-4 rounded-xl bg-gradient-to-r from-[#7B61FF] via-[#FF6EC7] to-[#00E1FF] transition-all duration-300 transform hover:scale-105"
            >
              {offerSection.ctaButton.text}
            </a>
          </div>
          <div className="flex items-center justify-center">
            <AnimatedCountdown />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;