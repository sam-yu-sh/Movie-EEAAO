// Sub-universe data
const subUniverses = [
  {
    id: 'universe-1',
    name: 'Alpha-verse',
    x: '15%',
    y: '25%',
    page: 'sub-universes/alphaverse.html',
    jumpQuestion: 'Are you willing to let Alpha-Waymond place the glowing, headphone-style verse-jump device on your head and guide it until its light pulses green?'
  },
  {
    id: 'universe-2',
    name: 'Spinner-verse',
    x: '25%',
    y: '35%',
    page: 'sub-universes/spinnerverse.html',
    jumpQuestion: 'Are you willing to strap on the glowing verse-jump headphones, grip the “Pepperoni Special” sign, and spin it with perfect precision until it clicks green?'
  },
  {
    id: 'universe-3',
    name: 'Raccoon-verse',
    x: '75%',
    y: '25%',
    page: 'sub-universes/raccoonverse.html',
    jumpQuestion: 'Are you willing to don the glowing verse-jump device, gently tug on the raccoon’s ear atop Chef Chad’s hat, and wait for the light to flash green?'
  },
  {
    id: 'universe-4',
    name: 'Hotdog-verse',
    x: '85%',
    y: '35%',
    page: 'sub-universes/hotdogverse.html',
    jumpQuestion: 'Are you willing to strap on the verse-jump headphones, coat your fingertip in mustard, and press it onto the sensor pad until it pulses green?'
  },
  {
    id: 'universe-5',
    name: 'Rock-verse',
    x: '15%',
    y: '75%',
    page: 'sub-universes/rockverse.html',
    jumpQuestion: 'Are you willing to pick up two smooth pebbles, tap them together under the verse-jump headset, and wait for its light to glow green?'
  },
  {
    id: 'universe-6',
    name: 'Kong-fu-verse',
    x: '25%',
    y: '85%',
    page: 'sub-universes/kongfuverse.html',
    jumpQuestion: 'Are you willing to wear the glowing headphones, deliver a flawless roundhouse kick into the training dummy, and see the device light up green?'
  },
  {
    id: 'universe-7',
    name: 'Laundry-verse',
    x: '75%',
    y: '75%',
    page: 'sub-universes/laundryverse.html',
    jumpQuestion: 'Are you willing to strap on the verse-jump device, load a washing machine with coins and detergent, start the spin cycle, and wait for the headset to flash green?'
  },
  {
    id: 'universe-8',
    name: 'Animated-verse',
    x: '85%',
    y: '85%',
    page: 'sub-universes/animatedverse.html',
    jumpQuestion: 'Are you willing to don the glowing headphones, sketch a frantic stick-figure battle on paper, and watch the device glow green?'
  }
];


function createSubUniverseDots() {
  const container = document.createElement('div');
  container.className = 'sub-universe-dots';
  
  // Store original positions for animation
  const dotData = [];

  subUniverses.forEach((universe, i) => {
    const dot = document.createElement('div');
    dot.className = 'sub-universe-dot';
    dot.id = universe.id;
    dot.style.left = universe.x;
    dot.style.top = universe.y;
    
    // Add random offset to break symmetry (±15% of window size)
    const offsetX = (Math.random() - 0.5) * 0.2 * window.innerWidth;
    const offsetY = (Math.random() - 0.5) * 0.2 * window.innerHeight;
    const baseX = parseFloat(universe.x) / 100 * window.innerWidth + offsetX;
    const baseY = parseFloat(universe.y) / 100 * window.innerHeight + offsetY;
    dotData.push({ dot, baseX, baseY, phase: Math.random() * Math.PI * 2, speed: 0.2 + Math.random() * 0.2, radius: 8 + Math.random() * 8 });

    const tooltip = document.createElement('div');
    tooltip.className = 'sub-universe-tooltip';
    tooltip.textContent = universe.name;
    dot.appendChild(tooltip);

    // Add click handler for jump modal with custom question
    dot.addEventListener('click', (e) => {
      e.preventDefault();
      const modal = document.getElementById('jump-modal');
      const question = document.getElementById('jump-modal-question');
      modal.style.display = 'flex';
      
      // Use the custom jump question for this universe
      question.textContent = universe.jumpQuestion;
      
      const yesBtn = document.getElementById('jump-yes');
      const noBtn = document.getElementById('jump-no');
      
      yesBtn.onclick = () => {
        modal.style.display = 'none';
        const loader = document.getElementById('custom-loader');
        if (loader) {
          loader.style.display = 'flex';
          setTimeout(() => {
            window.location.href = universe.page;
          }, 1200);
        } else {
          window.location.href = universe.page;
        }
      };
      noBtn.onclick = () => { modal.style.display = 'none'; };
    });

    container.appendChild(dot);
  });

  document.body.appendChild(container);

  // Animate dots
  function animateDots() {
    const t = Date.now() / 1000;
    dotData.forEach((data, i) => {
      // Slow, smooth floating using sine/cosine
      const dx = Math.sin(t * data.speed + data.phase) * data.radius;
      const dy = Math.cos(t * data.speed + data.phase) * data.radius;
      data.dot.style.left = `${((data.baseX + dx) / window.innerWidth) * 100}%`;
      data.dot.style.top = `${((data.baseY + dy) / window.innerHeight) * 100}%`;
    });
    requestAnimationFrame(animateDots);
  }
  animateDots();

  // Recalculate base positions on resize
  window.addEventListener('resize', () => {
    subUniverses.forEach((universe, i) => {
      dotData[i].baseX = parseFloat(universe.x) / 100 * window.innerWidth;
      dotData[i].baseY = parseFloat(universe.y) / 100 * window.innerHeight;
    });
  });
}

// Initialize when document is loaded
document.addEventListener('DOMContentLoaded', createSubUniverseDots); 