function initHeader() {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");
  const header = document.querySelector(".navbar");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }

  const handleScroll = () => {
    if (header) {
      header.classList.toggle("scrolled", window.scrollY > 50);
    }
  };
  window.addEventListener("scroll", handleScroll);
}

// FAQ Toggle
const faqItems = document.querySelectorAll(".faq-item");
if (faqItems.length > 0) {
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    if (question) {
      question.addEventListener("click", () => {
        faqItems.forEach((otherItem) => {
          if (otherItem !== item) otherItem.classList.remove("active");
        });
        item.classList.toggle("active");
      });
    }
  });
}

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document
  .querySelectorAll(
    ".section-heading, .product-card, .industry-card, .service-item",
  )
  .forEach((el) => {
    observer.observe(el);
  });

// Smooth scroll to FAQ section
const faqBadge = document.querySelector(".faq-badge");
if (faqBadge) {
  faqBadge.addEventListener("click", () => {
    document
      .querySelector(".faq-section")
      .scrollIntoView({ behavior: "smooth" });
  });
}

// Stats Counter Animation Logic
const statsSection = document.querySelector(".stats");
if (statsSection) {
  const counters = document.querySelectorAll(".stat-number");
  let animated = false;

  const startCounting = () => {
    counters.forEach((counter) => {
      const target = +counter.getAttribute("data-target");
      const suffix = counter.getAttribute("data-suffix") || "";
      const duration = 2000; // Animation duration in ms
      const startTime = performance.now();

      const update = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentCount = Math.floor(progress * target);

        counter.innerText = currentCount + suffix;

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          counter.innerText = target + suffix;
        }
      };
      requestAnimationFrame(update);
    });
  };

  const statsObserver = new IntersectionObserver(
    (entries) => {
      if (entries.some((entry) => entry.isIntersecting) && !animated) {
        startCounting();
        animated = true;
      }
    },
    { threshold: 0.1 },
  );

  statsObserver.observe(statsSection);
}

//
const slider = document.getElementById("slider");
if (slider) {
  window.sliderScrollLeft = function () {
    slider.scrollBy({ left: -300, behavior: "smooth" });
  };
  window.sliderScrollRight = function () {
    slider.scrollBy({ left: 300, behavior: "smooth" });
  };
}

// Testimonials — client showcase
const clientTestimonials = [
  {
    quote:
      "The UV weathering and rain chambers from Provert have been running in our accelerated aging lab for three years without a single calibration failure. Their technical support responds faster than any other supplier in our approved vendor list — an essential quality at our operational tempo.",
    name: "Dr. Dinesh Kaushik",
    title: "Senior Scientist · DRDO, Hyderabad",
    initials: "DK"
  },
  {
    quote:
      "Provert’s environmental test chambers have significantly improved our product validation process. The precision and consistency they offer are outstanding. We’ve seen a noticeable increase in product reliability since implementing their solutions.",
    name: "Vinod Kumar",
    title: "Head Of Manufacturing · Indian Oil Limited",
    initials: "VK"
  },
  {
    quote:
      "We’ve been using Provert’s thermal and humidity chambers for over two years now, and the performance has been flawless. Highly durable and easy to operate. The customer support team is also very responsive and knowledgeable.",
    name: "Amit Kulkarni",
    title: "Senior Quality Manager · Havells India Limited",
    initials: "AK"
  },
  {
    quote:
      "The quality of Provert’s equipment is excellent, but what truly stands out is their after-sales support. Quick, knowledgeable and reliable. They’ve been instrumental in helping us optimize our testing processes and resolve any issues promptly.",
    name: "Pooja Mehta",
    title: "Quality Director · Honda",
    initials: "PM"
  },
  {
    quote:
      "From requirement gathering to commissioning, the team was professional and timelines were respected. Our walk-in chamber integrates cleanly with our lab workflow and documentation support was thorough.",
    name: "Rajesh Nair",
    title: "Plant Engineering Lead · Minda Corporation",
    initials: "RN"
  },
  {
    quote:
      "We required compliance-focused environmental testing equipment. Provert delivered chambers that met our specifications with clear validation support and operator training. Strong recommendation for regulated industries.",
    name: "Sneha Iyer",
    title: "QA & Compliance Manager · Indian Railways",
    initials: "SI"
  },
  {
    quote:
      "Salt spray and corrosion testing results are now repeatable shift-to-shift. Build quality is solid and the HMI is intuitive for our technicians. Communication during installation was excellent.",
    name: "Karthik Desai",
    title: "R&D Lab Manager · CIPET",
    initials: "KD"
  }
];

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function formatQuote(text) {
  const safe = escapeHtml(text);
  // Replace **text** with text (remove double asterisks)
  return safe.replace(/\*\*(.*?)\*\*/g, "$1");
}

function initClientShowcase() {
  const track = document.getElementById("clientShowcaseTrack");
  const prevBtn = document.getElementById("clientShowcasePrev");
  const nextBtn = document.getElementById("clientShowcaseNext");
  if (!track || !prevBtn || !nextBtn) return;

  track.innerHTML = clientTestimonials
    .map(
      (t) => `
      <article class="client-tcard">
        <div class="client-tcard__quote-box">
          <p class="client-tcard__text">${formatQuote(t.quote)}</p>
        </div>
        <div class="client-tcard__divider"></div>
        <footer class="client-tcard__footer">
          <div class="client-tcard__avatar-wrap">
            <span class="client-tcard__avatar-initials">${t.initials}</span>
          </div>
          <div class="client-tcard__meta">
            <h4 class="client-tcard__name">${t.name}</h4>
            <p class="client-tcard__title">${t.title}</p>
          </div>
        </footer>
      </article>
    `
    )
    .join("");

  const getScrollStep = () => {
    const card = track.querySelector(".client-tcard");
    if (card) {
      // Return card width + gap (approx 24px)
      return card.getBoundingClientRect().width + 24;
    }
    return 360;
  };

  nextBtn.addEventListener("click", () => {
    track.scrollBy({ left: getScrollStep(), behavior: "smooth" });
  });

  prevBtn.addEventListener("click", () => {
    track.scrollBy({ left: -getScrollStep(), behavior: "smooth" });
  });
}

// Logo hover effects
document.querySelectorAll(".logo").forEach((logo) => {
  const span = logo.querySelector("span");
  if (span) {
    logo.addEventListener("click", function () {
      console.log("Logo clicked: " + span.textContent);
    });
  }
});

// initHeader initialization moved to unified initAll function at the bottom

//<!-- why-us -->

document.querySelectorAll(".learn-more-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    alert("Learn More - Additional information would load here");
  });
});

document.querySelectorAll(".certificate-item").forEach((item) => {
  item.addEventListener("mouseenter", function () {
    this.style.transform = "translateX(8px)";
  });

  item.addEventListener("mouseleave", function () {
    this.style.transform = "translateX(0)";
  });
});

const ratingBox = document.querySelector(".rating-box");
if (ratingBox) {
  ratingBox.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.02)";
    this.style.boxShadow = "0 10px 30px rgba(17, 110, 74, 0.15)";
  });

  ratingBox.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)";
    this.style.boxShadow = "none";
  });
}

// Dynamic scroll reveal animations for text & images
function initRevealAnimations() {
  // Add class indicating JavaScript is active (enabling animation visibility control)
  document.documentElement.classList.add("js-active");

  const groups = document.querySelectorAll(".reveal-group");
  if (groups.length === 0) return;

  const revealObserverOptions = {
    threshold: 0.05,
    rootMargin: "0px 0px -50px 0px",
  };

  const revealGroup = (group) => {
    const items = group.querySelectorAll(".reveal-text, .reveal-image, .reveal-card");
    let delay = 0;
    const staggerDelay = 80;
    const imageDelayOffset = 350;

    items.forEach((item) => {
      if (item.classList.contains("revealed")) return;

      let itemDelay = delay;
      if (item.classList.contains("reveal-image")) {
        itemDelay = Math.max(itemDelay, imageDelayOffset);
      }

      item.style.transitionDelay = `${itemDelay}ms`;
      
      // Force layout recalculation
      void item.offsetHeight;
      
      item.classList.add("revealed");
      delay += staggerDelay;
    });
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        revealGroup(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, revealObserverOptions);

  groups.forEach((group) => {
    revealObserver.observe(group);
  });
}

// Featured Products Slider
function initProductsSlider() {
  const track = document.querySelector('.products-slider-track');
  const prevBtn = document.querySelector('.products-btn-prev');
  const nextBtn = document.querySelector('.products-btn-next');
  console.log('initProductsSlider running. Track:', track, 'PrevBtn:', prevBtn, 'NextBtn:', nextBtn);
  if (track && prevBtn && nextBtn) {
    nextBtn.addEventListener('click', () => {
      console.log('Next clicked. Current scrollLeft:', track.scrollLeft, 'scrollWidth:', track.scrollWidth, 'clientWidth:', track.clientWidth);
      track.scrollBy({ left: 314, behavior: 'smooth' });
      setTimeout(() => {
        console.log('After scroll Next. scrollLeft:', track.scrollLeft);
      }, 500);
    });
    prevBtn.addEventListener('click', () => {
      console.log('Prev clicked. Current scrollLeft:', track.scrollLeft);
      track.scrollBy({ left: -314, behavior: 'smooth' });
      setTimeout(() => {
        console.log('After scroll Prev. scrollLeft:', track.scrollLeft);
      }, 500);
    });
  }
}

// Expandable Search Box Handler
function initSearchBox() {
  const searchBox = document.querySelector(".search-box");
  const searchInput = document.querySelector(".search-input");
  const searchIcon = document.querySelector(".search-icon");

  if (searchBox && searchIcon && searchInput) {
    searchIcon.addEventListener("click", (e) => {
      searchBox.classList.toggle("active");
      if (searchBox.classList.contains("active")) {
        searchInput.focus();
        e.stopPropagation();
      }
    });

    document.addEventListener("click", (e) => {
      if (!searchBox.contains(e.target)) {
        searchBox.classList.remove("active");
      }
    });
  }
}

// Unified Page Initialization
function initAll() {
  initHeader();
  initClientShowcase();
  initProductsSlider();
  initRevealAnimations();
  initSearchBox();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAll);
} else {
  initAll();
}
