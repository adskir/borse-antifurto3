// AURA — bozza, interazioni base + animazioni
document.addEventListener('DOMContentLoaded', () => {
  // Menu mobile (burger)
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');
  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        burger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  // Demo-validazione modulo contatti (bozza — non invia dati reali)
  const form = document.querySelector('#demo-contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const status = document.querySelector('#form-status');
      if (status) {
        status.textContent = 'Bozza dimostrativa: la richiesta non è stata inviata realmente. Da collegare a un servizio (es. Netlify Forms o email reale) prima della pubblicazione.';
      }
    });
  }

  // Reveal-on-scroll per card e product-card
  const revealTargets = document.querySelectorAll('.card, .product-card');
  revealTargets.forEach(el => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealTargets.forEach(el => observer.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add('in-view'));
  }
});
