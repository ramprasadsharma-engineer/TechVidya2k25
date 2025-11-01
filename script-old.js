/* ====================================================================
JAVASCRIPT (Dark Theme from your Portfolio)
ADAPTED FOR TECHVIDYA
====================================================================
*/
document.addEventListener('DOMContentLoaded', () => {
  
  // --- Data for the Event Cards ---
  const eventData = [
    {
      title: "Codeverse",
      description: "A 24-hour hackathon to build innovative solutions for real-world problems. Teams of 1-4.",
      icon: "💻"
    },
    {
      title: "Robo-Wars",
      description: "Design, build, and battle your own robots in our custom-built arena. May the best bot win!",
      icon: "🤖"
    },
    {
      title: "Pixel-Perfect",
      description: "A UI/UX design challenge. Redesign a popular app's interface or create a new one from scratch.",
      icon: "🎨"
    }
  ];

  // --- Populate Event Cards ---
  function populateEvents() {
    const grid = document.getElementById('events-grid');
    if (!grid) return;

    let eventHTML = '';
    eventData.forEach(event => {
      // Use .project-card to match the 3D tilt JS
      eventHTML += `
        <div class="project-card">
          <div class="card-content">
            <h3>${event.title}</h3>
            <p>${event.description}</p>
          </div>
        </div>
      `;
    });
    grid.innerHTML = eventHTML;
  }
  
  populateEvents(); // Create the cards
  
  // --- Run initial animations immediately ---
  const navbar = document.getElementById('navbar');
  if (navbar) {
    // Add 'visible' class immediately, not after a timeout
    navbar.classList.add('visible');
  }
  initializeEffects();
  setupScrollAnimations();
  setupThreeJS(); // From your portfolio
});

// --- Smooth Scrolling ---
function scrollToElement(elementId, event) {
  event.preventDefault(); // Stop default anchor behavior
  const element = document.getElementById(elementId);
  const navHeight = 80; // Height of your navbar
  const targetPosition = element.offsetTop - navHeight;

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });

  // Update active nav
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
  });
  event.target.classList.add("active");
}

// --- 3D Card Tilt Effect ---
function initializeEffects() {
  // Use .project-card to match your CSS/JS
  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("mousemove", function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Using the 3D tilt from your portfolio
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
      this.style.transition = 'transform 0.1s ease-out';
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
      this.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
    });
  });
}

// --- Scroll Fade-In Animations ---
function setupScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    }
  );

  document.querySelectorAll(".section").forEach((section) => {
    observer.observe(section);
  });
}

// --- Three.js Background (from your portfolio) ---
function setupThreeJS() {
  const canvas = document.getElementById("canvas-bg");
  if (!canvas) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true, // Make canvas transparent
  });

  // Set renderer to be transparent, the body handles the black bg
  renderer.setClearColor(0x000000, 0); 

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // --- Particle field from your portfolio ---
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 1000;
  const posArray = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 50;
  }

  particlesGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(posArray, 3)
  );

  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.005,
    color: "#ffffff",
    transparent: true,
    opacity: 0.8,
  });

  const particlesMesh = new THREE.Points(
    particlesGeometry,
    particlesMaterial
  );
  scene.add(particlesMesh);
  // --- End particle field ---

  camera.position.z = 5;

  // Mouse interaction
  let mouseXThree = 0,
    mouseYThree = 0;
  document.addEventListener("mousemove", (e) => {
    mouseXThree = (e.clientX / window.innerWidth) * 2 - 1;
    mouseYThree = -(e.clientY / window.innerHeight) * 2 + 1;
  });

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);

    // Rotate particles
    particlesMesh.rotation.x += 0.001;
    particlesMesh.rotation.y += 0.001;

    // Camera movement based on mouse
    camera.position.x += (mouseXThree * 0.5 - camera.position.x) * 0.05;
    camera.position.y += (mouseYThree * 0.5 - camera.position.y) * 0.05;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
  }

  animate();

  // Handle resize
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

