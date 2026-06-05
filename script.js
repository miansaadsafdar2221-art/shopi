
/* ==========================================================
   GLOW — Beauty & Skincare E-Commerce
   script.js — Full Application Logic
   ========================================================== */

/* ========================================================
   DATA — Products
   ======================================================== */
let products = [
  { id: 1, name: "Vitamin C Brightening Serum", category: "Serum", price: 48, origPrice: 68, rating: 4.9, reviews: 312, concern: "Brightening", badge: "Best Seller", featured: true, stock: 85, emoji: "✨", visual: "pv-1", ingredients: ["Vitamin C", "Niacinamide", "Ferulic Acid"], desc: "A powerful brightening serum packed with 15% Vitamin C and Niacinamide to visibly reduce dark spots, even skin tone and deliver a radiant, glass-skin glow. Suitable for all skin types." },
  { id: 2, name: "Hyaluronic Acid Toner", category: "Toner", price: 32, origPrice: null, rating: 4.7, reviews: 189, concern: "Hydrating", badge: "New", featured: true, stock: 120, emoji: "💧", visual: "pv-2", ingredients: ["Hyaluronic Acid", "Centella Asiatica", "Aloe Vera"], desc: "A lightweight, deeply hydrating toner formulated with multi-molecular hyaluronic acid that penetrates all layers of the skin for lasting plump, dewy hydration." },
  { id: 3, name: "Retinol Night Cream", category: "Moisturizer", price: 65, origPrice: 85, rating: 4.8, reviews: 241, concern: "Anti-Aging", badge: "Sale", featured: true, stock: 42, emoji: "🌙", visual: "pv-3", ingredients: ["Retinol 0.3%", "Peptides", "Squalane"], desc: "A luxurious night cream enriched with encapsulated retinol and skin-firming peptides to reduce fine lines, smooth texture and restore youthful radiance while you sleep." },
  { id: 4, name: "SPF 50+ Sunscreen Fluid", category: "Sunscreen", price: 38, origPrice: null, rating: 4.6, reviews: 408, concern: "Sensitive", badge: "Best Seller", featured: true, stock: 200, emoji: "☀️", visual: "pv-4", ingredients: ["Zinc Oxide", "Tinosorb M", "Niacinamide"], desc: "An ultra-lightweight, invisible SPF 50+ fluid that protects against UVA/UVB rays without white cast. Enriched with antioxidants for a smooth, matte finish." },
  { id: 5, name: "Rose Glow Sleeping Mask", category: "Mask", price: 52, origPrice: 70, rating: 4.9, reviews: 177, concern: "Hydrating", badge: "Sale", featured: true, stock: 60, emoji: "🌹", visual: "pv-5", ingredients: ["Rosehip Oil", "Ceramides", "Bakuchiol"], desc: "A velvety overnight mask infused with rosehip oil and ceramides that deeply nourishes and repairs skin's barrier while you sleep, leaving skin soft and luminous by morning." },
  { id: 6, name: "Niacinamide Pore Serum", category: "Serum", price: 36, origPrice: null, rating: 4.5, reviews: 295, concern: "Acne", badge: "", featured: true, stock: 95, emoji: "🔬", visual: "pv-6", ingredients: ["Niacinamide 10%", "Zinc PCA", "Salicylic Acid"], desc: "A targeted pore-minimising serum with 10% Niacinamide and Zinc PCA to control excess sebum, reduce enlarged pores and refine skin texture for a smooth, airbrushed complexion." },
  { id: 7, name: "Peptide Eye Cream", category: "Eye Care", price: 58, origPrice: 78, rating: 4.7, reviews: 134, concern: "Anti-Aging", badge: "New", featured: false, stock: 38, emoji: "👁️", visual: "pv-7", ingredients: ["Argireline", "Caffeine", "Hyaluronic Acid"], desc: "A potent eye cream infused with Argireline peptides and caffeine to smooth crow's feet, depuff under-eyes and brighten dark circles for a wide-awake, youthful look." },
  { id: 8, name: "Gentle Milky Cleanser", category: "Cleanser", price: 28, origPrice: null, rating: 4.6, reviews: 221, concern: "Sensitive", badge: "", featured: false, stock: 150, emoji: "🫧", visual: "pv-8", ingredients: ["Ceramides", "Glycerin", "Oat Extract"], desc: "A creamy, fragrance-free cleanser that melts away makeup and impurities without stripping the skin. Formulated with ceramides to maintain the skin barrier and leave skin soft." },
  { id: 9, name: "AHA/BHA Exfoliating Toner", category: "Toner", price: 42, origPrice: 55, rating: 4.4, reviews: 168, concern: "Acne", badge: "Sale", featured: false, stock: 72, emoji: "⚗️", visual: "pv-1", ingredients: ["Glycolic Acid 5%", "Salicylic Acid 2%", "Green Tea"], desc: "A gentle exfoliating toner combining 5% glycolic acid and 2% salicylic acid to dissolve dead skin cells, unclog pores and reveal brighter, smoother skin with regular use." },
  { id: 10, name: "Ceramide Barrier Cream", category: "Moisturizer", price: 44, origPrice: null, rating: 4.8, reviews: 302, concern: "Sensitive", badge: "", featured: false, stock: 110, emoji: "🛡️", visual: "pv-2", ingredients: ["Ceramides NP/AP/EOP", "Cholesterol", "Fatty Acids"], desc: "A rich, reparative moisturizer packed with three essential ceramides to restore and strengthen skin's natural barrier, reduce redness and lock in lasting moisture." },
  { id: 11, name: "Glow Radiance Mask", category: "Mask", price: 45, origPrice: 60, rating: 4.6, reviews: 89, concern: "Brightening", badge: "", featured: false, stock: 55, emoji: "💎", visual: "pv-3", ingredients: ["Kaolin Clay", "Vitamin C", "Papaya Enzyme"], desc: "A brightening clay mask that uses natural papaya enzymes and vitamin C to polish away dullness, deeply cleanse pores and reveal a luminous, even complexion in just 10 minutes." },
  { id: 12, name: "Mineral Sunscreen SPF 30", category: "Sunscreen", price: 34, origPrice: null, rating: 4.5, reviews: 143, concern: "Sensitive", badge: "New", featured: false, stock: 90, emoji: "🌤️", visual: "pv-4", ingredients: ["Zinc Oxide 20%", "Titanium Dioxide", "Aloe Vera"], desc: "A pure mineral SPF 30 sunscreen with 20% zinc oxide, specially formulated for sensitive and reactive skin. Fragrance-free, reef-safe and gentle enough for daily use." },
];

/* ========================================================
   STATE
   ======================================================== */
let cart = JSON.parse(localStorage.getItem('glowCart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('glowWishlist') || '[]');
let orders = JSON.parse(localStorage.getItem('glowOrders') || '[]');
let customers = JSON.parse(localStorage.getItem('glowCustomers') || '[]');
let currentUser = JSON.parse(localStorage.getItem('glowUser') || 'null');
let currentPage = 'home';
let shopFilters = { categories: [], maxPrice: 200, concerns: [], minRating: 0, sort: 'default' };
let discount = 0;
let currentProductId = null;

/* ========================================================
   PERSIST
   ======================================================== */
function saveState() {
  localStorage.setItem('glowCart', JSON.stringify(cart));
  localStorage.setItem('glowWishlist', JSON.stringify(wishlist));
  localStorage.setItem('glowOrders', JSON.stringify(orders));
  localStorage.setItem('glowCustomers', JSON.stringify(customers));
  localStorage.setItem('glowUser', JSON.stringify(currentUser));
}

/* ========================================================
   TOAST
   ======================================================== */
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

/* ========================================================
   PAGE ROUTING
   ======================================================== */
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
  const el = document.getElementById('page-' + page);
  if (!el) return;
  el.style.display = 'block';
  currentPage = page;

  const footer = document.getElementById('mainFooter');
  footer.style.display = page === 'admin' ? 'none' : 'block';

  window.scrollTo(0, 0);
  closeAll();

  if (page === 'home') renderFeatured();
  if (page === 'shop') renderShop();
  if (page === 'wishlist') renderWishlist();
  if (page === 'checkout') renderCheckout();
  if (page === 'orders') renderOrders();
  if (page === 'admin') initAdmin();
}

function scrollTo(selector) {
  setTimeout(() => {
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
}

/* ========================================================
   SCROLL NAV
   ======================================================== */
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);
});

/* ========================================================
   CLOSE ALL DRAWERS / OVERLAYS
   ======================================================== */
function closeAll() {
  document.querySelectorAll('.drawer').forEach(d => d.classList.remove('open'));
  document.getElementById('overlay').classList.remove('show');
  document.getElementById('shopSidebar')?.classList.remove('sidebar-open');
  const hb = document.getElementById('hamburger');
  if (hb) hb.classList.remove('open');
  const nl = document.getElementById('navLinks');
  if (nl) nl.style.display = '';
}

function openOverlay() {
  document.getElementById('overlay').classList.add('show');
}

/* ========================================================
   HAMBURGER
   ======================================================== */
document.getElementById('hamburger').addEventListener('click', function () {
  this.classList.toggle('open');
  const nl = document.getElementById('navLinks');
  const isOpen = this.classList.contains('open');
  nl.style.display = isOpen ? 'flex' : '';
  nl.style.flexDirection = 'column';
  nl.style.position = 'absolute';
  nl.style.top = 'var(--nav-h)';
  nl.style.left = '0';
  nl.style.right = '0';
  nl.style.background = 'var(--surface)';
  nl.style.padding = '1rem 2rem';
  nl.style.borderBottom = '1px solid var(--border)';
  nl.style.zIndex = '899';
  if (isOpen) openOverlay(); else closeAll();
});

/* ========================================================
   SEARCH
   ======================================================== */
function toggleSearch() {
  const bar = document.getElementById('searchBar');
  const isOpen = bar.classList.toggle('open');
  if (isOpen) {
    openOverlay();
    document.getElementById('searchInput').focus();
  } else {
    closeAll();
  }
}

function handleSearch(val) {
  const container = document.getElementById('searchResults');
  if (!val.trim()) { container.innerHTML = ''; return; }
  const results = products.filter(p =>
    p.name.toLowerCase().includes(val.toLowerCase()) ||
    p.category.toLowerCase().includes(val.toLowerCase()) ||
    p.concern.toLowerCase().includes(val.toLowerCase())
  ).slice(0, 6);
  container.innerHTML = results.length
    ? results.map(p => `<div class="sr-item" onclick="openProduct(${p.id}); toggleSearch()">${p.emoji} ${p.name}</div>`).join('')
    : `<div class="sr-item">No results for "${val}"</div>`;
}

/* ========================================================
   CART DRAWER
   ======================================================== */
function toggleCart() {
  const drawer = document.getElementById('cartDrawer');
  const isOpen = drawer.classList.toggle('open');
  if (isOpen) { openOverlay(); renderCartDrawer(); }
  else closeAll();
}

function renderCartDrawer() {
  const body = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');
  const count = document.getElementById('cartCount');
  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  count.textContent = `(${totalItems})`;

  if (!cart.length) {
    body.innerHTML = '<p class="empty-msg">Your cart is empty ✨</p>';
    footer.style.display = 'none';
    return;
  }
  footer.style.display = 'flex';
  body.innerHTML = cart.map(item => {
    const p = products.find(x => x.id === item.id);
    if (!p) return '';
    return `
      <div class="cart-item">
        <div class="ci-img"><div class="pv-blob ${p.visual}" style="width:100%;height:100%;font-size:1.5rem">${p.emoji}</div></div>
        <div class="ci-body">
          <div class="ci-name">${p.name}</div>
          <div class="ci-cat">${p.category}</div>
          <div class="ci-row">
            <span class="ci-price">$${(p.price * item.qty).toFixed(2)}</span>
            <div class="qty-control">
              <button class="qty-btn" onclick="changeQty(${p.id}, -1)">−</button>
              <span class="qty-num">${item.qty}</span>
              <button class="qty-btn" onclick="changeQty(${p.id}, 1)">+</button>
            </div>
            <button class="ci-remove" onclick="removeFromCart(${p.id})">🗑</button>
          </div>
        </div>
      </div>`;
  }).join('');

  const subtotal = cart.reduce((s, i) => {
    const p = products.find(x => x.id === i.id);
    return s + (p ? p.price * i.qty : 0);
  }, 0);
  const shipping = subtotal >= 50 ? 0 : 5.99;
  document.getElementById('cartSubtotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('cartShipping').textContent = shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`;
  document.getElementById('cartTotal').textContent = `$${(subtotal + shipping).toFixed(2)}`;
}

function addToCart(id, qty = 1) {
  const existing = cart.find(i => i.id === id);
  if (existing) existing.qty += qty;
  else cart.push({ id, qty });
  saveState();
  updateBadges();
  showToast('Added to cart 🛍️');
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveState();
  updateBadges();
  renderCartDrawer();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveState();
  renderCartDrawer();
  updateBadges();
}

/* ========================================================
   WISHLIST
   ======================================================== */
function toggleWishlist(id) {
  const idx = wishlist.indexOf(id);
  if (idx >= 0) {
    wishlist.splice(idx, 1);
    showToast('Removed from wishlist');
  } else {
    wishlist.push(id);
    showToast('Added to wishlist 💛');
  }
  saveState();
  updateBadges();
  // Refresh wish button states in current view
  document.querySelectorAll(`.pc-wish[data-id="${id}"]`).forEach(btn => {
    btn.classList.toggle('wished', wishlist.includes(id));
    btn.textContent = wishlist.includes(id) ? '💛' : '🤍';
  });
}

function renderWishlist() {
  const grid = document.getElementById('wishlistGrid');
  if (!wishlist.length) {
    grid.innerHTML = `<div class="empty-state"><p>💛</p><h3>Your wishlist is empty</h3><p>Save your favourite products here</p><button class="btn btn-primary" onclick="showPage('shop')">Explore Products</button></div>`;
    return;
  }
  const items = products.filter(p => wishlist.includes(p.id));
  grid.innerHTML = items.map(p => renderProductCard(p)).join('');
}

/* ========================================================
   BADGES
   ======================================================== */
function updateBadges() {
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cartBadge').textContent = cartCount;
  document.getElementById('wishlistBadge').textContent = wishlist.length;
}

/* ========================================================
   PRODUCT CARD RENDERER
   ======================================================== */
function renderProductCard(p) {
  const wished = wishlist.includes(p.id);
  const hasDiscount = p.origPrice && p.origPrice > p.price;
  const saveAmt = hasDiscount ? Math.round((1 - p.price / p.origPrice) * 100) : 0;
  const stars = '★'.repeat(Math.floor(p.rating)) + (p.rating % 1 >= 0.5 ? '½' : '') + '☆'.repeat(5 - Math.ceil(p.rating));

  return `
    <div class="product-card">
      <div class="pc-img">
        <div class="pc-img-inner">
          <div class="pc-product-visual">
            <div class="pv-blob ${p.visual}" style="font-size:3rem">${p.emoji}</div>
          </div>
        </div>
        ${p.badge ? `<span class="pc-badge ${p.badge === 'New' ? 'new-badge' : 'sale-badge'}">${p.badge}</span>` : ''}
        <button class="pc-wish ${wished ? 'wished' : ''}" data-id="${p.id}" onclick="toggleWishlist(${p.id})">${wished ? '💛' : '🤍'}</button>
        <div class="pc-quick">
          <button class="btn btn-primary btn-full btn-sm" onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
      </div>
      <div class="pc-body">
        <div class="pc-cat">${p.category}</div>
        <div class="pc-name" onclick="openProduct(${p.id})" style="cursor:pointer">${p.name}</div>
        <div class="pc-stars">${stars} <span>(${p.reviews})</span></div>
        <div class="pc-price">
          <span class="pc-price-main">$${p.price}</span>
          ${hasDiscount ? `<span class="pc-price-orig">$${p.origPrice}</span><span class="pc-price-save">-${saveAmt}%</span>` : ''}
        </div>
        <div class="pc-add">
          <button class="btn btn-primary" onclick="addToCart(${p.id})">Add to Cart</button>
          <button class="btn btn-outline" onclick="openProduct(${p.id})">Details</button>
        </div>
      </div>
    </div>`;
}

/* ========================================================
   FEATURED GRID
   ======================================================== */
function renderFeatured() {
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;
  const featured = products.filter(p => p.featured).slice(0, 6);
  grid.innerHTML = featured.map(p => renderProductCard(p)).join('');
}

/* ========================================================
   SHOP PAGE
   ======================================================== */
function renderShop() {
  applyFilters();
}

function applyFilters() {
  const catChecks = document.querySelectorAll('#catFilters input[type=checkbox]');
  const selectedCats = [];
  let allChecked = false;
  catChecks.forEach(c => {
    if (c.value === 'all' && c.checked) allChecked = true;
    else if (c.checked) selectedCats.push(c.value);
  });

  const maxPrice = parseFloat(document.getElementById('priceMax')?.value || 200);
  const minPrice = parseFloat(document.getElementById('priceMin')?.value || 0);

  const concernChecks = document.querySelectorAll('#shopSidebar input[value="Anti-Aging"], #shopSidebar input[value="Brightening"], #shopSidebar input[value="Hydrating"], #shopSidebar input[value="Acne"], #shopSidebar input[value="Sensitive"]');
  const selectedConcerns = [];
  concernChecks.forEach(c => { if (c.checked) selectedConcerns.push(c.value); });

  const ratingVal = parseFloat(document.querySelector('input[name="rating"]:checked')?.value || 0);
  const sort = document.getElementById('sortSelect')?.value || 'default';

  let filtered = [...products];

  if (!allChecked && selectedCats.length) {
    filtered = filtered.filter(p => selectedCats.includes(p.category));
  }
  filtered = filtered.filter(p => p.price >= minPrice && p.price <= maxPrice);
  if (selectedConcerns.length) {
    filtered = filtered.filter(p => selectedConcerns.includes(p.concern));
  }
  if (ratingVal > 0) {
    filtered = filtered.filter(p => p.rating >= ratingVal);
  }

  if (sort === 'price-low') filtered.sort((a, b) => a.price - b.price);
  else if (sort === 'price-high') filtered.sort((a, b) => b.price - a.price);
  else if (sort === 'rating') filtered.sort((a, b) => b.rating - a.rating);
  else if (sort === 'newest') filtered.sort((a, b) => b.id - a.id);

  const grid = document.getElementById('shopGrid');
  const noResults = document.getElementById('noResults');
  const count = document.getElementById('shopResultCount');

  if (!filtered.length) {
    grid.innerHTML = '';
    noResults.style.display = 'block';
  } else {
    noResults.style.display = 'none';
    grid.innerHTML = filtered.map(p => renderProductCard(p)).join('');
  }
  count.textContent = `Showing ${filtered.length} product${filtered.length !== 1 ? 's' : ''}`;
}

function syncPriceSlider(val) {
  document.getElementById('priceMax').value = val;
  applyFilters();
}

function resetFilters() {
  document.querySelectorAll('#shopSidebar input[type=checkbox]').forEach(c => {
    c.checked = c.value === 'all';
  });
  document.querySelectorAll('#shopSidebar input[type=radio]').forEach(r => {
    r.checked = r.value === '0';
  });
  document.getElementById('priceMin').value = 0;
  document.getElementById('priceMax').value = 200;
  document.getElementById('priceSlider').value = 200;
  document.getElementById('sortSelect').value = 'default';
  applyFilters();
}

function toggleSidebar() {
  const sidebar = document.getElementById('shopSidebar');
  sidebar.classList.toggle('sidebar-open');
  openOverlay();
}

function setView(mode) {
  const grid = document.getElementById('shopGrid');
  document.getElementById('gridViewBtn').classList.toggle('active', mode === 'grid');
  document.getElementById('listViewBtn').classList.toggle('active', mode === 'list');
  grid.classList.toggle('list-view', mode === 'list');
}

function filterAndGo(category) {
  showPage('shop');
  setTimeout(() => {
    document.querySelectorAll('#catFilters input[type=checkbox]').forEach(c => {
      c.checked = c.value === category;
    });
    document.querySelector('#catFilters input[value="all"]').checked = false;
    applyFilters();
  }, 50);
}

/* ========================================================
   PRODUCT DETAIL
   ======================================================== */
function openProduct(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  currentProductId = id;
  showPage('product');

  // Breadcrumb
  document.getElementById('breadcrumb').innerHTML = `
    <a href="#" onclick="showPage('home')">Home</a>
    <span class="bc-sep">›</span>
    <a href="#" onclick="showPage('shop')">Shop</a>
    <span class="bc-sep">›</span>
    <span>${p.name}</span>`;

  const hasDiscount = p.origPrice && p.origPrice > p.price;
  const saveAmt = hasDiscount ? Math.round((1 - p.price / p.origPrice) * 100) : 0;
  const stars = '★'.repeat(Math.floor(p.rating)) + (p.rating % 1 >= 0.5 ? '½' : '') + '☆'.repeat(5 - Math.ceil(p.rating));
  const wished = wishlist.includes(p.id);

  document.getElementById('productDetail').innerHTML = `
    <div class="pd-img">
      <div class="pv-blob ${p.visual}" style="font-size:6rem">${p.emoji}</div>
    </div>
    <div class="pd-info">
      <div class="pd-cat">${p.category}</div>
      <h1 class="pd-name">${p.name}</h1>
      <div class="pd-rating">
        <span class="pd-stars">${stars}</span>
        <span>${p.rating}</span>
        <span class="pd-review-count">(${p.reviews} reviews)</span>
      </div>
      <div class="pd-price-row">
        <span class="pd-price">$${p.price}</span>
        ${hasDiscount ? `<span class="pd-orig">$${p.origPrice}</span><span class="pd-save">Save ${saveAmt}%</span>` : ''}
      </div>
      <p class="pd-desc">${p.desc}</p>
      <div class="pd-concerns">
        <span class="pd-concern-tag">✓ ${p.concern}</span>
        <span class="pd-concern-tag">✓ Cruelty-Free</span>
        <span class="pd-concern-tag">✓ Dermatologist Tested</span>
        <span class="pd-concern-tag">✓ Vegan</span>
      </div>
      <div class="pd-qty-row">
        <span class="pd-qty-label">Qty:</span>
        <div class="qty-control-lg">
          <button onclick="pdChangeQty(-1)">−</button>
          <span id="pdQty">1</span>
          <button onclick="pdChangeQty(1)">+</button>
        </div>
      </div>
      <div class="pd-actions">
        <button class="btn btn-primary btn-lg" onclick="pdAddToCart(${p.id})">Add to Cart 🛍️</button>
        <button class="btn btn-outline btn-lg ${wished ? 'wished' : ''}" id="pdWishBtn" onclick="pdToggleWish(${p.id})">${wished ? '💛 Wishlisted' : '🤍 Wishlist'}</button>
      </div>
      <div class="pd-accordion">
        <div class="pd-acc-item">
          <button class="pd-acc-trigger" onclick="toggleAcc(this)">Key Ingredients <span>▼</span></button>
          <div class="pd-acc-body">
            <div class="ingredient-tags">${p.ingredients.map(i => `<span class="ing-tag">${i}</span>`).join('')}</div>
          </div>
        </div>
        <div class="pd-acc-item">
          <button class="pd-acc-trigger" onclick="toggleAcc(this)">How to Use <span>▼</span></button>
          <div class="pd-acc-body">Apply a small amount to cleansed skin morning and evening. Gently pat in until absorbed. Follow with moisturiser and SPF during the day.</div>
        </div>
        <div class="pd-acc-item">
          <button class="pd-acc-trigger" onclick="toggleAcc(this)">Shipping & Returns <span>▼</span></button>
          <div class="pd-acc-body">Free standard shipping on orders over $50. Express options available at checkout. Returns accepted within 30 days of delivery for unused, unopened products.</div>
        </div>
      </div>
    </div>`;

  // Related products
  const related = products.filter(x => x.id !== id && (x.category === p.category || x.concern === p.concern)).slice(0, 4);
  document.getElementById('relatedGrid').innerHTML = related.map(r => renderProductCard(r)).join('');
}

function pdChangeQty(delta) {
  const el = document.getElementById('pdQty');
  el.textContent = Math.max(1, parseInt(el.textContent) + delta);
}

function pdAddToCart(id) {
  const qty = parseInt(document.getElementById('pdQty')?.textContent || 1);
  addToCart(id, qty);
}

function pdToggleWish(id) {
  toggleWishlist(id);
  const btn = document.getElementById('pdWishBtn');
  if (btn) {
    const wished = wishlist.includes(id);
    btn.textContent = wished ? '💛 Wishlisted' : '🤍 Wishlist';
    btn.classList.toggle('wished', wished);
  }
}

function toggleAcc(trigger) {
  trigger.classList.toggle('open');
  const body = trigger.nextElementSibling;
  body.classList.toggle('open');
}

/* ========================================================
   AUTH
   ======================================================== */
function toggleAuth() {
  const drawer = document.getElementById('authDrawer');
  const isOpen = drawer.classList.toggle('open');
  if (isOpen) {
    openOverlay();
    if (currentUser) showAuthPanel('profile');
    else showAuthPanel('login');
  } else {
    closeAll();
  }
}

function switchAuth(mode) {
  showAuthPanel(mode);
}

function showAuthPanel(mode) {
  document.getElementById('loginForm').style.display = mode === 'login' ? 'block' : 'none';
  document.getElementById('registerForm').style.display = mode === 'register' ? 'block' : 'none';
  document.getElementById('profilePanel').style.display = mode === 'profile' ? 'block' : 'none';
  const titles = { login: 'Welcome Back', register: 'Create Account', profile: 'My Account' };
  document.getElementById('authTitle').textContent = titles[mode];

  if (mode === 'profile' && currentUser) {
    const initials = currentUser.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    document.getElementById('profileAvatar').textContent = initials;
    document.getElementById('profileName').textContent = currentUser.name;
    document.getElementById('profileEmail').textContent = currentUser.email;
  }
}

function handleLogin() {
  const email = document.getElementById('loginEmail').value.trim();
  const pass = document.getElementById('loginPass').value;
  if (!email || !pass) { showToast('Please fill in all fields'); return; }
  const user = customers.find(c => c.email === email);
  if (!user) { showToast('Account not found. Please register.'); return; }
  currentUser = user;
  saveState();
  showToast(`Welcome back, ${user.name.split(' ')[0]}! 👋`);
  showAuthPanel('profile');
}

function handleRegister() {
  const name = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const pass = document.getElementById('regPass').value;
  if (!name || !email || !pass) { showToast('Please fill in all fields'); return; }
  if (customers.find(c => c.email === email)) { showToast('Email already registered'); return; }
  const user = { id: Date.now(), name, email, joined: new Date().toLocaleDateString(), orders: 0, spent: 0 };
  customers.push(user);
  currentUser = user;
  saveState();
  showToast(`Welcome to GLOW, ${name.split(' ')[0]}! ✨`);
  showAuthPanel('profile');
}

function handleLogout() {
  currentUser = null;
  saveState();
  toggleAuth();
  showToast('Signed out. See you soon! 👋');
}

/* ========================================================
   CHECKOUT
   ======================================================== */
function renderCheckout() {
  // Summary sidebar
  const itemsEl = document.getElementById('coCartItems');
  const totalsEl = document.getElementById('coTotals');
  if (!itemsEl) return;

  itemsEl.innerHTML = cart.map(item => {
    const p = products.find(x => x.id === item.id);
    if (!p) return '';
    return `
      <div class="co-item">
        <div class="co-item-img">${p.emoji}</div>
        <div class="co-item-info">
          <div class="co-item-name">${p.name}</div>
          <div class="co-item-qty">Qty: ${item.qty}</div>
        </div>
        <span class="co-item-price">$${(p.price * item.qty).toFixed(2)}</span>
      </div>`;
  }).join('');

  updateCoTotals();
  goToStep(1);
}

function updateCoTotals() {
  const subtotal = cart.reduce((s, i) => {
    const p = products.find(x => x.id === i.id);
    return s + (p ? p.price * i.qty : 0);
  }, 0);
  const shippingChoice = document.querySelector('input[name="shipping"]:checked')?.value || 'free';
  const shippingCost = shippingChoice === 'express' ? 9.99 : shippingChoice === 'overnight' ? 24.99 : (subtotal >= 50 ? 0 : 5.99);
  const discountAmt = discount > 0 ? subtotal * (discount / 100) : 0;
  const total = subtotal - discountAmt + shippingCost;

  document.getElementById('coTotals').innerHTML = `
    <div class="co-row"><span>Subtotal</span><span>$${subtotal.toFixed(2)}</span></div>
    ${discountAmt > 0 ? `<div class="co-row co-discount"><span>Discount (${discount}%)</span><span>-$${discountAmt.toFixed(2)}</span></div>` : ''}
    <div class="co-row"><span>Shipping</span><span>${shippingCost === 0 ? 'Free' : '$' + shippingCost.toFixed(2)}</span></div>
    <div class="co-row co-total"><span>Total</span><span>$${total.toFixed(2)}</span></div>`;
}

function goToStep(step) {
  [1, 2, 3].forEach(s => {
    document.getElementById(`checkoutStep${s}`).style.display = s === step ? 'block' : 'none';
    const tab = document.getElementById(`step${s}-tab`);
    if (tab) tab.classList.toggle('active', s === step);
  });

  if (step === 2) updateCoTotals();

  if (step === 3) {
    const fname = document.getElementById('coFname').value;
    const lname = document.getElementById('coLname').value;
    const addr = document.getElementById('coAddr').value;
    const city = document.getElementById('coCity').value;
    const country = document.getElementById('coCountry').value;
    const pm = document.querySelector('input[name="pm"]:checked')?.value || 'card';
    const pmLabels = { card: '💳 Credit/Debit Card', paypal: '🅿 PayPal', apple: '🍎 Apple Pay' };

    const subtotal = cart.reduce((s, i) => {
      const p = products.find(x => x.id === i.id);
      return s + (p ? p.price * i.qty : 0);
    }, 0);
    const discountAmt = discount > 0 ? subtotal * (discount / 100) : 0;
    const shippingChoice = document.querySelector('input[name="shipping"]:checked')?.value || 'free';
    const shippingCost = shippingChoice === 'express' ? 9.99 : shippingChoice === 'overnight' ? 24.99 : (subtotal >= 50 ? 0 : 5.99);
    const total = subtotal - discountAmt + shippingCost;

    document.getElementById('orderReview').innerHTML = `
      <div style="background:var(--bg2);border-radius:var(--radius);padding:1.25rem;margin-bottom:1rem">
        <h4 style="margin-bottom:.75rem;font-size:.9rem">Shipping to</h4>
        <p style="font-size:.9rem;color:var(--muted)">${fname} ${lname}<br/>${addr}, ${city}<br/>${country}</p>
      </div>
      <div style="background:var(--bg2);border-radius:var(--radius);padding:1.25rem;margin-bottom:1rem">
        <h4 style="margin-bottom:.5rem;font-size:.9rem">Payment</h4>
        <p style="font-size:.9rem;color:var(--muted)">${pmLabels[pm]}</p>
      </div>
      <div style="background:rgba(255,78,142,.06);border:1.5px solid rgba(255,78,142,.2);border-radius:var(--radius);padding:1.25rem">
        <div style="display:flex;justify-content:space-between;font-weight:700;font-size:1.1rem">
          <span>Total</span><span style="color:var(--pink)">$${total.toFixed(2)}</span>
        </div>
      </div>`;
  }
}

function selectPM(el) {
  document.querySelectorAll('.pm-option').forEach(o => o.classList.remove('active-pm'));
  el.classList.add('active-pm');
  const val = el.querySelector('input').value;
  document.getElementById('cardFields').style.display = val === 'card' ? 'block' : 'none';
}

function formatCard(input) {
  let v = input.value.replace(/\D/g, '').slice(0, 16);
  input.value = v.replace(/(.{4})/g, '$1 ').trim();
}

function formatExpiry(input) {
  let v = input.value.replace(/\D/g, '').slice(0, 4);
  if (v.length > 2) v = v.slice(0, 2) + '/' + v.slice(2);
  input.value = v;
}

function applyCoupon() {
  const code = document.getElementById('couponCode').value.trim().toUpperCase();
  const msg = document.getElementById('couponMsg');
  const coupons = { 'GLOW20': 20, 'BEAUTY10': 10, 'SKINCARE15': 15, 'WELCOME25': 25 };
  if (coupons[code]) {
    discount = coupons[code];
    msg.style.color = 'var(--mint)';
    msg.textContent = `✓ ${discount}% discount applied!`;
    updateCoTotals();
    showToast(`Coupon applied! ${discount}% off 🎉`);
  } else {
    discount = 0;
    msg.style.color = 'var(--danger)';
    msg.textContent = 'Invalid coupon code';
  }
}

function placeOrder() {
  if (!cart.length) { showToast('Your cart is empty'); return; }
  const fname = document.getElementById('coFname').value.trim();
  const email = document.getElementById('coEmail').value.trim();
  const addr = document.getElementById('coAddr').value.trim();
  if (!fname) { document.getElementById('coFnameErr').textContent = 'Required'; return; }
  if (!email) { document.getElementById('coEmailErr').textContent = 'Required'; return; }
  if (!addr) { document.getElementById('coAddrErr').textContent = 'Required'; return; }

  const subtotal = cart.reduce((s, i) => {
    const p = products.find(x => x.id === i.id);
    return s + (p ? p.price * i.qty : 0);
  }, 0);
  const discountAmt = discount > 0 ? subtotal * (discount / 100) : 0;
  const shippingChoice = document.querySelector('input[name="shipping"]:checked')?.value || 'free';
  const shippingCost = shippingChoice === 'express' ? 9.99 : shippingChoice === 'overnight' ? 24.99 : (subtotal >= 50 ? 0 : 5.99);
  const total = subtotal - discountAmt + shippingCost;

  const orderId = 'GLW-' + Date.now().toString().slice(-6);
  const order = {
    id: orderId,
    customer: fname + ' ' + (document.getElementById('coLname').value || ''),
    email,
    date: new Date().toLocaleDateString(),
    items: [...cart],
    total: total.toFixed(2),
    status: 'processing',
    shipping: shippingChoice
  };
  orders.unshift(order);

  // Update customer stats
  if (currentUser) {
    const cu = customers.find(c => c.id === currentUser.id);
    if (cu) { cu.orders++; cu.spent = (parseFloat(cu.spent) + total).toFixed(2); }
  } else {
    // Guest customer
    const existing = customers.find(c => c.email === email);
    if (!existing) {
      customers.push({ id: Date.now(), name: order.customer, email, joined: new Date().toLocaleDateString(), orders: 1, spent: total.toFixed(2) });
    } else {
      existing.orders++;
      existing.spent = (parseFloat(existing.spent) + total).toFixed(2);
    }
  }

  cart = [];
  discount = 0;
  saveState();
  updateBadges();

  document.getElementById('successOrderId').textContent = `Order #${orderId}`;
  showPage('success');
}

/* ========================================================
   ORDERS PAGE
   ======================================================== */
function renderOrders() {
  const list = document.getElementById('ordersList');
  if (!orders.length) {
    list.innerHTML = `<div class="empty-state"><p>📦</p><h3>No orders yet</h3><p>Start shopping to see your orders here</p><button class="btn btn-primary" onclick="showPage('shop')">Shop Now</button></div>`;
    return;
  }
  const statusClass = { processing: 'status-processing', shipped: 'status-shipped', delivered: 'status-delivered' };
  list.innerHTML = orders.map(o => `
    <div class="order-card">
      <div class="order-card-header">
        <div>
          <h4>${o.id}</h4>
          <p style="font-size:.82rem;color:var(--muted)">${o.date} · ${o.items.length} item${o.items.length !== 1 ? 's' : ''}</p>
        </div>
        <div style="display:flex;align-items:center;gap:1rem">
          <span style="font-weight:700;color:var(--pink)">$${o.total}</span>
          <span class="status-badge ${statusClass[o.status] || 'status-processing'}">${o.status.charAt(0).toUpperCase() + o.status.slice(1)}</span>
        </div>
      </div>
      <div style="display:flex;gap:.5rem;flex-wrap:wrap">
        ${o.items.map(i => {
          const p = products.find(x => x.id === i.id);
          return p ? `<span style="background:var(--bg2);border:1px solid var(--border);border-radius:50px;padding:.3rem .75rem;font-size:.78rem">${p.emoji} ${p.name} ×${i.qty}</span>` : '';
        }).join('')}
      </div>
    </div>`).join('');
}

/* ========================================================
   NEWSLETTER
   ======================================================== */
function handleNewsletter() {
  const email = document.getElementById('nlEmail').value.trim();
  if (!email || !email.includes('@')) { showToast('Please enter a valid email'); return; }
  showToast('Welcome to the Glow Club! 💌 Check your inbox.');
  document.getElementById('nlEmail').value = '';
}

/* ========================================================
   ADMIN
   ======================================================== */
function initAdmin() {
  document.getElementById('adminDate').textContent = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  updateAdminStats();
  renderAdminRecentOrders();
  renderAdminTopProducts();
  renderAdminProductsTable();
  renderAdminOrdersTable();
  renderAdminCustomersTable();
}

function showAdminTab(tab) {
  document.querySelectorAll('.admin-tab').forEach(t => t.style.display = 'none');
  document.getElementById('admin-' + tab).style.display = 'block';
  document.querySelectorAll('.an-btn').forEach(b => b.classList.remove('active'));
  event?.target?.closest('.an-btn')?.classList.add('active');
  if (tab === 'overview') updateAdminStats();
  if (tab === 'products') renderAdminProductsTable();
  if (tab === 'orders') renderAdminOrdersTable();
  if (tab === 'customers') renderAdminCustomersTable();
  if (tab === 'add-product') {
    document.getElementById('addProductTitle').textContent = 'Add New Product';
    document.getElementById('editProductId').value = '';
    clearProductForm();
  }
}

function updateAdminStats() {
  const revenue = orders.reduce((s, o) => s + parseFloat(o.total), 0);
  document.getElementById('totalRevenue').textContent = '$' + revenue.toFixed(2);
  document.getElementById('totalOrders').textContent = orders.length;
  document.getElementById('totalCustomers').textContent = customers.length;
  document.getElementById('totalProducts').textContent = products.length;
}

function renderAdminRecentOrders() {
  const el = document.getElementById('adminRecentOrders');
  if (!orders.length) { el.innerHTML = '<p class="empty-msg" style="padding:1rem 0">No orders yet</p>'; return; }
  const statusClass = { processing: 'status-processing', shipped: 'status-shipped', delivered: 'status-delivered' };
  el.innerHTML = orders.slice(0, 5).map(o => `
    <div class="ar-order">
      <div>
        <div style="font-weight:600;font-size:.875rem">${o.id}</div>
        <div style="font-size:.78rem;color:var(--muted)">${o.customer}</div>
      </div>
      <div style="text-align:right">
        <div style="font-weight:700;color:var(--pink)">$${o.total}</div>
        <span class="status-badge ${statusClass[o.status] || 'status-processing'}">${o.status}</span>
      </div>
    </div>`).join('');
}

function renderAdminTopProducts() {
  const el = document.getElementById('adminTopProducts');
  const top = [...products].sort((a, b) => b.reviews - a.reviews).slice(0, 5);
  const maxR = top[0]?.reviews || 1;
  el.innerHTML = top.map(p => `
    <div class="ar-top">
      <span style="font-size:1.3rem">${p.emoji}</span>
      <div style="flex:1;min-width:0">
        <div style="font-size:.82rem;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${p.name}</div>
        <div class="ar-top-bar"><div class="ar-top-fill" style="width:${(p.reviews / maxR * 100)}%"></div></div>
      </div>
      <span style="font-size:.78rem;color:var(--muted);font-weight:600">${p.reviews}</span>
    </div>`).join('');
}

function renderAdminProductsTable(filter = '') {
  const body = document.getElementById('adminProductsBody');
  const list = filter ? products.filter(p => p.name.toLowerCase().includes(filter.toLowerCase())) : products;
  const stockClass = s => s > 50 ? 'stock-in' : s > 10 ? 'stock-low' : 'stock-out';
  const stockLabel = s => s > 50 ? 'In Stock' : s > 10 ? 'Low Stock' : 'Out of Stock';
  body.innerHTML = list.map(p => `
    <tr>
      <td><div class="at-product"><div class="at-img">${p.emoji}</div><span style="font-weight:600">${p.name}</span></div></td>
      <td>${p.category}</td>
      <td>$${p.price}${p.origPrice ? ` <span style="font-size:.75rem;color:var(--dim);text-decoration:line-through">$${p.origPrice}</span>` : ''}</td>
      <td><span class="stock-badge ${stockClass(p.stock)}">${stockLabel(p.stock)} (${p.stock})</span></td>
      <td>★ ${p.rating}</td>
      <td style="display:flex;gap:.4rem">
        <button class="at-btn at-edit" onclick="editProduct(${p.id})">Edit</button>
        <button class="at-btn at-del" onclick="deleteProduct(${p.id})">Delete</button>
      </td>
    </tr>`).join('');
}

function filterAdminProducts(val) {
  renderAdminProductsTable(val);
}

function renderAdminOrdersTable() {
  const body = document.getElementById('adminOrdersBody');
  const statusClass = { processing: 'status-processing', shipped: 'status-shipped', delivered: 'status-delivered' };
  if (!orders.length) {
    body.innerHTML = '<tr><td colspan="6" style="text-align:center;color:var(--muted);padding:2rem">No orders yet</td></tr>';
    return;
  }
  body.innerHTML = orders.map(o => `
    <tr>
      <td style="font-weight:700">${o.id}</td>
      <td>${o.customer}</td>
      <td>${o.date}</td>
      <td>${o.items.length}</td>
      <td style="font-weight:700;color:var(--pink)">$${o.total}</td>
      <td>
        <select class="sort-select" style="padding:.3rem .5rem;font-size:.78rem" onchange="updateOrderStatus('${o.id}', this.value)">
          <option value="processing" ${o.status === 'processing' ? 'selected' : ''}>Processing</option>
          <option value="shipped" ${o.status === 'shipped' ? 'selected' : ''}>Shipped</option>
          <option value="delivered" ${o.status === 'delivered' ? 'selected' : ''}>Delivered</option>
        </select>
      </td>
    </tr>`).join('');
}

function updateOrderStatus(id, status) {
  const o = orders.find(x => x.id === id);
  if (o) { o.status = status; saveState(); showToast('Order status updated ✓'); }
}

function renderAdminCustomersTable() {
  const body = document.getElementById('adminCustomersBody');
  if (!customers.length) {
    body.innerHTML = '<tr><td colspan="5" style="text-align:center;color:var(--muted);padding:2rem">No customers yet</td></tr>';
    return;
  }
  body.innerHTML = customers.map(c => `
    <tr>
      <td style="font-weight:600">${c.name}</td>
      <td>${c.email}</td>
      <td>${c.joined}</td>
      <td>${c.orders}</td>
      <td style="font-weight:700;color:var(--pink)">$${parseFloat(c.spent || 0).toFixed(2)}</td>
    </tr>`).join('');
}

function editProduct(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  showAdminTab('add-product');
  document.getElementById('addProductTitle').textContent = 'Edit Product';
  document.getElementById('editProductId').value = id;
  document.getElementById('apName').value = p.name;
  document.getElementById('apCategory').value = p.category;
  document.getElementById('apPrice').value = p.price;
  document.getElementById('apOrigPrice').value = p.origPrice || '';
  document.getElementById('apStock').value = p.stock;
  document.getElementById('apConcern').value = p.concern;
  document.getElementById('apDesc').value = p.desc;
  document.getElementById('apIngredients').value = p.ingredients.join(', ');
  document.getElementById('apBadge').value = p.badge || '';
  document.getElementById('apFeatured').checked = p.featured;
}

function saveProduct() {
  const name = document.getElementById('apName').value.trim();
  const category = document.getElementById('apCategory').value;
  const price = parseFloat(document.getElementById('apPrice').value);
  const origPrice = parseFloat(document.getElementById('apOrigPrice').value) || null;
  const stock = parseInt(document.getElementById('apStock').value) || 0;
  const concern = document.getElementById('apConcern').value;
  const desc = document.getElementById('apDesc').value.trim();
  const ingredients = document.getElementById('apIngredients').value.split(',').map(s => s.trim()).filter(Boolean);
  const badge = document.getElementById('apBadge').value;
  const featured = document.getElementById('apFeatured').checked;

  if (!name || !price) { showToast('Please fill in required fields'); return; }

  const editId = document.getElementById('editProductId').value;
  const visuals = ['pv-1', 'pv-2', 'pv-3', 'pv-4', 'pv-5', 'pv-6', 'pv-7', 'pv-8'];
  const emojis = ['✨', '💧', '🌙', '☀️', '🌹', '🔬', '👁️', '🫧'];

  if (editId) {
    const p = products.find(x => x.id === parseInt(editId));
    if (p) {
      Object.assign(p, { name, category, price, origPrice, stock, concern, desc, ingredients, badge, featured });
      showToast('Product updated ✓');
    }
  } else {
    const idx = products.length % 8;
    products.push({
      id: Date.now(), name, category, price, origPrice, stock, concern, desc, ingredients, badge, featured,
      rating: 4.5, reviews: 0, emoji: emojis[idx], visual: visuals[idx]
    });
    showToast('Product added ✓');
  }
 saveState();
  renderFeatured();
  renderShop();
  renderAdminProductsTable();

  clearProductForm();

  document.getElementById('editProductId').value = '';

  document.getElementById('addProductTitle').textContent = 'Add New Product';

  updateAdminStats();
}
  clearProductForm();
  document.getElementById('editProductId').value = '';
  document.getElementById('addProductTitle').textContent = 'Add New Product';
  updateAdminStats();
}

function clearProductForm() {
  ['apName', 'apPrice', 'apOrigPrice', 'apStock', 'apDesc', 'apIngredients'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  document.getElementById('apFeatured').checked = false;
  document.getElementById('apBadge').value = '';
}

function cancelEditProduct() {
  clearProductForm();
  document.getElementById('editProductId').value = '';
  document.getElementById('addProductTitle').textContent = 'Add New Product';
  showAdminTab('products');
}

function deleteProduct(id) {
  if (!confirm('Delete this product?')) return;
  products = products.filter(p => p.id !== id);
  cart = cart.filter(i => i.id !== id);
  wishlist = wishlist.filter(w => w !== id);
  saveState();
  renderAdminProductsTable();
  updateAdminStats();
  updateBadges();
  showToast('Product deleted');
}

/* ========================================================
   INIT
   ======================================================== */
(function init() {
  renderFeatured();
  updateBadges();

  // Scroll events for shipping calc
  document.querySelectorAll('input[name="shipping"]').forEach(r => {
    r.addEventListener('change', updateCoTotals);
  });
})();