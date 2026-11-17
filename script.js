/* =====================================================================
   SoloMC site — settings you can edit
   ===================================================================== */
var CONFIG = {
  SERVER_IP: 'solomc.net',
  JAVA_PORT: '25565',
  BEDROCK_PORT: '19132',
  DISCORD_URL: 'https://discord.gg/solomc',
  SUPPORT_EMAIL: '',                       // e.g. 'support@solomc.net' (empty = hide "Email Support")
  OWNER_EMAIL: 'jerryclaytor01@gmail.com',     // this Google account gets the Owner panel (must be a verified email)

  // Paste your Firebase web-app config here (Project settings > Your apps > Web app).
  FIREBASE: {
    apiKey: 'AIzaSyDsFdFZwEd2_pJNjB_XEYt-OZoYxlPEPJ4',
    authDomain: 'solomc-40d60.firebaseapp.com',
    projectId: 'solomc-40d60',
    appId: '1:732662603579:web:c299d3187fbca16dc2211e'
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
var STORE_ITEMS = [
  {
    id: 'rank-solo-plus', tab: 'ranks', name: 'Solo+', price: 4.99, unit: 'Permanent',
    perks: [
      'Custom [Solo+] Chat Prefix & Tab Icon',
      '+2 Extra /sethome Teleports (4 Total)',
      'Access to /feed and /hat Commands',
      '10% Shop Sell Multiplier Boost',
      'Priority Server Queue Access'
    ]
  },
  {
    id: 'rank-solo-plus-plus', tab: 'ranks', name: 'Solo++', price: 9.99, unit: 'Permanent', popular: true,
    perks: [
      'Glowing [Solo++] Prefix & Bold Tab Color',
      'Permanent /fly inside your claim',
      '+5 Extra /sethome Teleports (7 Total)',
      'Access to /heal, /feed, and /repair',
      '25% Shop Sell Multiplier Boost',
      'Instant Full Server Join Bypass'
    ]
  }
];

var BOARDS = [
  { id: 'updates', name: 'Updates', desc: 'Official news and update posts from the SoloMC staff team.', staffOnly: true },
  { id: 'general', name: 'General', desc: 'Chat with the community about anything SoloMC.' },
  { id: 'help', name: 'Help & Support', desc: 'Ask other players for help. For private issues, open a ticket.' },
  { id: 'suggestions', name: 'Suggestions', desc: 'Share your ideas for new features, events and improvements.' }
];

var TICKET_CATS = { support: 'Support', store: 'Store / purchase', report: 'Report a player', appeal: 'Ban appeal', other: 'Other' };

var LANGS = [["af","Afrikaans"],["sq","Albanian"],["am","Amharic"],["ar","Arabic"],["hy","Armenian"],["as","Assamese"],["ay","Aymara"],["az","Azerbaijani"],["bm","Bambara"],["eu","Basque"],["be","Belarusian"],["bn","Bengali"],["bho","Bhojpuri"],["bs","Bosnian"],["bg","Bulgarian"],["ca","Catalan"],["ceb","Cebuano"],["ny","Chichewa"],["zh-CN","Chinese (Simplified)"],["zh-TW","Chinese (Traditional)"],["co","Corsican"],["hr","Croatian"],["cs","Czech"],["da","Danish"],["dv","Dhivehi"],["doi","Dogri"],["nl","Dutch"],["en","English (original)"],["eo","Esperanto"],["et","Estonian"],["ee","Ewe"],["tl","Filipino"],["fi","Finnish"],["fr","French"],["fy","Frisian"],["gl","Galician"],["ka","Georgian"],["de","German"],["el","Greek"],["gn","Guarani"],["gu","Gujarati"],["ht","Haitian Creole"],["ha","Hausa"],["haw","Hawaiian"],["iw","Hebrew"],["hi","Hindi"],["hmn","Hmong"],["hu","Hungarian"],["is","Icelandic"],["ig","Igbo"],["ilo","Ilocano"],["id","Indonesian"],["ga","Irish"],["it","Italian"],["ja","Japanese"],["jw","Javanese"],["kn","Kannada"],["kk","Kazakh"],["km","Khmer"],["rw","Kinyarwanda"],["gom","Konkani"],["ko","Korean"],["kri","Krio"],["ku","Kurdish (Kurmanji)"],["ckb","Kurdish (Sorani)"],["ky","Kyrgyz"],["lo","Lao"],["la","Latin"],["lv","Latvian"],["ln","Lingala"],["lt","Lithuanian"],["lg","Luganda"],["lb","Luxembourgish"],["mk","Macedonian"],["mai","Maithili"],["mg","Malagasy"],["ms","Malay"],["ml","Malayalam"],["mt","Maltese"],["mi","Maori"],["mr","Marathi"],["mni-Mtei","Meiteilon (Manipuri)"],["lus","Mizo"],["mn","Mongolian"],["my","Myanmar (Burmese)"],["ne","Nepali"],["no","Norwegian"],["or","Odia (Oriya)"],["om","Oromo"],["ps","Pashto"],["fa","Persian"],["pl","Polish"],["pt","Portuguese"],["pa","Punjabi"],["qu","Quechua"],["ro","Romanian"],["ru","Russian"],["sm","Samoan"],["sa","Sanskrit"],["gd","Scots Gaelic"],["nso","Sepedi"],["sr","Serbian"],["st","Sesotho"],["sn","Shona"],["sd","Sindhi"],["si","Sinhala"],["sk","Slovak"],["sl","Slovenian"],["so","Somali"],["es","Spanish"],["su","Sundanese"],["sw","Swahili"],["sv","Swedish"],["tg","Tajik"],["ta","Tamil"],["tt","Tatar"],["te","Telugu"],["th","Thai"],["ti","Tigrinya"],["ts","Tsonga"],["tr","Turkish"],["tk","Turkmen"],["ak","Twi"],["uk","Ukrainian"],["ur","Urdu"],["ug","Uyghur"],["uz","Uzbek"],["vi","Vietnamese"],["cy","Welsh"],["xh","Xhosa"],["yi","Yiddish"],["yo","Yoruba"],["zu","Zulu"]];
var SOURCE_LANG = 'en';

/* Fonts: a big built-in list, plus a box that accepts ANY Google Font by name. */
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

var toastTimer;
function toast(msg) {
  var t = $('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () { t.classList.remove('show'); }, 2400);
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

/* Discord links + support email from CONFIG */
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
   Router (hash based, one page at a time)
   ===================================================================== */
var TITLES = {
  home: 'SoloMC', store: 'Store · SoloMC', info: 'Server Info · SoloMC', forum: 'Forum · SoloMC',
  tickets: 'Tickets · SoloMC', faq: 'FAQ · SoloMC', account: 'Account · SoloMC', owner: 'Owner Panel · SoloMC'
};
function currentView() { var id = (location.hash || '#home').slice(1); return TITLES[id] ? id : 'home'; }
function route() {
  var id = currentView();
  if (id === 'owner' && me.loaded && !me.admin) { location.replace('#home'); return; }
  document.querySelectorAll('.view').forEach(function (v) { v.classList.toggle('active', v.getAttribute('data-view') === id); });
  document.querySelectorAll('#tabs .tab[data-view]').forEach(function (t) { t.classList.toggle('active', t.getAttribute('data-view') === id); });
  document.title = TITLES[id];
  window.scrollTo(0, 0);
  requestAnimationFrame(function () {
    document.querySelectorAll('.view.active .reveal').forEach(function (r) { r.classList.add('in-view'); });
  });
  if (id === 'forum') forumShow();
  if (id === 'tickets') ticketsShow();
  if (id === 'owner') ownerShow();
  if (id === 'home') loadHomeUpdates();
  if (id === 'account') loadActChecks();
}

/* =====================================================================
   Nav: mobile menu, language picker, font picker
   ===================================================================== */
var navUI = (function () {
  var tabs = $('tabs'), menuBtn = $('menuBtn');
  var pairs = [
    { btn: $('langBtn'), menu: $('langMenu') },
    { btn: $('fontBtn'), menu: $('fontMenu') }
  ];
  function closeMenu() { tabs.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); }
  function closeDrops(except) {
    pairs.forEach(function (p) { if (p !== except) { p.menu.hidden = true; p.btn.setAttribute('aria-expanded', 'false'); } });
  }
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

/* ----- language ----- */
(function () {
  var langList = $('langList'), langSearch = $('langSearch'), langLabel = $('langLabel');
  function getCookie(n) {
    var m = document.cookie.match(new RegExp('(?:^|; )' + n + '=([^;]*)'));
    return m ? decodeURIComponent(m[1]) : '';
  }
  function current() { return getCookie('googtrans').split('/')[2] || SOURCE_LANG; }
  function writeCookie(value, expire) {
    var exp = expire ? '; expires=Thu, 01 Jan 1970 00:00:00 GMT' : '';
    var host = location.hostname, base = 'googtrans=' + value + exp + '; path=/';
    document.cookie = base;
    document.cookie = base + '; domain=' + host;
    if (host.indexOf('.') > -1) document.cookie = base + '; domain=.' + host;
  }
  function apply(code) {
    if (code === SOURCE_LANG) writeCookie('', true); else writeCookie('/' + SOURCE_LANG + '/' + code, false);
    location.reload();
  }
  function labelOf(code) {
    for (var i = 0; i < LANGS.length; i++) if (LANGS[i][0] === code) return LANGS[i][1].replace(' (original)', '');
    return code;
  }
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
    window.googleTranslateElementInit = function () {
      new google.translate.TranslateElement({ pageLanguage: SOURCE_LANG, autoDisplay: false }, 'google_translate_element');
    };
    var s = document.createElement('script');
    s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    s.async = true; document.head.appendChild(s);
  }
})();

/* ----- fonts ----- */
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

  /* Optional real Minecraft font: put a font file at assets/minecraft.woff2 (or .woff / .ttf / .otf). */
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

/* =====================================================================
   Server status (optional, fails silently)
   ===================================================================== */
(function () {
  var row = $('statusRow');
  try {
    fetch('https://api.mcsrvstat.us/3/' + CONFIG.SERVER_IP + ':' + CONFIG.JAVA_PORT)
      .then(function (r) { return r.json(); })
      .then(function (d) {
        if (!d || typeof d.online !== 'boolean') return;
        var dot = el('span', 'dot' + (d.online ? ' on' : ''));
        var txt = d.online ? ('Online' + (d.players && typeof d.players.online === 'number' ? ' · ' + d.players.online + ' players' : '')) : 'Offline';
        row.appendChild(dot); row.appendChild(el('span', '', txt));
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
  var sets = [
    { input: $('mcName'), head: $('mcHead') },
    { input: $('mcName2'), head: $('mcHead2') }
  ];
  var timer;
  function refresh() {
    clearTimeout(timer);
    timer = setTimeout(function () { sets.forEach(function (s) { setHead(s.head, mcUser); }); }, 450);
  }
  sets.forEach(function (s) {
    s.input.value = mcUser;
    setHead(s.head, mcUser);
    s.input.addEventListener('input', function () {
      var v = s.input.value.trim();
      mcUser = MC_RE.test(v) ? v : '';
      if (MC_RE.test(v)) lsSet('solomc_mcuser', v);
      sets.forEach(function (o) { if (o !== s) o.input.value = s.input.value; });
      if (!MC_RE.test(v)) sets.forEach(function (o) { setHead(o.head, ''); }); else refresh();
      renderCart();
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
    var b = el('button', 'tab' + (t.id === storeTab ? ' active' : ''), t.name);
    b.type = 'button';
    b.addEventListener('click', function () { storeTab = t.id; renderStore(); });
    tabs.appendChild(b);
  });
  var grid = $('storeGrid'); grid.innerHTML = '';
  var items = STORE_ITEMS.filter(function (i) { return i.tab === storeTab; });
  if (!items.length) { grid.appendChild(el('div', 'ore-panel empty-box', 'Coming soon — this category is being set up.')); return; }
  items.forEach(function (i) {
    var card = el('div', 'ore-panel item-card' + (i.popular ? ' popular' : ''));
    if (i.popular) card.appendChild(el('span', 'ribbon', 'Most popular'));
    var name = el('h3', 'item-name notranslate', i.name); name.setAttribute('translate', 'no');
    card.appendChild(name);
    var price = el('div', 'item-price', money(i.price) + ' '); price.appendChild(el('span', '', '/ ' + i.unit));
    card.appendChild(price);
    var ul = el('ul', 'perks'); i.perks.forEach(function (p) { ul.appendChild(el('li', '', p)); }); card.appendChild(ul);
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
   Firebase: accounts
   ===================================================================== */
var fb = { ready: false, auth: null, db: null };
var me = { user: null, username: '', display: '', photo: '', banner: '', staff: false, admin: false, loaded: false };
var fbConfigured = CONFIG.FIREBASE.apiKey && CONFIG.FIREBASE.apiKey.indexOf('PASTE') !== 0 && CONFIG.FIREBASE.projectId.indexOf('PASTE') !== 0;
var NOT_CONNECTED = 'Accounts, the forum and tickets are not connected yet. The site owner needs to add the Firebase settings in script.js.';
function isTeam() { return me.staff || me.admin; }
function myName() { return me.display || me.username; }

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
      loadHomeUpdates();
      route();
    })
    .catch(function () { fb.ready = false; refreshAccountUI(); });
}

var authSeq = 0;
function onAuth(user) {
  var seq = ++authSeq;
  forum.cooldown = 0; tk.cooldown = 0;
  me.user = user; me.username = ''; me.display = ''; me.photo = ''; me.banner = ''; me.staff = false; me.admin = false; me.loaded = false;
  if (!user) { me.loaded = true; setAuthMode('login'); afterAuth(); return; }
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
    me.staff = !!(r[1] && r[1].exists);
    me.admin = !!(user.email && user.emailVerified && user.email.toLowerCase() === CONFIG.OWNER_EMAIL.toLowerCase());
    me.loaded = true;
    afterAuth();
  });
}
function afterAuth() {
  refreshAccountUI(); forumRefreshControls(); updateOwnerTab(); startBeat();
  var id = currentView();
  if (id === 'tickets') ticketsShow();
  if (id === 'owner') ownerShow();
  if (id === 'forum') forumShow();
  if (id === 'account') loadActChecks();
}
function updateOwnerTab() { $('ownerTab').hidden = !me.admin; }

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

function paintAvatar(node, photo, name) {
  setBg(node, photo);
  node.textContent = validImg(photo) ? '' : ((name || '?').charAt(0).toUpperCase());
}

function refreshAccountUI() {
  var guest = $('authGuest'), prof = $('authProfile'), uname = $('authUsernameCard'), tab = $('accountTab');
  if (!fbConfigured || !fb.ready) {
    setMsg($('authNotice'), fbConfigured ? 'Could not reach the account service. Please refresh and try again.' : NOT_CONNECTED, 'info');
    guest.hidden = false; prof.hidden = true; uname.hidden = true;
    $('googleBtn').disabled = $('microsoftBtn').disabled = $('authSubmit').disabled = true;
    tab.textContent = 'Log in'; return;
  }
  setMsg($('authNotice'), '');
  $('googleBtn').disabled = $('microsoftBtn').disabled = $('authSubmit').disabled = false;
  if (!me.user) { guest.hidden = false; prof.hidden = true; uname.hidden = true; tab.textContent = 'Log in'; return; }
  if (!me.loaded) return;
  guest.hidden = true;
  if (!me.username) { uname.hidden = false; prof.hidden = true; tab.textContent = 'Account'; return; }
  uname.hidden = true; prof.hidden = false;
  $('profName').textContent = myName();
  $('profHandle').textContent = '@' + me.username;
  $('profStaff').hidden = !(me.staff && !me.admin);
  $('profOwner').hidden = !me.admin;
  $('profEmail').textContent = me.user.email || '';
  setBg($('profBanner'), me.banner);
  paintAvatar($('profAvatar'), me.photo, myName());
  var usesPassword = (me.user.providerData || []).some(function (p) { return p.providerId === 'password'; });
  $('staffNote').hidden = !(me.staff && !me.admin);
  $('staffNote').className = 'msg' + (me.staff && !me.admin ? ' show info' : '');
  $('resetBtn').hidden = me.staff || !usesPassword;
  $('actChecks').hidden = !me.staff;
  tab.textContent = myName();
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
      return fb.db.collection('profiles').doc(cred.user.uid).set({ username: name }).then(function () { onAuth(cred.user); });
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
  fb.auth.sendPasswordResetEmail(email).then(function () {
    setMsg($('authMsg'), 'If an account exists for that email, a reset link is on its way.', 'ok');
  }).catch(function (err) { setMsg($('authMsg'), authError(err), 'err'); });
});
$('usernameForm').addEventListener('submit', function (e) {
  e.preventDefault();
  var name = $('newUsername').value.trim(), msg = $('usernameMsg');
  if (!validUsername(name)) { setMsg(msg, 'Username must be 3-20 letters, numbers or underscores.', 'err'); return; }
  fb.db.collection('profiles').doc(me.user.uid).set({ username: name }).then(function () {
    me.username = name; afterAuth(); toast('Username saved');
  }).catch(function () { setMsg(msg, 'Could not save your username. Please try again.', 'err'); });
});
$('resetBtn').addEventListener('click', function () {
  if (!me.user || me.staff || !me.user.email) return;
  fb.auth.sendPasswordResetEmail(me.user.email).then(function () { setMsg($('profMsg'), 'Reset link sent to your email.', 'ok'); })
    .catch(function (err) { setMsg($('profMsg'), authError(err), 'err'); });
});
$('logoutBtn').addEventListener('click', function () { if (fb.ready) fb.auth.signOut(); });

/* ----- profile settings ----- */
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
  if (!validUsername(user)) { setMsg(msg, 'Username must be 3-20 letters, numbers or underscores.', 'err'); return; }
  if (disp.length > 32) { setMsg(msg, 'Display name can be up to 32 characters.', 'err'); return; }
  var doc = { username: user };
  if (disp) doc.displayName = disp;
  if (validImg(draft.photo)) doc.photo = draft.photo;
  if (validImg(draft.banner)) doc.banner = draft.banner;
  $('pfSave').disabled = true;
  fb.db.collection('profiles').doc(me.user.uid).set(doc).then(function () {
    me.username = user; me.display = disp; me.photo = doc.photo || ''; me.banner = doc.banner || '';
    refreshAccountUI(); $('profileForm').hidden = true; $('editProfileBtn').hidden = false; toast('Profile saved');
    startBeat();
  }).catch(function () { setMsg(msg, 'Could not save your profile. Please try again.', 'err'); }).then(function () { $('pfSave').disabled = false; });
});

/* public profile popup */
function showProfile(uid, flags) {
  if (!fb.ready || !uid) return;
  fb.db.collection('profiles').doc(uid).get().then(function (s) {
    var p = s.exists ? s.data() : {};
    var name = p.displayName || p.username || 'Unknown';
    setBg($('pmBanner'), p.banner);
    paintAvatar($('pmAvatar'), p.photo, name);
    $('pmName').textContent = name;
    $('pmHandle').textContent = p.username ? '@' + p.username : '';
    $('pmStaff').hidden = !(flags && flags.staff && !flags.owner);
    $('pmOwner').hidden = !(flags && flags.owner);
    openModal('profileModal');
  }).catch(function () { toast('Could not load profile'); });
}

/* shared byline: name (clickable), role tag, date, extra text */
function authorLine(d, extra, clickable) {
  var m = el('div', 'post-meta');
  var nm;
  if (clickable && d.authorUid) {
    nm = el('button', 'name-link notranslate', d.authorName || 'Unknown'); nm.type = 'button';
    nm.addEventListener('click', function () { showProfile(d.authorUid, { staff: d.staff, owner: d.owner }); });
  } else nm = el('span', 'notranslate', d.authorName || 'Unknown');
  nm.setAttribute('translate', 'no');
  m.appendChild(nm);
  if (d.owner) m.appendChild(el('span', 'staff-tag owner', 'Owner'));
  else if (d.staff) m.appendChild(el('span', 'staff-tag', 'Staff'));
  m.appendChild(el('span', '', fmtDate(d.createdAt)));
  if (extra) m.appendChild(el('span', '', extra));
  return m;
}

/* =====================================================================
   Staff last-seen heartbeat (only real staff accounts)
   ===================================================================== */
var hbTimer = null;
function beat() {
  if (!fb.ready || !me.user || !me.staff || !me.username || document.visibilityState !== 'visible') return;
  fb.db.collection('staffStatus').doc(me.user.uid).set({
    username: me.username, lastSeen: firebase.firestore.FieldValue.serverTimestamp()
  }).catch(function () {});
}
function startBeat() {
  if (hbTimer) { clearInterval(hbTimer); hbTimer = null; }
  if (fb.ready && me.user && me.staff && me.username) { beat(); hbTimer = setInterval(beat, 120000); }
}
document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'visible') beat(); });

/* =====================================================================
   Forum
   ===================================================================== */
var forum = { board: 'general', openId: null, cooldown: 0, pending: null };
function boardById(id) { for (var i = 0; i < BOARDS.length; i++) if (BOARDS[i].id === id) return BOARDS[i]; return BOARDS[0]; }
function canPost(board) {
  if (!fb.ready || !me.user || !me.username) return false;
  return !board.staffOnly || isTeam();
}
function forumShow() {
  setMsg($('forumNotice'), fbConfigured ? '' : NOT_CONNECTED, 'info');
  forum.openId = null;
  var p = forum.pending; forum.pending = null;
  if (p) { forum.board = p.board; renderBoardTabs(); openThread(p.board, p.id, p.data); return; }
  renderBoardTabs();
  loadPosts();
}
function renderBoardTabs() {
  var tabs = $('boardTabs'); tabs.innerHTML = '';
  BOARDS.forEach(function (b) {
    var t = el('button', 'tab' + (b.id === forum.board ? ' active' : ''), b.name); t.type = 'button';
    t.addEventListener('click', function () { forum.board = b.id; forum.openId = null; $('thread').hidden = true; $('forumList').hidden = false; renderBoardTabs(); loadPosts(); });
    tabs.appendChild(t);
  });
  $('boardDesc').textContent = boardById(forum.board).desc;
  forumRefreshControls();
}
function forumRefreshControls() {
  var b = boardById(forum.board), btn = $('newPostBtn');
  if (!btn) return;
  btn.hidden = b.staffOnly && !isTeam();
}
$('newPostBtn').addEventListener('click', function () {
  var b = boardById(forum.board);
  if (!fb.ready) { toast('Forum not connected yet'); return; }
  if (!me.user) { location.hash = '#account'; toast('Log in to post'); return; }
  if (!me.username) { location.hash = '#account'; toast('Choose a username first'); return; }
  if (!canPost(b)) { toast('Only staff can post here'); return; }
  $('postModalTitle').textContent = 'New post in ' + b.name;
  $('postForm').reset(); setMsg($('postMsg'), ''); openModal('postModal');
});
function postsRef(board) { return fb.db.collection('boards').doc(board).collection('posts'); }

function loadPosts() {
  var list = $('postList'); list.innerHTML = '';
  $('thread').hidden = true; $('forumList').hidden = false;
  if (!fb.ready) { list.appendChild(el('div', 'ore-panel empty-box', fbConfigured ? 'Loading...' : 'The forum will appear here once it is connected.')); return; }
  list.appendChild(el('div', 'ore-panel empty-box', 'Loading...'));
  var board = forum.board;
  postsRef(board).orderBy('createdAt', 'desc').limit(50).get().then(function (snap) {
    if (board !== forum.board) return;
    list.innerHTML = '';
    if (snap.empty) { list.appendChild(el('div', 'ore-panel empty-box', 'No posts yet. Be the first!')); return; }
    snap.forEach(function (d) { list.appendChild(postRow(board, d.id, d.data())); });
  }).catch(function () { list.innerHTML = ''; list.appendChild(el('div', 'ore-panel empty-box', 'Could not load posts. Please try again later.')); });
}
function postRow(board, id, d) {
  var b = el('button', 'ore-panel post-row'); b.type = 'button';
  b.appendChild(el('div', 'post-title', d.title || '(untitled)'));
  b.appendChild(authorLine(d, (d.replyCount || 0) + ' replies', false));
  b.addEventListener('click', function () { openThread(board, id, d); });
  return b;
}
function canReply() { return fb.ready && me.user && me.username; }

function openThread(board, id, d) {
  forum.openId = id; forum.board = board;
  $('forumList').hidden = true;
  var t = $('thread'); t.hidden = false; t.innerHTML = '';
  window.scrollTo(0, 0);
  var top = el('div', 'thread-top');
  var back = el('button', 'ore-btn gray small', '← Back'); back.type = 'button';
  back.addEventListener('click', function () { forum.openId = null; t.hidden = true; $('forumList').hidden = false; renderBoardTabs(); loadPosts(); });
  top.appendChild(back); top.appendChild(el('h2', '', d.title));
  t.appendChild(top);
  t.appendChild(authorLine(d, '', true));
  t.appendChild(el('div', 'ore-panel thread-body', d.body));
  if (me.user && (me.user.uid === d.authorUid || isTeam())) {
    var del = el('button', 'ore-btn danger small', 'Delete post'); del.type = 'button'; del.style.alignSelf = 'flex-start';
    del.addEventListener('click', function () {
      if (!confirm('Delete this post?')) return;
      postsRef(board).doc(id).delete().then(function () {
        toast('Post deleted');
        if (board === 'updates') loadHomeUpdates();
        back.click();
      }).catch(function () { toast('Could not delete'); });
    });
    t.appendChild(del);
  }
  t.appendChild(el('h3', '', 'Replies'));
  var rl = el('div', 'post-list'); t.appendChild(rl);
  loadReplies(board, id, rl);

  if (canReply()) {
    var form = el('form', 'form'); form.noValidate = true;
    var ta = el('textarea'); ta.maxLength = 3000; ta.placeholder = 'Write a reply...'; ta.setAttribute('aria-label', 'Reply');
    var msg = el('div', 'msg');
    var send = el('button', 'ore-btn', 'Reply'); send.type = 'submit';
    form.appendChild(ta); form.appendChild(msg); form.appendChild(send);
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var body = ta.value.trim();
      if (!body) { setMsg(msg, 'Write something first.', 'err'); return; }
      if (Date.now() < forum.cooldown) { setMsg(msg, 'Slow down a little before posting again.', 'err'); return; }
      send.disabled = true;
      var ref = postsRef(board).doc(id);
      ref.collection('replies').add({
        body: body, authorUid: me.user.uid, authorName: myName(), staff: isTeam(), owner: me.admin,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      }).then(function () {
        forum.cooldown = Date.now() + 8000;
        ref.update({ replyCount: firebase.firestore.FieldValue.increment(1) }).catch(function () {});
        ta.value = ''; setMsg(msg, ''); loadReplies(board, id, rl);
      }).catch(function () { setMsg(msg, 'Could not post your reply.', 'err'); }).then(function () { send.disabled = false; });
    });
    t.appendChild(form);
  } else {
    var hint = el('div', 'msg show info');
    hint.textContent = fb.ready ? 'Log in and choose a username to reply.' : 'Replies are available once the forum is connected.';
    t.appendChild(hint);
    if (fb.ready) { var go = el('a', 'ore-btn', 'Log in / Sign up'); go.href = '#account'; go.style.alignSelf = 'flex-start'; t.appendChild(go); }
  }
}
function loadReplies(board, id, rl) {
  rl.innerHTML = '';
  postsRef(board).doc(id).collection('replies').orderBy('createdAt', 'asc').limit(200).get().then(function (snap) {
    rl.innerHTML = '';
    if (snap.empty) { rl.appendChild(el('div', 'dim', 'No replies yet.')); return; }
    snap.forEach(function (d) {
      var r = d.data(), box = el('div', 'ore-panel reply');
      box.appendChild(authorLine(r, '', true));
      box.appendChild(el('div', 'reply-body', r.body));
      if (me.user && (me.user.uid === r.authorUid || isTeam())) {
        var x = el('button', 'ore-btn danger small', 'Delete'); x.type = 'button'; x.style.alignSelf = 'flex-start';
        x.addEventListener('click', function () {
          if (!confirm('Delete this reply?')) return;
          postsRef(board).doc(id).collection('replies').doc(d.id).delete().then(function () {
            postsRef(board).doc(id).update({ replyCount: firebase.firestore.FieldValue.increment(-1) }).catch(function () {});
            loadReplies(board, id, rl);
          }).catch(function () { toast('Could not delete'); });
        });
        box.appendChild(x);
      }
      rl.appendChild(box);
    });
  }).catch(function () { rl.innerHTML = ''; rl.appendChild(el('div', 'dim', 'Could not load replies.')); });
}
$('postForm').addEventListener('submit', function (e) {
  e.preventDefault();
  var b = boardById(forum.board), msg = $('postMsg');
  var title = $('postTitle').value.trim(), body = $('postBody').value.trim();
  if (!canPost(b)) { setMsg(msg, "You can't post here.", 'err'); return; }
  if (!title || !body) { setMsg(msg, 'Please fill in both the title and the message.', 'err'); return; }
  if (Date.now() < forum.cooldown) { setMsg(msg, 'Slow down a little before posting again.', 'err'); return; }
  $('postSubmit').disabled = true;
  postsRef(b.id).add({
    title: title, body: body, authorUid: me.user.uid, authorName: myName(), staff: isTeam(), owner: me.admin,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(), replyCount: 0
  }).then(function () {
    forum.cooldown = Date.now() + 8000;
    closeModal('postModal'); toast('Posted'); loadPosts(); loadHomeUpdates();
  }).catch(function () { setMsg(msg, 'Could not post. Please try again.', 'err'); }).then(function () { $('postSubmit').disabled = false; });
});

/* latest updates on the home page (always re-read, so deleted updates disappear) */
function loadHomeUpdates() {
  var box = $('homeUpdates');
  if (!fb.ready) { box.innerHTML = ''; box.appendChild(el('div', 'ore-panel empty-box', 'Update posts from the staff team will show up here.')); return; }
  postsRef('updates').orderBy('createdAt', 'desc').limit(3).get().then(function (snap) {
    box.innerHTML = '';
    if (snap.empty) { box.appendChild(el('div', 'ore-panel empty-box', 'No updates yet — check back soon!')); return; }
    snap.forEach(function (d) {
      var data = d.data(), b = el('button', 'ore-panel mini-post'); b.type = 'button';
      b.appendChild(el('span', 't', data.title)); b.appendChild(el('span', 'd', fmtDate(data.createdAt)));
      b.addEventListener('click', function () { forum.pending = { board: 'updates', id: d.id, data: data }; if (location.hash === '#forum') forumShow(); else location.hash = '#forum'; });
      box.appendChild(b);
    });
  }).catch(function () {});
}
loadHomeUpdates();

/* =====================================================================
   Tickets
   ===================================================================== */
var tk = { filter: 'open', openId: null, cooldown: 0 };
function ticketsRef() { return fb.db.collection('tickets'); }
function ticketsShow() {
  setMsg($('ticketNotice'), fbConfigured ? '' : NOT_CONNECTED, 'info');
  tk.openId = null; $('ticketThread').hidden = true; $('ticketMain').hidden = false;
  renderTicketTabs();
  loadTickets();
}
function renderTicketTabs() {
  var tabs = $('ticketTabs'); tabs.innerHTML = '';
  [['open', 'Open'], ['closed', 'Closed'], ['all', 'All']].forEach(function (f) {
    var b = el('button', 'tab' + (tk.filter === f[0] ? ' active' : ''), f[1]); b.type = 'button';
    b.addEventListener('click', function () { tk.filter = f[0]; renderTicketTabs(); loadTickets(); });
    tabs.appendChild(b);
  });
  $('ticketDesc').textContent = isTeam() ? 'You can see every ticket as a staff member.' : 'Your tickets are private. Only you and the staff can see them.';
}
$('newTicketBtn').addEventListener('click', function () {
  if (!fb.ready) { toast('Tickets not connected yet'); return; }
  if (!me.user) { location.hash = '#account'; toast('Log in to open a ticket'); return; }
  if (!me.username) { location.hash = '#account'; toast('Choose a username first'); return; }
  $('ticketForm').reset(); setMsg($('tkMsg'), ''); openModal('ticketModal');
});
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
  var q = isTeam() ? ticketsRef().orderBy('updatedAt', 'desc').limit(100) : ticketsRef().where('authorUid', '==', me.user.uid).limit(100);
  q.get().then(function (snap) {
    var rows = [];
    snap.forEach(function (d) { rows.push({ id: d.id, d: d.data() }); });
    rows.sort(function (a, b) { return tsMs(b.d.updatedAt) - tsMs(a.d.updatedAt); });
    rows = rows.filter(function (r) { return tk.filter === 'all' || r.d.status === tk.filter; });
    list.innerHTML = '';
    if (!rows.length) { list.appendChild(el('div', 'ore-panel empty-box', tk.filter === 'open' ? 'No open tickets.' : 'No tickets here.')); return; }
    rows.forEach(function (r) { list.appendChild(ticketRow(r.id, r.d)); });
  }).catch(function () { list.innerHTML = ''; list.appendChild(el('div', 'ore-panel empty-box', 'Could not load tickets. Please try again later.')); });
}
function ticketRow(id, d) {
  var b = el('button', 'ore-panel post-row'); b.type = 'button';
  b.appendChild(el('div', 'post-title', d.subject || '(no subject)'));
  var m = el('div', 'post-meta');
  m.appendChild(el('span', 'status-tag ' + (d.status === 'closed' ? 'closed' : 'open'), d.status === 'closed' ? 'Closed' : 'Open'));
  m.appendChild(el('span', 'cat-tag', TICKET_CATS[d.category] || 'Other'));
  if (isTeam()) { var n = el('span', 'notranslate', d.authorName || 'Unknown'); n.setAttribute('translate', 'no'); m.appendChild(n); }
  m.appendChild(el('span', '', 'Updated ' + timeAgo(d.updatedAt)));
  m.appendChild(el('span', '', (d.replyCount || 0) + ' replies'));
  b.appendChild(m);
  b.addEventListener('click', function () { openTicket(id, d); });
  return b;
}
$('ticketForm').addEventListener('submit', function (e) {
  e.preventDefault();
  var msg = $('tkMsg'), subject = $('tkSubject').value.trim(), message = $('tkMessage').value.trim();
  if (!subject || !message) { setMsg(msg, 'Please fill in the subject and the description.', 'err'); return; }
  if (Date.now() < tk.cooldown) { setMsg(msg, 'Please wait a little before opening another ticket.', 'err'); return; }
  $('tkSubmit').disabled = true;
  var now = firebase.firestore.FieldValue.serverTimestamp();
  ticketsRef().add({
    subject: subject, category: $('tkCat').value, message: message, authorUid: me.user.uid, authorName: myName(),
    status: 'open', createdAt: now, updatedAt: now, replyCount: 0
  }).then(function () {
    tk.cooldown = Date.now() + 20000;
    closeModal('ticketModal'); toast('Ticket opened'); tk.filter = 'open'; renderTicketTabs(); loadTickets();
  }).catch(function () { setMsg(msg, 'Could not open the ticket. Please try again.', 'err'); }).then(function () { $('tkSubmit').disabled = false; });
});

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
  var meta = el('div', 'post-meta');
  meta.appendChild(el('span', 'status-tag ' + (d.status === 'closed' ? 'closed' : 'open'), d.status === 'closed' ? 'Closed' : 'Open'));
  meta.appendChild(el('span', 'cat-tag', TICKET_CATS[d.category] || 'Other'));
  t.appendChild(meta);
  t.appendChild(authorLine({ authorName: d.authorName, authorUid: d.authorUid, createdAt: d.createdAt }, '', isTeam()));
  t.appendChild(el('div', 'ore-panel thread-body', d.message));

  var actions = el('div', 'btn-row');
  var canManage = me.user && (me.user.uid === d.authorUid || isTeam());
  if (canManage) {
    var tog = el('button', 'ore-btn small ' + (d.status === 'closed' ? '' : 'gray'), d.status === 'closed' ? 'Reopen ticket' : 'Close ticket'); tog.type = 'button';
    tog.addEventListener('click', function () {
      var next = d.status === 'closed' ? 'open' : 'closed';
      ticketsRef().doc(id).update({ status: next, updatedAt: firebase.firestore.FieldValue.serverTimestamp() }).then(function () {
        d.status = next; toast('Ticket ' + next); openTicket(id, d);
      }).catch(function () { toast('Could not update the ticket'); });
    });
    actions.appendChild(tog);
  }
  if (me.admin) {
    var del = el('button', 'ore-btn danger small', 'Delete ticket'); del.type = 'button';
    del.addEventListener('click', function () {
      if (!confirm('Delete this ticket and all its messages?')) return;
      ticketsRef().doc(id).collection('messages').get().then(function (snap) {
        var ps = []; snap.forEach(function (m) { ps.push(m.ref ? m.ref.delete() : ticketsRef().doc(id).collection('messages').doc(m.id).delete()); });
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
      ticketsRef().doc(id).collection('messages').add({
        body: body, authorUid: me.user.uid, authorName: myName(), staff: isTeam(), owner: me.admin,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      }).then(function () {
        ticketsRef().doc(id).update({ updatedAt: firebase.firestore.FieldValue.serverTimestamp(), replyCount: firebase.firestore.FieldValue.increment(1) }).catch(function () {});
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
   Owner panel: staff last seen + activity checks (owner only)
   ===================================================================== */
function ownerShow() {
  if (!me.loaded) return;
  if (!me.admin) { location.replace('#home'); return; }
  loadSeen(); loadChecks();
}
function loadRoster() {
  return fb.db.collection('staff').get().then(function (snap) {
    var ids = []; snap.forEach(function (d) { ids.push(d.id); });
    return Promise.all(ids.map(function (uid) {
      return Promise.all([
        fb.db.collection('profiles').doc(uid).get().catch(function () { return null; }),
        fb.db.collection('staffStatus').doc(uid).get().catch(function () { return null; })
      ]).then(function (r) {
        var p = (r[0] && r[0].exists && r[0].data()) || {}, s = (r[1] && r[1].exists && r[1].data()) || null;
        return { uid: uid, name: p.displayName || p.username || (uid.slice(0, 6) + '…'), handle: p.username || '', seen: s && s.lastSeen };
      });
    }));
  });
}
function loadSeen() {
  var box = $('seenList'); box.innerHTML = ''; box.appendChild(el('div', 'dim', 'Loading...'));
  loadRoster().then(function (rows) {
    box.innerHTML = '';
    if (!rows.length) { box.appendChild(el('div', 'dim', 'No staff accounts found.')); return; }
    rows.sort(function (a, b) { return tsMs(b.seen) - tsMs(a.seen); });
    rows.forEach(function (r) {
      var row = el('div', 'ore-inset owner-row');
      var who = el('span', 'who notranslate', r.name + (r.handle ? ' (@' + r.handle + ')' : '')); who.setAttribute('translate', 'no');
      row.appendChild(who);
      row.appendChild(el('span', 'dim', r.seen ? ('Last seen ' + timeAgo(r.seen) + ' · ' + fmtDate(r.seen)) : 'Never seen'));
      box.appendChild(row);
    });
  }).catch(function () { box.innerHTML = ''; box.appendChild(el('div', 'dim', 'Could not load staff.')); });
}
$('seenRefresh').addEventListener('click', loadSeen);

function checksRef() { return fb.db.collection('activityChecks'); }
$('checkForm').addEventListener('submit', function (e) {
  e.preventDefault();
  var title = $('checkTitle').value.trim(), note = $('checkNote').value.trim(), msg = $('checkMsg');
  if (!title) { setMsg(msg, 'Add a title.', 'err'); return; }
  checksRef().add({ title: title, note: note, active: true, createdAt: firebase.firestore.FieldValue.serverTimestamp() })
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
        done.forEach(function (s) { var ch = el('span', 'chip done notranslate', s.name); ch.setAttribute('translate', 'no'); d1.appendChild(ch); });
        holder.appendChild(d1);
        done.forEach(function (s) {
          var rr = got[s.uid];
          if (rr && rr.note) { var line = el('div', 'dim'); line.textContent = s.name + ' (' + timeAgo(rr.createdAt) + '): ' + rr.note; holder.appendChild(line); }
        });
        if (todo.length) {
          holder.appendChild(el('div', '', 'Not responded:'));
          var d2 = el('div', 'chip-row');
          todo.forEach(function (s) { var ch = el('span', 'chip todo notranslate', s.name); ch.setAttribute('translate', 'no'); d2.appendChild(ch); });
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

/* staff side: answer active checks (shown on the Account page) */
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
          respRef.set({ username: me.username, note: ta.value.trim(), createdAt: firebase.firestore.FieldValue.serverTimestamp() })
            .then(function () { toast('Response sent'); loadActChecks(); })
            .catch(function () { toast('Could not send'); go.disabled = false; });
        });
        area.appendChild(ta); area.appendChild(go);
      }).catch(function () { area.innerHTML = ''; area.appendChild(el('div', 'dim', 'Could not load.')); });
      box.appendChild(card);
    });
  }).catch(function () { box.innerHTML = ''; box.appendChild(el('div', 'dim', 'Could not load activity checks.')); });
}

/* ===================================================================== */
window.addEventListener('hashchange', route);
setAuthMode('login');
refreshAccountUI();
route();
initFirebase();
