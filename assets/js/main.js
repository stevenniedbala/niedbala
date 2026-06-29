const portfolioItems = [
  { name: "nohorooms.com", tagline: "Premium room rentals", url: "https://nohorooms.com" },
  { name: "vyvv.com", tagline: "Modern living spaces", url: "https://vyvv.com" },
  { name: "Portfolio", tagline: "Real estate holdings", url: "#" },
];

const testimonials = [
  {
    image: "https://cdn.prod.website-files.com/5f10771cbfea70224f1ce526/5feb94312d2542d2381dd5ad_Sophia-Amoruso-Girlboss-Testimonial-04.jpg",
    quote: "I could not have asked for a better home for Girlboss. Tiny has taken the vision and run with it.",
    name: "Sophia Amoruso",
    title: "Founder of Girlboss",
  },
  {
    image: "https://cdn.prod.website-files.com/5f10771cbfea70224f1ce526/65279aeb491bf4f410779435_unnamed%201.webp",
    quote: "We are thrilled to be partnering on a shared vision for the future of Letterboxd.",
    name: "Matthew Buchanan",
    title: "Co-founder of Letterboxd",
  },
  {
    image: "https://cdn.prod.website-files.com/5f10771cbfea70224f1ce526/5f553bc334fd3965b98f79e7_Dan_retouched.jpg",
    quote: "I was extremely pleased with how smooth the transition was for our team and community.",
    name: "Dan Cederholm",
    title: "Co-founder of Dribbble",
  },
  {
    image: "https://cdn.prod.website-files.com/5f10771cbfea70224f1ce526/5f553bc401e7e988aaa3a00e_Joel_retouched.jpg",
    quote: "They were clear about their valuation mindset and loved our profitable approach.",
    name: "Joel Gascoigne",
    title: "Co-founder and CEO of Buffer",
  },
  {
    image: "https://cdn.prod.website-files.com/5f10771cbfea70224f1ce526/5f553bc38e3cdf3cf2aafdfb_Josh_retouched.jpg",
    quote: "Working with Tiny was seamless, fast, painless, and respectful.",
    name: "Josh Pigford",
    title: "Founder of Baremetrics",
  },
  {
    image: "https://cdn.prod.website-files.com/5f10771cbfea70224f1ce526/5f928a10a0e76526552410a7_Nicole-testimonial.jpg",
    quote: "Andrew and the team made the process easy and support me when I need them.",
    name: "Nicole Smith",
    title: "Founder of Flytographer",
  },
  {
    image: "https://cdn.prod.website-files.com/5f10771cbfea70224f1ce526/5f553bc350f0d2d778bfe0c3_Hector-Giner-Z1_retouched.jpg",
    quote: "Transparent and straightforward. Tiny gave us access to world-class knowledge and talent.",
    name: "Hector Giner",
    title: "Founder of Z1",
  },
  {
    image: "https://cdn.prod.website-files.com/5f10771cbfea70224f1ce526/5f553bc368a9d293f6c81f79_Geoff_retouched.jpg",
    quote: "Tiny moved at lightning speed and kept terms straightforward without wasting time.",
    name: "Geoff Schmidt",
    title: "Co-founder of Meteor",
  },
  {
    image: "https://cdn.prod.website-files.com/5f10771cbfea70224f1ce526/5f62842923cac8a9450bf1ab_Chris%20Winn.jpg",
    quote: "Tiny has given our team a home and the resources to focus on product and business.",
    name: "Chris Winn",
    title: "CEO of CreativeMarket",
  },
];

const companies = [
  {
    name: "vyvv.com",
    url: "https://vyvv.com",
    image: "",
    logo: "",
    theme: {
      bg: "#171a20",
      color: "#ffffff",
      font: "",
    },
  },
  {
    name: "nohorooms",
    url: "https://nohorooms.com",
    image: "",
    logo: "",
    theme: {
      bg: "#dddddd",
      color: "#ff385c",
      font: "'Nunito Sans', sans-serif",
    },
  },
  { name: "Portfolio", url: "https://vyvv.com", image: "", logo: "" },
];

function query(selector, root = document) {
  return root.querySelector(selector);
}

function queryAll(selector, root = document) {
  return Array.from(root.querySelectorAll(selector));
}

function setupNavigation() {
  const navToggle = query(".nav-toggle");
  const nav = query(".site-nav");
  const moreMenu = query(".more-menu");
  const moreToggle = query(".more-toggle");

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const shouldOpen = !nav.classList.contains("is-open");
      nav.classList.toggle("is-open", shouldOpen);
      navToggle.classList.toggle("is-open", shouldOpen);
      navToggle.setAttribute("aria-expanded", String(shouldOpen));
    });

    queryAll("a", nav).forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 920) {
          nav.classList.remove("is-open");
          navToggle.classList.remove("is-open");
          navToggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  if (moreMenu && moreToggle) {
    moreToggle.addEventListener("click", (event) => {
      event.stopPropagation();
      const shouldOpen = !moreMenu.classList.contains("is-open");
      moreMenu.classList.toggle("is-open", shouldOpen);
      moreToggle.setAttribute("aria-expanded", String(shouldOpen));
    });

    document.addEventListener("click", (event) => {
      if (!moreMenu.contains(event.target)) {
        moreMenu.classList.remove("is-open");
        moreToggle.setAttribute("aria-expanded", "false");
      }
    });
  }
}

function openModal(modal) {
  if (!modal) {
    return;
  }

  queryAll(".modal.is-open").forEach((item) => item.classList.remove("is-open"));
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("has-open-modal");
}

function closeModal(modal) {
  if (!modal) {
    return;
  }

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  if (!query(".modal.is-open")) {
    document.body.classList.remove("has-open-modal");
  }
}

function setupModals() {
  const newsletterModal = query("#newsletter-modal");
  const contactModal = query("#contact-modal");

  queryAll(".newsletter-trigger").forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      openModal(newsletterModal);
    });
  });

  queryAll(".contact-trigger").forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      openModal(contactModal);
    });
  });

  queryAll("[data-modal-close]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      closeModal(trigger.closest(".modal"));
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") {
      return;
    }

    queryAll(".modal.is-open").forEach((modal) => closeModal(modal));
  });
}

function setupFakeForms() {
  queryAll(".js-fake-submit").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const feedback = query(".form-feedback", form);
      if (feedback) {
        feedback.textContent = form.dataset.success || "Thanks! We got it.";
        feedback.classList.add("is-success");
      }
      form.reset();
    });
  });
}

function renderPortfolioMarquee() {
  const track = query("[data-portfolio-track]");
  if (!track) {
    return;
  }

  const doubled = [...portfolioItems, ...portfolioItems];
  const markup = doubled
    .map(
      (item) => `
      <a class="marquee-item" href="${item.url}" target="_blank" rel="noreferrer">
        <strong>${item.name}</strong>
        <span>${item.tagline}</span>
      </a>
    `
    )
    .join("");

  track.innerHTML = markup;
}

function setupTestimonials() {
  const slider = query("[data-testimonial-slider]");
  if (!slider) {
    return;
  }

  const image = query("[data-testimonial-image]", slider);
  const quote = query("[data-testimonial-quote]", slider);
  const name = query("[data-testimonial-name]", slider);
  const title = query("[data-testimonial-title]", slider);
  const sidePrev = query("[data-testimonial-side-prev]", slider);
  const sideNext = query("[data-testimonial-side-next]", slider);
  const prev = query("[data-testimonial-prev]", slider);
  const next = query("[data-testimonial-next]", slider);
  let index = 0;
  let timer = null;

  function render() {
    const item = testimonials[index];
    const prevItem = testimonials[(index - 1 + testimonials.length) % testimonials.length];
    const nextItem = testimonials[(index + 1) % testimonials.length];
    image.src = item.image;
    image.alt = item.name;
    quote.textContent = `"${item.quote}"`;
    name.textContent = item.name;
    title.textContent = item.title;
    if (sidePrev) {
      sidePrev.src = prevItem.image;
      sidePrev.alt = prevItem.name;
    }
    if (sideNext) {
      sideNext.src = nextItem.image;
      sideNext.alt = nextItem.name;
    }
  }

  function startTimer() {
    if (timer) {
      window.clearInterval(timer);
    }
    timer = window.setInterval(() => {
      index = (index + 1) % testimonials.length;
      render();
    }, 7000);
  }

  function resetTimer() {
    if (timer) {
      window.clearInterval(timer);
    }
    startTimer();
  }

  prev.addEventListener("click", () => {
    index = (index - 1 + testimonials.length) % testimonials.length;
    render();
    resetTimer();
  });

  next.addEventListener("click", () => {
    index = (index + 1) % testimonials.length;
    render();
    resetTimer();
  });

  slider.addEventListener("mouseenter", () => {
    if (timer) {
      window.clearInterval(timer);
      timer = null;
    }
  });

  slider.addEventListener("mouseleave", () => {
    startTimer();
  });

  render();
  startTimer();
}

function renderCompanies() {
  const grid = query("[data-companies-grid]");
  if (!grid) {
    return;
  }

  const fragment = document.createDocumentFragment();

  companies.forEach((company) => {
    const link = document.createElement("a");
    link.className = "company-card";
    link.href = company.url;
    if (company.url !== "#") {
      link.target = "_blank";
      link.rel = "noreferrer";
    }
    link.setAttribute("aria-label", company.name);

    if (company.theme) {
      link.style.background = company.theme.bg;
      link.style.borderColor = company.theme.bg;
    }

    if (company.image) {
      const background = document.createElement("img");
      background.className = "company-bg";
      background.src = company.image;
      background.alt = `${company.name} background`;
      background.loading = "lazy";
      link.append(background);
    }

    const overlay = document.createElement("span");
    overlay.className = "company-overlay";

    if (company.logo) {
      const logo = document.createElement("img");
      logo.className = "company-logo";
      logo.src = company.logo;
      logo.alt = company.name;
      logo.loading = "lazy";
      overlay.append(logo);
    } else if (company.label) {
      const wrapper = document.createElement("span");
      wrapper.className = "company-name-hover";

      const labelSpan = document.createElement("span");
      labelSpan.className = "company-name-text company-name-default";
      labelSpan.textContent = company.label;

      const urlSpan = document.createElement("span");
      urlSpan.className = "company-name-text company-name-url";
      urlSpan.textContent = company.name;

      if (company.theme) {
        labelSpan.style.fontFamily = company.theme.font;
        labelSpan.style.color = company.theme.color;
        urlSpan.style.fontFamily = company.theme.font;
        urlSpan.style.color = company.theme.color;
      }

      wrapper.append(labelSpan, urlSpan);
      overlay.append(wrapper);
    } else {
      const nameText = document.createElement("span");
      nameText.className = "company-name-text";
      nameText.textContent = company.name;
      if (company.theme) {
        nameText.style.fontFamily = company.theme.font;
        nameText.style.color = company.theme.color;
      }
      overlay.append(nameText);
    }

    link.append(overlay);
    fragment.append(link);
  });

  grid.append(fragment);
}

function setupFadeIn() {
  const items = queryAll(".fade-in");
  if (!items.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  items.forEach((item) => observer.observe(item));
}

function setupBrushReveal() {
  const canvas = document.getElementById("brushCanvas");
  const img    = document.getElementById("heroIllustration");
  if (!canvas || !img) return;

  // Canvas sits on top of the full-color image.
  // Each frame: draw the image in grayscale onto the canvas, then erase
  // brushstroke shapes through it — revealing the color layer beneath.
  // No masks, no stacking context conflicts, works on mobile.

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width  = rect.width;
    canvas.height = rect.height;
  }
  resize();

  const ctx = canvas.getContext("2d");

  function seededRand(seed) {
    let s = seed;
    return function() {
      s = (s * 1664525 + 1013904223) & 0xffffffff;
      return (s >>> 0) / 4294967296;
    };
  }

  function eraseStroke(tipX, centerY, thickness, dir, rand) {
    const W = canvas.width, H = canvas.height;
    const segments = 80;
    const bristles = 6;
    const startX = dir === 1 ? -10 : W + 10;

    const topPts = [], botPts = [];
    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const x = startX + (tipX - startX) * t;
      const jitter = (rand() - 0.5) * thickness * 0.35;
      const halfT = thickness / 2 + (rand() - 0.5) * thickness * 0.2;
      topPts.push([x, centerY - halfT + jitter]);
      botPts.push([x, centerY + halfT + jitter]);
    }

    // Erase the main body — destination-out punches a hole in the cover layer
    ctx.save();
    ctx.globalCompositeOperation = "destination-out";

    // Feathered leading edge
    const grad = ctx.createLinearGradient(
      dir === 1 ? tipX - W * 0.12 : tipX + W * 0.12, 0,
      tipX, 0
    );
    grad.addColorStop(0, "rgba(0,0,0,1)");
    grad.addColorStop(0.6, "rgba(0,0,0,0.85)");
    grad.addColorStop(0.88, "rgba(0,0,0,0.4)");
    grad.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = grad;

    ctx.beginPath();
    ctx.moveTo(topPts[0][0], topPts[0][1]);
    for (let i = 1; i < topPts.length; i++) ctx.lineTo(topPts[i][0], topPts[i][1]);
    for (let i = botPts.length - 1; i >= 0; i--) ctx.lineTo(botPts[i][0], botPts[i][1]);
    ctx.closePath();
    ctx.fill();

    // Bristle lines
    for (let b = 0; b < bristles; b++) {
      const offset = (rand() - 0.5) * thickness * 0.9;
      const bX0 = startX;
      const bX1 = tipX + (rand() - 0.5) * W * 0.04;
      ctx.beginPath();
      ctx.moveTo(bX0, centerY + offset);
      for (let i = 1; i <= 20; i++) {
        const t = i / 20;
        ctx.lineTo(bX0 + (bX1 - bX0) * t, centerY + offset + (rand() - 0.5) * 8);
      }
      ctx.strokeStyle = `rgba(0,0,0,${0.18 + rand() * 0.25})`;
      ctx.lineWidth = 1 + rand() * 2;
      ctx.lineCap = "round";
      ctx.stroke();
    }

    ctx.restore();
  }

  const strokeDuration = 1400;
  const strokeGap = 1000;
  const totalDuration = strokeDuration + 3 * strokeGap;
  let startTime = null;
  let done = false;

  function tick(now) {
    if (!startTime) startTime = now;
    const elapsed = now - startTime;
    const W = canvas.width, H = canvas.height;

    // Redraw grayscale image each frame as the cover, then erase stroke areas
    ctx.globalCompositeOperation = "source-over";
    ctx.filter = "saturate(0) brightness(1.05)";
    ctx.drawImage(img, 0, 0, W, H);
    ctx.filter = "none";

    const strokes = [
      { centerY: H * 0.17, thickness: H * 0.29, dir:  1, seed: 1 },
      { centerY: H * 0.43, thickness: H * 0.28, dir: -1, seed: 2 },
      { centerY: H * 0.67, thickness: H * 0.26, dir:  1, seed: 3 },
      { centerY: H * 0.88, thickness: H * 0.24, dir: -1, seed: 4 },
    ];

    strokes.forEach((s, i) => {
      const t = Math.max(0, Math.min(1, (elapsed - i * strokeGap) / strokeDuration));
      if (t <= 0) return;
      const eased = 1 - Math.pow(1 - t, 3);
      const tipX = s.dir === 1
        ? -10 + (W + 20) * eased
        : W + 10 - (W + 20) * eased;
      eraseStroke(tipX, s.centerY, s.thickness, s.dir, seededRand(s.seed * 999));
    });

    if (elapsed < totalDuration) {
      requestAnimationFrame(tick);
    } else if (!done) {
      done = true;
      // Fully erase cover — image completely revealed
      ctx.clearRect(0, 0, W, H);
      drawUnderline();
    }
  }

  function drawUnderline() {
    const path = document.querySelector(".hero-underline-path");
    if (!path) return;
    const len = path.getTotalLength();
    path.style.strokeDasharray = len;
    path.style.strokeDashoffset = len;
    path.getBoundingClientRect();
    path.style.transition = "stroke-dashoffset 0.9s cubic-bezier(0.4, 0, 0.2, 1)";
    path.style.strokeDashoffset = "0";
  }

  function animateCounters() {
    const duration = totalDuration;
    const els = document.querySelectorAll(".stat-num");
    els.forEach(el => {
      const target = parseInt(el.dataset.target, 10);
      const prefix = el.dataset.prefix || "";
      const suffix = el.dataset.suffix || "";
      const start = performance.now();
      function step(now) {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = prefix + Math.round(eased * target) + suffix;
        if (t < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }

  function start() {
    setTimeout(() => {
      requestAnimationFrame(tick);
      animateCounters();
    }, 300);
  }

  if (img.complete) {
    start();
  } else {
    img.addEventListener("load", start);
  }
}

setupNavigation();
setupModals();
setupFakeForms();
renderPortfolioMarquee();
setupTestimonials();
renderCompanies();
setupFadeIn();
setupBrushReveal();
