// Particles configuration
const particlesConfig = {
  background: { 
    color: "#000" 
  },
  particles: {
    number: { 
      value: 80,
      density: {
        enable: true,
        area: 800
      }
    },
    color: {
      value: ["#ffffff", "#b3eaff", "#7efcff"]
    },
    shape: {
      type: ["circle"]
    },
    opacity: {
      value: 0.8,
      random: true,
      animation: {
        enable: true,
        speed: 1,
        minimumValue: 0.3,
        sync: false
      }
    },
    size: {
      value: 3.5,
      random: true,
      animation: {
        enable: true,
        speed: 2,
        minimumValue: 0.5,
        sync: false
      }
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: "none",
      random: true,
      straight: false,
      outModes: {
        default: "bounce"
      },
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200
      }
    },
    shadow: {
      enable: true,
      color: "#fff",
      blur: 18
    }
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab"
      },
      onClick: {
        enable: true,
        mode: "push"
      }
    },
    modes: {
      grab: {
        distance: 200,
        links: {
          opacity: 0.5
        }
      },
      push: {
        quantity: 4
      }
    }
  },
  detectRetina: true
};

// Initialize particles
tsParticles.load("particles", particlesConfig); 