(function () {
  const grid = document.getElementById('card-grid');
  if (!grid) return;

  const items = grid.querySelectorAll('[data-page-item]');
  const pagination = document.getElementById('pagination');
  if (!pagination) return;

  const perPage = parseInt(grid.dataset.perPage || '9', 10);
  const totalPages = Math.ceil(items.length / perPage);
  let current = 1;

  // ===== INJECT CSS =====
  if (!document.getElementById('pagination-style')) {
    const style = document.createElement('style');
    style.id = 'pagination-style';
    style.textContent = `
      .pagination {
        display: flex;
        gap: .35rem;
        justify-content: center;
        align-items: center;
        margin: 2.5rem 0 1.5rem;
        flex-wrap: wrap;
        padding: 0;
        list-style: none;
      }
      .pagination button {
        min-width: 38px;
        height: 38px;
        padding: 0 .6rem;
        background: #fff;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        color: #374151;
        font-size: .875rem;
        font-weight: 500;
        font-family: inherit;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: all 150ms ease;
        line-height: 1;
      }
      .pagination button:hover:not(:disabled):not(.active) {
        border-color: #0366d6;
        color: #0366d6;
        background: #f0f7ff;
      }
      .pagination button.active {
        background: #0366d6;
        color: #fff;
        border-color: #0366d6;
        font-weight: 600;
        cursor: default;
      }
      .pagination button:disabled {
        opacity: .35;
        cursor: not-allowed;
        background: #f9fafb;
      }
      .pagination button:focus-visible {
        outline: 2px solid #0366d6;
        outline-offset: 2px;
      }
      @media (max-width: 480px) {
        .pagination { gap: .25rem; }
        .pagination button {
          min-width: 34px;
          height: 34px;
          padding: 0 .4rem;
          font-size: .8rem;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // ===== NO PAGINATION NEEDED =====
  if (totalPages <= 1) {
    pagination.style.display = 'none';
    return;
  }

  // ===== RENDER =====
  function render() {
    const start = (current - 1) * perPage;
    const end = start + perPage;

    items.forEach((item, i) => {
      item.style.display = (i >= start && i < end) ? '' : 'none';
    });

    pagination.innerHTML = '';

    // Prev
    const prev = document.createElement('button');
    prev.innerHTML = '‹';
    prev.disabled = current === 1;
    prev.setAttribute('aria-label', 'Previous page');
    prev.onclick = () => go(current - 1);
    pagination.appendChild(prev);

    // Numbers
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
    next.innerHTML = '›';
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
