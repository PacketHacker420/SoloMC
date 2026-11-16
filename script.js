/* =====================================================================
   SoloMC site — settings you can edit
   ===================================================================== */
var CONFIG = {
  SERVER_IP: 'solomc.net',
  PORT: '25665',
  DISCORD_URL: 'https://discord.gg/solomc',
  SUPPORT_EMAIL: 'faxissssss@gmail.com',            // e.g. 'support@solomc.net' (leave empty to hide "Email Support")

  // Paste your Firebase web-app config here (Project settings > Your apps > Web app).
  // Until this is filled in, the forum and login pages show a "not connected yet" notice.
  FIREBASE: {
    apiKey: 'AIzaSyDsFdFZwEd2_pJNjB_XEYt-OZoYxlPEPJ4',
    authDomain: 'solomc-40d60.firebaseapp.com',
    projectId: 'solomc-40d60',
    appId: '1:732662603579:web:c299d3187fbca16dc2211e'
  },

  // Store: when you get the API details from the owner, put your checkout call in here.
  // It receives the cart as [{id, name, price, qty}] and must return a Promise
  // (for example: fetch(...).then(r => r.json()).then(d => { location.href = d.checkoutUrl; })).
  STORE_CHECKOUT: function (items) {
    return Promise.reject(new Error('not-configured'));
  }
};

/* Store items. Add crate keys, spawners and bundles here when you have them. */
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

/* Forum boards. "staffOnly" boards can only be posted to by staff accounts. */
var BOARDS = [
  { id: 'updates', name: 'Updates', desc: 'Official news and update posts from the SoloMC staff team.', staffOnly: true },
  { id: 'general', name: 'General', desc: 'Chat with the community about anything SoloMC.' },
  { id: 'help', name: 'Help & Support', desc: 'Ask other players for help. For urgent issues, open a ticket on Discord.' },
  { id: 'suggestions', name: 'Suggestions', desc: 'Share your ideas for new features, events and improvements.' }
];

var LANGS = [["af","Afrikaans"],["sq","Albanian"],["am","Amharic"],["ar","Arabic"],["hy","Armenian"],["as","Assamese"],["ay","Aymara"],["az","Azerbaijani"],["bm","Bambara"],["eu","Basque"],["be","Belarusian"],["bn","Bengali"],["bho","Bhojpuri"],["bs","Bosnian"],["bg","Bulgarian"],["ca","Catalan"],["ceb","Cebuano"],["ny","Chichewa"],["zh-CN","Chinese (Simplified)"],["zh-TW","Chinese (Traditional)"],["co","Corsican"],["hr","Croatian"],["cs","Czech"],["da","Danish"],["dv","Dhivehi"],["doi","Dogri"],["nl","Dutch"],["en","English (original)"],["eo","Esperanto"],["et","Estonian"],["ee","Ewe"],["tl","Filipino"],["fi","Finnish"],["fr","French"],["fy","Frisian"],["gl","Galician"],["ka","Georgian"],["de","German"],["el","Greek"],["gn","Guarani"],["gu","Gujarati"],["ht","Haitian Creole"],["ha","Hausa"],["haw","Hawaiian"],["iw","Hebrew"],["hi","Hindi"],["hmn","Hmong"],["hu","Hungarian"],["is","Icelandic"],["ig","Igbo"],["ilo","Ilocano"],["id","Indonesian"],["ga","Irish"],["it","Italian"],["ja","Japanese"],["jw","Javanese"],["kn","Kannada"],["kk","Kazakh"],["km","Khmer"],["rw","Kinyarwanda"],["gom","Konkani"],["ko","Korean"],["kri","Krio"],["ku","Kurdish (Kurmanji)"],["ckb","Kurdish (Sorani)"],["ky","Kyrgyz"],["lo","Lao"],["la","Latin"],["lv","Latvian"],["ln","Lingala"],["lt","Lithuanian"],["lg","Luganda"],["lb","Luxembourgish"],["mk","Macedonian"],["mai","Maithili"],["mg","Malagasy"],["ms","Malay"],["ml","Malayalam"],["mt","Maltese"],["mi","Maori"],["mr","Marathi"],["mni-Mtei","Meiteilon (Manipuri)"],["lus","Mizo"],["mn","Mongolian"],["my","Myanmar (Burmese)"],["ne","Nepali"],["no","Norwegian"],["or","Odia (Oriya)"],["om","Oromo"],["ps","Pashto"],["fa","Persian"],["pl","Polish"],["pt","Portuguese"],["pa","Punjabi"],["qu","Quechua"],["ro","Romanian"],["ru","Russian"],["sm","Samoan"],["sa","Sanskrit"],["gd","Scots Gaelic"],["nso","Sepedi"],["sr","Serbian"],["st","Sesotho"],["sn","Shona"],["sd","Sindhi"],["si","Sinhala"],["sk","Slovak"],["sl","Slovenian"],["so","Somali"],["es","Spanish"],["su","Sundanese"],["sw","Swahili"],["sv","Swedish"],["tg","Tajik"],["ta","Tamil"],["tt","Tatar"],["te","Telugu"],["th","Thai"],["ti","Tigrinya"],["ts","Tsonga"],["tr","Turkish"],["tk","Turkmen"],["ak","Twi"],["uk","Ukrainian"],["ur","Urdu"],["ug","Uyghur"],["uz","Uzbek"],["vi","Vietnamese"],["cy","Welsh"],["xh","Xhosa"],["yi","Yiddish"],["yo","Yoruba"],["zu","Zulu"]];
var SOURCE_LANG = 'en';

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

var toastTimer;
function toast(msg) {
  var t = $('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () { t.classList.remove('show'); }, 2200);
}

function setMsg(node, text, kind) {
  node.className = 'msg' + (text ? ' show ' + (kind || 'info') : '');
  node.textContent = text || '';
}

function copyText(text) {
  function done() { toast('Copied: ' + text); }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done, fallback);
  } else { fallback(); }
  function fallback() {
    var ta = document.createElement('textarea');
    ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); done(); } catch (e) { toast('Copy failed'); }
    document.body.removeChild(ta);
  }
}

/* Discord links + support email from CONFIG */
document.querySelectorAll('[data-discord]').forEach(function (a) { a.href = CONFIG.DISCORD_URL; });
if (CONFIG.SUPPORT_EMAIL) {
  var em = $('emailLink');
  em.href = 'mailto:' + CONFIG.SUPPORT_EMAIL;
  em.hidden = false;
}
document.addEventListener('click', function (e) {
  var c = e.target.closest('[data-copy]');
  if (c) copyText(c.getAttribute('data-copy'));
  var x = e.target.closest('[data-close]');
  if (x) closeModal(x.getAttribute('data-close'));
});

function openModal(id) { $(id).classList.add('active'); }
function closeModal(id) { $(id).classList.remove('active'); }
document.querySelectorAll('.modal-overlay').forEach(function (o) {
  o.addEventListener('click', function (e) { if (e.target === o) o.classList.remove('active'); });
});

/* =====================================================================
   Router (hash based, one page at a time)
   ===================================================================== */
var TITLES = {
  home: 'SoloMC', store: 'Store · SoloMC', info: 'Server Info · SoloMC',
  forum: 'Forum · SoloMC', faq: 'FAQ · SoloMC', account: 'Account · SoloMC'
};
function route() {
  var id = (location.hash || '#home').slice(1);
  if (!TITLES[id]) id = 'home';
  document.querySelectorAll('.view').forEach(function (v) { v.classList.toggle('active', v.getAttribute('data-view') === id); });
  document.querySelectorAll('#tabs .tab[data-view]').forEach(function (t) { t.classList.toggle('active', t.getAttribute('data-view') === id); });
  document.title = TITLES[id];
  window.scrollTo(0, 0);
  requestAnimationFrame(function () {
    document.querySelectorAll('.view.active .reveal').forEach(function (r) { r.classList.add('in-view'); });
  });
  if (id === 'forum') forumShow();
}

/* =====================================================================
   Mobile menu + language picker
   ===================================================================== */
(function () {
  var tabs = $('tabs'), menuBtn = $('menuBtn'), langBtn = $('langBtn'), langMenu = $('langMenu');
  var langList = $('langList'), langSearch = $('langSearch'), langLabel = $('langLabel');

  function closeMenu() { tabs.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); }
  function closeLang() { langMenu.hidden = true; langBtn.setAttribute('aria-expanded', 'false'); }
  function closeAll() { closeMenu(); closeLang(); }
  window.closeNavMenus = closeAll;

  menuBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    var open = !tabs.classList.contains('open');
    closeLang();
    tabs.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  langBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    var open = langMenu.hidden;
    closeMenu();
    langMenu.hidden = !open;
    langBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) {
      langSearch.value = ''; render('');
      setTimeout(function () { langSearch.focus(); }, 0);
      var a = langList.querySelector('.active'); if (a) a.scrollIntoView({ block: 'center' });
    }
  });
  document.addEventListener('click', function (e) { if (!e.target.closest('.topnav')) closeAll(); });
  tabs.addEventListener('click', function (e) { if (e.target.closest('.tab')) closeMenu(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeAll(); document.querySelectorAll('.modal-overlay.active').forEach(function (m) { m.classList.remove('active'); }); } });
  window.addEventListener('hashchange', closeAll);

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

/* =====================================================================
   Server status (optional, fails silently)
   ===================================================================== */
(function () {
  var row = $('statusRow');
  try {
    fetch('https://api.mcsrvstat.us/3/' + CONFIG.SERVER_IP + ':' + CONFIG.PORT)
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
   Store + cart
   ===================================================================== */
var cart = [];
var storeTab = 'ranks';
try { cart = JSON.parse(localStorage.getItem('solomc_cart') || '[]'); } catch (e) { cart = []; }
if (!Array.isArray(cart)) cart = [];
function itemById(id) { for (var i = 0; i < STORE_ITEMS.length; i++) if (STORE_ITEMS[i].id === id) return STORE_ITEMS[i]; return null; }
cart = cart.filter(function (c) { return c && itemById(c.id); }).map(function (c) { return { id: c.id, qty: Math.max(1, Math.min(10, c.qty | 0)) }; });
function saveCart() { try { localStorage.setItem('solomc_cart', JSON.stringify(cart)); } catch (e) {} }

function addToCart(id, thenOpen) {
  var found = cart.filter(function (c) { return c.id === id; })[0];
  if (found) { if (found.qty < 10) found.qty++; } else cart.push({ id: id, qty: 1 });
  saveCart(); renderCart();
  if (thenOpen) openModal('cartModal'); else toast('Added to cart');
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
    var name = el('h3', 'item-name', i.name); name.className += ' notranslate'; name.setAttribute('translate', 'no');
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
    var right = el('span', 'p', money(it.price * c.qty));
    var rm = el('button', 'ore-btn small gray', 'Remove'); rm.type = 'button'; rm.style.marginLeft = '10px';
    rm.addEventListener('click', function () { removeFromCart(c.id); });
    var wrap = el('span'); wrap.appendChild(right); wrap.appendChild(rm);
    line.appendChild(wrap); lines.appendChild(line);
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
  var items = cart.map(function (c) { var it = itemById(c.id); return { id: it.id, name: it.name, price: it.price, qty: c.qty }; });
  setMsg($('cartMsg'), 'Starting checkout...', 'info');
  var p; try { p = Promise.resolve(CONFIG.STORE_CHECKOUT(items)); } catch (e) { p = Promise.reject(e); }
  p.then(function () { setMsg($('cartMsg'), ''); }).catch(function (err) {
    if (err && err.message === 'not-configured') setMsg($('cartMsg'), "The store isn't connected yet. Please check back soon or ask staff on Discord.", 'info');
    else setMsg($('cartMsg'), 'Checkout failed. Please try again or contact staff on Discord.', 'err');
  });
});
renderStore(); renderCart();

/* =====================================================================
   Firebase: accounts + forum
   ===================================================================== */
var fb = { ready: false, auth: null, db: null };
var me = { user: null, username: '', staff: false, loaded: false };
var fbConfigured = CONFIG.FIREBASE.apiKey && CONFIG.FIREBASE.apiKey.indexOf('PASTE') !== 0 && CONFIG.FIREBASE.projectId.indexOf('PASTE') !== 0;
var NOT_CONNECTED = 'Accounts and the forum are not connected yet. The site owner needs to add the Firebase settings in script.js.';

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
      if ((location.hash || '') === '#forum') forumShow();
    })
    .catch(function () { fb.ready = false; refreshAccountUI(); });
}

var authSeq = 0;
function onAuth(user) {
  var seq = ++authSeq;
  me.user = user; me.username = ''; me.staff = false; me.loaded = false;
  if (!user) { me.loaded = true; setAuthMode('login'); refreshAccountUI(); forumRefreshControls(); return; }
  Promise.all([
    fb.db.collection('profiles').doc(user.uid).get().catch(function () { return null; }),
    fb.db.collection('staff').doc(user.uid).get().catch(function () { return null; })
  ]).then(function (r) {
    if (seq !== authSeq) return;
    me.username = (r[0] && r[0].exists && r[0].data().username) || '';
    me.staff = !!(r[1] && r[1].exists);
    me.loaded = true; refreshAccountUI(); forumRefreshControls();
  });
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

function refreshAccountUI() {
  var guest = $('authGuest'), prof = $('authProfile'), uname = $('authUsernameCard');
  var tab = $('accountTab');
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
  $('profName').textContent = me.username;
  $('profStaff').hidden = !me.staff;
  $('profEmail').textContent = me.user.email || '';
  var usesPassword = (me.user.providerData || []).some(function (p) { return p.providerId === 'password'; });
  $('staffNote').className = 'msg' + (me.staff ? ' show info' : ''); $('staffNote').hidden = !me.staff;
  $('resetBtn').hidden = me.staff || !usesPassword;
  tab.textContent = me.username;
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
    me.username = name; refreshAccountUI(); forumRefreshControls(); toast('Username saved');
  }).catch(function () { setMsg(msg, 'Could not save your username. Please try again.', 'err'); });
});

$('resetBtn').addEventListener('click', function () {
  if (!me.user || me.staff || !me.user.email) return;
  fb.auth.sendPasswordResetEmail(me.user.email).then(function () { setMsg($('profMsg'), 'Reset link sent to your email.', 'ok'); })
    .catch(function (err) { setMsg($('profMsg'), authError(err), 'err'); });
});
$('logoutBtn').addEventListener('click', function () { if (fb.ready) fb.auth.signOut(); });

/* =====================================================================
   Forum
   ===================================================================== */
var forum = { board: 'general', openId: null, cooldown: 0, pending: null };
function boardById(id) { for (var i = 0; i < BOARDS.length; i++) if (BOARDS[i].id === id) return BOARDS[i]; return BOARDS[0]; }
function fmtDate(ts) {
  try { return ts && ts.toDate ? ts.toDate().toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' }) : 'just now'; } catch (e) { return ''; }
}
function canPost(board) {
  if (!fb.ready || !me.user || !me.username) return false;
  return !board.staffOnly || me.staff;
}

function forumShow() {
  var notice = $('forumNotice');
  if (!fbConfigured) {
    setMsg(notice, NOT_CONNECTED, 'info');
  } else setMsg(notice, '');
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
  if (b.staffOnly && !me.staff) { btn.hidden = true; return; }
  btn.hidden = false;
  btn.textContent = 'New post';
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

function authorLine(name, staff, ts, extra) {
  var m = el('div', 'post-meta');
  var n = el('span', 'notranslate', name || 'Unknown'); n.setAttribute('translate', 'no'); m.appendChild(n);
  if (staff) m.appendChild(el('span', 'staff-tag', 'Staff'));
  m.appendChild(el('span', '', fmtDate(ts)));
  if (extra) m.appendChild(el('span', '', extra));
  return m;
}
function postRow(board, id, d) {
  var b = el('button', 'ore-panel post-row'); b.type = 'button';
  b.appendChild(el('div', 'post-title', d.title || '(untitled)'));
  b.appendChild(authorLine(d.authorName, d.staff, d.createdAt, (d.replyCount || 0) + ' replies'));
  b.addEventListener('click', function () { openThread(board, id, d); });
  return b;
}

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
  t.appendChild(authorLine(d.authorName, d.staff, d.createdAt));
  t.appendChild(el('div', 'ore-panel thread-body', d.body));
  if (me.user && (me.user.uid === d.authorUid || me.staff)) {
    var del = el('button', 'ore-btn danger small', 'Delete post'); del.type = 'button'; del.style.alignSelf = 'flex-start';
    del.addEventListener('click', function () {
      if (!confirm('Delete this post?')) return;
      postsRef(board).doc(id).delete().then(function () { toast('Post deleted'); back.click(); }).catch(function () { toast('Could not delete'); });
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
        body: body, authorUid: me.user.uid, authorName: me.username, staff: me.staff,
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
function canReply() { return fb.ready && me.user && me.username; }

function loadReplies(board, id, rl) {
  rl.innerHTML = '';
  postsRef(board).doc(id).collection('replies').orderBy('createdAt', 'asc').limit(200).get().then(function (snap) {
    rl.innerHTML = '';
    if (snap.empty) { rl.appendChild(el('div', 'dim', 'No replies yet.')); return; }
    snap.forEach(function (d) {
      var r = d.data(), box = el('div', 'ore-panel reply');
      box.appendChild(authorLine(r.authorName, r.staff, r.createdAt));
      box.appendChild(el('div', 'reply-body', r.body));
      if (me.user && (me.user.uid === r.authorUid || me.staff)) {
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
  if (!canPost(b)) { setMsg(msg, 'You can\'t post here.', 'err'); return; }
  if (!title || !body) { setMsg(msg, 'Please fill in both the title and the message.', 'err'); return; }
  if (Date.now() < forum.cooldown) { setMsg(msg, 'Slow down a little before posting again.', 'err'); return; }
  $('postSubmit').disabled = true;
  postsRef(b.id).add({
    title: title, body: body, authorUid: me.user.uid, authorName: me.username, staff: me.staff,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(), replyCount: 0
  }).then(function () {
    forum.cooldown = Date.now() + 8000;
    closeModal('postModal'); toast('Posted'); loadPosts(); loadHomeUpdates();
  }).catch(function () { setMsg(msg, 'Could not post. Please try again.', 'err'); }).then(function () { $('postSubmit').disabled = false; });
});

/* latest updates on the home page */
function loadHomeUpdates() {
  var box = $('homeUpdates'); box.innerHTML = '';
  if (!fb.ready) { box.appendChild(el('div', 'ore-panel empty-box', 'Update posts from the staff team will show up here.')); return; }
  postsRef('updates').orderBy('createdAt', 'desc').limit(3).get().then(function (snap) {
    box.innerHTML = '';
    if (snap.empty) { box.appendChild(el('div', 'ore-panel empty-box', 'No updates yet — check back soon!')); return; }
    snap.forEach(function (d) {
      var data = d.data(), b = el('button', 'ore-panel mini-post'); b.type = 'button';
      b.appendChild(el('span', 't', data.title)); b.appendChild(el('span', 'd', fmtDate(data.createdAt)));
      b.addEventListener('click', function () { forum.pending = { board: 'updates', id: d.id, data: data }; if (location.hash === '#forum') forumShow(); else location.hash = '#forum'; });
      box.appendChild(b);
    });
  }).catch(function () { box.innerHTML = ''; });
}
loadHomeUpdates();

/* ===================================================================== */
window.addEventListener('hashchange', route);
route();
setAuthMode('login');
refreshAccountUI();
initFirebase();
