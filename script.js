/* =====================================================================
   SoloMC site — settings you can edit
   ===================================================================== */
var BUILD = 'build 2026-11-17';
var CONFIG = {
  SERVER_IP: 'play.solomc.net',
  JAVA_PORT: '25565',
  BEDROCK_PORT: '19132',
  DISCORD_URL: 'https://discord.gg/solomc',
  SUPPORT_EMAIL: 'faxissssss@gmail.com',                          // e.g. 'support@solomc.net' (empty = hide "Email Support")
  OWNER_EMAIL: 'faxissssss@gmail.com',        // Owner account (log in with Google, email must be verified)
  DEV_EMAIL: 'jerryclaytor01@gmail.com',      // Developer account (log in with Google, email must be verified)

  // Paste your Firebase web-app config here (Project settings > Your apps > Web app).
  FIREBASE: {
    apiKey: '',
    authDomain: '',
    projectId: '',
    appId: ''
  },

  // Store checkout. Receives the cart [{id, name, price, qty}] and the buyer's Minecraft
  // username, and must return a Promise (e.g. fetch(...) then redirect to the payment page).
  // The in-game commands that give the ranks belong to your store backend/API, not to this file.
  STORE_CHECKOUT: function (items, minecraftUsername) {
    return Promise.reject(new Error('not-configured'));
  }
};

var STORE_TABS = [
  { id: 'ranks', name: 'Server Ranks' },
  { id: 'keys', name: 'Crate Keys' },
  { id: 'spawners', name: 'Spawners' },
  { id: 'bundles', name: 'Special Bundles' }
];
/* "perks" is optional. Leave it empty or remove it and no list is shown under the item. */
var STORE_ITEMS = [
  { id: 'rank-solo-plus', tab: 'ranks', name: 'Solo+', price: 4.99, unit: 'Permanent', perks: [] },
  { id: 'rank-solo-plus-plus', tab: 'ranks', name: 'Solo++', price: 9.99, unit: 'Permanent', popular: true, perks: [] }
];

var BOARDS = [
  { id: 'updates', name: 'Updates', desc: 'Official news and update posts from the SoloMC staff team.', staffOnly: true },
  { id: 'general', name: 'General', desc: 'Chat with the community about anything SoloMC.' },
  { id: 'help', name: 'Help & Support', desc: 'Ask other players for help. For private issues, open a ticket.' },
  { id: 'suggestions', name: 'Suggestions', desc: 'Share your ideas for new features, events and improvements.' }
];
var STAFF_BOARDS = [
  { id: 'chat', name: 'Staff Chat', desc: 'Day to day staff talk.' },
  { id: 'announcements', name: 'Announcements', desc: 'Announcements from the owner to the staff team.', ownerOnly: true },
  { id: 'cases', name: 'Cases & Reports', desc: 'Discuss player cases and moderation decisions.' },
  { id: 'ideas', name: 'Staff Ideas', desc: 'Ideas to improve the server and the team.' }
];

var TICKET_CATS = { support: 'Support', store: 'Store / purchase', report: 'Report a player', appeal: 'Ban appeal', other: 'Other' };
var STATUS = { online: 'Online', idle: 'Idle', dnd: 'Do not disturb', invisible: 'Invisible' };

var LANGS = [["af","Afrikaans"],["sq","Albanian"],["am","Amharic"],["ar","Arabic"],["hy","Armenian"],["as","Assamese"],["ay","Aymara"],["az","Azerbaijani"],["bm","Bambara"],["eu","Basque"],["be","Belarusian"],["bn","Bengali"],["bho","Bhojpuri"],["bs","Bosnian"],["bg","Bulgarian"],["ca","Catalan"],["ceb","Cebuano"],["ny","Chichewa"],["zh-CN","Chinese (Simplified)"],["zh-TW","Chinese (Traditional)"],["co","Corsican"],["hr","Croatian"],["cs","Czech"],["da","Danish"],["dv","Dhivehi"],["doi","Dogri"],["nl","Dutch"],["en","English (original)"],["eo","Esperanto"],["et","Estonian"],["ee","Ewe"],["tl","Filipino"],["fi","Finnish"],["fr","French"],["fy","Frisian"],["gl","Galician"],["ka","Georgian"],["de","German"],["el","Greek"],["gn","Guarani"],["gu","Gujarati"],["ht","Haitian Creole"],["ha","Hausa"],["haw","Hawaiian"],["iw","Hebrew"],["hi","Hindi"],["hmn","Hmong"],["hu","Hungarian"],["is","Icelandic"],["ig","Igbo"],["ilo","Ilocano"],["id","Indonesian"],["ga","Irish"],["it","Italian"],["ja","Japanese"],["jw","Javanese"],["kn","Kannada"],["kk","Kazakh"],["km","Khmer"],["rw","Kinyarwanda"],["gom","Konkani"],["ko","Korean"],["kri","Krio"],["ku","Kurdish (Kurmanji)"],["ckb","Kurdish (Sorani)"],["ky","Kyrgyz"],["lo","Lao"],["la","Latin"],["lv","Latvian"],["ln","Lingala"],["lt","Lithuanian"],["lg","Luganda"],["lb","Luxembourgish"],["mk","Macedonian"],["mai","Maithili"],["mg","Malagasy"],["ms","Malay"],["ml","Malayalam"],["mt","Maltese"],["mi","Maori"],["mr","Marathi"],["mni-Mtei","Meiteilon (Manipuri)"],["lus","Mizo"],["mn","Mongolian"],["my","Myanmar (Burmese)"],["ne","Nepali"],["no","Norwegian"],["or","Odia (Oriya)"],["om","Oromo"],["ps","Pashto"],["fa","Persian"],["pl","Polish"],["pt","Portuguese"],["pa","Punjabi"],["qu","Quechua"],["ro","Romanian"],["ru","Russian"],["sm","Samoan"],["sa","Sanskrit"],["gd","Scots Gaelic"],["nso","Sepedi"],["sr","Serbian"],["st","Sesotho"],["sn","Shona"],["sd","Sindhi"],["si","Sinhala"],["sk","Slovak"],["sl","Slovenian"],["so","Somali"],["es","Spanish"],["su","Sundanese"],["sw","Swahili"],["sv","Swedish"],["tg","Tajik"],["ta","Tamil"],["tt","Tatar"],["te","Telugu"],["th","Thai"],["ti","Tigrinya"],["ts","Tsonga"],["tr","Turkish"],["tk","Turkmen"],["ak","Twi"],["uk","Ukrainian"],["ur","Urdu"],["ug","Uyghur"],["uz","Uzbek"],["vi","Vietnamese"],["cy","Welsh"],["xh","Xhosa"],["yi","Yiddish"],["yo","Yoruba"],["zu","Zulu"]];
var SOURCE_LANG = 'en';

var DEFAULT_FONT = 'Pixelify Sans';
var GENERIC_FONTS = {
  'System UI': 'system-ui, sans-serif',
  'Arial / Helvetica': 'Arial, Helvetica, sans-serif',
  'Georgia (serif)': 'Georgia, serif',
  'Courier (mono)': '"Courier New", Courier, monospace'
};
var FONTS = ['Pixelify Sans','Press Start 2P','Silkscreen','VT323','Jersey 10','Jersey 15','Jersey 20','Jersey 25','Micro 5','Tiny5','DotGothic16','Handjet','Bungee','Audiowide','Orbitron','Black Ops One','Russo One','Chakra Petch','Rajdhani','Teko','Saira','Share Tech Mono','Major Mono Display','Monoton','Staatliches','Bangers','Creepster','Special Elite','Permanent Marker','Lobster','Pacifico','Dancing Script','Caveat','Indie Flower','Satisfy','Shadows Into Light','Amatic SC','Fredoka','Baloo 2','Comfortaa','Chewy','Righteous','Roboto','Roboto Slab','Roboto Mono','Open Sans','Lato','Montserrat','Oswald','Source Sans 3','Source Code Pro','Raleway','Poppins','Nunito','Inter','Rubik','Ubuntu','Merriweather','Playfair Display','Lora','PT Sans','Noto Sans','Noto Serif','Quicksand','Work Sans','Fira Sans','Fira Code','Barlow','Mukta','Karla','Josefin Sans','Cabin','Bebas Neue','Anton','Archivo','Dosis','Titillium Web','Exo 2','Cinzel','Cormorant Garamond','EB Garamond','Crimson Text','Libre Baskerville','Bitter','Arvo','Zilla Slab','JetBrains Mono','Space Mono','Space Grotesk','IBM Plex Sans','IBM Plex Mono','IBM Plex Serif','DM Sans','DM Serif Display','Manrope','Outfit','Sora','Lexend','Urbanist','Plus Jakarta Sans','Syne','Alfa Slab One','Abril Fatface','Passion One','Fjalla One','Yanone Kaffeesatz','Oxygen','Heebo','Assistant','Hind','Mulish','Overpass','Prompt','Kanit','Sarabun','Noto Sans JP','Noto Sans KR','Noto Sans Arabic','Tajawal','Cairo','Almarai','Amiri','Vazirmatn'];

/* =====================================================================
   Small helpers
   ===================================================================== */
function $(id) { return document.getElementById(id); }
function el(tag, cls, text) {
  var n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text !== undefined && text !== null) n.textContent = text;
  return n;
}
function money(n) { return '$' + n.toFixed(2); }
function lsGet(k) { try { return localStorage.getItem(k) || ''; } catch (e) { return ''; } }
function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
function srvTs() { return firebase.firestore.FieldValue.serverTimestamp(); }
function inc(n) { return firebase.firestore.FieldValue.increment(n); }

var devErrors = [];
function logErr(msg) { devErrors.push(new Date().toLocaleTimeString() + '  ' + String(msg).slice(0, 300)); if (devErrors.length > 50) devErrors.shift(); }
window.addEventListener('error', function (e) { logErr(e.message + (e.filename ? ' (' + e.filename.split('/').pop() + ':' + e.lineno + ')' : '')); });
window.addEventListener('unhandledrejection', function (e) { logErr('Promise: ' + (e.reason && e.reason.message || e.reason)); });

var toastTimer;
function toast(msg) {
  var t = $('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () { t.classList.remove('show'); }, 2600);
}
function setMsg(node, text, kind) {
  node.className = 'msg' + (text ? ' show ' + (kind || 'info') : '');
  node.textContent = text || '';
}
function copyText(text) {
  function done() { toast('Copied: ' + text); }
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, fallback);
  else fallback();
  function fallback() {
    var ta = document.createElement('textarea');
    ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); done(); } catch (e) { toast('Copy failed'); }
    document.body.removeChild(ta);
  }
}
function tsMs(ts) { return ts && ts.toMillis ? ts.toMillis() : (ts && ts._t) || 0; }
function fmtDate(ts) {
  try { return ts && ts.toDate ? ts.toDate().toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' }) : 'just now'; } catch (e) { return ''; }
}
function timeAgo(ts) {
  var ms = tsMs(ts); if (!ms) return 'never';
  var s = Math.max(0, Math.round((Date.now() - ms) / 1000));
  if (s < 60) return 'just now';
  if (s < 3600) return Math.floor(s / 60) + ' min ago';
  if (s < 86400) return Math.floor(s / 3600) + ' h ago';
  return Math.floor(s / 86400) + ' d ago';
}
var IMG_RE = /^data:image\/jpeg;base64,[A-Za-z0-9+\/=]+$/;
function validImg(s) { return typeof s === 'string' && s.length < 320000 && IMG_RE.test(s); }
function setBg(node, img) { node.style.backgroundImage = validImg(img) ? 'url("' + img + '")' : ''; }
function noTr(node) { node.classList.add('notranslate'); node.setAttribute('translate', 'no'); return node; }

document.querySelectorAll('[data-discord]').forEach(function (a) { a.href = CONFIG.DISCORD_URL; });
if (CONFIG.SUPPORT_EMAIL) { var em = $('emailLink'); em.href = 'mailto:' + CONFIG.SUPPORT_EMAIL; em.hidden = false; }

function openModal(id) { $(id).classList.add('active'); }
function closeModal(id) { $(id).classList.remove('active'); }
document.addEventListener('click', function (e) {
  var c = e.target.closest('[data-copy]');
  if (c) copyText(c.getAttribute('data-copy'));
  var x = e.target.closest('[data-close]');
  if (x) closeModal(x.getAttribute('data-close'));
});
document.querySelectorAll('.modal-overlay').forEach(function (o) {
  o.addEventListener('click', function (e) { if (e.target === o) o.classList.remove('active'); });
});

/* =====================================================================
   State
   ===================================================================== */
var fb = { ready: false, auth: null, db: null };
var me = { user: null, username: '', display: '', photo: '', banner: '', bio: '', status: 'online', statusText: '', staff: false, admin: false, dev: false, loaded: false };
var site = { banner: '', bannerOn: false, ticketAi: true };
var fbConfigured = CONFIG.FIREBASE.apiKey && CONFIG.FIREBASE.apiKey.indexOf('PASTE') !== 0 && CONFIG.FIREBASE.projectId.indexOf('PASTE') !== 0;
var NOT_CONNECTED = 'Accounts, the forum and tickets are not connected yet. The site owner needs to add the Firebase settings in script.js.';
function isTeam() { return me.staff || me.admin; }
function myName() { return me.display || me.username; }
function roleFlags() { return { staff: isTeam(), owner: me.admin, dev: me.dev }; }

/* =====================================================================
   Router + role tabs
   ===================================================================== */
var TITLES = {
  home: 'SoloMC', store: 'Store · SoloMC', info: 'Server Info · SoloMC', forum: 'Forum · SoloMC',
  tickets: 'Tickets · SoloMC', faq: 'FAQ · SoloMC', account: 'Account · SoloMC',
  staff: 'Staff Area · SoloMC', mail: 'Mail · SoloMC', owner: 'Owner Panel · SoloMC', dev: 'Dev Panel · SoloMC'
};
var GUARD = {
  staff: function () { return isTeam(); },
  mail: function () { return isTeam(); },
  owner: function () { return me.admin; },
  dev: function () { return me.dev || me.admin; }
};
function currentView() { var id = (location.hash || '#home').slice(1); return TITLES[id] ? id : 'home'; }
function syncActiveTab() {
  var id = currentView();
  document.querySelectorAll('.topnav .tab[data-view], .topnav .acct-btn[data-view]').forEach(function (t) { t.classList.toggle('active', t.getAttribute('data-view') === id); });
}
function route() {
  var id = currentView();
  if (GUARD[id] && (!fbConfigured || (me.loaded && !GUARD[id]()))) { location.replace('#home'); return; }
  document.querySelectorAll('.view').forEach(function (v) { v.classList.toggle('active', v.getAttribute('data-view') === id); });
  syncActiveTab();
  document.title = TITLES[id];
  window.scrollTo(0, 0);
  requestAnimationFrame(function () {
    document.querySelectorAll('.view.active .reveal').forEach(function (r) { r.classList.add('in-view'); });
  });
  if (id !== 'mail') mailState.seenBase = null;
  if (id === 'forum') publicForum.show();
  if (id === 'tickets') ticketsShow();
  if (id === 'home') loadHomeUpdates();
  if (id === 'account') loadActChecks();
  if (me.loaded) {
    if (id === 'staff') staffShow();
    if (id === 'mail') mailShow();
    if (id === 'owner') ownerShow();
    if (id === 'dev') devShow();
  }
}

var ROLE_TABS = [
  { id: 'staff', label: 'Staff', ok: function () { return isTeam(); }, badge: 'staff' },
  { id: 'mail', label: 'Mail', ok: function () { return isTeam(); }, badge: 'mail' },
  { id: 'owner', label: 'Owner', ok: function () { return me.admin; } },
  { id: 'dev', label: 'Dev', ok: function () { return me.dev || me.admin; } }
];
function buildRoleTabs() {
  var bar = $('roleBarInner'), dup = $('roleDup');
  bar.innerHTML = ''; dup.innerHTML = '';
  var vis = ROLE_TABS.filter(function (t) { return t.ok(); });
  $('roleBar').hidden = !vis.length;
  if (vis.length) { bar.appendChild(el('span', 'rolebar-label', 'Staff tools')); dup.appendChild(el('div', 'role-sep', 'Staff tools')); }
  vis.forEach(function (t) {
    [bar, dup].forEach(function (host) {
      var a = el('a', 'tab', t.label); a.href = '#' + t.id; a.setAttribute('data-view', t.id);
      if (t.badge) { var b = el('span', 'nbadge'); b.setAttribute('data-badge', t.badge); b.hidden = true; a.appendChild(b); }
      host.appendChild(a);
    });
  });
  syncActiveTab(); updateBadges();
}
var badgeCounts = { tickets: 0, staff: 0, mail: 0 };
function updateBadges() {
  Object.keys(badgeCounts).forEach(function (k) {
    document.querySelectorAll('[data-badge="' + k + '"]').forEach(function (b) {
      var n = (k === 'mail' || isTeam()) ? badgeCounts[k] : 0;
      b.textContent = n > 99 ? '99+' : String(n); b.hidden = !n;
    });
  });
}
function setAcct(text) { document.querySelectorAll('[data-acct]').forEach(function (a) { a.textContent = text; }); }

/* =====================================================================
   Nav: mobile menu, language picker, font picker
   ===================================================================== */
var navUI = (function () {
  var tabs = $('tabs'), menuBtn = $('menuBtn');
  var pairs = [{ btn: $('langBtn'), menu: $('langMenu') }, { btn: $('fontBtn'), menu: $('fontMenu') }];
  function closeMenu() { tabs.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); }
  function closeDrops(except) { pairs.forEach(function (p) { if (p !== except) { p.menu.hidden = true; p.btn.setAttribute('aria-expanded', 'false'); } }); }
  function closeAll() { closeMenu(); closeDrops(null); }
  menuBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    var open = !tabs.classList.contains('open');
    closeDrops(null);
    tabs.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  pairs.forEach(function (p) {
    p.btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = p.menu.hidden;
      closeMenu(); closeDrops(p);
      p.menu.hidden = !open;
      p.btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (open && p.onOpen) p.onOpen();
    });
    p.menu.addEventListener('click', function (e) { e.stopPropagation(); });
  });
  document.addEventListener('click', function (e) { if (!e.target.closest('.topnav')) closeAll(); });
  tabs.addEventListener('click', function (e) { if (e.target.closest('.tab')) closeMenu(); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { closeAll(); document.querySelectorAll('.modal-overlay.active').forEach(function (m) { m.classList.remove('active'); }); }
  });
  window.addEventListener('hashchange', closeAll);
  return { pairs: pairs, closeAll: closeAll };
})();

(function () {
  var langList = $('langList'), langSearch = $('langSearch'), langLabel = $('langLabel');
  function getCookie(n) { var m = document.cookie.match(new RegExp('(?:^|; )' + n + '=([^;]*)')); return m ? decodeURIComponent(m[1]) : ''; }
  function current() { return getCookie('googtrans').split('/')[2] || SOURCE_LANG; }
  function writeCookie(value, expire) {
    var exp = expire ? '; expires=Thu, 01 Jan 1970 00:00:00 GMT' : '';
    var host = location.hostname, base = 'googtrans=' + value + exp + '; path=/';
    document.cookie = base;
    document.cookie = base + '; domain=' + host;
    if (host.indexOf('.') > -1) document.cookie = base + '; domain=.' + host;
  }
  function apply(code) { if (code === SOURCE_LANG) writeCookie('', true); else writeCookie('/' + SOURCE_LANG + '/' + code, false); location.reload(); }
  function labelOf(code) { for (var i = 0; i < LANGS.length; i++) if (LANGS[i][0] === code) return LANGS[i][1].replace(' (original)', ''); return code; }
  function render(q) {
    q = (q || '').trim().toLowerCase();
    var cur = current();
    langList.innerHTML = '';
    var n = 0;
    LANGS.forEach(function (l) {
      if (q && l[1].toLowerCase().indexOf(q) < 0 && l[0].toLowerCase().indexOf(q) < 0) return;
      var b = el('button', 'lang-opt' + (l[0] === cur ? ' active' : ''), l[1]);
      b.type = 'button'; b.setAttribute('role', 'option');
      b.addEventListener('click', function () { apply(l[0]); });
      langList.appendChild(b); n++;
    });
    if (!n) langList.appendChild(el('div', 'lang-empty', 'No results'));
  }
  navUI.pairs[0].onOpen = function () {
    langSearch.value = ''; render('');
    setTimeout(function () { langSearch.focus(); }, 0);
    var a = langList.querySelector('.active'); if (a) a.scrollIntoView({ block: 'center' });
  };
  langSearch.addEventListener('input', function () { render(langSearch.value); });
  var cur = current();
  langLabel.textContent = cur === SOURCE_LANG ? 'Language' : labelOf(cur);
  render('');
  if (cur !== SOURCE_LANG) {
    window.googleTranslateElementInit = function () { new google.translate.TranslateElement({ pageLanguage: SOURCE_LANG, autoDisplay: false }, 'google_translate_element'); };
    var s = document.createElement('script');
    s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    s.async = true; document.head.appendChild(s);
  }
})();

(function () {
  var FONT_KEY = 'solomc_font';
  var list = $('fontList'), search = $('fontSearch'), custom = $('fontCustom');
  var mcReady = false, active = lsGet(FONT_KEY) || DEFAULT_FONT;
  function stack(name) { return "'" + name.replace(/['"\\;{}<>]/g, '') + "', 'Pixelify Sans', monospace"; }
  function setVar(v) { document.documentElement.style.setProperty('--font', v); }
  function applyFont(name) {
    name = (name || '').trim();
    return new Promise(function (resolve) {
      if (!name) return resolve(false);
      if (name === DEFAULT_FONT) { setVar(stack(DEFAULT_FONT)); return resolve(true); }
      if (GENERIC_FONTS[name]) { setVar(GENERIC_FONTS[name]); return resolve(true); }
      if (name === 'Minecraft') { if (!mcReady) return resolve(false); setVar("'SoloMC Minecraft', 'Pixelify Sans', monospace"); return resolve(true); }
      var safe = name.replace(/[^A-Za-z0-9 ]/g, '').replace(/\s+/g, ' ').trim();
      if (!safe) return resolve(false);
      var id = 'gf-' + safe.replace(/ /g, '-');
      function ok() { setVar(stack(safe)); resolve(true); }
      if (document.getElementById(id)) return ok();
      var link = document.createElement('link');
      link.id = id; link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=' + encodeURIComponent(safe).replace(/%20/g, '+') + '&display=swap';
      link.onload = function () {
        var p = document.fonts && document.fonts.load ? document.fonts.load('16px "' + safe + '"').catch(function () {}) : Promise.resolve();
        p.then(ok);
      };
      link.onerror = function () { link.parentNode && link.parentNode.removeChild(link); resolve(false); };
      document.head.appendChild(link);
    });
  }
  function choose(name) {
    applyFont(name).then(function (ok) {
      if (ok) { active = name; lsSet(FONT_KEY, name); render(search.value); toast('Font: ' + name); }
      else toast("Couldn't load that font");
    });
  }
  function render(q) {
    q = (q || '').trim().toLowerCase();
    list.innerHTML = '';
    var names = [];
    if (mcReady) names.push('Minecraft');
    Object.keys(GENERIC_FONTS).forEach(function (g) { names.push(g); });
    FONTS.forEach(function (f) { names.push(f); });
    var n = 0;
    names.forEach(function (f) {
      if (q && f.toLowerCase().indexOf(q) < 0) return;
      var b = el('button', 'lang-opt' + (f === active ? ' active' : ''), f);
      b.type = 'button'; b.setAttribute('role', 'option');
      b.addEventListener('click', function () { choose(f); });
      list.appendChild(b); n++;
    });
    if (!n) list.appendChild(el('div', 'lang-empty', 'No match. Try the box below to load any Google Font by name.'));
  }
  navUI.pairs[1].onOpen = function () {
    search.value = ''; render('');
    setTimeout(function () { search.focus(); }, 0);
    var a = list.querySelector('.active'); if (a) a.scrollIntoView({ block: 'center' });
  };
  search.addEventListener('input', function () { render(search.value); });
  $('fontCustomBtn').addEventListener('click', function () { if (custom.value.trim()) choose(custom.value.trim()); });
  custom.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); $('fontCustomBtn').click(); } });
  $('fontReset').addEventListener('click', function () { choose(DEFAULT_FONT); });
  if (typeof FontFace !== 'undefined') {
    var files = ['assets/minecraft.woff2', 'assets/minecraft.woff', 'assets/minecraft.ttf', 'assets/minecraft.otf'];
    (function next(i) {
      if (i >= files.length) return;
      new FontFace('SoloMC Minecraft', 'url(' + files[i] + ')').load().then(function (face) {
        document.fonts.add(face); mcReady = true;
        if (active === 'Minecraft') applyFont('Minecraft');
        render(search.value);
      }).catch(function () { next(i + 1); });
    })(0);
  }
  render('');
  if (active !== DEFAULT_FONT) applyFont(active).then(function (ok) { if (!ok && active !== 'Minecraft') { active = DEFAULT_FONT; lsSet(FONT_KEY, ''); } });
})();

/* server status (optional, fails silently) */
(function () {
  var row = $('statusRow');
  try {
    fetch('https://api.mcsrvstat.us/3/' + CONFIG.SERVER_IP + ':' + CONFIG.JAVA_PORT)
      .then(function (r) { return r.json(); })
      .then(function (d) {
        if (!d || typeof d.online !== 'boolean') return;
        row.appendChild(el('span', 'dot' + (d.online ? ' on' : '')));
        row.appendChild(el('span', '', d.online ? ('Online' + (d.players && typeof d.players.online === 'number' ? ' · ' + d.players.online + ' players' : '')) : 'Offline'));
      }).catch(function () {});
  } catch (e) {}
})();

/* =====================================================================
   Store: Minecraft username + skin head, cart
   ===================================================================== */
var MC_RE = /^\.?[A-Za-z0-9_]{3,16}$/;
var MC_PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8' shape-rendering='crispEdges'%3E%3Crect width='8' height='8' fill='%23624b3c'/%3E%3Crect y='3' width='8' height='5' fill='%23c4906a'/%3E%3Crect x='1' y='4' width='2' height='1' fill='%23fff'/%3E%3Crect x='5' y='4' width='2' height='1' fill='%23fff'/%3E%3Crect x='2' y='4' width='1' height='1' fill='%234b3a8c'/%3E%3Crect x='5' y='4' width='1' height='1' fill='%234b3a8c'/%3E%3Crect x='3' y='6' width='2' height='1' fill='%23805040'/%3E%3C/svg%3E";
var mcUser = lsGet('solomc_mcuser');
if (!MC_RE.test(mcUser)) mcUser = '';
function setHead(img, name) {
  if (!MC_RE.test(name)) { img.onerror = null; img.src = MC_PLACEHOLDER; return; }
  img.onerror = function () {
    img.onerror = function () { img.onerror = null; img.src = MC_PLACEHOLDER; };
    img.src = 'https://minotar.net/avatar/' + encodeURIComponent(name) + '/64';
  };
  img.src = 'https://mc-heads.net/avatar/' + encodeURIComponent(name) + '/64';
}
(function () {
  var sets = [{ input: $('mcName'), head: $('mcHead') }, { input: $('mcName2'), head: $('mcHead2') }];
  var timer;
  function refresh() { clearTimeout(timer); timer = setTimeout(function () { sets.forEach(function (s) { setHead(s.head, mcUser); }); }, 450); }
  sets.forEach(function (s) {
    s.input.value = mcUser;
    setHead(s.head, mcUser);
    s.input.addEventListener('input', function () {
      var v = s.input.value.trim();
      mcUser = MC_RE.test(v) ? v : '';
      if (MC_RE.test(v)) lsSet('solomc_mcuser', v);
      sets.forEach(function (o) { if (o !== s) o.input.value = s.input.value; });
      if (!MC_RE.test(v)) sets.forEach(function (o) { setHead(o.head, ''); }); else refresh();
    });
  });
})();

var cart = [];
var storeTab = 'ranks';
try { cart = JSON.parse(lsGet('solomc_cart') || '[]'); } catch (e) { cart = []; }
if (!Array.isArray(cart)) cart = [];
function itemById(id) { for (var i = 0; i < STORE_ITEMS.length; i++) if (STORE_ITEMS[i].id === id) return STORE_ITEMS[i]; return null; }
cart = cart.filter(function (c) { return c && itemById(c.id); }).map(function (c) { return { id: c.id, qty: Math.max(1, Math.min(10, c.qty | 0)) }; });
function saveCart() { lsSet('solomc_cart', JSON.stringify(cart)); }
function addToCart(id, thenOpen) {
  var found = cart.filter(function (c) { return c.id === id; })[0];
  if (found) { if (found.qty < 10) found.qty++; } else cart.push({ id: id, qty: 1 });
  saveCart(); renderCart();
  if (thenOpen) { setMsg($('cartMsg'), ''); openModal('cartModal'); } else toast('Added to cart');
}
function removeFromCart(id) { cart = cart.filter(function (c) { return c.id !== id; }); saveCart(); renderCart(); }
function renderStore() {
  var tabs = $('storeTabs'); tabs.innerHTML = '';
  STORE_TABS.forEach(function (t) {
    var b = el('button', 'tab' + (t.id === storeTab ? ' active' : ''), t.name); b.type = 'button';
    b.addEventListener('click', function () { storeTab = t.id; renderStore(); });
    tabs.appendChild(b);
  });
  var grid = $('storeGrid'); grid.innerHTML = '';
  var items = STORE_ITEMS.filter(function (i) { return i.tab === storeTab; });
  if (!items.length) { grid.appendChild(el('div', 'ore-panel empty-box', 'Coming soon — this category is being set up.')); return; }
  items.forEach(function (i) {
    var card = el('div', 'ore-panel item-card' + (i.popular ? ' popular' : ''));
    if (i.popular) card.appendChild(el('span', 'ribbon', 'Most popular'));
    card.appendChild(noTr(el('h3', 'item-name', i.name)));
    var price = el('div', 'item-price', money(i.price) + ' '); price.appendChild(el('span', '', '/ ' + i.unit));
    card.appendChild(price);
    if (i.perks && i.perks.length) { var ul = el('ul', 'perks'); i.perks.forEach(function (p) { ul.appendChild(el('li', '', p)); }); card.appendChild(ul); }
    var act = el('div', 'item-actions');
    var add = el('button', 'ore-btn gray', 'Add'); add.type = 'button'; add.addEventListener('click', function () { addToCart(i.id, false); });
    var buy = el('button', 'ore-btn', 'Buy now'); buy.type = 'button'; buy.addEventListener('click', function () { addToCart(i.id, true); });
    act.appendChild(add); act.appendChild(buy); card.appendChild(act);
    grid.appendChild(card);
  });
}
function renderCart() {
  var count = 0, total = 0, lines = $('cartLines'); lines.innerHTML = '';
  cart.forEach(function (c) {
    var it = itemById(c.id); if (!it) return;
    count += c.qty; total += it.price * c.qty;
    var line = el('div', 'ore-inset cart-line');
    line.appendChild(el('span', 'n', c.qty + ' × ' + it.name));
    var wrap = el('span');
    wrap.appendChild(el('span', 'p', money(it.price * c.qty)));
    var rm = el('button', 'ore-btn small gray', 'Remove'); rm.type = 'button'; rm.style.marginLeft = '10px';
    rm.addEventListener('click', function () { removeFromCart(c.id); });
    wrap.appendChild(rm); line.appendChild(wrap); lines.appendChild(line);
  });
  if (!count) lines.appendChild(el('div', 'empty-box', 'Your cart is empty.'));
  $('cartCount').textContent = String(count);
  $('cartTotal').textContent = money(total);
  $('checkoutBtn').disabled = !count;
  $('clearCartBtn').disabled = !count;
}
$('cartBtn').addEventListener('click', function () { setMsg($('cartMsg'), ''); renderCart(); openModal('cartModal'); });
$('clearCartBtn').addEventListener('click', function () { cart = []; saveCart(); renderCart(); });
$('checkoutBtn').addEventListener('click', function () {
  if (!MC_RE.test(mcUser)) { setMsg($('cartMsg'), 'Enter your Minecraft username first so we know who to deliver to.', 'err'); $('mcName2').focus(); return; }
  var items = cart.map(function (c) { var it = itemById(c.id); return { id: it.id, name: it.name, price: it.price, qty: c.qty }; });
  setMsg($('cartMsg'), 'Starting checkout...', 'info');
  var p; try { p = Promise.resolve(CONFIG.STORE_CHECKOUT(items, mcUser)); } catch (e) { p = Promise.reject(e); }
  p.then(function () { setMsg($('cartMsg'), ''); }).catch(function (err) {
    if (err && err.message === 'not-configured') setMsg($('cartMsg'), "The store isn't connected yet. Please check back soon or ask staff on Discord.", 'info');
    else setMsg($('cartMsg'), 'Checkout failed. Please try again or contact staff on Discord.', 'err');
  });
});
renderStore(); renderCart();

/* =====================================================================
   Firebase init + accounts
   ===================================================================== */
function loadScript(src) {
  return new Promise(function (res, rej) {
    var s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = function () { rej(new Error('load ' + src)); };
    document.head.appendChild(s);
  });
}
var FB_VER = '10.12.5';
function initFirebase() {
  if (!fbConfigured) { refreshAccountUI(); return Promise.resolve(); }
  var base = 'https://www.gstatic.com/firebasejs/' + FB_VER + '/';
  return loadScript(base + 'firebase-app-compat.js')
    .then(function () { return loadScript(base + 'firebase-auth-compat.js'); })
    .then(function () { return loadScript(base + 'firebase-firestore-compat.js'); })
    .then(function () {
      firebase.initializeApp(CONFIG.FIREBASE);
      fb.auth = firebase.auth(); fb.db = firebase.firestore(); fb.ready = true;
      fb.auth.onAuthStateChanged(onAuth);
      loadSiteConfig();
      loadHomeUpdates();
      route();
    })
    .catch(function (e) { fb.ready = false; logErr(e && e.message); refreshAccountUI(); });
}

var authSeq = 0;
function onAuth(user) {
  var seq = ++authSeq;
  publicForum.cooldown = 0; staffForum.cooldown = 0; tk.cooldown = 0;
  me.user = user; me.username = ''; me.display = ''; me.photo = ''; me.banner = ''; me.bio = ''; me.status = 'online'; me.statusText = '';
  me.staff = false; me.admin = false; me.dev = false; me.loaded = false;
  stopTicketWatch(); mailState.seenBase = null;
  if (!user) { me.loaded = true; setAuthMode('login'); badgeCounts.tickets = badgeCounts.staff = badgeCounts.mail = 0; afterAuth(); return; }
  Promise.all([
    fb.db.collection('profiles').doc(user.uid).get().catch(function () { return null; }),
    fb.db.collection('staff').doc(user.uid).get().catch(function () { return null; })
  ]).then(function (r) {
    if (seq !== authSeq) return;
    var p = (r[0] && r[0].exists && r[0].data()) || {};
    me.username = p.username || '';
    me.display = p.displayName || '';
    me.photo = validImg(p.photo) ? p.photo : '';
    me.banner = validImg(p.banner) ? p.banner : '';
    me.bio = p.bio || '';
    me.status = STATUS[p.status] ? p.status : 'online';
    me.statusText = p.statusText || '';
    me.staff = !!(r[1] && r[1].exists);
    var mail = (user.email || '').toLowerCase();
    var verified = !!user.emailVerified;
    me.admin = verified && mail === CONFIG.OWNER_EMAIL.toLowerCase();
    me.dev = verified && mail === CONFIG.DEV_EMAIL.toLowerCase();
    me.loaded = true;
    afterAuth();
  });
}
function afterAuth() {
  buildRoleTabs(); refreshAccountUI(); forumControls(); startBeat();
  if (me.user && isTeam()) { startTicketWatch(); } else { updateBadges(); }
  if (me.user && isTeam()) loadMailBadge();
  var id = currentView();
  if (GUARD[id] && !GUARD[id]()) { location.replace('#home'); return; }
  if (id === 'tickets') ticketsShow();
  if (id === 'forum') publicForum.show();
  if (id === 'account') loadActChecks();
  if (id === 'staff') staffShow();
  if (id === 'mail') mailShow();
  if (id === 'owner') ownerShow();
  if (id === 'dev') devShow();
}

function validUsername(u) { return /^[A-Za-z0-9_]{3,20}$/.test(u); }
function authError(e) {
  var c = (e && e.code) || '';
  var map = {
    'auth/invalid-email': 'That email address is not valid.',
    'auth/missing-password': 'Please enter your password.',
    'auth/weak-password': 'Password must be at least 8 characters.',
    'auth/email-already-in-use': 'An account with that email already exists. Try logging in.',
    'auth/invalid-credential': 'Wrong email or password.',
    'auth/wrong-password': 'Wrong email or password.',
    'auth/user-not-found': 'Wrong email or password.',
    'auth/too-many-requests': 'Too many attempts. Please wait a bit and try again.',
    'auth/popup-closed-by-user': 'Sign-in was cancelled.',
    'auth/account-exists-with-different-credential': 'That email is already registered with a different sign-in method.',
    'auth/operation-not-allowed': 'That sign-in method is not enabled yet.',
    'auth/unauthorized-domain': 'This website address is not authorised for sign-in yet.',
    'auth/network-request-failed': 'Network error. Check your connection and try again.'
  };
  return map[c] || 'Something went wrong. Please try again.';
}

var authMode = 'login';
function setAuthMode(m) {
  authMode = m;
  $('tabLogin').classList.toggle('active', m === 'login');
  $('tabSignup').classList.toggle('active', m === 'signup');
  $('usernameField').hidden = m !== 'signup';
  $('authSubmit').textContent = m === 'signup' ? 'Create account' : 'Log in';
  $('authPass').setAttribute('autocomplete', m === 'signup' ? 'new-password' : 'current-password');
  $('forgotBtn').hidden = m === 'signup';
  setMsg($('authMsg'), '');
}
$('tabLogin').addEventListener('click', function () { setAuthMode('login'); });
$('tabSignup').addEventListener('click', function () { setAuthMode('signup'); });

/* ----- profile display helpers ----- */
function paintAvatar(node, photo, name) {
  setBg(node, photo);
  var l = node.querySelector('.av-letter');
  if (l) l.textContent = validImg(photo) ? '' : ((name || '?').charAt(0).toUpperCase());
}
function dotClass(st, others) { return 'st st-' + (STATUS[st] ? st : 'online'); }
function fillStatusLine(node, st, text, forOthers) {
  node.innerHTML = '';
  var s = STATUS[st] ? st : 'online';
  var dot = el('span', 'st inline st-' + s);
  node.appendChild(dot);
  var label = (forOthers && s === 'invisible') ? 'Offline' : STATUS[s];
  node.appendChild(el('span', '', label));
  if (text) { var t = el('span', 'notranslate', ' — ' + text); t.setAttribute('translate', 'no'); node.appendChild(t); }
}
function roleTags(ids, flags) {
  $(ids.staff).hidden = !(flags.staff && !flags.owner && !flags.dev);
  $(ids.dev).hidden = !(flags.dev && !flags.owner);
  $(ids.owner).hidden = !flags.owner;
}

function refreshAccountUI() {
  var guest = $('authGuest'), prof = $('authProfile'), uname = $('authUsernameCard');
  if (!fbConfigured || !fb.ready) {
    setMsg($('authNotice'), fbConfigured ? 'Could not reach the account service. Please refresh and try again.' : NOT_CONNECTED, 'info');
    guest.hidden = false; prof.hidden = true; uname.hidden = true;
    $('googleBtn').disabled = $('microsoftBtn').disabled = $('authSubmit').disabled = true;
    setAcct('Log in'); return;
  }
  setMsg($('authNotice'), '');
  $('googleBtn').disabled = $('microsoftBtn').disabled = $('authSubmit').disabled = false;
  if (!me.user) { guest.hidden = false; prof.hidden = true; uname.hidden = true; setAcct('Log in'); return; }
  if (!me.loaded) return;
  guest.hidden = true;
  if (!me.username) { uname.hidden = false; prof.hidden = true; setAcct('Account'); return; }
  uname.hidden = true; prof.hidden = false;
  $('profName').textContent = myName();
  $('profHandle').textContent = '@' + me.username;
  roleTags({ staff: 'profStaff', dev: 'profDev', owner: 'profOwner' }, { staff: me.staff, dev: me.dev, owner: me.admin });
  $('profEmail').textContent = me.user.email || '';
  setBg($('profBanner'), me.banner);
  paintAvatar($('profAvatar'), me.photo, myName());
  $('profDot').className = dotClass(me.status);
  fillStatusLine($('profStatusLine'), me.status, me.statusText, false);
  $('profBio').textContent = me.bio; $('profBio').hidden = !me.bio;
  $('statusQuick').value = me.status;
  var usesPassword = (me.user.providerData || []).some(function (p) { return p.providerId === 'password'; });
  var lockedStaff = me.staff && !me.admin;
  $('staffNote').hidden = !lockedStaff;
  $('staffNote').className = 'msg' + (lockedStaff ? ' show info' : '');
  $('resetBtn').hidden = me.staff || !usesPassword;
  $('actChecks').hidden = !me.staff;
  setAcct(myName());
}

$('authForm').addEventListener('submit', function (e) {
  e.preventDefault();
  if (!fb.ready) return;
  var email = $('authEmail').value.trim(), pass = $('authPass').value, msg = $('authMsg');
  if (!email || !pass) { setMsg(msg, 'Please enter your email and password.', 'err'); return; }
  $('authSubmit').disabled = true; setMsg(msg, '');
  if (authMode === 'signup') {
    var name = $('authUsername').value.trim();
    if (!validUsername(name)) { setMsg(msg, 'Username must be 3-20 letters, numbers or underscores.', 'err'); $('authSubmit').disabled = false; return; }
    if (pass.length < 8) { setMsg(msg, 'Password must be at least 8 characters.', 'err'); $('authSubmit').disabled = false; return; }
    fb.auth.createUserWithEmailAndPassword(email, pass).then(function (cred) {
      return fb.db.collection('profiles').doc(cred.user.uid).set({ username: name, status: 'online' }).then(function () { onAuth(cred.user); });
    }).then(function () { $('authForm').reset(); toast('Account created'); }).catch(function (err) { setMsg(msg, authError(err), 'err'); }).then(function () { $('authSubmit').disabled = false; });
  } else {
    fb.auth.signInWithEmailAndPassword(email, pass).then(function () { $('authForm').reset(); }).catch(function (err) { setMsg(msg, authError(err), 'err'); }).then(function () { $('authSubmit').disabled = false; });
  }
});
function socialLogin(provider) {
  if (!fb.ready) return;
  setMsg($('authMsg'), '');
  fb.auth.signInWithPopup(provider).catch(function (err) {
    if (err && (err.code === 'auth/popup-blocked' || err.code === 'auth/operation-not-supported-in-this-environment')) return fb.auth.signInWithRedirect(provider);
    setMsg($('authMsg'), authError(err), 'err');
  });
}
$('googleBtn').addEventListener('click', function () { socialLogin(new firebase.auth.GoogleAuthProvider()); });
$('microsoftBtn').addEventListener('click', function () {
  var p = new firebase.auth.OAuthProvider('microsoft.com'); p.setCustomParameters({ prompt: 'select_account' }); socialLogin(p);
});
$('forgotBtn').addEventListener('click', function () {
  if (!fb.ready) return;
  var email = $('authEmail').value.trim();
  if (!email) { setMsg($('authMsg'), 'Type your email above first, then press "Forgot password?".', 'err'); return; }
  fb.auth.sendPasswordResetEmail(email).then(function () { setMsg($('authMsg'), 'If an account exists for that email, a reset link is on its way.', 'ok'); })
    .catch(function (err) { setMsg($('authMsg'), authError(err), 'err'); });
});
$('usernameForm').addEventListener('submit', function (e) {
  e.preventDefault();
  var name = $('newUsername').value.trim(), msg = $('usernameMsg');
  if (!validUsername(name)) { setMsg(msg, 'Username must be 3-20 letters, numbers or underscores.', 'err'); return; }
  me.username = name;
  saveProfile().then(function () { afterAuth(); toast('Username saved'); }).catch(function () { me.username = ''; setMsg(msg, 'Could not save your username. Please try again.', 'err'); });
});
$('resetBtn').addEventListener('click', function () {
  if (!me.user || me.staff || !me.user.email) return;
  fb.auth.sendPasswordResetEmail(me.user.email).then(function () { setMsg($('profMsg'), 'Reset link sent to your email.', 'ok'); })
    .catch(function (err) { setMsg($('profMsg'), authError(err), 'err'); });
});
$('logoutBtn').addEventListener('click', function () { if (fb.ready) fb.auth.signOut(); });

/* ----- profile settings ----- */
function profileDoc() {
  var d = { username: me.username, status: STATUS[me.status] ? me.status : 'online' };
  if (me.display) d.displayName = me.display;
  if (validImg(me.photo)) d.photo = me.photo;
  if (validImg(me.banner)) d.banner = me.banner;
  if (me.bio) d.bio = me.bio;
  if (me.statusText) d.statusText = me.statusText;
  return d;
}
function saveProfile() { return fb.db.collection('profiles').doc(me.user.uid).set(profileDoc()); }

var draft = { photo: '', banner: '' };
function imageToJpeg(file, w, h, maxChars) {
  return new Promise(function (res, rej) {
    if (!file || !/^image\//.test(file.type)) return rej(new Error('type'));
    if (file.size > 12 * 1024 * 1024) return rej(new Error('big'));
    var fr = new FileReader();
    fr.onerror = function () { rej(new Error('read')); };
    fr.onload = function () {
      var img = new Image();
      img.onerror = function () { rej(new Error('img')); };
      img.onload = function () {
        var cv = document.createElement('canvas'); cv.width = w; cv.height = h;
        var ctx = cv.getContext('2d');
        var s = Math.max(w / img.width, h / img.height), dw = img.width * s, dh = img.height * s;
        ctx.fillStyle = '#1f1815'; ctx.fillRect(0, 0, w, h);
        ctx.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh);
        var q = 0.85, out = cv.toDataURL('image/jpeg', q);
        while (out.length > maxChars && q > 0.3) { q -= 0.1; out = cv.toDataURL('image/jpeg', q); }
        if (out.length > maxChars) rej(new Error('big')); else res(out);
      };
      img.src = fr.result;
    };
    fr.readAsDataURL(file);
  });
}
function paintThumbs() { setBg($('pfPhotoThumb'), draft.photo); setBg($('pfBannerThumb'), draft.banner); }
$('editProfileBtn').addEventListener('click', function () {
  $('pfDisplay').value = me.display; $('pfUser').value = me.username;
  $('pfStatusText').value = me.statusText; $('pfBio').value = me.bio;
  draft.photo = me.photo; draft.banner = me.banner; paintThumbs();
  $('pfPhoto').value = ''; $('pfBanner').value = ''; setMsg($('pfMsg'), '');
  $('profileForm').hidden = false; $('editProfileBtn').hidden = true;
});
$('pfCancel').addEventListener('click', function () { $('profileForm').hidden = true; $('editProfileBtn').hidden = false; });
function pickImage(input, key, w, h, maxChars) {
  input.addEventListener('change', function () {
    var f = input.files && input.files[0]; if (!f) return;
    imageToJpeg(f, w, h, maxChars).then(function (data) { draft[key] = data; paintThumbs(); setMsg($('pfMsg'), ''); })
      .catch(function () { setMsg($('pfMsg'), 'That image could not be used. Try a different picture (under 12 MB).', 'err'); });
  });
}
pickImage($('pfPhoto'), 'photo', 256, 256, 140000);
pickImage($('pfBanner'), 'banner', 1000, 300, 280000);
$('pfPhotoRemove').addEventListener('click', function () { draft.photo = ''; $('pfPhoto').value = ''; paintThumbs(); });
$('pfBannerRemove').addEventListener('click', function () { draft.banner = ''; $('pfBanner').value = ''; paintThumbs(); });
$('profileForm').addEventListener('submit', function (e) {
  e.preventDefault();
  var msg = $('pfMsg'), user = $('pfUser').value.trim(), disp = $('pfDisplay').value.trim();
  var stext = $('pfStatusText').value.trim(), bio = $('pfBio').value.trim();
  if (!validUsername(user)) { setMsg(msg, 'Username must be 3-20 letters, numbers or underscores.', 'err'); return; }
  if (disp.length > 32) { setMsg(msg, 'Display name can be up to 32 characters.', 'err'); return; }
  if (stext.length > 60) { setMsg(msg, 'Status text can be up to 60 characters.', 'err'); return; }
  if (bio.length > 200) { setMsg(msg, 'Bio can be up to 200 characters.', 'err'); return; }
  var prev = { u: me.username, d: me.display, p: me.photo, b: me.banner, bio: me.bio, st: me.statusText };
  me.username = user; me.display = disp; me.photo = validImg(draft.photo) ? draft.photo : ''; me.banner = validImg(draft.banner) ? draft.banner : '';
  me.bio = bio; me.statusText = stext;
  $('pfSave').disabled = true;
  saveProfile().then(function () {
    refreshAccountUI(); $('profileForm').hidden = true; $('editProfileBtn').hidden = false; toast('Profile saved'); startBeat();
  }).catch(function () {
    me.username = prev.u; me.display = prev.d; me.photo = prev.p; me.banner = prev.b; me.bio = prev.bio; me.statusText = prev.st;
    setMsg(msg, 'Could not save your profile. Please try again.', 'err');
  }).then(function () { $('pfSave').disabled = false; });
});
$('statusQuick').addEventListener('change', function () {
  var prev = me.status; me.status = $('statusQuick').value;
  saveProfile().then(function () { refreshAccountUI(); toast('Status: ' + STATUS[me.status]); })
    .catch(function () { me.status = prev; refreshAccountUI(); toast('Could not change status'); });
});

function showProfile(uid, flags) {
  if (!fb.ready || !uid) return;
  fb.db.collection('profiles').doc(uid).get().then(function (s) {
    var p = s.exists ? s.data() : {};
    var name = p.displayName || p.username || 'Unknown';
    setBg($('pmBanner'), p.banner);
    paintAvatar($('pmAvatar'), p.photo, name);
    var st = STATUS[p.status] ? p.status : 'online';
    $('pmDot').className = dotClass(st);
    $('pmName').textContent = name;
    $('pmHandle').textContent = p.username ? '@' + p.username : '';
    fillStatusLine($('pmStatusLine'), st, p.statusText, true);
    $('pmBio').textContent = p.bio || ''; $('pmBio').hidden = !p.bio;
    roleTags({ staff: 'pmStaff', dev: 'pmDev', owner: 'pmOwner' }, flags || {});
    openModal('profileModal');
  }).catch(function () { toast('Could not load profile'); });
}

function authorLine(d, extra, clickable) {
  var m = el('div', 'post-meta');
  var nm;
  if (clickable && d.authorUid) {
    nm = el('button', 'name-link', d.authorName || 'Unknown'); nm.type = 'button';
    nm.addEventListener('click', function () { showProfile(d.authorUid, { staff: d.staff, owner: d.owner, dev: d.dev }); });
  } else nm = el('span', '', d.authorName || 'Unknown');
  noTr(nm); m.appendChild(nm);
  if (d.owner) m.appendChild(el('span', 'staff-tag owner', 'Owner'));
  else if (d.dev) m.appendChild(el('span', 'staff-tag dev', 'Dev'));
  else if (d.staff) m.appendChild(el('span', 'staff-tag', 'Staff'));
  m.appendChild(el('span', '', fmtDate(d.createdAt)));
  if (extra) m.appendChild(el('span', '', extra));
  return m;
}

/* =====================================================================
   Site config: banner + feature switches
   ===================================================================== */
function applySite() {
  var b = $('siteBanner');
  b.textContent = site.banner || '';
  b.hidden = !(site.bannerOn && site.banner);
}
function loadSiteConfig() {
  fb.db.collection('siteConfig').doc('main').get().then(function (s) {
    if (s.exists) {
      var d = s.data();
      site.banner = typeof d.banner === 'string' ? d.banner : '';
      site.bannerOn = !!d.bannerOn;
      site.ticketAi = d.ticketAi !== false;
    }
    applySite();
  }).catch(function () {});
}
function saveSite(partial) {
  var next = { banner: site.banner, bannerOn: site.bannerOn, ticketAi: site.ticketAi };
  Object.keys(partial).forEach(function (k) { next[k] = partial[k]; });
  var doc = { banner: String(next.banner || '').slice(0, 300), bannerOn: !!next.bannerOn, ticketAi: !!next.ticketAi, updatedBy: me.user.uid, updatedAt: srvTs() };
  return fb.db.collection('siteConfig').doc('main').set(doc).then(function () {
    site.banner = doc.banner; site.bannerOn = doc.bannerOn; site.ticketAi = doc.ticketAi; applySite();
  });
}
function buildBannerEditor(box) {
  box.innerHTML = '';
  var wrap = el('div', 'form');
  var ta = el('textarea'); ta.maxLength = 300; ta.style.minHeight = '70px'; ta.value = site.banner || ''; ta.placeholder = 'Banner message (300 characters max)';
  var lab = el('label', 'pick'); var cb = el('input'); cb.type = 'checkbox'; cb.checked = !!site.bannerOn;
  lab.appendChild(cb); lab.appendChild(el('span', '', 'Show the banner on the site'));
  var msg = el('div', 'msg'); var save = el('button', 'ore-btn small', 'Save banner'); save.type = 'button'; save.style.alignSelf = 'flex-start';
  save.addEventListener('click', function () {
    save.disabled = true;
    saveSite({ banner: ta.value.trim(), bannerOn: cb.checked }).then(function () { setMsg(msg, 'Saved.', 'ok'); })
      .catch(function () { setMsg(msg, 'Could not save. Check that the new rules are published.', 'err'); }).then(function () { save.disabled = false; });
  });
  wrap.appendChild(ta); wrap.appendChild(lab); wrap.appendChild(msg); wrap.appendChild(save);
  box.appendChild(wrap);
}

/* =====================================================================
   Staff last-seen heartbeat
   ===================================================================== */
var hbTimer = null;
function beat() {
  if (!fb.ready || !me.user || !me.staff || !me.username || document.visibilityState !== 'visible') return;
  fb.db.collection('staffStatus').doc(me.user.uid).set({ username: me.username, lastSeen: srvTs() }).catch(function () {});
}
function startBeat() {
  if (hbTimer) { clearInterval(hbTimer); hbTimer = null; }
  if (fb.ready && me.user && me.staff && me.username) { beat(); hbTimer = setInterval(beat, 120000); }
}
document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'visible') beat(); });

/* =====================================================================
   Forum factory (public forum + staff forum)
   ===================================================================== */
var postForCtx = null;
function makeForum(cfg) {
  var F = { board: cfg.defaultBoard, openId: null, cooldown: 0, pending: null };
  function E(k) { return $(cfg.ids[k]); }
  function boardById(id) { for (var i = 0; i < cfg.boards.length; i++) if (cfg.boards[i].id === id) return cfg.boards[i]; return cfg.boards[0]; }
  function ref(board) { return fb.db.collection(cfg.root).doc(board).collection('posts'); }
  function canPostTo(b) { return !!(fb.ready && me.user && me.username && cfg.canPost(b)); }
  function canReply() { return !!(fb.ready && me.user && me.username && cfg.canView()); }
  F.canPostTo = canPostTo;

  F.show = function () {
    setMsg(E('notice'), fbConfigured ? '' : NOT_CONNECTED, 'info');
    F.openId = null;
    var p = F.pending; F.pending = null;
    if (p) { F.board = p.board; F.renderTabs(); F.open(p.board, p.id, p.data); return; }
    F.renderTabs(); F.loadPosts();
  };
  F.renderTabs = function () {
    var tabs = E('tabs'); tabs.innerHTML = '';
    cfg.boards.forEach(function (b) {
      var t = el('button', 'tab' + (b.id === F.board ? ' active' : ''), b.name); t.type = 'button';
      t.addEventListener('click', function () { F.board = b.id; F.openId = null; E('thread').hidden = true; E('list').hidden = false; F.renderTabs(); F.loadPosts(); });
      tabs.appendChild(t);
    });
    E('desc').textContent = boardById(F.board).desc;
    F.controls();
  };
  F.controls = function () {
    var b = boardById(F.board), btn = E('newBtn'); if (!btn) return;
    btn.hidden = !cfg.canPost(b);
  };
  E('newBtn').addEventListener('click', function () {
    var b = boardById(F.board);
    if (!fb.ready) { toast('Not connected yet'); return; }
    if (!me.user) { location.hash = '#account'; toast('Log in to post'); return; }
    if (!me.username) { location.hash = '#account'; toast('Choose a username first'); return; }
    if (!canPostTo(b)) { toast("You can't post here"); return; }
    postForCtx = F;
    $('postModalTitle').textContent = 'New post in ' + b.name;
    $('postForm').reset(); setMsg($('postMsg'), ''); openModal('postModal');
  });
  F.loadPosts = function () {
    var list = E('posts'); list.innerHTML = '';
    E('thread').hidden = true; E('list').hidden = false;
    if (!fb.ready || !cfg.canView()) { list.appendChild(el('div', 'ore-panel empty-box', fbConfigured ? 'Loading...' : cfg.offlineText)); return; }
    list.appendChild(el('div', 'ore-panel empty-box', 'Loading...'));
    var board = F.board;
    ref(board).orderBy('createdAt', 'desc').limit(50).get().then(function (snap) {
      if (board !== F.board) return;
      list.innerHTML = '';
      if (snap.empty) { list.appendChild(el('div', 'ore-panel empty-box', 'No posts yet. Be the first!')); return; }
      snap.forEach(function (d) { list.appendChild(F.row(board, d.id, d.data())); });
    }).catch(function () { list.innerHTML = ''; list.appendChild(el('div', 'ore-panel empty-box', 'Could not load posts. Please try again later.')); });
  };
  F.row = function (board, id, d) {
    var b = el('button', 'ore-panel post-row'); b.type = 'button';
    b.appendChild(el('div', 'post-title', d.title || '(untitled)'));
    b.appendChild(authorLine(d, (d.replyCount || 0) + ' replies', false));
    b.addEventListener('click', function () { F.open(board, id, d); });
    return b;
  };
  F.open = function (board, id, d) {
    F.openId = id; F.board = board;
    E('list').hidden = true;
    var t = E('thread'); t.hidden = false; t.innerHTML = '';
    window.scrollTo(0, 0);
    var top = el('div', 'thread-top');
    var back = el('button', 'ore-btn gray small', '← Back'); back.type = 'button';
    back.addEventListener('click', function () { F.openId = null; t.hidden = true; E('list').hidden = false; F.renderTabs(); F.loadPosts(); });
    top.appendChild(back); top.appendChild(el('h2', '', d.title));
    t.appendChild(top);
    t.appendChild(authorLine(d, '', true));
    t.appendChild(el('div', 'ore-panel thread-body', d.body));
    if (me.user && (me.user.uid === d.authorUid || cfg.canModerate())) {
      var del = el('button', 'ore-btn danger small', 'Delete post'); del.type = 'button'; del.style.alignSelf = 'flex-start';
      del.addEventListener('click', function () {
        if (!confirm('Delete this post?')) return;
        ref(board).doc(id).delete().then(function () {
          toast('Post deleted');
          if (cfg.root === 'boards' && board === 'updates') loadHomeUpdates();
          back.click();
        }).catch(function () { toast('Could not delete'); });
      });
      t.appendChild(del);
    }
    t.appendChild(el('h3', '', 'Replies'));
    var rl = el('div', 'post-list'); t.appendChild(rl);
    F.loadReplies(board, id, rl);
    if (canReply()) {
      var form = el('form', 'form'); form.noValidate = true;
      var ta = el('textarea'); ta.maxLength = 3000; ta.placeholder = 'Write a reply...'; ta.setAttribute('aria-label', 'Reply');
      var msg = el('div', 'msg'); var send = el('button', 'ore-btn', 'Reply'); send.type = 'submit';
      form.appendChild(ta); form.appendChild(msg); form.appendChild(send);
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var body = ta.value.trim();
        if (!body) { setMsg(msg, 'Write something first.', 'err'); return; }
        if (Date.now() < F.cooldown) { setMsg(msg, 'Slow down a little before posting again.', 'err'); return; }
        send.disabled = true;
        var pr = ref(board).doc(id), fl = roleFlags();
        pr.collection('replies').add({
          body: body, authorUid: me.user.uid, authorName: myName(), staff: fl.staff, owner: fl.owner, dev: fl.dev, createdAt: srvTs()
        }).then(function () {
          F.cooldown = Date.now() + 8000;
          pr.update({ replyCount: inc(1) }).catch(function () {});
          ta.value = ''; setMsg(msg, ''); F.loadReplies(board, id, rl);
        }).catch(function () { setMsg(msg, 'Could not post your reply.', 'err'); }).then(function () { send.disabled = false; });
      });
      t.appendChild(form);
    } else {
      var hint = el('div', 'msg show info');
      hint.textContent = fb.ready ? 'Log in and choose a username to reply.' : 'Replies are available once the site is connected.';
      t.appendChild(hint);
      if (fb.ready && !me.user) { var go = el('a', 'ore-btn', 'Log in / Sign up'); go.href = '#account'; go.style.alignSelf = 'flex-start'; t.appendChild(go); }
    }
  };
  F.loadReplies = function (board, id, rl) {
    rl.innerHTML = '';
    ref(board).doc(id).collection('replies').orderBy('createdAt', 'asc').limit(200).get().then(function (snap) {
      rl.innerHTML = '';
      if (snap.empty) { rl.appendChild(el('div', 'dim', 'No replies yet.')); return; }
      snap.forEach(function (d) {
        var r = d.data(), box = el('div', 'ore-panel reply');
        box.appendChild(authorLine(r, '', true));
        box.appendChild(el('div', 'reply-body', r.body));
        if (me.user && (me.user.uid === r.authorUid || cfg.canModerate())) {
          var x = el('button', 'ore-btn danger small', 'Delete'); x.type = 'button'; x.style.alignSelf = 'flex-start';
          x.addEventListener('click', function () {
            if (!confirm('Delete this reply?')) return;
            ref(board).doc(id).collection('replies').doc(d.id).delete().then(function () {
              ref(board).doc(id).update({ replyCount: inc(-1) }).catch(function () {});
              F.loadReplies(board, id, rl);
            }).catch(function () { toast('Could not delete'); });
          });
          box.appendChild(x);
        }
        rl.appendChild(box);
      });
    }).catch(function () { rl.innerHTML = ''; rl.appendChild(el('div', 'dim', 'Could not load replies.')); });
  };
  F.submit = function (title, body, msg, btn) {
    var b = boardById(F.board);
    if (!canPostTo(b)) { setMsg(msg, "You can't post here.", 'err'); return; }
    if (!title || !body) { setMsg(msg, 'Please fill in both the title and the message.', 'err'); return; }
    if (Date.now() < F.cooldown) { setMsg(msg, 'Slow down a little before posting again.', 'err'); return; }
    btn.disabled = true;
    var fl = roleFlags();
    ref(b.id).add({
      title: title, body: body, authorUid: me.user.uid, authorName: myName(), staff: fl.staff, owner: fl.owner, dev: fl.dev,
      createdAt: srvTs(), replyCount: 0
    }).then(function () {
      F.cooldown = Date.now() + 8000;
      closeModal('postModal'); toast('Posted'); F.loadPosts();
      if (cfg.root === 'boards') loadHomeUpdates();
    }).catch(function () { setMsg(msg, 'Could not post. Please try again.', 'err'); }).then(function () { btn.disabled = false; });
  };
  F.ref = ref;
  return F;
}
var publicForum = makeForum({
  root: 'boards', boards: BOARDS, defaultBoard: 'general',
  ids: { notice: 'forumNotice', list: 'forumList', tabs: 'boardTabs', desc: 'boardDesc', newBtn: 'newPostBtn', posts: 'postList', thread: 'thread' },
  canPost: function (b) { return !b.staffOnly || isTeam(); },
  canView: function () { return true; },
  canModerate: function () { return isTeam(); },
  offlineText: 'The forum will appear here once it is connected.'
});
var staffForum = makeForum({
  root: 'staffBoards', boards: STAFF_BOARDS, defaultBoard: 'chat',
  ids: { notice: 'sfNotice', list: 'sfList', tabs: 'sfTabs', desc: 'sfDesc', newBtn: 'sfNewBtn', posts: 'sfPosts', thread: 'sfThread' },
  canPost: function (b) { return isTeam() && (!b.ownerOnly || me.admin); },
  canView: function () { return isTeam(); },
  canModerate: function () { return isTeam(); },
  offlineText: 'The staff forum will appear here once the site is connected.'
});
function forumControls() { publicForum.controls(); staffForum.controls(); }
$('postForm').addEventListener('submit', function (e) {
  e.preventDefault();
  (postForCtx || publicForum).submit($('postTitle').value.trim(), $('postBody').value.trim(), $('postMsg'), $('postSubmit'));
});

/* latest updates on the home page (always re-read, so deleted updates disappear) */
function loadHomeUpdates() {
  var box = $('homeUpdates');
  if (!fb.ready) { box.innerHTML = ''; box.appendChild(el('div', 'ore-panel empty-box', 'Update posts from the staff team will show up here.')); return; }
  publicForum.ref('updates').orderBy('createdAt', 'desc').limit(3).get().then(function (snap) {
    box.innerHTML = '';
    if (snap.empty) { box.appendChild(el('div', 'ore-panel empty-box', 'No updates yet — check back soon!')); return; }
    snap.forEach(function (d) {
      var data = d.data(), b = el('button', 'ore-panel mini-post'); b.type = 'button';
      b.appendChild(el('span', 't', data.title)); b.appendChild(el('span', 'd', fmtDate(data.createdAt)));
      b.addEventListener('click', function () { publicForum.pending = { board: 'updates', id: d.id, data: data }; if (location.hash === '#forum') publicForum.show(); else location.hash = '#forum'; });
      box.appendChild(b);
    });
  }).catch(function () {});
}
loadHomeUpdates();

/* =====================================================================
   Tickets: list, claim / unclaim, guided assistant
   ===================================================================== */
var tk = { filter: 'open', openId: null, cooldown: 0, pending: null };
function ticketsRef() { return fb.db.collection('tickets'); }
function claimTicket(id) { return ticketsRef().doc(id).update({ claimedBy: me.user.uid, claimedByName: myName(), updatedAt: srvTs() }); }
function unclaimTicket(id) { return ticketsRef().doc(id).update({ claimedBy: '', claimedByName: '', updatedAt: srvTs() }); }

function ticketsShow() {
  setMsg($('ticketNotice'), fbConfigured ? '' : NOT_CONNECTED, 'info');
  tk.openId = null; $('ticketThread').hidden = true; $('ticketMain').hidden = false;
  var p = tk.pending; tk.pending = null;
  renderTicketTabs();
  if (p) { openTicket(p.id, p.d); return; }
  loadTickets();
}
function renderTicketTabs() {
  var tabs = $('ticketTabs'); tabs.innerHTML = '';
  var set = isTeam() ? [['open', 'Open'], ['unclaimed', 'Unclaimed'], ['mine', 'Mine'], ['closed', 'Closed'], ['all', 'All']] : [['open', 'Open'], ['closed', 'Closed'], ['all', 'All']];
  if (!set.some(function (f) { return f[0] === tk.filter; })) tk.filter = 'open';
  set.forEach(function (f) {
    var b = el('button', 'tab' + (tk.filter === f[0] ? ' active' : ''), f[1]); b.type = 'button';
    b.addEventListener('click', function () { tk.filter = f[0]; renderTicketTabs(); loadTickets(); });
    tabs.appendChild(b);
  });
  $('ticketDesc').textContent = isTeam() ? 'You can see every ticket as a staff member.' : 'Your tickets are private. Only you and the staff can see them.';
}
function ticketMatches(d) {
  var closed = d.status === 'closed', claimed = d.claimedBy || '';
  switch (tk.filter) {
    case 'open': return !closed;
    case 'unclaimed': return !closed && !claimed;
    case 'mine': return !closed && me.user && claimed === me.user.uid;
    case 'closed': return closed;
    default: return true;
  }
}
function loadTickets() {
  var list = $('ticketList'); list.innerHTML = '';
  if (!fb.ready) { list.appendChild(el('div', 'ore-panel empty-box', fbConfigured ? 'Loading...' : 'Tickets will appear here once the site is connected.')); return; }
  if (!me.loaded) { list.appendChild(el('div', 'ore-panel empty-box', 'Loading...')); return; }
  if (!me.user) {
    var box = el('div', 'ore-panel empty-box', 'Log in to open a ticket or see your tickets.');
    var go = el('a', 'ore-btn', 'Log in / Sign up'); go.href = '#account'; go.style.marginTop = '14px'; box.appendChild(el('br')); box.appendChild(go);
    list.appendChild(box); return;
  }
  list.appendChild(el('div', 'ore-panel empty-box', 'Loading...'));
  var q = isTeam() ? ticketsRef().orderBy('updatedAt', 'desc').limit(150) : ticketsRef().where('authorUid', '==', me.user.uid).limit(100);
  q.get().then(function (snap) {
    var rows = [];
    snap.forEach(function (d) { rows.push({ id: d.id, d: d.data() }); });
    rows.sort(function (a, b) { return tsMs(b.d.updatedAt) - tsMs(a.d.updatedAt); });
    rows = rows.filter(function (r) { return ticketMatches(r.d); });
    list.innerHTML = '';
    if (!rows.length) { list.appendChild(el('div', 'ore-panel empty-box', 'No tickets here.')); return; }
    rows.forEach(function (r) { list.appendChild(ticketRow(r.id, r.d)); });
  }).catch(function () { list.innerHTML = ''; list.appendChild(el('div', 'ore-panel empty-box', 'Could not load tickets. Please try again later.')); });
}
function ticketTags(d, host) {
  host.appendChild(el('span', 'status-tag ' + (d.status === 'closed' ? 'closed' : 'open'), d.status === 'closed' ? 'Closed' : 'Open'));
  host.appendChild(el('span', 'cat-tag', TICKET_CATS[d.category] || 'Other'));
  if (d.claimedBy) host.appendChild(noTr(el('span', 'cat-tag claim', 'Claimed by ' + (d.claimedByName || 'staff'))));
}
function ticketRow(id, d) {
  var b = el('button', 'ore-panel post-row'); b.type = 'button';
  b.appendChild(el('div', 'post-title', d.subject || '(no subject)'));
  var m = el('div', 'post-meta'); ticketTags(d, m);
  if (isTeam()) m.appendChild(noTr(el('span', '', d.authorName || 'Unknown')));
  m.appendChild(el('span', '', 'Updated ' + timeAgo(d.updatedAt)));
  m.appendChild(el('span', '', (d.replyCount || 0) + ' replies'));
  b.appendChild(m);
  b.addEventListener('click', function () { openTicket(id, d); });
  return b;
}

/* ----- new ticket: guided assistant (a scripted question flow, not a real AI) ----- */
var AI_MENU = [
  { id: 'join', label: 'I cannot join the server' },
  { id: 'store', label: 'Store or purchase problem' },
  { id: 'report', label: 'Report a player' },
  { id: 'appeal', label: 'Ban or mute appeal' },
  { id: 'bug', label: 'Report a bug' },
  { id: 'other', label: 'Something else' }
];
var AI_FLOWS = {
  join: { cat: 'support', title: 'Cannot join', steps: [
    { id: 'edition', label: 'Edition', kind: 'choice', q: 'Which edition are you playing on?', choices: ['Java', 'Bedrock'] },
    { kind: 'tip', confirm: true, text: function (a) {
      return a.edition === 'Bedrock'
        ? 'Bedrock: add the server with the address play.solomc.net and set the port to 19132. Bedrock will not connect if the port is left on the default.'
        : 'Java: open Multiplayer, tap Add Server and enter play.solomc.net. Java uses port 25565 automatically, so leave the port empty.';
    } },
    { id: 'mc', label: 'Minecraft username', kind: 'mc', q: 'What is your Minecraft username?' },
    { id: 'error', label: 'Error shown', kind: 'long', q: 'What error or message do you see when you try to join?', optional: true },
    { id: 'device', label: 'Device and version', kind: 'text', q: 'What device and Minecraft version are you using?' }
  ] },
  store: { cat: 'store', title: 'Store problem', steps: [
    { id: 'mc', label: 'Minecraft username', kind: 'mc', q: 'What is the Minecraft username the purchase was for?' },
    { id: 'item', label: 'Item bought', kind: 'text', q: 'Which rank or item did you buy?' },
    { id: 'when', label: 'When', kind: 'text', q: 'When did you buy it? Include the date and your timezone if you know it.' },
    { id: 'ref', label: 'Transaction ID or email', kind: 'text', q: 'What is the transaction ID, or the email you used at checkout?', optional: true },
    { id: 'details', label: 'What went wrong', kind: 'long', q: 'What went wrong? For example: nothing arrived, wrong item, charged twice.' }
  ] },
  report: { cat: 'report', title: 'Player report', steps: [
    { id: 'target', label: 'Reported player', kind: 'mc', q: 'What is the username of the player you are reporting?' },
    { id: 'rule', label: 'Rule broken', kind: 'choice', q: 'What did they do?', choices: ['Hacking or cheating', 'Griefing or theft', 'Scamming', 'Harassment or toxicity', 'Exploiting a bug', 'Something else'] },
    { id: 'when', label: 'When and where', kind: 'text', q: 'When and where did it happen? Include the date, time and world or area if you can.' },
    { id: 'evidence', label: 'Evidence', kind: 'text', q: 'Paste a link to screenshots or a video if you have one.', optional: true },
    { id: 'details', label: 'Details', kind: 'long', q: 'Describe what happened.' },
    { id: 'mc', label: 'Your Minecraft username', kind: 'mc', q: 'What is your own Minecraft username?' }
  ] },
  appeal: { cat: 'appeal', title: 'Appeal', steps: [
    { id: 'mc', label: 'Minecraft username', kind: 'mc', q: 'What is the username that was punished?' },
    { id: 'type', label: 'Punishment', kind: 'choice', q: 'What kind of punishment is it?', choices: ['Ban', 'Mute', 'Other'] },
    { id: 'reason', label: 'Reason given', kind: 'text', q: 'What reason were you given for the punishment?' },
    { id: 'staff', label: 'Staff member or date', kind: 'text', q: 'Which staff member or date, if you know it?', optional: true },
    { id: 'why', label: 'Why it should be lifted', kind: 'long', q: 'Explain why you think the punishment should be lifted.' }
  ] },
  bug: { cat: 'other', title: 'Bug report', steps: [
    { id: 'what', label: 'What happened', kind: 'long', q: 'What happened, and what did you expect to happen?' },
    { id: 'steps', label: 'Steps to reproduce', kind: 'long', q: 'How can staff make it happen again? List the steps.' },
    { id: 'where', label: 'Where', kind: 'text', q: 'Where did it happen? Gamemode, world or coordinates.', optional: true },
    { id: 'mc', label: 'Minecraft username', kind: 'mc', q: 'What is your Minecraft username?', optional: true }
  ] },
  other: { cat: 'other', title: 'Support', steps: [
    { id: 'subject', label: 'Topic', kind: 'text', q: 'What is this about? Give it a short title.' },
    { id: 'details', label: 'Details', kind: 'long', q: 'Describe what you need help with.' },
    { id: 'mc', label: 'Minecraft username', kind: 'mc', q: 'What is your Minecraft username?', optional: true }
  ] }
};
var AI = { flow: null, i: 0, ans: {}, done: false };

function aiBubble(who, text) {
  var b = el('div', 'bubble ' + who, text); $('aiLog').appendChild(b);
  $('aiLog').scrollTop = $('aiLog').scrollHeight;
}
function aiControls() { var c = $('aiControls'); c.innerHTML = ''; return c; }
function aiStart() {
  AI = { flow: null, i: 0, ans: {}, done: false };
  $('aiLog').innerHTML = '';
  aiBubble('bot', 'Hi! I will ask a few quick questions so the staff team has everything they need. What do you need help with?');
  var c = aiControls();
  AI_MENU.forEach(function (m) {
    var b = el('button', 'ore-btn small gray', m.label); b.type = 'button';
    b.addEventListener('click', function () { aiBubble('me', m.label); AI.flow = AI_FLOWS[m.id]; AI.i = 0; aiStep(); });
    c.appendChild(b);
  });
}
function aiStep() {
  var f = AI.flow, s = f.steps[AI.i];
  if (!s) return aiFinish();
  var c = aiControls();
  if (s.kind === 'tip') {
    aiBubble('bot', s.text(AI.ans));
    if (!s.confirm) { AI.i++; return aiStep(); }
    aiBubble('bot', 'Did that fix it?');
    [['Yes, it works now', true], ['No, I still have the problem', false]].forEach(function (o) {
      var b = el('button', 'ore-btn small' + (o[1] ? '' : ' gray'), o[0]); b.type = 'button';
      b.addEventListener('click', function () {
        aiBubble('me', o[0]);
        if (o[1]) { aiBubble('bot', 'Great, glad you are in. No ticket needed. Have fun on SoloMC!'); AI.done = true; aiControls(); var x = el('button', 'ore-btn small', 'Close'); x.type = 'button'; x.addEventListener('click', function () { closeModal('ticketModal'); }); $('aiControls').appendChild(x); }
        else { AI.i++; aiStep(); }
      });
      c.appendChild(b);
    });
    return;
  }
  aiBubble('bot', s.q + (s.optional ? ' (optional)' : ''));
  if (s.kind === 'choice') {
    s.choices.forEach(function (ch) {
      var b = el('button', 'ore-btn small gray', ch); b.type = 'button';
      b.addEventListener('click', function () { aiAnswer(s, ch); });
      c.appendChild(b);
    });
    return;
  }
  var inp = s.kind === 'long' ? el('textarea') : el('input');
  if (s.kind !== 'long') inp.type = 'text';
  inp.maxLength = s.kind === 'long' ? 800 : (s.kind === 'mc' ? 17 : 200);
  inp.placeholder = s.kind === 'mc' ? 'Minecraft username' : 'Type your answer';
  if (s.kind === 'mc') { inp.autocapitalize = 'off'; inp.spellcheck = false; if (mcUser) inp.value = mcUser; }
  var err = el('div', 'msg'); err.style.flexBasis = '100%';
  var send = el('button', 'ore-btn small', 'Send'); send.type = 'button';
  function go() {
    var v = inp.value.trim();
    if (!v && !s.optional) { setMsg(err, 'Please answer this one.', 'err'); return; }
    if (v && s.kind === 'mc' && !MC_RE.test(v)) { setMsg(err, 'That does not look like a Minecraft username (3 to 16 letters, numbers or _).', 'err'); return; }
    aiAnswer(s, v);
  }
  send.addEventListener('click', go);
  inp.addEventListener('keydown', function (e) { if (e.key === 'Enter' && s.kind !== 'long') { e.preventDefault(); go(); } });
  c.appendChild(inp); c.appendChild(send);
  if (s.optional) { var sk = el('button', 'ore-btn small gray', 'Skip'); sk.type = 'button'; sk.addEventListener('click', function () { aiAnswer(s, ''); }); c.appendChild(sk); }
  c.appendChild(err);
  setTimeout(function () { inp.focus(); }, 0);
}
function aiAnswer(s, v) {
  AI.ans[s.id] = v;
  aiBubble('me', v || '(skipped)');
  AI.i++; aiStep();
}
function aiBuild() {
  var f = AI.flow, lines = ['Opened through the guided assistant.', ''];
  f.steps.forEach(function (s) {
    if (s.kind === 'tip') return;
    var v = AI.ans[s.id]; if (!v) return;
    lines.push(s.label + ': ' + v);
  });
  var subj = f.title + (AI.ans.mc ? ' - ' + AI.ans.mc : (AI.ans.target ? ' - ' + AI.ans.target : (AI.ans.subject ? ' - ' + AI.ans.subject : '')));
  return { category: f.cat, subject: subj.slice(0, 100), message: lines.join('\n').slice(0, 4000) };
}
function aiFinish() {
  var t = aiBuild();
  aiBubble('bot', 'Thanks! This is what I will send to the staff team:\n\n' + t.message.replace('Opened through the guided assistant.\n\n', ''));
  var c = aiControls();
  var open = el('button', 'ore-btn small', 'Open ticket'); open.type = 'button';
  open.addEventListener('click', function () { open.disabled = true; createTicket(t.subject, t.category, t.message, $('tkMsg')).then(function (ok) { if (!ok) { open.disabled = false; aiBubble('bot', 'Something went wrong while opening the ticket. Please try again.'); } }); });
  var again = el('button', 'ore-btn small gray', 'Start over'); again.type = 'button';
  again.addEventListener('click', aiStart);
  c.appendChild(open); c.appendChild(again);
}
function createTicket(subject, category, message, msgNode) {
  if (Date.now() < tk.cooldown) { setMsg(msgNode, 'Please wait a little before opening another ticket.', 'err'); toast('Please wait a little before opening another ticket'); return Promise.resolve(false); }
  var now = srvTs();
  return ticketsRef().add({
    subject: subject, category: category, message: message, authorUid: me.user.uid, authorName: myName(),
    status: 'open', claimedBy: '', claimedByName: '', createdAt: now, updatedAt: now, replyCount: 0
  }).then(function () {
    tk.cooldown = Date.now() + 20000;
    closeModal('ticketModal'); toast('Ticket opened'); tk.filter = 'open'; renderTicketTabs(); loadTickets();
    return true;
  }).catch(function () { setMsg(msgNode, 'Could not open the ticket. Please try again.', 'err'); return false; });
}
function openTicketModal() {
  var ai = site.ticketAi !== false;
  $('aiBox').hidden = !ai; $('ticketForm').hidden = ai; $('tkBack').hidden = !ai;
  setMsg($('tkMsg'), ''); $('ticketForm').reset();
  if (ai) aiStart();
  openModal('ticketModal');
}
$('newTicketBtn').addEventListener('click', function () {
  if (!fb.ready) { toast('Tickets not connected yet'); return; }
  if (!me.user) { location.hash = '#account'; toast('Log in to open a ticket'); return; }
  if (!me.username) { location.hash = '#account'; toast('Choose a username first'); return; }
  openTicketModal();
});
$('aiSkip').addEventListener('click', function () { $('aiBox').hidden = true; $('ticketForm').hidden = false; $('tkBack').hidden = false; });
$('tkBack').addEventListener('click', function () { $('ticketForm').hidden = true; $('aiBox').hidden = false; aiStart(); });
$('ticketForm').addEventListener('submit', function (e) {
  e.preventDefault();
  var subject = $('tkSubject').value.trim(), message = $('tkMessage').value.trim();
  if (!subject || !message) { setMsg($('tkMsg'), 'Please fill in the subject and the description.', 'err'); return; }
  $('tkSubmit').disabled = true;
  createTicket(subject, $('tkCat').value, message, $('tkMsg')).then(function () { $('tkSubmit').disabled = false; });
});

/* ----- ticket thread ----- */
function openTicket(id, d) {
  tk.openId = id;
  $('ticketMain').hidden = true;
  var t = $('ticketThread'); t.hidden = false; t.innerHTML = '';
  window.scrollTo(0, 0);
  var top = el('div', 'thread-top');
  var back = el('button', 'ore-btn gray small', '← Back'); back.type = 'button';
  back.addEventListener('click', function () { ticketsShow(); });
  top.appendChild(back); top.appendChild(el('h2', '', d.subject));
  t.appendChild(top);
  var meta = el('div', 'post-meta'); ticketTags(d, meta); t.appendChild(meta);
  t.appendChild(authorLine({ authorName: d.authorName, authorUid: d.authorUid, createdAt: d.createdAt }, '', isTeam()));
  t.appendChild(el('div', 'ore-panel thread-body', d.message));

  var actions = el('div', 'btn-row');
  var canManage = me.user && (me.user.uid === d.authorUid || isTeam());
  function refresh(next) { Object.keys(next).forEach(function (k) { d[k] = next[k]; }); openTicket(id, d); }
  if (isTeam()) {
    var mine = d.claimedBy && d.claimedBy === me.user.uid;
    if (!d.claimedBy) {
      var cl = el('button', 'ore-btn small', 'Claim ticket'); cl.type = 'button';
      cl.addEventListener('click', function () { cl.disabled = true; claimTicket(id).then(function () { toast('You claimed this ticket'); refresh({ claimedBy: me.user.uid, claimedByName: myName() }); }).catch(function () { toast('Could not claim it. Someone may have claimed it first.'); cl.disabled = false; }); });
      actions.appendChild(cl);
    } else if (mine || me.admin) {
      var uc = el('button', 'ore-btn small gray', 'Unclaim ticket'); uc.type = 'button';
      uc.addEventListener('click', function () { uc.disabled = true; unclaimTicket(id).then(function () { toast('Ticket unclaimed'); refresh({ claimedBy: '', claimedByName: '' }); }).catch(function () { toast('Could not unclaim'); uc.disabled = false; }); });
      actions.appendChild(uc);
    }
  }
  if (canManage) {
    var tog = el('button', 'ore-btn small ' + (d.status === 'closed' ? '' : 'gray'), d.status === 'closed' ? 'Reopen ticket' : 'Close ticket'); tog.type = 'button';
    tog.addEventListener('click', function () {
      var next = d.status === 'closed' ? 'open' : 'closed';
      var upd = { status: next, updatedAt: srvTs(), closedBy: next === 'closed' && isTeam() ? me.user.uid : '', closedByName: next === 'closed' && isTeam() ? myName() : '' };
      ticketsRef().doc(id).update(upd).then(function () { toast('Ticket ' + next); refresh({ status: next, closedBy: upd.closedBy, closedByName: upd.closedByName }); }).catch(function () { toast('Could not update the ticket'); });
    });
    actions.appendChild(tog);
  }
  if (me.admin) {
    var del = el('button', 'ore-btn danger small', 'Delete ticket'); del.type = 'button';
    del.addEventListener('click', function () {
      if (!confirm('Delete this ticket and all its messages?')) return;
      ticketsRef().doc(id).collection('messages').get().then(function (snap) {
        var ps = []; snap.forEach(function (m) { ps.push(ticketsRef().doc(id).collection('messages').doc(m.id).delete()); });
        return Promise.all(ps);
      }).then(function () { return ticketsRef().doc(id).delete(); })
        .then(function () { toast('Ticket deleted'); ticketsShow(); }).catch(function () { toast('Could not delete'); });
    });
    actions.appendChild(del);
  }
  if (actions.childNodes.length) t.appendChild(actions);

  t.appendChild(el('h3', '', 'Messages'));
  var rl = el('div', 'post-list'); t.appendChild(rl);
  loadTicketMessages(id, rl);

  var canSend = me.user && me.username && (isTeam() || (me.user.uid === d.authorUid && d.status !== 'closed'));
  if (canSend) {
    var form = el('form', 'form'); form.noValidate = true;
    var ta = el('textarea'); ta.maxLength = 3000; ta.placeholder = 'Write a message...'; ta.setAttribute('aria-label', 'Message');
    var msg = el('div', 'msg'); var send = el('button', 'ore-btn', 'Send'); send.type = 'submit';
    form.appendChild(ta); form.appendChild(msg); form.appendChild(send);
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var body = ta.value.trim();
      if (!body) { setMsg(msg, 'Write something first.', 'err'); return; }
      send.disabled = true;
      var fl = roleFlags();
      ticketsRef().doc(id).collection('messages').add({ body: body, authorUid: me.user.uid, authorName: myName(), staff: fl.staff, owner: fl.owner, dev: fl.dev, createdAt: srvTs() }).then(function () {
        ticketsRef().doc(id).update({ updatedAt: srvTs(), replyCount: inc(1) }).catch(function () {});
        ta.value = ''; setMsg(msg, ''); loadTicketMessages(id, rl);
      }).catch(function () { setMsg(msg, 'Could not send your message.', 'err'); }).then(function () { send.disabled = false; });
    });
    t.appendChild(form);
  } else if (d.status === 'closed') {
    var h = el('div', 'msg show info'); h.textContent = 'This ticket is closed.' + (me.user && me.user.uid === d.authorUid ? ' Reopen it to send another message.' : ''); t.appendChild(h);
  }
}
function loadTicketMessages(id, rl) {
  rl.innerHTML = '';
  ticketsRef().doc(id).collection('messages').orderBy('createdAt', 'asc').limit(200).get().then(function (snap) {
    rl.innerHTML = '';
    if (snap.empty) { rl.appendChild(el('div', 'dim', 'No replies yet. Staff will answer here.')); return; }
    snap.forEach(function (d) {
      var r = d.data(), box = el('div', 'ore-panel reply');
      box.appendChild(authorLine(r, '', true));
      box.appendChild(el('div', 'reply-body', r.body));
      rl.appendChild(box);
    });
  }).catch(function () { rl.innerHTML = ''; rl.appendChild(el('div', 'dim', 'Could not load messages.')); });
}

/* =====================================================================
   Ticket watch: live badges + alerts for staff
   ===================================================================== */
var watch = { unsub: null, first: true, open: [] };
function stopTicketWatch() { if (watch.unsub) { try { watch.unsub(); } catch (e) {} } watch.unsub = null; watch.open = []; badgeCounts.tickets = 0; badgeCounts.staff = 0; }
function startTicketWatch() {
  stopTicketWatch();
  if (!fb.ready || !me.user || !isTeam()) return;
  watch.first = true;
  watch.unsub = ticketsRef().where('status', '==', 'open').onSnapshot(function (snap) {
    var open = []; snap.forEach(function (d) { open.push({ id: d.id, d: d.data() }); });
    watch.open = open;
    var un = open.filter(function (t) { return !t.d.claimedBy; }).length;
    badgeCounts.tickets = un; badgeCounts.staff = un; updateBadges();
    if (!watch.first && snap.docChanges) {
      snap.docChanges().forEach(function (ch) {
        if (ch.type === 'added') {
          var d = ch.doc.data();
          if (d.authorUid !== me.user.uid) notifyTicket(d);
        }
      });
    }
    watch.first = false;
    if (currentView() === 'staff') renderQueue();
  }, function (e) { logErr('ticket watch: ' + (e && e.message)); });
}
function notifyTicket(d) {
  toast('New ticket: ' + (d.subject || 'untitled'));
  try {
    if ('Notification' in window && Notification.permission === 'granted') new Notification('New SoloMC ticket', { body: (d.subject || '') + (d.authorName ? ' from ' + d.authorName : '') });
  } catch (e) {}
}

/* =====================================================================
   Staff area
   ===================================================================== */
function staffShow() {
  if (!isTeam()) return;
  $('notifBtn').hidden = !('Notification' in window) || Notification.permission === 'granted';
  renderQueue();
  staffForum.show();
}
$('notifBtn').addEventListener('click', function () {
  if (!('Notification' in window)) return;
  Notification.requestPermission().then(function (p) { toast(p === 'granted' ? 'Desktop alerts enabled' : 'Alerts not enabled'); $('notifBtn').hidden = p === 'granted'; });
});
function renderQueue() {
  var box = $('queueList'); box.innerHTML = '';
  var rows = watch.open.filter(function (t) { return !t.d.claimedBy; }).sort(function (a, b) { return tsMs(b.d.createdAt) - tsMs(a.d.createdAt); });
  $('queueInfo').textContent = watch.unsub ? (rows.length ? rows.length + ' open ticket' + (rows.length === 1 ? '' : 's') + ' waiting for someone to claim. This list updates live while this page is open.' : 'Nothing waiting. New tickets show up here and in a notification at the top.') : 'Loading...';
  rows.slice(0, 12).forEach(function (t) {
    var row = el('div', 'ore-inset queue-row');
    var meta = el('div', 'meta');
    meta.appendChild(el('span', 't', t.d.subject || '(no subject)'));
    var line = el('span', 'dim'); line.textContent = (TICKET_CATS[t.d.category] || 'Other') + ' · ' + (t.d.authorName || 'Unknown') + ' · ' + timeAgo(t.d.createdAt);
    meta.appendChild(line); row.appendChild(meta);
    var btns = el('div', 'btn-row');
    var open = el('button', 'ore-btn small gray', 'Open'); open.type = 'button';
    open.addEventListener('click', function () { tk.pending = { id: t.id, d: t.d }; location.hash = '#tickets'; });
    var cl = el('button', 'ore-btn small', 'Claim'); cl.type = 'button';
    cl.addEventListener('click', function () { cl.disabled = true; claimTicket(t.id).then(function () { toast('Claimed'); }).catch(function () { toast('Could not claim it'); cl.disabled = false; }); });
    btns.appendChild(open); btns.appendChild(cl); row.appendChild(btns);
    box.appendChild(row);
  });
}

/* =====================================================================
   Mail (owner sends, staff reply)
   ===================================================================== */
var mailState = { roster: [], seenBase: null };
function mailsRef() { return fb.db.collection('mails'); }
function mailSeenKey() { return 'solomc_mailseen_' + (me.user ? me.user.uid : ''); }
function fetchMyMails() {
  if (me.admin) return mailsRef().orderBy('createdAt', 'desc').limit(50).get().then(function (s) { var r = []; s.forEach(function (d) { r.push({ id: d.id, d: d.data() }); }); return r; });
  return Promise.all([
    mailsRef().where('toGroup', '==', 'staff').get(),
    mailsRef().where('recipients', 'array-contains', me.user.uid).get()
  ]).then(function (res) {
    var map = {};
    res.forEach(function (s) { s.forEach(function (d) { map[d.id] = { id: d.id, d: d.data() }; }); });
    return Object.keys(map).map(function (k) { return map[k]; }).sort(function (a, b) { return tsMs(b.d.createdAt) - tsMs(a.d.createdAt); });
  });
}
function loadMailBadge() {
  if (!fb.ready || !me.user || !me.staff || me.admin) { badgeCounts.mail = 0; updateBadges(); return; }
  var seen = parseInt(lsGet(mailSeenKey()) || '0', 10) || 0;
  fetchMyMails().then(function (rows) { badgeCounts.mail = rows.filter(function (r) { return tsMs(r.d.createdAt) > seen; }).length; updateBadges(); }).catch(function () {});
}
function mailShow() {
  if (!isTeam()) return;
  $('mailThread').hidden = true; $('mailMain').hidden = false;
  setMsg($('mailNotice'), '');
  $('mailLead').textContent = me.admin ? 'Send mail to the whole staff team or to specific staff. Staff can only reply to you.' : 'Mail from the owner. You can reply to each mail, and only the owner sees your replies.';
  $('mailCompose').hidden = !me.admin;
  $('mailListTitle').textContent = me.admin ? 'Sent mail' : 'Inbox';
  if (me.admin) buildMailTo();
  loadMails();
}
function buildMailTo() {
  var box = $('mailTo'); box.innerHTML = '<div class="dim">Loading staff...</div>';
  loadRoster().then(function (rows) {
    mailState.roster = rows;
    box.innerHTML = '';
    var g = el('label', 'pick'); var gc = el('input'); gc.type = 'checkbox'; gc.id = 'mailGroup'; gc.checked = true;
    g.appendChild(gc); g.appendChild(el('span', '', 'Staff group (every account registered as staff)')); box.appendChild(g);
    var inds = [];
    rows.forEach(function (r) {
      var l = el('label', 'pick'); var c = el('input'); c.type = 'checkbox'; c.value = r.uid; c.disabled = true; inds.push(c);
      l.appendChild(c); l.appendChild(noTr(el('span', '', r.name + (r.handle ? ' (@' + r.handle + ')' : '')))); box.appendChild(l);
    });
    gc.addEventListener('change', function () { inds.forEach(function (c) { c.disabled = gc.checked; if (gc.checked) c.checked = false; }); });
  }).catch(function () { box.innerHTML = '<div class="dim">Could not load staff.</div>'; });
}
$('mailForm').addEventListener('submit', function (e) {
  e.preventDefault();
  if (!me.admin) return;
  var subject = $('mailSubject').value.trim(), body = $('mailBody').value.trim(), msg = $('mailMsg');
  var group = $('mailGroup') && $('mailGroup').checked;
  var uids = []; $('mailTo').querySelectorAll('input[type=checkbox]').forEach(function (c) { if (c.value && c.checked) uids.push(c.value); });
  if (!subject || !body) { setMsg(msg, 'Add a subject and a message.', 'err'); return; }
  if (!group && !uids.length) { setMsg(msg, 'Pick who should get this mail.', 'err'); return; }
  $('mailSend').disabled = true;
  mailsRef().add({ subject: subject, body: body, fromUid: me.user.uid, fromName: myName(), toGroup: group ? 'staff' : '', recipients: group ? [] : uids, createdAt: srvTs() })
    .then(function () { $('mailSubject').value = ''; $('mailBody').value = ''; setMsg(msg, 'Mail sent.', 'ok'); loadMails(); })
    .catch(function () { setMsg(msg, 'Could not send. Check that the new rules are published.', 'err'); }).then(function () { $('mailSend').disabled = false; });
});
$('mailRefresh').addEventListener('click', function () { loadMails(); });
function loadMails() {
  var list = $('mailList'); list.innerHTML = ''; list.appendChild(el('div', 'ore-panel empty-box', 'Loading...'));
  fetchMyMails().then(function (rows) {
    list.innerHTML = '';
    if (mailState.seenBase === null) mailState.seenBase = parseInt(lsGet(mailSeenKey()) || '0', 10) || 0;
    var seen = mailState.seenBase;
    if (!rows.length) { list.appendChild(el('div', 'ore-panel empty-box', me.admin ? 'You have not sent any mail yet.' : 'No mail yet.')); }
    var newest = seen;
    rows.forEach(function (r) {
      var b = el('button', 'ore-panel post-row'); b.type = 'button';
      var isNew = !me.admin && tsMs(r.d.createdAt) > seen;
      var title = el('div', 'post-title', r.d.subject); if (isNew) { var nb = el('span', 'nbadge', 'NEW'); title.appendChild(nb); }
      b.appendChild(title);
      var m = el('div', 'post-meta'); m.appendChild(noTr(el('span', '', 'From ' + (r.d.fromName || 'Owner')))); m.appendChild(el('span', 'staff-tag owner', 'Owner'));
      m.appendChild(el('span', '', fmtDate(r.d.createdAt)));
      m.appendChild(el('span', '', r.d.toGroup === 'staff' ? 'To: all staff' : 'To: ' + ((r.d.recipients || []).length) + ' staff'));
      b.appendChild(m);
      b.addEventListener('click', function () { openMail(r.id, r.d); });
      list.appendChild(b);
      if (tsMs(r.d.createdAt) > newest) newest = tsMs(r.d.createdAt);
    });
    if (!me.admin && rows.length) { lsSet(mailSeenKey(), String(Math.max(newest, Date.now() - 1))); badgeCounts.mail = 0; updateBadges(); }
  }).catch(function () { list.innerHTML = ''; list.appendChild(el('div', 'ore-panel empty-box', 'Could not load mail.')); });
}
function mailConv(host, mailId, withUid, name, replies, canReplyHere) {
  var box = el('div', 'ore-inset conv');
  if (name) box.appendChild(noTr(el('h4', '', 'Conversation with ' + name)));
  var msgs = el('div', 'post-list'); box.appendChild(msgs);
  function render(list) {
    msgs.innerHTML = '';
    if (!list.length) msgs.appendChild(el('div', 'dim', 'No replies yet.'));
    list.forEach(function (r) { var b = el('div', 'ore-panel reply'); b.appendChild(authorLine({ authorName: r.authorName, authorUid: r.authorUid, owner: r.owner, staff: !r.owner, createdAt: r.createdAt }, '', true)); b.appendChild(el('div', 'reply-body', r.body)); msgs.appendChild(b); });
  }
  render(replies);
  if (canReplyHere) {
    var form = el('form', 'form'); form.noValidate = true;
    var ta = el('textarea'); ta.maxLength = 3000; ta.placeholder = me.admin ? 'Reply to ' + name + '...' : 'Write a reply to the owner...'; ta.style.minHeight = '80px';
    var msg = el('div', 'msg'); var send = el('button', 'ore-btn small', 'Send reply'); send.type = 'submit'; send.style.alignSelf = 'flex-start';
    form.appendChild(ta); form.appendChild(msg); form.appendChild(send);
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var body = ta.value.trim(); if (!body) { setMsg(msg, 'Write something first.', 'err'); return; }
      send.disabled = true;
      var doc = { body: body, authorUid: me.user.uid, authorName: myName(), owner: !!me.admin, with: withUid, createdAt: srvTs() };
      mailsRef().doc(mailId).collection('replies').add(doc).then(function () {
        replies.push({ body: body, authorUid: me.user.uid, authorName: myName(), owner: !!me.admin, createdAt: { toDate: function () { return new Date(); }, _t: Date.now() } });
        ta.value = ''; setMsg(msg, ''); render(replies);
      }).catch(function () { setMsg(msg, 'Could not send your reply.', 'err'); }).then(function () { send.disabled = false; });
    });
    box.appendChild(form);
  }
  host.appendChild(box);
}
function openMail(id, d) {
  $('mailMain').hidden = true;
  var t = $('mailThread'); t.hidden = false; t.innerHTML = '';
  window.scrollTo(0, 0);
  var top = el('div', 'thread-top');
  var back = el('button', 'ore-btn gray small', '← Back'); back.type = 'button';
  back.addEventListener('click', function () { mailShow(); });
  top.appendChild(back); top.appendChild(el('h2', '', d.subject)); t.appendChild(top);
  var m = el('div', 'post-meta'); m.appendChild(noTr(el('span', '', 'From ' + (d.fromName || 'Owner')))); m.appendChild(el('span', 'staff-tag owner', 'Owner')); m.appendChild(el('span', '', fmtDate(d.createdAt))); t.appendChild(m);
  t.appendChild(el('div', 'ore-panel thread-body', d.body));
  if (me.admin) {
    var del = el('button', 'ore-btn danger small', 'Delete mail'); del.type = 'button'; del.style.alignSelf = 'flex-start';
    del.addEventListener('click', function () {
      if (!confirm('Delete this mail and all replies?')) return;
      mailsRef().doc(id).collection('replies').get().then(function (s) { var ps = []; s.forEach(function (r) { ps.push(mailsRef().doc(id).collection('replies').doc(r.id).delete()); }); return Promise.all(ps); })
        .then(function () { return mailsRef().doc(id).delete(); }).then(function () { toast('Mail deleted'); mailShow(); }).catch(function () { toast('Could not delete'); });
    });
    t.appendChild(del);
  }
  t.appendChild(el('h3', '', 'Replies'));
  var host = el('div', 'owner-list'); t.appendChild(host); host.appendChild(el('div', 'dim', 'Loading...'));
  var q = me.admin ? mailsRef().doc(id).collection('replies').orderBy('createdAt', 'asc').limit(500) : mailsRef().doc(id).collection('replies').where('with', '==', me.user.uid);
  q.get().then(function (snap) {
    var all = []; snap.forEach(function (r) { all.push(r.data()); });
    all.sort(function (a, b) { return tsMs(a.createdAt) - tsMs(b.createdAt); });
    host.innerHTML = '';
    if (me.admin) {
      var groups = {}; all.forEach(function (r) { (groups[r.with] = groups[r.with] || []).push(r); });
      var keys = Object.keys(groups);
      if (!keys.length) host.appendChild(el('div', 'dim', 'No replies yet.'));
      keys.forEach(function (uid) {
        var arr = groups[uid], first = arr.filter(function (x) { return !x.owner; })[0];
        mailConv(host, id, uid, first ? first.authorName : 'staff', arr, true);
      });
    } else {
      mailConv(host, id, me.user.uid, '', all, true);
    }
  }).catch(function () { host.innerHTML = ''; host.appendChild(el('div', 'dim', 'Could not load replies.')); });
}

/* =====================================================================
   Roster + activity checks (used by Owner panel and Mail)
   ===================================================================== */
function loadRoster() {
  return fb.db.collection('staff').get().then(function (snap) {
    var ids = []; snap.forEach(function (d) { ids.push(d.id); });
    return Promise.all(ids.map(function (uid) {
      return Promise.all([
        fb.db.collection('profiles').doc(uid).get().catch(function () { return null; }),
        me.admin ? fb.db.collection('staffStatus').doc(uid).get().catch(function () { return null; }) : Promise.resolve(null)
      ]).then(function (r) {
        var p = (r[0] && r[0].exists && r[0].data()) || {}, s = (r[1] && r[1].exists && r[1].data()) || null;
        return { uid: uid, name: p.displayName || p.username || (uid.slice(0, 6) + '…'), handle: p.username || '', seen: s && s.lastSeen };
      });
    }));
  });
}
function checksRef() { return fb.db.collection('activityChecks'); }
$('checkForm').addEventListener('submit', function (e) {
  e.preventDefault();
  var title = $('checkTitle').value.trim(), note = $('checkNote').value.trim(), msg = $('checkMsg');
  if (!title) { setMsg(msg, 'Add a title.', 'err'); return; }
  checksRef().add({ title: title, note: note, active: true, createdAt: srvTs() })
    .then(function () { $('checkForm').reset(); setMsg(msg, ''); toast('Activity check started'); loadChecks(); })
    .catch(function () { setMsg(msg, 'Could not create the check.', 'err'); });
});
function loadChecks() {
  var box = $('checkList'); box.innerHTML = ''; box.appendChild(el('div', 'dim', 'Loading...'));
  Promise.all([loadRoster(), checksRef().orderBy('createdAt', 'desc').limit(20).get()]).then(function (r) {
    var roster = r[0], snap = r[1];
    box.innerHTML = '';
    if (snap.empty) { box.appendChild(el('div', 'dim', 'No activity checks yet.')); return; }
    snap.forEach(function (cd) {
      var c = cd.data(), card = el('div', 'ore-inset check-box');
      var head = el('div', 'owner-head');
      head.appendChild(el('h4', '', c.title));
      head.appendChild(el('span', 'status-tag ' + (c.active ? 'open' : 'closed'), c.active ? 'Active' : 'Closed'));
      card.appendChild(head);
      card.appendChild(el('div', 'dim', fmtDate(c.createdAt)));
      if (c.note) card.appendChild(el('div', 'reply-body', c.note));
      var holder = el('div', 'owner-list'); card.appendChild(holder);
      holder.appendChild(el('div', 'dim', 'Loading responses...'));
      checksRef().doc(cd.id).collection('responses').get().then(function (rs) {
        var got = {}; rs.forEach(function (x) { got[x.id] = x.data(); });
        holder.innerHTML = '';
        var done = roster.filter(function (s) { return got[s.uid]; }), todo = roster.filter(function (s) { return !got[s.uid]; });
        holder.appendChild(el('div', '', 'Responded: ' + done.length + ' / ' + roster.length));
        var d1 = el('div', 'chip-row');
        done.forEach(function (s) { d1.appendChild(noTr(el('span', 'chip done', s.name))); });
        holder.appendChild(d1);
        done.forEach(function (s) {
          var rr = got[s.uid];
          if (rr && rr.note) { var line = el('div', 'dim'); line.textContent = s.name + ' (' + timeAgo(rr.createdAt) + '): ' + rr.note; holder.appendChild(line); }
        });
        if (todo.length) {
          holder.appendChild(el('div', '', 'Not responded:'));
          var d2 = el('div', 'chip-row');
          todo.forEach(function (s) { d2.appendChild(noTr(el('span', 'chip todo', s.name))); });
          holder.appendChild(d2);
        }
      }).catch(function () { holder.innerHTML = ''; holder.appendChild(el('div', 'dim', 'Could not load responses.')); });
      var row = el('div', 'btn-row');
      var tog = el('button', 'ore-btn small gray', c.active ? 'Close check' : 'Reopen check'); tog.type = 'button';
      tog.addEventListener('click', function () { checksRef().doc(cd.id).update({ active: !c.active }).then(loadChecks).catch(function () { toast('Could not update'); }); });
      var del = el('button', 'ore-btn small danger', 'Delete'); del.type = 'button';
      del.addEventListener('click', function () {
        if (!confirm('Delete this activity check and its responses?')) return;
        checksRef().doc(cd.id).collection('responses').get().then(function (rs) {
          var ps = []; rs.forEach(function (x) { ps.push(checksRef().doc(cd.id).collection('responses').doc(x.id).delete()); });
          return Promise.all(ps);
        }).then(function () { return checksRef().doc(cd.id).delete(); }).then(loadChecks).catch(function () { toast('Could not delete'); });
      });
      row.appendChild(tog); row.appendChild(del); card.appendChild(row);
      box.appendChild(card);
    });
  }).catch(function () { box.innerHTML = ''; box.appendChild(el('div', 'dim', 'Could not load activity checks.')); });
}
function loadActChecks() {
  var wrap = $('actChecks'), box = $('actList');
  if (!fb.ready || !me.user || !me.staff) { wrap.hidden = true; return; }
  wrap.hidden = false; box.innerHTML = ''; box.appendChild(el('div', 'dim', 'Loading...'));
  checksRef().where('active', '==', true).get().then(function (snap) {
    box.innerHTML = '';
    if (snap.empty) { box.appendChild(el('div', 'dim', 'No activity checks right now.')); return; }
    snap.forEach(function (cd) {
      var c = cd.data(), card = el('div', 'ore-inset check-box');
      card.appendChild(el('h4', '', c.title));
      if (c.note) card.appendChild(el('div', 'reply-body dim', c.note));
      var respRef = checksRef().doc(cd.id).collection('responses').doc(me.user.uid);
      var area = el('div', 'owner-list'); card.appendChild(area);
      respRef.get().then(function (rs) {
        area.innerHTML = '';
        var prev = rs.exists ? rs.data() : null;
        if (prev) area.appendChild(el('div', 'chip done', '✓ You responded ' + timeAgo(prev.createdAt)));
        var ta = el('textarea'); ta.maxLength = 500; ta.style.minHeight = '60px'; ta.placeholder = 'Optional note'; ta.value = prev ? (prev.note || '') : '';
        var go = el('button', 'ore-btn small', prev ? 'Update response' : "I'm active"); go.type = 'button';
        go.addEventListener('click', function () {
          go.disabled = true;
          respRef.set({ username: me.username, note: ta.value.trim(), createdAt: srvTs() })
            .then(function () { toast('Response sent'); loadActChecks(); })
            .catch(function () { toast('Could not send'); go.disabled = false; });
        });
        area.appendChild(ta); area.appendChild(go);
      }).catch(function () { area.innerHTML = ''; area.appendChild(el('div', 'dim', 'Could not load.')); });
      box.appendChild(card);
    });
  }).catch(function () { box.innerHTML = ''; box.appendChild(el('div', 'dim', 'Could not load activity checks.')); });
}

/* =====================================================================
   Owner panel
   ===================================================================== */
var own = { tickets: [] };
function ownerShow() {
  if (!me.admin) return;
  buildBannerEditor($('ownBanner'));
  loadOwnerData();
  loadSeen(); loadChecks(); loadModFeed();
}
function loadOwnerData() {
  $('ownStats').innerHTML = ''; $('perfList').innerHTML = ''; $('ownTickets').innerHTML = '';
  $('ownTickets').appendChild(el('div', 'dim', 'Loading...'));
  Promise.all([
    ticketsRef().orderBy('updatedAt', 'desc').limit(200).get(),
    fb.db.collection('staff').get(),
    checksRef().where('active', '==', true).get()
  ]).then(function (r) {
    var rows = []; r[0].forEach(function (d) { rows.push({ id: d.id, d: d.data() }); });
    own.tickets = rows;
    var open = rows.filter(function (t) { return t.d.status !== 'closed'; });
    var cards = [
      ['Open tickets', open.length], ['Unclaimed', open.filter(function (t) { return !t.d.claimedBy; }).length],
      ['Closed tickets', rows.length - open.length], ['Staff accounts', r[1].size === undefined ? r[1].docs.length : r[1].size],
      ['Active checks', r[2].size === undefined ? r[2].docs.length : r[2].size], ['Tickets loaded', rows.length]
    ];
    var box = $('ownStats'); box.innerHTML = '';
    cards.forEach(function (c) { var d = el('div', 'ore-inset stat-card'); d.appendChild(el('small', '', c[0])); d.appendChild(el('b', '', String(c[1]))); box.appendChild(d); });
    // performance
    var perf = {};
    rows.forEach(function (t) {
      if (t.d.claimedBy && t.d.status !== 'closed') { var p = perf[t.d.claimedBy] = perf[t.d.claimedBy] || { name: t.d.claimedByName || 'Staff', claimed: 0, closed: 0 }; p.claimed++; }
      if (t.d.closedBy) { var q = perf[t.d.closedBy] = perf[t.d.closedBy] || { name: t.d.closedByName || 'Staff', claimed: 0, closed: 0 }; q.closed++; }
    });
    var pl = $('perfList'); pl.innerHTML = '';
    var keys = Object.keys(perf);
    if (!keys.length) pl.appendChild(el('div', 'dim', 'No claimed or closed tickets yet.'));
    else {
      var h = el('div', 'perf-row head'); h.appendChild(el('span', '', 'Staff')); h.appendChild(el('span', '', 'Claimed now')); h.appendChild(el('span', '', 'Closed')); pl.appendChild(h);
      keys.sort(function (a, b) { return perf[b].closed - perf[a].closed; }).forEach(function (k) {
        var row = el('div', 'ore-inset perf-row'); row.appendChild(noTr(el('span', '', perf[k].name))); row.appendChild(el('span', '', String(perf[k].claimed))); row.appendChild(el('span', '', String(perf[k].closed))); pl.appendChild(row);
      });
    }
    // recent tickets
    var tl = $('ownTickets'); tl.innerHTML = '';
    if (!rows.length) tl.appendChild(el('div', 'dim', 'No tickets yet.'));
    rows.slice(0, 10).forEach(function (t) {
      var row = el('div', 'ore-inset queue-row'); var meta = el('div', 'meta');
      meta.appendChild(el('span', 't', t.d.subject || '(no subject)'));
      var tags = el('div', 'post-meta'); ticketTags(t.d, tags); tags.appendChild(noTr(el('span', '', t.d.authorName || 'Unknown'))); tags.appendChild(el('span', '', timeAgo(t.d.updatedAt)));
      meta.appendChild(tags); row.appendChild(meta);
      var open2 = el('button', 'ore-btn small gray', 'Open'); open2.type = 'button';
      open2.addEventListener('click', function () { tk.pending = { id: t.id, d: t.d }; location.hash = '#tickets'; });
      row.appendChild(open2); tl.appendChild(row);
    });
  }).catch(function () { $('ownTickets').innerHTML = ''; $('ownTickets').appendChild(el('div', 'dim', 'Could not load overview data. Check that the new rules are published.')); });
}
$('ownRefresh').addEventListener('click', function () { if (me.admin) { loadOwnerData(); loadSeen(); loadChecks(); loadModFeed(); } });

function loadSeen() {
  var box = $('seenList'); box.innerHTML = ''; box.appendChild(el('div', 'dim', 'Loading...'));
  loadRoster().then(function (rows) {
    box.innerHTML = '';
    if (!rows.length) { box.appendChild(el('div', 'dim', 'No staff accounts found.')); return; }
    rows.sort(function (a, b) { return tsMs(b.seen) - tsMs(a.seen); });
    rows.forEach(function (r) {
      var row = el('div', 'ore-inset owner-row');
      row.appendChild(noTr(el('span', 'who', r.name + (r.handle ? ' (@' + r.handle + ')' : ''))));
      row.appendChild(el('span', 'dim', r.seen ? ('Last seen ' + timeAgo(r.seen) + ' · ' + fmtDate(r.seen)) : 'Never seen'));
      var rm = el('button', 'ore-btn small danger', 'Remove staff'); rm.type = 'button';
      rm.addEventListener('click', function () {
        if (!confirm('Remove staff access from ' + r.name + '?')) return;
        fb.db.collection('staff').doc(r.uid).delete().then(function () { toast('Staff access removed'); loadSeen(); }).catch(function () { toast('Could not remove'); });
      });
      row.appendChild(rm);
      box.appendChild(row);
    });
  }).catch(function () { box.innerHTML = ''; box.appendChild(el('div', 'dim', 'Could not load staff.')); });
}
$('seenRefresh').addEventListener('click', loadSeen);
$('staffAddBtn').addEventListener('click', function () {
  var v = $('staffAddInput').value.trim(), msg = $('staffAddMsg');
  if (!v) { setMsg(msg, 'Type a username or an account ID.', 'err'); return; }
  setMsg(msg, 'Looking...', 'info');
  var find;
  if (v.length > 20) find = fb.db.collection('profiles').doc(v).get().then(function (s) { return s.exists ? [{ id: s.id, d: s.data() }] : []; });
  else find = fb.db.collection('profiles').where('username', '==', v).limit(5).get().then(function (s) { var r = []; s.forEach(function (d) { r.push({ id: d.id, d: d.data() }); }); return r; });
  find.then(function (rows) {
    if (!rows.length) { setMsg(msg, 'No account found with that username. They need to sign up and pick a username first.', 'err'); return; }
    if (rows.length > 1) { setMsg(msg, 'More than one account uses that username. Use the account ID instead.', 'err'); return; }
    var r = rows[0];
    if (!confirm('Give staff access to @' + (r.d.username || r.id) + '?')) { setMsg(msg, ''); return; }
    return fb.db.collection('staff').doc(r.id).set({ role: 'staff' }).then(function () { setMsg(msg, '@' + r.d.username + ' is now staff.', 'ok'); $('staffAddInput').value = ''; loadSeen(); });
  }).catch(function () { setMsg(msg, 'Could not add staff. Check that the new rules are published.', 'err'); });
});

function loadModFeed() {
  var box = $('modFeed'); box.innerHTML = ''; box.appendChild(el('div', 'dim', 'Loading...'));
  Promise.all(BOARDS.map(function (b) {
    return publicForum.ref(b.id).orderBy('createdAt', 'desc').limit(5).get().then(function (s) { var r = []; s.forEach(function (d) { r.push({ board: b, id: d.id, d: d.data() }); }); return r; });
  })).then(function (all) {
    var rows = [].concat.apply([], all).sort(function (a, b) { return tsMs(b.d.createdAt) - tsMs(a.d.createdAt); }).slice(0, 15);
    box.innerHTML = '';
    if (!rows.length) { box.appendChild(el('div', 'dim', 'No forum posts yet.')); return; }
    rows.forEach(function (r) {
      var row = el('div', 'ore-inset queue-row'); var meta = el('div', 'meta');
      meta.appendChild(el('span', 't', r.d.title));
      var line = el('div', 'post-meta'); line.appendChild(el('span', 'cat-tag', r.board.name)); line.appendChild(noTr(el('span', '', r.d.authorName || 'Unknown'))); line.appendChild(el('span', '', timeAgo(r.d.createdAt))); meta.appendChild(line); row.appendChild(meta);
      var btns = el('div', 'btn-row');
      var op = el('button', 'ore-btn small gray', 'Open'); op.type = 'button';
      op.addEventListener('click', function () { publicForum.pending = { board: r.board.id, id: r.id, data: r.d }; location.hash = '#forum'; });
      var dl = el('button', 'ore-btn small danger', 'Delete'); dl.type = 'button';
      dl.addEventListener('click', function () {
        if (!confirm('Delete "' + r.d.title + '"?')) return;
        publicForum.ref(r.board.id).doc(r.id).delete().then(function () { toast('Deleted'); loadModFeed(); loadHomeUpdates(); }).catch(function () { toast('Could not delete'); });
      });
      btns.appendChild(op); btns.appendChild(dl); row.appendChild(btns); box.appendChild(row);
    });
  }).catch(function () { box.innerHTML = ''; box.appendChild(el('div', 'dim', 'Could not load posts.')); });
}
$('modRefresh').addEventListener('click', loadModFeed);

/* =====================================================================
   Dev panel
   ===================================================================== */
function devShow() {
  if (!(me.dev || me.admin)) return;
  buildBannerEditor($('devBanner'));
  renderDevEnv(); renderDevFlags(); renderDevErrors();
}
function diagRow(host, label, ok, text) {
  var r = el('div', 'ore-inset diag-row'); r.appendChild(el('span', '', label)); r.appendChild(el('span', ok === null ? 'dim' : (ok ? 'ok' : 'bad'), text)); host.appendChild(r);
}
function renderDevEnv() {
  var box = $('devEnv'); box.innerHTML = '';
  diagRow(box, 'Build', null, BUILD);
  diagRow(box, 'Firebase configured', fbConfigured, fbConfigured ? 'yes' : 'no');
  diagRow(box, 'Firebase connected', fb.ready, fb.ready ? 'yes' : 'no');
  diagRow(box, 'Signed in as', null, me.user ? (me.user.email || me.user.uid) : 'nobody');
  diagRow(box, 'Roles', null, [me.admin ? 'owner' : '', me.dev ? 'dev' : '', me.staff ? 'staff' : ''].filter(Boolean).join(', ') || 'none');
  diagRow(box, 'Page', null, location.href);
  diagRow(box, 'Browser language', null, navigator.language || '');
}
$('devRun').addEventListener('click', function () {
  var box = $('devChecks'); box.innerHTML = ''; box.appendChild(el('div', 'dim', 'Running...'));
  var out = [];
  function add(label, ok, text) { out.push([label, ok, text]); }
  var t0 = Date.now();
  var jobs = [];
  jobs.push(fb.ready ? fb.db.collection('siteConfig').doc('main').get().then(function () { add('Firestore read', true, (Date.now() - t0) + ' ms'); }).catch(function (e) { add('Firestore read', false, (e && e.code) || 'failed'); }) : Promise.resolve(add('Firestore read', false, 'not connected')));
  jobs.push(new Promise(function (res) {
    var img = new Image(), done = false, s = Date.now();
    function fin(ok, t) { if (done) return; done = true; add('Skin service (mc-heads)', ok, t); res(); }
    img.onload = function () { fin(true, (Date.now() - s) + ' ms'); }; img.onerror = function () { fin(false, 'unreachable'); };
    setTimeout(function () { fin(false, 'timed out'); }, 5000);
    img.src = 'https://mc-heads.net/avatar/Notch/16?t=' + Date.now();
  }));
  jobs.push(fetch('https://api.mcsrvstat.us/3/' + CONFIG.SERVER_IP + ':' + CONFIG.JAVA_PORT).then(function (r) { return r.json(); }).then(function (d) { add('Server status API', true, d && d.online ? 'server online' : 'server offline or unknown'); }).catch(function () { add('Server status API', false, 'unreachable'); }));
  var ls = false; try { localStorage.setItem('solomc_t', '1'); ls = localStorage.getItem('solomc_t') === '1'; localStorage.removeItem('solomc_t'); } catch (e) {}
  add('Local storage', ls, ls ? 'works' : 'blocked');
  add('Site font loaded', !!(document.fonts && document.fonts.check('16px "Pixelify Sans"')), 'Pixelify Sans');
  Promise.all(jobs).then(function () { box.innerHTML = ''; out.forEach(function (o) { diagRow(box, o[0], o[1], o[2]); }); });
});
function renderDevFlags() {
  var box = $('devFlags'); box.innerHTML = '';
  var row = el('div', 'ore-inset flag-row');
  var txt = el('div'); txt.appendChild(el('div', 'who', 'Ticket assistant')); txt.appendChild(el('div', 'dim', 'Guided questions when someone opens a ticket. Off shows the plain form.'));
  var b = el('button', 'ore-btn small' + (site.ticketAi ? '' : ' gray'), site.ticketAi ? 'On' : 'Off'); b.type = 'button';
  b.addEventListener('click', function () { b.disabled = true; saveSite({ ticketAi: !site.ticketAi }).then(function () { renderDevFlags(); toast('Ticket assistant ' + (site.ticketAi ? 'on' : 'off')); }).catch(function () { toast('Could not save'); b.disabled = false; }); });
  row.appendChild(txt); row.appendChild(b); box.appendChild(row);
}
$('devLoad').addEventListener('click', function () {
  var name = $('devSel').value, out = $('devOut'); out.textContent = 'Loading...';
  fb.db.collection(name).limit(25).get().then(function (snap) {
    var rows = [];
    snap.forEach(function (d) {
      var data = JSON.parse(JSON.stringify(d.data(), function (k, v) { return (typeof v === 'string' && v.indexOf('data:image') === 0) ? '[image ' + v.length + ' chars]' : v; }));
      rows.push(d.id + ': ' + JSON.stringify(data, null, 2));
    });
    out.textContent = rows.length ? rows.join('\n\n') : '(no documents)';
  }).catch(function (e) { out.textContent = 'Could not read: ' + ((e && e.code) || 'error'); });
});
function renderDevErrors() { $('devErrors').textContent = devErrors.length ? devErrors.join('\n') : 'No errors recorded.'; }
$('devClearErr').addEventListener('click', function () { devErrors.length = 0; renderDevErrors(); });

/* ===================================================================== */
window.addEventListener('hashchange', route);
setAuthMode('login');
refreshAccountUI();
route();
initFirebase();
