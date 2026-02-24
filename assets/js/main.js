const portfolioItems = [
  { name: "Nohorooms", tagline: "Premium room rentals", url: "#" },
  { name: "vyvv.com", tagline: "Modern living spaces", url: "#" },
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
  { name: "Nohorooms", url: "#", image: "", logo: "" },
  { name: "vyvv.com", url: "#", image: "", logo: "" },
  { name: "Portfolio", url: "#", image: "", logo: "" },
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
    } else {
      const nameText = document.createElement("span");
      nameText.className = "company-name-text";
      nameText.textContent = company.name;
      overlay.append(nameText);
    }

    link.append(overlay);
    fragment.append(link);
  });

  grid.append(fragment);
}

setupNavigation();
setupModals();
setupFakeForms();
renderPortfolioMarquee();
setupTestimonials();
renderCompanies();
