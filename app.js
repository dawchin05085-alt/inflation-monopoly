/* =========================================================
   常數與進階設定
========================================================= */
const PLAYER_COLORS = ['#f5c451', '#60a5fa', '#f87171', '#34d399', '#a78bfa', '#fb923c', '#22d3ee', '#f472b6'];
const PLAYER_DEF_NAMES = ['紅頂富商', '藍鯨集團', '烈焰財團', '翡翠資本', '紫晶控股', '橙海投資', '青雲航運', '緋櫻地產'];
const SALARY_BASE = 3000;
const HOUSE_MULT = [1, 2, 3.5, 5.5, 8];
const HOUSE_LABEL = ['空地', '一級', '二級', '三級', '地標'];

const DEITIES = {
  land: { name: '土地公', icon: '⛩️', color: '#a3e635', good: true,
    desc: '買地享 8 折（大土地公免費）；自己付過路費減半（大土地公免過路費）；大土地公踩到他人土地可直接奪取該地。' },
  fortune: { name: '財神', icon: '💰', color: '#fbbf24', good: true,
    desc: '買地享 8 折（大財神免費）；大財神每走一步額外獲得現金 $300/步。' },
  happy: { name: '福神', icon: '🎎', color: '#f472b6', good: true,
    desc: '蓋房升級費用減半（大福神免費）；大福神免疫命運卡的負面事件。' },
  poor: { name: '窮神', icon: '🪙', color: '#94a3b8', good: false,
    desc: '（負面）自己付的過路費 +50%；每回合移動會損失現金 $400（大窮神損失 $1500）。' },
  bad: { name: '衰神', icon: '💀', color: '#7c8597', good: false,
    desc: '（負面）有 50% 機率每回合只能前進 1 步（大衰神必定只能走 1 步）。' },
};

/* 取得神明效果說明文字 */
function deityEffectText(type) {
  return (DEITIES[type] && DEITIES[type].desc) || '';
}

const ITEMS = {
  accel: { name: '通膨加速卡', icon: '🔥', price: 100, desc: '立即觸發一次全域通膨循環。' },
  freeze: { name: '經濟凍結卡', icon: '❄️', price: 90, desc: '未來 5 輪停止通膨。' },
  tsunami: { name: '金融海嘯卡', icon: '🌊', price: 110, desc: '指定玩家租金收入 -50%，持續 3 回合。' },
  dice: { name: '遙控骰子', icon: '🎯', price: 80, desc: '自選前進 1-6 步。' },
  barricade: { name: '路障', icon: '🚧', price: 50, desc: '在指定格子放置路障，他人經過即停下。' },
  summon: { name: '請神符', icon: '📜', price: 90, desc: '隨機召喚神明附身自己。' },
  dismiss: { name: '送神符', icon: '🧧', price: 60, desc: '送走自己身上的神明。' },
  bazooka: { name: '火箭筒', icon: '🚀', price: 120, desc: '發射火箭筒直接重創另一名玩家，使其受傷送醫 3 回合。' },
  demolish: { name: '拆除卡', icon: '🏚️', price: 100, desc: '拆除任一玩家的某一處土地或房屋（調降一級，空地則收回為無主地）。' },
  redcard: { name: '紅卡', icon: '📈', price: 130, desc: '使指定的股票連續三天「漲停板」。' },
  blackcard: { name: '黑卡', icon: '📉', price: 130, desc: '使指定的股票連續三天「跌停板」。' },
  taxcard: { name: '查稅卡', icon: '💰', price: 100, desc: '強制從指定對手身上收取其現金 20% 的稅金。' },
  pricehike: { name: '漲價卡', icon: '💹', price: 90, desc: '使指定路段的土地過路費加倍，持續五輪。' },
  seal: { name: '查封卡', icon: '🔏', price: 80, desc: '使指定路段的土地停收過路費，持續五輪（可反制漲價卡）。' },
  auction: { name: '拍賣卡', icon: '🔨', price: 150, desc: '強制拍賣對手的一塊土地，由出價最高者得標。' },
  staycard: { name: '停留卡', icon: '⏸️', price: 60, desc: '指定自己或對手在原地停留一回合。' },
  motorcycle: { name: '機車卡', icon: '🏍️', price: 70, desc: '使用後接下來 5 回合可擲兩顆骰子前進。' },
  car: { name: '汽車卡', icon: '🏎️', price: 110, desc: '使用後接下來 5 回合可擲三顆骰子前進。' },
};

const PROP_NAMES = [
  '夜市攤位', '文創小店', '捷運商圈', '海濱別墅', '科技園區', '金融中心', '觀光飯店', '工業廠房',
  '購物商場', '半導體廠', '私人島嶼', '太空基地', '溫泉會館', '遊艇碼頭', '電競館', '雲端機房',
  '釀酒莊園', '賽車場', '美術館', '摩天輪', '數據中心', '綠能電廠', '時尚精品', '百貨總店',
  '晶片大樓', '星光劇院', '風力電網', '生技藥廠', '國際自貿區', '深海油田', '賽車賽道', '物流園區'
];

/* 角色 ICON 清單 */
const DEF_ICONS = ['🏎️', '🚗', '✈️', '🚢', '🛸', '🦖', '🩴', '🚩'];
const ICON_LABELS = {
  '🏎️': '🏎️ 跑車',
  '🚗': '🚗 休旅車',
  '✈️': '✈️ 飛機',
  '🚢': '🚢 輪船',
  '🛸': '🛸 飛碟',
  '🦖': '🦖 恐龍',
  '🩴': '🩴 拖鞋',
  '🚩': '🚩 旗子'
};

/* 漲跌停限制 */
const STOCK_LIMIT = 0.10;

/* 股票分類 */
const STOCK_CATS = {
  tech: { label: '科技', color: '#60a5fa' },
  semi: { label: '半導體', color: '#818cf8' },
  ai: { label: 'AI', color: '#a78bfa' },
  fin: { label: '金融', color: '#f5c451' },
  energy: { label: '能源', color: '#fb923c' },
  bio: { label: '生技', color: '#34d399' },
  ship: { label: '航運', color: '#22d3ee' },
  consume: { label: '消費', color: '#f472b6' },
  material: { label: '原物料', color: '#d6b370' },
  reit: { label: '不動產', color: '#94f9c0' },
  game: { label: '娛樂', color: '#f87171' },
};

/* 32 檔真實上市股票名冊（生技包含康霈 6919） */
const STOCK_DEF = [
  ['2330', '台積電', 'semi', 540], ['2317', '鴻海', 'tech', 110], ['2454', '聯發科', 'semi', 740],
  ['2382', '廣達', 'tech', 240], ['2308', '台達電', 'tech', 290], ['NVDA', '輝達', 'ai', 450],
  ['MSFT', '微軟', 'ai', 380], ['AAPL', '蘋果', 'ai', 170], ['TSLA', '特斯拉', 'ai', 210],
  ['2881', '富邦金', 'fin', 72], ['2882', '國泰金', 'fin', 54], ['2891', '中信金', 'fin', 26],
  ['2886', '兆豐金', 'fin', 37], ['1301', '台塑', 'material', 85], ['2002', '中鋼', 'material', 29],
  ['6505', '台塑化', 'energy', 81], ['6919', '康霈', 'bio', 420], ['4162', '智擎', 'bio', 98],
  ['1795', '美時', 'bio', 280], ['4147', '中裕', 'bio', 68], ['1707', '葡萄王', 'bio', 160],
  ['2603', '長榮', 'ship', 150], ['2609', '陽明', 'ship', 65], ['2615', '萬海', 'ship', 55],
  ['2618', '長榮航', 'ship', 35], ['1216', '統一', 'consume', 75], ['2207', '和泰車', 'consume', 650],
  ['2912', '統一超', 'consume', 270], ['01002T', '國泰一號', 'reit', 15], ['5478', '智冠', 'game', 130],
  ['6180', '橘子', 'game', 78], ['3546', '宇峻', 'game', 82]
];

/* =========================================================
   狀態
========================================================= */
let config = {};
let state = null;
let timer = { id: null, total: 0, remaining: 0 };
let modalResolver = null;
let busy = false;
let rolledThisTurn = false;
let view = { x: 0, y: 0, zoom: 0.85 };
let bbox = { minX: 0, minY: 0, maxX: 0, maxY: 0 };

/* 連線對戰模式變數 */
let playMode = 'local'; // 'local' | 'online'
let peerRole = 'host';  // 'host' | 'guest'
let peer = null;
let connToHost = null;       // Guest 用：連接到 Host 的連線
let guestConnections = [];  // Host 用：連接到 Guest 的連線清單
let onlinePlayers = [];     // 儲存連線中玩家資訊 { peerId, name, icon }
let lastActiveTurnIndex = -1;
let gameEnded = false;
let clientCurrentTurn = -1;

const $ = id => document.getElementById(id);
const sleep = ms => new Promise(r => setTimeout(r, ms));
const rnd = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
const pick = a => a[rnd(0, a.length - 1)];

function shuffleArray(arr) {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

function inf(a) {
  return Math.round(a * state.inflationMult);
}

function construct() {
  return state.rateHikeTurns > 0 ? 1.3 : 1;
}

function fmt(n) {
  return Math.round(n).toLocaleString('en-US');
}

function curPlayer() {
  return state.players[state.current];
}

function alivePlayers() {
  return state.players.filter(p => p.alive);
}

function hasDeity(p, t) {
  return p.deity && p.deity.type === t;
}

/* 狀態同步的事件日誌系統 */
function log(msg, color) {
  if (state) {
    state.logHistory.push({ msg, color, round: state.round });
    if (state.logHistory.length > 60) state.logHistory.shift();
  }
  renderLogs();
}

function renderLogs() {
  // 更新常駐事件跑馬燈（最新一筆），讓所有人即時看到最新動作
  const ticker = $('eventTicker');
  if (ticker && state && state.logHistory && state.logHistory.length) {
    const last = state.logHistory[state.logHistory.length - 1];
    ticker.innerHTML = `📢 <span style="color:${last.color || 'var(--gold)'}">${last.msg}</span>`;
    ticker.style.opacity = '1';
  } else if (ticker) {
    ticker.style.opacity = '0';
  }

  const container = $('log');
  if (!container) return;
  container.innerHTML = '';
  if (!state || !state.logHistory) return;
  
  // 反向渲染，最新的一筆顯示在最上方
  for (let i = state.logHistory.length - 1; i >= 0; i--) {
    const item = state.logHistory[i];
    const d = document.createElement('div');
    d.className = 'log-line';
    if (item.color) d.style.borderLeftColor = item.color;
    d.innerHTML = `<span class="text-[#8a98b3] mr-1">[輪:${item.round}]</span> ${item.msg}`;
    container.appendChild(d);
  }
}

/* =========================================================
   設定畫面
========================================================= */
let selPlayers = 4;

function buildPcount() {
  const row = $('pcountRow');
  row.innerHTML = '';
  for (let n = 2; n <= 8; n++) {
    const b = document.createElement('button');
    b.className = 'pcount' + (n === selPlayers ? ' active' : '');
    b.textContent = n;
    b.onclick = () => {
      if (playMode === 'online' && peerRole === 'guest') return; // 客戶端不可更改
      selPlayers = n;
      buildPcount();
      buildNameInputs();
      if (playMode === 'online') syncLobbyData();
    };
    row.appendChild(b);
  }
}

function buildNameInputs() {
  const box = $('nameInputs');
  box.innerHTML = '';
  for (let i = 0; i < selPlayers; i++) {
    const iconOptions = Object.keys(ICON_LABELS).map((icon) => {
      const selected = icon === DEF_ICONS[i % DEF_ICONS.length] ? 'selected' : '';
      return `<option value="${icon}" ${selected}>${ICON_LABELS[icon]}</option>`;
    }).join('');
    
    // 判斷是否為本機玩家所屬席位
    let isEditable = true;
    if (playMode === 'online') {
      if (peerRole === 'host') {
        isEditable = (i === 0);
      } else {
        const myIdx = onlinePlayers.findIndex(p => p.peerId === (peer ? peer.id : null));
        isEditable = (i === myIdx);
      }
    }
    
    const isDisabled = isEditable ? '' : 'disabled';
    
    box.innerHTML += `<div class="p-2 border border-[#26314a] rounded bg-[#1a2233] flex flex-col gap-1.5">
      <label class="text-xs flex items-center gap-1.5 font-bold" style="color: var(--muted)">
        <span style="width:12px; height:12px; border-radius:50%; display:inline-block; background:${PLAYER_COLORS[i]}"></span>席位 ${i + 1}
      </label>
      <div class="grid grid-cols-2 gap-2">
        <input id="name${i}" class="seg text-xs py-1.5" value="${PLAYER_DEF_NAMES[i]}" ${isDisabled} onchange="onLobbyInputChange(${i})">
        <select id="icon${i}" class="seg text-xs py-1.5" ${isDisabled} onchange="onLobbyInputChange(${i})">${iconOptions}</select>
      </div>
    </div>`;
  }
}

function onLobbyInputChange(seatIdx) {
  const nameVal = $('name' + seatIdx).value;
  const iconVal = $('icon' + seatIdx).value;
  
  if (playMode === 'online') {
    if (peerRole === 'host') {
      onlinePlayers[0].name = nameVal;
      onlinePlayers[0].icon = iconVal;
      syncLobbyData();
    } else {
      // 訪客向房主發送修改名稱與Icon請求
      if (connToHost && connToHost.open) {
        connToHost.send({
          type: 'LOBBY_UPDATE_REQUEST',
          name: nameVal,
          icon: iconVal
        });
      }
    }
  }
}

function toggleAdvancedConfig() {
  const panel = $('advancedConfigPanel');
  const chevron = $('advChevron');
  if (panel.style.display === 'none') {
    panel.style.display = 'block';
    chevron.textContent = '▲';
  } else {
    panel.style.display = 'none';
    chevron.textContent = '▼';
  }
}
window.toggleAdvancedConfig = toggleAdvancedConfig;

/* 對戰連線模式切換 */
function setPlayMode(mode) {
  playMode = mode;
  const btnLocal = $('btnModeLocal');
  const btnOnline = $('btnModeOnline');
  const configOnline = $('onlineConfigSection');
  
  if (mode === 'online') {
    btnLocal.className = 'btn btn-ghost px-4 py-2 text-xs';
    btnOnline.className = 'btn btn-gold px-4 py-2 text-xs';
    configOnline.style.display = 'block';
    // 預設關閉席位設定為 2，並會隨著玩家加入動態成長
    selPlayers = 2;
    buildPcount();
    buildNameInputs();
  } else {
    btnLocal.className = 'btn btn-gold px-4 py-2 text-xs';
    btnOnline.className = 'btn btn-ghost px-4 py-2 text-xs';
    configOnline.style.display = 'none';
    // 清除 Peer 狀態
    if (peer) {
      peer.destroy();
      peer = null;
    }
    onlinePlayers = [];
    guestConnections = [];
    connToHost = null;
    $('hostRoomCode').textContent = '—';
    $('onlinePlayerList').innerHTML = '<span class="chip border-[#26314a]">已切換回單機模式</span>';
    $('btnStartGame').disabled = false;
    $('btnStartGame').style.opacity = '1';
    
    selPlayers = 4;
    buildPcount();
    buildNameInputs();
  }
}

let MAP = { nodes: [], adj: {} };

function ptOnRect(t, r) {
  const peri = 2 * (r.w + r.h);
  let d = t * peri;
  if (d < r.w) return { x: r.x + d, y: r.y };
  d -= r.w;
  if (d < r.h) return { x: r.x + r.w, y: r.y + d };
  d -= r.h;
  if (d < r.w) return { x: r.x + r.w - d, y: r.y + r.h };
  return { x: r.x, y: r.y + r.h - d };
}

function addEdge(a, b) {
  (MAP.adj[a] = MAP.adj[a] || []).push(b);
  (MAP.adj[b] = MAP.adj[b] || []).push(a);
}

function buildMap() {
  MAP = { nodes: [], adj: {} };
  // 保持寬廣拉伸的矩形空間，使大卡牌之間不重疊
  const rect = { x: 4000, y: 4000, w: 33600, h: 22000 };
  const R = 38;
  for (let i = 0; i < R; i++) {
    const pt = ptOnRect(i / R, rect);
    MAP.nodes.push({ id: i, x: pt.x, y: pt.y, kind: 'ring', ringNext: (i + 1) % R });
  }
  for (let i = 0; i < R; i++) addEdge(i, (i + 1) % R);

  const cx = rect.x + rect.w / 2, cy = rect.y + rect.h / 2;
  // 中央賭場 (ID 40)
  MAP.nodes.push({ id: 40, x: cx, y: cy, kind: 'bridge' });

  let nid = 41; // 新分支節點起始 id
  // 直線路鏈：a —(count 個中繼節點)— b
  function chain(aId, bId, count, kind) {
    const a = nodeById(aId), b = nodeById(bId);
    const ids = [];
    for (let k = 1; k <= count; k++) {
      const t = k / (count + 1);
      const id = nid++;
      MAP.nodes.push({ id, x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t, kind });
      ids.push(id);
    }
    let prev = aId;
    ids.forEach(id => { addEdge(prev, id); prev = id; });
    addEdge(prev, bId);
    return ids;
  }
  // 弧形路鏈：a → 向外凸的頂點 → b（沿弧長等分取樣，節點分佈均勻）
  function chainArc(aId, bId, count, kind, bulge) {
    const a = nodeById(aId), b = nodeById(bId);
    const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
    let nx = mx - cx, ny = my - cy; const nl = Math.hypot(nx, ny) || 1; nx /= nl; ny /= nl;
    const ax = mx + nx * bulge, ay = my + ny * bulge; // 弧頂
    const bez = t => { const u = 1 - t; return { x: u * u * a.x + 2 * u * t * ax + t * t * b.x, y: u * u * a.y + 2 * u * t * ay + t * t * b.y }; };
    const S = 240; const len = [0]; let prev = bez(0);
    for (let i = 1; i <= S; i++) { const q = bez(i / S); len.push(len[i - 1] + Math.hypot(q.x - prev.x, q.y - prev.y)); prev = q; }
    const total = len[S];
    const ids = [];
    for (let k = 1; k <= count; k++) {
      const target = total * k / (count + 1);
      let i = 1; while (i <= S && len[i] < target) i++;
      const q = bez(i / S);
      const id = nid++;
      MAP.nodes.push({ id, x: q.x, y: q.y, kind });
      ids.push(id);
    }
    let prev2 = aId;
    ids.forEach(id => { addEdge(prev2, id); prev2 = id; });
    addEdge(prev2, bId);
    return ids;
  }

  // 十字路網（皆經過中央捷徑 40），每個 3 個中繼節點
  const brN = chain(6, 40, 3, 'bridge');
  const brS = chain(40, 25, 3, 'bridge');
  const brW = chain(34, 40, 3, 'bridge');
  const brE = chain(40, 15, 3, 'bridge');

  // 四角外圍繞道，沿弧線大幅向外凸出，做為轉運角點旁路
  const dNE = chainArc(10, 12, 3, 'detour', 22800);
  const dSE = chainArc(18, 20, 3, 'detour', 22800);
  const dSW = chainArc(28, 30, 3, 'detour', 22800);
  const dNW = chainArc(36, 0, 1, 'detour', 18000);

  // 外環特殊格
  const spec = {
    0: 'start', 2: 'fate', 4: 'news', 6: 'plaza', 10: 'plaza',
    11: 'bank', 12: 'plaza', 13: 'jail', 15: 'plaza', 17: 'fate',
    18: 'plaza', 19: 'news', 20: 'plaza', 25: 'plaza',
    27: 'stock', 28: 'plaza', 30: 'plaza', 32: 'shop', 34: 'plaza', 36: 'plaza'
  };
  const forks = new Set([6, 10, 15, 18, 25, 28, 34, 36]);

  // 分支（橋／繞道）節點輪流給予事件/商店/股市型別，減少一半功能格，換成一般地產
  const branchCycle = ['fate', 'property', 'news', 'property', 'fate', 'shop', 'news', 'stock'];
  let bt = 0;
  [...brN, ...brS, ...brW, ...brE, ...dNE, ...dSE, ...dSW, ...dNW].forEach(id => {
    const n = nodeById(id);
    const t = branchCycle[bt % branchCycle.length]; bt++;
    if (t !== 'property') {
      n.type = t;
      n.name = { fate: '命運', news: '新聞快報', shop: '道具商店', stock: '證券交易所' }[t];
    }
  });
  // 賭場型別 (中央節點 ID 40)
  const casino = nodeById(40);
  casino.type = 'casino';
  casino.name = '拉斯維加斯賭場';

  const GROUPS = [
    { name: '老城商圈', color: '#a16207', size: 3 },
    { name: '濱海特區', color: '#0e7490', size: 3 },
    { name: '科技走廊', color: '#1d4ed8', size: 4 },
    { name: '金融大道', color: '#b45309', size: 3 },
    { name: '工業重鎮', color: '#4d7c0f', size: 3 },
    { name: '觀光勝地', color: '#be185d', size: 3 },
    { name: '頂級地段', color: '#7c3aed', size: 4 },
    { name: '新興開發', color: '#0f766e', size: 3 },
  ];

  const SPECIAL_NAMES = [
    { name: '特許自貿港區', type: 'cash' },
    { name: '特許太空商港', type: 'points' },
    { name: '特許深海油田', type: 'cash' },
    { name: '特許電競娛樂', type: 'points' },
    { name: '特許重工廠區', type: 'cash' },
    { name: '特許星鏈衛星', type: 'points' },
    { name: '特許高鐵軌道', type: 'cash' },
    { name: '特許元宇宙中心', type: 'points' }
  ];
  let specIdx = 0;

  let pIdx = 0, grpIdx = 0, grpLeft = GROUPS[0].size;
  MAP.nodes.forEach(n => {
    if (n.type) return; // 分支/賭場已設定型別 → 跳過
    if (spec[n.id]) {
      n.type = spec[n.id];
      n.name = {
        start: '起點', fate: '命運', news: '新聞快報', shop: '道具商店',
        stock: '證券交易所', bank: '中央銀行', jail: '監獄/休息', plaza: '轉運廣場'
      }[spec[n.id]];
      if (forks.has(n.id)) n.name = '轉運廣場';
      return;
    }
    n.type = 'property';
    n.name = PROP_NAMES[pIdx % PROP_NAMES.length];
    n.basePrice = 800 + pIdx * 150;
    n.baseRent = Math.round((800 + pIdx * 150) * 0.1);
    n.owner = null;
    n.level = 0;
    n.lastActionRound = 0;

    if (n.kind === 'detour' || n.kind === 'bridge') {
      n.isSpecial = true;
      const sProp = SPECIAL_NAMES[specIdx % SPECIAL_NAMES.length];
      n.name = sProp.name;
      n.specialType = sProp.type;
      n.basePrice = 1200 + specIdx * 200;
      n.baseRent = Math.round(n.basePrice * 0.12);
      specIdx++;
    }

    if (grpLeft <= 0) {
      grpIdx = (grpIdx + 1) % GROUPS.length;
      grpLeft = GROUPS[grpIdx].size;
    }
    n.group = grpIdx;
    n.groupName = GROUPS[grpIdx].name;
    n.groupColor = GROUPS[grpIdx].color;
    grpLeft--;
    pIdx++;
  });

  bbox = { minX: 1e9, minY: 1e9, maxX: -1e9, maxY: -1e9 };
  MAP.nodes.forEach(n => {
    bbox.minX = Math.min(bbox.minX, n.x);
    bbox.minY = Math.min(bbox.minY, n.y);
    bbox.maxX = Math.max(bbox.maxX, n.x);
    bbox.maxY = Math.max(bbox.maxY, n.y);
  });
}

function nodeById(id) {
  return MAP.nodes.find(n => n.id === id);
}

/* =========================================================
   自動尋路預設方向
========================================================= */
// 取得「不回頭」的前進選項（排除剛剛來的那一格）
function neighborsForward(cur, from) {
  let opts = (MAP.adj[cur] || []).filter(n => n !== from);
  if (opts.length === 0) opts = (MAP.adj[cur] || []).slice();
  return opts;
}
// 自動／觀戰用的決定性預設方向：盡量沿外環主幹道前進
function getNextNode(cur, from) {
  const opts = neighborsForward(cur, from);
  if (opts.length <= 1) return opts[0];
  const cn = nodeById(cur);
  if (cn && cn.ringNext != null && opts.includes(cn.ringNext)) return cn.ringNext;
  return opts[0];
}
// 岔路選項的方向標籤（含方位箭頭與路線種類）
function routeLabel(cur, id) {
  const a = nodeById(cur), b = nodeById(id);
  const dx = b.x - a.x, dy = b.y - a.y;
  const arrow = Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? '➡️' : '⬅️') : (dy > 0 ? '⬇️' : '⬆️');
  const kindIcon = b.kind === 'bridge' ? '🌉' : (b.kind === 'detour' ? '⛺' : '🧭');
  const kindText = b.kind === 'bridge' ? '中央捷徑' : (b.kind === 'detour' ? '外圍繞道' : '外環主幹道');
  return `${arrow} ${kindIcon} ${kindText} → ${b.name}`;
}

/* =========================================================
   開始戰局
========================================================= */
function startGame() {
  if (playMode === 'online' && peerRole === 'guest') return; // 客戶端等房主指令

  // 線上模式：房主開局前確認連線人數，並以實際連線玩家數為準
  if (playMode === 'online' && peerRole === 'host') {
    if (!peer || !peer.open) {
      alertModal('尚未建立房間', '請先點擊「建立多人房間」取得房間代碼，並等待玩家連線加入後再開始。');
      return;
    }
    if (isLoadedGame) {
      // 載入存檔的線上遊戲：確保所有存檔中的玩家都已連回 (online)
      const offlineCount = onlinePlayers.filter((p, k) => k > 0 && !p.online).length;
      if (offlineCount > 0) {
        alertModal('無法開始', `還有 ${offlineCount} 位存檔玩家尚未連回。請等待所有玩家綠燈連線。`);
        return;
      }
    } else {
      if (onlinePlayers.length < 2) {
        alertModal('無法建立戰局', '線上對戰至少需要 2 位玩家連線加入後才能開始。請把房間代碼傳給朋友，等待他們加入。');
        return;
      }
      selPlayers = onlinePlayers.length;
    }
  }

  if (isLoadedGame) {
    if (playMode === 'online' && peerRole === 'host') {
      // 確保將最新的 peerId 與連線狀態寫入 state.players
      for (let i = 1; i < state.players.length; i++) {
        state.players[i].peerId = onlinePlayers[i].peerId;
        state.players[i].online = true;
      }
      broadcastData({
        type: 'GAME_START',
        config,
        state
      });
      // 寫入 Session 快取
      localStorage.setItem('dc_monopoly_active_session', JSON.stringify({
        roomCode: peer.id,
        role: 'host',
        playerIndex: 0,
        name: state.players[0].name,
        icon: state.players[0].icon
      }));
    } else if (playMode === 'local') {
      clearActiveSession();
    }
    
    // 隱藏設定，顯示遊戲
    $('setupScreen').style.display = 'none';
    $('game').style.display = 'block';
    $('game').classList.remove('hidden');
    
    buildMapDOM();
    renderAll();
    recenter(true);
    
    log('🎮 戰局已恢復！遊戲已啟動，祝您遊戲愉快。', 'var(--gold)');
    
    isLoadedGame = false;
    gameEnded = false;

    if (playMode === 'online') {
      lastActiveTurnIndex = -1;
      clientCurrentTurn = -1;
      checkTurnTransition();
    } else {
      beginTurn();
    }
    return;
  }
  
  clearActiveSession();
  gameEnded = false;

  const itemCustom = {
    accel: Math.max(1, parseInt($('priceAccel').value) || 100),
    freeze: Math.max(1, parseInt($('priceFreeze').value) || 90),
    tsunami: Math.max(1, parseInt($('priceTsunami').value) || 110),
    dice: Math.max(1, parseInt($('priceDice').value) || 80),
    barricade: Math.max(1, parseInt($('priceBarricade').value) || 50),
    summon: Math.max(1, parseInt($('priceSummon').value) || 90),
    dismiss: Math.max(1, parseInt($('priceDismiss').value) || 60),
  };
  Object.keys(itemCustom).forEach(k => {
    ITEMS[k].price = itemCustom[k];
  });
  
  config = {
    players: selPlayers,
    timeLimit: Math.max(0, parseInt($('cfgTime').value) || 0),
    infTurn: Math.max(1, parseInt($('cfgInfTurn').value) || 5),
    infRate: Math.max(1, parseInt($('cfgInfRate').value) || 50),
    cash: Math.max(0, parseInt($('cfgCash').value) || 0),
    save: Math.max(0, parseInt($('cfgSave').value) || 0),
    points: Math.max(0, parseInt($('cfgPoints').value) || 100),
    gainStart: Math.max(0, parseInt($('gainStartPoints').value) || 25),
    gainEvent: Math.max(0, parseInt($('gainEventPoints').value) || 15),
    stockLimit: $('cfgStockLimit') ? $('cfgStockLimit').checked : false,
    stockShares: Math.max(100, parseInt($('cfgStockShares') ? $('cfgStockShares').value : '10000') || 10000)
  };
  
  buildMap();
  
  const players = [];
  for (let i = 0; i < selPlayers; i++) {
    const isOnline = playMode === 'online';
    const peerId = isOnline ? (onlinePlayers[i] ? onlinePlayers[i].peerId : null) : null;
    const name = isOnline ? (onlinePlayers[i] ? onlinePlayers[i].name : `玩家 ${i + 1}`) : ($('name' + i)?.value || PLAYER_DEF_NAMES[i]);
    const icon = isOnline ? (onlinePlayers[i] ? onlinePlayers[i].icon : DEF_ICONS[i]) : ($('icon' + i)?.value || DEF_ICONS[i % DEF_ICONS.length]);
    
    players.push({
      id: i,
      peerId, // 用於識別線上端
      name,
      icon,
      color: PLAYER_COLORS[i],
      cash: config.cash,
      savings: config.save,
      points: config.points,
      node: 0,
      from: 37, 
      stocks: {},
      pledged: {},
      tradeLog: [], // 股票交易紀錄
      items: [pick(Object.keys(ITEMS))],
      deity: null,
      alive: true,
      tsunamiTurns: 0,
      skip: false,
      skipTurns: 0,
      diceCount: 1,
      diceCountTurns: 0,
      plazaChoice: null
    });
  }
  
  const order = shuffleArray(players.map(p => p.id));
  state = {
    players,
    turnOrder: order,
    currentOrderIndex: 0,
    current: order[0],
    round: 1,
    inflationMult: 1.0,
    inflationCount: 0,
    freezeTurns: 0,
    rateHikeTurns: 0,
    barricades: {},
    stockOverrides: [],
    priceHikes: [],
    seals: [],
    selStock: STOCK_DEF[0][0],
    selCat: 'all',
    logHistory: [],
    turnActions: [],
    
    casinoLive: null,

    mapDeity: null,
    mapDemon: null,
    deityCooldown: 0,
    demonCooldown: 0,
    
    stocks: STOCK_DEF.map(s => ({
      ticker: s[0],
      name: s[1],
      cat: s[2],
      price: s[3],
      prev: s[3],
      ref: s[3],
      hist: [s[3]],
      limit: 0,
      totalShares: config.stockLimit ? config.stockShares : null,
      availableShares: config.stockLimit ? config.stockShares : null
    }))
  };
  
  spawnDeityOnMap();
  spawnDemonOnMap();
  
  // 房主啟動遊戲並廣播初始狀態
  if (playMode === 'online' && peerRole === 'host') {
    broadcastData({
      type: 'GAME_START',
      config,
      state
    });
    localStorage.setItem('dc_monopoly_active_session', JSON.stringify({
      roomCode: peer.id,
      role: 'host',
      playerIndex: 0,
      name: state.players[0].name,
      icon: state.players[0].icon
    }));
  }
  
  // 隱藏設定，顯示遊戲
  $('setupScreen').style.display = 'none';
  $('game').style.display = 'block';
  $('game').classList.remove('hidden');
  
  buildMapDOM();
  renderAll();
  recenter(true);
  
  log('🎮 戰局已建立！遊戲已啟動，祝您遊戲愉快。', 'var(--gold)');

  // 線上模式：依回合歸屬決定由哪一端開始行動，避免房主代替他人行動
  if (playMode === 'online') {
    lastActiveTurnIndex = -1;
    clientCurrentTurn = -1;
    checkTurnTransition();
  } else {
    beginTurn();
  }
}

/* =========================================================
   實體化地圖神魔生成邏輯
========================================================= */
function findRandomEmptyPropertyNode() {
  const propertyNodes = MAP.nodes.filter(n => n.type === 'property');
  const candidates = propertyNodes.filter(n => {
    const hasPlayer = state.players.some(p => p.alive && p.node === n.id);
    if (hasPlayer) return false;
    if (state.mapDeity && state.mapDeity.node === n.id) return false;
    if (state.mapDemon && state.mapDemon.node === n.id) return false;
    return true;
  });
  return candidates.length > 0 ? pick(candidates).id : null;
}

function spawnDeityOnMap() {
  const node = findRandomEmptyPropertyNode();
  if (node !== null) {
    state.mapDeity = {
      node,
      type: pick(['land', 'fortune', 'happy']),
      big: Math.random() < 0.20
    };
    log(`✨ 一位新神明【${DEITIES[state.mapDeity.type].name}${state.mapDeity.big ? '(大)' : ''}】出現在地圖上的「${nodeById(node).name}」！`, DEITIES[state.mapDeity.type].color);
  }
}

function spawnDemonOnMap() {
  const node = findRandomEmptyPropertyNode();
  if (node !== null) {
    state.mapDemon = {
      node,
      type: pick(['poor', 'bad']),
      big: Math.random() < 0.20
    };
    log(`💀 一隻新惡魔【${DEITIES[state.mapDemon.type].name}${state.mapDemon.big ? '(大)' : ''}】降臨在地圖上的「${nodeById(node).name}」！`, DEITIES[state.mapDemon.type].color);
  }
}

/* =========================================================
   地圖渲染與更新
========================================================= */
function tileColor(n) {
  if (n.type === 'property') return n.owner === null ? '#34415f' : state.players[n.owner].color;
  return {
    start: '#34d399', fate: '#a78bfa', news: '#f59e0b', shop: '#22d3ee',
    stock: '#60a5fa', bank: '#f5c451', jail: '#f87171', plaza: '#e879f9', casino: '#d97706'
  }[n.type] || '#34415f';
}

function tileIcon(n) {
  if (n.type === 'property') return '🏙';
  return {
    start: '🚩', fate: '🃏', news: '📰', shop: '🛒', stock: '📈', bank: '🏦', jail: '⛓', plaza: '🔀', casino: '🎰'
  }[n.type] || '';
}

function buildMapDOM() {
  const world = $('mapWorld');
  [...world.querySelectorAll('.mnode')].forEach(e => e.remove());
  
  const svg = $('mapEdges');
  svg.innerHTML = '';
  const seen = new Set();
  Object.keys(MAP.adj).forEach(a => {
    MAP.adj[a].forEach(b => {
      const key = Math.min(a, b) + '-' + Math.max(a, b);
      if (seen.has(key)) return;
      seen.add(key);
      const na = nodeById(+a), nb = nodeById(+b);
      
      // 繪製地圖底線
      const ln = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      ln.setAttribute('x1', na.x);
      ln.setAttribute('y1', na.y);
      ln.setAttribute('x2', nb.x);
      ln.setAttribute('y2', nb.y);
      ln.setAttribute('stroke', '#1e293b');
      ln.setAttribute('stroke-width', '32');
      ln.setAttribute('stroke-linecap', 'round');
      svg.appendChild(ln);

      // 繪製光流特效線
      const fln = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      fln.setAttribute('x1', na.x);
      fln.setAttribute('y1', na.y);
      fln.setAttribute('x2', nb.x);
      fln.setAttribute('y2', nb.y);
      fln.setAttribute('class', 'flow-line');
      fln.setAttribute('stroke-linecap', 'round');
      svg.appendChild(fln);
    });
  });
  
  svg.setAttribute('width', bbox.maxX + 6000);
  svg.setAttribute('height', bbox.maxY + 6000);
  world.style.width = (bbox.maxX + 6000) + 'px';
  world.style.height = (bbox.maxY + 6000) + 'px';
  
  MAP.nodes.forEach(n => {
    const isFork = (MAP.adj[n.id] || []).length > 2;
    const el = document.createElement('div');
    el.className = 'mnode' + (isFork ? ' fork' : '');
    el.id = 'node' + n.id;
    el.style.left = n.x + 'px';
    el.style.top = n.y + 'px';
    el.innerHTML = `
      <div class="bar" id="bar${n.id}"></div>
      <div class="nname">${tileIcon(n)} ${n.name}</div>
      <div id="meta${n.id}" class="nmeta mono"></div>
      <div id="grp${n.id}" class="ngrp"></div>
      <div id="pawns${n.id}" style="display: flex; gap: 3px; flex-wrap: wrap; margin-top: 4px; min-height: 24px;"></div>
    `;
    world.appendChild(el);
  });
  applyView();
}

function updateMap() {
  MAP.nodes.forEach(n => {
    const el = $('node' + n.id);
    if (!el) return;
    
    const bar = $('bar' + n.id);
    const col = tileColor(n);
    if (bar) {
      bar.style.background = col;
      bar.style.color = col; // 用於 CSS currentColor 陰影
    }
    
    // 依所有權設定卡片邊框與自訂動態霓虹光暈 (Glow)
    let glow = null;
    if (n.type === 'property') {
      if (n.owner !== null) {
        const owner = state.players[n.owner];
        el.style.borderWidth = '16px';
        el.style.borderColor = owner.color;
        glow = owner.color;
      } else {
        el.style.borderWidth = '16px';
        el.style.borderColor = '#1e293b';
      }
    } else {
      glow = col;
    }
    
    const playersOnNode = state.players.filter(pl => pl.alive && pl.node === n.id);
    const hasCurPlayer = playersOnNode.some(pl => pl.id === curPlayer().id);
    const hasOtherPlayers = playersOnNode.some(pl => pl.id !== curPlayer().id);
    
    // 若該卡片目前無玩家站在上面，顯示精緻的周邊霓虹光暈，避免被高亮覆蓋
    if (glow && !hasCurPlayer && !hasOtherPlayers) {
      el.style.boxShadow = `0 8px 32px rgba(0, 0, 0, 0.5), 0 0 16px ${glow}25`;
    } else if (!hasCurPlayer && !hasOtherPlayers) {
      el.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.5)';
    }
    
    const meta = $('meta' + n.id);
    if (meta) {
      let t = '';
      if (n.type === 'property') {
        if (n.owner !== null) {
          const owner = state.players[n.owner];
          t = `【${owner.name.substring(0, 4)}】${HOUSE_LABEL[n.level]}`;
          if (n.isSpecial) {
            const bonusDesc = n.specialType === 'cash'
              ? `$${fmt(Math.round(500 * (1 + n.level * 0.6) * state.inflationMult))}`
              : `${15 + n.level * 8}點`;
            t += ` | 🚩+${bonusDesc}`;
          }
        } else {
          t = `${n.isSpecial ? '特許事業' : '無主'} · $${fmt(inf(n.basePrice))}`;
        }
      }
      
      // 實體化地圖神魔顯示
      if (state.mapDeity && state.mapDeity.node === n.id) {
        const d = DEITIES[state.mapDeity.type];
        t = `✨[${d.name}${state.mapDeity.big ? '★' : ''}] ` + t;
      }
      if (state.mapDemon && state.mapDemon.node === n.id) {
        const d = DEITIES[state.mapDemon.type];
        t = `💀[${d.name}${state.mapDemon.big ? '★' : ''}] ` + t;
      }
      
      if (state.barricades[n.id]) t = '🚧 路障 ' + t;
      meta.textContent = t;
    }
    
    const grp = $('grp' + n.id);
    if (grp) {
      if (n.type === 'property') {
        const mono = isMonopoly(n);
        let prefix = n.isSpecial ? '🏢 ' : '▰ ';
        let gName = n.isSpecial ? `特許 · ${n.groupName}` : n.groupName;
        grp.innerHTML = `<span style="color: ${n.groupColor}">${prefix}${gName}</span>${mono ? ' <span style="color:' + n.groupColor + '; font-weight:900;">👑壟斷</span>' : ''}`;
      } else {
        grp.innerHTML = '';
      }
    }
    
    const box = $('pawns' + n.id);
    if (box) {
      box.innerHTML = '';
      state.players.filter(p => p.alive && p.node === n.id).forEach(p => {
        const isCur = p.id === curPlayer().id;
        const wrap = document.createElement('div');
        wrap.className = 'pawn-tag' + (isCur ? ' pawn-tag-cur' : '');
        wrap.style.setProperty('--pcolor', p.color);
        wrap.innerHTML = `<span class="pawn-marker${isCur ? ' pawn-pulse' : ''}" style="border-color:${p.color};">${p.icon}</span>` +
          `<span class="pawn-name" style="background:${p.color}; color:#fff; text-shadow:0 1px 2px rgba(0,0,0,0.8);">${p.name}</span>`;
        box.appendChild(wrap);
      });
    }
    
    el.classList.toggle('hl', hasCurPlayer);
    el.classList.toggle('has-others', hasOtherPlayers && !hasCurPlayer);

    // 渲染 SimCity 風格地圖卡牌上方的角色浮動氣泡
    let bubbleEl = el.querySelector('.node-floating-bubble');
    if (playersOnNode.length > 0) {
      if (!bubbleEl) {
        bubbleEl = document.createElement('div');
        bubbleEl.className = 'node-floating-bubble';
        el.appendChild(bubbleEl);
      }
      const curPl = playersOnNode.find(pl => pl.id === curPlayer().id) || playersOnNode[0];
      bubbleEl.style.setProperty('--pcolor', curPl.color);
      bubbleEl.innerHTML = playersOnNode.map(p => `
        <span class="bubble-pawn">${p.icon}</span>
      `).join('');
    } else {
      if (bubbleEl) bubbleEl.remove();
    }
  });
}

function applyView() {
  $('mapWorld').style.transform = `translate(${view.x}px, ${view.y}px) scale(${view.zoom})`;
}

/* 顯示目前行動玩家正踩在哪個地點 */
function updateCurrentTileLabel(p) {
  const el = $('currentTileLabel');
  if (!el) return;
  if (!p || !state) { el.style.display = 'none'; return; }
  const n = nodeById(p.node);
  if (!n) { el.style.display = 'none'; return; }
  let ownerTxt = '';
  if (n.type === 'property' && n.owner !== null) {
    const owner = state.players[n.owner];
    ownerTxt = owner.id === p.id ? '（自己的地）' : `（${owner.name} 的地）`;
  }
  el.innerHTML = `<span style="color:${p.color}">${p.icon} ${p.name}</span>` +
    ` <span style="color:#8a98b3">正踩在</span> ` +
    `<span style="color:#34d399">${tileIcon(n)} ${n.name}</span>` +
    (ownerTxt ? ` <span style="color:#8a98b3;font-size:12px">${ownerTxt}</span>` : '');
  el.style.display = 'block';
}

function recenter(initial) {
  const vp = $('mapViewport');
  const w = vp.clientWidth, h = vp.clientHeight;
  const n = nodeById(curPlayer().node);
  if (initial) {
    const cx = (bbox.minX + bbox.maxX) / 2, cy = (bbox.minY + bbox.maxY) / 2;
    // 使用 12000px 的邊界補償以完美容納超大卡片邊緣
    view.zoom = Math.min(w / (bbox.maxX - bbox.minX + 12000), h / (bbox.maxY - bbox.minY + 12000), 0.15);
    view.x = w / 2 - cx * view.zoom;
    view.y = h / 2 - cy * view.zoom;
  } else {
    view.x = w / 2 - n.x * view.zoom;
    view.y = h / 2 - n.y * view.zoom;
  }
  applyView();
}

function zoomBy(f) {
  view.zoom = Math.max(0.01, Math.min(3.0, view.zoom * f));
  applyView();
}
window.zoomBy = zoomBy;

/* 將地圖平移置中到指定節點（可選同時設定縮放） */
function centerOnNode(nodeId, zoom) {
  const vp = $('mapViewport');
  const w = vp.clientWidth, h = vp.clientHeight;
  const n = nodeById(nodeId);
  if (!n) return;
  if (typeof zoom === 'number') {
    view.zoom = Math.max(0.01, Math.min(3.0, zoom));
  }
  view.x = w / 2 - n.x * view.zoom;
  view.y = h / 2 - n.y * view.zoom;
  applyView();
}

/* 放大並聚焦到「目前行動玩家」的位置 */
function zoomToCurrentPlayer() {
  const target = Math.min(0.35, view.zoom * 1.3 < 0.15 ? 0.15 : view.zoom * 1.3);
  centerOnNode(curPlayer().node, target);
  flashFocusNode(curPlayer().node);
}
window.zoomToCurrentPlayer = zoomToCurrentPlayer;

/* 點擊玩家狀態 → 跳轉並聚焦到該玩家所在位置 */
function focusPlayer(pid) {
  if (!state) return;
  const p = state.players.find(x => x.id === pid);
  if (!p) return;
  const target = Math.max(view.zoom, 0.15);
  centerOnNode(p.node, target);
  flashFocusNode(p.node);
}
window.focusPlayer = focusPlayer;

/* 從玩家狀態彈窗點擊：先關閉彈窗再聚焦，方便看到地圖 */
function focusPlayerFromPanel(pid) {
  closePlayers();
  focusPlayer(pid);
}
window.focusPlayerFromPanel = focusPlayerFromPanel;

/* 對焦節點時短暫高亮，方便辨識 */
let _focusFlashTimer = null;
function flashFocusNode(nodeId) {
  const el = $('node' + nodeId);
  if (!el) return;
  document.querySelectorAll('.mnode.focus-flash').forEach(e => e.classList.remove('focus-flash'));
  el.classList.add('focus-flash');
  if (_focusFlashTimer) clearTimeout(_focusFlashTimer);
  _focusFlashTimer = setTimeout(() => el.classList.remove('focus-flash'), 1600);
}

/* 重構平移拖曳地圖邏輯 (點擊卡片或背景均可流暢抓取) */
(function() {
  const vp = $('mapViewport');
  let drag = false, sx, sy, ox, oy;
  vp.addEventListener('mousedown', e => {
    // 排除按鈕、輸入框、下拉選單等互動元件，確保其原有操作不受拖曳影響
    if (e.target.tagName === 'BUTTON' || e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.closest('.btn') || e.target.closest('input') || e.target.closest('select')) {
      return;
    }
    if (e.button === 0 || e.button === 1) { // 左鍵或中鍵
      drag = true;
      sx = e.clientX;
      sy = e.clientY;
      ox = view.x;
      oy = view.y;
      vp.classList.add('dragging');
      if (e.button === 1 || e.target.tagName === 'svg' || e.target.id === 'mapViewport' || e.target.id === 'mapWorld') {
        e.preventDefault();
      }
    }
  });
  window.addEventListener('mousemove', e => {
    if (!drag) return;
    view.x = ox + (e.clientX - sx);
    view.y = oy + (e.clientY - sy);
    applyView();
  });
  window.addEventListener('mouseup', () => {
    drag = false;
    vp.classList.remove('dragging');
  });
  vp.addEventListener('wheel', e => {
    e.preventDefault();
    zoomBy(e.deltaY < 0 ? 1.1 : 0.9);
  }, { passive: false });
  vp.addEventListener('auxclick', e => {
    if (e.button === 1) e.preventDefault();
  });
})();

/* =========================================================
   面板管理
========================================================= */
function netWorth(p) {
  let w = p.cash + p.savings;
  MAP.nodes.forEach(n => {
    if (n.type === 'property' && n.owner === p.id) {
      w += inf(n.basePrice) + n.level * inf(n.basePrice) * 0.6;
    }
  });
  Object.keys(p.stocks).forEach(tk => {
    w += getStockQty(p, tk) * stockPrice(tk);
  });
  Object.keys(p.pledged).forEach(tk => {
    w += p.pledged[tk].shares * stockPrice(tk) - p.pledged[tk].loan;
  });
  return Math.round(w);
}

function deityBadge(p) {
  if (!p.deity) return '';
  const d = DEITIES[p.deity.type];
  return `<div class="w-full">
    <span class="deity-badge" style="background:${d.color}22; color:${d.color}; border:1px solid ${d.color}55" title="${deityEffectText(p.deity.type)}">
      ${d.icon} ${d.name}${p.deity.big ? '★' : ''} ${p.deity.turns}T
    </span>
    <div class="text-[10px] mt-1 leading-relaxed" style="color:${d.color}">📜 ${deityEffectText(p.deity.type)}</div>
  </div>`;
}

function openPlayers() {
  closePanels();
  renderPlayers();
  $('playersPanel').style.display = 'flex';
}

function closePlayers() {
  $('playersPanel').style.display = 'none';
}

function renderPlayers() {
  const sortedPlayers = state.players
    .filter(pl => pl.alive)
    .map(pl => ({ id: pl.id, worth: netWorth(pl) }))
    .sort((a, b) => b.worth - a.worth);
  
  const rankMap = {};
  sortedPlayers.forEach((item, index) => {
    rankMap[item.id] = index + 1;
  });

  const cards = state.players.map(p => {
    const active = p.id === state.current;
    const rank = p.alive ? rankMap[p.id] : null;
    const rankBadge = rank ? `<span class="chip border-[#f5c451] text-[#f5c451]">🏆 排名 #${rank}</span>` : '';
    const stocksTxt = Object.keys(p.stocks).filter(k => getStockQty(p, k) > 0).map(k => {
      const s = state.stocks.find(x => x.ticker === k);
      const name = s ? s.name : k;
      const qty = getStockQty(p, k);
      const avg = getStockAvgCost(p, k);
      const price = stockPrice(k);
      const pnl = avg > 0 ? ((price - avg) / avg * 100) : 0;
      return `${name}: ${qty}股 (成本:$${avg}, 損益:${pnl >= 0 ? '+' : ''}${pnl.toFixed(1)}%)`;
    }).join('<br>') || '—';
    const pledgeTxt = Object.keys(p.pledged).map(k => `${k}質${p.pledged[k].shares}`).join(' ') || '—';
    const props = MAP.nodes.filter(n => n.type === 'property' && n.owner === p.id).length;
    const isOnline = playMode === 'local' || p.online !== false;
    const onlineBadgeText = isOnline 
      ? `<span class="chip text-[#34d399] border-[#34d399]">🟢 在線</span>` 
      : `<span class="chip text-[#f87171] border-[#f87171]">🔴 離線託管</span>`;
      
    return `<div class="card ${active ? 'glow' : ''} p-3 flex flex-col justify-between" style="${p.alive ? '' : 'opacity: 0.4'}; cursor: pointer;" title="點擊跳轉到 ${p.name} 的位置" onclick="focusPlayerFromPanel(${p.id})">
      <div>
        <div class="flex items-center justify-between border-b border-[#26314a] pb-1.5 mb-2">
          <div class="flex items-center gap-2">
            <span class="pawn font-bold text-sm ${isOnline ? '' : 'offline-grayscale'}" style="border-color:${p.color}">${p.icon}</span>
            <span class="font-bold text-[#e6edf7]">${p.name}</span>
          </div>
          <div class="flex items-center gap-1">
            ${rankBadge}
            ${playMode === 'online' ? onlineBadgeText : ''}
            ${p.alive ? (active ? '<span class="chip text-[#34d399] border-[#34d399]">行動中</span>' : '') : '<span class="chip text-[#f87171] border-[#f87171]">破產</span>'}
          </div>
        </div>
        <div class="grid grid-cols-2 gap-x-3 gap-y-1 text-xs mb-2">
          <div class="text-[#8a98b3]">現金</div>
          <div class="mono text-right text-[#f5c451] font-bold">$${fmt(p.cash)}</div>
          <div class="text-[#8a98b3]">銀行定存</div>
          <div class="mono text-right text-[#34d399]">$${fmt(p.savings)}</div>
          <div class="text-[#8a98b3]">點數 (PP)</div>
          <div class="mono text-right text-[#60a5fa] font-bold">${p.points} PP</div>
          <div class="text-[#8a98b3]">地產數量</div>
          <div class="mono text-right text-[#e6edf7]">${props} 筆</div>
          <div class="text-[#8a98b3]">總資產估值</div>
          <div class="mono text-right text-[#60a5fa] font-bold">$${fmt(netWorth(p))}</div>
        </div>
        <div class="text-[11px] text-[#8a98b3] mb-1">現有持股：<span class="text-[#60a5fa] mono">${stocksTxt}</span></div>
        <div class="text-[11px] text-[#8a98b3] mb-1">股票質押：<span class="text-[#a78bfa] mono">${pledgeTxt}</span></div>
      </div>
      <div class="mt-2 flex flex-wrap gap-1">
        ${deityBadge(p)}
        ${p.tsunamiTurns > 0 ? `<span class="deity-badge" style="background:#1e3a8a55; color:#93c5fd; border:1px solid #3b82f655">🌊海嘯${p.tsunamiTurns}T</span>` : ''}
      </div>
    </div>`;
  }).join('');
  
  $('playersBody').innerHTML = `
    <div class="flex items-center justify-between mb-3">
      <div class="display text-xl font-bold text-[#f5c451]">👥 玩家狀態</div>
      <button class="btn btn-ghost px-3 py-1" onclick="closePlayers()">關閉 ✕</button>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">${cards}</div>
  `;
}

function openLog() {
  closePanels();
  $('logPanel').style.display = 'flex';
}

function closeLog() {
  $('logPanel').style.display = 'none';
}

function closePanels() {
  $('stockPanel').style.display = 'none';
  $('itemPanel').style.display = 'none';
  $('buildPanel').style.display = 'none';
  $('playersPanel').style.display = 'none';
  $('logPanel').style.display = 'none';
  $('modal').style.display = 'none';
}

function renderAll() {
  updateMap();
  $('roundChip').textContent = '第 ' + state.round + ' 輪';
  $('infChip').textContent = '×' + state.inflationMult.toFixed(2);
  const p = curPlayer();
  $('turnPawn').style.borderColor = p.color;
  $('turnPawn').textContent = p.icon;
  $('turnName').textContent = p.name;
  updateCurrentTileLabel(p);
  
  // 多人對戰權限過濾：判斷目前是不是自己的回合。如果不是，禁用一切主動操作按鈕！
  if (playMode === 'online') {
    const myTurn = isMyTurn();
    $('btnRoll').disabled = !myTurn || rolledThisTurn || busy;
    $('btnEnd').disabled = !myTurn || !rolledThisTurn || busy;
    $('btnStock').disabled = !myTurn;
    $('btnItems').disabled = !myTurn;
    $('btnBuild').disabled = !myTurn;
    
    // 樣式透明度微調
    $('btnRoll').style.opacity = ($('btnRoll').disabled) ? '0.4' : '1';
    $('btnEnd').style.opacity = ($('btnEnd').disabled) ? '0.4' : '1';
    $('btnStock').style.opacity = ($('btnStock').disabled) ? '0.4' : '1';
    $('btnItems').style.opacity = ($('btnItems').disabled) ? '0.4' : '1';
    $('btnBuild').style.opacity = ($('btnBuild').disabled) ? '0.4' : '1';
    
    if (!myTurn) {
      $('centerMsg').innerHTML = `<span class="text-[#f87171] font-bold">等待對手 [${p.name}] 行動中...</span>`;
      closePanels();
    }
  }
  
  renderLogs();
  renderSidebar();
  updateCasinoView();
  if ($('playersPanel').style.display === 'flex') renderPlayers();
  if ($('stockPanel').style.display === 'flex') renderStock();
  if ($('buildPanel').style.display === 'flex') renderBuild();
  if ($('itemPanel').style.display === 'flex') renderItems();
}

/* =========================================================
   骰子動畫與顯示
========================================================= */
const PIP_MAP = {
  1: [4],
  2: [0, 8],
  3: [0, 4, 8],
  4: [0, 2, 6, 8],
  5: [0, 2, 4, 6, 8],
  6: [0, 2, 3, 5, 6, 8]
};

function showDie(v) {
  const die = $('die');
  // 多骰子（機車/汽車卡）總和可能 >6，PIP_MAP 只有 1~6，故 >6 時改以數字顯示，避免崩潰
  if (!PIP_MAP[v]) {
    die.querySelectorAll('.pip').forEach(p => { p.style.visibility = 'hidden'; });
    let num = die.querySelector('.die-number');
    if (!num) {
      num = document.createElement('div');
      num.className = 'die-number';
      num.style.cssText = 'grid-column:1/4;grid-row:1/4;display:flex;align-items:center;justify-content:center;font-size:34px;font-weight:900;color:#111;font-family:"JetBrains Mono",monospace;';
      die.appendChild(num);
    }
    num.textContent = v;
    num.style.display = 'flex';
    return;
  }
  const num = die.querySelector('.die-number');
  if (num) num.style.display = 'none';
  die.querySelectorAll('.pip').forEach((p, i) => {
    p.style.visibility = PIP_MAP[v].includes(i) ? 'visible' : 'hidden';
  });
}

async function animateDie(v) {
  const d = $('die');
  d.classList.remove('rolling');
  void d.offsetWidth; 
  d.classList.add('rolling');
  for (let k = 0; k < 6; k++) {
    showDie(rnd(1, 6));
    await sleep(70);
  }
  showDie(v);
}

/* =========================================================
   計時器與決定 Modal
========================================================= */
function startTimer() {
  stopTimer();
  // 多人對戰中，只有目前行動玩家端才啟動計時器與超時託管，防止多端計時器重複調用
  if (playMode === 'online') {
    const p = curPlayer();
    if (p.peerId !== peer.id) {
      $('timerTxt').textContent = '等待中';
      $('timerFill').style.width = '100%';
      return;
    }
  }

  if (config.timeLimit <= 0) {
    $('timerTxt').textContent = '∞';
    $('timerFill').style.width = '100%';
    return;
  }
  timer.total = config.timeLimit;
  timer.remaining = config.timeLimit;
  updateTimerUI();
  timer.id = setInterval(() => {
    timer.remaining -= 0.25;
    if (timer.remaining <= 0) {
      timer.remaining = 0;
      updateTimerUI();
      onTimeout();
    } else {
      updateTimerUI();
    }
  }, 250);
}

function stopTimer() {
  if (timer.id) {
    clearInterval(timer.id);
    timer.id = null;
  }
}

function updateTimerUI() {
  if (config.timeLimit <= 0) return;
  $('timerTxt').textContent = Math.ceil(timer.remaining) + 's';
  const pct = timer.total ? (timer.remaining / timer.total) * 100 : 0;
  $('timerFill').style.width = pct + '%';
  $('timerFill').style.background = pct < 30 ? 'linear-gradient(90deg, #f87171, #f5c451)' : 'linear-gradient(90deg, #34d399, #f5c451)';
}

async function onTimeout() {
  stopTimer();
  state.auto = true;
  if (modalResolver) {
    const r = modalResolver;
    modalResolver = null;
    $('modal').style.display = 'none';
    r(false);
  }
  closePanels();
  $('centerMsg').textContent = '⏰ 時間到！系統自動處理中…';
  if (!rolledThisTurn && !busy) {
    await doRoll();
  } else if (rolledThisTurn && !busy) {
    setTimeout(endTurn, 50); 
  }
}

function showChoice(title, html, options) {
  if (state.auto) {
    const f = options.find(o => o.value === false);
    if (f) return Promise.resolve(f.value);
    const d = options.find(o => o.def);
    return Promise.resolve((d || options[0]).value);
  }
  return new Promise(resolve => {
    modalResolver = resolve;
    const btns = options.map((o, k) => `
      <button class="btn ${o.cls || 'btn-ghost'} px-4 py-2 text-sm" onclick="resolveChoice(${k})">${o.label}</button>
    `).join('');
    
    $('modalBox').innerHTML = `
      <div class="display text-xl font-bold mb-2 text-[#f5c451]">${title}</div>
      <div class="text-sm mb-4 text-[#e6edf7]">${html}</div>
      <div class="flex flex-wrap gap-2 justify-end">${btns}</div>
    `;
    $('modal').style.display = 'flex';
    $('modalBox')._opts = options;
  });
}

function resolveChoice(k) {
  const opts = $('modalBox')._opts;
  if (!modalResolver) return;
  const r = modalResolver;
  modalResolver = null;
  $('modal').style.display = 'none';
  r(opts[k].value);
}

function alertModal(t, h) {
  return showChoice(t, h, [{ label: '確定', value: true, cls: 'btn-gold' }]);
}

/* =========================================================
   回合流程
========================================================= */
async function beginTurn() {
  const p = curPlayer();
  if (!p.alive) return endTurn();
  
  // 1. 離線玩家託管處理 (線上模式且我們是房主)
  if (playMode === 'online' && peerRole === 'host' && p.online === false) {
    busy = true;
    rolledThisTurn = false;
    state.auto = true;
    
    // 結算神明
    if (p.deity) {
      p.deity.turns--;
      if (p.deity.turns <= 0) {
        log(`${DEITIES[p.deity.type].icon} <b>${p.name}</b> 的${DEITIES[p.deity.type].name}效期結束，離開了。`, DEITIES[p.deity.type].color);
        p.deity = null;
      }
    }
    
    // 結算金融海嘯
    if (p.tsunamiTurns > 0) p.tsunamiTurns--;
    
    log(`🤖 [系統] 偵測到玩家 <b>${p.name}</b> 離線，已啟用自動託管。`, '#f87171');
    $('centerMsg').innerHTML = `<span class="text-[#f87171] font-bold">🤖 [系統託管中] 玩家 ${p.name} 離線，自動行動中...</span>`;
    
    setTimeout(async () => {
      rolledThisTurn = true;
      const dc = p.diceCount || 1;
      let steps = 0;
      for (let d = 0; d < dc; d++) steps += rnd(1, 6);
      if (hasDeity(p, 'bad') && !p.deity.big && Math.random() < 0.5) steps = 1;
      else if (hasDeity(p, 'bad') && p.deity.big) steps = 1;
      
      await animateDie(steps);
      state.turnActions.push(`🎲 (自動託管) 擲出 ${steps} 點`);
      
      await walk(p, steps);
      await resolveNode(p);
      
      busy = false;
      setTimeout(endTurn, 1500);
    }, 1500);
    return;
  }
  
  if (p.skipTurns && p.skipTurns > 0) {
    p.skipTurns--;
    $('centerMsg').textContent = `${p.name} 本回合暫停中`;
    await alertModal('暫停回合', `<b>${p.name}</b> 目前正在受傷送醫/坐牢暫停中，本回合必須暫停一次 (剩餘暫停 ${p.skipTurns} 回合)。`);
    return endTurn();
  }
  
  // 顯示前一個玩家的回合簡報
  if (state.turnActions && state.turnActions.length > 0 && lastActiveTurnIndex !== -1) {
    const prevP = state.players[lastActiveTurnIndex];
    if (prevP) {
      showTurnBriefingModal(prevP, state.turnActions, p);
    }
  }
  
  // 紀錄回合開始時的財務數據以供行動簡報結算
  p.turnStartCash = p.cash;
  p.turnStartNetWorth = netWorth(p);
  p.turnSpent = 0;
  p.turnStockPnL = 0;
  state.turnActions = [];
  
  lastActiveTurnIndex = state.current;
  busy = false;
  rolledThisTurn = false;
  state.auto = false;
  
  if (playMode === 'local') {
    $('btnRoll').disabled = false;
    $('btnRoll').style.opacity = '1';
    $('btnEnd').disabled = true;
    $('btnEnd').style.opacity = '0.4';
  }
  
  recenter();
  renderAll();
  
  // 分岔方向改為「移動途中抵達轉運廣場時」即時選擇（見 walk()），不再於擲骰前預選
  
  // 結算神明
  if (p.deity) {
    p.deity.turns--;
    if (p.deity.turns <= 0) {
      log(`${DEITIES[p.deity.type].icon} <b>${p.name}</b> 的${DEITIES[p.deity.type].name}效期結束，離開了。`, DEITIES[p.deity.type].color);
      p.deity = null;
    }
  }
  
  // 結算金融海嘯
  if (p.tsunamiTurns > 0) {
    p.tsunamiTurns--;
    if (p.tsunamiTurns === 0) {
      log(`🌊 <b>${p.name}</b> 的金融海嘯影響結束，租金恢復正常。`, '#60a5fa');
    }
  }
  
  // 質押斷頭檢查
  if (playMode === 'local' || (peer && p.peerId === peer.id)) {
    await checkMarginCall(p);
  }
  
  // 窮神扣錢
  if (hasDeity(p, 'poor')) {
    const drain = inf(p.deity.big ? 1500 : 400);
    p.cash -= drain;
    log(`🪙 <b>${p.name}</b> 被窮神財氣糾纏，損失現金 $${fmt(drain)}。`, DEITIES.poor.color);
    if (p.cash < 0 && (playMode === 'local' || (peer && p.peerId === peer.id))) {
      await settleNegative(p);
    }
  }
  
  renderAll();
  
  if (p.skip) {
    p.skip = false;
    $('centerMsg').textContent = `${p.name} 本回合暫停中`;
    await alertModal('暫停回合', `<b>${p.name}</b> 目前正在監獄/休息，本回合必須暫停一次。`);
    return endTurn();
  }
  
  if (!p.alive) return endTurn();
  
  if (playMode === 'local' || (peer && p.peerId === peer.id)) {
    $('centerMsg').textContent = `輪到您的回合，請擲骰移動。`;
  }
  startTimer();
}

async function chooseDirectionAtFork(p, cur, opts) {
  if (!opts || opts.length <= 1) return undefined;
  const buttons = opts.map((id, i) => ({
    label: routeLabel(cur, id),
    value: id,
    cls: nodeById(id).kind === 'ring' ? 'btn-gold' : 'btn-green'
  }));
  const val = await showChoice(
    '🔀 抵達轉運廣場',
    `<b>${nodeById(cur).name}</b>：前方出現岔路，請選擇前進方向：`,
    buttons
  );
  log(`🧭 <b>${p.name}</b> 在轉運廣場選擇了前進方向。`, p.color);
  return (val !== undefined ? val : opts[0]); // 直接回傳下一個節點 id
}

async function doRoll(forced) {
  if (rolledThisTurn || busy) return;
  rolledThisTurn = true;
  busy = true;
  
  $('btnRoll').disabled = true;
  $('btnRoll').style.opacity = '0.4';
  stopTimer();
  closePanels();
  
  const p = curPlayer();
  let steps;
  if (forced) {
    steps = forced;
  } else {
    const dc = p.diceCount || 1;
    steps = 0;
    for (let d = 0; d < dc; d++) steps += rnd(1, 6);
  }
  
  if (hasDeity(p, 'bad') && !p.deity.big && Math.random() < 0.5) {
    steps = 1;
    log(`💀 <b>${p.name}</b> 因衰神干擾，只前進 1 步！`, DEITIES.bad.color);
  } else if (hasDeity(p, 'bad') && p.deity.big) {
    steps = 1;
    log(`💀 <b>${p.name}</b> 因大衰神影響，擲骰必定只前進 1 步！`, DEITIES.bad.color);
  }
  
  await animateDie(steps);
  const dc = p.diceCount || 1;
  $('centerMsg').textContent = `${p.name} ${dc > 1 ? '(' + dc + '顆骰子) ' : ''}擲出了 ${steps} 點`;
  state.turnActions.push(`🎲 擲出 ${steps} 點，移動至「${nodeById(p.node).name}」`);
  
  await walk(p, steps);
  await resolveNode(p);
  
  busy = false;
  
  // 本機或連線我方回合
  if (playMode === 'local' || (peer && p.peerId === peer.id)) {
    $('btnEnd').disabled = false;
    $('btnEnd').style.opacity = '1';
    $('centerMsg').textContent = `請執行決策，完成後請點擊「結束回合」。`;
    startTimer(); 
  }
  
  // 同步目前狀態
  syncState();
  renderAll();
}

async function walk(p, steps) {
  const isActing = (playMode === 'local' || (peer && p.peerId === peer.id));
  let from = p.from;
  // 轉運站方向：僅在「剛好停在轉運站」時設定的方向，影響起步的第一步
  const startChoice = p.plazaChoice;
  p.plazaChoice = null;
  for (let s = 0; s < steps; s++) {
    let nextId;
    // 途中經過岔路一律走預設主幹道（不再彈出選擇）；唯有上一回合停在轉運站所選方向，才在第一步生效
    if (s === 0 && startChoice != null && (MAP.adj[p.node] || []).includes(startChoice)) {
      nextId = startChoice;
    } else {
      nextId = getNextNode(p.node, from);
    }
    from = p.node;
    p.node = nextId;
    
    if (nextId === 0) {
      const pay = inf(SALARY_BASE);
      const pts = config.gainStart;
      p.cash += pay;
      p.points += pts;
      log("🚩 " + `<b>${p.name}</b> 經過起點，領取薪資 $${fmt(pay)} 並獲得 ${pts} 點。`, '#34d399');

      // 特許事業額外分紅
      let bonusMsg = [];
      MAP.nodes.forEach(nNode => {
        if (nNode.isSpecial && nNode.owner === p.id) {
          if (nNode.specialType === 'cash') {
            const reward = Math.round(500 * (1 + nNode.level * 0.6) * state.inflationMult);
            p.cash += reward;
            bonusMsg.push(`💵 ${nNode.name}（分紅：$${fmt(reward)}，含通膨）`);
          } else if (nNode.specialType === 'points') {
            const reward = 15 + nNode.level * 8;
            p.points += reward;
            bonusMsg.push(`🔵 ${nNode.name}（分紅：${reward} 點數）`);
          }
        }
      });
      if (bonusMsg.length > 0) {
        log("🏢 " + `<b>${p.name}</b> 的特許事業在此發放分紅：<br>` + bonusMsg.join('<br>'), '#e879f9');
      }
    }
    
    if (state.barricades[nextId]) {
      delete state.barricades[nextId];
      log(`🚧 <b>${p.name}</b> 撞上路障，停留在 ${nodeById(nextId).name}！`, '#f59e0b');
      updateMap();
      break;
    }
    
    if (!state.auto) {
      updateMap();
      recenter();
      await sleep(140);
    }
  }
  p.from = from;
  
  if (hasDeity(p, 'fortune') && p.deity.big) {
    const reward = 300 * steps;
    p.cash += reward;
    log(`💰 大財神加持！<b>${p.name}</b> 行走獲得地產金 $${fmt(reward)}。`, DEITIES.fortune.color);
  }
  renderAll();
}

/* =========================================================
   節點觸發事件與比大小賭場
========================================================= */
async function resolveNode(p) {
  const n = nodeById(p.node);
  
  // 檢查地產上有無實體神魔可踩點獲得
  if (state.mapDeity && state.mapDeity.node === p.node) {
    const type = state.mapDeity.type;
    const big = state.mapDeity.big;
    p.deity = { type, big, turns: 5 };
    state.mapDeity = null;
    state.deityCooldown = 3; 
    log(`✨ <b>${p.name}</b> 踩點獲得地圖上的【${DEITIES[type].name}${big ? '(大)' : ''}】附身！`, DEITIES[type].color);
    if (playMode === 'local' || (peer && p.peerId === peer.id)) {
      await alertModal('✨ 獲得神明附身', `您踩中了神明靈光！【<b>${DEITIES[type].name}${big ? ' (大天神)' : ''}</b>】已降臨附身！<div class="mt-2 p-2 rounded border text-xs leading-relaxed" style="border-color:${DEITIES[type].color}55; background:${DEITIES[type].color}15; color:${DEITIES[type].color}">📜 神明功能：${deityEffectText(type)}（效期 5 回合）</div>`);
    }
  }
  
  if (state.mapDemon && state.mapDemon.node === p.node) {
    const type = state.mapDemon.type;
    const big = state.mapDemon.big;
    p.deity = { type, big, turns: 5 };
    state.mapDemon = null;
    state.demonCooldown = 3; 
    log(`💀 <b>${p.name}</b> 踩點遭遇地圖上的【${DEITIES[type].name}${big ? '(大)' : ''}】降臨糾纏！`, DEITIES[type].color);
    if (playMode === 'local' || (peer && p.peerId === peer.id)) {
      await alertModal('💀 遭惡魔附身', `不幸！您踩中了邪魔黑氣！【<b>${DEITIES[type].name}${big ? ' (大惡魔)' : ''}</b>】已糾纏上身！<div class="mt-2 p-2 rounded border text-xs leading-relaxed" style="border-color:${DEITIES[type].color}55; background:${DEITIES[type].color}15; color:${DEITIES[type].color}">📜 影響：${deityEffectText(type)}（效期 5 回合）</div>`);
    }
  }

  switch (n.type) {
    case 'property':
      await onProperty(p, n);
      break;
    case 'fate':
      p.points += config.gainEvent;
      log(`🃏 <b>${p.name}</b> 抵達命運格，獲得 +${config.gainEvent} 點點數。`, '#a78bfa');
      if (playMode === 'local' || (peer && p.peerId === peer.id)) {
        await onFate(p);
      }
      break;
    case 'news':
      p.points += config.gainEvent;
      log(`📰 <b>${p.name}</b> 抵達新聞格，獲得 +${config.gainEvent} 點點數。`, '#f59e0b');
      if (playMode === 'local' || (peer && p.peerId === peer.id)) {
        await onNews();
      }
      break;
    case 'shop':
      if (playMode === 'local' || (peer && p.peerId === peer.id)) {
        await openShopBuy(p);
      }
      break;
    case 'stock':
      if (playMode === 'local' || (peer && p.peerId === peer.id)) {
        await onStockExchange(p);
      }
      break;
    case 'bank':
      if (playMode === 'local' || (peer && p.peerId === peer.id)) {
        await onBank(p);
      }
      break;
    case 'jail':
      p.skip = true;
      log(`⛓ <b>${p.name}</b> 進入監獄/休息，下回合暫停。`, '#f87171');
      if (playMode === 'local' || (peer && p.peerId === peer.id)) {
        await alertModal('監獄 / 休息處', '您進入休息拘留區，下一回合暫停一次。');
      }
      break;
    case 'plaza':
      if (playMode === 'local' || (peer && p.peerId === peer.id)) {
        const fwd = neighborsForward(p.node, p.from);
        if (fwd.length > 1) {
          const chosen = await chooseDirectionAtFork(p, p.node, fwd);
          if (chosen != null) {
            p.plazaChoice = chosen;
            log(`🧭 <b>${p.name}</b> 在轉運站選定了下一回合的前進方向：<b>${nodeById(chosen).name}</b>。`, p.color);
            state.turnActions.push(`🧭 在轉運站選擇下一步前往「${nodeById(chosen).name}」`);
            await alertModal('🔀 轉運站', `已設定！下一回合擲骰後，您將朝<b>「${nodeById(chosen).name}」</b>方向出發。`);
          }
        } else {
          await alertModal('🔀 轉運站', `<b>${n.name}</b>：目前此處沒有其他岔路方向可供選擇。`);
        }
      }
      break;
    case 'casino':
      if (playMode === 'local' || (peer && p.peerId === peer.id)) {
        await runCasino(p);
      }
      break;
  }
  syncState();
  renderAll();
}

/* =========================================================
   拉斯維加斯賭場（現金/點數任選、可連續下注、線上即時觀戰）
========================================================= */
let casinoResolver = null;
let casinoActorBusy = false;
const SUITS = ['♥️', '♦️', '♠️', '♣️'];

function cardLabel(v) { return ({ 1: 'A', 11: 'J', 12: 'Q', 13: 'K' })[v] || v; }
function dealCard() { const v = rnd(1, 13); const s = pick(SUITS); return { val: v, label: cardLabel(v), suit: s, red: (s === '♥️' || s === '♦️') }; }
function cardHTML(c, dim) {
  if (!c) return `<div class="poker-card black" style="opacity:.25; display:flex; align-items:center; justify-content:center; font-size:42px;">?</div>`;
  return `<div class="poker-card ${c.red ? 'red' : 'black'} ${dim ? 'opacity-60' : ''}"><div class="text-left">${c.label}</div><div class="text-center text-4xl">${c.suit}</div><div class="text-right">${c.label}</div></div>`;
}

/* 我是否為目前正在賭博的行動玩家 */
function amICasinoActor() {
  if (!state || !state.casinoLive) return false;
  if (playMode === 'local') return true;
  const me = state.players.find(pl => peer && pl.peerId === peer.id);
  return !!(me && me.id === state.casinoLive.pid);
}

function casinoAct(v) { if (casinoResolver) { const r = casinoResolver; casinoResolver = null; r(v); } }
window.casinoAct = casinoAct;

window.casinoQuickBet = function(val) {
  const input = document.getElementById('casinoBet');
  const currency = document.getElementById('casinoCurrency').value;
  if (!input) return;
  const p = state.players[state.casinoLive.pid];
  const bal = currency === 'cash' ? p.cash : p.points;
  if (val === 'all') {
    input.value = bal;
  } else {
    let currentVal = parseInt(input.value) || 0;
    input.value = Math.min(bal, Math.max(1, currentVal + val));
  }
};

function openPropertyStatus() {
  renderPropertyStatus();
  $('propertyStatusPanel').style.display = 'flex';
}
window.openPropertyStatus = openPropertyStatus;

function closePropertyStatus() {
  $('propertyStatusPanel').style.display = 'none';
}
window.closePropertyStatus = closePropertyStatus;

function renderPropertyStatus() {
  const container = $('propertyStatusContent');
  if (!container) return;
  if (!state) {
    container.innerHTML = '<div class="text-center text-[#8a98b3] py-8">遊戲尚未開始</div>';
    return;
  }
  const properties = MAP.nodes.filter(n => n.type === 'property');
  const GROUPS = [
    { name: '老城商圈', color: '#a16207' },
    { name: '濱海特區', color: '#0e7490' },
    { name: '科技走廊', color: '#1d4ed8' },
    { name: '金融大道', color: '#b45309' },
    { name: '工業重鎮', color: '#4d7c0f' },
    { name: '觀光勝地', color: '#be185d' },
    { name: '頂級地段', color: '#7c3aed' },
    { name: '新興開發', color: '#0f766e' },
  ];
  let html = '';
  GROUPS.forEach((g, gIdx) => {
    const groupNodes = properties.filter(n => n.group === gIdx);
    if (groupNodes.length === 0) return;
    let monopolyOwner = null;
    const firstOwner = groupNodes[0].owner;
    if (firstOwner !== null && groupNodes.every(n => n.owner === firstOwner)) {
      monopolyOwner = firstOwner;
    }
    let statusBadge = '';
    if (monopolyOwner !== null) {
      const owner = state.players[monopolyOwner];
      statusBadge = `<span class="px-2.5 py-1 text-xs rounded-full font-bold border border-[#f5c451] text-[#f5c451] bg-[#f5c451]/10">👑 ${owner.name} 壟斷中</span>`;
    } else {
      statusBadge = `<span class="px-2.5 py-1 text-xs rounded-full font-bold border border-dashed border-[#8a98b3] text-[#8a98b3]">🔓 未壟斷</span>`;
    }
    html += `
      <div class="border border-[#26314a] rounded-lg p-3 bg-[#121826]/60">
        <div class="flex items-center justify-between border-b border-[#26314a]/60 pb-2 mb-2.5">
          <div class="flex items-center gap-2">
            <span style="display:inline-block; width: 14px; height: 14px; background: ${g.color}; border-radius: 4px;"></span>
            <span class="font-bold text-sm" style="color: ${g.color};">${g.name}</span>
            <span class="text-xs text-[#8a98b3]">（共 ${groupNodes.length} 塊地）</span>
          </div>
          ${statusBadge}
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
      `;
    groupNodes.forEach(n => {
      let ownerText = '<span class="text-[#8a98b3]">⚪ 無主地</span>';
      if (n.owner !== null) {
        const owner = state.players[n.owner];
        ownerText = `<span class="px-2 py-0.5 rounded text-xs font-bold" style="background: ${owner.color}; color: #fff;">👤 ${owner.name}</span>`;
      }
      const levelText = n.level > 0 ? `<span class="text-[#f5c451] text-xs font-bold">${HOUSE_LABEL[n.level]}</span>` : '<span class="text-[#8a98b3] text-[11px]">空地</span>';
      let rentVal = inf(n.baseRent) * HOUSE_MULT[n.level];
      if (monopolyOwner !== null) rentVal *= 2;
      let specialDesc = '';
      if (n.isSpecial) {
        const bonusDesc = n.specialType === 'cash'
          ? `$${fmt(Math.round(500 * (1 + n.level * 0.6) * state.inflationMult))}`
          : `${15 + n.level * 8}點`;
        specialDesc = ` | 🎁 起點分紅: ${bonusDesc}`;
      }
      html += `
        <div class="flex items-center justify-between p-2 rounded bg-[#1a2233] border border-[#26314a]/40 text-xs">
          <div class="flex flex-col gap-0.5">
            <span class="font-bold text-white">${n.name} <span class="text-[#8a98b3] font-normal text-[10px] mono">#${n.id}</span></span>
            <span class="text-[#8a98b3] text-[10px] flex items-center gap-1.5">
              <span>過路費: $${fmt(rentVal)}${specialDesc}</span>
              <span>•</span>
              ${levelText}
            </span>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            ${ownerText}
          </div>
        </div>
      `;
    });
    html += `
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}
window.renderPropertyStatus = renderPropertyStatus;

/* 行動者可操作的賭場面板 */
function renderCasinoActing() {
  const cl = state.casinoLive; if (!cl) return;
  const p = curPlayer();
  let resultBlock = '';
  if (cl.phase === 'reveal' && cl.lastResult) {
    const lr = cl.lastResult;
    const color = lr.outcome === 'win' ? '#34d399' : (lr.outcome === 'tie' ? '#8a98b3' : '#f87171');
    const txt = lr.outcome === 'win' ? `🎉 猜對了！贏得 ${lr.gainDisp}` : (lr.outcome === 'tie' ? `🤝 平手，退還 ${lr.betDisp}` : `💥 猜錯了，損失 ${lr.betDisp}`);
    resultBlock = `<div class="text-center font-bold mb-3 text-sm" style="color:${color}">${txt}</div>`;
  }
  const cardsBlock = `<div class="flex justify-center gap-4 my-4">${cardHTML(cl.first, cl.phase === 'reveal')}${cl.phase === 'reveal' ? cardHTML(cl.second) : ''}</div>`;
  let controls;
  if (cl.phase === 'bet') {
    const defaultBetVal = Math.min(1000, Math.max(1, p.cash));
    controls = `
      <div class="mb-4">
        <div class="text-[#8a98b3] text-xs font-bold mb-1.5 flex justify-between">
          <span>💰 下注種類與金額：</span>
          <span id="maxBetInfo" class="text-[#f5c451]">已下注 ${cl.rounds} / 10 次（最多 10 次）</span>
        </div>
        <div class="flex gap-2">
          <select id="casinoCurrency" class="seg text-sm font-bold" style="width: 120px;" onchange="(function(){
            var b=document.getElementById('casinoBet'); 
            if(b) b.value = this.value==='cash'? Math.min(1000, ${p.cash}) : Math.min(10, ${p.points});
          }).call(this)">
            <option value="cash">💵 現金</option>
            <option value="points">🔵 點數</option>
          </select>
          <input id="casinoBet" type="number" min="1" value="${defaultBetVal}" class="seg text-sm font-bold mono" style="flex:1" placeholder="請輸入金額">
          <button class="btn btn-red px-4 text-xs font-bold" onclick="casinoQuickBet('all')">ALL IN</button>
        </div>
        <div class="flex gap-2 mt-2">
          <button class="btn btn-ghost py-1 px-3 text-xs" onclick="casinoQuickBet(100)">+100</button>
          <button class="btn btn-ghost py-1 px-3 text-xs" onclick="casinoQuickBet(1000)">+1,000</button>
          <button class="btn btn-ghost py-1 px-3 text-xs" onclick="casinoQuickBet(10000)">+10,000</button>
          <button class="btn btn-ghost py-1 px-3 text-xs" onclick="casinoQuickBet(10)">+10 PP</button>
          <button class="btn btn-ghost py-1 px-3 text-xs" onclick="casinoQuickBet(50)">+50 PP</button>
        </div>
      </div>
      <div class="flex gap-2">
        <button class="btn btn-gold py-2.5 text-sm" style="flex:1" onclick="casinoAct('high')">🔼 更大</button>
        <button class="btn btn-gold py-2.5 text-sm" style="flex:1" onclick="casinoAct('low')">🔽 更小</button>
        <button class="btn btn-ghost py-2.5 px-4 text-sm" onclick="casinoAct('end')">🚪 結束賭局</button>
      </div>`;
  } else {
    const limitReached = cl.rounds >= 10;
    controls = `
      <div class="flex gap-2">
        <button class="btn btn-gold py-2.5 text-sm" style="flex:1" ${limitReached ? 'disabled' : ''} onclick="casinoAct('again')">
          ${limitReached ? '🚫 已達 10 局上限' : '🔁 再賭一局'}
        </button>
        <button class="btn btn-ghost py-2.5 text-sm" style="flex:1" onclick="casinoAct('end')">🚪 結束賭局</button>
      </div>`;
  }
  $('casinoBody').innerHTML = `
    <div class="text-center mb-2">
      <div class="display text-xl font-bold text-[#d97706]">🎰 拉斯維加斯賭場</div>
      <div class="text-[11px] text-[#8a98b3] mt-0.5">撲克牌比大小：猜中下一張更大／更小，可贏得雙倍下注</div>
    </div>
    <div class="flex justify-center gap-4 text-xs mb-3">
      <span class="text-[#8a98b3]">💵 現金：<b class="text-[#f5c451] mono">$${fmt(p.cash)}</b></span>
      <span class="text-[#8a98b3]">🔵 點數：<b class="text-[#60a5fa] mono">${p.points} PP</b></span>
      <span class="text-[#8a98b3]">已玩 <b class="text-white">${cl.rounds} / 10</b> 局</span>
    </div>
    ${cardsBlock}
    ${resultBlock}
    ${controls}
  `;
  $('casinoPanel').style.display = 'flex';
}

/* 其他玩家的唯讀觀戰面板 */
function renderCasinoSpectator() {
  const cl = state.casinoLive; if (!cl) return;
  const actor = state.players.find(x => x.id === cl.pid);
  let resultBlock = '';
  if (cl.phase === 'reveal' && cl.lastResult) {
    const lr = cl.lastResult;
    const color = lr.outcome === 'win' ? '#34d399' : (lr.outcome === 'tie' ? '#8a98b3' : '#f87171');
    const txt = lr.outcome === 'win' ? `🎉 猜對！贏得 ${lr.gainDisp}` : (lr.outcome === 'tie' ? `🤝 平手退還 ${lr.betDisp}` : `💥 猜錯，損失 ${lr.betDisp}`);
    resultBlock = `<div class="text-center font-bold mb-3 text-sm" style="color:${color}">${txt}</div>`;
  }
  const cardsBlock = `<div class="flex justify-center gap-4 my-4">${cardHTML(cl.first, cl.phase === 'reveal')}${cl.phase === 'reveal' ? cardHTML(cl.second) : ''}</div>`;
  $('casinoBody').innerHTML = `
    <div class="text-center mb-2">
      <div class="display text-xl font-bold text-[#d97706]">🎰 賭場觀戰中</div>
      <div class="text-sm mt-1 font-bold" style="color:${actor ? actor.color : '#fff'}">${actor ? actor.icon + ' ' + actor.name : ''} 正在賭場博弈…</div>
    </div>
    <div class="flex justify-center gap-4 text-xs mb-1">
      <span class="text-[#8a98b3]">💵 現金：<b class="text-[#f5c451] mono">$${fmt(cl.cash)}</b></span>
      <span class="text-[#8a98b3]">🔵 點數：<b class="text-[#60a5fa] mono">${cl.points} PP</b></span>
      <span class="text-[#8a98b3]">已玩 <b class="text-white">${cl.rounds}</b> 局</span>
    </div>
    ${cardsBlock}
    ${resultBlock}
    <div class="text-center text-[11px] text-[#8a98b3] mt-2">⏳ 對方賭博中，計時暫停，請稍候…</div>
  `;
  $('casinoPanel').style.display = 'flex';
}

/* 由 renderAll 呼叫：非行動者依 state.casinoLive 顯示／隱藏觀戰面板 */
function updateCasinoView() {
  if (casinoActorBusy) return; // 行動者由 runCasino 自行管理面板
  if (state && state.casinoLive) {
    renderCasinoSpectator();
  } else if ($('casinoPanel') && $('casinoPanel').style.display !== 'none') {
    $('casinoPanel').style.display = 'none';
  }
}

async function runCasino(p) {
  log(`🎰 <b>${p.name}</b> 進入拉斯維加斯賭場！`, '#d97706');
  state.turnActions.push(`🎰 進入賭場`);
  stopTimer();
  casinoActorBusy = true;
  state.casinoLive = { pid: p.id, name: p.name, color: p.color, cash: p.cash, points: p.points, first: null, second: null, phase: 'bet', lastResult: null, rounds: 0 };

  while (true) {
    if (state.casinoLive.rounds >= 10) {
      break;
    }
    const first = dealCard();
    state.casinoLive.first = first;
    state.casinoLive.second = null;
    state.casinoLive.phase = 'bet';
    state.casinoLive.cash = p.cash;
    state.casinoLive.points = p.points;
    syncState();
    renderCasinoActing();

    const action = await new Promise(res => { casinoResolver = res; });
    if (action === 'end') break;

    const cur = ($('casinoCurrency') && $('casinoCurrency').value) || 'cash';
    const curName = cur === 'cash' ? '現金' : '點數';
    const bal = cur === 'cash' ? p.cash : p.points;
    let bet = parseInt($('casinoBet') ? $('casinoBet').value : '0') || 0;
    if (bet < 1) { await alertModal('下注無效', '請輸入至少 1 的下注金額。'); continue; }
    if (bet > bal) { await alertModal('餘額不足', `您的${curName}餘額不足（目前 ${cur === 'cash' ? '$' + fmt(p.cash) : p.points + ' PP'}）。`); continue; }

    if (cur === 'cash') p.cash -= bet; else p.points -= bet;

    const second = dealCard();
    let outcome = 'lose';
    if (second.val === first.val) outcome = 'tie';
    else if ((action === 'high' && second.val > first.val) || (action === 'low' && second.val < first.val)) outcome = 'win';

    let gain = 0;
    if (outcome === 'win') { gain = bet * 2; if (cur === 'cash') p.cash += gain; else p.points += gain; }
    else if (outcome === 'tie') { gain = bet; if (cur === 'cash') p.cash += gain; else p.points += gain; }

    const betTxt = cur === 'cash' ? '$' + fmt(bet) : bet + ' PP';
    const gainTxt = cur === 'cash' ? '$' + fmt(gain) : gain + ' PP';
    const dirTxt = action === 'high' ? '更大' : '更小';
    if (outcome === 'win') {
      log(`🎰 <b>${p.name}</b> 以${curName} ${betTxt} 預測【${dirTxt}】，開出 ${second.suit}${second.label} 獲勝，贏得 ${gainTxt}！`, '#34d399');
      state.turnActions.push(`🎰 賭場以${curName} ${betTxt} 預測【${dirTxt}】獲勝，贏得 ${gainTxt}`);
    } else if (outcome === 'tie') {
      log(`🎰 <b>${p.name}</b> 賭場平手，退還${curName} ${betTxt}。`, '#8a98b3');
      state.turnActions.push(`🎰 賭場以${curName} ${betTxt} 預測【${dirTxt}】平手退還`);
    } else {
      log(`🎰 <b>${p.name}</b> 以${curName} ${betTxt} 預測【${dirTxt}】，開出 ${second.suit}${second.label} 失利，損失 ${betTxt}。`, '#f87171');
      state.turnActions.push(`🎰 賭場以${curName} ${betTxt} 預測【${dirTxt}】失利，損失 ${betTxt}`);
    }

    state.casinoLive.second = second;
    state.casinoLive.phase = 'reveal';
    state.casinoLive.lastResult = { outcome, curName, bet, gain, betDisp: betTxt, gainDisp: gainTxt };
    state.casinoLive.rounds++;
    state.casinoLive.cash = p.cash;
    state.casinoLive.points = p.points;
    syncState();
    renderCasinoActing();

    const cont = await new Promise(res => { casinoResolver = res; });
    if (cont === 'end') break;
  }

  state.casinoLive = null;
  casinoActorBusy = false;
  $('casinoPanel').style.display = 'none';
  log(`🎰 <b>${p.name}</b> 結束賭局，離開賭場。`, '#d97706');
  state.turnActions.push(`🎰 離開賭場`);
  syncState();
  renderAll();
}

function buyCost(p, base) {
  let c = inf(base);
  if (hasDeity(p, 'fortune')) {
    c = p.deity.big ? 0 : Math.round(c * 0.8);
  }
  return c;
}

function groupOwner(g) {
  if (g == null) return null;
  const props = MAP.nodes.filter(n => n.type === 'property' && n.group === g);
  const o = props[0].owner;
  if (o === null) return null;
  return props.every(n => n.owner === o) ? o : null;
}

function isMonopoly(n) {
  return n.type === 'property' && n.group != null && groupOwner(n.group) === n.owner && n.owner !== null;
}

function rentDue(payer, owner, n) {
  // 查封卡效果：過路費歸零
  if (state.seals && state.seals.some(s => s.group === n.group)) return 0;
  
  let r = inf(n.baseRent) * HOUSE_MULT[n.level];
  if (isMonopoly(n)) r *= 2;
  
  // 漲價卡效果：過路費加倍
  if (state.priceHikes && state.priceHikes.some(h => h.group === n.group)) r *= 2;
  
  if (owner.tsunamiTurns > 0) r = Math.round(r * 0.5);
  if (hasDeity(payer, 'land')) {
    r = payer.deity.big ? 0 : Math.round(r * 0.5);
  }
  if (hasDeity(payer, 'poor')) r = Math.round(r * 1.5);
  return Math.round(r);
}

async function onProperty(p, n) {
  if (n.owner !== null && n.owner !== p.id && hasDeity(p, 'land') && p.deity.big) {
    const old = state.players[n.owner];
    n.owner = p.id;
    n.level = 0;
    n.lastActionRound = state.round; 
    log(`⛩️ 大土地公顯靈！<b>${p.name}</b> 免費過戶了 ${old.name} 的地產「${n.name}」！`, DEITIES.land.color);
    state.turnActions.push(`⛩️ 土地公顯靈，強制過戶了 ${old.name} 的地產「${n.name}」`);
    if (playMode === 'local' || (peer && p.peerId === peer.id)) {
      await alertModal('大土地公神蹟', `大土地公強制將 <b>${old.name}</b> 所持有的「${n.name}」免費過戶給您！`);
    }
    return;
  }
  
  if (n.owner === null) {
    if (hasDeity(p, 'poor') && p.deity.big) {
      if (playMode === 'local' || (peer && p.peerId === peer.id)) {
        await alertModal('無法購地', `<b>${p.name}</b> 被大窮神附身，暫時無法購買土地。`);
      }
      return;
    }
    const cost = buyCost(p, n.basePrice);
    const grpInfo = `<br><span style="color:${n.groupColor}; font-weight:700">路段：${n.groupName}</span>（壟斷加倍）`;
    if (p.cash < cost) {
      if (playMode === 'local' || (peer && p.peerId === peer.id)) {
        await alertModal('資金不足', `購買「${n.name}」需要 $${fmt(cost)} 現金，您的資金不足。`);
      }
      return;
    }
    
    // 只有我方的回合才能彈窗做買地決定
    if (playMode === 'local' || (peer && p.peerId === peer.id)) {
      const ans = await showChoice('土地認購', `
        「<b>${n.name}</b>」目前為無主地。<br>
        購買價格：<span class="mono text-[#f5c451] font-bold">$${fmt(cost)}</span>
        ${hasDeity(p, 'fortune') ? '<br><span class="text-[#fbbf24] font-semibold">（財神特惠已折抵）</span>' : ''}
        ${grpInfo}<br>
        您目前現金：$${fmt(p.cash)}
      `, [
        { label: '確認購買', value: true, cls: 'btn-gold' },
        { label: '放棄認購', value: false, cls: 'btn-ghost' }
      ]);
      
      if (ans) {
        p.cash -= cost;
        n.owner = p.id;
        n.lastActionRound = state.round; 
        log(`🏙 <b>${p.name}</b> 買下了「${n.name}」，花費現金 $${fmt(cost)}。`, p.color);
        state.turnActions.push(`🏙️ 買下地產「${n.name}」（花費 $${fmt(cost)}）`);
        if (isMonopoly(n)) {
          log(`👑 <b>${p.name}</b> 壟斷「${n.groupName}」整段，地租加倍！`, n.groupColor);
          state.turnActions.push(`👑 達成「${n.groupName}」路段壟斷`);
          await alertModal('👑 區域壟斷成功！', `恭喜！您已壟斷「<b>${n.groupName}</b>」的所有地產！<br>該區地租已<b>翻倍</b>。`);
        }
      }
    }
  } else if (n.owner === p.id) {
    if (playMode === 'local' || (peer && p.peerId === peer.id)) {
      await alertModal('自持地產', `此地產為您所持有的「${n.name}」（${HOUSE_LABEL[n.level]}）。<br>可在蓋房升級面板中升級此處。`);
    }
  } else {
    const owner = state.players[n.owner];
    const rent = rentDue(p, owner, n);
    if (rent <= 0) {
      log(`🛡 <b>${p.name}</b> 踩中 ${owner.name} 的「${n.name}」，獲得神明減免，免除地租。`, p.color);
      state.turnActions.push(`🛡 免除地租（踩中 ${owner.name} 的「${n.name}」）`);
      if (playMode === 'local' || (peer && p.peerId === peer.id)) {
        await alertModal('免繳過路費', `您踏入了 <b>${owner.name}</b> 的「${n.name}」，本次地租全額免除！`);
      }
      return;
    }
    p.cash -= rent;
    owner.cash += rent;
    
    log(`💸 <b>${p.name}</b> 支付給 <b>${owner.name}</b> 地租 $${fmt(rent)}（於「${n.name}」${isMonopoly(n) ? ' 👑壟斷加倍' : ''}）。`, '#f87171');
    state.turnActions.push(`💸 支付地租 $${fmt(rent)} 給 ${owner.name}（於「${n.name}」）`);
    if (playMode === 'local' || (peer && p.peerId === peer.id)) {
      await alertModal('支付過路費', `
        您踏入了 ${owner.name} 的地盤「<b>${n.name}</b>」（${HOUSE_LABEL[n.level]}）。<br>
        ${isMonopoly(n) ? `<span style="color:${n.groupColor}; font-weight:700;">（對手已對該區實行壟斷加倍）</span><br>` : ''}
        您必須支付地租：<span class="mono text-[#f87171] font-bold">$${fmt(rent)}</span>。
      `);
    }
    
    if (p.cash < 0 && (playMode === 'local' || (peer && p.peerId === peer.id))) {
      await settleNegative(p);
    }
  }
}

async function onFate(p) {
  const isHappyImmune = p.deity && p.deity.type === 'happy' && p.deity.big;
  
  const catEvents = [
    { cat: 'ai', pct: 0.12, emoji: '🤖', title: 'AI 算力大爆發' },
    { cat: 'semi', pct: 0.11, emoji: '🔬', title: '晶圓廠接單滿載' },
    { cat: 'tech', pct: 0.10, emoji: '💻', title: '雲端軟體需求強勁' },
    { cat: 'energy', pct: 0.12, emoji: '🛢️', title: '地緣政治導致油價大漲' },
    { cat: 'bio', pct: 0.12, emoji: '💊', title: '癌症新藥成功通過三期' },
    { cat: 'ship', pct: 0.11, emoji: '🚢', title: '運價指數大幅反彈' },
    { cat: 'consume', pct: 0.09, emoji: '🛍️', title: '節慶購物季銷量亮眼' },
    { cat: 'material', pct: 0.10, emoji: '⛏️', title: '全球原物料行情爆發' },
    { cat: 'game', pct: 0.10, emoji: '🎮', title: '暑期遊戲大作銷量狂飆' },
    { cat: 'fin', pct: 0.08, emoji: '🏦', title: '升息預期激勵金融利差' }
  ];
  
  const pool = [
    { t: 'good', msg: '購買統一發票中了特獎！', v: () => { const g = inf(1800); p.cash += g; return `獲得現金 $${fmt(g)}`; } },
    { t: 'good', msg: '幸運在街角撿到塞滿鈔票的皮夾！', v: () => { const g = inf(700); p.cash += g; return `獲得現金 $${fmt(g)}`; } },
    { t: 'good', msg: '政府發放全民經濟共享退稅紅包！', v: () => { const g = inf(1000); p.cash += g; return `獲得現金 $${fmt(g)}`; } },
    { t: 'good', msg: '收到聖誕老人的神秘禮物卡！', v: () => { const it = pick(Object.keys(ITEMS)); p.items.push(it); return `獲得道具卡：${ITEMS[it].icon} ${ITEMS[it].name}`; } },
    { t: 'bad', msg: '收到國稅局補繳所得稅通知單。', v: () => { const g = inf(900); p.cash -= g; return `扣除現金 $${fmt(g)}`; } },
    { t: 'bad', msg: '突發急性腸胃炎，自費住院醫療。', v: () => { const g = inf(800); p.cash -= g; return `扣除現金 $${fmt(g)}`; } },
    { t: 'bad', msg: '國際大宗物資飆漲，全域通膨急劇加速！', v: () => { triggerInflation('命運：通膨急遽上升'); return `提前觸發全域通膨！`; } }
  ];
  
  let card;
  if (Math.random() < 0.5) {
    const ev = pick(catEvents);
    const catDetail = STOCK_CATS[ev.cat];
    card = {
      t: ev.pct >= 0 ? 'good' : 'bad',
      msg: `${ev.emoji} 命運新聞：${ev.title}`,
      v: () => {
        const hit = applyCatEvent(ev.cat, ev.pct);
        return `造成【${catDetail.label}】類股全面${ev.pct >= 0 ? '上漲' : '下跌'} ${(Math.abs(ev.pct) * 100).toFixed(0)}% ${hit > 0 ? `（${hit} 檔觸發漲/跌停限制）` : ''}`;
      }
    };
  } else {
    card = pick(pool);
  }
  
  if (isHappyImmune && card.t === 'bad') {
    card = pool.find(c => c.t === 'good');
    log(`🎎 大福神庇佑！<b>${p.name}</b> 幸運免除了一起壞命運，改抽吉事。`, DEITIES.happy.color);
    state.turnActions.push(`🎎 大福神庇佑，免除壞命運`);
  }
  
  const res = card.v();
  log(`🃏 <b>${p.name}</b> 抽到命運卡：${card.msg} -> ${res}`, '#a78bfa');
  state.turnActions.push(`🃏 抽到命運卡：${card.msg} -> ${res}`);
  await alertModal('🃏 命運抽卡', `
    <b>${p.name}</b> 抽到了命運：<br>
    <div class="mt-2 text-md font-bold text-[#ffe08a]">「${card.msg}」</div>
    <div class="mt-1 text-sm text-[#e6edf7]">${res}</div>
  `);
  if (p.cash < 0) await settleNegative(p);
}

async function onNews() {
  const r = rnd(0, 4);
  if (r === 0) {
    state.rateHikeTurns = 3;
    log(`📰 央行緊急宣布升息！銀行利率翻倍、購地建屋成本上漲 30%（持續 3 輪）。`, '#f59e0b');
    state.turnActions.push(`📰 央行升息政策上路（持續3輪）`);
    await alertModal('📰 央行升息政策', '央行宣布實行升息：<br>· 銀行存款定期年利率<b>加倍</b><br>· 蓋房升級建造成本<b>上漲 30%</b><br>此政策將持續 3 輪。');
  } else if (r === 1) {
    state.players.forEach(p => {
      if (p.alive) p.cash += inf(1200);
    });
    state.inflationMult *= 1.1;
    log(`📰 央行啟動量化寬鬆（QE）！全員發放 $${fmt(inf(1200))} 現金，但通膨永久增加 10%。`, '#34d399');
    state.turnActions.push(`📰 央行實施 QE 量化寬鬆，全員發放現金`);
    await alertModal('📰 量化寬鬆 (QE)', `政府啟動印鈔！全員獲得救濟金 <span class="mono text-[#34d399] font-bold">+$${fmt(inf(1200))}</span>。<br>但通膨乘數永久<b>上升 10%</b>。`);
  } else if (r === 2) {
    let c = 0;
    MAP.nodes.forEach(n => {
      if (n.type === 'property' && n.level > 0) {
        n.level--;
        c++;
      }
    });
    log(`📰 不動產泡沫化破裂！所有建築無條件下調 1 級（全場共降級 ${c} 處）。`, '#f87171');
    state.turnActions.push(`📰 房地產泡沫化破裂，全場房屋降級`);
    await alertModal('📰 房產泡沫破裂', `不動產狂熱冷卻！場上所有玩家擁有的房屋等級，將<b>強制降級一級</b>（共影響 ${c} 棟建築）。`);
  } else if (r === 3) {
    let hit = 0;
    state.stocks.forEach(s => {
      const h = moveStock(s, 1 - STOCK_LIMIT);
      if (h) hit++;
      s.hist[s.hist.length - 1] = s.price;
    });
    if ($('stockPanel').style.display === 'flex') renderStock();
    log(`📰 金融海嘯突襲！所有股票集體跌停限制（共 ${hit} 檔跌停）。`, '#ff5d5d');
    state.turnActions.push(`📰 金融海嘯席捲股市，全體股票跌停`);
    await alertModal('📰 黑天鵝全球股災', '所有上市股票集體跌停鎖死！有高額融資質押的玩家，請注意補足保證金。');
  } else {
    let hit = 0;
    state.stocks.forEach(s => {
      const h = moveStock(s, 1 + STOCK_LIMIT);
      if (h) hit++;
      s.hist[s.hist.length - 1] = s.price;
    });
    if ($('stockPanel').style.display === 'flex') renderStock();
    log(`📰 資金狂潮派對啟動！全員股票集體攻上漲停（共 ${hit} 檔漲停）。`, '#34d399');
    state.turnActions.push(`📰 資金狂潮襲來，全體股票漲停`);
    await alertModal('📰 狂熱多頭資金潮', '熱錢鋪天蓋地而來！所有上市股票集體攻上漲停板！');
  }
  renderAll();
}

async function onBank(p) {
  const baseRate = state.rateHikeTurns > 0 ? 0.20 : 0.10;
  const interest = Math.round(p.savings * baseRate);
  p.savings += interest;
  log(`🏦 <b>${p.name}</b> 獲得銀行定存利息 $${fmt(interest)}。`, '#f5c451');
  state.turnActions.push(`🏦 定存利息入庫：$${fmt(interest)}`);
  
  const ans = await showChoice('🏦 中央銀行定存臨櫃', `
    定存利息結存入庫：<span class="mono text-[#34d399] font-bold">+$${fmt(interest)}</span>（年率 ${(baseRate * 100).toFixed(0)}%）<br>
    您目前定存餘額：$${fmt(p.savings)}<br>
    您目前手頭現金：$${fmt(p.cash)}
  `, [
    { label: '存入 5,000 元', value: 'dep', cls: 'btn-green' },
    { label: '提領 5,000 元', value: 'wd', cls: 'btn-gold' },
    { label: '辦完離開', value: false, cls: 'btn-ghost' }
  ]);
  
  if (ans === 'dep') {
    const amt = Math.min(5000, p.cash);
    p.cash -= amt;
    p.savings += amt;
    log(`🏦 <b>${p.name}</b> 存入 $${fmt(amt)} 至定存帳戶。`, '#34d399');
    state.turnActions.push(`🏦 存入定存：$${fmt(amt)}`);
  } else if (ans === 'wd') {
    const amt = Math.min(5000, p.savings);
    p.savings -= amt;
    p.cash += amt;
    log(`🏦 <b>${p.name}</b> 從帳戶提領了 $${fmt(amt)} 現金。`, '#f5c451');
    state.turnActions.push(`🏦 提領現金：$${fmt(amt)}`);
  }
}

/* =========================================================
   結束回合
========================================================= */
async function endTurn() {
  stopTimer();
  busy = false;
  
  const cp = curPlayer();
  if (cp.diceCountTurns && cp.diceCountTurns > 0) {
    cp.diceCountTurns--;
    if (cp.diceCountTurns <= 0) {
      const oldCount = cp.diceCount;
      cp.diceCount = 1;
      cp.diceCountTurns = 0;
      log(`${oldCount === 2 ? '🏍️' : '🏎️'} <b>${cp.name}</b> 的${oldCount === 2 ? '機車' : '汽車'}效果已結束，恢復單骰模式。`, '#8a98b3');
    }
  }
  
  const p = curPlayer();
  
  if (alivePlayers().length <= 1) return gameOver();
  
  if (!state.turnOrder || state.turnOrder.length === 0) {
    state.turnOrder = shuffleArray(alivePlayers().map(pl => pl.id));
    state.currentOrderIndex = state.turnOrder.indexOf(state.current);
    if (state.currentOrderIndex === -1) state.currentOrderIndex = 0;
  }
  
  let nextOrderIndex = state.currentOrderIndex;
  do {
    nextOrderIndex++;
    if (nextOrderIndex >= state.turnOrder.length) {
      state.round++;
      await onRoundEnd();
      if (alivePlayers().length <= 1) return gameOver();
      state.turnOrder = shuffleArray(alivePlayers().map(pl => pl.id));
      nextOrderIndex = 0;
      break;
    }
  } while (!state.players[state.turnOrder[nextOrderIndex]].alive);
  
  state.currentOrderIndex = nextOrderIndex;
  state.current = state.turnOrder[state.currentOrderIndex];
  
  // 同步新回合狀態
  syncState();
  renderAll();
  
  if (playMode === 'local') {
    setTimeout(beginTurn, 50);
  } else {
    checkTurnTransition();
  }
}

function manualEnd() {
  if (rolledThisTurn && !busy) endTurn();
}

async function onRoundEnd() {
  fluctuateStocks();
  
  if (state.rateHikeTurns > 0) state.rateHikeTurns--;
  
  // 實體化神魔冷卻結算
  if (state.deityCooldown > 0) {
    state.deityCooldown--;
    if (state.deityCooldown === 0) spawnDeityOnMap();
  }
  if (state.demonCooldown > 0) {
    state.demonCooldown--;
    if (state.demonCooldown === 0) spawnDemonOnMap();
  }
  
  if (state.freezeTurns > 0) {
    state.freezeTurns--;
    log(`❄️ 經濟凍結中（通膨暫停剩餘 ${state.freezeTurns} 輪）。`, '#60a5fa');
  } else if (state.round % config.infTurn === 0) {
    triggerInflation('循環週期通膨');
  }
  
  // 結算漲價卡效果
  if (state.priceHikes) {
    state.priceHikes.forEach(h => h.turnsLeft--);
    const expired = state.priceHikes.filter(h => h.turnsLeft <= 0);
    expired.forEach(h => {
      const gName = MAP.nodes.find(n => n.group === h.group && n.groupName);
      if (gName) log(`💹 「${gName.groupName}」路段的漲價效果已結束。`, '#8a98b3');
    });
    state.priceHikes = state.priceHikes.filter(h => h.turnsLeft > 0);
  }
  // 結算查封卡效果
  if (state.seals) {
    state.seals.forEach(s => s.turnsLeft--);
    const expired = state.seals.filter(s => s.turnsLeft <= 0);
    expired.forEach(s => {
      const gName = MAP.nodes.find(n => n.group === s.group && n.groupName);
      if (gName) log(`🔏 「${gName.groupName}」路段的查封已解除。`, '#8a98b3');
    });
    state.seals = state.seals.filter(s => s.turnsLeft > 0);
  }
  
  renderAll();
}

function triggerInflation(reason) {
  state.inflationMult *= (1 + config.infRate / 100);
  state.inflationCount++;
  log(`🔥 全域惡性通膨爆發（因：${reason}）！物價乘數累計來到 ×${state.inflationMult.toFixed(2)}。`, '#ff5d5d');
  state.turnActions.push(`🔥 通膨爆發（因：${reason}）`);
  showInflationAlert();
  renderAll();
}

function showInflationAlert() {
  $('inflationAlertSub').textContent = `市場物價乘數 ×${state.inflationMult.toFixed(2)} (+${config.infRate}%)`;
  const a = $('inflationAlert');
  a.style.display = 'flex';
  a.classList.remove('inflation-flash');
  void a.offsetWidth;
  a.classList.add('inflation-flash');
  setTimeout(() => a.style.display = 'none', 1800);
}

function applyCatEvent(cat, pct) {
  let count = 0;
  state.stocks.forEach(s => {
    if (s.cat === cat) {
      const isL = moveStock(s, 1 + pct);
      if (isL !== 0) count++;
      s.hist[s.hist.length - 1] = s.price;
    }
  });
  return count;
}

function fluctuateStocks() {
  state.stocks.forEach(s => {
    s.prev = s.price;
    s.ref = s.price;
    
    // 檢查紅卡/黑卡覆蓋效果
    const override = (state.stockOverrides || []).find(o => o.ticker === s.ticker);
    if (override) {
      if (override.direction === 'up') {
        moveStock(s, 1 + STOCK_LIMIT);
        s.limit = 1;
      } else {
        moveStock(s, 1 - STOCK_LIMIT);
        s.limit = -1;
      }
    } else {
      const drift = (rnd(-60, 65)) / 1000;
      moveStock(s, 1 + drift);
    }
    
    s.hist.push(s.price);
    if (s.hist.length > 30) s.hist.shift();
  });
  
  // 結算紅卡/黑卡效果
  if (state.stockOverrides) {
    state.stockOverrides.forEach(o => o.turnsLeft--);
    const expired = state.stockOverrides.filter(o => o.turnsLeft <= 0);
    expired.forEach(o => {
      const s = state.stocks.find(x => x.ticker === o.ticker);
      if (s) log(`${o.direction === 'up' ? '📈' : '📉'} 「${s.name}」的${o.direction === 'up' ? '紅卡漲停' : '黑卡跌停'}操控已到期。`, '#8a98b3');
    });
    state.stockOverrides = state.stockOverrides.filter(o => o.turnsLeft > 0);
  }
  
  log(`📈 證券交易所本日收盤：全球市場資產價格隨通膨與熱錢微幅起伏。`, 'var(--blue)');
}

/* =========================================================
   股市 UI
========================================================= */
function openStock() {
  if (!isMyTurn()) return;
  closePanels();
  renderStock();
  $('stockPanel').style.display = 'flex';
}

function closeStock() {
  $('stockPanel').style.display = 'none';
}

function selectCat(cat) {
  state.selCat = cat;
  renderStock();
}

function selectStock(ticker) {
  state.selStock = ticker;
  renderStock();
}

function renderStock() {
  const p = curPlayer();
  
  const catsHTML = Object.keys(STOCK_CATS).map(c => `
    <button class="btn ${state.selCat === c ? 'btn-gold' : 'btn-ghost'} px-2.5 py-1 text-xs shrink-0" onclick="selectCat('${c}')">
      ${STOCK_CATS[c].label}
    </button>
  `).join('');
  const allCatBtn = `<button class="btn ${state.selCat === 'all' ? 'btn-gold' : 'btn-ghost'} px-2.5 py-1 text-xs shrink-0" onclick="selectCat('all')">全部</button>`;
  
  const filtered = state.stocks.filter(s => state.selCat === 'all' || s.cat === state.selCat);
  const listHTML = filtered.map(s => {
    const isSelected = s.ticker === state.selStock;
    const diff = s.price - s.ref;
    const pct = ((diff / s.ref) * 100).toFixed(1);
    const color = diff > 0 ? 'text-[#34d399]' : (diff < 0 ? 'text-[#f87171]' : 'text-[#8a98b3]');
    const arrow = diff > 0 ? '▲' : (diff < 0 ? '▼' : '—');
    
    const minP = Math.min(...s.hist);
    const maxP = Math.max(...s.hist);
    const range = maxP - minP || 1;
    const points = s.hist.map((val, idx) => {
      const x = (idx / (s.hist.length - 1 || 1)) * 90 + 5;
      const y = 20 - ((val - minP) / range) * 16 - 2;
      return `${x},${y}`;
    }).join(' ');
    const stroke = diff >= 0 ? '#34d399' : '#f87171';
    const sparkline = `
      <svg class="sparkline inline-block align-middle ml-2">
        <polyline fill="none" stroke="${stroke}" stroke-width="2" points="${points}" />
      </svg>
    `;
    
    const qty = getStockQty(p, s.ticker);
    const pledge = p.pledged[s.ticker] ? p.pledged[s.ticker].shares : 0;
    const holdInfo = qty > 0 || pledge > 0 ? `<span class="text-[10px] text-[#8a98b3]">（持:${qty}${pledge > 0 ? `/質:${pledge}` : ''}）</span>` : '';
    
    return `<div class="p-2 border-b border-[#26314a] cursor-pointer flex items-center justify-between text-sm ${isSelected ? 'bg-[#1e293b]' : 'hover:bg-[#1a2233]'}" onclick="selectStock('${s.ticker}')">
      <div class="flex items-center gap-2">
        <span class="mono text-xs w-12 font-bold shrink-0 text-[#8a98b3]">${s.ticker}</span>
        <span class="font-bold w-20 truncate">${s.name}</span>
        ${holdInfo}
      </div>
      <div class="flex items-center gap-4 text-right">
        ${sparkline}
        <span class="mono w-16 font-semibold">$${fmt(s.price)}</span>
        <span class="mono w-16 text-xs font-semibold ${color}">${arrow} ${Math.abs(pct)}%</span>
      </div>
    </div>`;
  }).join('');
  
  const activeStock = state.stocks.find(s => s.ticker === state.selStock);
  let detailHTML = '';
  if (activeStock) {
    const s = activeStock;
    const diff = s.price - s.ref;
    const pct = ((diff / s.ref) * 100).toFixed(1);
    const colorClass = diff > 0 ? 'text-[#34d399]' : (diff < 0 ? 'text-[#f87171]' : 'text-[#8a98b3]');
    
    const pQty = getStockQty(p, s.ticker);
    const pPledge = p.pledged[s.ticker] || { shares: 0, loan: 0 };
    const maxBuyByCash = Math.floor(p.cash / s.price);
    const maxBuy = config.stockLimit && s.availableShares !== Infinity ? Math.min(maxBuyByCash, s.availableShares) : maxBuyByCash;
    const pAvg = getStockAvgCost(p, s.ticker);
    const pnlAmt = pQty > 0 ? Math.round((s.price - pAvg) * pQty) : 0;
    const pnlPct = (pQty > 0 && pAvg > 0) ? ((s.price - pAvg) / pAvg * 100) : 0;
    const pnlColorClass = pnlAmt >= 0 ? 'text-[#34d399]' : 'text-[#f87171]';
    const pnlSign = pnlAmt >= 0 ? '+' : '-';
    
    detailHTML = `
      <div class="flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between pb-2 border-b border-[#26314a]">
            <div>
              <span class="display text-xl font-bold text-[#f5c451]">${s.name}</span>
              <span class="mono text-xs text-[#8a98b3] ml-1.5">${s.ticker}</span>
            </div>
            <span class="chip" style="background:${STOCK_CATS[s.cat].color}22; color:${STOCK_CATS[s.cat].color}; border-color:${STOCK_CATS[s.cat].color}55">
              ${STOCK_CATS[s.cat].label}
            </span>
          </div>
          <div class="my-3 grid grid-cols-2 gap-2 text-xs">
            <div class="text-[#8a98b3]">當前價格</div>
            <div class="mono text-right font-bold text-md text-[#e6edf7]">$${fmt(s.price)}</div>
            <div class="text-[#8a98b3]">本日漲跌</div>
            <div class="mono text-right font-bold ${colorClass}">${diff > 0 ? '+' : ''}${pct}%</div>
            ${config.stockLimit ? `
            <div class="text-[#8a98b3]">市場剩餘股數</div>
            <div class="mono text-right font-bold text-[#f5c451]">${s.availableShares === Infinity ? '無限制' : s.availableShares} / ${s.totalShares} 股</div>
            ` : ''}
            <div class="text-[#8a98b3]">您持有的股份</div>
            <div class="mono text-right font-bold text-[#34d399]">${pQty} 股</div>
            ${pQty > 0 ? `
            <div class="text-[#8a98b3]">持倉均價成本</div>
            <div class="mono text-right font-bold text-[#e6edf7]">$${fmt(pAvg)}</div>
            <div class="text-[#8a98b3]">未實現損益</div>
            <div class="mono text-right font-bold ${pnlColorClass}">${pnlSign}$${fmt(Math.abs(pnlAmt))}</div>
            <div class="text-[#8a98b3]">未實現漲幅</div>
            <div class="mono text-right font-bold ${pnlColorClass}">${pnlSign}${Math.abs(pnlPct).toFixed(1)}%</div>
            ` : ''}
            <div class="text-[#8a98b3]">已質押股份</div>
            <div class="mono text-right font-bold text-[#a78bfa]">${pPledge.shares} 股</div>
            <div class="text-[#8a98b3]">質押貸款金額</div>
            <div class="mono text-right font-bold text-[#f87171]">$${fmt(pPledge.loan)}</div>
          </div>
          <div class="border-t border-[#26314a] pt-2">
            <label class="text-[10px] text-[#8a98b3] block mb-1">交易股數（最多可買 ${maxBuy} 股）</label>
            <div class="flex gap-2">
              <input id="stockTradeQty" type="number" min="1" value="10" class="seg text-xs py-1.5 flex-1 mono" oninput="updateStockTotal()">
              <button class="btn btn-ghost px-2 text-xs" onclick="$('stockTradeQty').value = ${maxBuy}; updateStockTotal();">最大</button>
            </div>
            <div class="text-[11px] text-[#8a98b3] mt-2 flex justify-between">
              <span>預估總價：<span class="mono text-[#f5c451] font-bold" id="stockTradeTotal">$0</span></span>
              <span>可用現金：<span class="mono text-[#34d399] font-bold">$${fmt(p.cash)}</span></span>
            </div>
          </div>
          
          <div class="border-t border-[#26314a] pt-2 mt-2">
            <div class="text-[10px] text-[#8a98b3] font-bold mb-1">👥 全體玩家持股狀況</div>
            <div class="max-h-[100px] overflow-y-auto scroll">
              ${(() => {
                const holdings = state.players.filter(pl => pl.alive).map(pl => {
                  const qty = getStockQty(pl, s.ticker);
                  const avg = getStockAvgCost(pl, s.ticker);
                  if (qty === 0) return '';
                  const pnl = avg > 0 ? ((s.price - avg) / avg * 100) : 0;
                  const pnlColor = pnl >= 0 ? 'text-[#34d399]' : 'text-[#f87171]';
                  const sign = pnl >= 0 ? '+' : '';
                  return `<div class="flex justify-between items-center text-[11px] py-1 border-b border-[#26314a]/30">
                    <span style="color: ${pl.color}">${pl.icon} ${pl.name}</span>
                    <span class="mono">${qty}股 / 成本:$${avg} <span class="${pnlColor} font-bold">${sign}${pnl.toFixed(1)}%</span></span>
                  </div>`;
                }).filter(h => h !== '').join('');
                return holdings || '<div class="text-[#8a98b3] text-[11px] text-center py-2">目前沒有任何玩家持有此股票。</div>';
              })()}
            </div>
          </div>

          <div class="border-t border-[#26314a] pt-2 mt-2">
            <div class="text-[10px] text-[#8a98b3] font-bold mb-1">📊 近期股價歷史（最新在右）</div>
            <div class="flex flex-wrap gap-1 max-h-[64px] overflow-y-auto scroll">
              ${(() => {
                const h = s.hist || [];
                const show = h.slice(-14);
                return show.map((v, i) => {
                  const prevV = i > 0 ? show[i - 1] : v;
                  const up = v >= prevV;
                  return `<span class="mono text-[10px] px-1 py-0.5 rounded ${up ? 'text-[#34d399]' : 'text-[#f87171]'} bg-[#0b0f17]">$${fmt(v)}</span>`;
                }).join('');
              })()}
            </div>
          </div>

          <div class="border-t border-[#26314a] pt-2 mt-2">
            <div class="text-[10px] text-[#8a98b3] font-bold mb-1">🧾 我的交易紀錄（${s.name}）</div>
            <div class="max-h-[96px] overflow-y-auto scroll">
              ${(() => {
                const logs = (p.tradeLog || []).filter(t => t.ticker === s.ticker);
                if (logs.length === 0) return '<div class="text-[#8a98b3] text-[11px] text-center py-2">尚無交易紀錄。</div>';
                const label = { buy: '📈 買進', sell: '📉 賣出', pledge: '🔒 質押', redeem: '🔓 贖回' };
                const col = { buy: 'text-[#34d399]', sell: 'text-[#f87171]', pledge: 'text-[#a78bfa]', redeem: 'text-[#60a5fa]' };
                return logs.slice().reverse().map(t => {
                  const pnlTxt = (t.type === 'sell' && t.pnl !== undefined)
                    ? ` <span class="${t.pnl >= 0 ? 'text-[#34d399]' : 'text-[#f87171]'} font-bold">損益${t.pnl >= 0 ? '+' : '-'}$${fmt(Math.abs(Math.round(t.pnl)))}</span>` : '';
                  return `<div class="flex justify-between items-center text-[11px] py-1 border-b border-[#26314a]/30">
                    <span class="text-[#8a98b3]">[輪${t.round}] <span class="${col[t.type]} font-bold">${label[t.type]}</span></span>
                    <span class="mono">${t.qty}股 @ $${fmt(t.price)}${pnlTxt}</span>
                  </div>`;
                }).join('');
              })()}
            </div>
          </div>
        </div>
        
        <div class="grid grid-cols-2 gap-2 pt-3 border-t border-[#26314a] mt-4">
          <button class="btn btn-green py-2 text-xs font-bold" onclick="tradeStock('buy')">📈 買入股票</button>
          <button class="btn btn-red py-2 text-xs font-bold" onclick="tradeStock('sell')">📉 賣出股票</button>
          <button class="btn btn-ghost py-2 text-[10px] font-bold" onclick="tradeStock('pledge')">🔒 股票質押 (70%)</button>
          <button class="btn btn-ghost py-2 text-[10px] font-bold" onclick="tradeStock('redeem')">🔓 贖回股票 (本+5%息)</button>
        </div>
      </div>
    `;
  }
  
  $('stockBody').innerHTML = `
    <div class="flex items-center justify-between mb-2 border-b border-[#26314a] pb-1.5 shrink-0">
      <div class="display text-lg font-bold text-[#f5c451] flex items-center gap-2">
        <span>📈 證券交易所</span>
        <span class="text-xs text-[#8a98b3] font-normal">（手頭現金：$${fmt(p.cash)}）</span>
      </div>
      <button class="btn btn-ghost px-3 py-1 text-xs" onclick="closeStock()">關閉 ✕</button>
    </div>
    
    <div class="flex gap-2 mb-2 overflow-auto scroll pb-1 shrink-0">
      ${allCatBtn}
      ${catsHTML}
    </div>
    
    <div class="flex-1 flex gap-4 min-h-0 overflow-hidden">
      <div class="w-1/2 border border-[#26314a] rounded-lg overflow-y-auto scroll bg-[#0f1422] p-1.5">
        ${listHTML}
      </div>
      <div class="w-1/2 border border-[#26314a] rounded-lg bg-[#0f1422] p-3 flex flex-col justify-between">
        ${detailHTML || '<div class="text-center text-xs text-[#8a98b3] mt-20">請從左側選擇股票進行操作</div>'}
      </div>
    </div>
  `;
}

function tradeStock(type) {
  const p = curPlayer();
  const s = state.stocks.find(x => x.ticker === state.selStock);
  if (!s) return;
  
  const val = parseInt($('stockTradeQty').value);
  if (isNaN(val) || val <= 0) {
    alertModal('輸入錯誤', '請輸入正確的股數。');
    return;
  }
  
  if (type === 'buy') {
    const cost = val * s.price;
    if (p.cash < cost) {
      alertModal('資金不足', `現金不足！購買 ${val} 股需花費 $${fmt(cost)}。`);
      return;
    }
    if (config.stockLimit && s.availableShares !== Infinity && val > s.availableShares) {
      alertModal('市場供給不足', `「${s.name}」目前僅剩 ${s.availableShares} 股可供購買。`);
      return;
    }
    p.cash -= cost;
    p.turnSpent = (p.turnSpent || 0) + cost;
    
    // 記錄持股數量與平均成本
    if (!p.stocks[s.ticker]) {
      p.stocks[s.ticker] = { qty: 0, avgCost: 0 };
    }
    const current = p.stocks[s.ticker];
    const totalCost = (current.qty * current.avgCost) + cost;
    current.qty += val;
    current.avgCost = Math.round(totalCost / current.qty);
    
    if (config.stockLimit && s.availableShares !== Infinity) {
      s.availableShares -= val;
    }
    
    log(`📈 <b>${p.name}</b> 買進了 ${val} 股「${s.name}」（單價 $${fmt(s.price)}）。`, p.color);
    state.turnActions.push(`📈 買進 ${val} 股「${s.name}」（單價 $${fmt(s.price)}）`);
    if (!p.tradeLog) p.tradeLog = [];
    p.tradeLog.push({ round: state.round, type: 'buy', ticker: s.ticker, name: s.name, qty: val, price: s.price });
  } 
  else if (type === 'sell') {
    const qty = getStockQty(p, s.ticker);
    if (qty < val) {
      alertModal('現股不足', `您的股票庫存不足！目前僅有 ${qty} 股。`);
      return;
    }
    const earn = val * s.price;
    p.cash += earn;
    const avgCost = getStockAvgCost(p, s.ticker);
    const pnl = (s.price - avgCost) * val;
    p.turnStockPnL = (p.turnStockPnL || 0) + pnl;
    
    p.stocks[s.ticker].qty = qty - val;
    if (p.stocks[s.ticker].qty === 0) {
      delete p.stocks[s.ticker];
    }
    
    if (config.stockLimit && s.availableShares !== Infinity) {
      s.availableShares += val;
    }
    
    log(`📉 <b>${p.name}</b> 賣出了 ${val} 股「${s.name}」（單價 $${fmt(s.price)}），變現 $${fmt(earn)}。`, p.color);
    state.turnActions.push(`📉 賣出 ${val} 股「${s.name}」（單價 $${fmt(s.price)}）`);
    if (!p.tradeLog) p.tradeLog = [];
    p.tradeLog.push({ round: state.round, type: 'sell', ticker: s.ticker, name: s.name, qty: val, price: s.price, pnl });
  } 
  else if (type === 'pledge') {
    const qty = getStockQty(p, s.ticker);
    if (qty < val) {
      alertModal('持股不足', `您沒有足夠的現股可供質押！`);
      return;
    }
    const loan = Math.round(val * s.price * 0.7);
    p.stocks[s.ticker].qty = qty - val;
    if (p.stocks[s.ticker].qty === 0) {
      delete p.stocks[s.ticker];
    }
    
    p.cash += loan;
    if (!p.pledged[s.ticker]) p.pledged[s.ticker] = { shares: 0, loan: 0 };
    p.pledged[s.ticker].shares += val;
    p.pledged[s.ticker].loan += loan;
    
    log(`🔒 <b>${p.name}</b> 將持有的 ${val} 股「${s.name}」進行質押，取得現金 $${fmt(loan)}。`, '#a78bfa');
    state.turnActions.push(`🔒 質押 ${val} 股「${s.name}」借款 $${fmt(loan)}`);
    if (!p.tradeLog) p.tradeLog = [];
    p.tradeLog.push({ round: state.round, type: 'pledge', ticker: s.ticker, name: s.name, qty: val, price: s.price });
  } 
  else if (type === 'redeem') {
    const pledged = p.pledged[s.ticker];
    if (!pledged || pledged.shares <= 0) {
      alertModal('贖回失敗', `您沒有將這檔股票進行質押。`);
      return;
    }
    const cost = Math.round(pledged.loan * 1.05);
    if (p.cash < cost) {
      alertModal('現金不足', `贖回需要本息 $${fmt(cost)}，您只有 $${fmt(p.cash)}。`);
      return;
    }
    p.cash -= cost;
    
    if (!p.stocks[s.ticker]) {
      p.stocks[s.ticker] = { qty: 0, avgCost: s.price };
    }
    const current = p.stocks[s.ticker];
    const totalCost = (current.qty * current.avgCost) + (pledged.shares * s.price);
    current.qty += pledged.shares;
    current.avgCost = Math.round(totalCost / current.qty);
    
    delete p.pledged[s.ticker];
    log(`🔓 <b>${p.name}</b> 還清定額本息 $${fmt(cost)}，成功贖回 ${pledged.shares} 股「${s.name}」。`, '#34d399');
    state.turnActions.push(`🔓 贖回 ${pledged.shares} 股「${s.name}」`);
    if (!p.tradeLog) p.tradeLog = [];
    p.tradeLog.push({ round: state.round, type: 'redeem', ticker: s.ticker, name: s.name, qty: pledged.shares, price: s.price });
  }
  syncState();
  renderAll();
}

/* =========================================================
   股票斷頭追繳與負債處理
========================================================= */
async function checkMarginCall(p) {
  const tickers = Object.keys(p.pledged);
  for (const tk of tickers) {
    const pledged = p.pledged[tk];
    const s = state.stocks.find(x => x.ticker === tk);
    if (!s) continue;
    
    const curValue = pledged.shares * s.price;
    const ltv = pledged.loan / curValue;
    
    if (ltv >= 0.85) {
      const remainder = curValue - pledged.loan;
      p.cash += remainder;
      delete p.pledged[tk];
      
      log(`⚠️ <b>${p.name}</b> 質押的「${s.name}」觸發斷頭！銀行將其強制平倉賣出還款，清結退回 $${fmt(remainder)}。`, '#f87171');
      state.turnActions.push(`⚠️ 質押的「${s.name}」觸發強制斷頭平倉（退回 $${fmt(remainder)}）`);
      await alertModal('⚠️ 股票斷頭通知', `
        您質押的 <b>${s.name}</b> 因股價跌破臨界點，融資借款率高達 ${(ltv * 100).toFixed(1)}%。<br>
        銀行已對其進行<b>強制斷頭拋售平倉</b>：<br>
        · 股票賣出總額：$${fmt(curValue)}<br>
        · 償還貸款：-$${fmt(pledged.loan)}<br>
        · 清算後${remainder >= 0 ? `退回您的現金：<span class="text-[#34d399] font-bold">+$${fmt(remainder)}</span>` : `您需補足的差額：<span class="text-[#f87171] font-bold">-$${fmt(Math.abs(remainder))}</span>`}
      `);
      if (p.cash < 0) await settleNegative(p);
    }
  }
}

async function settleNegative(p) {
  while (p.cash < 0 && p.alive) {
    const hasSavings = p.savings > 0;
    const hasStocks = Object.keys(p.stocks).some(tk => getStockQty(p, tk) > 0);
    const hasPledges = Object.keys(p.pledged).length > 0;
    const hasProperties = MAP.nodes.some(n => n.type === 'property' && n.owner === p.id);
    
    if (!hasSavings && !hasStocks && !hasPledges && !hasProperties) {
      log(`💀 <b>${p.name}</b> 資不抵債且無任何餘額資產，宣告破產！`, '#f87171');
      state.turnActions.push(`💀 資不抵債，宣告破產退出`);
      await alertModal('💀 破產宣告', `<b>${p.name}</b> 無法清償債務，正式破產退出遊戲！`);
      declareBankruptcy(p);
      return;
    }
    
    const options = [];
    if (hasSavings) options.push({ label: `提領定存存款 (定存餘額: $${fmt(p.savings)})`, value: 'withdraw', cls: 'btn-green' });
    if (hasStocks) options.push({ label: `賣出現有持股`, value: 'sell_stock', cls: 'btn-gold' });
    if (hasPledges) options.push({ label: `平倉/處置質押部位`, value: 'sell_pledge', cls: 'btn-gold' });
    if (hasProperties) options.push({ label: `變賣地產土地 / 拆除房屋`, value: 'sell_property', cls: 'btn-red' });
    
    options.push({ label: `宣告破產退出`, value: 'bankruptcy', cls: 'btn-ghost text-red-400 border-red-500' });
    
    const choice = await showChoice(
      '⚠️ 現金赤字！請選擇處置變賣資產',
      `您現金透支了：<span class="mono text-[#f87171] font-bold">-$${fmt(Math.abs(p.cash))}</span>。<br>請變賣以下資產以償還赤字本息：`,
      options
    );
    
    if (choice === 'bankruptcy') {
      log(`💀 <b>${p.name}</b> 主動申報破產，退出戰局。`, '#f87171');
      state.turnActions.push(`💀 宣告破產退出`);
      declareBankruptcy(p);
      return;
    }
    else if (choice === 'withdraw') {
      const amt = p.savings;
      p.savings = 0;
      p.cash += amt;
      log(`🏦 <b>${p.name}</b> 提領了全部定存存款 $${fmt(amt)} 以償還透支。`, '#34d399');
      state.turnActions.push(`🏦 提領定存還債：$${fmt(amt)}`);
    }
    else if (choice === 'sell_stock') {
      const tick = Object.keys(p.stocks).find(tk => getStockQty(p, tk) > 0);
      const s = state.stocks.find(x => x.ticker === tick);
      if (s) {
        const qty = getStockQty(p, tick);
        const earn = qty * s.price;
        p.cash += earn;
        delete p.stocks[tick];
        log(`📉 <b>${p.name}</b> 被迫變賣了全部持股 ${qty} 股「${s.name}」，獲得 $${fmt(earn)}。`, '#f5c451');
        state.turnActions.push(`📉 被迫變賣股票：${s.ticker} (${qty}股)`);
      }
    }
    else if (choice === 'sell_pledge') {
      const tick = Object.keys(p.pledged)[0];
      const pledged = p.pledged[tick];
      const s = state.stocks.find(x => x.ticker === tick);
      if (s) {
        const curValue = pledged.shares * s.price;
        const remainder = curValue - pledged.loan;
        p.cash += remainder;
        delete p.pledged[tick];
        log(`📉 <b>${p.name}</b> 被迫平倉質押部位以還債，清算後進帳 $${fmt(remainder)}。`, '#f87171');
        state.turnActions.push(`📉 被迫平倉質押：${s.ticker}`);
      }
    }
    else if (choice === 'sell_property') {
      const props = MAP.nodes.filter(n => n.type === 'property' && n.owner === p.id);
      const house = props.find(n => n.level > 0);
      if (house) {
        const refund = Math.round(inf(house.basePrice) * 0.3);
        house.level--;
        house.lastActionRound = state.round; 
        p.cash += refund;
        log(`🏠 <b>${p.name}</b> 將地產「${house.name}」折損拆除一級，變賣建材回收 $${fmt(refund)}。`, '#f87171');
      } else if (props.length > 0) {
        const prop = props[0];
        const refund = Math.round(inf(prop.basePrice) * 0.7);
        prop.owner = null;
        prop.level = 0;
        prop.lastActionRound = 0;
        p.cash += refund;
        log(`🏙 <b>${p.name}</b> 將無建物的地產「${prop.name}」土地以 7 折賣還給銀行，拿回現金 $${fmt(refund)}。`, '#f87171');
      }
    }
    syncState();
    renderAll();
  }
}

function declareBankruptcy(p) {
  p.alive = false;
  state.turnActions.push(`💀 宣告破產，退出對局！`);
  p.cash = 0;
  p.savings = 0;
  p.points = 0;
  p.stocks = {};
  p.pledged = {};
  p.items = [];
  p.deity = null;
  
  MAP.nodes.forEach(n => {
    if (n.type === 'property' && n.owner === p.id) {
      n.owner = null;
      n.level = 0;
      n.lastActionRound = 0;
    }
  });
  syncState();
  renderAll();
}

/* =========================================================
   道具卡 UI 與使用
========================================================= */
let itemPanelShopMode = false; // true 時道具面板才顯示「購買區」（只在道具商店格觸發）

function openItems() {
  if (!isMyTurn()) return;
  itemPanelShopMode = false; // 從工具列開啟＝只能使用背包，不能購買
  closePanels();
  renderItems();
  $('itemPanel').style.display = 'flex';
}

function closeItems() {
  $('itemPanel').style.display = 'none';
  itemPanelShopMode = false; // 關閉後重設，下次從工具列開啟為背包模式
}

function renderItems() {
  const p = curPlayer();
  
  const shopHTML = Object.keys(ITEMS).map(k => {
    const item = ITEMS[k];
    return `<div class="p-3 border border-[#26314a] rounded-lg bg-[#1a2233] flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-1">
          <span class="font-bold text-[#e6edf7]">${item.icon} ${item.name}</span>
          <span class="mono text-xs text-[#60a5fa] font-bold">${item.price} PP</span>
        </div>
        <p class="text-[11px] text-[#8a98b3] leading-relaxed mb-3">${item.desc}</p>
      </div>
      <button class="btn btn-gold w-full py-1 text-xs" onclick="buyItem('${k}')" ${p.points < item.price ? 'disabled' : ''}>
        🛒 購買
      </button>
    </div>`;
  }).join('');
  
  const myItemsHTML = p.items.map((k, idx) => {
    const item = ITEMS[k];
    if (!item) return '';
    return `<div class="p-3 border border-[#26314a] rounded-lg bg-[#121826] flex items-center justify-between">
      <div>
        <span class="font-bold text-[#e6edf7]">${item.icon} ${item.name}</span>
        <p class="text-[11px] text-[#8a98b3] mt-0.5">${item.desc}</p>
      </div>
      <button class="btn btn-green px-4 py-1.5 text-xs font-bold shrink-0 ml-3" onclick="useItem('${k}', ${idx})">
        ⚡ 使用
      </button>
    </div>`;
  }).join('') || '<div class="text-[#8a98b3] text-xs text-center py-6">您目前沒有任何道具卡。</div>';
  
  $('itemBody').innerHTML = `
    <div class="flex items-center justify-between mb-3 border-b border-[#26314a] pb-2">
      <div class="display text-xl font-bold text-[#f5c451] flex items-center gap-2">
        <span>${itemPanelShopMode ? '🛒 道具商店' : '🎴 道具背包'}</span>
        <span class="text-xs text-[#8a98b3] font-normal">（剩餘點數：${p.points} PP）</span>
      </div>
      <button class="btn btn-ghost px-3 py-1 text-xs" onclick="closeItems()">關閉 ✕</button>
    </div>
    
    ${itemPanelShopMode ? `
    <div class="mb-5">
      <div class="text-xs font-bold text-[#f5c451] mb-2">🛒 商品架（請使用 PP 點數購買；只有踩到道具商店格才能購買）</div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        ${shopHTML}
      </div>
    </div>
    ` : `
    <div class="mb-3 text-[11px] text-[#8a98b3] bg-[#1a2233] border border-[#26314a] rounded-lg p-2">
      💡 道具卡只能在地圖上的「🛒 道具商店」格購買；此處僅供查看與使用您已持有的道具。
    </div>
    `}
    
    <div>
      <div class="text-xs font-bold text-[#34d399] mb-2">💼 您的背包（上限 7 張）</div>
      <div class="flex flex-col gap-2">
        ${myItemsHTML}
      </div>
    </div>
  `;
}

function buyItem(itemKey) {
  const p = curPlayer();
  const item = ITEMS[itemKey];
  if (!item) return;
  
  if (!itemPanelShopMode) {
    alertModal('無法購買', '道具卡只能在地圖上的「🛒 道具商店」格購買。');
    return;
  }
  if (p.items.length >= 7) {
    alertModal('購買失敗', '您的卡片包已滿（上限持有 7 張道具卡）。');
    return;
  }
  if (p.points < item.price) {
    alertModal('點數不足', `點數不足！購買這張卡片需要 ${item.price} PP。`);
    return;
  }
  p.points -= item.price;
  p.items.push(itemKey);
  log(`🛒 <b>${p.name}</b> 購買了一張「${item.name}」，花費了 ${item.price} PP。`, p.color);
  state.turnActions.push(`🛒 購買道具卡「${item.name}」（花費 ${item.price} PP）`);
  
  syncState();
  renderItems();
  renderAll();
}

async function useItem(itemKey, index) {
  const p = curPlayer();
  if (rolledThisTurn && itemKey !== 'dismiss' && itemKey !== 'summon') {
    alertModal('使用失敗', '此道具卡必須在您「擲骰移動之前」使用。');
    return;
  }
  
  if (itemKey === 'accel') {
    p.items.splice(index, 1);
    closePanels();
    log(`🔥 <b>${p.name}</b> 使用了通膨加速卡！`, p.color);
    state.turnActions.push(`⚡ 使用「通膨加速卡」`);
    triggerInflation('道具卡加速');
    await alertModal('🔥 全域通膨提前引爆', '市場受心理預期影響，<b>立即引爆了一輪通膨</b>！');
  } 
  else if (itemKey === 'freeze') {
    p.items.splice(index, 1);
    closePanels();
    state.freezeTurns = 5;
    log(`❄️ <b>${p.name}</b> 使用了經濟凍結卡！`, p.color);
    state.turnActions.push(`⚡ 使用「經濟凍結卡」`);
    await alertModal('❄️ 經濟凍結生效', '調控有成！<b>未來 5 輪內物價將完全凍結不調漲</b>。');
  } 
  else if (itemKey === 'tsunami') {
    const rivals = state.players.filter(r => r.id !== p.id && r.alive);
    if (rivals.length === 0) return;
    
    const buttons = rivals.map(r => ({ label: r.name, value: r.id, cls: 'btn-red' }));
    const targetId = await showChoice('🌊 施放金融海嘯', '請選擇您要重創哪一位對手的地租收入（3回合內其地租減半）：', buttons);
    if (targetId !== undefined) {
      p.items.splice(index, 1);
      closePanels();
      const rival = state.players[targetId];
      rival.tsunamiTurns = 3;
      log(`🌊 <b>${p.name}</b> 對 <b>${rival.name}</b> 施放了金融海嘯！`, p.color);
      state.turnActions.push(`⚡ 使用「金融海嘯卡」重創了 ${rival.name}`);
      await alertModal('🌊 金融海嘯成功登陸', `海嘯橫掃！<b>${rival.name}</b> 的所有地產在未來 3 回合內，租金收入將<b>減半</b>。`);
    }
  } 
  else if (itemKey === 'dice') {
    const steps = await showChoice('🎯 遙控骰子選擇', '請自訂前進步數 (1-6)：', [
      { label: '1 步', value: 1, cls: 'btn-gold' },
      { label: '2 步', value: 2, cls: 'btn-gold' },
      { label: '3 步', value: 3, cls: 'btn-gold' },
      { label: '4 步', value: 4, cls: 'btn-gold' },
      { label: '5 步', value: 5, cls: 'btn-gold' },
      { label: '6 步', value: 6, cls: 'btn-gold' }
    ]);
    if (steps) {
      p.items.splice(index, 1);
      closePanels();
      log(`🎯 <b>${p.name}</b> 使用遙控骰子前進 ${steps} 步。`, p.color);
      state.turnActions.push(`⚡ 使用「遙控骰子」自選移動了 ${steps} 步`);
      await doRoll(steps);
    }
  } 
  else if (itemKey === 'barricade') {
    const list = [];
    let cur = p.node;
    let nexts = [cur];
    for (let d = 1; d <= 8; d++) {
      const temp = [];
      nexts.forEach(nodeId => {
        const adjs = MAP.adj[nodeId] || [];
        adjs.forEach(a => {
          if (a !== p.from && a !== 0 && !list.includes(a) && a !== p.node) {
            list.push(a);
            temp.push(a);
          }
        });
      });
      nexts = temp;
    }
    
    const buttons = list.slice(0, 8).map(id => {
      const n = nodeById(id);
      return { label: `${tileIcon(n)} ${n.name}`, value: id, cls: 'btn-gold' };
    });
    
    if (buttons.length === 0) {
      alertModal('無處放置', '前方無合適的放置路障節點。');
      return;
    }
    
    const targetNode = await showChoice('🚧 投放路障', '請選擇要在前方哪一個格子上設置路障：', buttons);
    if (targetNode !== undefined) {
      p.items.splice(index, 1);
      closePanels();
      state.barricades[targetNode] = true;
      log(`🚧 <b>${p.name}</b> 在「${nodeById(targetNode).name}」上設置了一個路障。`, p.color);
      await alertModal('🚧 路障投放成功', `路障已成功安置！下一個經過該格的玩家必定強制停步。`);
      updateMap();
    }
  } 
  else if (itemKey === 'summon') {
    p.items.splice(index, 1);
    closePanels();
    const keys = Object.keys(DEITIES);
    const rType = pick(keys);
    const big = Math.random() < 0.20;
    p.deity = { type: rType, big, turns: 5 };
    log(`📜 <b>${p.name}</b> 使用請神符召喚了【${DEITIES[rType].name}${big ? ' (大)' : ''}】！`, DEITIES[rType].color);
    await alertModal('✨ 請神成功', `召喚了【<b>${DEITIES[rType].name}${big ? ' (大)' : ''}</b>】附身，持續 5 回合！<div class="mt-2 p-2 rounded border text-xs leading-relaxed" style="border-color:${DEITIES[rType].color}55; background:${DEITIES[rType].color}15; color:${DEITIES[rType].color}">📜 神明功能：${deityEffectText(rType)}</div>`);
  } 
  else if (itemKey === 'dismiss') {
    if (!p.deity) {
      alertModal('無效使用', '您身上目前沒有神明附身。');
      return;
    }
    const oldName = DEITIES[p.deity.type].name;
    p.items.splice(index, 1);
    closePanels();
    p.deity = null;
    log(`🧧 <b>${p.name}</b> 使用送神符送走了身上的神明。`, p.color);
    await alertModal('🧧 送神成功', `成功送走身上的【${oldName}】！`);
  }
  else if (itemKey === 'bazooka') {
    const rivals = state.players.filter(r => r.id !== p.id && r.alive);
    if (rivals.length === 0) return;
    const buttons = rivals.map(r => ({ label: `${r.icon} ${r.name}`, value: r.id, cls: 'btn-red' }));
    const targetId = await showChoice('🚀 發射火箭筒', '選擇要轟炸哪一位對手（對方將送醫 3 回合）：', buttons);
    if (targetId !== undefined) {
      p.items.splice(index, 1);
      closePanels();
      const rival = state.players[targetId];
      rival.skipTurns = 3;
      rival.node = 13;
      log(`🚀 <b>${p.name}</b> 對 <b>${rival.name}</b> 發射了火箭筒！${rival.name} 受傷送醫 3 回合！`, '#f87171');
      state.turnActions.push(`🚀 使用「火箭筒」轟炸了 ${rival.name}`);
      await alertModal('🚀 火箭筒命中！', `<b>${rival.name}</b> 被火箭筒直接命中，傷重送醫！<br>未來 <b>3 回合</b>將無法行動。`);
    }
  }
  else if (itemKey === 'demolish') {
    const allProps = MAP.nodes.filter(n => n.type === 'property' && n.owner !== null);
    if (allProps.length === 0) { alertModal('無法使用', '場上沒有任何已購買的地產。'); return; }
    const buttons = allProps.map(n => {
      const owner = state.players[n.owner];
      return { label: `${owner.icon} ${owner.name} 的「${n.name}」(${HOUSE_LABEL[n.level]})`, value: n.id, cls: 'btn-red' };
    });
    const targetNodeId = await showChoice('🏚️ 拆除目標', '選擇要拆除的地產（降一級，空地則收回為無主地）：', buttons);
    if (targetNodeId !== undefined) {
      p.items.splice(index, 1);
      closePanels();
      const n = nodeById(targetNodeId);
      const ownerName = state.players[n.owner].name;
      if (n.level > 0) {
        n.level--;
        log(`🏚️ <b>${p.name}</b> 拆除了 ${ownerName} 的「${n.name}」，降為${HOUSE_LABEL[n.level]}。`, '#f87171');
        await alertModal('🏚️ 拆除完成', `「${n.name}」已被降級為 <b>${HOUSE_LABEL[n.level]}</b>。`);
      } else {
        n.owner = null;
        log(`🏚️ <b>${p.name}</b> 拆除了 ${ownerName} 的「${n.name}」，該地已收回為無主地！`, '#f87171');
        await alertModal('🏚️ 土地收回', `「${n.name}」已被拆除並收回為<b>無主地</b>！`);
      }
    }
  }
  else if (itemKey === 'redcard') {
    const buttons = state.stocks.map(s => ({ label: `${s.name} (${s.ticker}) $${fmt(s.price)}`, value: s.ticker, cls: 'btn-green' }));
    const ticker = await showChoice('📈 紅卡 — 漲停操控', '選擇要連續 3 天漲停的股票：', buttons);
    if (ticker !== undefined) {
      p.items.splice(index, 1);
      closePanels();
      if (!state.stockOverrides) state.stockOverrides = [];
      state.stockOverrides.push({ ticker, direction: 'up', turnsLeft: 3 });
      const s = state.stocks.find(x => x.ticker === ticker);
      log(`📈 <b>${p.name}</b> 對「${s.name}」施放紅卡！連續 3 天漲停！`, '#34d399');
      state.turnActions.push(`📈 使用「紅卡」操控 ${s.name} 漲停 3 天`);
      await alertModal('📈 紅卡生效', `「<b>${s.name}</b>」將在未來 3 輪強制漲停板！`);
    }
  }
  else if (itemKey === 'blackcard') {
    const buttons = state.stocks.map(s => ({ label: `${s.name} (${s.ticker}) $${fmt(s.price)}`, value: s.ticker, cls: 'btn-red' }));
    const ticker = await showChoice('📉 黑卡 — 跌停操控', '選擇要連續 3 天跌停的股票：', buttons);
    if (ticker !== undefined) {
      p.items.splice(index, 1);
      closePanels();
      if (!state.stockOverrides) state.stockOverrides = [];
      state.stockOverrides.push({ ticker, direction: 'down', turnsLeft: 3 });
      const s = state.stocks.find(x => x.ticker === ticker);
      log(`📉 <b>${p.name}</b> 對「${s.name}」施放黑卡！連續 3 天跌停！`, '#f87171');
      state.turnActions.push(`📉 使用「黑卡」操控 ${s.name} 跌停 3 天`);
      await alertModal('📉 黑卡生效', `「<b>${s.name}</b>」將在未來 3 輪強制跌停板！`);
    }
  }
  else if (itemKey === 'taxcard') {
    const rivals = state.players.filter(r => r.id !== p.id && r.alive);
    if (rivals.length === 0) return;
    const buttons = rivals.map(r => ({ label: `${r.icon} ${r.name} (現金 $${fmt(r.cash)})`, value: r.id, cls: 'btn-gold' }));
    const targetId = await showChoice('💰 查稅卡', '選擇要向誰徵收 20% 現金稅：', buttons);
    if (targetId !== undefined) {
      p.items.splice(index, 1);
      closePanels();
      const rival = state.players[targetId];
      const tax = Math.round(rival.cash * 0.2);
      rival.cash -= tax;
      p.cash += tax;
      log(`💰 <b>${p.name}</b> 向 <b>${rival.name}</b> 徵收了 $${fmt(tax)} 稅金！`, '#f5c451');
      state.turnActions.push(`💰 使用「查稅卡」向 ${rival.name} 徵收 $${fmt(tax)}`);
      await alertModal('💰 稅金徵收成功', `成功從 <b>${rival.name}</b> 身上徵收了 <span class="mono text-[#f5c451]">$${fmt(tax)}</span> 的稅金！`);
    }
  }
  else if (itemKey === 'pricehike') {
    const GROUPS_LIST = [];
    MAP.nodes.forEach(n => { if (n.type === 'property' && n.groupName && !GROUPS_LIST.find(g => g.idx === n.group)) GROUPS_LIST.push({ idx: n.group, name: n.groupName, color: n.groupColor }); });
    if (GROUPS_LIST.length === 0) return;
    const buttons = GROUPS_LIST.map(g => ({ label: `▰ ${g.name}`, value: g.idx, cls: 'btn-gold' }));
    const grpIdx = await showChoice('💹 漲價卡', '選擇要使哪個路段的過路費加倍（持續 5 輪）：', buttons);
    if (grpIdx !== undefined) {
      p.items.splice(index, 1);
      closePanels();
      if (!state.priceHikes) state.priceHikes = [];
      state.priceHikes.push({ group: grpIdx, turnsLeft: 5 });
      const gName = GROUPS_LIST.find(g => g.idx === grpIdx).name;
      log(`💹 <b>${p.name}</b> 使「${gName}」路段過路費加倍 5 輪！`, '#f5c451');
      state.turnActions.push(`💹 使用「漲價卡」讓 ${gName} 路段漲價`);
      await alertModal('💹 漲價卡生效', `「<b>${gName}</b>」路段所有地產的過路費在未來 5 輪內<b>加倍</b>！`);
    }
  }
  else if (itemKey === 'seal') {
    const GROUPS_LIST = [];
    MAP.nodes.forEach(n => { if (n.type === 'property' && n.groupName && !GROUPS_LIST.find(g => g.idx === n.group)) GROUPS_LIST.push({ idx: n.group, name: n.groupName, color: n.groupColor }); });
    if (GROUPS_LIST.length === 0) return;
    const buttons = GROUPS_LIST.map(g => ({ label: `▰ ${g.name}`, value: g.idx, cls: 'btn-red' }));
    const grpIdx = await showChoice('🔏 查封卡', '選擇要查封哪個路段（停收過路費 5 輪，可反制漲價卡）：', buttons);
    if (grpIdx !== undefined) {
      p.items.splice(index, 1);
      closePanels();
      if (!state.seals) state.seals = [];
      state.seals.push({ group: grpIdx, turnsLeft: 5 });
      if (state.priceHikes) state.priceHikes = state.priceHikes.filter(h => h.group !== grpIdx);
      const gName = GROUPS_LIST.find(g => g.idx === grpIdx).name;
      log(`🔏 <b>${p.name}</b> 查封了「${gName}」路段！過路費歸零 5 輪！`, '#60a5fa');
      state.turnActions.push(`🔏 使用「查封卡」查封 ${gName} 路段`);
      await alertModal('🔏 查封卡生效', `「<b>${gName}</b>」路段已被查封！未來 5 輪內<b>過路費歸零</b>。<br>同時該路段的漲價效果也被移除。`);
    }
  }
  else if (itemKey === 'auction') {
    const rivals = state.players.filter(r => r.id !== p.id && r.alive);
    const rivalProps = [];
    rivals.forEach(r => { MAP.nodes.forEach(n => { if (n.type === 'property' && n.owner === r.id) rivalProps.push(n); }); });
    if (rivalProps.length === 0) { alertModal('無法使用', '對手目前沒有任何地產可供拍賣。'); return; }
    const buttons = rivalProps.map(n => {
      const owner = state.players[n.owner];
      return { label: `${owner.icon} ${owner.name} 的「${n.name}」(市價 $${fmt(inf(n.basePrice))})`, value: n.id, cls: 'btn-gold' };
    });
    const targetNodeId = await showChoice('🔨 拍賣目標', '選擇要強制拍賣哪塊地產：', buttons);
    if (targetNodeId !== undefined) {
      p.items.splice(index, 1);
      closePanels();
      const n = nodeById(targetNodeId);
      const oldOwner = state.players[n.owner];
      const minBid = inf(n.basePrice);
      let highestBid = minBid;
      let highestBidder = null;
      const bidders = state.players.filter(b => b.alive && b.id !== oldOwner.id && b.cash >= minBid);
      for (const bidder of bidders) {
        const bidAmount = parseInt(prompt(`${bidder.name}，請輸入對「${n.name}」的出價（最低 $${fmt(minBid)}，目前最高出價 $${fmt(highestBid)}，您的現金 $${fmt(bidder.cash)}）：\n輸入 0 或取消 = 放棄`)) || 0;
        if (bidAmount > highestBid && bidAmount <= bidder.cash) {
          highestBid = bidAmount;
          highestBidder = bidder;
        }
      }
      if (highestBidder) {
        highestBidder.cash -= highestBid;
        oldOwner.cash += highestBid;
        n.owner = highestBidder.id;
        log(`🔨 「${n.name}」被 <b>${highestBidder.name}</b> 以 $${fmt(highestBid)} 得標！原主 ${oldOwner.name} 獲得拍賣款。`, '#f5c451');
        state.turnActions.push(`🔨 拍賣「${n.name}」— ${highestBidder.name} 以 $${fmt(highestBid)} 得標`);
        await alertModal('🔨 拍賣成交', `「<b>${n.name}</b>」由 <b>${highestBidder.name}</b> 以 $${fmt(highestBid)} 得標！<br>${oldOwner.name} 獲得拍賣款項。`);
      } else {
        log(`🔨 「${n.name}」拍賣流標，無人出價。`, '#8a98b3');
        await alertModal('🔨 拍賣流標', `無人出價達到底價 $${fmt(minBid)}，拍賣流標。`);
      }
    }
  }
  else if (itemKey === 'staycard') {
    const targets = state.players.filter(r => r.alive);
    const buttons = targets.map(r => ({ label: `${r.icon} ${r.name}${r.id === p.id ? ' (自己)' : ''}`, value: r.id, cls: r.id === p.id ? 'btn-gold' : 'btn-red' }));
    const targetId = await showChoice('⏸️ 停留卡', '選擇要讓誰原地停留一回合：', buttons);
    if (targetId !== undefined) {
      p.items.splice(index, 1);
      closePanels();
      const target = state.players[targetId];
      target.skipTurns = (target.skipTurns || 0) + 1;
      log(`⏸️ <b>${p.name}</b> 讓 <b>${target.name}</b> 原地停留一回合！`, p.color);
      state.turnActions.push(`⏸️ 使用「停留卡」讓 ${target.name} 停留`);
      await alertModal('⏸️ 停留卡生效', `<b>${target.name}</b> 將在下一回合原地停留，無法行動。`);
    }
  }
  else if (itemKey === 'motorcycle') {
    p.items.splice(index, 1);
    closePanels();
    p.diceCount = 2;
    p.diceCountTurns = 5;
    log(`🏍️ <b>${p.name}</b> 使用了機車卡！接下來 5 回合可擲兩顆骰子！`, p.color);
    state.turnActions.push(`🏍️ 使用「機車卡」— 雙骰模式 5 回合`);
    await alertModal('🏍️ 機車卡生效', '您獲得了機車！接下來 <b>5 回合</b>將使用<b>兩顆骰子</b>前進。');
  }
  else if (itemKey === 'car') {
    p.items.splice(index, 1);
    closePanels();
    p.diceCount = 3;
    p.diceCountTurns = 5;
    log(`🏎️ <b>${p.name}</b> 使用了汽車卡！接下來 5 回合可擲三顆骰子！`, p.color);
    state.turnActions.push(`🏎️ 使用「汽車卡」— 三骰模式 5 回合`);
    await alertModal('🏎️ 汽車卡生效', '您獲得了汽車！接下來 <b>5 回合</b>將使用<b>三顆骰子</b>前進。');
  }
  syncState();
  renderAll();
}

/* =========================================================
   蓋房升級 UI
========================================================= */
function openBuild() {
  if (!isMyTurn()) return;
  closePanels();
  renderBuild();
  $('buildPanel').style.display = 'flex';
}

function closeBuild() {
  $('buildPanel').style.display = 'none';
}



async function onStockExchange(p) {
  const randomStock = pick(state.stocks);
  const choice = await showChoice(
    '📈 證券交易所特權',
    `歡迎來到證券交易所！作為上市尊榮會員，您可以選擇以下一項福利：`,
    [
      { label: `🎁 免費領取 ${randomStock.name} (10 股)`, value: 'free', cls: 'btn-gold' },
      { label: `💸 以 9 折優惠申購 ${randomStock.name} (最多 50 股)`, value: 'discount', cls: 'btn-green' },
      { label: `👋 離開證券交易所`, value: 'leave', cls: 'btn-ghost' }
    ]
  );
  
  if (choice === 'free') {
    const actualFreeQty = config.stockLimit && randomStock.availableShares !== Infinity ? Math.min(10, randomStock.availableShares) : 10;
    if (actualFreeQty <= 0) {
      await alertModal('領取失敗', `「<b>${randomStock.name}</b>」在市場上已無剩餘股數可供贈送！`);
      return;
    }
    if (!p.stocks[randomStock.ticker]) {
      p.stocks[randomStock.ticker] = { qty: 0, avgCost: 0 };
    }
    const oldQty = getStockQty(p, randomStock.ticker);
    const oldAvg = getStockAvgCost(p, randomStock.ticker);
    const newQty = oldQty + actualFreeQty;
    const newAvg = Math.round((oldQty * oldAvg) / newQty);
    p.stocks[randomStock.ticker].qty = newQty;
    p.stocks[randomStock.ticker].avgCost = newAvg;
    
    if (config.stockLimit && randomStock.availableShares !== Infinity) {
      randomStock.availableShares -= actualFreeQty;
    }
    
    log(`📈 <b>${p.name}</b> 在證券交易所獲得了免費的 ${actualFreeQty} 股 ${randomStock.name}！`, p.color);
    state.turnActions.push(`在證券交易所獲贈 ${actualFreeQty} 股 ${randomStock.name}`);
    await alertModal('領取成功', `您已獲得 ${actualFreeQty} 股 <b>${randomStock.name}</b>！<br>目前持股：${newQty} 股，平均成本：$${newAvg}`);
  } else if (choice === 'discount') {
    const discountPrice = Math.round(randomStock.price * 0.9);
    const maxAfford = Math.floor(p.cash / discountPrice);
    const maxLimit = config.stockLimit && randomStock.availableShares !== Infinity ? randomStock.availableShares : Infinity;
    const maxBuy = Math.min(50, maxAfford, maxLimit);
    
    if (maxBuy <= 0) {
      await alertModal('無法申購', `您的現金不足，或者「<b>${randomStock.name}</b>」在市場上已無剩餘股數可供申購。`);
      return;
    }
    
    const buyOpts = [];
    if (maxBuy >= 10) buyOpts.push({ label: `購買 10 股 (總價 $${fmt(discountPrice * 10)})`, value: 10, cls: 'btn-green' });
    if (maxBuy >= 20) buyOpts.push({ label: `購買 20 股 (總價 $${fmt(discountPrice * 20)})`, value: 20, cls: 'btn-green' });
    if (maxBuy >= 50) buyOpts.push({ label: `購買 50 股 (總價 $${fmt(discountPrice * 50)})`, value: 50, cls: 'btn-green' });
    if (maxBuy > 0 && !buyOpts.some(o => o.value === maxBuy)) {
      buyOpts.push({ label: `購買最大量 ${maxBuy} 股 (總價 $${fmt(discountPrice * maxBuy)})`, value: maxBuy, cls: 'btn-gold' });
    }
    buyOpts.push({ label: '取消購買', value: 0, cls: 'btn-ghost' });
    
    const qtyToBuy = await showChoice(
      '💸 折扣申購股票',
      `您將以 9 折價 $${fmt(discountPrice)} (原價 $${fmt(randomStock.price)}) 申購 <b>${randomStock.name}</b>：`,
      buyOpts
    );
    
    if (qtyToBuy > 0) {
      const totalCost = discountPrice * qtyToBuy;
      p.cash -= totalCost;
      p.turnSpent = (p.turnSpent || 0) + totalCost;
      
      if (!p.stocks[randomStock.ticker]) {
        p.stocks[randomStock.ticker] = { qty: 0, avgCost: 0 };
      }
      const oldQty = getStockQty(p, randomStock.ticker);
      const oldAvg = getStockAvgCost(p, randomStock.ticker);
      const newQty = oldQty + qtyToBuy;
      const newAvg = Math.round((oldQty * oldAvg + totalCost) / newQty);
      p.stocks[randomStock.ticker].qty = newQty;
      p.stocks[randomStock.ticker].avgCost = newAvg;
      
      if (config.stockLimit && randomStock.availableShares !== Infinity) {
        randomStock.availableShares -= qtyToBuy;
      }
      
      log(`📈 <b>${p.name}</b> 在證券交易成功以 9 折優惠申購了 ${qtyToBuy} 股 ${randomStock.name}！`, p.color);
      state.turnActions.push(`折扣申購了 ${qtyToBuy} 股 ${randomStock.name}`);
      await alertModal('申購成功', `您成功以 $${fmt(totalCost)} 申購了 ${qtyToBuy} 股 <b>${randomStock.name}</b>！<br>目前持股：${newQty} 股，平均成本：$${newAvg}`);
    }
  }
  syncState();
}
function renderBuild() {
  const p = curPlayer();
  const props = MAP.nodes.filter(n => n.type === 'property' && n.owner === p.id);
  
  const listHTML = props.map(n => {
    const isMax = n.level >= 4;
    const usedThisRound = n.lastActionRound === state.round;
    const cost = isMax ? 0 : Math.round(n.basePrice * 0.6 * state.inflationMult * construct());
    
    let finalCost = cost;
    if (hasDeity(p, 'happy')) {
      finalCost = p.deity.big ? 0 : Math.round(cost * 0.5);
    }
    
    let costTxt = isMax ? '已封頂' : `$${fmt(finalCost)}`;
    let statusLabel = '';
    
    if (usedThisRound) {
      statusLabel = '<span class="text-xs text-[#f87171] font-bold border border-[#f87171] px-2 py-0.5 rounded">本輪已操作</span>';
    }
    const disabled = isMax || p.cash < finalCost || usedThisRound;
    
    return `<div class="p-3 border border-[#26314a] rounded-lg bg-[#121826] flex items-center justify-between text-sm">
      <div>
        <div class="font-bold text-[#e6edf7]">${n.name}</div>
        <div class="text-xs text-[#8a98b3] mt-1">
          當前等級：<span class="text-[#ffe08a] font-semibold">${HOUSE_LABEL[n.level]}</span>
          ${isMonopoly(n) ? ' · <span class="text-[#f5c451]">👑壟斷加倍</span>' : ''}
        </div>
        <div class="text-[10px] text-[#8a98b3] mt-1 flex items-center gap-1.5 flex-wrap">
          <span>過路費：$${fmt(rentDue(p, p.id, n))}</span>
          ${statusLabel}
        </div>
      </div>
      
      <div class="flex items-center gap-3">
        <div class="text-right">
          <div class="text-[10px] text-[#8a98b3]">升級造價</div>
          <div class="mono text-xs font-bold text-[#f5c451]">${costTxt}</div>
        </div>
        <button class="btn btn-gold px-4 py-1.5 text-xs" onclick="buildHouse(${n.id})" ${disabled ? 'disabled' : ''}>
          🔨 建造
        </button>
      </div>
    </div>`;
  }).join('') || '<div class="text-[#8a98b3] text-xs text-center py-12">您名下沒有任何地產。</div>';
  
  $('buildBody').innerHTML = `
    <div class="flex items-center justify-between mb-3 border-b border-[#26314a] pb-2">
      <div class="display text-xl font-bold text-[#f5c451] flex items-center gap-2">
        <span>🏠 蓋房與升級</span>
        <span class="text-xs text-[#8a98b3] font-normal">（手頭現金：$${fmt(p.cash)}）</span>
      </div>
      <button class="btn btn-ghost px-3 py-1 text-xs" onclick="closeBuild()">關閉 ✕</button>
    </div>
    
    <div class="p-2 border border-[#8a98b3]11 bg-[#1a2233] rounded text-xs text-[#8a98b3] mb-3 leading-relaxed">
      每處地產每輪限升級一次，且剛買下的地段在購入當輪不可立即蓋房。
    </div>
    
    ${state.rateHikeTurns > 0 ? `<div class="p-2 border border-[#f59e0b] bg-[#f59e0b]11 rounded text-xs text-[#f59e0b] mb-3 leading-relaxed">
      ⚠️ 央行升息中：蓋房升級成本增加 30%。
    </div>` : ''}
    
    ${hasDeity(p, 'happy') ? `<div class="p-2 border border-[#f472b6] bg-[#f472b6]11 rounded text-xs text-[#f472b6] mb-3 leading-relaxed">
      🎎 福神庇佑：建造升級費用減半 (大福神則免費)。
    </div>` : ''}
    
    <div class="flex flex-col gap-2.5">
      ${listHTML}
    </div>
  `;
}

async function buildHouse(nodeId) {
  const p = curPlayer();
  const n = nodeById(nodeId);
  if (!n || n.owner !== p.id) return;
  
  if (n.level >= 4) {
    alertModal('建造失敗', '此處房屋等級已達地標上限，無法再升級。');
    return;
  }
  
  const isMax = n.level >= 4;
  const usedThisRound = n.lastActionRound === state.round;
  const cost = isMax ? 0 : Math.round(n.basePrice * 0.6 * state.inflationMult * construct());
  
  let finalCost = cost;
  if (hasDeity(p, 'happy')) {
    finalCost = p.deity.big ? 0 : Math.round(cost * 0.5);
  }
  
  if (p.cash < finalCost) {
    alertModal('資金不足', '您的手頭現金不足以支付升級費用。');
    return;
  }
  
  if (usedThisRound) {
    alertModal('升級限制', '每處地產每輪限制升級一次。');
    return;
  }
  
  p.cash -= finalCost;
  p.turnSpent = (p.turnSpent || 0) + finalCost;
  n.level++;
  n.lastActionRound = state.round;
  
  log(`🏠 <b>${p.name}</b> 在「${n.name}」升級了建築，目前等級：【${HOUSE_LABEL[n.level]}】。`, p.color);
  state.turnActions.push(`🏠 升級「${n.name}」為 ${HOUSE_LABEL[n.level]}`);
  
  closeBuild();
  syncState();
  renderAll();
}
window.buildHouse = buildHouse;


function isMyTurn() {
  if (playMode === 'local') return true;
  if (!state || !peer) return false;
  const p = curPlayer();
  return p && (peer && p.peerId === peer.id);
}

function checkTurnTransition() {
  if (playMode !== 'online' || !state) return;
  if (state.current !== clientCurrentTurn) {
    if (clientCurrentTurn !== -1) {
      lastActiveTurnIndex = clientCurrentTurn;
    }
    clientCurrentTurn = state.current;
    const p = curPlayer();
    if (p && (peer && p.peerId === peer.id)) {
      console.log("My turn started! Calling beginTurn().");
      beginTurn();
    }
  }
}

function onRollClick() {
  if (!isMyTurn()) return;
  doRoll();
}
window.onRollClick = onRollClick;

async function openShopBuy(p) {
  log(`🛒 <b>${p.name}</b> 抵達道具商店。`, '#22d3ee');
  const choose = await showChoice('🛒 抵達道具商店', `歡迎光臨道具商店！您可以在此使用 PP 點數購買道具卡。是否開啟商店？`, [
    { label: '🛒 開啟商店購買', value: true, cls: 'btn-gold' },
    { label: '🚪 直接離開', value: false, cls: 'btn-ghost' }
  ]);
  if (choose) {
    itemPanelShopMode = true; // 商店格才開放購買
    closePanels();
    renderItems();
    $('itemPanel').style.display = 'flex';
  }
}

/* =========================================================
   全域持股小幫手
========================================================= */
function getStockQty(p, tk) {
  const s = p.stocks[tk];
  if (!s) return 0;
  return typeof s === 'object' ? s.qty : s;
}

function getStockAvgCost(p, tk) {
  const s = p.stocks[tk];
  if (!s) return 0;
  return typeof s === 'object' ? s.avgCost : 0;
}

function updateStockTotal() {
  const qtyInput = $('stockTradeQty');
  const totalSpan = $('stockTradeTotal');
  if (!qtyInput || !totalSpan) return;
  const qty = parseInt(qtyInput.value) || 0;
  const activeStock = state.stocks.find(s => s.ticker === state.selStock);
  if (activeStock) {
    totalSpan.textContent = '$' + (qty * activeStock.price).toLocaleString('en-US');
  }
}
window.updateStockTotal = updateStockTotal;

/* =========================================================
   回合行動簡報與左側即時狀態面板
========================================================= */
let sidebarOpen = true;

function toggleSidebar() {
  sidebarOpen = !sidebarOpen;
  const sidebar = $('leftSidebar');
  const expandBtn = $('sidebarExpandBtn');
  const arrow = $('sidebarToggleArrow');
  if (sidebarOpen) {
    sidebar.style.display = 'flex';
    expandBtn.classList.add('hidden');
    arrow.textContent = '◀ 收合';
  } else {
    sidebar.style.display = 'none';
    expandBtn.classList.remove('hidden');
    arrow.textContent = '▶ 展開';
  }
}
window.toggleSidebar = toggleSidebar;

function renderSidebar() {
  const container = $('sidebarContent');
  if (!container || !state) return;
  container.innerHTML = '';
  
  const sortedPlayers = state.players
    .filter(pl => pl.alive)
    .map(pl => ({ id: pl.id, worth: netWorth(pl) }))
    .sort((a, b) => b.worth - a.worth);
  
  const rankMap = {};
  sortedPlayers.forEach((item, index) => {
    rankMap[item.id] = index + 1;
  });
  
  state.players.forEach(p => {
    if (!p.alive) {
      container.innerHTML += `
        <div class="p-2 border border-[#26314a] rounded bg-[#0b0f17] opacity-50 flex items-center justify-between text-xs">
          <div class="flex items-center gap-1.5">
            <span class="pawn scale-90" style="border-color:${p.color}">${p.icon}</span>
            <span class="font-bold text-[#f87171] line-through text-[11px]">${p.name}</span>
          </div>
          <span class="text-[10px] text-[#f87171] font-bold">破產</span>
        </div>
      `;
      return;
    }
    
    const isCurrent = state.players[state.current].id === p.id;
    const itemsList = p.items.map(k => ITEMS[k] ? ITEMS[k].icon : '').join(' ');
    const deityText = p.deity ? `<span class="deity-badge" title="${deityEffectText(p.deity.type)}" style="background:${DEITIES[p.deity.type].color}; color:#111; padding: 1px 3px; font-size:9px; border-radius:3px; cursor:help;">${DEITIES[p.deity.type].icon}${DEITIES[p.deity.type].name.substring(0,2)}</span>` : '';
    const tsunamiText = p.tsunamiTurns > 0 ? `<span class="text-[9px] text-[#60a5fa] border border-[#60a5fa] px-1 rounded shrink-0">🌊${p.tsunamiTurns}</span>` : '';
    const rank = rankMap[p.id];
    
    // 生成個人詳細持股清冊小區塊
    let stocksListHTML = '';
    const stockTickers = Object.keys(p.stocks).filter(tk => getStockQty(p, tk) > 0);
    if (stockTickers.length > 0) {
      stocksListHTML = `<div class="mt-1.5 flex flex-col gap-0.5 border-t border-[#26314a]/60 pt-1">`;
      stockTickers.forEach(tk => {
        const qty = getStockQty(p, tk);
        const avgCost = getStockAvgCost(p, tk);
        const s = state.stocks.find(x => x.ticker === tk);
        if (s) {
          const pnlPercent = avgCost > 0 ? ((s.price - avgCost) / avgCost * 100) : 0;
          const pnlColor = pnlPercent >= 0 ? 'text-[#34d399]' : 'text-[#f87171]';
          const sign = pnlPercent >= 0 ? '+' : '';
          stocksListHTML += `
            <div class="flex justify-between items-center text-[9px] leading-tight">
              <span class="text-white">${s.name}×${qty}股</span>
              <span>成本:$${avgCost} <span class="${pnlColor} font-bold">${sign}${pnlPercent.toFixed(1)}%</span></span>
            </div>
          `;
        }
      });
      stocksListHTML += `</div>`;
    }
    
    const isOnline = playMode === 'local' || p.online !== false;
    const onlineBadgeText = isOnline 
      ? `<span class="online-badge text-[9px] text-[#34d399] border border-[#34d399]/40 px-1 rounded shrink-0">🟢 在線</span>` 
      : `<span class="offline-badge text-[9px] text-[#f87171] border border-[#f87171]/40 px-1 rounded shrink-0">🔴 託管</span>`;

    container.innerHTML += `
      <div class="p-2 border rounded flex flex-col gap-1.5 transition-all ${isCurrent ? 'border-[#f5c451] bg-[#1a2233] glow' : 'border-[#26314a] bg-[#121826]'}" style="border-left-width: 4px; border-left-color: ${p.color}; cursor: pointer;" title="點擊跳轉到 ${p.name} 的位置" onclick="focusPlayer(${p.id})">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-1.5 overflow-hidden">
            <span class="pawn scale-90 shrink-0 ${isOnline ? '' : 'offline-grayscale'}" style="border-color:${p.color}">${p.icon}</span>
            <span class="font-bold text-[11px] truncate text-[#e6edf7]">${p.name}</span>
          </div>
          <div class="flex gap-1 shrink-0">
            ${deityText}
            ${tsunamiText}
            ${playMode === 'online' ? onlineBadgeText : ''}
          </div>
        </div>
        <div class="grid grid-cols-2 gap-x-2 text-[10px] text-[#8a98b3]">
          <div>現金: <span class="mono text-white">$${fmt(p.cash)}</span></div>
          <div>點數: <span class="mono text-[#60a5fa]">${p.points} PP</span></div>
          <div class="col-span-2">總資產: <span class="mono text-[#f5c451] font-bold">$${fmt(netWorth(p))}</span> <span class="text-[#34d399] font-bold ml-1.5">🏆 #${rank}</span></div>
          <div class="col-span-2 mt-1 truncate">卡片: ${itemsList || '<span class="text-[9px] text-[#55637d]">無卡片</span>'}</div>
        </div>
        ${stocksListHTML}
      </div>
    `;
  });
}

function showTurnBriefingModal(p, actions, nextP) {
  const listHTML = (actions && actions.length ? actions : ['（本回合沒有特別行動）']).map(act =>
    `<li class="mb-1.5 text-xs text-[#e6edf7] flex gap-2"><span style="color:${p.color}">${p.icon}</span><span><b style="color:${p.color}">${p.name}</b> ${act}</span></li>`).join('');
  const nextBlock = nextP ? `
    <div class="mb-3 p-2 rounded-lg border text-center text-sm font-bold" style="border-color:${nextP.color}66; background:${nextP.color}15; color:${nextP.color}">
      ▶ 下一位玩家：${nextP.icon} ${nextP.name}
    </div>` : '';
  
  // 計算本回合現金與身價盈虧
  const cashDiff = p.cash - (p.turnStartCash !== undefined ? p.turnStartCash : p.cash);
  const nwDiff = netWorth(p) - (p.turnStartNetWorth !== undefined ? p.turnStartNetWorth : netWorth(p));
  
  const cashColor = cashDiff >= 0 ? 'text-[#34d399]' : 'text-[#f87171]';
  const nwColor = nwDiff >= 0 ? 'text-[#34d399]' : 'text-[#f87171]';
  const cashSign = cashDiff >= 0 ? '+' : '';
  const nwSign = nwDiff >= 0 ? '+' : '';
  
  const summaryBlock = `
    <div class="grid grid-cols-2 gap-3 mb-3 p-2 border border-[#26314a] bg-[#1a2233] rounded text-center text-[11px]">
      <div>
        <span class="text-[#8a98b3] block">💵 本回合支出金額</span>
        <span class="mono font-bold text-[#f87171]">$${fmt(p.turnSpent || 0)}</span>
      </div>
      <div>
        <span class="text-[#8a98b3] block">📈 本回合股票實現損益</span>
        <span class="mono font-bold ${p.turnStockPnL >= 0 ? 'text-[#34d399]' : 'text-[#f87171]'}">${p.turnStockPnL >= 0 ? '+' : ''}$${fmt(p.turnStockPnL || 0)}</span>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-3 mb-3 p-2 border border-[#26314a] bg-[#1a2233] rounded text-center text-[11px]">
      <div>
        <span class="text-[#8a98b3] block">💵 本回合現金增減</span>
        <span class="mono font-bold ${cashColor}">${cashSign}$${fmt(cashDiff)}</span>
      </div>
      <div>
        <span class="text-[#8a98b3] block">📊 本回合身價增減</span>
        <span class="mono font-bold ${nwColor}">${nwSign}$${fmt(nwDiff)}</span>
      </div>
    </div>
  `;
  
  $('modalBox').style.maxWidth = '460px';
  $('modalBox').innerHTML = `
    <div class="text-center mb-3">
      <div class="display text-lg font-bold text-[#f5c451]">📢 ${p.icon} ${p.name} 的回合簡報</div>
      <div class="text-[10px] text-[#8a98b3] mt-0.5">上一回合由 <b style="color:${p.color}">${p.name}</b> 行動，完成了以下事項：</div>
    </div>

    ${nextBlock}

    ${summaryBlock}
    
    <div class="p-3 border border-[#26314a] bg-[#0b0f17] rounded-lg max-h-[180px] overflow-y-auto scroll mb-4">
      <ul class="list-none p-0 m-0">
        ${listHTML}
      </ul>
    </div>
    <button class="btn btn-gold w-full py-2 text-xs font-bold display" onclick="closeBriefingModal()">
      確認已讀
    </button>
  `;
  $('modal').style.display = 'flex';
}

function closeBriefingModal() {
  $('modal').style.display = 'none';
}
window.closeBriefingModal = closeBriefingModal;

function hostOnlineRoom() {
  if (peer) {
    try { peer.destroy(); } catch(e) {}
    peer = null;
  }
  peerRole = 'host';
  // 如果是恢復存檔戰局，使用存檔大廳中的房間代碼（若是自動恢復），否則隨機生成
  const sessionStr = localStorage.getItem('dc_monopoly_active_session');
  let savedCode = null;
  if (sessionStr) {
    try {
      const session = JSON.parse(sessionStr);
      if (session && session.role === 'host' && session.roomCode) {
        savedCode = session.roomCode;
      }
    } catch(e) {}
  }
  
  const code = savedCode || ('BLITZ-' + rnd(100000, 999999));
  peer = new Peer(code);
  
  peer.on('open', id => {
    $('hostRoomCode').textContent = id;
    if (isLoadedGame) {
      // 載入存檔時，不重置 onlinePlayers，它已在 restoreGame() 中載入
      onlinePlayers[0].peerId = id;
      onlinePlayers[0].online = true;
    } else {
      onlinePlayers = [{ peerId: id, name: $('name0').value || '房主', icon: $('icon0').value || '🏎️', online: true }];
    }
    updateOnlineLobbyUI();
  });
  
  peer.on('connection', conn => {
    guestConnections.push(conn);
    
    conn.on('data', data => {
      if (data.type === 'JOIN_ROOM') {
        if (isLoadedGame) {
          // 載入存檔大廳：尋找第一個未連線的房客席位
          const idx = onlinePlayers.findIndex((p, k) => k > 0 && !p.online);
          if (idx !== -1) {
            onlinePlayers[idx].peerId = conn.peer;
            onlinePlayers[idx].online = true;
            state.players[idx].peerId = conn.peer;
            state.players[idx].online = true;
            conn.playerIndex = idx;
            
            log(`🔌 玩家 <b>${state.players[idx].name}</b> 已連入槽位 ${idx + 1}。`, state.players[idx].color);
            syncLobbyData();
          } else {
            conn.send({ type: 'ROOM_FULL' });
          }
          return;
        }
        
        if (onlinePlayers.length >= selPlayers) {
          conn.send({ type: 'ROOM_FULL' });
          return;
        }
        onlinePlayers.push({
          peerId: conn.peer,
          name: data.name,
          icon: data.icon,
          online: true
        });
        
        // 動態調整人數上限
        selPlayers = onlinePlayers.length;
        buildPcount();
        buildNameInputs();
        
        // 把最新名單填入輸入框，並將非房主格設為 Disabled
        for (let i = 0; i < onlinePlayers.length; i++) {
          const nameEl = $('name' + i);
          const iconEl = $('icon' + i);
          if (nameEl) nameEl.value = onlinePlayers[i].name;
          if (iconEl) iconEl.value = onlinePlayers[i].icon;
        }
        
        // 廣播最新大廳連線狀態給所有人
        syncLobbyData();
      } 
      else if (data.type === 'RECONNECT_ROOM') {
        if (!state) {
          conn.send({ type: 'RECONNECT_FAILED', reason: '遊戲尚未啟動' });
          return;
        }
        
        const idx = data.playerIndex;
        if (idx === undefined || idx < 0 || idx >= state.players.length) {
          conn.send({ type: 'RECONNECT_FAILED', reason: '無效的玩家席位' });
          return;
        }
        
        state.players[idx].peerId = conn.peer;
        state.players[idx].online = true;
        
        guestConnections = guestConnections.filter(c => c.playerIndex !== idx);
        conn.playerIndex = idx;
        guestConnections.push(conn);
        
        conn.send({
          type: 'RECONNECT_SUCCESS',
          config,
          state,
          playerIndex: idx
        });
        
        log(`🔌 玩家 <b>${state.players[idx].name}</b> 已重新連回戰局。`, state.players[idx].color);
        
        syncState();
        renderAll();
        checkTurnTransition();
      }
      else if (data.type === 'LOBBY_UPDATE_REQUEST') {
        const idx = onlinePlayers.findIndex(p => p.peerId === conn.peer);
        if (idx !== -1) {
          onlinePlayers[idx].name = data.name;
          onlinePlayers[idx].icon = data.icon;
          syncLobbyData();
        }
      }
      else if (data.type === 'STATE_SYNC_REQUEST') {
        if (gameEnded) return;
        // 房客同步資料過來，房主更新本地 state 並向所有人廣播
        if (state && data.state && data.state.inflationCount > state.inflationCount) {
          showInflationAlert();
        }
        state = data.state;
        broadcastData({
          type: 'STATE_SYNC',
          state
        });
        renderAll();
        checkTurnTransition();
        
        // 若只剩一名存活玩家，房主廣播強制結束遊戲並結算
        if (alivePlayers().length <= 1) {
          broadcastData({ type: 'FORCE_GAME_OVER' });
          gameOver();
        }
      }
    });
    
    conn.on('close', () => {
      guestConnections = guestConnections.filter(c => c.peer !== conn.peer);
      if (state && !isLoadedGame) {
        // 遊戲進行中：將該玩家設為離線
        const idx = state.players.findIndex(p => p.peerId === conn.peer);
        if (idx !== -1) {
          state.players[idx].online = false;
          log(`🔴 玩家 <b>${state.players[idx].name}</b> 斷線，已啟用自動託管。`, '#f87171');
          
          if (idx === state.current && peerRole === 'host') {
            handleOfflineActivePlayer(idx);
          } else {
            syncState();
            renderAll();
          }
        }
      } else if (isLoadedGame) {
        // 載入存檔大廳中：將對應槽位標為離線
        const idx = onlinePlayers.findIndex(p => p.peerId === conn.peer);
        if (idx !== -1) {
          onlinePlayers[idx].online = false;
          onlinePlayers[idx].peerId = null;
          state.players[idx].online = false;
          state.players[idx].peerId = null;
          updateOnlineLobbyUI();
          syncLobbyData();
        }
      } else {
        // 一般大廳階段：直接移除
        onlinePlayers = onlinePlayers.filter(p => p.peerId !== conn.peer);
        selPlayers = Math.max(2, onlinePlayers.length);
        buildPcount();
        buildNameInputs();
        syncLobbyData();
      }
    });
  });
  
  peer.on('error', err => {
    console.error("PeerJS Error:", err);
    $('hostRoomCode').textContent = '建立失敗，請重試';
  });
}
window.hostOnlineRoom = hostOnlineRoom;

/* 房主：同步大廳數據給所有房客 */
function syncLobbyData() {
  updateOnlineLobbyUI();
  broadcastData({
    type: 'LOBBY_UPDATE',
    players: onlinePlayers,
    selPlayers
  });
}

/* 房主：廣播數據給所有房客 */
function broadcastData(data) {
  guestConnections.forEach(conn => {
    if (conn.open) {
      conn.send(data);
    }
  });
}

/* 更新設定畫面的連線大廳玩家名冊 UI */
function updateOnlineLobbyUI() {
  const container = $('onlinePlayerList');
  if (!container) return;
  
  container.innerHTML = onlinePlayers.map((p, idx) => {
    const isHost = idx === 0;
    const status = isHost || p.online ? '🟢' : '🔴 離線';
    return `<span class="chip ${isHost ? 'border-[#34d399] text-[#34d399]' : 'border-[#60a5fa] text-[#60a5fa]'} flex items-center gap-1">
      <span>${status}</span>
      <span>席位 ${idx + 1}：${p.icon} ${p.name}</span>
    </span>`;
  }).join('');
}

/* 訪客：輸入代碼加入房間 */
function joinOnlineRoom() {
  const targetId = $('joinRoomCode').value.trim().toUpperCase();
  if (!targetId.startsWith('BLITZ-')) {
    alertModal('無效代碼', '請輸入正確的房間代碼 (格式為: BLITZ-XXXX)。');
    return;
  }
  
  peerRole = 'guest';
  $('onlinePlayerList').innerHTML = '<span class="chip border-[#26314a]">正在連線至房主...</span>';
  
  if (peer) {
    try { peer.destroy(); } catch(e) {}
    peer = null;
  }
  peer = new Peer();
  peer.on('open', id => {
    connToHost = peer.connect(targetId, { reliable: true });
    
    connToHost.on('open', () => {
      // 向房主傳送加入申請 (包含我自訂的名稱與 Icon)
      connToHost.send({
        type: 'JOIN_ROOM',
        name: $('name0').value,
        icon: $('icon0').value
      });
    });
    
    connToHost.on('data', data => {
      if (data.type === 'LOBBY_UPDATE') {
        onlinePlayers = data.players;
        selPlayers = data.selPlayers;
        buildPcount();
        buildNameInputs();
        
        // 更新 UI 同步顯示房名單
        for (let i = 0; i < onlinePlayers.length; i++) {
          const nameEl = $('name' + i);
          const iconEl = $('icon' + i);
          if (nameEl) nameEl.value = onlinePlayers[i].name;
          if (iconEl) iconEl.value = onlinePlayers[i].icon;
        }
        updateOnlineLobbyUI();
      } 
      else if (data.type === 'ROOM_FULL') {
        alertModal('加入失敗', '該房間人數已達上限。');
        peer.destroy();
      }
      else if (data.type === 'GAME_START') {
        config = data.config;
        state = data.state;
        gameEnded = false;
        
        buildMap();
        
        // 紀錄房客 Session
        const myIdx = state.players.findIndex(p => peer && p.peerId === peer.id);
        if (myIdx !== -1) {
          localStorage.setItem('dc_monopoly_active_session', JSON.stringify({
            roomCode: targetId,
            role: 'guest',
            playerIndex: myIdx,
            name: state.players[myIdx].name,
            icon: state.players[myIdx].icon
          }));
        }
        
        $('setupScreen').style.display = 'none';
        $('game').style.display = 'block';
        $('game').classList.remove('hidden');
        
        buildMapDOM();
        renderAll();
        recenter(true);
        log('🎮 房主已啟動戰局！線上對戰正式開始！', 'var(--gold)');
        
        lastActiveTurnIndex = -1;
        clientCurrentTurn = -1;
        checkTurnTransition();
      }
      else if (data.type === 'STATE_SYNC') {
        if (gameEnded) return;
        if (state && data.state && data.state.inflationCount > state.inflationCount) {
          showInflationAlert();
        }
        state = data.state;
        renderAll();
        checkTurnTransition();
      }
      else if (data.type === 'RECONNECT_SUCCESS') {
        config = data.config;
        state = data.state;
        gameEnded = false;
        
        buildMap();
        $('setupScreen').style.display = 'none';
        $('game').style.display = 'block';
        $('game').classList.remove('hidden');
        
        buildMapDOM();
        renderAll();
        recenter(true);
        log('🔌 成功連回房主，同步最新戰局中。', 'var(--gold)');
        
        localStorage.setItem('dc_monopoly_active_session', JSON.stringify({
          roomCode: connToHost.peer,
          role: 'guest',
          playerIndex: data.playerIndex,
          name: state.players[data.playerIndex].name,
          icon: state.players[data.playerIndex].icon
        }));
        
        lastActiveTurnIndex = -1;
        clientCurrentTurn = -1;
        checkTurnTransition();
      }
      else if (data.type === 'FORCE_GAME_OVER') {
        gameOver();
      }
      else if (data.type === 'RECONNECT_FAILED') {
        alertModal('重連失敗', `無法重新連回房間：${data.reason}`);
        localStorage.removeItem('dc_monopoly_active_session');
        $('reconnectNotifyBox').style.display = 'none';
      }
    });
    
    connToHost.on('close', () => {
      alertModal('連線中斷', '與房主連線中斷，正在重新整理網頁以嘗試重連...');
      setTimeout(() => location.reload(), 2000);
    });
  });
  
  peer.on('error', err => {
    console.error("PeerJS Error:", err);
    $('onlinePlayerList').innerHTML = '<span class="chip border-[#f87171] text-[#f87171]">連線失敗，請檢查房主代碼</span>';
  });
}
window.joinOnlineRoom = joinOnlineRoom;

/* 各自行動後，同步最新 state 物件給全場 */
function syncState() {
  // 自動存檔到本地快取
  if (state) {
    localStorage.setItem('dc_monopoly_autosave', JSON.stringify({
      timestamp: Date.now(),
      config,
      state,
      playMode
    }));
  }

  if (playMode === 'online') {
    // 同步更新連線 Session
    const myIdx = state.players.findIndex(p => peer && p.peerId === peer.id);
    if (myIdx !== -1) {
      localStorage.setItem('dc_monopoly_active_session', JSON.stringify({
        roomCode: peerRole === 'host' ? peer.id : connToHost.peer,
        role: peerRole,
        playerIndex: myIdx,
        name: state.players[myIdx].name,
        icon: state.players[myIdx].icon
      }));
    }

    if (peerRole === 'host') {
      broadcastData({
        type: 'STATE_SYNC',
        state
      });
    } else {
      if (connToHost && connToHost.open) {
        connToHost.send({
          type: 'STATE_SYNC_REQUEST',
          state
        });
      }
    }
  }
}

/* =========================================================
   全域連線輔助與功能補全
========================================================= */
function stockPrice(tk) {
  const s = state.stocks.find(x => x.ticker === tk);
  return s ? s.price : 0;
}

function moveStock(s, factor) {
  const hi = Math.round(s.ref * (1 + STOCK_LIMIT));
  const lo = Math.max(1, Math.round(s.ref * (1 - STOCK_LIMIT)));
  let np = Math.round(s.price * factor);
  if (np > hi) {
    np = hi;
    s.limit = 1;
  } else if (np < lo) {
    np = lo;
    s.limit = -1;
  } else {
    s.limit = 0;
  }
  s.price = Math.max(1, np);
  return s.limit;
}

function gameOver() {
  if (gameEnded) return;
  gameEnded = true;
  stopTimer();
  clearActiveSession();
  
  // 房主在線上模式終止時，廣播給所有房客
  if (playMode === 'online' && peerRole === 'host') {
    broadcastData({
      type: 'FORCE_GAME_OVER'
    });
  }
  
  const ranking = [...state.players].sort((a, b) => netWorth(b) - netWorth(a));
  const winner = alivePlayers()[0] || ranking[0];
  const rows = ranking.map((p, k) => `
    <div class="flex items-center justify-between card p-2 bg-[#1a2233] border border-[#26314a]">
      <div class="flex items-center gap-2">
        <span class="display font-bold text-[#f5c451]">#${k + 1}</span>
        <span class="pawn text-xs" style="border-color:${p.color}">${p.icon}</span>
        <span>${p.name}</span>
        ${p.alive ? '' : '<span class="chip border-[#f87171] text-[#f87171]">破產</span>'}
      </div>
      <span class="mono text-[#f5c451]">$${fmt(netWorth(p))}</span>
    </div>
  `).join('');
  
  $('modalBox').style.maxWidth = '460px';
  $('modalBox').innerHTML = `
    <div class="display text-2xl font-black mb-1 text-[#f5c451] text-center">🏆 遊戲結束</div>
    <div class="text-sm mb-3 text-center">最終贏家：<b style="color:${winner.color}">${winner.name}</b></div>
    <div class="space-y-2 mb-4 max-h-[300px] overflow-y-auto scroll">${rows}</div>
    <button class="btn btn-gold w-full py-3 font-bold" onclick="location.reload()">再玩一局 ↻</button>
  `;
  $('modal').style.display = 'flex';
  modalResolver = null;
}

/* =========================================================
   存檔與載入管理邏輯 (Save/Load & Reconnection Logic)
========================================================= */
let isLoadedGame = false;

// 儲存至本地瀏覽器槽位
function saveGameToLocalSlot(slot) {
  if (!state) return;
  try {
    const saveData = {
      timestamp: Date.now(),
      config: config,
      state: state,
      playMode: playMode
    };
    localStorage.setItem('dc_monopoly_save_slot_' + slot, JSON.stringify(saveData));
    updateSaveSlotsUI();
    alertModal('💾 存檔成功', `遊戲戰局已成功儲存至「本地存檔槽 ${slot}」！`);
  } catch (e) {
    console.error("Save slot failed:", e);
    alertModal('💾 存檔失敗', '瀏覽器空間不足，或發生未知錯誤。');
  }
}
window.saveGameToLocalSlot = saveGameToLocalSlot;

// 開啟存檔視窗
function openSaveGameModal() {
  if (playMode === 'online' && peerRole !== 'host') {
    // 房客：隱藏儲存與導出區，僅顯示系統退出/認輸操作
    $('saveSection').style.display = 'none';
    if ($('guestSaveMsg')) $('guestSaveMsg').style.display = 'block';
  } else {
    // 房主或單機玩家：顯示完整存讀檔與系統按鈕
    $('saveSection').style.display = 'block';
    if ($('guestSaveMsg')) $('guestSaveMsg').style.display = 'none';
    updateSaveSlotsUI();
  }
  
  updateSystemButtonsState();
  $('savePanel').style.display = 'flex';
}
window.openSaveGameModal = openSaveGameModal;

// 關閉存檔視窗
function closeSaveGameModal() {
  $('savePanel').style.display = 'none';
}
window.closeSaveGameModal = closeSaveGameModal;

// 更新認輸/終止按鈕可用狀態
function updateSystemButtonsState() {
  if (!state) return;
  const isMy = isMyTurn();
  const activeP = curPlayer();
  
  // 獲取當前本機玩家物件
  let myP = activeP;
  if (playMode === 'online') {
    myP = state.players.find(p => peer && p.peerId === peer.id);
  }
  
  // 主動認輸按鈕 (btnSurrender)
  const btnSurrender = $('btnSurrender');
  if (btnSurrender) {
    // 只有當前輪到自己，且自己存活時才能認輸
    const canSurrender = isMy && myP && myP.alive;
    btnSurrender.disabled = !canSurrender;
    btnSurrender.style.opacity = canSurrender ? '1' : '0.4';
  }
  
  // 終止遊戲按鈕 (btnTerminate)
  const btnTerminate = $('btnTerminate');
  if (btnTerminate) {
    // 線上對戰僅房主有權終止，單機多人皆可
    if (playMode === 'online' && peerRole !== 'host') {
      btnTerminate.style.display = 'none';
    } else {
      btnTerminate.style.display = 'inline-block';
    }
  }
}
window.updateSystemButtonsState = updateSystemButtonsState;

// 主動認輸
async function surrenderCurrentPlayer() {
  if (!state) return;
  
  if (!isMyTurn()) {
    alertModal('⚠️ 無法認輸', '只能在您自己的回合主動認輸！');
    return;
  }
  
  const p = curPlayer();
  if (!p || !p.alive) {
    alertModal('⚠️ 無法認輸', '您已淘汰或無法進行此操作。');
    return;
  }
  
  closeSaveGameModal();
  
  const choice = await showChoice(
    '🏳️ 確認主動認輸？',
    `您確定要主動認輸嗎？<br>認輸後，您所有的資金將會歸零，持股與質押會被清空，所有名下房地產將無償歸還給銀行，並直接退出遊戲。`,
    [
      { label: '🏳️ 確定認輸', value: true, cls: 'btn-red' },
      { label: '取消', value: false, cls: 'btn-ghost' }
    ]
  );
  
  if (choice) {
    log(`🏳️ 玩家 <b>${p.name}</b> 選擇了主動認輸（宣告破產）。`, '#f87171');
    declareBankruptcy(p); // 該方法內部已調用 syncState() 與 renderAll()
    
    // 延遲結束回合，確保狀態同步與宣示破產已傳遞
    setTimeout(endTurn, 100);
  }
}
window.surrenderCurrentPlayer = surrenderCurrentPlayer;

// 手動終止遊戲
async function terminateGameBtn() {
  if (!state) return;
  if (playMode === 'online' && peerRole !== 'host') {
    alertModal('權限不足', '只有房主才能終止遊戲！');
    return;
  }
  
  closeSaveGameModal();
  
  const choice = await showChoice(
    '⏹️ 確認終止遊戲？',
    `您確定要立刻終止目前戰局嗎？<br>終止後，系統將結算所有玩家當前的總資產進行最終排名，並直接進入結算畫面。`,
    [
      { label: '⏹️ 終止遊戲', value: true, cls: 'btn-red' },
      { label: '繼續遊戲', value: false, cls: 'btn-ghost' }
    ]
  );
  
  if (choice) {
    log(`⏹️ 遊戲由${playMode === 'online' ? '房主' : '玩家'}手動終止，進行資產結算！`, '#ff5d5d');
    if (playMode === 'online' && peerRole === 'host') {
      broadcastData({
        type: 'FORCE_GAME_OVER'
      });
    }
    gameOver();
  }
}
window.terminateGameBtn = terminateGameBtn;

// 更新存檔槽顯示 UI
function updateSaveSlotsUI() {
  for (let slot = 1; slot <= 3; slot++) {
    const key = 'dc_monopoly_save_slot_' + slot;
    const dataStr = localStorage.getItem(key);
    const infoEl = $('saveSlotInfo' + slot);
    const loadSelectOption = document.querySelector(`#loadSaveSlotSelect option[value="${slot}"]`);
    
    if (dataStr) {
      try {
        const data = JSON.parse(dataStr);
        const dateStr = new Date(data.timestamp).toLocaleString();
        const modeText = data.playMode === 'online' ? '🌐 線上' : '🖥️ 單機';
        const pCount = data.state.players.length;
        const round = data.state.round;
        const text = `${modeText} · 輪數: ${round} · 玩家: ${pCount}人 · (${dateStr})`;
        
        if (infoEl) infoEl.textContent = text;
        if (loadSelectOption) loadSelectOption.textContent = `本地快速存檔 ${slot} (${text})`;
      } catch (e) {
        if (infoEl) infoEl.textContent = '存檔損毀';
        if (loadSelectOption) loadSelectOption.textContent = `本地快速存檔 ${slot} (損毀)`;
      }
    } else {
      if (infoEl) infoEl.textContent = '無存檔資料';
      if (loadSelectOption) loadSelectOption.textContent = `本地快速存檔 ${slot} (空)`;
    }
  }
}
window.updateSaveSlotsUI = updateSaveSlotsUI;

// 下載 JSON 備份檔案
function exportGameToJson() {
  if (!state) return;
  try {
    const saveData = {
      timestamp: Date.now(),
      config: config,
      state: state,
      playMode: playMode
    };
    const blob = new Blob([JSON.stringify(saveData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dc_monopoly_save_${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    log('💾 戰局已匯出為 JSON 備份檔案並開始下載。', 'var(--gold)');
  } catch (e) {
    console.error("Export failed:", e);
    alertModal('匯出失敗', '無法產生備份檔案。');
  }
}
window.exportGameToJson = exportGameToJson;

// 從本地槽位讀取按鈕
async function loadGameFromLocalSlotBtn() {
  const slot = $('loadSaveSlotSelect').value;
  const key = 'dc_monopoly_save_slot_' + slot;
  const dataStr = localStorage.getItem(key);
  if (!dataStr) {
    alertModal('載入失敗', '該槽位沒有任何存檔資料。');
    return;
  }
  
  const ans = await showChoice('載入戰局', '載入存檔將覆蓋目前的設定與大廳，是否確定？', [
    { label: '確認載入', value: true, cls: 'btn-gold' },
    { label: '取消', value: false, cls: 'btn-ghost' }
  ]);
  if (ans) {
    try {
      const data = JSON.parse(dataStr);
      restoreGame(data);
    } catch (e) {
      alertModal('載入失敗', '存檔解析錯誤或檔案已損毀。');
    }
  }
}
window.loadGameFromLocalSlotBtn = loadGameFromLocalSlotBtn;

// 從 JSON 匯入檔案讀取按鈕
function importGameFromJsonBtn(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = async (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (!data.state || !data.config || !data.playMode) {
        alertModal('匯入失敗', '無效的存檔結構，缺少必要的遊戲數據。');
        return;
      }
      
      const ans = await showChoice('匯入存檔', '確認匯入此 JSON 備份檔案並載入戰局？', [
        { label: '確認匯入', value: true, cls: 'btn-gold' },
        { label: '取消', value: false, cls: 'btn-ghost' }
      ]);
      if (ans) {
        restoreGame(data);
      }
    } catch (err) {
      alertModal('匯入失敗', 'JSON 存檔解析出錯，請確認檔案格式是否正確。');
    }
    $('importSaveFile').value = '';
  };
  reader.readAsText(file);
}
window.importGameFromJsonBtn = importGameFromJsonBtn;

// 恢復戰局邏輯
function restoreGame(data) {
  config = data.config;
  state = data.state;
  playMode = data.playMode;
  isLoadedGame = true;
  
  if (playMode === 'local') {
    startGame();
  } else {
    peerRole = 'host';
    onlinePlayers = state.players.map(p => ({
      peerId: p.id === 0 ? null : p.peerId,
      name: p.name,
      icon: p.icon,
      online: p.id === 0
    }));
    
    selPlayers = onlinePlayers.length;
    
    buildPcount();
    buildNameInputs();
    
    for (let i = 0; i < onlinePlayers.length; i++) {
      const nameEl = $('name' + i);
      const iconEl = $('icon' + i);
      if (nameEl) nameEl.value = onlinePlayers[i].name;
      if (iconEl) iconEl.value = onlinePlayers[i].icon;
    }
    
    setPlayMode('online');
    $('btnStartGame').textContent = '恢復戰局 ▸';
    
    alertModal('存檔已載入', '線上戰局存檔已載入！請「建立多人房間」以發布房間代碼，並請其他玩家重新加入綠燈後，點擊「恢復戰局」重新開局。');
  }
}

// 房客點選「連回戰局」按鈕
function autoReconnectBtn() {
  const sessionStr = localStorage.getItem('dc_monopoly_active_session');
  if (!sessionStr) return;
  
  try {
    const session = JSON.parse(sessionStr);
    playMode = 'online';
    peerRole = 'guest';
    
    $('onlinePlayerList').innerHTML = '<span class="chip border-[#26314a]">正在連回房主房間...</span>';
    $('reconnectNotifyBox').style.display = 'none';
    
    if (peer) {
      try { peer.destroy(); } catch(e) {}
      peer = null;
    }
    
    peer = new Peer();
    peer.on('open', id => {
      connToHost = peer.connect(session.roomCode, { reliable: true });
      
      connToHost.on('open', () => {
        connToHost.send({
          type: 'RECONNECT_ROOM',
          playerIndex: session.playerIndex,
          name: session.name,
          icon: session.icon
        });
      });
      
      connToHost.on('data', data => {
        if (data.type === 'LOBBY_UPDATE') {
          onlinePlayers = data.players;
          selPlayers = data.selPlayers;
          buildPcount();
          buildNameInputs();
          
          for (let i = 0; i < onlinePlayers.length; i++) {
            const nameEl = $('name' + i);
            const iconEl = $('icon' + i);
            if (nameEl) nameEl.value = onlinePlayers[i].name;
            if (iconEl) iconEl.value = onlinePlayers[i].icon;
          }
          updateOnlineLobbyUI();
        }
        else if (data.type === 'ROOM_FULL') {
          alertModal('重連失敗', '房間人數已滿。');
          peer.destroy();
        }
        else if (data.type === 'GAME_START') {
          config = data.config;
          state = data.state;
          gameEnded = false;
          
          buildMap();
          $('setupScreen').style.display = 'none';
          $('game').style.display = 'block';
          $('game').classList.remove('hidden');
          
          buildMapDOM();
          renderAll();
          recenter(true);
          log('🔌 房主已恢復戰局！線上連線同步成功！', 'var(--gold)');
          
          lastActiveTurnIndex = -1;
          clientCurrentTurn = -1;
          checkTurnTransition();
        }
        else if (data.type === 'STATE_SYNC') {
          if (gameEnded) return;
          if (state && data.state && data.state.inflationCount > state.inflationCount) {
            showInflationAlert();
          }
          state = data.state;
          renderAll();
          checkTurnTransition();
        }
        else if (data.type === 'RECONNECT_SUCCESS') {
          config = data.config;
          state = data.state;
          gameEnded = false;
          
          buildMap();
          $('setupScreen').style.display = 'none';
          $('game').style.display = 'block';
          $('game').classList.remove('hidden');
          
          buildMapDOM();
          renderAll();
          recenter(true);
          log('🔌 成功重新連回房主，同步最新戰局中。', 'var(--gold)');
          
          localStorage.setItem('dc_monopoly_active_session', JSON.stringify({
            roomCode: connToHost.peer,
            role: 'guest',
            playerIndex: data.playerIndex,
            name: state.players[data.playerIndex].name,
            icon: state.players[data.playerIndex].icon
          }));
          
          lastActiveTurnIndex = -1;
          clientCurrentTurn = -1;
          checkTurnTransition();
        }
        else if (data.type === 'FORCE_GAME_OVER') {
          gameOver();
        }
        else if (data.type === 'RECONNECT_FAILED') {
          alertModal('重連失敗', `無法重新連回房間：${data.reason}`);
          localStorage.removeItem('dc_monopoly_active_session');
          $('reconnectNotifyBox').style.display = 'none';
        }
      });
      
      connToHost.on('close', () => {
        alertModal('連線中斷', '與房主連線中斷，正在重新整理網頁以嘗試重連...');
        setTimeout(() => location.reload(), 2000);
      });
    });
    
    peer.on('error', err => {
      console.error("Reconnect Peer Error:", err);
      $('onlinePlayerList').innerHTML = '<span class="chip border-[#f87171] text-[#f87171]">重連失敗，房主可能尚未建立房間</span>';
      $('reconnectNotifyBox').style.display = 'flex';
    });
  } catch (e) {
    console.error(e);
  }
}
window.autoReconnectBtn = autoReconnectBtn;

// 房主自動重建並載入線上戰局
function autoRestoreHostSession(session) {
  const autosaveStr = localStorage.getItem('dc_monopoly_autosave');
  if (!autosaveStr) return;
  
  try {
    const data = JSON.parse(autosaveStr);
    config = data.config;
    state = data.state;
    playMode = data.playMode;
    peerRole = 'host';
    
    peer = new Peer(session.roomCode);
    
    peer.on('open', id => {
      $('hostRoomCode').textContent = id;
      
      $('setupScreen').style.display = 'none';
      $('game').style.display = 'block';
      $('game').classList.remove('hidden');
      
      buildMap();
      buildMapDOM();
      
      state.players.forEach((p, idx) => {
        if (idx > 0) p.online = false;
      });
      
      renderAll();
      recenter(true);
      
      log('🔄 偵測到網頁重整，房主已自動重建房間！等待其他玩家重連中...', 'var(--gold)');
      
      startTimer();
    });
    
    peer.on('connection', conn => {
      guestConnections.push(conn);
      
      conn.on('data', data => {
        if (data.type === 'RECONNECT_ROOM') {
          const idx = data.playerIndex;
          if (idx === undefined || idx < 0 || idx >= state.players.length) {
            conn.send({ type: 'RECONNECT_FAILED', reason: '無效的玩家席位' });
            return;
          }
          
          state.players[idx].peerId = conn.peer;
          state.players[idx].online = true;
          
          guestConnections = guestConnections.filter(c => c.playerIndex !== idx);
          conn.playerIndex = idx;
          guestConnections.push(conn);
          
          conn.send({
            type: 'RECONNECT_SUCCESS',
            config,
            state,
            playerIndex: idx
          });
          
          log(`🔌 玩家 <b>${state.players[idx].name}</b> 已重新連回戰局。`, state.players[idx].color);
          
          syncState();
          renderAll();
          checkTurnTransition();
        }
        else if (data.type === 'JOIN_ROOM') {
          const idx = state.players.findIndex(p => !p.online);
          if (idx !== -1) {
            state.players[idx].peerId = conn.peer;
            state.players[idx].online = true;
            
            guestConnections = guestConnections.filter(c => c.playerIndex !== idx);
            conn.playerIndex = idx;
            guestConnections.push(conn);
            
            conn.send({
              type: 'RECONNECT_SUCCESS',
              config,
              state,
              playerIndex: idx
            });
            
            log(`🔌 玩家 <b>${state.players[idx].name}</b> 已透過一般加入連回戰局。`, state.players[idx].color);
            syncState();
            renderAll();
            checkTurnTransition();
          } else {
            conn.send({ type: 'ROOM_FULL' });
          }
        }
        else if (data.type === 'STATE_SYNC_REQUEST') {
          if (state && data.state && data.state.inflationCount > state.inflationCount) {
            showInflationAlert();
          }
          state = data.state;
          broadcastData({
            type: 'STATE_SYNC',
            state
          });
          renderAll();
          checkTurnTransition();
        }
      });
      
      conn.on('close', () => {
        const idx = state.players.findIndex(p => p.peerId === conn.peer);
        if (idx !== -1) {
          state.players[idx].online = false;
          log(`🔴 玩家 <b>${state.players[idx].name}</b> 斷線，已啟用自動託管。`, '#f87171');
          
          if (idx === state.current && peerRole === 'host') {
            handleOfflineActivePlayer(idx);
          } else {
            syncState();
            renderAll();
          }
        }
        guestConnections = guestConnections.filter(c => c.peer !== conn.peer);
      });
    });
    
    peer.on('error', err => {
      console.error("Auto restore Host Peer Error:", err);
      localStorage.removeItem('dc_monopoly_active_session');
    });
    
  } catch (e) {
    console.error(e);
  }
}

// 房主託管斷線玩家的回合
async function handleOfflineActivePlayer(idx) {
  state.auto = true;
  stopTimer();
  closePanels();
  
  const p = state.players[idx];
  log(`🤖 [系統] 正在為中途斷線的玩家 <b>${p.name}</b> 託管並結束回合...`, '#8a98b3');
  
  if (!rolledThisTurn && !busy) {
    await doRoll();
  } else if (rolledThisTurn && !busy) {
    setTimeout(endTurn, 1000);
  }
}

// 清除連線 Session 與自動存檔
function clearActiveSession() {
  localStorage.removeItem('dc_monopoly_active_session');
  localStorage.removeItem('dc_monopoly_autosave');
}

// 初始化加載
updateSaveSlotsUI();

// 初始渲染設定畫面的玩家人數列與名稱欄位（預設單機模式），避免首次載入時為空白
buildPcount();
buildNameInputs();

// 檢查是否具有未結束的線上戰局
(function() {
  const sessionStr = localStorage.getItem('dc_monopoly_active_session');
  if (sessionStr) {
    try {
      const session = JSON.parse(sessionStr);
      if (session && session.roomCode) {
        if (session.role === 'host') {
          autoRestoreHostSession(session);
        } else {
          $('reconnectRoomCode').textContent = session.roomCode;
          $('reconnectNotifyBox').style.display = 'flex';
        }
      }
    } catch(e) {
      console.error("Init session error:", e);
    }
  }
})();