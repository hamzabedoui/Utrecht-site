// Busje komt zo · small progressive enhancements. The site works without this file.
(() => {
  // Mobile menu
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById(toggle?.getAttribute('aria-controls') || '');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('is-open', open);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        toggle.focus();
      }
    });
  }

  // Price estimate: uses the published packages on /tarieven/ (€35,70 per verhuizer per uur incl. btw).
  const form = document.querySelector('[data-estimate]');
  if (form) {
    const RATE = 35.70;
    const VEHICLE = { bus: 114.95, wagen: 151.25 };
    // Hours per home type: [min, max]. Movers per home type. To be confirmed by Busje komt zo.
    const HOMES = {
      studio:   { hours: [4, 4], movers: 2 },
      appartement: { hours: [5, 6], movers: 2 },
      woning:   { hours: [6, 8], movers: 2 },
      groot:    { hours: [6, 8], movers: 3 },
    };
    const out = form.querySelector('[data-estimate-out]');
    const fmt = new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });

    const update = () => {
      const data = new FormData(form);
      const home = HOMES[data.get('woning')];
      if (!home) return;
      const noLiftHigh = data.get('verdieping') === 'hoog' && data.get('lift') === 'nee';
      const [lo, hi] = home.hours.map((h) => h + (noLiftHigh ? 1 : 0));
      const vehicle = hi > 4 ? VEHICLE.wagen : VEHICLE.bus;
      const vehicleLo = lo > 4 ? VEHICLE.wagen : VEHICLE.bus;
      const min = lo * home.movers * RATE + vehicleLo;
      const max = hi * home.movers * RATE + vehicle;
      out.querySelector('b').textContent = min === max ? fmt.format(min) : `${fmt.format(min)} – ${fmt.format(max)}`;
      out.querySelector('[data-estimate-detail]').textContent =
        `${home.movers} verhuizers, ${lo === hi ? lo : `${lo} tot ${hi}`} uur, ${hi > 4 ? 'verhuiswagen' : 'bestelbus'}. Incl. btw, excl. reiskosten (€0,79 per km).`;
      out.hidden = false;
    };
    form.addEventListener('change', update);
    update();
  }

  // Map: load the Google Maps iframe only when asked, so it never slows the page.
  document.querySelectorAll('[data-map-src]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const frame = document.createElement('iframe');
      frame.src = btn.dataset.mapSrc;
      frame.title = btn.dataset.mapTitle || 'Kaart';
      frame.loading = 'lazy';
      frame.referrerPolicy = 'no-referrer-when-downgrade';
      btn.closest('.map').append(frame);
      btn.remove();
    }, { once: true });
  });
})();
