/*
 * Portfolio Client Scripts
 * Om Rajendra Bharambe (om29dev)
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initProjectFilters();
  initCopyEmail();
  initContactForm();
  initScrollSpy();
});

/* Theme Handling */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const storedTheme = localStorage.getItem('om29dev-theme');
  const currentTheme = storedTheme || (prefersDark ? 'dark' : 'dark'); // Dark default

  applyTheme(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const targetTheme = activeTheme === 'dark' ? 'light' : 'dark';
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

/* Mobile Menu */
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

/* Project Category Filtering */
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
        if (filterValue === 'all' || categories.split(' ').includes(filterValue)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* Email Copy Handler */
function initCopyEmail() {
  const copyButtons = document.querySelectorAll('.js-copy-email');

  copyButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const email = btn.getAttribute('data-email') || 'ombharambe29@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email copied to clipboard: ' + email);
      }).catch(() => {
        showToast('Unable to copy. Email: ' + email);
      });
    });
  });
}

/* Toast Message */
function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span class="toast-dot"></span><span>${escapeHtml(message)}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/* Contact Form */
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('form-name');
    const emailInput = document.getElementById('form-email');
    const messageInput = document.getElementById('form-message');

    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const message = messageInput ? messageInput.value.trim() : '';

    if (!message) {
      showToast('Please enter a message before sending.');
      return;
    }

    const subject = encodeURIComponent(`Portfolio Message from ${name || 'Visitor'}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoUrl = `mailto:ombharambe29@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;
    showToast('Opening your default email client...');
  });
}

/* Scrollspy Navigation Active Highlight */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  if (!sections.length || !navLinks.length) return;

  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPosition >= top && scrollPosition < top + height) {
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

