  // ── Scroll Reveal ──────────────────────────
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => observer.observe(el));

  // ── Form Send ─────────────────────────────
  function handleSend(e) {
    const btn = e.target;
    const name = document.querySelector('.form-input[type="text"]').value.trim();
    const email = document.querySelector('.form-input[type="email"]').value.trim();
    if (!name || !email) {
      btn.textContent = 'Please fill in Name & Email';
      btn.style.background = '#e0e0e0';
      setTimeout(() => { btn.textContent = 'Send'; btn.style.background = ''; }, 2500);
      return;
    }
    btn.textContent = 'Sent ✓';
    btn.style.background = '#c8f0c8';
    btn.style.color = '#1a3a1a';
    setTimeout(() => { btn.textContent = 'Send'; btn.style.background = ''; btn.style.color = ''; }, 3000);
  }

  // ── Smooth anchor scroll for any nav links ──
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
    });
  });