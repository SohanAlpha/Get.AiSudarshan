import React, { useState } from 'react';
import { plans } from '../constants';
import type { Plan } from '../types';

const PlanCard: React.FC<{ plan: Plan, isHighlighted: boolean, onClick: () => void }> = ({ plan, isHighlighted, onClick }) => (
  <div className={`glass-panel p-8 rounded-2xl text-center flex flex-col ${isHighlighted ? 'border-2 border-[#7B61FF] glow-border transform scale-105' : 'border border-white/10'}`}>
    {isHighlighted && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#7B61FF] text-white text-xs font-bold px-3 py-1 rounded-full">BEST VALUE</span>}
    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
    <p className="text-4xl font-extrabold mb-4 gradient-text">{plan.price.split(' ')[0]}<span className="text-lg font-medium text-gray-400">/{plan.price.split(' ')[2]}</span></p>
    <ul className="space-y-3 text-gray-300 mb-8 text-left flex-grow">
      {plan.features.map(feature => (
        <li key={feature} className="flex items-start">
          <svg className="w-5 h-5 mr-2 text-green-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <button 
      onClick={onClick}
      className={`w-full py-3 font-bold rounded-lg transition-all duration-300 ${isHighlighted ? 'gradient-button bg-gradient-to-r from-[#7B61FF] via-[#FF6EC7] text-white transform hover:scale-105' : 'bg-white/10 hover:bg-white/20 text-white'}`}
    >
      Choose Plan
    </button>
  </div>
);

const PlansSection: React.FC = () => {
  const [showFreeMessage, setShowFreeMessage] = useState(false);

  const handlePlanSelection = () => {
    setShowFreeMessage(true);
  };

  return (
    <section id="plans" className="py-20 md:py-28">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Upgrade for Speed & No Ads</h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">Choose a plan that fits your needs and unlock the full potential of Sudarshan AI.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
        {plans.map((plan) => (
          <PlanCard key={plan.name} plan={plan} isHighlighted={plan.name === 'Yearly'} onClick={handlePlanSelection} />
        ))}
      </div>
      {showFreeMessage && (
        <div className="mt-12 text-center p-6 rounded-2xl glass-panel max-w-3xl mx-auto transition-opacity duration-500 ease-in-out opacity-100">
            <p className="text-lg text-gray-200 font-semibold">
              Great news! As part of our special launch promotion, all features are currently available for free.
            </p>
            <p className="mt-2 text-gray-400">
              For any questions or partnership inquiries, please contact us at <a href="mailto:sudarshansohan@gmail.com" className="font-semibold text-[#7B61FF] hover:underline">sudarshansohan@gmail.com</a>.
            </p>
        </div>
      )}
    </section>
  );
};

export default PlansSection;