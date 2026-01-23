import React, { useEffect, useState } from 'react';

const SplashEffect = ({ color = '#10B981', count = 3 }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (particles.length < count) {
      const newParticles = Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 1 + 0.5,
      }));
      setParticles(newParticles);
    }
  }, [count, particles.length]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: color,
            animation: `float ${particle.duration}s infinite ease-in-out`,
          }}
        />
      ))}
    </div>
  );
};

export default SplashEffect;