// Loader functionality
function initLoader() {
  let pct = 0;
  const txt = document.querySelector("#loader .loading-text");
  const loader = document.getElementById("loader");
  const main = document.getElementById("main-content");
  const title = document.querySelector('.title');

  const loadInt = setInterval(() => {
    pct = Math.min(100, pct + Math.random() * 12);
    txt.textContent = `Verse-Jumping ${Math.floor(pct)}%`;
    if (pct === 100) {
      clearInterval(loadInt);
      loader.style.transition = "opacity .8s";
      loader.style.opacity = 0;
      setTimeout(() => {
        loader.style.display = "none";
        main.style.visibility = "visible";
        title.classList.add('visible');
      }, 800);
    }
  }, 120);

  // Handle scroll
  let lastScrollTop = 0;
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop) {
      // Scrolling down
      title.style.opacity = '0';
      title.style.transform = 'translateY(-20px)';
    } else {
      // Scrolling up
      title.style.opacity = '1';
      title.style.transform = 'translateY(0)';
    }
    lastScrollTop = currentScroll;
  });
}

// Universe map functionality
function initUniverseMap() {
  const nodes = Array.from(document.querySelectorAll("#universe-map .node"));
  let unlocked = 0;
  
  // Lock all except first
  nodes.slice(1).forEach(n => n.classList.add("locked"));

  nodes.forEach((node, i) => {
    node.addEventListener("click", () => {
      if (i <= unlocked) {
        document.getElementById(node.dataset.target)
          .scrollIntoView({ behavior: "smooth" });
        
        // Unlock next
        if (i === unlocked && nodes[i + 1]) {
          unlocked++;
          const nxt = nodes[unlocked];
          nxt.classList.remove("locked");
          
          // Add unlock animation
          nxt.style.animation = "unlockPulse 1s ease-out";
          setTimeout(() => {
            nxt.style.animation = "";
          }, 1000);
        }
      }
    });
  });
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initUniverseMap();
}); 