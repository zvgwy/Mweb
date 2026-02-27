document.addEventListener("DOMContentLoaded", () => {

  const name = document.getElementById("heroName");
  if (name) {
    const letters = name.querySelectorAll("span");

    name.addEventListener("mousemove", (e) => {
      const rect = name.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      letters.forEach((letter) => {
        const letterRect = letter.getBoundingClientRect();
        const letterX = letterRect.left - rect.left + letterRect.width / 2;
        const letterY = letterRect.top - rect.top + letterRect.height / 2;

        const dx = letterX - mouseX;
        const dy = letterY - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy) || 1;

        const force = Math.min(90 / distance, 6);
        const opacity = Math.max(0.4, Math.min(distance / 120, 1));

        letter.style.transform = `translate(${dx * force}px, ${dy * force}px)`;
        letter.style.opacity = opacity;
      });
    });

    name.addEventListener("mouseleave", () => {
      letters.forEach((letter) => {
        letter.style.transform = "translate(0,0)";
        letter.style.opacity = "1";
      });
    });
  }

  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach((dropdown) => {
    const trigger = dropdown.querySelector(".dropdown-trigger");
    if (!trigger) return;

    trigger.addEventListener("click", (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dropdown.classList.toggle("open");
      }
    });
  });

  document.addEventListener("click", (e) => {
    dropdowns.forEach(d => {
      if (!d.contains(e.target)) d.classList.remove("open");
    });
  });

const items = document.querySelectorAll(".timeline-item");

if (items.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        items.forEach(i => i.classList.remove("active"));
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.1 });

  items.forEach(item => observer.observe(item));
}
  const timeline = document.querySelector(".timeline");
  const progressLine = document.querySelector(".timeline-progress");

  if (timeline && progressLine) {
    window.addEventListener("scroll", () => {
      const rect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress = Math.min(
        Math.max((windowHeight - rect.top) / rect.height, 0),
        1
      ) * 100;

      progressLine.style.height = `${progress}%`;
    });
  }

});



