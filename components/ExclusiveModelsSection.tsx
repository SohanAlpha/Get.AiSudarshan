
import React from 'react';
import { exclusiveModels } from '../constants';

const ExclusiveModelsSection: React.FC = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = ((y / height) - 0.5) * -20; // -10deg to 10deg
    const rotateY = ((x / width) - 0.5) * 20;  // -10deg to 10deg
    
    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  };

  return (
    <section className="py-20 md:py-28">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Meet Our Exclusive AI Models</h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">Engineered for specialized tasks to supercharge your workflow.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {exclusiveModels.map((model, index) => (
          <div 
            key={model.name}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`interactive-model-card glass-panel rounded-2xl p-8 flex flex-col items-center text-center ${index === 0 ? 'hover:shadow-cyan-500/20 hover:border-cyan-500/50' : 'hover:shadow-pink-500/20 hover:border-pink-500/50'}`}
            style={{'--glow-color': index === 0 ? 'rgba(0, 225, 255, 0.15)' : 'rgba(255, 110, 199, 0.15)' } as React.CSSProperties}
          >
            <div style={{ transform: 'translateZ(20px)' }} className={`text-6xl mb-4 ${index === 0 ? 'glow-shadow-cyan' : 'glow-shadow-pink'}`}>
              {model.icon}
            </div>
            <h3 style={{ transform: 'translateZ(15px)' }} className="text-2xl font-bold text-white mb-2">{model.name}</h3>
            <span style={{ transform: 'translateZ(10px)' }} className={`inline-block px-3 py-1 text-sm font-semibold rounded-full mb-4 ${index === 0 ? 'bg-cyan-500/20 text-cyan-300' : 'bg-pink-500/20 text-pink-300'}`}>
              {model.highlight}
            </span>
            <p style={{ transform: 'translateZ(5px)' }} className="text-gray-300">{model.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExclusiveModelsSection;