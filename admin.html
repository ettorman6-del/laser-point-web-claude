<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Admin — Laser Point</title>
  <link rel="stylesheet" href="css/style.css" />
  <link rel="stylesheet" href="css/admin.css" />
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>✦</text></svg>" />
</head>
<body>

<!-- LOGIN SCREEN -->
<div id="loginScreen" class="login-screen">
  <div class="login-card">
    <div class="login-logo">
      <svg viewBox="0 0 32 32" fill="none" style="width:40px;height:40px;">
        <path d="M16 2 L28 9 L28 23 L16 30 L4 23 L4 9 Z" stroke="#c9943a" stroke-width="1.5" fill="none"/>
        <path d="M16 8 L22 12 L22 20 L16 24 L10 20 L10 12 Z" fill="#c9943a" opacity="0.3"/>
        <circle cx="16" cy="16" r="2" fill="#c9943a"/>
      </svg>
      <div>
        <div style="font-family:'Playfair Display',serif;font-size:1.3rem;">Laser <span style="color:var(--gold)">Point</span></div>
        <div style="font-size:0.75rem;color:var(--text-muted);letter-spacing:0.08em;">PANNELLO AMMINISTRATORE</div>
      </div>
    </div>
    <div class="form-group">
      <label>Password</label>
      <input type="password" id="loginPass" placeholder="Inserisci password..." onkeydown="if(event.key==='Enter')doLogin()" />
    </div>
    <button class="btn-primary" onclick="doLogin()" style="width:100%;margin-top:8px;">Accedi ✦</button>
    <div id="loginError" style="color:#f44336;font-size:0.83rem;margin-top:12px;text-align:center;display:none;">Password errata</div>
    <a href="index.html" style="display:block;text-align:center;margin-top:20px;font-size:0.83rem;color:var(--text-muted);">← Torna al sito</a>
  </div>
</div>

<!-- ADMIN PANEL -->
<div id="adminPanel" style="display:none;">
  <!-- Sidebar -->
  <aside class="sidebar">
    <div class="sidebar-logo">
      <svg viewBox="0 0 32 32" fill="none" style="width:28px;height:28px;">
        <path d="M16 2 L28 9 L28 23 L16 30 L4 23 L4 9 Z" stroke="#c9943a" stroke-width="1.5" fill="none"/>
        <path d="M16 8 L22 12 L22 20 L16 24 L10 20 L10 12 Z" fill="#c9943a" opacity="0.3"/>
        <circle cx="16" cy="16" r="2" fill="#c9943a"/>
      </svg>
      <span>Laser <span style="color:var(--gold)">Point</span></span>
    </div>
    <nav class="sidebar-nav">
      <a class="nav-item active" onclick="showSection('dashboard')" data-section="dashboard">
        <span>📊</span> Dashboard
      </a>
      <a class="nav-item" onclick="showSection('products')" data-section="products">
        <span>📦</span> Prodotti
      </a>
      <a class="nav-item" onclick="showSection('categories')" data-section="categories">
        <span>🗂️</span> Categorie
      </a>
      <a class="nav-item" onclick="showSection('settings')" data-section="settings">
        <span>⚙️</span> Impostazioni
      </a>
    </nav>
    <div class="sidebar-footer">
      <a href="index.html" style="color:var(--text-muted);font-size:0.83rem;">← Vai al sito</a>
      <button onclick="doLogout()" style="background:none;border:none;color:var(--text-muted);font-size:0.83rem;cursor:pointer;">Esci</button>
    </div>
  </aside>

  <!-- Main -->
  <main class="admin-main">
    <!-- DASHBOARD -->
    <section id="sec-dashboard" class="admin-section active">
      <div class="admin-header">
        <h1>Dashboard</h1>
        <span style="color:var(--text-muted);font-size:0.88rem;" id="dashDate"></span>
      </div>
      <div class="stats-row" id="statsRow">
        <div class="stat-card"><div class="stat-card-num" id="st-products">—</div><div class="stat-card-label">Prodotti</div></div>
        <div class="stat-card"><div class="stat-card-num" id="st-categories">—</div><div class="stat-card-label">Categorie</div></div>
        <div class="stat-card"><div class="stat-card-num" id="st-featured">—</div><div class="stat-card-label">In Evidenza</div></div>
        <div class="stat-card"><div class="stat-card-num" id="st-available">—</div><div class="stat-card-label">Disponibili</div></div>
      </div>
      <div class="admin-card" style="margin-top:32px;">
        <h3 style="margin-bottom:20px;">Ultimi Prodotti Aggiunti</h3>
        <div id="recentProducts"></div>
      </div>
    </section>

    <!-- PRODUCTS -->
    <section id="sec-products" class="admin-section">
      <div class="admin-header">
        <h1>Prodotti</h1>
        <button class="btn-primary" onclick="openProductForm()">+ Nuovo Prodotto</button>
      </div>
      <div class="admin-card">
        <div style="display:flex;gap:12px;margin-bottom:20px;">
          <input type="search" id="adminSearchProd" placeholder="🔍 Cerca prodotto..." oninput="filterAdminProducts(this.value)"
            style="padding:10px 16px;background:var(--bg3);border:1px solid var(--border);border-radius:4px;color:var(--text);font-family:'DM Sans';font-size:0.88rem;flex:1;" />
          <select id="adminCatFilter" onchange="filterAdminProducts(document.getElementById('adminSearchProd').value)"
            style="padding:10px 16px;background:var(--bg3);border:1px solid var(--border);border-radius:4px;color:var(--text-muted);font-family:'DM Sans';font-size:0.85rem;">
            <option value="">Tutte le categorie</option>
          </select>
        </div>
        <div id="productsTable"></div>
      </div>
    </section>

    <!-- CATEGORIES -->
    <section id="sec-categories" class="admin-section">
      <div class="admin-header">
        <h1>Categorie</h1>
        <button class="btn-primary" onclick="openCategoryForm()">+ Nuova Categoria</button>
      </div>
      <div class="admin-card">
        <div id="categoriesTable"></div>
      </div>
    </section>

    <!-- SETTINGS -->
    <section id="sec-settings" class="admin-section">
      <div class="admin-header"><h1>Impostazioni</h1></div>
      <div class="admin-card" style="max-width:480px;">
        <h3 style="margin-bottom:20px;">Cambia Password Admin</h3>
        <div class="form-group">
          <label>Password attuale</label>
          <input type="password" id="currPass" placeholder="Password attuale" />
        </div>
        <div class="form-group" style="margin-top:16px;">
          <label>Nuova password</label>
          <input type="password" id="newPass" placeholder="Nuova password" />
        </div>
        <div class="form-group" style="margin-top:16px;">
          <label>Conferma nuova password</label>
          <input type="password" id="confPass" placeholder="Ripeti nuova password" />
        </div>
        <button class="btn-primary" onclick="changePassword()" style="margin-top:20px;">Salva Nuova Password</button>
      </div>
    </section>
  </main>
</div>

<!-- PRODUCT FORM MODAL -->
<div class="modal-overlay" id="productFormModal">
  <div class="modal" style="max-width:720px;">
    <div class="modal-header">
      <h2 id="productFormTitle">Nuovo Prodotto</h2>
      <button class="modal-close" onclick="closeProductForm()">×</button>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
      <div class="form-group" style="grid-column:1/-1;">
        <label>Nome Prodotto *</label>
        <input type="text" id="pf-name" placeholder="es. Targa Personalizzata in Legno" />
      </div>
      <div class="form-group">
        <label>Prezzo (€) *</label>
        <input type="number" id="pf-price" min="0" step="0.01" placeholder="0.00" />
      </div>
      <div class="form-group">
        <label>Categoria</label>
        <select id="pf-category"></select>
      </div>
      <div class="form-group">
        <label>Materiale</label>
        <input type="text" id="pf-material" placeholder="es. Legno di betulla, Plexiglass" />
      </div>
      <div class="form-group" style="display:flex;align-items:center;gap:12px;flex-direction:row;">
        <input type="checkbox" id="pf-featured" style="width:18px;height:18px;accent-color:var(--gold);" />
        <label for="pf-featured" style="margin:0;">In evidenza</label>
      </div>
      <div class="form-group" style="display:flex;align-items:center;gap:12px;flex-direction:row;">
        <input type="checkbox" id="pf-customizable" style="width:18px;height:18px;accent-color:var(--gold);" checked />
        <label for="pf-customizable" style="margin:0;">Personalizzabile</label>
      </div>
      <div class="form-group" style="display:flex;align-items:center;gap:12px;flex-direction:row;">
        <input type="checkbox" id="pf-available" style="width:18px;height:18px;accent-color:var(--gold);" checked />
        <label for="pf-available" style="margin:0;">Disponibile</label>
      </div>
      <div class="form-group" style="grid-column:1/-1;">
        <label>Descrizione</label>
        <textarea id="pf-desc" rows="4" placeholder="Descrivi il prodotto..."></textarea>
      </div>
      <div class="form-group" style="grid-column:1/-1;">
        <label>Immagini Prodotto</label>
        <div id="imageDropzone" class="image-dropzone" onclick="document.getElementById('imageInput').click()">
          <input type="file" id="imageInput" multiple accept="image/*" style="display:none;" onchange="handleImageUpload(this.files)" />
          <div class="dropzone-inner">📷 Clicca per selezionare le immagini</div>
        </div>
        <div id="imagePreviewList" style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px;"></div>
      </div>
    </div>
    <div style="display:flex;gap:12px;margin-top:24px;justify-content:flex-end;">
      <button class="btn-secondary" onclick="closeProductForm()">Annulla</button>
      <button class="btn-primary" onclick="saveProduct()" id="saveProductBtn">Salva Prodotto</button>
    </div>
  </div>
</div>

<!-- CATEGORY FORM MODAL -->
<div class="modal-overlay" id="categoryFormModal">
  <div class="modal" style="max-width:480px;">
    <div class="modal-header">
      <h2 id="categoryFormTitle">Nuova Categoria</h2>
      <button class="modal-close" onclick="closeCategoryForm()">×</button>
    </div>
    <div class="form-group">
      <label>Nome *</label>
      <input type="text" id="cf-name" placeholder="es. Feste & Compleanni" />
    </div>
    <div class="form-group" style="margin-top:12px;">
      <label>Slug (URL) *</label>
      <input type="text" id="cf-slug" placeholder="es. feste-compleanni" />
    </div>
    <div class="form-group" style="margin-top:12px;">
      <label>Descrizione</label>
      <textarea id="cf-desc" rows="3" placeholder="Breve descrizione della categoria..."></textarea>
    </div>
    <div class="form-group" style="margin-top:12px;">
      <label>Emoji / Icona</label>
      <input type="text" id="cf-icon" placeholder="🎉" />
    </div>
    <div class="form-group" style="margin-top:12px;">
      <label>Ordine di visualizzazione</label>
      <input type="number" id="cf-order" placeholder="0" min="0" />
    </div>
    <div style="display:flex;gap:12px;margin-top:24px;justify-content:flex-end;">
      <button class="btn-secondary" onclick="closeCategoryForm()">Annulla</button>
      <button class="btn-primary" onclick="saveCategory()">Salva Categoria</button>
    </div>
  </div>
</div>

<!-- CONFIRM DIALOG -->
<div class="modal-overlay" id="confirmModal">
  <div class="modal" style="max-width:380px;text-align:center;">
    <div style="font-size:2.5rem;margin-bottom:16px;">⚠️</div>
    <h3 id="confirmTitle" style="margin-bottom:12px;"></h3>
    <p id="confirmMsg" style="color:var(--text-muted);font-size:0.9rem;margin-bottom:28px;"></p>
    <div style="display:flex;gap:12px;justify-content:center;">
      <button class="btn-secondary" onclick="closeConfirm()">Annulla</button>
      <button class="btn-primary" id="confirmBtn" style="background:#c0392b;border-color:#c0392b;">Elimina</button>
    </div>
  </div>
</div>

<div class="toast" id="toast"></div>

<script src="js/config.js"></script>
<script src="js/admin.js"></script>
</body>
</html>
