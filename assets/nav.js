(function () {
  // Sidebar toggle
  const btn = document.getElementById('menu-btn');
  const close = document.getElementById('sidebar-close');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  function toggle(open) {
    sidebar.classList.toggle('open', open);
    overlay.classList.toggle('show', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }
  if (btn) btn.onclick = () => toggle(true);
  if (close) close.onclick = () => toggle(false);
  if (overlay) overlay.onclick = () => toggle(false);
  document.addEventListener('keydown', e => e.key === 'Escape' && toggle(false));

  // Back to top
  const btt = document.getElementById('back-to-top');
  if (btt) {
    window.addEventListener('scroll', () => {
      btt.classList.toggle('show', window.scrollY > 400);
    });
    btt.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Cookie banner
  const cb = document.getElementById('cookie-banner');
  const ca = document.getElementById('cookie-accept');
  if (cb && ca) {
    if (!localStorage.getItem('cookie-accepted')) cb.classList.add('show');
    ca.onclick = () => {
      localStorage.setItem('cookie-accepted', '1');
      cb.classList.remove('show');
    };
  }
})();
