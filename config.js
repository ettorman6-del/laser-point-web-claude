/* ADMIN LAYOUT */
body { overflow-x: hidden; }

.login-screen {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg);
  padding: 24px;
}
.login-card {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 48px 40px;
  width: 100%;
  max-width: 400px;
}
.login-logo {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 36px;
  font-family: 'Playfair Display', serif;
  font-size: 1.3rem;
}

#adminPanel {
  display: flex !important;
  min-height: 100vh;
}

/* SIDEBAR */
.sidebar {
  width: 240px;
  min-height: 100vh;
  background: var(--bg2);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  padding: 24px 0;
  position: fixed;
  top: 0; left: 0; bottom: 0;
  z-index: 50;
}
.sidebar-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 20px 24px;
  border-bottom: 1px solid var(--border);
  font-family: 'Playfair Display', serif;
  font-size: 1.15rem;
  margin-bottom: 16px;
}
.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 0 12px;
  flex: 1;
}
.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 11px 14px;
  border-radius: 6px;
  color: var(--text-muted);
  font-size: 0.88rem;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
}
.nav-item:hover { background: var(--bg3); color: var(--text); }
.nav-item.active { background: rgba(201,148,58,0.12); color: var(--gold); }
.sidebar-footer {
  padding: 16px 20px;
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* MAIN */
.admin-main {
  margin-left: 240px;
  flex: 1;
  min-height: 100vh;
  background: var(--bg);
}
.admin-section { display: none; padding: 40px; }
.admin-section.active { display: block; }
.admin-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
}
.admin-header h1 {
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
}

/* STATS */
.stats-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
.stat-card {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 24px 20px;
  text-align: center;
}
.stat-card-num {
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  color: var(--gold);
  margin-bottom: 4px;
}
.stat-card-label {
  font-size: 0.78rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

/* ADMIN CARD */
.admin-card {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 28px;
}

/* TABLE */
.admin-table { width: 100%; border-collapse: collapse; }
.admin-table th {
  text-align: left;
  padding: 10px 14px;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  border-bottom: 1px solid var(--border);
}
.admin-table td {
  padding: 14px;
  border-bottom: 1px solid rgba(201,148,58,0.08);
  font-size: 0.88rem;
  vertical-align: middle;
}
.admin-table tr:last-child td { border-bottom: none; }
.admin-table tr:hover td { background: var(--bg3); }
.table-thumb {
  width: 44px;
  height: 44px;
  border-radius: 4px;
  object-fit: cover;
  background: var(--bg3);
}
.table-thumb-placeholder {
  width: 44px; height: 44px;
  border-radius: 4px;
  background: var(--bg3);
  display: flex; align-items: center; justify-content: center;
  font-size: 1.1rem;
  color: var(--text-muted);
}
.badge-avail {
  padding: 3px 10px;
  border-radius: 100px;
  font-size: 0.72rem;
  font-weight: 600;
}
.badge-avail.yes { background: rgba(76,175,80,0.15); color: #4caf50; }
.badge-avail.no  { background: rgba(244,67,54,0.15);  color: #f44336; }
.table-actions { display: flex; gap: 8px; }
.btn-icon {
  padding: 7px 14px;
  border-radius: 4px;
  font-size: 0.78rem;
  border: 1px solid var(--border);
  background: transparent;
  cursor: pointer;
  transition: all 0.2s;
  font-family: 'DM Sans', sans-serif;
  color: var(--text-muted);
}
.btn-icon:hover { border-color: var(--gold); color: var(--gold); }
.btn-icon.danger:hover { border-color: #f44336; color: #f44336; }

/* IMAGE DROPZONE */
.image-dropzone {
  border: 2px dashed var(--border);
  border-radius: 8px;
  padding: 32px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;
  color: var(--text-muted);
}
.image-dropzone:hover { border-color: var(--gold); color: var(--gold); }
.image-preview {
  position: relative;
  width: 90px; height: 90px;
}
.image-preview img {
  width: 90px; height: 90px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid var(--border);
}
.image-preview .remove-img {
  position: absolute; top: -6px; right: -6px;
  width: 22px; height: 22px;
  border-radius: 50%;
  background: #c0392b;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 0.75rem;
  display: flex; align-items: center; justify-content: center;
}
.upload-progress {
  padding: 8px 12px;
  background: var(--bg3);
  border-radius: 4px;
  font-size: 0.78rem;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: 8px;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .sidebar { display: none; }
  .admin-main { margin-left: 0; }
  .stats-row { grid-template-columns: 1fr 1fr; }
}
