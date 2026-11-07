/* Filters en raster/lijst op de projectpagina.
   Zonder JavaScript zie je gewoon alle projecten in het raster. */
(function () {
  var root = document.querySelector('[data-index]');
  if (!root) return;
  var filters = root.querySelector('.filters');
  var views = root.querySelector('.views');
  var items = root.querySelectorAll('[data-type]');
  filters.hidden = false;
  views.hidden = false;

  function bewaar(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function lees(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }

  function filter(type) {
    filters.querySelectorAll('.chip').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.filter === type));
    });
    items.forEach(function (el) {
      el.classList.toggle('is-hidden', type !== 'alle' && el.dataset.type !== type);
    });
  }

  function weergave(v) {
    root.dataset.view = v;
    views.querySelectorAll('.chip').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.view === v));
    });
    bewaar('projecten-weergave', v);
  }

  filters.addEventListener('click', function (e) {
    var b = e.target.closest('.chip');
    if (b) filter(b.dataset.filter);
  });
  views.addEventListener('click', function (e) {
    var b = e.target.closest('.chip');
    if (b) weergave(b.dataset.view);
  });

  weergave(lees('projecten-weergave') === 'list' ? 'list' : 'grid');
})();
