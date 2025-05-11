// ParticlesBackground.jsx
import { useCallback } from 'react';
import { Particles } from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: { value: '#0a0a16' }, // Más oscuro
        },
        particles: {
          number: {
            value: 60,
            density: { enable: true, area: 1000 },
          },
          color: { value: '#3b82f6' }, // Azul medio (tailwind blue-500)
          shape: { type: 'circle' },
          opacity: {
            value: 0.1,
            random: true,
            animation: {
              enable: true,
              speed: 0.3,
              minimumValue: 0.05,
              sync: false,
            },
          },
          size: {
            value: { min: 10, max: 30 },
            random: true,
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 5,
              sync: false,
            },
          },
          move: {
            enable: true,
            speed: 0.2,
            direction: 'top',
            outModes: { default: 'out' },
          },
        },
      }}
    />
  );
}
