(function(){
  const loader = document.querySelector('.site-loader');
  const transition = document.querySelector('.page-transition');
  const transitionTitle = document.querySelector('[data-transition-title]');
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  window.addEventListener('load', () => {
    setTimeout(() => loader && loader.classList.add('hidden'), 850);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  document.querySelectorAll('[data-switch]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      e.preventDefault();
      const title = link.getAttribute('data-mode-title') || link.textContent.trim();
      if (transition && transitionTitle) {
        transitionTitle.textContent = title;
        transition.classList.add('active');
      }
      setTimeout(() => { window.location.href = href; }, 320);
    });
  });
})();
