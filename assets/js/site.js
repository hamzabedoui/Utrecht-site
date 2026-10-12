// Busje komt zo · small progressive enhancements. The site works without this file.
(() => {
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

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

  // Submenus (Diensten, Werkgebied): the caret button opens them on phones and by keyboard
  document.querySelectorAll('.site-nav .nav-caret').forEach((caret) => {
    caret.addEventListener('click', () => {
      const item = caret.closest('.has-sub');
      const open = caret.getAttribute('aria-expanded') !== 'true';
      document.querySelectorAll('.site-nav .has-sub.is-open').forEach((other) => {
        if (other !== item) { other.classList.remove('is-open'); other.querySelector('.nav-caret')?.setAttribute('aria-expanded', 'false'); }
      });
      item.classList.toggle('is-open', open);
      caret.setAttribute('aria-expanded', String(open));
    });
  });

  // Carousels on phones: arrows, dots and a counter for swipe rows (.scroller[data-carousel])
  document.querySelectorAll('.scroller[data-carousel]').forEach((track, n) => {
    const items = [...track.children];
    if (items.length < 2) return;
    const noun = track.dataset.carousel || 'item';
    const bar = document.createElement('div');
    bar.className = 'carousel-nav';
    const prev = Object.assign(document.createElement('button'), { type: 'button', className: 'carousel-nav__arrow', innerHTML: '<span aria-hidden="true">‹</span>' });
    prev.setAttribute('aria-label', `Vorige ${noun}`);
    const next = Object.assign(document.createElement('button'), { type: 'button', className: 'carousel-nav__arrow', innerHTML: '<span aria-hidden="true">›</span>' });
    next.setAttribute('aria-label', `Volgende ${noun}`);
    const dots = document.createElement('div');
    dots.className = 'carousel-nav__dots';
    const dotEls = items.map((_, i) => {
      const d = Object.assign(document.createElement('button'), { type: 'button', className: 'carousel-nav__dot' });
      d.setAttribute('aria-label', `${noun} ${i + 1} van ${items.length}`);
      d.addEventListener('click', () => go(i));
      dots.append(d);
      return d;
    });
    bar.append(prev, dots, next);
    track.after(bar);

    let current = 0;
    const go = (i) => {
      current = Math.max(0, Math.min(items.length - 1, i));
      track.scrollTo({ left: items[current].offsetLeft - items[0].offsetLeft, behavior: reduceMotion ? 'auto' : 'smooth' });
    };
    const sync = () => {
      const x = track.scrollLeft;
      let best = 0;
      items.forEach((el, i) => { if (Math.abs(el.offsetLeft - items[0].offsetLeft - x) < Math.abs(items[best].offsetLeft - items[0].offsetLeft - x)) best = i; });
      current = best;
      dotEls.forEach((d, i) => d.toggleAttribute('aria-current', i === best));
      prev.disabled = best === 0;
      next.disabled = best === items.length - 1;
    };
    let raf = 0;
    track.addEventListener('scroll', () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(sync); }, { passive: true });
    prev.addEventListener('click', () => go(current - 1));
    next.addEventListener('click', () => go(current + 1));
    sync();
  });

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
