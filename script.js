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
  /* ---------- JOURNAL MONTH SLIDESHOW ---------- */
document.querySelectorAll(".month-card").forEach((card) => {
  const imageBox = card.querySelector(".month-image");
  const images = card.dataset.images.split(",").map(img => img.trim());
  let index = 0;

  imageBox.style.backgroundImage = `url(${images[0]})`;

  setInterval(() => {
    index = (index + 1) % images.length;
    imageBox.style.backgroundImage = `url(${images[index]})`;
  }, 3000); // change every 3 seconds
});
document.querySelectorAll(".month-card").forEach((card) => {
  const images = card.dataset.images.split(",").map(i => i.trim());
  const imageBox = card.querySelector(".month-image");
  const prevBtn = card.querySelector(".prev");
  const nextBtn = card.querySelector(".next");

  let index = 0;

  // set first image immediately
  imageBox.style.backgroundImage = `url(${images[0]})`;

  function changeImage(newIndex) {
    imageBox.style.opacity = 0;

    setTimeout(() => {
      index = newIndex;
      imageBox.style.backgroundImage = `url(${images[index]})`;
      imageBox.style.opacity = 1;
    }, 200);
  }

  nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    changeImage((index + 1) % images.length);
  });

  prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    changeImage((index - 1 + images.length) % images.length);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".timeline-item");

  if (!items.length) return;

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

  items.forEach((item) => observer.observe(item));
});
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".timeline-item");
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  items.forEach((item) => observer.observe(item));
});
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".timeline-item");
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");

          items.forEach((item) => item.classList.remove("active"));
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.6,
    }
  );

  items.forEach((item) => observer.observe(item));
});
