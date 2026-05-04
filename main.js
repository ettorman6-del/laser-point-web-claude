@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');

:root {
  --bg: #0f0e0c;
  --bg2: #181614;
  --bg3: #211f1b;
  --gold: #c9943a;
  --gold-light: #e8b55a;
  --gold-dim: #8a6428;
  --text: #f0ece4;
  --text-muted: #9e9580;
  --border: rgba(201,148,58,0.2);
  --radius: 4px;
  --shadow: 0 8px 40px rgba(0,0,0,0.5);
}

* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }

body {
  font-family: 'DM Sans', sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  overflow-x: hidden;
}

/* TYPOGRAPHY */
h1, h2, h3 { font-family: 'Playfair Display', serif; line-height: 1.2; }
a { color: var(--gold); text-decoration: none; transition: color 0.2s; }
a:hover { color: var(--gold-light); }

/* NAVBAR */
nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 5vw;
  height: 70px;
  background: rgba(15,14,12,0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}
.nav-logo {
  display: flex; align-items: center; gap: 12px;
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem; font-weight: 700;
  color: var(--text);
}
.nav-logo span { color: var(--gold); }
.nav-logo svg { width: 32px; height: 32px; }
.nav-links { display: flex; align-items: center; gap: 32px; }
.nav-links a { font-size: 0.9rem; font-weight: 500; color: var(--text-muted); letter-spacing: 0.05em; }
.nav-links a:hover, .nav-links a.active { color: var(--gold); }
.nav-cta {
  padding: 8px 22px;
  border: 1px solid var(--gold);
  border-radius: var(--radius);
  color: var(--gold) !important;
  font-size: 0.85rem !important;
  transition: all 0.2s !important;
}
.nav-cta:hover { background: var(--gold); color: var(--bg) !important; }

/* HERO */
.hero {
  min-height: 100vh;
  display: grid; place-items: center;
  padding: 120px 5vw 80px;
  position: relative;
  overflow: hidden;
}
.hero-bg {
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 80% 60% at 70% 50%, rgba(201,148,58,0.07) 0%, transparent 60%),
    radial-gradient(ellipse 40% 40% at 20% 80%, rgba(201,148,58,0.05) 0%, transparent 50%);
}
.hero-grid {
  position: absolute; inset: 0; opacity: 0.03;
  background-image:
    linear-gradient(var(--gold) 1px, transparent 1px),
    linear-gradient(90deg, var(--gold) 1px, transparent 1px);
  background-size: 60px 60px;
}
.hero-content {
  position: relative; z-index: 1;
  max-width: 700px;
  animation: fadeUp 0.9s ease both;
}
.hero-badge {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 6px 16px;
  border: 1px solid var(--border);
  border-radius: 100px;
  font-size: 0.78rem;
  color: var(--gold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 28px;
  background: rgba(201,148,58,0.05);
}
.hero-badge::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: var(--gold); animation: pulse 2s infinite; }
.hero h1 {
  font-size: clamp(2.8rem, 6vw, 5rem);
  font-weight: 700;
  margin-bottom: 24px;
  color: var(--text);
}
.hero h1 em { font-style: italic; color: var(--gold); }
.hero p {
  font-size: 1.15rem;
  color: var(--text-muted);
  margin-bottom: 44px;
  max-width: 520px;
  font-weight: 300;
}
.hero-actions { display: flex; gap: 16px; flex-wrap: wrap; }
.btn-primary {
  padding: 14px 32px;
  background: var(--gold);
  color: var(--bg);
  border: none; border-radius: var(--radius);
  font-family: 'DM Sans', sans-serif;
  font-weight: 500; font-size: 0.95rem;
  cursor: pointer; transition: all 0.25s;
  letter-spacing: 0.02em;
}
.btn-primary:hover { background: var(--gold-light); transform: translateY(-2px); box-shadow: 0 6px 24px rgba(201,148,58,0.35); }
.btn-secondary {
  padding: 14px 32px;
  background: transparent;
  color: var(--text);
  border: 1px solid rgba(240,236,228,0.2);
  border-radius: var(--radius);
  font-family: 'DM Sans', sans-serif;
  font-weight: 400; font-size: 0.95rem;
  cursor: pointer; transition: all 0.25s;
}
.btn-secondary:hover { border-color: var(--gold); color: var(--gold); }
.hero-stats {
  position: absolute; right: 5vw; bottom: 80px;
  display: flex; gap: 48px;
  animation: fadeUp 0.9s 0.3s ease both;
}
.stat { text-align: center; }
.stat-num { font-family: 'Playfair Display', serif; font-size: 2rem; color: var(--gold); }
.stat-label { font-size: 0.78rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.08em; }

/* SECTIONS */
section { padding: 100px 5vw; }
.section-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--gold);
  margin-bottom: 14px;
}
.section-title {
  font-size: clamp(2rem, 3.5vw, 2.8rem);
  margin-bottom: 16px;
}
.section-sub {
  color: var(--text-muted);
  font-weight: 300;
  max-width: 520px;
  margin-bottom: 56px;
}
.divider {
  width: 48px; height: 2px;
  background: var(--gold);
  margin: 20px 0;
}

/* CATEGORIES */
.categories-section { background: var(--bg2); }
.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
}
.category-card {
  padding: 32px 24px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--bg3);
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}
.category-card::after {
  content: '';
  position: absolute; bottom: 0; left: 0; right: 0; height: 2px;
  background: var(--gold);
  transform: scaleX(0); transform-origin: left;
  transition: transform 0.3s;
}
.category-card:hover { border-color: var(--gold); transform: translateY(-4px); box-shadow: 0 12px 40px rgba(201,148,58,0.1); }
.category-card:hover::after { transform: scaleX(1); }
.cat-icon { font-size: 2.4rem; margin-bottom: 16px; display: block; }
.cat-name { font-family: 'Playfair Display', serif; font-size: 1.1rem; margin-bottom: 6px; }
.cat-desc { font-size: 0.82rem; color: var(--text-muted); line-height: 1.5; }

/* PRODUCTS */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}
.product-card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--bg2);
  overflow: hidden;
  transition: all 0.3s;
  cursor: pointer;
}
.product-card:hover { border-color: var(--gold); transform: translateY(-4px); box-shadow: var(--shadow); }
.product-img {
  aspect-ratio: 4/3;
  background: var(--bg3);
  display: flex; align-items: center; justify-content: center;
  overflow: hidden;
  position: relative;
}
.product-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; }
.product-card:hover .product-img img { transform: scale(1.05); }
.product-img-placeholder {
  font-size: 3rem; opacity: 0.3;
  display: flex; flex-direction: column; align-items: center; gap: 8px;
}
.product-img-placeholder span { font-size: 0.75rem; color: var(--text-muted); font-family: 'DM Sans'; }
.product-badge {
  position: absolute; top: 12px; left: 12px;
  padding: 4px 10px;
  background: var(--gold);
  color: var(--bg);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border-radius: 2px;
}
.product-info { padding: 20px; }
.product-category { font-size: 0.72rem; color: var(--gold); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 6px; }
.product-name { font-family: 'Playfair Display', serif; font-size: 1.1rem; margin-bottom: 8px; }
.product-desc { font-size: 0.83rem; color: var(--text-muted); margin-bottom: 16px; line-height: 1.5; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.product-footer { display: flex; align-items: center; justify-content: space-between; }
.product-price { font-family: 'Playfair Display', serif; font-size: 1.3rem; color: var(--gold); }
.product-tags { display: flex; gap: 6px; flex-wrap: wrap; }
.tag {
  padding: 3px 8px;
  border: 1px solid var(--border);
  border-radius: 100px;
  font-size: 0.68rem;
  color: var(--text-muted);
}

/* FILTER BAR */
.filter-bar {
  display: flex; gap: 10px; flex-wrap: wrap;
  margin-bottom: 40px;
}
.filter-btn {
  padding: 8px 18px;
  border: 1px solid var(--border);
  border-radius: 100px;
  background: transparent;
  color: var(--text-muted);
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s;
}
.filter-btn:hover { border-color: var(--gold); color: var(--gold); }
.filter-btn.active { background: var(--gold); color: var(--bg); border-color: var(--gold); }

/* WHY US */
.why-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 32px; }
.why-card { padding: 8px 0; }
.why-icon { font-size: 2rem; margin-bottom: 16px; }
.why-title { font-family: 'Playfair Display', serif; font-size: 1.1rem; margin-bottom: 8px; }
.why-text { font-size: 0.88rem; color: var(--text-muted); line-height: 1.6; }

/* CONTACT */
.contact-section { background: var(--bg2); }
.contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
.contact-info h2 { margin-bottom: 16px; }
.contact-info p { color: var(--text-muted); margin-bottom: 36px; }
.contact-item { display: flex; align-items: center; gap: 14px; margin-bottom: 20px; }
.contact-item-icon { font-size: 1.4rem; }
.contact-label { font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.08em; }
.contact-value { font-size: 1rem; }
.contact-form { display: flex; flex-direction: column; gap: 16px; }
.form-group { display: flex; flex-direction: column; gap: 8px; }
.form-group label { font-size: 0.82rem; color: var(--text-muted); letter-spacing: 0.05em; }
.form-group input, .form-group textarea, .form-group select {
  padding: 12px 16px;
  background: var(--bg3);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  color: var(--text);
  font-family: 'DM Sans', sans-serif;
  font-size: 0.92rem;
  transition: border-color 0.2s;
}
.form-group input:focus, .form-group textarea:focus, .form-group select:focus {
  outline: none; border-color: var(--gold);
}
.form-group textarea { min-height: 120px; resize: vertical; }

/* FOOTER */
footer {
  padding: 60px 5vw 36px;
  border-top: 1px solid var(--border);
  background: var(--bg);
}
.footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 48px; margin-bottom: 48px; }
.footer-brand p { color: var(--text-muted); font-size: 0.88rem; margin-top: 16px; max-width: 300px; line-height: 1.7; }
.footer-col h4 { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.12em; color: var(--text-muted); margin-bottom: 20px; }
.footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 10px; }
.footer-col a { color: var(--text-muted); font-size: 0.88rem; }
.footer-col a:hover { color: var(--gold); }
.footer-bottom { display: flex; justify-content: space-between; align-items: center; padding-top: 24px; border-top: 1px solid var(--border); }
.footer-bottom p { font-size: 0.8rem; color: var(--text-muted); }

/* MODAL */
.modal-overlay {
  position: fixed; inset: 0; z-index: 200;
  background: rgba(0,0,0,0.8);
  display: flex; align-items: center; justify-content: center;
  padding: 24px;
  opacity: 0; pointer-events: none; transition: opacity 0.3s;
}
.modal-overlay.active { opacity: 1; pointer-events: all; }
.modal {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 8px;
  max-width: 640px; width: 100%;
  max-height: 90vh; overflow-y: auto;
  padding: 40px;
  transform: translateY(24px); transition: transform 0.3s;
}
.modal-overlay.active .modal { transform: translateY(0); }
.modal-header { display: flex; justify-content: space-between; align-items: start; margin-bottom: 24px; }
.modal-close { background: none; border: none; color: var(--text-muted); font-size: 1.5rem; cursor: pointer; line-height: 1; }
.modal-close:hover { color: var(--text); }
.modal-imgs { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 8px; margin-bottom: 24px; }
.modal-imgs img { width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: 4px; cursor: pointer; }
.modal-imgs img.main-img { grid-column: 1 / -1; aspect-ratio: 16/9; }
.modal-price { font-family: 'Playfair Display', serif; font-size: 2rem; color: var(--gold); margin-bottom: 16px; }
.modal-desc { color: var(--text-muted); margin-bottom: 24px; line-height: 1.7; }
.modal-meta { display: flex; gap: 24px; margin-bottom: 28px; }
.meta-item label { font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 4px; }
.meta-item span { font-size: 0.9rem; }

/* TOAST */
.toast {
  position: fixed; bottom: 24px; right: 24px; z-index: 999;
  padding: 14px 24px;
  background: var(--bg3);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  font-size: 0.88rem;
  transform: translateY(80px); opacity: 0;
  transition: all 0.3s;
}
.toast.show { transform: translateY(0); opacity: 1; }
.toast.success { border-color: #4caf50; }
.toast.error { border-color: #f44336; }

/* LOADER */
.loader {
  display: flex; align-items: center; justify-content: center;
  padding: 60px;
}
.loader-ring {
  width: 40px; height: 40px;
  border: 2px solid var(--border);
  border-top-color: var(--gold);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
.empty-state {
  text-align: center; padding: 80px 24px; color: var(--text-muted);
}
.empty-state p { margin-top: 16px; }

/* ANIMATIONS */
@keyframes fadeUp { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }
@keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.4; } }
@keyframes spin { to { transform: rotate(360deg); } }

/* PAGE HEADER */
.page-header {
  padding: 140px 5vw 80px;
  background: var(--bg2);
  border-bottom: 1px solid var(--border);
  position: relative;
  overflow: hidden;
}
.page-header::before {
  content: '';
  position: absolute; top: -50%; right: -10%;
  width: 500px; height: 500px;
  border-radius: 50%;
  background: radial-gradient(ellipse, rgba(201,148,58,0.06) 0%, transparent 70%);
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .hero-stats { display: none; }
  .contact-grid { grid-template-columns: 1fr; gap: 48px; }
  .footer-grid { grid-template-columns: 1fr; }
  .nav-links { display: none; }
  .modal { padding: 24px; }
}
