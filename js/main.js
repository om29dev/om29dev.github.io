/*
 * Portfolio Client Scripts
 * Om Rajendra Bharambe (om29dev)
 * Light Theme Default, Micro-Interactions, Animated Counters & Copy Feedback
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initProjectFilters();
  initCopyActions();
  initContactForm();
  initScrollSpy();
  initScrollAnimations();
  initCounterAnimation();
});

/* =========================================
   Theme Handling (Light Default)
   ========================================= */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  // Default strictly to light theme unless explicitly chosen otherwise
  const storedTheme = localStorage.getItem('om29dev-theme');
  const currentTheme = storedTheme || 'light';

  applyTheme(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const targetTheme = activeTheme === 'light' ? 'dark' : 'light';
      applyTheme(targetTheme);
      localStorage.setItem('om29dev-theme', targetTheme);
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  
  if (themeToggleBtn) {
    if (theme === 'light') {
      themeToggleBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>`;
      themeToggleBtn.setAttribute('aria-label', 'Switch to dark theme');
    } else {
      themeToggleBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>`;
      themeToggleBtn.setAttribute('aria-label', 'Switch to light theme');
    }
  }

  // Update theme on dynamic GitHub stats images if present
  const statsTheme = theme === 'light' ? 'default' : 'github_dark';
  const statsImg = document.getElementById('github-stats-img');
  const streakImg = document.getElementById('github-streak-img');
  const topLangsImg = document.getElementById('github-langs-img');

  if (statsImg) {
    statsImg.src = `https://github-stats-extended.vercel.app/api?username=om29dev&hide_rank=true&theme=${statsTheme}&hide_border=true`;
  }
  if (streakImg) {
    streakImg.src = `https://streak-stats.demolab.com?user=om29dev&theme=${statsTheme}&hide_border=true`;
  }
  if (topLangsImg) {
    topLangsImg.src = `https://github-stats-extended.vercel.app/api/top-langs/?username=om29dev&layout=compact&langs_count=8&count_weight=.8&theme=${statsTheme}&hide_border=true`;
  }
}

/* =========================================
   Mobile Navigation Menu
   ========================================= */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('nav-menu');

  if (!menuBtn || !navMenu) return;

  menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  const navLinks = navMenu.querySelectorAll('.nav-link');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
    });
  });
}

/* =========================================
   Project Category Filtering
   ========================================= */
function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterButtons.length || !projectCards.length) return;

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      filterButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const categories = card.getAttribute('data-category') || '';
        const isFeatured = card.hasAttribute('data-featured');

        let isMatch = false;
        if (filterValue === 'all') {
          isMatch = true;
        } else if (filterValue === 'featured') {
          isMatch = isFeatured;
        } else {
          isMatch = categories.toLowerCase().includes(filterValue.toLowerCase());
        }

        if (isMatch) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(12px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* =========================================
   Copy to Clipboard & Toast
   ========================================= */
function initCopyActions() {
  const copyButtons = document.querySelectorAll('.js-copy-btn');
  
  copyButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy-text');
      const label = btn.getAttribute('data-copy-label') || 'Copied';
      
      if (!textToCopy) return;

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(label);
        }).catch(() => {
          fallbackCopyText(textToCopy, label);
        });
      } else {
        fallbackCopyText(textToCopy, label);
      }
    });
  });
}

function fallbackCopyText(text, label) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    document.execCommand('copy');
    showToast(label);
  } catch (err) {
    showToast('Failed to copy');
  }

  document.body.removeChild(textArea);
}

function showToast(message) {
  let toast = document.getElementById('toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

/* =========================================
   Contact Form mailto Generator
   ========================================= */
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('form-name')?.value.trim() || '';
    const email = document.getElementById('form-email')?.value.trim() || '';
    const message = document.getElementById('form-message')?.value.trim() || '';

    if (!name || !email || !message) {
      showToast('Please fill out all fields');
      return;
    }

    const recipient = 'ombharambe901@gmail.com';
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n---\nSent via portfolio contact form`
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    showToast('Opening your email client...');
    contactForm.reset();
  });
}

/* =========================================
   ScrollSpy for Active Nav Link
   ========================================= */
function initScrollSpy() {
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');

  if (!sections.length || !navLinks.length) return;

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 120;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { passive: true });
}

/* =========================================
   Scroll Reveal Animations
   ========================================= */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  if (!animatedElements.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    animatedElements.forEach((el) => observer.observe(el));
  } else {
    // Fallback if IntersectionObserver not supported
    animatedElements.forEach((el) => el.classList.add('is-visible'));
  }
}

/* =========================================
   Animated Metric Counters
   ========================================= */
function initCounterAnimation() {
  const statCards = document.querySelectorAll('.stat-card');
  if (!statCards.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const valueEl = entry.target.querySelector('.stat-value');
          if (valueEl && !valueEl.classList.contains('counted')) {
            valueEl.classList.add('counted');
            animateValue(valueEl);
          }
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    statCards.forEach((card) => observer.observe(card));
  }
}

function animateValue(element) {
  const rawText = element.textContent.trim();
  const match = rawText.match(/^([^\d]*)(\d+)([^\d]*)$/);

  if (!match) return; // Non-numeric values (e.g. "B.Tech" or "100%")

  const prefix = match[1] || '';
  const targetNum = parseInt(match[2], 10);
  const suffix = match[3] || '';

  let current = 0;
  const duration = 1200;
  const steps = 30;
  const stepTime = Math.floor(duration / steps);
  const increment = targetNum / steps;

  const timer = setInterval(() => {
    current += increment;
    if (current >= targetNum) {
      clearInterval(timer);
      element.textContent = `${prefix}${targetNum}${suffix}`;
    } else {
      element.textContent = `${prefix}${Math.floor(current)}${suffix}`;
    }
  }, stepTime);
}
