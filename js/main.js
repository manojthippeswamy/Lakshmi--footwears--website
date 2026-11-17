(function () {
  'use strict';

  const phone = '919620288249';
  const body = document.body;
  const openMenu = document.getElementById('mobile-menu-btn');
  const closeMenu = document.getElementById('close-drawer-btn');
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('mobile-drawer-overlay');

  function setDrawer(open) {
    if (!drawer) return;
    drawer.classList.toggle('open', open);
    body.classList.toggle('drawer-open', open);
    if (open) closeMenu && closeMenu.focus();
    else openMenu && openMenu.focus();
  }
  openMenu && openMenu.addEventListener('click', () => setDrawer(true));
  closeMenu && closeMenu.addEventListener('click', () => setDrawer(false));
  overlay && overlay.addEventListener('click', () => setDrawer(false));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setDrawer(false);
      document.querySelectorAll('.modal-overlay.open').forEach((modal) => modal.classList.remove('open'));
    }
  });

  const products = Array.isArray(window.LAKSHMI_PRODUCTS) ? window.LAKSHMI_PRODUCTS : [];
  const grids = [...document.querySelectorAll('#products-container, #featured-products-container')];
  const search = document.getElementById('product-search');
  let activeCategory = 'all';

  function renderProducts() {
    const query = (search ? search.value : '').trim().toLowerCase();
    grids.forEach((grid) => {
      const category = grid.dataset.category || 'all';
      const shown = products.filter((product) => {
        const matchesCategory = category === 'all' || category === 'featured' || product.category === category;
        const matchesFilter = activeCategory === 'all' || category !== 'all' || product.category === activeCategory;
        const matchesQuery = !query || Object.values(product).join(' ').toLowerCase().includes(query);
        return matchesCategory && matchesFilter && matchesQuery;
      });
      grid.replaceChildren();
      if (!shown.length) {
        const state = document.createElement('div');
        state.className = 'product-empty-state';
        const title = document.createElement('h3');
        title.textContent = products.length ? 'No matching footwear found' : 'Catalog information is not available';
        const detail = document.createElement('p');
        detail.textContent = products.length
          ? 'Try another search or category.'
          : 'This repository does not include the original product list or product images. Contact the store to check current styles and prices.';
        state.append(title, detail);
        grid.append(state);
      }
    });
  }
  renderProducts();
  search && search.addEventListener('input', renderProducts);
  document.querySelectorAll('.filter-btn[data-category]').forEach((button) => {
    button.addEventListener('click', () => {
      activeCategory = button.dataset.category || 'all';
      document.querySelectorAll('.filter-btn').forEach((item) => item.classList.toggle('active', item === button));
      renderProducts();
    });
  });

  // The source checkout has no authentication service. This is an honest,
  // local-only account UI and never submits or stores credentials.
  const nav = document.querySelector('.main-nav');
  if (nav) {
    const accountLink = document.createElement('button');
    accountLink.type = 'button';
    accountLink.className = 'account-trigger';
    accountLink.textContent = 'Account';
    accountLink.addEventListener('click', showAccount);
    nav.append(accountLink);
  }
  const drawerNav = document.querySelector('.mobile-drawer-nav');
  if (drawerNav) {
    const accountLink = document.createElement('button');
    accountLink.type = 'button';
    accountLink.className = 'mobile-drawer-link account-trigger';
    accountLink.innerHTML = '<i class="fas fa-user" aria-hidden="true"></i> Account';
    accountLink.addEventListener('click', () => { setDrawer(false); showAccount(); });
    drawerNav.append(accountLink);
  }

  function showAccount() {
    let modal = document.getElementById('account-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.className = 'modal-overlay';
      modal.id = 'account-modal';
      modal.innerHTML = '<section class="modal-container account-modal" role="dialog" aria-modal="true" aria-labelledby="account-title"><button class="modal-close-btn" type="button" aria-label="Close account dialog">&times;</button><h2 id="account-title">Your account</h2><p>Account access is not connected yet. This form is a preview only.</p><div class="account-tabs"><button type="button" class="active" data-mode="login">Sign in</button><button type="button" data-mode="register">Create account</button></div><form novalidate><div class="form-group"><label for="account-email">Email or phone</label><input class="form-control" id="account-email" name="identity" autocomplete="username" required></div><div class="form-group"><label for="account-password">Password</label><div class="password-row"><input class="form-control" id="account-password" name="password" type="password" autocomplete="current-password" required minlength="8"><button class="password-toggle" type="button">Show</button></div></div><div class="form-status" role="status" aria-live="polite"></div><button class="btn-primary" type="submit" style="width:100%">Continue</button></form><p class="account-note">Preview only: authentication is not configured. No credentials are sent or stored.</p></section>';
      body.append(modal);
      modal.querySelector('.modal-close-btn').addEventListener('click', () => modal.classList.remove('open'));
      modal.addEventListener('click', (event) => { if (event.target === modal) modal.classList.remove('open'); });
      modal.querySelector('.password-toggle').addEventListener('click', (event) => {
        const input = modal.querySelector('#account-password');
        input.type = input.type === 'password' ? 'text' : 'password';
        event.currentTarget.textContent = input.type === 'password' ? 'Show' : 'Hide';
      });
      modal.querySelectorAll('.account-tabs button').forEach((tab) => tab.addEventListener('click', () => {
        modal.querySelectorAll('.account-tabs button').forEach((item) => item.classList.toggle('active', item === tab));
        modal.querySelector('#account-title').textContent = tab.dataset.mode === 'register' ? 'Create your account' : 'Your account';
        modal.querySelector('.form-status').textContent = '';
      }));
      modal.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const status = modal.querySelector('.form-status');
        if (!form.reportValidity()) return;
        status.textContent = 'Authentication is not available yet. Please contact Lakshmi Footwears directly.';
      });
    }
    modal.classList.add('open');
    modal.querySelector('#account-email').focus();
  }

  const contactForm = document.getElementById('store-contact-form');
  contactForm && contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('cf-name').value.trim();
    const customerPhone = document.getElementById('cf-phone').value.trim();
    const category = document.getElementById('cf-category').value;
    const message = document.getElementById('cf-message').value.trim();
    if (!name || !customerPhone) return;
    const text = `Hello Lakshmi Footwears, my name is ${name}. My number is ${customerPhone}. I am enquiring about: ${category}.${message ? ` Message: ${message}` : ''}`;
    const status = document.createElement('p');
    status.className = 'form-status';
    status.setAttribute('role', 'status');
    status.textContent = 'Your inquiry is ready to send in WhatsApp.';
    contactForm.querySelector('.form-status')?.remove();
    contactForm.append(status);
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  });
})();
