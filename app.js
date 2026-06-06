/* =========================================================
   常數與進階設定
========================================================= */
const PLAYER_COLORS = ['#f5c451', '#60a5fa', '#f87171', '#34d399', '#a78bfa', '#fb923c', '#22d3ee', '#f472b6'];
const PLAYER_DEF_NAMES = ['紅頂富商', '藍鯨集團', '烈焰財團', '翡翠資本', '紫晶控股', '橙海投資', '青雲航運', '緋櫻地產'];
const SALARY_BASE = 3000;
const HOUSE_MULT = [1, 2, 3.5, 5.5, 8];
const HOUSE_LABEL = ['空地', '一級', '二級', '三級', '地標'];
const DEITIES = {
  land: { name: '土地公', icon: '⛩️', color: '#a3e635' },
  fortune: { name: '財神', icon: '💰', color: '#fbbf24' },
  happy: { name: '福神', icon: '🎎', color: '#f472b6' },
  poor: { name: '窮神', icon: '🪙', color: '#94a3b8' },
  bad: { name: '衰神', icon: '💀', color: '#7c8597' },
};
const ITEMS = {
  accel: { name: '通膨加速卡', icon: '🔥', price: 100, desc: '立即觸發一次全域通膨循環。' },
  freeze: { name: '經濟凍結卡', icon: '❄️', price: 90, desc: '未來 5 輪停止通膨。' },
  tsunami: { name: '金融海嘯卡', icon: '🌊', price: 110, desc: '指定玩家租金收入 -50%，持續 3 回合。' },
  dice: { name: '遙控骰子', icon: '🎯', price: 80, desc: '自選前進 1-6 步。' },
  barricade: { name: '路障', icon: '🚧', price: 50, desc: '在指定格子放置路障，他人經過即停下。' },
  summon: { name: '請神符', icon: '📜', price: 90, desc: '隨機召喚神明附身自己。' },
  dismiss: { name: '送神符', icon: '🧧', price: 60, desc: '送走自己身上的神明。' },
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
const $ = id => document.getElementById(id);
const sleep = ms => new Promise(r => setTimeout(r, ms));
const rnd = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
const pick = a => a[rnd(0, a.length - 1)];
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
        const myIdx = onlinePlayers.findIndex(p => p.peerId === peer.id);
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
window.setPlayMode = setPlayMode;
buildPcount();
buildNameInputs();
/* =========================================================
   地圖生成 (大型 55 節點地圖，中央十字橋)
========================================================= */
let MAP = { nodes: [], adj: {} };
function ptOnRect(t, r) {
  const peri = 2 * (r.w + r.h);
  let d = t * peri;
  if (d < r.w) return { x: r.x + d, y: r.y };
  d -= r.w;
  if (d < r.h) return { x: r.x + r.w, y: r.y + d };
  d -= r.h;
  if (d < r.w) return { x: r.x + r.w - d, y: r.y + r.h };
  d -= r.w;
  return { x: r.x, y: r.y + r.h - d };
}
function addEdge(a, b) {
  (MAP.adj[a] = MAP.adj[a] || []).push(b);
  (MAP.adj[b] = MAP.adj[b] || []).push(a);
}
function buildMap() {
  MAP = { nodes: [], adj: {} };
  const rect = { x: 150, y: 150, w: 2100, h: 1100 };
  const N = 38; 
  for (let i = 0; i < N; i++) {
    const p = ptOnRect(i / N, rect);
    let x = p.x, y = p.y;
    if (i === 6) { x = 1200; y = 150; }
    if (i === 25) { x = 1200; y = 1250; }
    if (i === 15) { x = 2250; y = 700; }
    if (i === 34) { x = 150; y = 700; }
    MAP.nodes.push({ id: i, x, y });
  }
  for (let i = 0; i < N; i++) addEdge(i, (i + 1) % N);
  
  const cx = 1200, cy = 700;
  MAP.nodes.push({ id: 40, x: cx, y: cy });
  
  const vBridge = [
    { id: 38, x: cx, y: 330 },
    { id: 39, x: cx, y: 510 },
    { id: 41, x: cx, y: 880 },
    { id: 42, x: cx, y: 1060 }
  ];
  MAP.nodes.push(...vBridge);
  addEdge(6, 38);
  addEdge(38, 39);
  addEdge(39, 40);
  addEdge(40, 41);
  addEdge(41, 42);
  addEdge(42, 25);
  
  const hBridge = [
    { id: 43, x: 500, y: cy },
    { id: 44, x: 850, y: cy },
    { id: 45, x: 1550, y: cy },
    { id: 46, x: 1900, y: cy }
  ];
  MAP.nodes.push(...hBridge);
  addEdge(34, 43);
  addEdge(43, 44);
  addEdge(44, 40);
  addEdge(40, 45);
  addEdge(45, 46);
  addEdge(46, 15);
  
  MAP.nodes.push({ id: 47, x: 2450, y: 150 });
  MAP.nodes.push({ id: 48, x: 2450, y: 350 });
  addEdge(10, 47); addEdge(47, 48); addEdge(48, 12);
  
  MAP.nodes.push({ id: 49, x: 2450, y: 1050 });
  MAP.nodes.push({ id: 50, x: 2450, y: 1250 });
  addEdge(18, 49); addEdge(49, 50); addEdge(50, 20);
  
  MAP.nodes.push({ id: 51, x: -50, y: 1250 });
  MAP.nodes.push({ id: 52, x: -50, y: 1050 });
  addEdge(28, 51); addEdge(51, 52); addEdge(52, 30);
  
  MAP.nodes.push({ id: 53, x: -50, y: 350 });
  MAP.nodes.push({ id: 54, x: -50, y: 150 });
  addEdge(36, 53); addEdge(53, 54); addEdge(54, 0);
  const spec = {
    0: 'start', 2: 'fate', 4: 'news', 6: 'plaza', 8: 'shop', 10: 'plaza',
    11: 'bank', 12: 'plaza', 13: 'jail', 14: 'stock', 15: 'plaza', 17: 'fate',
    18: 'plaza', 19: 'news', 20: 'plaza', 22: 'shop', 23: 'bank', 25: 'plaza',
    27: 'stock', 28: 'plaza', 30: 'plaza', 32: 'shop', 34: 'plaza', 36: 'plaza',
    37: 'stock',
    40: 'casino',
    47: 'fate', 51: 'fate',
    49: 'news', 53: 'news',
    48: 'shop', 52: 'shop',
    50: 'stock', 54: 'stock'
  };
  const forks = new Set([6, 10, 15, 18, 25, 28, 34, 36, 40]);
  
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
  
  let pIdx = 0, grpIdx = 0, grpLeft = GROUPS[0].size;
  MAP.nodes.forEach(n => {
    if (spec[n.id]) {
      n.type = spec[n.id];
      n.name = {
        start: '起點', fate: '命運', news: '新聞快報', shop: '道具商店',
        stock: '證券交易所', bank: '中央銀行', jail: '監獄/休息', casino: '拉斯維加斯賭場'
      }[spec[n.id]];
      if (forks.has(n.id)) n.name = '轉運廣場';
      if (n.id === 40) n.name = '拉斯維加斯賭場';
      return;
    }
    n.type = 'property';
    n.name = PROP_NAMES[pIdx % PROP_NAMES.length];
    n.basePrice = 800 + pIdx * 150;
    n.baseRent = Math.round((800 + pIdx * 150) * 0.1);
    n.owner = null;
    n.level = 0;
    n.lastActionRound = 0;
    
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
function getNextNode(cur, from) {
  if (cur < 38) {
    return (cur + 1) % 38;
  }
  if (cur === 47) return from === 10 ? 48 : 10;
  if (cur === 48) return from === 47 ? 12 : 47;
  if (cur === 49) return from === 18 ? 50 : 18;
  if (cur === 50) return from === 49 ? 20 : 49;
  if (cur === 51) return from === 28 ? 52 : 28;
  if (cur === 52) return from === 51 ? 30 : 51;
  if (cur === 53) return from === 36 ? 54 : 36;
  if (cur === 54) return from === 53 ? 0 : 53;
  
  if (cur === 38) return from === 6 ? 39 : 6;
  if (cur === 39) return from === 38 ? 40 : 38;
  if (cur === 40) {
    if (from === 39) return 41;
    if (from === 41) return 39;
    if (from === 44) return 45;
    if (from === 45) return 44;
    return 41;
  }
  if (cur === 41) return from === 40 ? 42 : 40;
  if (cur === 42) return from === 41 ? 25 : 41;
  
  if (cur === 43) return from === 34 ? 44 : 34;
  if (cur === 44) return from === 43 ? 40 : 43;
  if (cur === 45) return from === 40 ? 46 : 40;
  if (cur === 46) return from === 45 ? 15 : 45;
  
  return (cur + 1) % 38;
}
/* =========================================================
   開始戰局
========================================================= */
function startGame() {
  if (playMode === 'online' && peerRole === 'guest') return; // 客戶端等房主指令
  
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
    gainEvent: Math.max(0, parseInt($('gainEventPoints').value) || 15)
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
      items: [pick(Object.keys(ITEMS))],
      deity: null,
      alive: true,
      tsunamiTurns: 0,
      skip: false
    });
  }
  
  state = {
    players,
    current: 0,
    round: 1,
    inflationMult: 1.0,
    inflationCount: 0,
    freezeTurns: 0,
    rateHikeTurns: 0,
    barricades: {},
    selStock: STOCK_DEF[0][0],
    selCat: 'all',
    logHistory: [],
    turnActions: [],
    
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
      limit: 0
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
  }
  
  // 隱藏設定，顯示遊戲
  $('setupScreen').style.display = 'none';
  $('game').style.display = 'block';
  $('game').classList.remove('hidden');
  
  buildMapDOM();
  renderAll();
  recenter(true);
  
  log('🎮 戰局已建立！遊戲已啟動，祝您遊戲愉快。', 'var(--gold)');
  beginTurn();
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
      const ln = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      ln.setAttribute('x1', na.x);
      ln.setAttribute('y1', na.y);
      ln.setAttribute('x2', nb.x);
      ln.setAttribute('y2', nb.y);
      ln.setAttribute('stroke', '#2b3a59');
      ln.setAttribute('stroke-width', '10');
      ln.setAttribute('stroke-linecap', 'round');
      svg.appendChild(ln);
    });
  });
  
  svg.setAttribute('width', bbox.maxX + 250);
  svg.setAttribute('height', bbox.maxY + 250);
  world.style.width = (bbox.maxX + 250) + 'px';
  world.style.height = (bbox.maxY + 250) + 'px';
  
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
    if (bar) bar.style.background = tileColor(n);
    
    // 明確標示土地所有權與邊框顏色
    if (n.type === 'property') {
      if (n.owner !== null) {
        const owner = state.players[n.owner];
        el.style.borderWidth = '3px';
        el.style.borderColor = owner.color;
      } else {
        el.style.borderWidth = '2px';
        el.style.borderColor = 'var(--line)';
      }
    }
    
    const meta = $('meta' + n.id);
    if (meta) {
      let t = '';
      if (n.type === 'property') {
        if (n.owner !== null) {
          const owner = state.players[n.owner];
          t = `【${owner.name.substring(0, 4)}】${HOUSE_LABEL[n.level]}`;
        } else {
          t = `無主 · $${fmt(inf(n.basePrice))}`;
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
        grp.innerHTML = `<span style="color: ${n.groupColor}">▰ ${n.groupName}</span>${mono ? ' <span style="color:' + n.groupColor + '; font-weight:900;">👑壟斷</span>' : ''}`;
      } else {
        grp.innerHTML = '';
      }
    }
    
    const box = $('pawns' + n.id);
    if (box) {
      box.innerHTML = '';
      state.players.filter(p => p.alive && p.node === n.id).forEach(p => {
        const d = document.createElement('div');
        d.className = 'pawn';
        d.style.borderColor = p.color;
        d.textContent = p.icon; 
        box.appendChild(d);
      });
    }
    
    el.classList.toggle('hl', n.id === curPlayer().node);
  });
}
function applyView() {
  $('mapWorld').style.transform = `translate(${view.x}px, ${view.y}px) scale(${view.zoom})`;
}
function recenter(initial) {
  const vp = $('mapViewport');
  const w = vp.clientWidth, h = vp.clientHeight;
  const n = nodeById(curPlayer().node);
  if (initial) {
    const cx = (bbox.minX + bbox.maxX) / 2, cy = (bbox.minY + bbox.maxY) / 2;
    view.zoom = Math.min(w / (bbox.maxX - bbox.minX + 360), h / (bbox.maxY - bbox.minY + 360), 0.85);
    view.x = w / 2 - cx * view.zoom;
    view.y = h / 2 - cy * view.zoom;
  } else {
    view.x = w / 2 - n.x * view.zoom;
    view.y = h / 2 - n.y * view.zoom;
  }
  applyView();
}
function zoomBy(f) {
  view.zoom = Math.max(0.2, Math.min(2.0, view.zoom * f));
  applyView();
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
    w += p.stocks[tk] * stockPrice(tk);
  });
  Object.keys(p.pledged).forEach(tk => {
    w += p.pledged[tk].shares * stockPrice(tk) - p.pledged[tk].loan;
  });
  return Math.round(w);
}
function deityBadge(p) {
  if (!p.deity) return '';
  const d = DEITIES[p.deity.type];
  return `<span class="deity-badge" style="background:${d.color}22; color:${d.color}; border:1px solid ${d.color}55">
    ${d.icon} ${d.name}${p.deity.big ? '★' : ''} ${p.deity.turns}T
  </span>`;
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
  const cards = state.players.map(p => {
    const active = p.id === state.current;
    const stocksTxt = Object.keys(p.stocks).filter(k => p.stocks[k] > 0).map(k => `${k}×${p.stocks[k]}`).join(' ') || '—';
    const pledgeTxt = Object.keys(p.pledged).map(k => `${k}質${p.pledged[k].shares}`).join(' ') || '—';
    const props = MAP.nodes.filter(n => n.type === 'property' && n.owner === p.id).length;
    return `<div class="card ${active ? 'glow' : ''} p-3 flex flex-col justify-between" style="${p.alive ? '' : 'opacity: 0.4'}">
      <div>
        <div class="flex items-center justify-between border-b border-[#26314a] pb-1.5 mb-2">
          <div class="flex items-center gap-2">
            <span class="pawn font-bold text-sm" style="border-color:${p.color}">${p.icon}</span>
            <span class="font-bold text-[#e6edf7]">${p.name}</span>
          </div>
          ${p.alive ? (active ? '<span class="chip text-[#34d399] border-[#34d399]">行動中</span>' : '') : '<span class="chip text-[#f87171] border-[#f87171]">破產</span>'}
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
  $('die').querySelectorAll('.pip').forEach((p, i) => {
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
  
  // 顯示前一個玩家的回合簡報
  if (state.turnActions && state.turnActions.length > 0 && lastActiveTurnIndex !== -1) {
    const prevP = state.players[lastActiveTurnIndex];
    if (prevP) {
      showTurnBriefingModal(prevP, state.turnActions);
    }
  }
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
  
  // 檢查分支面向選擇（僅在本機/連線的對應行動玩家端觸發）
  const forks = [6, 10, 15, 18, 25, 28, 34, 36, 40];
  if (forks.includes(p.node)) {
    if (playMode === 'local' || p.peerId === peer.id) {
      await chooseDirectionAtFork(p);
      syncState(); // 同步面向選擇後的 `from` 屬性
    }
  }
  
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
  if (playMode === 'local' || p.peerId === peer.id) {
    await checkMarginCall(p);
  }
  
  // 窮神扣錢
  if (hasDeity(p, 'poor')) {
    const drain = inf(p.deity.big ? 1500 : 400);
    p.cash -= drain;
    log(`🪙 <b>${p.name}</b> 被窮神財氣糾纏，損失現金 $${fmt(drain)}。`, DEITIES.poor.color);
    if (p.cash < 0 && (playMode === 'local' || p.peerId === peer.id)) {
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
  
  if (playMode === 'local' || p.peerId === peer.id) {
    $('centerMsg').textContent = `輪到您的回合，請擲骰移動。`;
  }
  startTimer();
}
async function chooseDirectionAtFork(p) {
  let opts = [];
  if (p.node === 6) {
    opts = [
      { label: '🧭 順時針外環商圈 (往節點 7)', value: 5, cls: 'btn-gold' },
      { label: '🌉 縱向捷徑大橋 (往節點 38)', value: 7, cls: 'btn-green' }
    ];
  } else if (p.node === 10) {
    opts = [
      { label: '🧭 外環主幹道 (往節點 11)', value: 9, cls: 'btn-gold' },
      { label: '⛺ 東北外圍繞道 (往節點 47)', value: 11, cls: 'btn-green' }
    ];
  } else if (p.node === 15) {
    opts = [
      { label: '🧭 外環主幹道 (往節點 16)', value: 14, cls: 'btn-gold' },
      { label: '🌉 橫向捷徑大橋 (往節點 46)', value: 16, cls: 'btn-green' }
    ];
  } else if (p.node === 18) {
    opts = [
      { label: '🧭 外環主幹道 (往節點 19)', value: 17, cls: 'btn-gold' },
      { label: '⛺ 東南外圍繞道 (往節點 49)', value: 19, cls: 'btn-green' }
    ];
  } else if (p.node === 25) {
    opts = [
      { label: '🧭 外環主幹道 (往節點 26)', value: 24, cls: 'btn-gold' },
      { label: '🌉 縱向捷徑大橋 (往節點 42)', value: 26, cls: 'btn-green' }
    ];
  } else if (p.node === 28) {
    opts = [
      { label: '🧭 外環主幹道 (往節點 29)', value: 27, cls: 'btn-gold' },
      { label: '⛺ 西南外圍繞道 (往節點 51)', value: 29, cls: 'btn-green' }
    ];
  } else if (p.node === 34) {
    opts = [
      { label: '🧭 外環主幹道 (往節點 35)', value: 33, cls: 'btn-gold' },
      { label: '🌉 橫向捷徑大橋 (往節點 43)', value: 35, cls: 'btn-green' }
    ];
  } else if (p.node === 36) {
    opts = [
      { label: '🧭 外環主幹道 (往起點)', value: 35, cls: 'btn-gold' },
      { label: '⛺ 西北外圍繞道 (往節點 53)', value: 37, cls: 'btn-green' }
    ];
  } else if (p.node === 40) {
    opts = [
      { label: '⬆️ 往北大橋 (往節點 39)', value: 41, cls: 'btn-gold' },
      { label: '⬇️ 往南大橋 (往節點 41)', value: 39, cls: 'btn-gold' },
      { label: '➡️ 往東大橋 (往節點 45)', value: 44, cls: 'btn-green' },
      { label: '⬅️ 往西大橋 (往節點 44)', value: 45, cls: 'btn-green' }
    ];
  }
  
  if (opts.length > 0) {
    const val = await showChoice(
      '🔀 岔路方向設定',
      `請選擇您本回合要面向前進的路線方向：`,
      opts
    );
    p.from = val !== undefined ? val : opts[0].value;
    log(`🧭 <b>${p.name}</b> 將行進面向設定為選擇之路段。`, p.color);
  }
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
  let steps = forced || rnd(1, 6);
  
  if (hasDeity(p, 'bad') && !p.deity.big && Math.random() < 0.5) {
    steps = 1;
    log(`💀 <b>${p.name}</b> 因衰神干擾，只前進 1 步！`, DEITIES.bad.color);
  } else if (hasDeity(p, 'bad') && p.deity.big) {
    steps = 1;
    log(`💀 <b>${p.name}</b> 因大衰神影響，擲骰必定只前進 1 步！`, DEITIES.bad.color);
  }
  
  await animateDie(steps);
  $('centerMsg').textContent = `${p.name} 擲出了 ${steps} 點`;
  state.turnActions.push(`🎲 擲出 ${steps} 點，移動至「${nodeById(p.node).name}」`);
  
  await walk(p, steps);
  await resolveNode(p);
  
  busy = false;
  
  // 本機或連線我方回合
  if (playMode === 'local' || p.peerId === peer.id) {
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
  let from = p.from;
  for (let s = 0; s < steps; s++) {
    let nextId = getNextNode(p.node, from);
    from = p.node;
    p.node = nextId;
    
    if (nextId === 0) {
      const pay = inf(SALARY_BASE);
      const pts = config.gainStart;
      p.cash += pay;
      p.points += pts;
      log("🚩 " + `<b>${p.name}</b> 經過起點，領取薪資 $${fmt(pay)} 並獲得 ${pts} 點。`, '#34d399');
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
    if (playMode === 'local' || p.peerId === peer.id) {
      await alertModal('✨ 獲得神明附身', `您踩中了神明靈光！【<b>${DEITIES[type].name}${big ? ' (大天神)' : ''}</b>】已降臨附身！`);
    }
  }
  
  if (state.mapDemon && state.mapDemon.node === p.node) {
    const type = state.mapDemon.type;
    const big = state.mapDemon.big;
    p.deity = { type, big, turns: 5 };
    state.mapDemon = null;
    state.demonCooldown = 3; 
    log(`💀 <b>${p.name}</b> 踩點遭遇地圖上的【${DEITIES[type].name}${big ? '(大)' : ''}】降臨糾纏！`, DEITIES[type].color);
    if (playMode === 'local' || p.peerId === peer.id) {
      await alertModal('💀 遭惡魔附身', `不幸！您踩中了邪魔黑氣！【<b>${DEITIES[type].name}${big ? ' (大惡魔)' : ''}</b>】已糾纏上身！`);
    }
  }
  switch (n.type) {
    case 'property':
      await onProperty(p, n);
      break;
    case 'fate':
      p.points += config.gainEvent;
      log(`🃏 <b>${p.name}</b> 抵達命運格，獲得 +${config.gainEvent} 點點數。`, '#a78bfa');
      if (playMode === 'local' || p.peerId === peer.id) {
        await onFate(p);
      }
      break;
    case 'news':
      p.points += config.gainEvent;
      log(`📰 <b>${p.name}</b> 抵達新聞格，獲得 +${config.gainEvent} 點點數。`, '#f59e0b');
      if (playMode === 'local' || p.peerId === peer.id) {
        await onNews();
      }
      break;
    case 'shop':
      if (playMode === 'local' || p.peerId === peer.id) {
        await openShopBuy(p);
      }
      break;
    case 'stock':
      if (playMode === 'local' || p.peerId === peer.id) {
        await alertModal('證券交易所', `歡迎光臨 <b>${n.name}</b>。您可以在結束回合前進行股市操作。`);
      }
      break;
    case 'bank':
      if (playMode === 'local' || p.peerId === peer.id) {
        await onBank(p);
      }
      break;
    case 'jail':
      p.skip = true;
      log(`⛓ <b>${p.name}</b> 進入監獄/休息，下回合暫停。`, '#f87171');
      if (playMode === 'local' || p.peerId === peer.id) {
        await alertModal('監獄 / 休息處', '您進入休息拘留區，下一回合暫停一次。');
      }
      break;
    case 'plaza':
      if (playMode === 'local' || p.peerId === peer.id) {
        await alertModal('🔀 轉運廣場', `<b>${n.name}</b>：下一回合開始擲骰前，您可以設定行進路線面向。`);
      }
      break;
    case 'casino':
      if (playMode === 'local' || p.peerId === peer.id) {
        await runCasino(p);
      }
      break;
  }
  syncState();
  renderAll();
}
async function runCasino(p) {
  log(`🎰 <b>${p.name}</b> 進入中央賭場！`, '#d97706');
  state.turnActions.push(`🎰 進入賭場`);
  
  if (p.points <= 0) {
    await alertModal('🎰 賭場臨櫃', '「抱歉，您的點數已歸零，無法進行博弈下注！」');
    return;
  }
  
  const suits = ['♥️', '♦️', '♠️', '♣️'];
  const firstVal = rnd(1, 13);
  const firstSuit = pick(suits);
  const isRed = firstSuit === '♥️' || firstSuit === '♦️';
  const valLabel = { 1: 'A', 11: 'J', 12: 'Q', 13: 'K' }[firstVal] || firstVal;
  
  const pokerCardHTML = `
    <div class="flex justify-center my-4">
      <div class="poker-card ${isRed ? 'red' : 'black'}">
        <div class="text-left">${valLabel}</div>
        <div class="text-center text-4xl">${firstSuit}</div>
        <div class="text-right">${valLabel}</div>
      </div>
    </div>
  `;
  
  const maxBet = p.points;
  const ans = await showChoice('🎰 撲克牌比大小 (High/Low)', `
    發出第一張牌，請預測下一張牌點數會更大還是更小，猜對可贏得雙倍點數：<br>
    ${pokerCardHTML}
    您當前擁有的點數：<span class="mono text-[#60a5fa] font-bold">${p.points} PP</span>
    <div class="mt-3">
      <label class="text-xs text-[#8a98b3]">請輸入押注點數 (最大: ${maxBet})：</label>
      <input id="casinoBet" type="number" min="1" max="${maxBet}" value="${Math.min(50, maxBet)}" class="seg mt-1 text-sm font-bold mono">
    </div>
  `, [
    { label: '🎲 預測下一張【更大】', value: 'high', cls: 'btn-gold' },
    { label: '🎲 預測下一張【更小】', value: 'low', cls: 'btn-gold' },
    { label: '🚪 謝絕博弈，直接離開', value: false, cls: 'btn-ghost' }
  ]);
  
  if (!ans) {
    log(`🎰 <b>${p.name}</b> 拒絕在賭場下注並離開。`, p.color);
    state.turnActions.push(`🎰 拒絕博弈，離開賭場`);
    return;
  }
  
  const bet = Math.max(1, Math.min(maxBet, parseInt($('casinoBet').value) || 10));
  p.points -= bet;
  
  const secondVal = rnd(1, 13);
  const secondSuit = pick(suits);
  const secondIsRed = secondSuit === '♥️' || secondSuit === '♦️';
  const secondValLabel = { 1: 'A', 11: 'J', 12: 'Q', 13: 'K' }[secondVal] || secondVal;
  
  const secondCardHTML = `
    <div class="flex justify-center gap-4 my-4">
      <div class="poker-card ${isRed ? 'red' : 'black'} opacity-60">
        <div class="text-left">${valLabel}</div>
        <div class="text-center text-4xl">${firstSuit}</div>
        <div class="text-right">${valLabel}</div>
      </div>
      <div class="poker-card ${secondIsRed ? 'red' : 'black'}">
        <div class="text-left">${secondValLabel}</div>
        <div class="text-center text-4xl">${secondSuit}</div>
        <div class="text-right">${secondValLabel}</div>
      </div>
    </div>
  `;
  
  let result = 'lose';
  if (secondVal === firstVal) {
    result = 'tie';
  } else if ((ans === 'high' && secondVal > firstVal) || (ans === 'low' && secondVal < firstVal)) {
    result = 'win';
  }
  
  if (result === 'win') {
    const gain = bet * 2;
    p.points += gain;
    log(`🎰 賭局大捷！<b>${p.name}</b> 下注 ${bet} PP，開出 ${secondSuit}${secondValLabel} 贏得點數 ${gain} PP。`, '#34d399');
    state.turnActions.push(`🎰 賭場下注 ${bet} PP 預測【${ans === 'high' ? '更大' : '更小'}】，第二張開出 ${secondSuit}${secondValLabel} 獲勝！贏得 ${gain} PP`);
    await alertModal('🎰 賭場開牌：獲勝！', `
      ${secondCardHTML}
      開牌結果：第二張為 <b>${secondSuit} ${secondValLabel}</b>！<br>
      預測成功！獲得點數 <span class="mono text-[#34d399] font-bold">+${bet} PP</span>！
    `);
  } 
  else if (result === 'tie') {
    p.points += bet; 
    log(`🎰 賭局和局。<b>${p.name}</b> 下注 ${bet} PP 全額退回。`, '#8a98b3');
    state.turnActions.push(`🎰 賭場下注 ${bet} PP 預測【${ans === 'high' ? '更大' : '更小'}】，開出同點數，平手退還`);
    await alertModal('🎰 賭場開牌：和局', `
      ${secondCardHTML}
      開牌結果：第二張同樣是 <b>${secondSuit} ${secondValLabel}</b>！<br>
      點數相同，已退還您押注的 ${bet} PP 賭金。
    `);
  } 
  else {
    log(`🎰 賭局失利！<b>${p.name}</b> 下注 ${bet} PP，開出 ${secondSuit}${secondValLabel} 慘遭沒收。`, '#f87171');
    state.turnActions.push(`🎰 賭場下注 ${bet} PP 預測【${ans === 'high' ? '更大' : '更小'}】，第二張開出 ${secondSuit}${secondValLabel} 預測失敗！損失 ${bet} PP`);
    await alertModal('🎰 賭場開牌：猜錯了！', `
      ${secondCardHTML}
      開牌結果：第二張為 <b>${secondSuit} ${secondValLabel}</b>！<br>
      預測失敗，損失押注的 <span class="mono text-[#f87171] font-bold">-${bet} PP</span> 點數。
    `);
  }
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
  let r = inf(n.baseRent) * HOUSE_MULT[n.level];
  if (isMonopoly(n)) r *= 2;
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
    if (playMode === 'local' || p.peerId === peer.id) {
      await alertModal('大土地公神蹟', `大土地公強制將 <b>${old.name}</b> 所持有的「${n.name}」免費過戶給您！`);
    }
    return;
  }
  
  if (n.owner === null) {
    if (hasDeity(p, 'poor') && p.deity.big) {
      if (playMode === 'local' || p.peerId === peer.id) {
        await alertModal('無法購地', `<b>${p.name}</b> 被大窮神附身，暫時無法購買土地。`);
      }
      return;
    }
    const cost = buyCost(p, n.basePrice);
    const grpInfo = `<br><span style="color:${n.groupColor}; font-weight:700">路段：${n.groupName}</span>（壟斷加倍）`;
    if (p.cash < cost) {
      if (playMode === 'local' || p.peerId === peer.id) {
        await alertModal('資金不足', `購買「${n.name}」需要 $${fmt(cost)} 現金，您的資金不足。`);
      }
      return;
    }
    
    // 只有我方的回合才能彈窗做買地決定
    if (playMode === 'local' || p.peerId === peer.id) {
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
    if (playMode === 'local' || p.peerId === peer.id) {
      await alertModal('自持地產', `此地產為您所持有的「${n.name}」（${HOUSE_LABEL[n.level]}）。<br>可在蓋房升級面板中升級此處。`);
    }
  } else {
    const owner = state.players[n.owner];
    const rent = rentDue(p, owner, n);
    if (rent <= 0) {
      log(`🛡 <b>${p.name}</b> 踩中 ${owner.name} 的「${n.name}」，獲得神明減免，免除地租。`, p.color);
      state.turnActions.push(`🛡 免除地租（踩中 ${owner.name} 的「${n.name}」）`);
      if (playMode === 'local' || p.peerId === peer.id) {
        await alertModal('免繳過路費', `您踏入了 <b>${owner.name}</b> 的「${n.name}」，本次地租全額免除！`);
      }
      return;
    }
    p.cash -= rent;
    owner.cash += rent;
    
    log(`💸 <b>${p.name}</b> 支付給 <b>${owner.name}</b> 地租 $${fmt(rent)}（於「${n.name}」${isMonopoly(n) ? ' 👑壟斷加倍' : ''}）。`, '#f87171');
    state.turnActions.push(`💸 支付地租 $${fmt(rent)} 給 ${owner.name}（於「${n.name}」）`);
    if (playMode === 'local' || p.peerId === peer.id) {
      await alertModal('支付過路費', `
        您踏入了 ${owner.name} 的地盤「<b>${n.name}</b>」（${HOUSE_LABEL[n.level]}）。<br>
        ${isMonopoly(n) ? `<span style="color:${n.groupColor}; font-weight:700;">（對手已對該區實行壟斷加倍）</span><br>` : ''}
        您必須支付地租：<span class="mono text-[#f87171] font-bold">$${fmt(rent)}</span>。
      `);
    }
    
    if (p.cash < 0 && (playMode === 'local' || p.peerId === peer.id)) {
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
  
  const p = curPlayer();
  
  if (alivePlayers().length <= 1) return gameOver();
  
  let next = state.current;
  do {
    next = (next + 1) % state.players.length;
  } while (!state.players[next].alive);
  
  if (next <= state.current) {
    state.round++;
    await onRoundEnd();
    if (alivePlayers().length <= 1) return gameOver();
  }
  
  state.current = next;
  
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
/* =========================================================
   股市演算法
========================================================= */
function stockPrice(tk) {
  const s = state.stocks.find(x => x.ticker === tk);
  return s ? s.price : 0;
}
function moveStock(s, mult) {
  let nextPrice = s.price * mult;
  const ceiling = s.ref * (1 + STOCK_LIMIT);
  const floor = s.ref * (1 - STOCK_LIMIT);
  
  s.limit = 0;
  if (nextPrice >= ceiling) {
    nextPrice = ceiling;
    s.limit = 1;
  } else if (nextPrice <= floor) {
    nextPrice = floor;
    s.limit = -1;
  }
  
  s.price = Math.max(1, Math.round(nextPrice));
  return s.limit;
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
    const drift = (rnd(-60, 65)) / 1000;
    moveStock(s, 1 + drift);
    
    s.hist.push(s.price);
    if (s.hist.length > 10) s.hist.shift();
    
    s.ref = s.price;
    s.limit = 0;
  });
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
    
    const qty = p.stocks[s.ticker] || 0;
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
    
    const pQty = p.stocks[s.ticker] || 0;
    const pPledge = p.pledged[s.ticker] || { shares: 0, loan: 0 };
    const maxBuy = Math.floor(p.cash / s.price);
    
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
            <div class="text-[#8a98b3]">您持有的股份</div>
            <div class="mono text-right font-bold text-[#34d399]">${pQty} 股</div>
            <div class="text-[#8a98b3]">已質押股份</div>
            <div class="mono text-right font-bold text-[#a78bfa]">${pPledge.shares} 股</div>
            <div class="text-[#8a98b3]">質押貸款金額</div>
            <div class="mono text-right font-bold text-[#f87171]">$${fmt(pPledge.loan)}</div>
          </div>
          <div class="border-t border-[#26314a] pt-2">
            <label class="text-[10px] text-[#8a98b3] block mb-1">交易股數（最多可買 ${maxBuy} 股）</label>
            <div class="flex gap-2">
              <input id="stockTradeQty" type="number" min="1" value="10" class="seg text-xs py-1.5 flex-1 mono">
              <button class="btn btn-ghost px-2 text-xs" onclick="$('stockTradeQty').value = ${maxBuy}">最大</button>
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
    p.cash -= cost;
    p.stocks[s.ticker] = (p.stocks[s.ticker] || 0) + val;
    log(`📈 <b>${p.name}</b> 買進了 ${val} 股「${s.name}」（單價 $${fmt(s.price)}）。`, p.color);
    state.turnActions.push(`📈 買進 ${val} 股「${s.name}」（單價 $${fmt(s.price)}）`);
  } 
  else if (type === 'sell') {
    const qty = p.stocks[s.ticker] || 0;
    if (qty < val) {
      alertModal('現股不足', `您的股票庫存不足！目前僅有 ${qty} 股。`);
      return;
    }
    const earn = val * s.price;
    p.cash += earn;
    p.stocks[s.ticker] = qty - val;
    if (p.stocks[s.ticker] === 0) delete p.stocks[s.ticker];
    log(`📉 <b>${p.name}</b> 賣出了 ${val} 股「${s.name}」（單價 $${fmt(s.price)}），變現 $${fmt(earn)}。`, p.color);
    state.turnActions.push(`📉 賣出 ${val} 股「${s.name}」（單價 $${fmt(s.price)}）`);
  } 
  else if (type === 'pledge') {
    const qty = p.stocks[s.ticker] || 0;
    if (qty < val) {
      alertModal('持股不足', `您沒有足夠的現股可供質押！`);
      return;
    }
    const loan = Math.round(val * s.price * 0.7);
    p.stocks[s.ticker] = qty - val;
    if (p.stocks[s.ticker] === 0) delete p.stocks[s.ticker];
    
    p.cash += loan;
    if (!p.pledged[s.ticker]) p.pledged[s.ticker] = { shares: 0, loan: 0 };
    p.pledged[s.ticker].shares += val;
    p.pledged[s.ticker].loan += loan;
    
    log(`🔒 <b>${p.name}</b> 將持有的 ${val} 股「${s.name}」進行質押，取得現金 $${fmt(loan)}。`, '#a78bfa');
    state.turnActions.push(`🔒 質押 ${val} 股「${s.name}」借款 $${fmt(loan)}`);
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
    p.stocks[s.ticker] = (p.stocks[s.ticker] || 0) + pledged.shares;
    delete p.pledged[s.ticker];
    log(`🔓 <b>${p.name}</b> 還清定額本息 $${fmt(cost)}，成功贖回 ${pledged.shares} 股「${s.name}」。`, '#34d399');
    state.turnActions.push(`🔓 贖回 ${pledged.shares} 股「${s.name}」`);
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
    const hasStocks = Object.keys(p.stocks).some(tk => p.stocks[tk] > 0);
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
      const tick = Object.keys(p.stocks).find(tk => p.stocks[tk] > 0);
      const s = state.stocks.find(x => x.ticker === tick);
      if (s) {
        const qty = p.stocks[tick];
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
function openItems() {
  if (!isMyTurn()) return;
  closePanels();
  renderItems();
  $('itemPanel').style.display = 'flex';
}
function closeItems() {
  $('itemPanel').style.display = 'none';
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
        <span>🎴 道具商店</span>
        <span class="text-xs text-[#8a98b3] font-normal">（剩餘點數：${p.points} PP）</span>
      </div>
      <button class="btn btn-ghost px-3 py-1 text-xs" onclick="closeItems()">關閉 ✕</button>
    </div>
    
    <div class="mb-5">
      <div class="text-xs font-bold text-[#f5c451] mb-2">🛒 商品架（請使用 PP 點數購買）</div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        ${shopHTML}
      </div>
    </div>
    
    <div>
      <div class="text-xs font-bold text-[#34d399] mb-2">💼 您的背包（上限 3 張）</div>
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
  
  if (p.items.length >= 3) {
    alertModal('購買失敗', '您的卡片包已滿（上限持有 3 張道具卡）。');
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
    await alertModal('✨ 請神成功', `召喚了【<b>${DEITIES[rType].name}${big ? ' (大)' : ''}</b>】附身，持續 5 回合！`);
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
      </div>
      <div class="flex items-center gap-4">
        ${statusLabel}
        <div class="text-right shrink-0">
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
      🎎 福神庇佑：建造升級費用減免 ${p.deity.big ? '100% (免費)' : '50%'}。
    </div>` : ''}
    
    <div class="flex flex-col gap-2.5 max-h-[60vh] overflow-y-auto scroll pr-1">
      ${listHTML}
    </div>
  `;
}
async function buildHouse(nodeId) {
  const p = curPlayer();
  const n = nodeById(nodeId);
  if (!n || n.owner !== p.id) return;
  if (n.level >= 4 || n.lastActionRound === state.round) return;
  
  if (hasDeity(p, 'bad') && p.deity.big) {
    const cost = Math.round(n.basePrice * 0.6 * state.inflationMult * construct());
    p.cash -= cost;
    n.lastActionRound = state.round; 
    log(`💀 大衰神干擾！<b>${p.name}</b> 嘗試蓋房，造價 $${fmt(cost)} 遭沒收，但房屋垮塌升級失敗！`, DEITIES.bad.color);
    await alertModal('🔨 建造失敗', `由於大衰神干擾，工地發生意外，建造費用 $${fmt(cost)} 已被扣除，但建築物建造失敗。`);
    
    syncState();
    renderBuild();
    renderAll();
    if (p.cash < 0) await settleNegative(p);
    return;
  }
  
  const cost = Math.round(n.basePrice * 0.6 * state.inflationMult * construct());
  let finalCost = cost;
  if (hasDeity(p, 'happy')) {
    finalCost = p.deity.big ? 0 : Math.round(cost * 0.5);
  }
  
  if (p.cash < finalCost) return;
  
  p.cash -= finalCost;
  n.level++;
  n.lastActionRound = state.round; 
  log(`🏠 <b>${p.name}</b> 支付建造費 $${fmt(finalCost)}，將「${n.name}」升級至【${HOUSE_LABEL[n.level]}】。`, p.color);
  state.turnActions.push(`🏠 升級「${n.name}」至【${HOUSE_LABEL[n.level]}】（費用 $${fmt(finalCost)}）`);
  
  syncState();
  renderBuild();
  renderAll();
}
/* =========================================================
   遊戲結束結算
========================================================= */
function gameOver() {
  stopTimer();
  closePanels();
  const rank = [...state.players].sort((a, b) => netWorth(b) - netWorth(a));
  
  const itemsHTML = rank.map((p, idx) => {
    const isW = idx === 0;
    return `
      <div class="p-3 border border-[#26314a] rounded-lg bg-[#121826] flex items-center justify-between ${isW ? 'glow' : 'opacity-80'}">
        <div class="flex items-center gap-3">
          <span class="mono font-bold text-lg text-[#f5c451]">#${idx + 1}</span>
          <span class="pawn font-bold text-sm" style="border-color:${p.color}">${p.icon}</span>
          <span class="font-bold text-sm text-[#e6edf7]">${p.name}</span>
          ${p.alive ? '' : '<span class="text-xs text-[#f87171] border border-[#f87171] px-1.5 py-0.2 rounded shrink-0">破產</span>'}
        </div>
        <div class="text-right">
          <div class="text-[10px] text-[#8a98b3]">總身價估值</div>
          <div class="mono text-sm font-bold text-[#60a5fa]">$${fmt(netWorth(p))}</div>
        </div>
      </div>
    `;
  }).join('');
  
  const win = rank[0];
  
  $('modalBox').style.maxWidth = '600px';
  $('modalBox').innerHTML = `
    <div class="text-center mb-6">
      <div class="display text-4xl font-extrabold text-[#f5c451] mb-2">🏆 遊戲結束</div>
    </div>
    
    <div class="text-center p-4 border border-[#f5c451] bg-[#f5c451]11 rounded-xl mb-6">
      <span class="text-xs text-[#8a98b3] block">👑 本屆霸主 👑</span>
      <span class="display text-2xl font-black text-[#ffe08a]">${win.icon} ${win.name}</span>
      <div class="mono text-lg font-bold text-[#60a5fa] mt-1">最終身價：$${fmt(netWorth(win))}</div>
    </div>
    
    <div class="text-xs font-bold text-[#8a98b3] mb-2.5">📊 最終身價排名</div>
    <div class="flex flex-col gap-2 mb-6">
      ${itemsHTML}
    </div>
    
    <button class="btn btn-gold w-full py-3 text-md font-bold display" onclick="location.reload()">
      🔄 重新開始
    </button>
  `;
  $('modal').style.display = 'flex';
}
/* =========================================================
   WebRTC P2P 多人連線對戰模組 (PeerJS)
========================================================= */
/* 房主：建立房間 */
function hostOnlineRoom() {
  peerRole = 'host';
  $('hostRoomCode').textContent = '連線中...';
  
  // 建立房主 Peer，隨機產生一個短的房間代碼 (BLITZ-XXXX)
  const code = 'BLITZ-' + Math.random().toString(36).substring(2, 6).toUpperCase();
  peer = new Peer(code);
  
  peer.on('open', id => {
    $('hostRoomCode').textContent = id;
    
    // 初始化房主自己為 1 號玩家
    onlinePlayers = [{
      peerId: id,
      name: $('name0').value,
      icon: $('icon0').value
    }];
    updateOnlineLobbyUI();
  });
  
  peer.on('connection', conn => {
    guestConnections.push(conn);
    
    conn.on('data', data => {
      if (data.type === 'JOIN') {
        // 如果房間已滿 (最多8人)，拒絕加入
        if (onlinePlayers.length >= 8) {
          conn.send({ type: 'ROOM_FULL' });
          conn.close();
          return;
        }
        
        // 註冊訪客玩家
        onlinePlayers.push({
          peerId: conn.peer,
          name: data.name,
          icon: data.icon
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
      else if (data.type === 'LOBBY_UPDATE_REQUEST') {
        const idx = onlinePlayers.findIndex(p => p.peerId === conn.peer);
        if (idx !== -1) {
          onlinePlayers[idx].name = data.name;
          onlinePlayers[idx].icon = data.icon;
          syncLobbyData();
        }
      }
      else if (data.type === 'STATE_SYNC_REQUEST') {
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
      }
    });
    
    conn.on('close', () => {
      // 移除斷線的房客
      guestConnections = guestConnections.filter(c => c.peer !== conn.peer);
      onlinePlayers = onlinePlayers.filter(p => p.peerId !== conn.peer);
      selPlayers = Math.max(2, onlinePlayers.length);
      buildPcount();
      buildNameInputs();
      syncLobbyData();
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
    return `<span class="chip ${isHost ? 'border-[#34d399] text-[#34d399]' : 'border-[#60a5fa] text-[#60a5fa]'} flex items-center gap-1">
      <span>${isHost ? '🔑' : '👤'}</span>
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
  
  peer = new Peer();
  peer.on('open', id => {
    connToHost = peer.connect(targetId);
    
    connToHost.on('open', () => {
      // 向房主傳送加入申請 (包含我自訂的名稱與 Icon)
      connToHost.send({
        type: 'JOIN',
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
        
        // 訪客端也需要初始化地圖資料結構
        buildMap();
        
        // 進入遊戲板塊
        $('setupScreen').style.display = 'none';
        $('game').style.display = 'block';
        $('game').classList.remove('hidden');
        
        buildMapDOM();
        renderAll();
        recenter(true);
        log('🎮 房主已啟動戰局！線上對戰正式開始！', 'var(--gold)');
        
        lastActiveTurnIndex = -1;
        checkTurnTransition();
      }
      else if (data.type === 'STATE_SYNC') {
        // 接獲 Host 廣播的最新的遊戲 state
        if (state && data.state && data.state.inflationCount > state.inflationCount) {
          showInflationAlert();
        }
        state = data.state;
        renderAll();
        checkTurnTransition();
      }
    });
    
    connToHost.on('close', () => {
      alertModal('連線中斷', '房主已關閉房間或連線異常中斷。');
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
  if (playMode === 'online') {
    if (peerRole === 'host') {
      // 房主直接廣播給所有房客
      broadcastData({
        type: 'STATE_SYNC',
        state
      });
    } else {
      // 房客向房主發送狀態同步請求
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
function isMyTurn() {
  if (playMode === 'local') return true;
  if (!state || !peer) return false;
  const p = curPlayer();
  return p && p.peerId === peer.id;
}
function checkTurnTransition() {
  if (playMode !== 'online' || !state) return;
  if (state.current !== lastActiveTurnIndex) {
    lastActiveTurnIndex = state.current;
    const p = curPlayer();
    if (p && p.peerId === peer.id) {
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
  const choose = await showChoice('🛒 抵達道具商店', `歡迎光臨道具商店！您是否要開啟道具背包與商店進行購買？`, [
    { label: '🛒 開啟商店', value: true, cls: 'btn-gold' },
    { label: '🚪 直接離開', value: false, cls: 'btn-ghost' }
  ]);
  if (choose) {
    openItems();
  }
}
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
    const deityText = p.deity ? `<span class="deity-badge" style="background:${DEITIES[p.deity.type].color}; color:#111; padding: 1px 3px; font-size:9px; border-radius:3px;">${DEITIES[p.deity.type].icon}${DEITIES[p.deity.type].name.substring(0,2)}</span>` : '';
    const tsunamiText = p.tsunamiTurns > 0 ? `<span class="text-[9px] text-[#60a5fa] border border-[#60a5fa] px-1 rounded shrink-0">🌊${p.tsunamiTurns}</span>` : '';
    
    container.innerHTML += `
      <div class="p-2 border rounded flex flex-col gap-1.5 transition-all ${isCurrent ? 'border-[#f5c451] bg-[#1a2233] glow' : 'border-[#26314a] bg-[#121826]'}" style="border-left-width: 4px; border-left-color: ${p.color};">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-1.5 overflow-hidden">
            <span class="pawn scale-90 shrink-0" style="border-color:${p.color}">${p.icon}</span>
            <span class="font-bold text-[11px] truncate text-[#e6edf7]">${p.name}</span>
          </div>
          <div class="flex gap-1 shrink-0">
            ${deityText}
            ${tsunamiText}
          </div>
        </div>
        <div class="grid grid-cols-2 gap-x-2 text-[10px] text-[#8a98b3]">
          <div>現金: <span class="mono text-white">$${fmt(p.cash)}</span></div>
          <div>點數: <span class="mono text-[#60a5fa]">${p.points} PP</span></div>
          <div class="col-span-2 mt-1 truncate">卡片: ${itemsList || '<span class="text-[9px] text-[#55637d]">無卡片</span>'}</div>
        </div>
      </div>
    `;
  });
}
function showTurnBriefingModal(p, actions) {
  const listHTML = actions.map(act => `<li class="mb-1.5 text-xs text-[#e6edf7] flex gap-2"><span>•</span><span>${act}</span></li>`).join('');
  
  $('modalBox').style.maxWidth = '460px';
  $('modalBox').innerHTML = `
    <div class="text-center mb-3">
      <div class="display text-lg font-bold text-[#f5c451]">📢 ${p.icon} ${p.name} 的回合簡報</div>
      <div class="text-[10px] text-[#8a98b3] mt-0.5">該玩家在上個回合中完成了以下行動：</div>
    </div>
    <div class="p-3 border border-[#26314a] bg-[#0b0f17] rounded-lg max-h-[220px] overflow-y-auto scroll mb-4">
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
