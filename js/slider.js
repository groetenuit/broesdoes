/* Vorige/volgende-knoppen voor de projectslider.
   Zonder JavaScript werkt de slider ook: dan scroll of swipe je gewoon. */
document.querySelectorAll('[data-slider]').forEach(function (slider) {
  var track = slider.querySelector('.slider-track');
  var nav = slider.querySelector('.slider-nav');
  var vorige = slider.querySelector('[data-richting="-1"]');
  var volgende = slider.querySelector('[data-richting="1"]');
  var rustig = window.matchMedia('(prefers-reduced-motion: reduce)');

  function stap() {
    var tegel = track.querySelector('.tile');
    if (!tegel) return track.clientWidth;
    var gap = parseFloat(getComputedStyle(track.firstElementChild).columnGap) || 0;
    var perScherm = Math.max(1, Math.floor((track.clientWidth + gap) / (tegel.offsetWidth + gap)) - 1);
    return perScherm * (tegel.offsetWidth + gap);
  }

  function bijwerken() {
    var max = track.scrollWidth - track.clientWidth;
    nav.hidden = max <= 1;
    vorige.disabled = track.scrollLeft <= 1;
    volgende.disabled = track.scrollLeft >= max - 1;
  }

  [vorige, volgende].forEach(function (knop) {
    knop.addEventListener('click', function () {
      track.scrollBy({
        left: stap() * Number(knop.dataset.richting),
        behavior: rustig.matches ? 'auto' : 'smooth'
      });
    });
  });

  track.addEventListener('scroll', bijwerken, { passive: true });
  window.addEventListener('resize', bijwerken);
  bijwerken();
});
