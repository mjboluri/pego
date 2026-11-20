/* pego standalone build. Edit source/modules, not this generated bundle. */
(function () {
  "use strict";
  const __wbModules = Object.create(null);
// Module: src/lib/dom.js
(function () {
  "use strict";
/** Small DOM helpers shared by storefront and admin. */
const select = (selector, root = document) => root.querySelector(selector);

const selectAll = (selector, root = document) => [
  ...root.querySelectorAll(selector),
];

/** Escape anything that can originate from editable local catalog content. */
function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character]);
}

function notify(message) {
  const element = select('#toast');

  if (!element) {
    return;
  }

  element.textContent = message;
  element.classList.add('show');
  window.clearTimeout(notify.timeoutId);
  notify.timeoutId = window.setTimeout(() => {
    element.classList.remove('show');
  }, 2800);
}

  __wbModules['src/lib/dom.js'] = { select, selectAll, escapeHtml, notify };
})();

// Module: src/lib/format.js
(function () {
  "use strict";
function faNumber(value) {
  return Number(value).toLocaleString('fa-IR');
}

function hasConfirmedPrice(product) {
  return Number.isSafeInteger(product?.price) && product.price >= 0;
}

function priceText(product) {
  return hasConfirmedPrice(product)
    ? `${faNumber(product.price)} تومان`
    : 'قیمت: اعلام می‌شود';
}

function formatDate(value) {
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? '—'
    : date.toLocaleDateString('fa-IR');
}

  __wbModules['src/lib/format.js'] = { faNumber, hasConfirmedPrice, priceText, formatDate };
})();

// Module: src/data/products.js
(function () {
  "use strict";
/* Catalog fixtures derived from confirmed pego specifications. */
const defaultProducts = [
  {
    "id": "panel-30",
    "slug": "pegboard-panel-30x30",
    "sku": "WB-PNL-3030",
    "name": "پنل پگ‌برد ۳۰×۳۰",
    "category": "panels",
    "categoryName": "پنل اصلی",
    "color": "coral",
    "label": "THE ORIGINAL",
    "price": null,
    "stock": null,
    "status": "draft",
    "summary": "پنل اصلی از PVC سفید، ضخامت ۸ میلی‌متر، برش CNC.",
    "specs": [
      "ابعاد اسمی: ۳۰ × ۳۰ سانتی‌متر",
      "جنس: PVC سفید",
      "ضخامت: ۸ میلی‌متر",
      "روش ساخت: برش CNC"
    ],
    "art": "board",
    "image": null,
    "images": []
  },
  {
    "id": "shelf-30",
    "slug": "pegboard-shelf-12x30",
    "sku": "WB-SHF-1230",
    "name": "شلف پگ‌برد",
    "category": "accessories",
    "categoryName": "متعلقات",
    "color": "sand",
    "label": "SHELF",
    "price": null,
    "stock": null,
    "status": "draft",
    "summary": "شلف با ابعاد تقریبی ۱۲×۳۰ سانتی‌متر؛ برای قرارگرفتن روی نگهدارنده‌های بزرگ.",
    "specs": [
      "ابعاد تقریبی: ۱۲ × ۳۰ سانتی‌متر",
      "نیازمند نگهدارنده‌های بزرگ",
      "ظرفیت بار: تأیید نشده"
    ],
    "art": "shelf",
    "image": null,
    "images": []
  },
  {
    "id": "holders",
    "slug": "pegboard-holders-set",
    "sku": "WB-HLD-SET",
    "name": "نگهدارنده‌های پگ‌برد",
    "category": "accessories",
    "categoryName": "متعلقات",
    "color": "yellow",
    "label": "HOLDERS",
    "price": null,
    "stock": null,
    "status": "draft",
    "summary": "نگهدارنده‌های کوچک، متوسط و بزرگ برای ترکیب با پنل.",
    "specs": [
      "سه اندازه: کوچک، متوسط، بزرگ",
      "هندسه و ظرفیت وزن: تأیید نشده",
      "سازگاری نهایی نیازمند بررسی فایل تولید"
    ],
    "art": "holders",
    "image": null,
    "images": []
  },
  {
    "id": "desktop-stands",
    "slug": "pegboard-desktop-stands",
    "sku": "WB-DESK-2",
    "name": "پایه رومیزی",
    "category": "accessories",
    "categoryName": "متعلقات",
    "color": "pink",
    "label": "DESK SETUP",
    "price": null,
    "stock": null,
    "status": "draft",
    "summary": "نگهدارنده‌های استفاده از پنل روی سطح میز؛ ابعاد و روش اتصال باید تأیید شوند.",
    "specs": [
      "نوع: پایه رومیزی پنل",
      "در فهرست کیت: ۲ عدد",
      "ابعاد و پایداری نهایی: نیازمند بررسی"
    ],
    "art": "stand",
    "image": null,
    "images": []
  },
  {
    "id": "brackets",
    "slug": "pegboard-keyboard-brackets",
    "sku": "WB-BRK-3",
    "name": "براکت نگهدارنده",
    "category": "accessories",
    "categoryName": "متعلقات",
    "color": "sand",
    "label": "BRACKETS",
    "price": null,
    "stock": null,
    "status": "draft",
    "summary": "براکت‌های موجود در فهرست کیت برای نگهدارنده‌ای مانند سینی کیبورد.",
    "specs": [
      "در فهرست کیت: ۳ عدد",
      "کاربرد نهایی و هندسه: نیازمند تأیید",
      "بار مجاز: هنوز مشخص نشده"
    ],
    "art": "holders",
    "image": null,
    "images": []
  },
  {
    "id": "full-kit",
    "slug": "pegboard-complete-kit",
    "sku": "WB-KIT-01",
    "name": "کیت کامل پگ‌برد",
    "category": "kits",
    "categoryName": "ست کامل",
    "color": "dark",
    "label": "FULL SET",
    "price": null,
    "stock": null,
    "status": "draft",
    "summary": "ترکیب قطعات اعلام‌شده شامل یک پنل اصلی و متعلقات فهرست‌شده؛ بسته‌بندی تجاری نهایی در انتظار تأیید.",
    "specs": [
      "۱ پنل اصلی ۳۰×۳۰",
      "۶ نگهدارنده کوچک + ۲ متوسط + ۲ بزرگ",
      "۱ شلف حدود ۱۲×۳۰",
      "۳ براکت + ۲ پایه رومیزی",
      "ترکیب نهایی پکیج نیازمند تأیید"
    ],
    "art": "board",
    "image": null,
    "images": []
  }
];

  __wbModules['src/data/products.js'] = { defaultProducts };
})();

// Module: src/lib/storage.js
(function () {
  "use strict";
/** Versioned browser storage adapter; user data is NEVER authentication data. */
const storageKeys = Object.freeze({
  cart: 'pego.cart.v1',
  favorites: 'pego.favorites.v1',
  products: 'pego.admin.products.v1',
  categories: 'pego.admin.categories.v1',
  bundles: 'pego.admin.bundles.v1',
  orders: 'pego.admin.orders.v1',
  customers: 'pego.admin.customers.v1',
  discounts: 'pego.admin.discounts.v1',
  shipping: 'pego.admin.shipping.v1',
  media: 'pego.admin.media.v1',
  content: 'pego.admin.content.v1',
  reviews: 'pego.admin.reviews.v1',
  messages: 'pego.admin.messages.v1',
  settings: 'pego.admin.settings.v1',
  activity: 'pego.admin.activity.v1',
});

function readStorage(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key);
    return raw === null ? structuredClone(fallback) : JSON.parse(raw);
  } catch {
    return structuredClone(fallback);
  }
}

function writeStorage(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    window.dispatchEvent(new CustomEvent('pego:updated', {
      detail: { key },
    }));
    return true;
  } catch {
    return false;
  }
}

  __wbModules['src/lib/storage.js'] = { storageKeys, readStorage, writeStorage };
})();

// Module: src/services/catalog.js
(function () {
  "use strict";
  const { defaultProducts } = __wbModules['src/data/products.js'];
  const { readStorage, storageKeys, writeStorage } = __wbModules['src/lib/storage.js'];



const validCategories = new Set(['panels', 'accessories', 'kits']);
const validArtwork = new Set(['board', 'holders', 'shelf', 'stand']);
const validColors = new Set(['coral', 'sand', 'yellow', 'pink', 'dark']);

function validImagePath(value) {
  return typeof value === 'string'
    && /^\/images\/[\w./-]+$/.test(value)
    && !value.includes('..');
}

function normalizedProduct(product) {
  if (!product || typeof product.id !== 'string' || !/^[\w-]{2,60}$/.test(product.id)) {
    return null;
  }

  if (typeof product.name !== 'string' || product.name.trim().length < 2) {
    return null;
  }

  const priceValue = product.price === '' || product.price == null
    ? null
    : Number(product.price);
  const stockValue = product.stock === '' || product.stock == null
    ? null
    : Number(product.stock);

  return {
    id: product.id,
    slug: typeof product.slug === 'string' && /^[a-z0-9-]{2,100}$/.test(product.slug) ? product.slug : product.id,
    sku: String(product.sku || product.id).slice(0, 80),
    name: product.name.slice(0, 120),
    category: validCategories.has(product.category) ? product.category : 'accessories',
    categoryName: String(product.categoryName || 'متعلقات').slice(0, 80),
    color: validColors.has(product.color) ? product.color : 'sand',
    label: String(product.label || 'PEGO').slice(0, 60),
    price: Number.isSafeInteger(priceValue) && priceValue >= 0 ? priceValue : null,
    stock: Number.isSafeInteger(stockValue) && stockValue >= 0 ? stockValue : null,
    status: ['draft', 'active', 'archived'].includes(product.status)
      ? product.status
      : 'draft',
    summary: String(product.summary || '').slice(0, 500),
    specs: Array.isArray(product.specs)
      ? product.specs.filter((spec) => typeof spec === 'string').slice(0, 16)
      : [],
    art: validArtwork.has(product.art) ? product.art : 'board',
    image: validImagePath(product.image) ? product.image : null,
    images: Array.isArray(product.images)
      ? product.images.slice(0, 12).filter(validImagePath)
      : [],
  };
}

function listProducts() {
  const saved = readStorage(storageKeys.products, null);
  const source = Array.isArray(saved) ? saved : defaultProducts;
  const categoryRecords = readStorage(storageKeys.categories, []);
  const names = Array.isArray(categoryRecords)
    ? new Map(categoryRecords.map((item) => [item.id, item.name]))
    : new Map();

  return source.map(normalizedProduct).filter(Boolean).map((product) => ({
    ...product,
    categoryName: String(names.get(product.category) || product.categoryName),
  }));
}

function getProduct(id) {
  return listProducts().find((product) => product.id === id || product.slug === id) || null;
}

function saveProducts(products) {
  if (!Array.isArray(products)) {
    return false;
  }

  const cleaned = products.map(normalizedProduct).filter(Boolean);
  const unique = new Set(cleaned.map((product) => product.id));

  if (cleaned.length !== products.length || unique.size !== cleaned.length) {
    return false;
  }

  return writeStorage(storageKeys.products, cleaned);
}

function resetProducts() {
  return writeStorage(storageKeys.products, defaultProducts);
}

  __wbModules['src/services/catalog.js'] = { listProducts, getProduct, saveProducts, resetProducts };
})();




// Module: src/services/cart.js
(function () {
  "use strict";
  const { getProduct } = __wbModules['src/services/catalog.js'];
  const { readStorage, storageKeys, writeStorage } = __wbModules['src/lib/storage.js'];
  const { hasConfirmedPrice } = __wbModules['src/lib/format.js'];




const LIMIT = 99;

function sanitizeCart(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return {};
  }

  return Object.fromEntries(
    Object.entries(value)
      .filter(([id, quantity]) => {
        return getProduct(id) && Number.isInteger(quantity) && quantity > 0;
      })
      .map(([id, quantity]) => [id, Math.min(quantity, LIMIT)]),
  );
}

function getCart() {
  return sanitizeCart(readStorage(storageKeys.cart, {}));
}

function cartEntries() {
  return Object.entries(getCart()).map(([id, quantity]) => ({
    product: getProduct(id),
    quantity,
  }));
}

function cartCount() {
  return cartEntries().reduce((sum, item) => sum + item.quantity, 0);
}

function cartTotal() {
  const entries = cartEntries();
  const pricesComplete = entries.every(({ product }) => hasConfirmedPrice(product));

  return {
    amount: pricesComplete
      ? entries.reduce((sum, { product, quantity }) => sum + product.price * quantity, 0)
      : null,
    pricesComplete,
  };
}

function changeCartQuantity(id, difference) {
  if (!getProduct(id) || !Number.isInteger(difference)) {
    return false;
  }

  const cart = getCart();
  const next = Math.max(0, Math.min(LIMIT, (cart[id] || 0) + difference));

  if (next === 0) {
    delete cart[id];
  } else {
    cart[id] = next;
  }

  return writeStorage(storageKeys.cart, cart);
}

function removeCartItem(id) {
  const cart = getCart();
  delete cart[id];
  return writeStorage(storageKeys.cart, cart);
}

  __wbModules['src/services/cart.js'] = { getCart, cartEntries, cartCount, cartTotal, changeCartQuantity, removeCartItem };
})();



// Module: src/services/favorites.js
(function () {
  "use strict";
  const { getProduct } = __wbModules['src/services/catalog.js'];
  const { readStorage, storageKeys, writeStorage } = __wbModules['src/lib/storage.js'];



function getFavorites() {
  const saved = readStorage(storageKeys.favorites, []);
  return Array.isArray(saved)
    ? [...new Set(saved.filter((id) => typeof id === 'string' && getProduct(id)))]
    : [];
}

function toggleFavorite(id) {
  if (!getProduct(id)) {
    return false;
  }

  const current = getFavorites();
  const next = current.includes(id)
    ? current.filter((itemId) => itemId !== id)
    : [...current, id];

  writeStorage(storageKeys.favorites, next);
  return next.includes(id);
}

  __wbModules['src/services/favorites.js'] = { getFavorites, toggleFavorite };
})();




// Module: src/components/product.js
(function () {
  "use strict";
  const { escapeHtml } = __wbModules['src/lib/dom.js'];
  const { priceText } = __wbModules['src/lib/format.js'];
  const { getFavorites } = __wbModules['src/services/favorites.js'];




/**
 * Public media paths are stored as /images/file.webp in catalog data.
 * Resolve against the real favicon folder so both the Vite source project and
 * the independent offline build can use exactly the same product records.
 */
function imageUrl(path) {
  if (typeof path !== 'string' || !/^\/images\/[\w./-]+$/.test(path) || path.includes('..')) {
    return null;
  }

  const favicon = document.querySelector('link[rel="icon"]');
  if (!favicon) {
    return null;
  }

  return new URL(path.slice('/images/'.length), new URL('.', favicon.href)).href;
}

function productPhotos(product) {
  const candidates = Array.isArray(product.images) && product.images.length
    ? product.images
    : product.image ? [product.image] : [];

  return candidates.map((image) => {
    const source = typeof image === 'string' ? image : image?.src;
    const url = imageUrl(source);
    const alt = typeof image === 'object' ? image?.alt : '';

    return url ? { url, alt: alt || product.name } : null;
  }).filter(Boolean);
}

/** Product illustrations are intentional fallbacks, not actual CNC renders. */
function productArt(product, { eager = false, photoIndex = 0 } = {}) {
  const image = productPhotos(product)[photoIndex];

  if (image) {
    return `
      <div class="product-art ${escapeHtml(product.color)} product-art--photo">
        <img
          src="${escapeHtml(image.url)}"
          alt="${escapeHtml(image.alt)}"
          loading="${eager ? 'eager' : 'lazy'}"
          decoding="async"
          fetchpriority="${eager ? 'high' : 'auto'}"
          data-product-image
          data-product-id="${escapeHtml(product.id)}"
          width="720"
          height="720"
        >
      </div>
    `;
  }

  const concepts = {
    board: `
      <div class="product-board">
        <div class="product-slots"></div>
        <span class="product-shelf"></span>
        <span class="product-sticky">W✳B</span>
      </div>
    `,
    shelf: '<div class="object-shelf"><span></span><i></i><i></i></div>',
    holders: '<div class="object-holders"><i></i><i></i><i></i></div>',
    stand: '<div class="object-stands"><i></i><i></i></div>',
  };

  return `
    <div
      class="product-art ${escapeHtml(product.color)}"
      role="img"
      aria-label="تصویرسازی مفهومی؛ هندسه واقعی قطعه نیست"
    >
      ${concepts[product.art] || concepts.board}
      <span class="concept-label">CONCEPT ART ✳</span>
    </div>
  `;
}

/** Cards carry only photo, title, price, and useful actions. */
function productCard(product) {
  const favorite = getFavorites().includes(product.id);
  const url = `product.html?slug=${encodeURIComponent(product.slug || product.id)}`;
  const name = escapeHtml(product.name);
  const id = escapeHtml(product.id);

  return `
    <article class="product-card">
      <div class="product-visual">
        <a href="${url}" aria-label="مشاهده جزئیات ${name}">
          ${productArt(product)}
        </a>
        <button
          class="favorite-toggle ${favorite ? 'is-favorite' : ''}"
          type="button"
          data-favorite="${id}"
          aria-label="${favorite ? 'حذف از' : 'افزودن به'} علاقه‌مندی‌ها"
          aria-pressed="${favorite}"
        >${favorite ? '♥' : '♡'}</button>
      </div>
      <div class="product-card__details">
        <h3><a href="${url}">${name}</a></h3>
        <strong class="product-card__price">${priceText(product)}</strong>
      </div>
      <div class="product-actions">
        <a class="outline-button" href="${url}">مشاهده جزئیات ↗</a>
        <button
          class="mini-add"
          type="button"
          data-add="${id}"
          aria-label="افزودن ${name} به سبد انتخاب‌ها"
        >+</button>
      </div>
    </article>
  `;
}

function renderProductGrid(element, products) {
  if (!element) {
    return;
  }

  element.innerHTML = products.length
    ? products.map(productCard).join('')
    : '<p class="empty-state">محصولی با این مشخصات پیدا نشد.</p>';
}

  __wbModules['src/components/product.js'] = { imageUrl, productPhotos, productArt, productCard, renderProductGrid };
})();

// Module: src/features/storefront.js
(function () {
  "use strict";
  const { select, selectAll, escapeHtml, notify } = __wbModules['src/lib/dom.js'];
  const { faNumber, priceText, hasConfirmedPrice } = __wbModules['src/lib/format.js'];
  const { listProducts, getProduct } = __wbModules['src/services/catalog.js'];
  const { cartEntries, cartCount, cartTotal, changeCartQuantity, removeCartItem } = __wbModules['src/services/cart.js'];
  const { getFavorites, toggleFavorite } = __wbModules['src/services/favorites.js'];
  const { productArt, renderProductGrid, productPhotos } = __wbModules['src/components/product.js'];







function updateNavigationCounts() {
  selectAll('[data-cart-count]').forEach((node) => {
    node.textContent = faNumber(cartCount());
  });

  selectAll('[data-favorites-count]').forEach((node) => {
    node.textContent = faNumber(getFavorites().length);
  });
}

function updateAmountLabels() {
  const { amount, pricesComplete } = cartTotal();
  const label = pricesComplete && cartCount() > 0
    ? `${faNumber(amount)} تومان`
    : 'پس از تعیین همه قیمت‌ها';

  selectAll('[data-cart-total]').forEach((node) => {
    node.textContent = label;
  });
}

function setupNavigation() {
  const menu = select('#mobileNav');
  const trigger = select('[data-menu-button]');

  if (!menu || !trigger) {
    return;
  }

  const header = select('.site-header');

  function updateMenuPosition() {
    if (!header) {
      return;
    }

    const headerBottom = header.getBoundingClientRect().bottom;
    menu.style.setProperty('--mobile-menu-top', `${Math.round(headerBottom + 8)}px`);
  }

  function setOpen(open) {
    menu.classList.toggle('open', open);
    trigger.setAttribute('aria-expanded', String(open));
    trigger.textContent = open ? '×' : '☰';

    if (open) {
      updateMenuPosition();
    }
  }

  window.addEventListener('scroll', () => {
    if (menu.classList.contains('open')) {
      updateMenuPosition();
    }
  }, { passive: true });

  window.addEventListener('resize', updateMenuPosition);

  trigger.addEventListener('click', () => {
    setOpen(!menu.classList.contains('open'));
  });

  selectAll('a', menu).forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setOpen(false);
    }
  });

  document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !trigger.contains(event.target)) {
      setOpen(false);
    }
  });
}

function setupHome() {
  const grid = select('[data-product-grid][data-limit]');

  if (grid) {
    renderProductGrid(grid, listProducts().slice(0, Number(grid.dataset.limit) || 4));
  }
}

function setupShop() {
  const grid = select('#productGrid');

  if (!grid || document.body.dataset.page !== 'shop.html') {
    return;
  }

  const allowedCategories = new Set(['all', 'panels', 'accessories', 'kits']);
  const categoryParam = new URLSearchParams(window.location.search).get('category');
  const searchInput = select('#productSearch');
  const sortInput = select('#sortProducts');
  const availabilityInput = select('#availabilityFilter');
  const moreButton = select('#loadMoreProducts');
  const resultCount = select('#resultCount');

  let category = allowedCategories.has(categoryParam) ? categoryParam : 'all';
  let visibleCount = 6;
  let matchingProducts = [];

  function renderResults() {
    renderProductGrid(grid, matchingProducts.slice(0, visibleCount));

    if (resultCount) {
      resultCount.textContent = `${faNumber(Math.min(visibleCount, matchingProducts.length))} از ${faNumber(matchingProducts.length)} محصول`;
    }

    if (moreButton) {
      moreButton.hidden = matchingProducts.length <= visibleCount;
    }
  }

  function applyFilters() {
    const query = (searchInput?.value || '').trim().toLocaleLowerCase('fa');
    const availability = availabilityInput?.value || 'all';
    const sort = sortInput?.value || 'default';

    matchingProducts = listProducts().filter((product) => {
      const matchesCategory = category === 'all' || product.category === category;
      const matchesQuery = `${product.name} ${product.summary} ${product.sku}`
        .toLocaleLowerCase('fa').includes(query);
      const matchesAvailability = availability !== 'available'
        || (Number.isInteger(product.stock) && product.stock > 0);

      return matchesCategory && matchesQuery && matchesAvailability;
    });

    if (sort === 'name') {
      matchingProducts.sort((a, b) => a.name.localeCompare(b.name, 'fa'));
    } else if (sort === 'price-asc' || sort === 'price-desc') {
      const multiplier = sort === 'price-asc' ? 1 : -1;
      matchingProducts.sort((a, b) => {
        const aPriced = hasConfirmedPrice(a);
        const bPriced = hasConfirmedPrice(b);

        if (aPriced !== bPriced) {
          return aPriced ? -1 : 1;
        }

        return aPriced && bPriced ? (a.price - b.price) * multiplier : 0;
      });
    }

    visibleCount = 6;
    renderResults();

    selectAll('[data-filter]').forEach((button) => {
      const active = button.dataset.filter === category;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }

  selectAll('[data-filter]').forEach((button) => {
    button.addEventListener('click', () => {
      category = button.dataset.filter;
      const url = category === 'all' ? 'shop.html' : `shop.html?category=${category}`;
      window.history.replaceState(null, '', url);
      applyFilters();
    });
  });

  searchInput?.addEventListener('input', applyFilters);
  sortInput?.addEventListener('change', applyFilters);
  availabilityInput?.addEventListener('change', applyFilters);
  moreButton?.addEventListener('click', () => {
    visibleCount += 6;
    renderResults();
  });

  applyFilters();
}

function setupProductDetails() {
  const container = select('#productDetail');

  if (!container) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const productKey = params.get('slug') || params.get('id') || 'panel-30';
  const product = getProduct(productKey);

  if (!product) {
    container.innerHTML = `
      <div class="empty-state">
        <h2>این محصول پیدا نشد.</h2>
        <a href="shop.html" class="button button-dark">بازگشت به فروشگاه</a>
      </div>
    `;
    return;
  }

  document.title = `${product.name} | pego`;
  const description = `${product.name}؛ مشاهده تصاویر، مشخصات و اطلاعات محصول در فروشگاه pego.`;
  const descriptionMeta = document.querySelector('meta[name="description"]');
  const ogTitleMeta = document.querySelector('meta[property="og:title"]');
  const ogDescriptionMeta = document.querySelector('meta[property="og:description"]');
  const twitterTitleMeta = document.querySelector('meta[name="twitter:title"]');
  const twitterDescriptionMeta = document.querySelector('meta[name="twitter:description"]');
  if (descriptionMeta) descriptionMeta.content = description;
  if (ogTitleMeta) ogTitleMeta.content = document.title;
  if (ogDescriptionMeta) ogDescriptionMeta.content = description;
  if (twitterTitleMeta) twitterTitleMeta.content = document.title;
  if (twitterDescriptionMeta) twitterDescriptionMeta.content = description;
  const photos = productPhotos(product);
  const isFavorite = getFavorites().includes(product.id);
  const stockLabel = Number.isInteger(product.stock)
    ? (product.stock > 0 ? `${faNumber(product.stock)} عدد` : 'ناموجود')
    : 'هنوز تأیید نشده';

  const thumbnails = photos.length > 1
    ? `<div class="detail-gallery__thumbnails" role="group" aria-label="گالری عکس‌های محصول">
      ${photos.map((photo, index) => `
        <button
          type="button"
          data-photo-index="${index}"
          aria-label="نمایش عکس ${faNumber(index + 1)}"
          aria-pressed="${index === 0}"
          class="detail-gallery__thumbnail ${index === 0 ? 'is-active' : ''}"
        >
          <img src="${escapeHtml(photo.url)}" alt="" loading="lazy" width="88" height="88">
        </button>
      `).join('')}
    </div>`
    : '';

  container.innerHTML = `
    <div class="detail-gallery">
      <div class="detail-art" id="detailMainImage">
        ${productArt(product, { eager: true })}
      </div>
      ${thumbnails}
      <p class="muted small">${photos.length
        ? 'تصاویر در اندازه ثابت و با حفظ تناسب اصلی نمایش داده می‌شوند.'
        : 'تصویر مفهومی است و بر اساس هندسه تأییدشده CNC ساخته نشده.'}</p>
    </div>
    <div class="detail-content">
      <span class="kicker">${escapeHtml(product.categoryName)} / PEGO</span>
      <h2>${escapeHtml(product.name)}</h2>
      <p class="detail-description">${escapeHtml(product.summary)}</p>
      <div class="detail-facts">
        <strong>${priceText(product)}</strong>
        <span>موجودی: ${stockLabel}</span>
      </div>
      <div class="detail-buttons">
        <div class="quantity-control" aria-label="انتخاب تعداد">
          <button type="button" id="qtyMinus" aria-label="کاهش تعداد">−</button>
          <output id="qtyValue" aria-live="polite">۱</output>
          <button type="button" id="qtyPlus" aria-label="افزایش تعداد">+</button>
        </div>
        <button type="button" class="button button-dark" id="detailAdd">
          افزودن به سبد انتخاب‌ها ←
        </button>
        <button
          type="button"
          class="heart-button"
          data-favorite="${escapeHtml(product.id)}"
          aria-label="${isFavorite ? 'حذف از' : 'افزودن به'} علاقه‌مندی‌ها"
          aria-pressed="${isFavorite}"
        >${isFavorite ? '♥' : '♡'}</button>
      </div>
      <p class="muted small">ثبت سفارش و پرداخت واقعی هنوز فعال نیست.</p>
      <div class="detail-accordions">
        <details open>
          <summary>مشخصات فنی</summary>
          <ul class="spec-list">
            ${product.specs.length
              ? product.specs.map((spec) => `<li>${escapeHtml(spec)}</li>`).join('')
              : '<li>اطلاعات فنی این قطعه در انتظار تأیید است.</li>'}
          </ul>
        </details>
        <details>
          <summary>سازگاری و محتویات</summary>
          <p>سازگاری قطعات و ترکیب بسته بر اساس فایل‌های نهایی تولید تأیید خواهد شد.
          برای تصمیم‌گیری درباره نصب و ظرفیت بار، اطلاعات اعلام‌نشده را قطعی فرض نکن.</p>
        </details>
        <details>
          <summary>راهنمای نصب</summary>
          <p>راهنمای نصب دقیق پس از بررسی هندسه قطعات و نحوه اتصال تهیه می‌شود.</p>
        </details>
      </div>
    </div>
  `;

  selectAll('[data-photo-index]', container).forEach((button) => {
    button.addEventListener('click', () => {
      const index = Number(button.dataset.photoIndex);
      select('#detailMainImage').innerHTML = productArt(product, {
        eager: true,
        photoIndex: index,
      });

      selectAll('[data-photo-index]', container).forEach((thumbnail) => {
        const active = thumbnail === button;
        thumbnail.classList.toggle('is-active', active);
        thumbnail.setAttribute('aria-pressed', String(active));
      });
    });
  });

  let quantity = 1;
  const output = select('#qtyValue');

  select('#qtyMinus').addEventListener('click', () => {
    quantity = Math.max(1, quantity - 1);
    output.textContent = faNumber(quantity);
  });

  select('#qtyPlus').addEventListener('click', () => {
    quantity = Math.min(99, quantity + 1);
    output.textContent = faNumber(quantity);
  });

  select('#detailAdd').addEventListener('click', () => {
    addItem(product.id, quantity);
  });

  renderProductGrid(
    select('#relatedGrid'),
    listProducts().filter((item) => item.id !== id && item.category === product.category)
      .concat(listProducts().filter((item) => item.id !== id && item.category !== product.category))
      .slice(0, 3),
  );
}

function renderCart() {
  const container = select('#cartItems');

  if (!container) {
    return;
  }

  const entries = cartEntries();

  if (!entries.length) {
    container.innerHTML = `
      <div class="empty-state">
        <span>☹</span>
        <h2>سبدت هنوز خالیه!</h2>
        <p>از فروشگاه چیزی انتخاب کن.</p>
        <a href="shop.html" class="button button-dark">رفتن به فروشگاه ←</a>
      </div>
    `;
    return;
  }

  container.innerHTML = entries.map(({ product, quantity }) => `
    <div class="cart-row">
      <a href="product.html?id=${encodeURIComponent(product.id)}" class="cart-picture">
        ${productArt(product)}
      </a>
      <div>
        <span class="kicker">${escapeHtml(product.categoryName)}</span>
        <h3><a href="product.html?id=${encodeURIComponent(product.id)}">
          ${escapeHtml(product.name)}
        </a></h3>
        <p class="muted small">${priceText(product)}</p>
        <div class="quantity-control">
          <button type="button" data-qty="-1" data-id="${escapeHtml(product.id)}"
            aria-label="کاهش تعداد">−</button>
          <output>${faNumber(quantity)}</output>
          <button type="button" data-qty="1" data-id="${escapeHtml(product.id)}"
            aria-label="افزایش تعداد">+</button>
        </div>
      </div>
      <button type="button" class="remove-button"
        data-remove="${escapeHtml(product.id)}">حذف ×</button>
    </div>
  `).join('');

  updateAmountLabels();
}

function renderCheckout() {
  const container = select('#checkoutItems');

  if (!container) {
    return;
  }

  const entries = cartEntries();
  container.innerHTML = entries.length
    ? entries.map(({ product, quantity }) => `
      <div class="summary-line">
        <span>${escapeHtml(product.name)} × ${faNumber(quantity)}</span>
        <b>${priceText(product)}</b>
      </div>
    `).join('')
    : '<p class="muted">سبد خالی است. <a href="shop.html">فروشگاه</a></p>';

  updateAmountLabels();
}

function renderFavorites() {
  const container = select('#favoritesGrid');

  if (!container) {
    return;
  }

  const products = getFavorites().map(getProduct).filter(Boolean);
  renderProductGrid(container, products);

  if (select('#favoritesEmpty')) {
    select('#favoritesEmpty').hidden = products.length > 0;
  }
}

function addItem(id, quantity = 1) {
  const product = getProduct(id);

  if (!product) {
    return;
  }

  const saved = changeCartQuantity(id, quantity);
  notify(saved ? `${product.name} به سبد انتخاب‌ها اضافه شد` : 'ذخیره‌سازی مرورگر در دسترس نیست');
  refreshCartViews();
}

function refreshCartViews() {
  updateNavigationCounts();
  renderCart();
  renderCheckout();
  updateAmountLabels();
}

function setupActions() {
  document.addEventListener('click', (event) => {
    const button = event.target.closest('button');

    if (!button) {
      return;
    }

    if (button.dataset.add) {
      addItem(button.dataset.add);
      return;
    }

    if (button.dataset.favorite) {
      const added = toggleFavorite(button.dataset.favorite);
      const saved = getFavorites();

      selectAll('[data-favorite]').forEach((favoriteButton) => {
        const active = saved.includes(favoriteButton.dataset.favorite);
        favoriteButton.classList.toggle('is-favorite', active);
        favoriteButton.textContent = active ? '♥' : '♡';
        favoriteButton.setAttribute('aria-pressed', String(active));
        favoriteButton.setAttribute('aria-label', active ? 'حذف از علاقه‌مندی‌ها' : 'افزودن به علاقه‌مندی‌ها');
      });

      updateNavigationCounts();
      renderFavorites();
      notify(added ? 'به علاقه‌مندی‌ها اضافه شد ♥' : 'از علاقه‌مندی‌ها حذف شد');
      return;
    }

    if (button.dataset.qty) {
      changeCartQuantity(button.dataset.id, Number(button.dataset.qty));
      refreshCartViews();
      return;
    }

    if (button.dataset.remove) {
      removeCartItem(button.dataset.remove);
      refreshCartViews();
      notify('کالا از سبد انتخاب‌ها حذف شد');
    }
  });
}

function setupDemoForms() {
  const forms = [
    ['contactForm', 'contactFeedback', 'فرم بررسی شد اما هیچ پیامی ارسال نشده است.'],
    ['checkoutForm', 'checkoutFeedback', 'فرم معتبر است اما هیچ سفارشی ثبت یا پرداخت نشده است.'],
  ];

  for (const [formId, feedbackId, message] of forms) {
    const form = select(`#${formId}`);

    form?.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!form.reportValidity()) {
        return;
      }

      const feedback = select(`#${feedbackId}`);
      if (feedback) {
        feedback.textContent = message;
      }

      notify('این بخش فعلاً نمایشی است');
    });
  }
}

function setupImageFallbacks() {
  // Missing user-supplied photos must never become broken-image icons.
  document.addEventListener('error', (event) => {
    const image = event.target;
    if (!(image instanceof HTMLImageElement) || !image.hasAttribute('data-product-image')) {
      return;
    }

    const product = getProduct(image.dataset.productId);
    const frame = image.closest('.product-art');
    if (!product || !frame) {
      return;
    }

    const replacement = document.createElement('div');
    replacement.innerHTML = productArt({ ...product, image: null, images: [] });
    frame.replaceWith(replacement.firstElementChild);
  }, true);
}

function initializeStorefront() {
  setupImageFallbacks();
  setupNavigation();
  setupActions();
  setupHome();
  setupShop();
  setupProductDetails();
  setupDemoForms();
  renderFavorites();
  refreshCartViews();

  window.addEventListener('storage', () => {
    // Keep multiple tabs synchronized; cross-tab changes are browser-local only.
    window.location.reload();
  });
}

  __wbModules['src/features/storefront.js'] = { initializeStorefront };
})();



// Module: src/features/content.js
(function () {
  "use strict";
  const { select } = __wbModules['src/lib/dom.js'];
  const { readStorage, storageKeys } = __wbModules['src/lib/storage.js'];



/** Apply only explicitly published local admin content. Text is never treated as HTML. */
function applyLocalContent() {
  const items = readStorage(storageKeys.content, []);

  if (!Array.isArray(items)) {
    return;
  }

  const published = items.filter((item) => item?.status === 'نمایش محلی');
  const headline = published.find((item) => item.id === 'hero-title');

  if (!headline?.body || typeof headline.body !== 'string') {
    return;
  }

  const title = select('.hero-slide--coral h1');
  if (!title) {
    return;
  }

  // Retain the editorial two-line treatment when published from admin.
  const parts = headline.body.split(/،|\n/).map((part) => part.trim()).filter(Boolean);
  const emphasized = document.createElement('em');
  emphasized.textContent = parts.slice(1).join('، ') || parts[0];
  title.replaceChildren();

  if (parts.length > 1) {
    title.append(document.createTextNode(parts[0] + '،'));
    title.append(document.createElement('br'));
  }

  title.append(emphasized);
}

  __wbModules['src/features/content.js'] = { applyLocalContent };
})();

// Module: src/features/prefetch.js
(function () {
  "use strict";
/**
 * Prefetch only after explicit navigation intent; never speculate on mobile
 * connections with reduced-data preferences, and never prefetch admin/auth.
 */
function enableIntentPrefetch() {
  // Speculative file:// document requests are unreliable in offline previews.
  if (window.location.protocol === 'file:') {
    return;
  }
  const connection = navigator.connection;

  if (connection?.saveData || /(^|-)2g/.test(connection?.effectiveType || '')) {
    return;
  }

  const prefetched = new Set();
  const allowed = new Set(['shop.html', 'product.html', 'categories.html', 'cart.html']);

  document.addEventListener('pointerover', (event) => {
    const link = event.target.closest('a[href]');
    if (!link) {
      return;
    }

    const target = new URL(link.href, window.location.href);
    if (target.origin !== window.location.origin) {
      return;
    }

    const page = target.pathname.split('/').at(-1);
    if (!allowed.has(page) || prefetched.has(target.pathname)) {
      return;
    }

    // No more than two speculative document requests in one page visit.
    if (prefetched.size >= 2) {
      return;
    }

    const preload = document.createElement('link');
    preload.rel = 'prefetch';
    preload.href = target.pathname + target.search;
    preload.as = 'document';
    document.head.append(preload);
    prefetched.add(target.pathname);
  }, { passive: true });
}

  __wbModules['src/features/prefetch.js'] = { enableIntentPrefetch };
})();

// Module: src/features/hero-slider.js
(function () {
  "use strict";
/**
 * Accessible home-banner carousel for pego.
 *
 * The first slide is visible in HTML without JavaScript. Enhanced behavior
 * includes timed changes, navigation dots, buttons, pause, and touch swipes.
 * The timer is suspended whenever auto-rotation would be distracting.
 */

const SLIDE_INTERVAL_MS = 5000;
const SWIPE_THRESHOLD_PX = 45;

function initializeHeroSlider() {
  const carousel = document.querySelector('[data-hero-carousel]');

  if (!carousel) {
    return;
  }

  const viewport = carousel.querySelector('.hero-carousel__viewport');
  const slides = Array.from(carousel.querySelectorAll('[data-hero-slide]'));
  const dots = Array.from(carousel.querySelectorAll('[data-hero-dot]'));
  const nextButton = carousel.querySelector('[data-hero-next]');
  const previousButton = carousel.querySelector('[data-hero-prev]');
  const pauseButton = carousel.querySelector('[data-hero-pause]');
  const counter = carousel.querySelector('[data-hero-counter]');
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (!viewport || slides.length < 2 || dots.length !== slides.length) {
    return;
  }

  let activeIndex = 0;
  let manuallyPaused = false;
  let pointerStartX = null;
  let intervalId = null;

  function canAutoplay() {
    return !manuallyPaused
      && !motionQuery.matches
      && !document.hidden
      && !carousel.matches(':hover')
      && !carousel.contains(document.activeElement);
  }

  function stopTimer() {
    if (intervalId !== null) {
      window.clearInterval(intervalId);
      intervalId = null;
    }
  }

  function formatCount(index) {
    return String(index + 1).padStart(2, '0').replace(/\d/g, (digit) => '۰۱۲۳۴۵۶۷۸۹'[digit]);
  }

  function showSlide(nextIndex) {
    activeIndex = (nextIndex + slides.length) % slides.length;

    slides.forEach((slide, index) => {
      const active = index === activeIndex;
      slide.hidden = !active;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));
    });

    dots.forEach((dot, index) => {
      const active = index === activeIndex;
      dot.classList.toggle('is-active', active);

      if (active) {
        dot.setAttribute('aria-current', 'true');
      } else {
        dot.removeAttribute('aria-current');
      }
    });

    if (counter) {
      counter.textContent = `${formatCount(activeIndex)} / ${formatCount(slides.length - 1)}`;
    }
  }

  function startTimer() {
    stopTimer();

    if (canAutoplay()) {
      intervalId = window.setInterval(() => {
        if (canAutoplay()) {
          showSlide(activeIndex + 1);
        } else {
          stopTimer();
        }
      }, SLIDE_INTERVAL_MS);
    }
  }

  function navigate(delta) {
    showSlide(activeIndex + delta);
    startTimer();
  }

  nextButton?.addEventListener('click', () => navigate(1));
  previousButton?.addEventListener('click', () => navigate(-1));

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
      startTimer();
    });
  });

  pauseButton?.addEventListener('click', () => {
    manuallyPaused = !manuallyPaused;
    pauseButton.setAttribute('aria-pressed', String(manuallyPaused));
    pauseButton.setAttribute(
      'aria-label',
      manuallyPaused ? 'از سرگیری پخش خودکار' : 'توقف پخش خودکار',
    );
    pauseButton.textContent = manuallyPaused ? '▶' : 'Ⅱ';
    startTimer();
  });

  carousel.addEventListener('mouseenter', stopTimer);
  carousel.addEventListener('mouseleave', startTimer);
  carousel.addEventListener('focusin', stopTimer);
  carousel.addEventListener('focusout', () => {
    // The focusout fires before activeElement is updated. A microtask sees
    // the new focus target and doesn't restart the timer mid-interaction.
    queueMicrotask(startTimer);
  });

  viewport.addEventListener('touchstart', (event) => {
    pointerStartX = event.touches[0]?.clientX ?? null;
  }, { passive: true });

  viewport.addEventListener('touchend', (event) => {
    if (pointerStartX === null) {
      return;
    }

    const endX = event.changedTouches[0]?.clientX ?? pointerStartX;
    const distance = endX - pointerStartX;
    pointerStartX = null;

    if (Math.abs(distance) >= SWIPE_THRESHOLD_PX) {
      navigate(distance > 0 ? 1 : -1);
    }
  }, { passive: true });

  document.addEventListener('visibilitychange', startTimer);
  motionQuery.addEventListener?.('change', startTimer);

  showSlide(0);
  startTimer();
}

  __wbModules['src/features/hero-slider.js'] = { initializeHeroSlider };
})();

// Module: src/main.js
(function () {
  "use strict";
  const { initializeStorefront } = __wbModules['src/features/storefront.js'];
  const { applyLocalContent } = __wbModules['src/features/content.js'];
  const { enableIntentPrefetch } = __wbModules['src/features/prefetch.js'];
  const { initializeHeroSlider } = __wbModules['src/features/hero-slider.js'];





initializeStorefront();
applyLocalContent();
enableIntentPrefetch();

initializeHeroSlider();

  __wbModules['src/main.js'] = {  };
})();

})();
