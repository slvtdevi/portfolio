/* ==========================================================================
   devi's mart — main.js
   Render otomatis: kanopi, navbar (NavPill), checkout + struk belanja,
   rak Table of Contents, halaman detail project, dan "you might also like".
   ========================================================================== */

/* — Kontak (ubah di sini, otomatis berlaku di semua halaman) — */
const CONTACT = {
  email: "silavati.devi@binus.ac.id",
  instagram: "slvtdevi",
  linkedinName: "Silavati Devi",
  // TODO: ganti dengan URL profil LinkedIn yang sebenarnya
  linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=Silavati%20Devi",
};

const $ = (sel, root = document) => root.querySelector(sel);
const esc = (s = "") => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
/* singkatan yang harus tetap kapital walau seluruh teks lowercase */
const keepCase = (html) => html.replace(/FM\b/g, '<span class="keep-case">FM</span>');
const page = () => document.body.dataset.page || "";

/* ------------------------------------------------------------------------
   Kanopi
   ------------------------------------------------------------------------ */
function renderAwning() {
  document.querySelectorAll("[data-awning]").forEach((el) => {
    el.classList.add("awning");
    el.setAttribute("aria-hidden", "true");
    /* 32 tile (mobile: 16); --i dipakai untuk delay gelombang angin */
    el.innerHTML = Array.from({ length: 32 }, (_, i) => `<span style="--i:${i}"></span>`).join("");

    /* Hover → kanopi "tertiup angin": satu hembusan bergelombang dari arah kursor.
       Hembusan baru hanya mulai setelah yang sebelumnya selesai, jadi gerakannya halus. */
    let busy = false;
    el.addEventListener("pointerenter", (e) => {
      if (busy) return;
      busy = true;
      const fromRight = e.clientX > window.innerWidth / 2;
      el.classList.toggle("is-wind-left", fromRight);
      el.classList.add("is-windy");
      setTimeout(() => { el.classList.remove("is-windy"); busy = false; }, 1900);
    });
  });
}

/* ------------------------------------------------------------------------
   NavPill helper
   ------------------------------------------------------------------------ */
function navPill({ label, href, dark = false, current = false, extra = "" }) {
  return `<a class="nav-pill${dark ? " nav-pill--dark" : ""}" href="${href}"${current ? ' aria-current="page"' : ""} ${extra}>${label}</a>`;
}

/* ------------------------------------------------------------------------
   Rak bawah Home Cover — tiap item SVG terpisah, pop-up saat di-hover.
   Koordinat = posisi item di frame Figma "Home Cover" (1264 lebar);
   baris rak dimulai di y 516.6. Urutan = urutan layer Figma (bawah → atas).
   ------------------------------------------------------------------------ */
const SHELF_ITEMS = [
  ["chips",76.7,516.84,64.94,97.41], ["chips-light",297.91,542.19,46.63,69.95], ["juice",118.35,536.9,45.83,76.38],
  ["lolli",224.42,539.21,36.74,71.81], ["cereal",261.06,546.92,44.92,67.38], ["citrus",-7.77,565.44,43.51,50.2],
  ["citrus",153.45,566.33,41.03,47.35], ["candy",35.82,589.35,59.19,24.92], ["soup",182.8,560,49.78,113.05],
  ["tuna",338.31,575.04,63.68,39.48], ["chips",428.15,515.47,64.94,97.41], ["chips-light",649.36,540.82,46.63,69.95],
  ["juice",469.8,535.53,45.83,76.38], ["lolli",575.87,537.84,36.74,71.81], ["cereal",612.51,545.56,44.92,67.38],
  ["citrus",504.9,564.96,41.03,47.35], ["candy",387.27,587.98,59.19,24.92], ["soup",534.99,560,49.78,113.05],
  ["tuna",689.76,573.67,63.68,39.48], ["citrus-orange",214.75,578.87,32.12,37.07], ["cereal-pink",158.71,564.31,34.49,51.74],
  ["cereal-purple",379.48,565.4,34.49,51.74], ["chips-yellow",237.44,568.2,57.86,87.27], ["juice-orange",440.21,550.19,40.13,66.88],
  ["juice-pink",571.84,572.05,26.79,44.65], ["chips",696.27,517.95,64.01,96.02], ["chips-light",914.34,542.94,45.97,68.95],
  ["juice",737.33,537.72,45.18,75.3], ["lolli",841.89,540,36.22,70.79], ["cereal",878.01,547.61,44.28,66.42],
  ["citrus",771.93,566.73,40.45,46.67], ["candy",655.96,589.43,58.34,24.57], ["soup",801.59,561,49.07,111.44],
  ["tuna",954.16,575.32,62.78,38.92], ["chips",1042.73,516.6,64.01,96.02], ["chips-light",1260.8,541.59,45.97,68.95],
  ["juice",1083.79,536.37,45.18,75.3], ["lolli",1188.35,538.65,36.22,70.79], ["cereal",1224.47,546.26,44.28,66.42],
  ["citrus",1118.39,565.38,40.45,46.67], ["candy",1002.43,588.08,58.34,24.57], ["soup",1148.05,559,49.07,111.44],
  ["citrus-orange",832.35,579.1,31.63,36.49], ["cereal-pink",777.11,564.75,33.96,50.93], ["cereal-purple",994.75,565.83,33.96,50.93],
  ["chips-yellow",854.73,568.58,56.96,85.91], ["juice-orange",1054.62,550.83,39.56,65.93], ["juice-pink",1184.38,572.37,26.37,43.95],
];
const SHELF_TOP = 516.6;

function renderHomeShelf() {
  const host = $("[data-home-shelf]");
  if (!host) return;
  const items = SHELF_ITEMS.map(([t, x, y, w, h], i) =>
    `<span class="shelf-item shelf-item--${t.split("-")[0]}" style="left:${x}px;top:${(y - SHELF_TOP).toFixed(2)}px;width:${w}px;height:${h}px;--d:${(i % 7) * 0.03}s">` +
    `<img src="assets/home/shelf/${t}.svg" alt="" draggable="false"></span>`).join("");
  /* 3 salinan berdampingan supaya rak tetap penuh di layar yang sangat lebar */
  host.innerHTML = `<div class="home-shelf__track">${[-1, 0, 1].map((o) =>
    `<div class="home-shelf__copy" style="left:${o * 1264}px">${items}</div>`).join("")}</div>`;
}

/* ------------------------------------------------------------------------
   Navbar — Home · Table of Contents · Contact Me
   ------------------------------------------------------------------------ */
function renderNav() {
  const host = $("[data-nav]");
  if (!host) return;
  const p = page();
  const items = [
    { label: "home", href: "index.html", current: p === "home" },
    { label: "table of contents", href: "contents.html", current: p === "contents" },
  ];
  if (p === "contents") items.push({ label: "about", href: "about.html" });
  items.push({ label: "contact me", href: "#checkout", dark: true });

  const sign = p === "contents"
    ? `<img class="open-sign" src="assets/home/open-sign.png" alt="Papan OPEN — toko sedang buka" width="167" height="136">`
    : "";

  host.innerHTML = `
    <div class="container">
      ${sign}
      <nav class="site-nav" aria-label="Navigasi utama">
        ${items.map(navPill).join("")}
      </nav>
    </div>`;
}

/* ------------------------------------------------------------------------
   Checkout + struk belanja (footer)
   ------------------------------------------------------------------------ */
function barcode() {
  const widths = [3,1,4,2,1,3,2,1,4,1,2,3,1,2,4,1,3,1,2,1,3,4,1,2,1,3,2,4,1,2,3,1,4,2,1,3,1,2,4,1,3,2,1,2,3,1,4,1,2,3,1,2];
  return widths.map((w) => `<i style="width:${w}px"></i>`).join("");
}

function renderCheckout() {
  const host = $("[data-checkout]");
  if (!host) return;
  host.innerHTML = `
    <section class="checkout container" id="checkout" aria-labelledby="checkout-title">
      <div class="checkout__copy">
        <h2 class="checkout__title" id="checkout-title">checkout</h2>
        <p class="checkout__text">found something you like on the shelves? i’m open for design internships &amp; creative collabs! let's build something cool together</p>
        ${navPill({ label: "Email me", href: `mailto:${CONTACT.email}`, dark: true })}
      </div>
      <div class="receipt-wrap">
        <div class="receipt" role="group" aria-label="Struk belanja devi's mart">
          <div class="receipt__head">
            <p class="receipt__brand">devi's mart</p>
            <p class="receipt__thanks">thank you for stopping by</p>
          </div>
          <div class="receipt__lines">
            <div class="receipt__row"><span>Email</span><a href="mailto:${CONTACT.email}">${CONTACT.email}</a></div>
            <div class="receipt__row"><span>Instagram</span><a href="https://instagram.com/${CONTACT.instagram}" target="_blank" rel="noopener">@${CONTACT.instagram}</a></div>
            <div class="receipt__row"><span>LinkedIn</span><a href="${CONTACT.linkedinUrl}" target="_blank" rel="noopener">${CONTACT.linkedinName}</a></div>
          </div>
          <div class="receipt__total"><span>TOTAL</span><span>1 new brand</span></div>
          <div class="barcode" aria-hidden="true">${barcode()}</div>
        </div>
      </div>
    </section>`;
}

/* ------------------------------------------------------------------------
   F&B product card
   ------------------------------------------------------------------------ */
function productCard(p) {
  return `
    <a class="product" href="project.html?id=${encodeURIComponent(p.id)}" aria-label="${esc(p.name)} — ${esc(p.category)}">
      <div class="product__art">
        <img class="is-default" src="${p.product.default}" alt="">
        <img class="is-hover" src="${p.product.hover}" alt="">
      </div>
      <div class="product__ledge"></div>
      <div class="price-tag">
        <span class="price-tag__meta">${esc(p.category)}</span>
        <span class="price-tag__name">${keepCase(esc(p.name))}</span>
      </div>
    </a>`;
}

/* ------------------------------------------------------------------------
   Table of Contents — 4 rak kategori
   ------------------------------------------------------------------------ */
function renderContents() {
  const host = $("[data-aisles]");
  if (!host) return;
  host.innerHTML = window.AISLES.map((aisle, i) => {
    const items = window.PROJECTS.filter((p) => p.aisle === aisle.key);
    const count = aisle.count || `${items.length} project${items.length === 1 ? "" : "s"}`;
    return `
      <section class="aisle reveal" id="${aisle.key}" aria-labelledby="aisle-${aisle.key}">
        <header class="aisle__header">
          <h2 class="aisle__title" id="aisle-${aisle.key}"><span class="aisle__num">${i + 1}</span>${esc(aisle.label)}</h2>
          <span class="aisle__count">${esc(count)}</span>
        </header>
        <div class="shelf">
          <div class="shelf__panel"><div class="product-row">${items.map(productCard).join("")}</div></div>
          <div class="shelf__base"></div>
        </div>
      </section>`;
  }).join("");
}

/* ------------------------------------------------------------------------
   Project detail
   ------------------------------------------------------------------------ */
function applyTheme(t) {
  const r = document.documentElement.style;
  const map = { bg: "--bg", awning: "--awning", accent: "--accent", text: "--text", highlight: "--highlight", pill: "--pill",
    tagBg: "--tag-bg", tagMeta: "--tag-meta-c", tagName: "--tag-name-c" };
  Object.entries(map).forEach(([k, v]) => t[k] && r.setProperty(v, t[k]));
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", t.awning);
}

function factsCard(f) {
  const rows = f.rows.map(([k, v], i) =>
    `<div class="facts__row ${i === f.rows.length - 1 ? "facts__row--last" : "facts__row--line"}"><b>${esc(k)}</b><span>${esc(v)}</span></div>`).join("");
  return `
    <aside class="facts" aria-label="${esc(f.title)}">
      <h2 class="facts__title">${esc(f.title)}</h2>
      <div class="facts__row facts__row--plain"><span>serving size</span><b>${esc(f.serving)}</b></div>
      <div class="facts__row facts__row--bar"><span>made in</span><b>${esc(f.madeIn)}</b></div>
      <div class="facts__row facts__row--label facts__row--line">${esc(f.per)}</div>
      ${rows}
      <p class="facts__ingredients"><b>ingredients:</b> ${esc(f.ingredients)}<br><b>made by</b> devi <b>tools:</b> ${esc(f.tools)}</p>
    </aside>`;
}

function heroBlock(p) {
  const h = p.hero;
  const visual = h.title
    ? `<h1 class="p-hero__title">${esc(h.title)}</h1>`
    : `<div class="p-hero__visual${h.tall ? " p-hero__visual--tall" : ""}">
         <h1 class="sr-only">${esc(p.name)}</h1>
         <img src="${h.img}" alt="${esc(h.alt)}">
         ${h.badge ? `<span class="new-badge">${esc(h.badge)}</span>` : ""}
       </div>`;
  return `
    <section class="p-hero${h.layout === "reverse" ? " p-hero--reverse" : ""}">
      <div class="p-hero__copy">
        ${visual}
        <p class="p-hero__intro">${h.intro}</p>
      </div>
      ${factsCard(p.facts)}
    </section>`;
}

const secHead = (title, lede) => !title ? "" : lede
  ? `<div class="p-sec__head"><h2 class="h-section">${esc(title)}</h2><p>${esc(lede)}</p></div>`
  : `<h2 class="h-section">${esc(title)}</h2>`;

const BLOCKS = {
  why: (b) => `
    <section class="p-why reveal">
      <h2 class="h-section">why</h2>
      <div class="p-why__body">
        ${b.paragraphs.map((t) => `<p>${esc(t)}</p>`).join("")}
        <p class="highlight">${esc(b.highlight)}</p>
      </div>
    </section>`,

  concepts: (b) => `
    <section class="p-sec reveal">
      ${secHead(b.title, b.lede)}
      <div class="p-cards">
        ${b.items.map((c) => `
          <article class="p-card">
            <h3>${esc(c.title)}</h3>
            <img src="${c.img}" alt="${esc(c.title)}" loading="lazy">
            <p>${esc(c.text)}</p>
          </article>`).join("")}
      </div>
    </section>`,

  figures: (b) => `
    <section class="p-sec reveal">
      ${secHead(b.title, b.lede)}
      <div class="p-figures">
        ${b.items.map((f) => `
          <figure class="p-figure">
            <div class="p-figure__img"><img src="${f.img}" alt="${esc(f.caption)}" loading="lazy"></div>
            <figcaption>${esc(f.caption)}</figcaption>
          </figure>`).join("")}
      </div>
    </section>`,

  feature: (b) => `
    <section class="p-sec reveal">
      ${secHead(b.title, b.lede)}
      <div class="p-feature${b.small ? " p-feature--small" : ""}">
        <img src="${b.img}" alt="" loading="lazy">
        <div><h3>${esc(b.heading)}</h3><p>${b.html}</p></div>
      </div>
    </section>`,

  panel: (b) => `
    <section class="p-sec reveal">
      ${secHead(b.title)}
      <div class="gallery gallery--card">
        <img src="${b.img}" alt="${esc(b.alt)}" loading="lazy">
        <div class="notes">${b.notes.map((n) => `<p>${n}</p>`).join("")}</div>
      </div>
    </section>`,

  kit: (b) => {
    const left = b.specimen
      ? `<div class="specimen" aria-label="Typeface ${esc(b.specimen)}">${[0, 1, 2, 3].map(() => `<span>${esc(b.specimen)}</span>`).join("")}</div>`
      : `<div class="kit__logo"><div class="select-box"><i></i><i></i><i></i><i></i><img src="${b.logo}" alt="Logo final" loading="lazy"></div></div>`;
    const swatches = b.swatches.map((s) => `
      <div class="swatch">
        <div class="swatch__chip" style="background:${s.fill || s.hex}"></div>
        <p class="swatch__label">${esc(s.name)}<span>${esc(s.hex)}</span></p>
      </div>`).join("");
    const type = b.font ? `
      <div class="type-row">
        <div class="type-row__aa"><span style="font-family:${b.font.head};font-weight:${b.font.headWeight}">Aa</span><span style="font-family:${b.font.body};font-weight:400">Aa</span></div>
        <p>${b.font.caption}</p>
      </div>` : "";
    return `
      <section class="p-sec reveal">
        ${secHead(b.title)}
        <div class="kit">${left}<div class="swatches">${swatches}</div>${type}</div>
      </section>`;
  },

  gallery: (b) => {
    const cls = ["gallery", b.cols > 1 ? `gallery--${b.cols}` : "", b.card ? "gallery--card" : ""].join(" ");
    const head = b.head ? `<div class="gallery__head"><h3>${esc(b.head.title)}</h3><span>${esc(b.head.note)}</span></div>` : "";
    return `
      <section class="p-sec reveal">
        ${secHead(b.title)}
        <div class="${cls}">
          ${head}
          ${b.items.map((g) => `<img src="${g.img}" alt="${esc(g.alt)}" loading="lazy"${g.narrow ? ' style="max-width:820px;margin:0 auto"' : ""}>`).join("")}
        </div>
      </section>`;
  },

  website: (b) => `
    <section class="p-sec reveal">
      ${secHead(b.title, b.lede)}
      <figure class="site-preview">
        <div class="site-preview__bar">
          <span class="site-preview__dots" aria-hidden="true"><i></i><i></i><i></i></span>
          <span class="site-preview__url">${esc(b.url.replace(/^https?:\/\//, "").replace(/\/$/, ""))}</span>
          <a class="nav-pill nav-pill--dark site-preview__btn" href="${b.url}" target="_blank" rel="noopener">${esc(b.button || "visit website ↗")}</a>
        </div>
        <div class="site-preview__viewport" data-site-viewport>
          <iframe src="${b.url}" title="${esc(b.frameTitle || "website preview")}" loading="lazy" referrerpolicy="no-referrer"></iframe>
        </div>
      </figure>
    </section>`,

  insights: (b) => `
    <section class="p-sec reveal insights">
      <div class="insights__head">
        <h2 class="h-section">${esc(b.title)}</h2>
        ${b.badge ? `<span class="insights__badge">${esc(b.badge)}</span>` : ""}
      </div>
      <p class="insights__lede">${esc(b.lede)}</p>
      <div class="insights__stats">
        ${b.stats.map((st) => `
          <div class="insights__card">
            <p class="insights__label">${esc(st.label)}</p>
            <p class="insights__value">${esc(st.value)}</p>
            <ul class="insights__rows">${st.rows.map(([k, v]) => `<li>${esc(k)}: <b>${esc(v)}</b></li>`).join("")}</ul>
          </div>`).join("")}
      </div>
      <div class="insights__card insights__breakdown">
        <p class="insights__label">post interactions breakdown</p>
        <div class="insights__chips">
          ${b.breakdown.map(([k, v]) => `<div class="insights__chip"><span>${esc(k)}</span><b>${esc(v)}</b></div>`).join("")}
        </div>
      </div>
      <a class="insights__post" href="${b.post.url}" target="_blank" rel="noopener">
        <img src="${b.post.thumb}" alt="" width="56" height="56" loading="lazy">
        <span class="insights__post-copy"><b>${esc(b.post.title)}</b><span>${esc(b.post.text)}</span></span>
        <span class="insights__post-cta">${esc(b.post.cta)}</span>
      </a>
    </section>`,

  works: (b) => `
    <section class="p-sec reveal">
      ${secHead(b.title)}
      <div class="works works--${b.cols}${b.center ? " works--center" : ""}${b.narrow ? " works--narrow" : ""}">
        ${b.items.map((w) => `
          <article class="work">
            <div class="work__img"><img src="${w.img}" alt="${esc(w.alt)}" loading="lazy"></div>
            <p${w.color ? ` style="color:${w.color}"` : ""}>${w.html}</p>
          </article>`).join("")}
      </div>
    </section>`,
};

/* — Random "You Might Also Like": 3 project selain yang aktif — */
function pickRandom(list, n) {
  const a = list.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.slice(0, n);
}

/* ------------------------------------------------------------------------
   "you might also like": ikon default diwarnai ulang (duotone) mengikuti warna
   tema project — gelap = warna aksen, terang = aksen pucat. Pakai filter SVG
   supaya tetap jalan walau halaman dibuka langsung dari file (file://).
   ------------------------------------------------------------------------ */
function applyThemeTint(hex) {
  const c = hex.replace("#", "");
  const rgb = [0, 2, 4].map((i) => parseInt(c.slice(i, i + 2), 16) / 255);
  /* titik: [luminans input, campuran aksen→putih (0 = aksen penuh)] */
  const stops = [[0, 0], [0.55, 0], [0.72, 0.14], [0.84, 0.3], [0.93, 0.48], [0.985, 0.8], [1, 0.97]];
  const N = 33;
  const table = (ch) => Array.from({ length: N }, (_, i) => {
    const x = i / (N - 1);
    let j = 0; while (j < stops.length - 2 && x > stops[j + 1][0]) j++;
    const [x0, m0] = stops[j], [x1, m1] = stops[j + 1];
    const m = m0 + (m1 - m0) * ((x - x0) / (x1 - x0 || 1));
    return (ch + (1 - ch) * m).toFixed(3);
  }).join(" ");
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "0"); svg.setAttribute("height", "0");
  svg.setAttribute("aria-hidden", "true");
  svg.style.position = "absolute";
  svg.innerHTML = `<filter id="theme-tint" color-interpolation-filters="sRGB">
      <feColorMatrix type="saturate" values="0"/>
      <feComponentTransfer>
        <feFuncR type="table" tableValues="${table(rgb[0])}"/>
        <feFuncG type="table" tableValues="${table(rgb[1])}"/>
        <feFuncB type="table" tableValues="${table(rgb[2])}"/>
      </feComponentTransfer></filter>`;
  document.body.appendChild(svg);
}

function renderRecommendations(currentId) {
  const host = $("[data-more]");
  if (!host) return;
  const picks = pickRandom(window.PROJECTS.filter((p) => p.id !== currentId), 3);
  host.innerHTML = `
    <section class="p-more reveal" aria-labelledby="more-title">
      <h2 class="h-sub" id="more-title">you might also like</h2>
      <div class="shelf shelf--more">
        <div class="shelf__panel"><div class="product-row">${picks.map(productCard).join("")}</div></div>
        <div class="shelf__base"></div>
      </div>
    </section>`;
}

function renderProject() {
  const host = $("[data-project]");
  if (!host) return;
  const id = new URLSearchParams(location.search).get("id");
  const p = window.PROJECTS.find((x) => x.id === id);

  if (!p) {
    host.innerHTML = `
      <section class="not-found">
        <h1 class="h-section">oops, item ini tidak ada di rak</h1>
        <p class="body-lg">mungkin sudah habis terjual. yuk lihat produk lainnya!</p>
        ${navPill({ label: "back to the shelves →", href: "contents.html", dark: true })}
      </section>`;
    renderRecommendations(null);
    return;
  }

  applyTheme(p.theme);
  applyThemeTint(p.theme.accent);
  document.title = `${p.name} — devi's mart`;
  host.innerHTML = heroBlock(p) + p.blocks.map((b) => (BLOCKS[b.type] ? BLOCKS[b.type](b) : "")).join("");
  renderRecommendations(p.id);
}

/* ------------------------------------------------------------------------
   Stiker Home Cover bisa digeser: ditekan → "terkelupas" (terangkat & miring),
   dilepas → "ditempel lagi" (efek tekan memantul). Mouse & sentuh.
   ------------------------------------------------------------------------ */
function initStickers() {
  const stickers = document.querySelectorAll(".hc-sticker");
  if (!stickers.length) return;
  let top = 10;
  stickers.forEach((el) => {
    el.setAttribute("draggable", "false");
    let sx = 0, sy = 0, bx = 0, by = 0, k = 1, dragging = false;
    el.addEventListener("pointerdown", (e) => {
      if (e.button !== undefined && e.button !== 0) return;
      e.preventDefault();
      dragging = true;
      k = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--k")) || 1;
      sx = e.clientX; sy = e.clientY;
      bx = parseFloat(el.dataset.dx || 0); by = parseFloat(el.dataset.dy || 0);
      el.style.zIndex = ++top;
      el.classList.remove("is-sticking");
      el.classList.add("is-peeling");
      document.querySelector("[data-sticker-hint]")?.classList.add("is-done");
      el.setPointerCapture(e.pointerId);
    });
    el.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      const dx = bx + (e.clientX - sx) / k, dy = by + (e.clientY - sy) / k;
      el.dataset.dx = dx; el.dataset.dy = dy;
      el.style.setProperty("--dx", dx + "px");
      el.style.setProperty("--dy", dy + "px");
    });
    const drop = () => {
      if (!dragging) return;
      dragging = false;
      el.classList.remove("is-peeling");
      void el.offsetWidth;               /* restart animasi tempel */
      el.classList.add("is-sticking");
    };
    el.addEventListener("pointerup", drop);
    el.addEventListener("pointercancel", drop);
    el.addEventListener("animationend", () => el.classList.remove("is-sticking"));
  });
}

/* ------------------------------------------------------------------------
   Website preview: iframe dirender selebar layar desktop (1440px) atau mobile
   (390px bila wadahnya sempit), lalu dipaskan ke lebar wadah.
   ------------------------------------------------------------------------ */
function initSitePreviews() {
  document.querySelectorAll("[data-site-viewport]").forEach((vp) => {
    const frame = vp.querySelector("iframe");
    const fitFrame = () => {
      const cw = vp.clientWidth, ch = vp.clientHeight;
      const designW = cw < 600 ? 390 : 1440;
      const k = cw / designW;
      frame.style.width = designW + "px";
      frame.style.height = ch / k + "px";
      frame.style.transform = `scale(${k})`;
    };
    fitFrame();
    if ("ResizeObserver" in window) new ResizeObserver(fitFrame).observe(vp);
    else window.addEventListener("resize", fitFrame);
  });
}

/* ------------------------------------------------------------------------
   Scroll reveal
   ------------------------------------------------------------------------ */
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("is-in")); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
  }, { rootMargin: "0px 0px -8% 0px" });
  els.forEach((e) => io.observe(e));
}

/* ------------------------------------------------------------------------
   Init
   ------------------------------------------------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  renderAwning();
  renderHomeShelf();
  renderProject();     // tema project diterapkan sebelum nav & footer dirender
  renderNav();
  renderContents();
  renderCheckout();
  initSitePreviews();
  initStickers();
  initReveal();
  document.title = document.title.toLowerCase().replace(/fm\b/g, "FM");   /* semua teks lowercase, termasuk judul tab */
});
