(function () {
  const grid = document.getElementById('card-grid');
  if (!grid) return;

  const items = grid.querySelectorAll('[data-page-item]');
  const pagination = document.getElementById('pagination');
  if (!pagination) return;

  const perPage = parseInt(grid.dataset.perPage || '9', 10);
  const totalPages = Math.ceil(items.length / perPage);
  let current = 1;

  if (totalPages <= 1) {
    pagination.style.display = 'none';
    return;
  }

  function render() {
    const start = (current - 1) * perPage;
    const end = start + perPage;

    items.forEach((item, i) => {
      item.style.display = (i >= start && i < end) ? '' : 'none';
    });

    pagination.innerHTML = '';

    // Prev
    const prev = document.createElement('button');
    prev.textContent = '‹ Prev';
    prev.disabled = current === 1;
    prev.setAttribute('aria-label', 'Previous page');
    prev.onclick = () => go(current - 1);
    pagination.appendChild(prev);

    // Angka
    for (let p = 1; p <= totalPages; p++) {
      const btn = document.createElement('button');
      btn.textContent = p;
      btn.className = p === current ? 'active' : '';
      btn.setAttribute('aria-label', `Page ${p}`);
      if (p === current) btn.setAttribute('aria-current', 'page');
      btn.onclick = () => go(p);
      pagination.appendChild(btn);
    }

    // Next
    const next = document.createElement('button');
    next.textContent = 'Next ›';
    next.disabled = current === totalPages;
    next.setAttribute('aria-label', 'Next page');
    next.onclick = () => go(current + 1);
    pagination.appendChild(next);
  }

  function go(p) {
    if (p < 1 || p > totalPages) return;
    current = p;
    render();
    const top = grid.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  render();
})();
