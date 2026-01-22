document.addEventListener("DOMContentLoaded", () => {
    const name = document.getElementById("heroName");
    const letters = name.querySelectorAll("span");
  
    /* ---------- HOVER: repel + fade ---------- */
    name.addEventListener("mousemove", (e) => {
      const rect = name.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
  
      letters.forEach((letter) => {
        const letterRect = letter.getBoundingClientRect();
        const letterX =
          letterRect.left - rect.left + letterRect.width / 2;
        const letterY =
          letterRect.top - rect.top + letterRect.height / 2;
  
        const dx = letterX - mouseX;
        const dy = letterY - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy) || 1;
  
        /* movement */
        const force = Math.min(90 / distance, 6);
        const moveX = dx * force;
        const moveY = dy * force;
  
        /* fade: closer = more faded */
        const opacity = Math.max(0.4, Math.min(distance / 120, 1));
  
        letter.style.transform = `translate(${moveX}px, ${moveY}px)`;
        letter.style.opacity = opacity;
      });
    });
  
    name.addEventListener("mouseleave", () => {
      letters.forEach((letter) => {
        letter.style.transform = "translate(0, 0)";
        letter.style.opacity = "1";
      });
    });
  
/* ---------- MOBILE DROPDOWN TOGGLE ---------- */
const dropdown = document.querySelector(".dropdown");
const trigger = document.querySelector(".dropdown-trigger");

if (dropdown && trigger) {
  trigger.addEventListener("click", (e) => {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      e.preventDefault(); // stop navigation on first tap
      dropdown.classList.toggle("open");
    }
  });

  // close dropdown when tapping outside
  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("open");
    }
  });
}


    /* ---------- SCROLL: gentle separation ---------- */
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
  
      letters.forEach((letter, index) => {
        const offset = (index - letters.length / 2) * 0.4;
        const scrollMove = Math.min(scrollY * 0.015, 20);
  
        letter.style.transform = `translateX(${offset * scrollMove}px)`;
      });
    });
  });
  
  /* ---------- FADE IN ON SCROLL ---------- */
const timelineItems = document.querySelectorAll(".timeline-item");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

timelineItems.forEach((item) => observer.observe(item));

/* ---------- TIMELINE SCROLL PROGRESS ---------- */
const timeline = document.querySelector(".timeline");
const progressLine = document.querySelector(".timeline-progress");

if (timeline && progressLine) {
  window.addEventListener("scroll", () => {
    const rect = timeline.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const progress =
      Math.min(
        Math.max((windowHeight - rect.top) / rect.height, 0),
        1
      ) * 100;

    progressLine.style.height = `${progress}%`;
  });
}

dropdownLinks.forEach((link) => {
    const isActive = link.dataset.year === entry.target.id;
    link.classList.toggle("active", isActive);
  });
  
  /* sync active dot */
  timelineItems.forEach((item) => {
    const dot = item.querySelector(".timeline-dot");
    if (!dot) return;
  
    dot.classList.toggle("active", item.id === entry.target.id);
  });
  