import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function ParticleBackground() {

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="hero-particles"
      init={particlesInit}
      options={{
        fullScreen: false,

        background: {
          color: {
            value: "transparent",
          },
        },

        fpsLimit: 60,

        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              area: 800,
            },
          },

          color: {
            value: "#C8A24C",
          },

          links: {
            enable: true,
            color: "#C8A24C",
            distance: 150,
            opacity: 0.35,
            width: 1,
          },

          move: {
            enable: true,
            speed: 1,
            outModes: {
              default: "bounce",
            },
          },

          opacity: {
            value: 0.45,
          },

          size: {
            value: {
              min: 1,
              max: 3,
            },
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },

            resize: {
              enable: true,
            },
          },

          modes: {
            grab: {
              distance: 180,

              links: {
                opacity: 0.8,
              },
            },
          },
        },

        detectRetina: true,
      }}
      style={{
        position: "absolute",
        inset: 0,
      }}
    />
  );
}

export default ParticleBackground;