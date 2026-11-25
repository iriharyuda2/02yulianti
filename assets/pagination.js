(function () {
  var grid = document.getElementById('ch-card-grid');
  var nav = document.getElementById('ch-pagination');
  if (!grid || !nav) return;

  var items = [].slice.call(grid.querySelectorAll('[data-ch-item]'));
  var perPage = parseInt(grid.getAttribute('data-ch-per-page') || '9', 10);
  var totalPages = Math.ceil(items.length / perPage);
  var current = 1;

  if (!document.getElementById('ch-pagination-css')) {
    var s = document.createElement('style');
    s.id = 'ch-pagination-css';
    s.innerHTML = '.ch-pagination{display:flex;gap:.4rem;justify-content:center;align-items:center;margin:2.5rem 0 1.5rem;flex-wrap:wrap;padding:0;list-style:none}.ch-pagination button{min-width:38px;height:38px;padding:0 .6rem;background:#fff;border:1px solid #e5e7eb;border-radius:8px;color:#374151;font-size:.875rem;font-weight:500;font-family:inherit;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;transition:all .15s ease;line-height:1}.ch-pagination button:hover:not(:disabled):not(.ch-on){border-color:#0366d6;color:#0366d6;background:#f0f7ff}.ch-pagination button.ch-on{background:#0366d6;color:#fff;border-color:#0366d6;font-weight:600;cursor:default}.ch-pagination button:disabled{opacity:.35;cursor:not-allowed;background:#f9fafb}@media(max-width:480px){.ch-pagination{gap:.25rem}.ch-pagination button{min-width:34px;height:34px;padding:0 .4rem;font-size:.8rem}}';
    document.head.appendChild(s);
  }

  if (totalPages <= 1) { nav.style.display = 'none'; return; }

  function render() {
    var start = (current - 1) * perPage;
    var end = start + perPage;

    for (var i = 0; i < items.length; i++) {
      items[i].style.display = (i >= start && i < end) ? '' : 'none';
    }

    nav.innerHTML = '';

    var prev = document.createElement('button');
    prev.type = 'button';
    prev.innerHTML = '&lsaquo;';
    prev.disabled = current === 1;
    prev.setAttribute('aria-label', 'Previous page');
    prev.onclick = function () { if (current > 1) { current--; render(); scrollTop(); } };
    nav.appendChild(prev);

    for (var p = 1; p <= totalPages; p++) {
      (function (num) {
        var b = document.createElement('button');
        b.type = 'button';
        b.textContent = num;
        if (num === current) { b.className = 'ch-on'; b.setAttribute('aria-current', 'page'); }
        b.setAttribute('aria-label', 'Page ' + num);
        b.onclick = function () { current = num; render(); scrollTop(); };
        nav.appendChild(b);
      })(p);
    }

    var next = document.createElement('button');
    next.type = 'button';
    next.innerHTML = '&rsaquo;';
    next.disabled = current === totalPages;
    next.setAttribute('aria-label', 'Next page');
    next.onclick = function () { if (current < totalPages) { current++; render(); scrollTop(); } };
    nav.appendChild(next);
  }

  function scrollTop() {
    var top = grid.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top: top, behavior: 'smooth' });
  }

  render();
})();
