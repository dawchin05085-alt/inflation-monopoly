<!DOCTYPE html>
<html lang="zh-Hant" class="h-full">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DC大富翁 · DC Monopoly</title>
  <!-- 引入 Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontSize: {
            'xs': '13.5px',
            'sm': '15.5px',
            'md': '17.5px',
            'lg': '19.5px',
            'xl': '22px',
            '2xl': '26px',
            '3xl': '32px',
          }
        }
      }
    }
  </script>
  <!-- 引入 PeerJS WebRTC P2P 連線庫 -->
  <script src="https://cdn.jsdelivr.net/npm/peerjs@1.5.4/dist/peerjs.min.js"></script>
  <!-- Google Fonts 引入 -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@500;600;700&family=JetBrains+Mono:wght@500;700;800&family=Noto+Sans+TC:wght@400;500;700;900&display=swap" rel="stylesheet">
  <!-- 引入自訂樣式表 -->
  <link rel="stylesheet" href="style.css">
</head>
<body class="h-full">
  <!-- ===================== 設定畫面 ===================== -->
  <div id="setupScreen" class="overlay" style="background: rgba(4, 7, 12, 0.96); z-index: 80;">
    <div class="card pop scroll" style="max-width: 860px; width: 100%; padding: 26px; max-height: 94vh; overflow: auto;">
      <div class="flex items-center justify-between border-b border-[#26314a] pb-3 mb-4 flex-wrap gap-2">
        <div class="flex items-center gap-3">
          <div class="display text-3xl font-bold text-[#f5c451]">DC大富翁</div>
          <span class="chip mono text-[#34d399] border-[#34d399]">BLITZ · WEBRTC ONLINE</span>
        </div>
        <span class="text-xs text-[#8a98b3]">P2P 多人線上連線對戰版 · 免伺服器架構</span>
      </div>
      <!-- 連線模式選擇 -->
      <label class="text-xs text-[#8a98b3] font-bold block mb-1">1. 選擇遊戲對戰模式</label>
      <div class="flex gap-3 mb-4 flex-wrap">
        <button id="btnModeLocal" class="btn btn-gold px-4 py-2 text-xs" onclick="setPlayMode('local')">🖥️ 單機多人 (同屏熱座)</button>
        <button id="btnModeOnline" class="btn btn-ghost px-4 py-2 text-xs" onclick="setPlayMode('online')">🌐 線上多人連線 (WebRTC P2P)</button>
      </div>
      <!-- 線上連線控制區 -->
      <div id="onlineConfigSection" style="display: none;" class="p-4 border border-[#26314a] rounded-lg bg-[#121826] mb-4">
        <div class="flex flex-col md:flex-row gap-4">
          <!-- Host 建立房間 -->
          <div class="flex-1 border-b md:border-b-0 md:border-r border-[#26314a] pb-4 md:pb-0 md:pr-4">
            <div class="text-xs font-bold text-[#f5c451] mb-2">A. 建立房間 (我是房主)</div>
            <button class="btn btn-gold px-3 py-1.5 text-xs w-full mb-2" onclick="hostOnlineRoom()">🔑 建立多人房間</button>
            <div class="text-xs text-[#8a98b3] mb-1">您的房間代碼（傳送給朋友）：</div>
            <div id="hostRoomCode" class="mono font-bold text-md text-[#34d399] tracking-wider select-all border border-[#26314a] p-2 bg-[#0b0f17] rounded text-center">—</div>
          </div>
          <!-- Join 加入房間 -->
          <div class="flex-1 md:pl-4">
            <div class="text-xs font-bold text-[#60a5fa] mb-2">B. 加入房間 (我是訪客)</div>
            <div class="flex gap-2">
              <input id="joinRoomCode" type="text" placeholder="輸入房主的代碼 (如: BLITZ-1234)" class="seg text-xs py-1.5 flex-1 mono uppercase">
              <button class="btn btn-ghost px-3 py-1.5 text-xs shrink-0" onclick="joinOnlineRoom()">⚡ 連線加入</button>
            </div>
            <div class="text-[11px] text-[#8a98b3] mt-2 leading-relaxed">
              連線成功後，房間規則、初始資金與點數等進階設定將以房主的設定為準。
            </div>
          </div>
        </div>
        
        <div class="mt-4 pt-3 border-t border-[#26314a]">
          <div class="text-xs font-bold text-[#e6edf7] mb-1.5">房間內連線成員名單：</div>
          <div id="onlinePlayerList" class="flex flex-wrap gap-2 text-xs text-[#8a98b3]">
            <span class="chip border-[#26314a]">等待建立或連線加入中...</span>
          </div>
        </div>
      </div>
      <label class="text-xs text-[#8a98b3] font-bold block mb-1">2. 選擇玩家人數 (2–8人)</label>
      <div id="pcountRow" class="flex gap-2 mt-1 mb-4 flex-wrap"></div>
      <label class="text-xs text-[#8a98b3] font-bold block mb-1">3. 遊戲基礎參數設定</label>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-3 mt-1 mb-4">
        <div>
          <label class="text-[11px] text-[#8a98b3]">回合時限 (秒，0 = 無限)</label>
          <input id="cfgTime" type="number" min="0" value="30" class="seg mt-1 text-sm">
        </div>
        <div>
          <label class="text-[11px] text-[#8a98b3]">通膨觸發 (每幾輪)</label>
          <input id="cfgInfTurn" type="number" min="1" value="5" class="seg mt-1 text-sm">
        </div>
        <div>
          <label class="text-[11px] text-[#8a98b3]">通膨幅度 (%)</label>
          <input id="cfgInfRate" type="number" min="1" value="50" class="seg mt-1 text-sm">
        </div>
        <div>
          <label class="text-[11px] text-[#8a98b3]">初始現金 ($)</label>
          <input id="cfgCash" type="number" min="0" value="25000" class="seg mt-1 text-sm">
        </div>
        <div>
          <label class="text-[11px] text-[#8a98b3]">初始定存存款 ($)</label>
          <input id="cfgSave" type="number" min="0" value="6000" class="seg mt-1 text-sm">
        </div>
        <div>
          <label class="text-[11px] text-[#8a98b3]">初始點數 (PP)</label>
          <input id="cfgPoints" type="number" min="0" value="100" class="seg mt-1 text-sm">
        </div>
      </div>
      <!-- 客製化進階設定折疊面板 -->
      <div class="border border-[#26314a] rounded-lg p-3 mb-4 bg-[#121826]">
        <button type="button" class="text-xs text-[#f5c451] font-bold flex items-center gap-1.5 focus:outline-none w-full text-left" onclick="toggleAdvancedConfig()">
          <span>⚙️ 進階客製化參數 (點擊展開/折疊)</span>
          <span id="advChevron">▼</span>
        </button>
        
        <div id="advancedConfigPanel" style="display: none;" class="mt-3 border-t border-[#26314a] pt-3">
          <div class="text-xs font-semibold text-[#8a98b3] mb-2">A. 道具卡點數價格自訂</div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            <div>
              <label class="text-[10px] text-[#8a98b3]">通膨加速卡 🔥</label>
              <input id="priceAccel" type="number" min="1" value="100" class="seg mt-1 text-xs py-1.5">
            </div>
            <div>
              <label class="text-[10px] text-[#8a98b3]">經濟凍結卡 ❄️</label>
              <input id="priceFreeze" type="number" min="1" value="90" class="seg mt-1 text-xs py-1.5">
            </div>
            <div>
              <label class="text-[10px] text-[#8a98b3]">金融海嘯卡 🌊</label>
              <input id="priceTsunami" type="number" min="1" value="110" class="seg mt-1 text-xs py-1.5">
            </div>
            <div>
              <label class="text-[10px] text-[#8a98b3]">遙控骰子 🎯</label>
              <input id="priceDice" type="number" min="1" value="80" class="seg mt-1 text-xs py-1.5">
            </div>
            <div>
              <label class="text-[10px] text-[#8a98b3]">路障卡 🚧</label>
              <input id="priceBarricade" type="number" min="1" value="50" class="seg mt-1 text-xs py-1.5">
            </div>
            <div>
              <label class="text-[10px] text-[#8a98b3]">請神符 📜</label>
              <input id="priceSummon" type="number" min="1" value="90" class="seg mt-1 text-xs py-1.5">
            </div>
            <div>
              <label class="text-[10px] text-[#8a98b3]">送神符 🧧</label>
              <input id="priceDismiss" type="number" min="1" value="60" class="seg mt-1 text-xs py-1.5">
            </div>
          </div>
          
          <div class="text-xs font-semibold text-[#8a98b3] mb-2">B. 點數獲取數量自訂</div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="text-[10px] text-[#8a98b3]">經過或起點獎勵點數</label>
              <input id="gainStartPoints" type="number" min="0" value="25" class="seg mt-1 text-xs py-1.5">
            </div>
            <div>
              <label class="text-[10px] text-[#8a98b3]">踩到命運/新聞獎勵點數</label>
              <input id="gainEventPoints" type="number" min="0" value="15" class="seg mt-1 text-xs py-1.5">
            </div>
          </div>
        </div>
      </div>
      <label class="text-xs text-[#8a98b3] font-bold block mb-1">4. 玩家名稱設定與角色 ICON 代號</label>
      <div class="mt-1 grid grid-cols-1 md:grid-cols-2 gap-3 mb-5" id="nameInputs">
        <!-- 玩家輸入組件將動態建立於此 -->
      </div>
      <div class="mt-6 flex items-center justify-between flex-wrap gap-4 border-t border-[#26314a] pt-4">
        <div class="text-xs text-[#8a98b3] max-w-[500px]">
          提示：線上模式下，訪客連線加入後將佔用後續的玩家席位。房主準備就緒後點擊建立戰局，所有玩家畫面將會自動同步進入地圖對局。
        </div>
        <button id="btnStartGame" class="btn btn-gold px-8 py-3 text-lg display" onclick="startGame()">建立戰局 ▸</button>
      </div>
    </div>
  </div>
  <!-- ===================== 主畫面 ===================== -->
  <div id="game" class="hidden h-full w-full relative">
    
    <!-- 頂部狀態列 -->
    <div class="absolute left-0 right-0 top-0 z-30 flex items-center justify-between" style="padding: 10px 14px; gap: 12px; pointer-events: none;">
      <div class="card flex items-center gap-3" style="padding: 8px 14px; pointer-events: auto;">
        <div class="display font-bold text-[#f5c451]">DC大富翁</div>
        <span class="chip mono" id="roundChip">第 1 輪</span>
        <span class="chip mono text-[#f87171]" id="infChip">×1.00</span>
      </div>
      
      <div class="card flex items-center gap-3" style="padding: 8px 14px; min-width: 340px; pointer-events: auto;">
        <span class="pawn font-bold text-lg" id="turnPawn">🏎️</span>
        <span class="font-bold shrink-0 text-[#f5c451]" id="turnName">—</span>
        <div class="flex-1">
          <div class="flex justify-between text-xs">
            <span class="text-[#8a98b3]">回合時限</span>
            <span class="mono text-[#f5c451]" id="timerTxt">--</span>
          </div>
          <div class="timerbar mt-1">
            <div id="timerFill" class="timerfill" style="width: 100%;"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 左側玩家狀態面板 (常開但可最小化) -->
    <div id="leftSidebar" class="absolute left-3 top-[84px] z-30 card flex flex-col transition-all duration-300" style="width: 280px; max-height: calc(100vh - 240px); box-shadow: 0 4px 20px rgba(0,0,0,0.5); overflow: hidden;">
      <div class="flex items-center justify-between border-b border-[#26314a] p-3 bg-[#121826] shrink-0">
        <span class="display font-bold text-sm text-[#f5c451]">👥 玩家即時狀態</span>
        <button class="text-xs text-[#8a98b3] hover:text-[#e6edf7] font-bold" onclick="toggleSidebar()">
          <span id="sidebarToggleArrow">◀ 收合</span>
        </button>
      </div>
      <div id="sidebarContent" class="p-3 flex-1 overflow-y-auto scroll flex flex-col gap-2.5">
        <!-- 動態載入玩家簡短狀態 -->
      </div>
    </div>
    <!-- 當 sidebar 最小化時的迷你懸浮按鈕 -->
    <button id="sidebarExpandBtn" class="absolute left-3 top-[84px] z-30 btn btn-gold px-3 py-2 text-xs hidden" onclick="toggleSidebar()">
      ▶ 展開狀態列
    </button>
    <!-- 地圖視口 (Viewport) -->
    <div id="mapViewport">
      <div id="mapWorld">
        <svg id="mapEdges" style="position: absolute; left: 0; top: 0; overflow: visible;"></svg>
        <!-- 地圖節點將會動態渲染於此 -->
      </div>
    </div>
    <!-- 地圖控制按鈕 -->
    <div class="absolute z-30 flex flex-col gap-2" style="right: 14px; top: 84px;">
      <button class="btn btn-gold mapbtn" title="回正（置中目前玩家）" onclick="recenter()">⌖</button>
      <button class="btn btn-ghost mapbtn" title="放大" onclick="zoomBy(1.15)">＋</button>
      <button class="btn btn-ghost mapbtn" title="縮小" onclick="zoomBy(0.87)">－</button>
    </div>
    <!-- 中央骰子控制區 -->
    <div id="diePod" class="absolute z-30 card flex items-center gap-4" style="left: 50%; transform: translateX(-50%); bottom: 86px; padding: 12px 18px; min-width: 340px; box-shadow: 0 4px 20px rgba(0,0,0,0.5);">
      <div id="die" class="die">
        <div class="pip"></div><div class="pip"></div><div class="pip"></div>
        <div class="pip"></div><div class="pip"></div><div class="pip"></div>
        <div class="pip"></div><div class="pip"></div><div class="pip"></div>
      </div>
      <div class="flex-1">
        <div id="centerMsg" class="text-sm font-bold text-[#8a98b3]">準備開始</div>
      </div>
    </div>
    <!-- 底部操作功能列 -->
    <div class="absolute left-0 right-0 bottom-0 z-30 flex justify-center" style="padding: 12px;">
      <div class="card flex items-center gap-2 flex-wrap justify-center" style="padding: 10px 14px;">
        <button id="btnRoll" class="btn btn-gold px-6 py-2 text-sm" onclick="onRollClick()">🎲 擲骰移動</button>
        <button id="btnStock" class="btn btn-ghost px-3.5 py-2 text-sm" onclick="openStock()">📈 股市交易</button>
        <button id="btnItems" class="btn btn-ghost px-3.5 py-2 text-sm" onclick="openItems()">🎴 道具卡片</button>
        <button id="btnBuild" class="btn btn-ghost px-3.5 py-2 text-sm" onclick="openBuild()">🏠 蓋房升級</button>
        <button id="btnPlayers" class="btn btn-ghost px-3.5 py-2 text-sm" onclick="openPlayers()">👥 玩家狀態</button>
        <button id="btnLog" class="btn btn-ghost px-3.5 py-2 text-sm" onclick="openLog()">📜 事件紀錄</button>
        <button id="btnEnd" class="btn btn-ghost px-4 py-2 text-sm" onclick="manualEnd()" disabled style="opacity: 0.4;">⏭ 結束回合</button>
      </div>
    </div>
  </div>
  <!-- 通用決定 Modal -->
  <div id="modal" class="overlay" style="display: none; z-index: 90;">
    <div id="modalBox" class="card pop" style="max-width: 520px; width: 100%; padding: 24px;">
      <!-- 內容將動態產生 -->
    </div>
  </div>
  <!-- 全域通膨警報 -->
  <div id="inflationAlert" class="overlay" style="display: none; background: rgba(60, 8, 8, 0.85); z-index: 70;">
    <div class="text-center pop">
      <div class="display font-black text-[#ff5d5d]" style="font-size: 64px; text-shadow: 0 0 30px rgba(255, 80, 80, 0.6);">⚠ 通膨爆發</div>
      <div id="inflationAlertSub" class="display text-2xl mt-2 text-[#f5c451]"></div>
    </div>
  </div>
  <!-- 股市面板 -->
  <div id="stockPanel" class="overlay" style="display: none;">
    <div class="card pop" style="max-width: 980px; width: 100%; padding: 20px; max-height: 92vh; display: flex; flex-direction: column;">
      <div id="stockBody" style="display: flex; flex-direction: column; min-height: 0; flex: 1;">
        <!-- 動態渲染股市 -->
      </div>
    </div>
  </div>
  <!-- 道具面板 -->
  <div id="itemPanel" class="overlay" style="display: none;">
    <div class="card pop scroll" style="max-width: 600px; width: 100%; padding: 20px; max-height: 90vh; overflow: auto;">
      <div id="itemBody">
        <!-- 動態渲染道具 -->
      </div>
    </div>
  </div>
  <!-- 蓋房面板 -->
  <div id="buildPanel" class="overlay" style="display: none;">
    <div class="card pop scroll" style="max-width: 640px; width: 100%; padding: 20px; max-height: 90vh; overflow: auto;">
      <div id="buildBody">
        <!-- 動態渲染蓋房 -->
      </div>
    </div>
  </div>
  <!-- 玩家狀態詳細面板 -->
  <div id="playersPanel" class="overlay" style="display: none;">
    <div class="card pop scroll" style="max-width: 900px; width: 100%; padding: 20px; max-height: 90vh; overflow: auto;">
      <div id="playersBody">
        <!-- 動態渲染玩家清單 -->
      </div>
    </div>
  </div>
  <!-- 事件紀錄面板 -->
  <div id="logPanel" class="overlay" style="display: none;">
    <div class="card pop" style="max-width: 600px; width: 100%; padding: 20px; max-height: 90vh; display: flex; flex-direction: column;">
      <div class="flex items-center justify-between mb-3 border-b border-[#26314a] pb-2">
        <div class="display text-xl font-bold text-[#f5c451]">📜 事件紀錄</div>
        <button class="btn btn-ghost px-3 py-1 text-xs" onclick="closeLog()">關閉 ✕</button>
      </div>
      <div id="log" class="scroll pr-1" style="overflow: auto; flex: 1; display: flex; flex-direction: column;">
        <!-- 動態紀錄內容 -->
      </div>
    </div>
  </div>
  <!-- 引入外部 JavaScript 邏輯 -->
  <script src="app.js?v=3.0" defer></script>
</body>
</html>
