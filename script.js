const BOOKS = ['馭風書院','矽晶書院','曦華書院','靛織書院'];
const BOOK_COLOR = {
  '馭風書院':'var(--book-wind)',
  '矽晶書院':'var(--book-si)',
  '曦華書院':'var(--book-dawn)',
  '靛織書院':'var(--book-indigo)'
};

const DEFAULT_TASKS = {
  '1F': [
    { label:'警衛室附近地板', book:'曦華書院' },
    { label:'花圃維護', book:'曦華書院' },
    { label:'走廊地板（靠共伴樞）', book:'曦華書院' },
    { label:'花園', book:'曦華書院' },
    { label:'火塘－地板', book:'靛織書院' },
    { label:'火塘－桌子', book:'靛織書院' },
    { label:'創客空間－地板', book:'靛織書院' },
    { label:'創客空間－窗戶及桌椅', book:'靛織書院' },
    { label:'性別友善廁所－洗手台', book:'曦華書院' },
    { label:'性別友善廁所－馬桶', book:'曦華書院' },
    { label:'性別友善廁所－地板', book:'曦華書院' },
    { label:'無障礙廁所＋廁所走廊－地板', book:'曦華書院' },
    { label:'無障礙廁所＋廁所走廊－刷馬桶、小便斗', book:'曦華書院' },
    { label:'垃圾儲藏室（分類垃圾）', book:'靛織書院' },
    { label:'一樓大廳－花圃維護', book:'曦華書院' },
    { label:'一樓大廳－地板簡單清潔', book:'曦華書院' },
    { label:'泮林－窗戶', book:'靛織書院' },
    { label:'泮林－櫃子', book:'靛織書院' },
    { label:'泮林－地板', book:'靛織書院' },
    { label:'體育器材室（整理器材）', book:'靛織書院' },
    { label:'一樓走廊－第一部分（掃拖）', book:'曦華書院' },
    { label:'一樓走廊－第二部分（掃拖）', book:'曦華書院' },
    { label:'一樓走廊－第三部分（掃拖）', book:'曦華書院' },
    { label:'樓梯－共伴樞旁', book:'曦華書院' },
    { label:'樓梯－廁所旁', book:'曦華書院' },
    { label:'樓梯－通學樓梯（到 2F 空地）', book:'曦華書院' }
  ],
    '2F': [
    { label: '掃花圃、看情況拖地、澆水', book: '馭風書院' },
    { label: '一般教室（左一）', book: '馭風書院' },
    { label: '一般教室（左二）', book: '馭風書院' },
    { label: '一般教室（左三）', book: '馭風書院' },
    { label: '一般教室（左四）', book: '馭風書院' },
    { label: '掃校內樓梯', book: '馭風書院' },
    { label: '廁所－掃地 拖地', book: '馭風書院' },
    { label: '廁所－刷小便斗、馬桶', book: '馭風書院' },
    { label: '廁所－擦鏡子收垃圾', book: '馭風書院' },
    { label: '空地（含走廊）一', book: '馭風書院' },
    { label: '空地（含走廊）二', book: '馭風書院' },
    { label: '空地（含走廊）三', book: '馭風書院' },
    { label: '空地（含走廊）四', book: '馭風書院' },
    { label: '空地（含走廊）五', book: '馭風書院' },
    { label: '讀書室', book: '馭風書院' },
    { label: '地科\\生物教室', book: '馭風書院' },
    { label: 'PBL研創教室', book: '馭風書院' },
    { label: '音樂教室', book: '馭風書院' }
  ],
  '3F': [
  { label: '一般教室（一）', book: '矽晶書院' },
  { label: '一般教室（二）', book: '矽晶書院' },
  { label: '一般教室（三）', book: '矽晶書院' },
  { label: '一般教室（四）', book: '矽晶書院' },
  { label: '廁所（一）', book: '矽晶書院' },
  { label: '廁所（二）', book: '矽晶書院' },
  { label: '廁所（三）', book: '矽晶書院' },
  { label: '廁所（四）', book: '矽晶書院' },
  { label: '廁所（五）', book: '矽晶書院' },
  { label: '花圃＋收垃圾', book: '矽晶書院' },
  { label: '走廊（一）', book: '矽晶書院' },
  { label: '走廊（二）', book: '矽晶書院' },
  { label: '走廊（三）', book: '矽晶書院' },
  { label: '走廊（四）', book: '矽晶書院' },
  { label: '走廊（五）', book: '矽晶書院' },
  { label: '讀書室', book: '矽晶書院' },
  { label: 'PBL研創', book: '矽晶書院' },
  { label: '地科 生物教室', book: '矽晶書院' },
  { label: '無界（美術教室）', book: '矽晶書院' },
  { label: '清潔工', book: '矽晶書院' }
]
};
const FLOOR_ORDER = ['1F','2F','3F'];

const RATINGS = [
  { value:'1', label:'1・非常乾淨' },
  { value:'2', label:'2・有一點灰塵，但大致清掃' },
  { value:'3', label:'3・不合格' }
];
const RATING_LABEL = {};
RATINGS.forEach(r=>RATING_LABEL[r.value]=r.label);

// 馭風書院固定不抽真人，維持原本的匿名代號（馭01～馭21）
function buildRoster(){
  const counts = { '馭風書院':21 };
  const roster = {};
  Object.keys(counts).forEach(book=>{
    const n = counts[book];
    roster[book] = Array.from({length:n}, (_,i)=> book.slice(0,2) + String(i+1).padStart(2,'0'));
  });
  return roster;
}
const ROSTER = buildRoster();

// 矽晶書院、靛織書院、曦華書院：真實學生名單（學號＋姓名），用來抽出本週實際負責的人
// 注意：矽晶書院原始名單中「序號10・邱子彧」缺少學號，暫時無法排入抽選名單，
// 補上學號後記得把他加進下面的陣列。
const REAL_ROSTER = {
  '矽晶書院': [
    { id:'11501004', name:'王浩宸' },
    { id:'11501006', name:'田芯' },
    { id:'11501012', name:'呂聿平' },
    { id:'11501016', name:'李紫晴' },
    { id:'11501020', name:'林沅飛' },
    { id:'11501022', name:'林彥成' },
    { id:'11501023', name:'林珈弘' },
    { id:'11501027', name:'林慧馨' },
    { id:'11501028', name:'邱予晨' },
    { id:'11501031', name:'洪詠政' },
    { id:'11501041', name:'張瑩君' },
    { id:'11501045', name:'陳品築' },
    { id:'11501049', name:'陳郁晴' },
    { id:'11501050', name:'曾晨軒' },
    { id:'11501055', name:'黃建碩' },
    { id:'11501060', name:'葉沛霓' },
    { id:'11501061', name:'葉明誠' },
    { id:'11501065', name:'廖品芊' },
    { id:'11501073', name:'蔡宜芹' },
    { id:'11501075', name:'鄭元皓' }
  ],
  '靛織書院': [
    { id:'11501005', name:'田卓示' },
    { id:'11501010', name:'吳咏縉' },
    { id:'11501021', name:'林宥任' },
    { id:'11501024', name:'林晟媐' },
    { id:'11501030', name:'施秉呈' },
    { id:'11501033', name:'胡瀚揚' },
    { id:'11501036', name:'徐子曦' },
    { id:'11501037', name:'張邑菲' },
    { id:'11501051', name:'曾琳驊' },
    { id:'11501054', name:'黃作晴' },
    { id:'11501062', name:'詹宇崴' },
    { id:'11501064', name:'鄒定憲' },
    { id:'11501066', name:'廖哲樂' },
    { id:'11501069', name:'劉亭杉' },
    { id:'11501070', name:'劉品言' },
    { id:'11501077', name:'謝旻廷' },
    { id:'11501078', name:'鍾亘菱' },
    { id:'11501080', name:'顏子程' },
    { id:'11501081', name:'顏玉玲' },
    { id:'11501983', name:'Rose Emilia, Martine TALON' }
  ],
  '曦華書院': [
    { id:'11501011', name:'吳楓太' },
    { id:'11501015', name:'李柏沛' },
    { id:'11501017', name:'周賢哲' },
    { id:'11501019', name:'林廷筠' },
    { id:'11501029', name:'金睦恩' },
    { id:'11501034', name:'范妤亘' },
    { id:'11501035', name:'倪楷晴' },
    { id:'11501038', name:'張翔恩' },
    { id:'11501039', name:'張舒庭' },
    { id:'11501044', name:'陳安晴' },
    { id:'11501047', name:'陳姿蓉' },
    { id:'11501052', name:'童秉和' },
    { id:'11501057', name:'黃健恩' },
    { id:'11501063', name:'詹奕鵬' },
    { id:'11501067', name:'劉千瑜' },
    { id:'11501071', name:'劉宥德' },
    { id:'11501074', name:'蔡雅棠' },
    { id:'11501076', name:'賴亭諳' },
    { id:'11501079', name:'鍾朋洋' },
    { id:'11501082', name:'嚴宥善' }
  ]
};
function formatStudent(s){ return s.name + '（' + s.id + '）'; }
function pickBookRepresentative(book){
  return (book === '馭風書院') ? pick(ROSTER[book]) : formatStudent(pick(REAL_ROSTER[book]));
}

function pad(n){ return String(n).padStart(2,'0'); }
function monthKey(d){ return d.getFullYear() + '-' + pad(d.getMonth()+1); }
function dateKey(d){ return monthKey(d) + '-' + pad(d.getDate()); }
// function mondayOf(d){
//   const day = d.getDay(); // 0(日) ~ 6(六)
//   const distanceToMonday = (day - WEEK_RESET_DAY + 7) % 7; // 變數名稱錯誤
//   const monday = new Date(d);
//   monday.setDate(d.getDate() + distanceToMonday);
//   return monday;
// }
const WEEK_RESET_DAY = 6; // 0=日 1=一 2=二 3=三 4=四 5=五 6=六，改這個數字就好
function saturdayOf(d){
  const day = d.getDay();
  const distanceBack = (day - WEEK_RESET_DAY + 7) % 7;
  const resetDay = new Date(d);
  resetDay.setDate(d.getDate() - distanceBack);
  return resetDay;
}
function weekKey(d){ return dateKey(saturdayOf(d)); }
//function weekKey(d){ return dateKey(mondayOf(d)); } // 用當週「週一」的日期當 key，例如 2026-09-01
function pick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

const now = new Date();
const WKEY = weekKey(now);
const DKEY = dateKey(now);

let tasksData = null;
let inspectorData = null;
let checklistData = null;
let submissions = null;
let selectedBook = null;
let dataReady = false; // loadAll() 完成之前，pending/weekly 分頁不能拿資料來用

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz2A-rk-5wYV5LlGoPSVCVD64_aXvS3fvb0I5C0WygsUtGmXUMKJQbio8a9wruNUfZt/exec';

async function loadAll(){
  tasksData = DEFAULT_TASKS;
  const kv = await fetchDump();

  inspectorData = kv['inspectors:'+WKEY] ? JSON.parse(kv['inspectors:'+WKEY]) : null;
  if(!inspectorData){
    inspectorData = {};
    BOOKS.forEach(book=>{ inspectorData[book] = pickBookRepresentative(book); });
    await saveJSON('inspectors:'+WKEY, inspectorData);
  }
  checklistData = kv['checklist:'+DKEY] ? JSON.parse(kv['checklist:'+DKEY]) : {};
  submissions = kv['submissions:'+DKEY] ? JSON.parse(kv['submissions:'+DKEY]) : {};
}

async function fetchDump(){
  try{
    const res = await fetch(APPS_SCRIPT_URL + '?action=dump');
    const data = await res.json();
    const map = {};
    (data.rows || []).forEach(r=>{ map[r.key] = r.value; });
    return map;
  }catch(e){
    console.error('dump error', e);
    return {};
  }
}

async function saveJSON(key, obj){
  try{
    await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ action:'set', key: key, value: JSON.stringify(obj) })
    });
  }catch(e){
    console.error('save error', key, e);
  }
}

function taskId(floor, label){ return floor + '||' + label; }
function floorsForBook(book){
  return FLOOR_ORDER.filter(floor => tasksData[floor].some(item=>item.book===book));
}

/* Bottom sheet */
const sheetBackdrop = document.getElementById('sheet-backdrop');
const sheetEl = document.getElementById('sheet');
function openSheet(title, options, current, onPick){
  document.getElementById('sheet-title').textContent = title;
  const wrap = document.getElementById('sheet-options');
  wrap.innerHTML = options.map(o=>`
    <button class="sheet-option ${o.value===current?'active':''}" data-value="${o.value}" type="button">
      <span>${o.label}</span>
      ${o.value===current?'<span class="check-mark">✓</span>':''}
    </button>`).join('');
  wrap.querySelectorAll('.sheet-option').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      closeSheet();
      onPick(btn.dataset.value);
    });
  });
  sheetBackdrop.classList.add('show');
  sheetEl.classList.add('show');
}
function closeSheet(){
  sheetBackdrop.classList.remove('show');
  sheetEl.classList.remove('show');
}
sheetBackdrop.addEventListener('click', closeSheet);

/* 頁籤切換邏輯 */
function switchTab(tabName) {
  const tabs = ['check', 'pending', 'weekly'];

  tabs.forEach(t => {
    const viewEl = document.getElementById(`view-${t}`);
    const tabEl = document.getElementById(`tab-${t}`);

    const isTarget = (t === tabName);
    if (viewEl) viewEl.style.display = isTarget ? 'block' : 'none';
    if (tabEl) tabEl.classList.toggle('active', isTarget);
  });

  const submitArea = document.getElementById('submit-area');
  if (submitArea) {
    submitArea.style.display = (tabName === 'check') ? 'block' : 'none';
  }
  // 非「打掃檢查」分頁時，送出按鈕被藏起來了，底部就不用留那塊空白
  document.querySelector('.board').classList.toggle('no-submit-pad', tabName !== 'check');

  if (tabName === 'pending') {
    if(!dataReady){
      document.getElementById('pending-places-container').innerHTML =
        '<div class="empty-hint">資料載入中，請稍候幾秒再切換…</div>';
    }else{
      renderPendingPlaces();
    }
  } else if (tabName === 'weekly') {
    if(!dataReady){
      document.getElementById('weekly-matrix-container').innerHTML =
        '<div class="empty-hint">資料載入中，請稍候幾秒再切換…</div>';
    }else{
      renderWeeklyMatrix();
    }
  }
}

function renderWhoBox(){
  const el = document.getElementById('who-box');
  if(!selectedBook){
    el.innerHTML = `
      <label>請問您的書院為何？</label>
      <button class="select-trigger placeholder" id="book-trigger" type="button">
        <span>請選擇書院</span>
        <span class="trigger-arrow"></span>
      </button>
    `;
    document.getElementById('book-trigger').addEventListener('click', ()=>{
      openSheet('請選擇書院', BOOKS.map(b=>({value:b,label:b})), selectedBook, (val)=>{
        selectedBook = val;
        render();
      });
    });
  }else{
    const floors = floorsForBook(selectedBook).join('、');
    el.innerHTML = `
      <div class="who-current">
        <div class="info">您的書院：<b>${selectedBook}</b>（負責 ${floors}）<br>本週清潔工：${inspectorData[selectedBook]}</div>
        <button class="swap-btn" id="swap-book-btn" type="button">更換書院</button>
      </div>
    `;
    document.getElementById('swap-book-btn').addEventListener('click', ()=>{
      selectedBook = null;
      render();
    });
  }
}

function render(){
  document.getElementById('today-label').textContent =
    now.toLocaleDateString('zh-TW', { month:'long', day:'numeric', weekday:'short' });

  renderWhoBox();

  const stripEl = document.getElementById('roster-strip');
  stripEl.innerHTML = '';
  BOOKS.forEach(book=>{
    const chip = document.createElement('div');
    chip.className = 'roster-chip';
    chip.innerHTML = `<span class="swatch" style="background:${BOOK_COLOR[book]}"></span>
      <b>${book}</b><span class="who">${inspectorData[book]}</span>`;
    stripEl.appendChild(chip);
  });

  const floorsEl = document.getElementById('floors');
  const submitEl = document.getElementById('submit-area');
  floorsEl.innerHTML = '';

  if(!selectedBook){
    floorsEl.innerHTML = '<div class="empty-hint">請先選擇您的書院，才會顯示需要檢查的樓層與項目。</div>';
    submitEl.innerHTML = '';
    renderAdminSubmissions();
    return;
  }

  const alreadySubmitted = !!submissions[selectedBook];
  let totalTasks = 0, passCount = 0;

  floorsForBook(selectedBook).forEach(floor=>{
    const items = tasksData[floor].filter(item=>item.book===selectedBook);
    const doneCount = items.filter(item=>{
      const v = checklistData[taskId(floor,item.label)];
      return v === '1' || v === '2';
    }).length;
    totalTasks += items.length;
    passCount += doneCount;
    const pct = items.length ? Math.round(doneCount/items.length*100) : 0;

    const card = document.createElement('div');
    card.className = 'floor';

    card.innerHTML = `
      <div class="floor-head">
        <div class="floor-num">${floor}</div>
        <div class="floor-meta">
          <div class="tags">
            <span class="book-tag" style="background:${BOOK_COLOR[selectedBook]}"><span class="swatch"></span>${selectedBook}</span>
          </div>
          <div class="progress-line"><strong>${doneCount}</strong> / ${items.length} 項達到合格以上</div>
        </div>
      </div>
      <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
      <div class="task-list">
        ${items.map(item=>{
          const v = checklistData[taskId(floor,item.label)] || '';
          const levelClass = v ? 'level-'+v : '';
          const triggerLabel = v ? RATING_LABEL[v] : '尚未檢查';
          return `<div class="task-row ${levelClass}" data-floor="${floor}" data-label="${item.label}">
            <div class="label">${item.label}</div>
            <button class="rate-trigger" type="button">
              <span>${triggerLabel}</span>
              <span class="trigger-arrow"></span>
            </button>
          </div>`;
        }).join('')}
      </div>
    `;
    floorsEl.appendChild(card);
  });

  floorsEl.querySelectorAll('.task-row').forEach(row=>{
    const btn = row.querySelector('.rate-trigger');
    btn.addEventListener('click', ()=>{
      const floor = row.dataset.floor, label = row.dataset.label;
      const id = taskId(floor, label);
      const current = checklistData[id] || '';
      const options = [{value:'',label:'尚未檢查'}, ...RATINGS];
      openSheet(label, options, current, (val)=>{
        if(val){ checklistData[id] = val; } else { delete checklistData[id]; }
        render();
      });
    });
  });

  const allDone = totalTasks > 0 && passCount === totalTasks;
  const submittedNote = alreadySubmitted
    ? `<div class="submitted-note">✓ 今日已於 ${pad(new Date(submissions[selectedBook]).getHours())}:${pad(new Date(submissions[selectedBook]).getMinutes())} 送出過，仍可再次送出更新結果</div>`
    : '';
  submitEl.innerHTML = `
    <div class="submit-box">
      ${submittedNote}
      <div class="hint">${allDone ? '全部項目都已達到合格以上，可以送出今日結果' : `還有 ${totalTasks-passCount} 項尚未達到「有一點灰塵，但大致清掃」以上`}</div>
      <button class="submit-btn" id="submit-btn">${alreadySubmitted ? '重新送出今日結果' : '送出今日結果'}</button>
    </div>`;
  const btn = document.getElementById('submit-btn');
  if(btn){
    btn.addEventListener('click', ()=>{
      if(!allDone){
        const ok = confirm(`還有 ${totalTasks-passCount} 項尚未達到合格以上，確定要送出嗎？`);
        if(!ok) return;
      }

      showPasswordGate({
        title: '確認送出',
        sub: `送出「${selectedBook}」今日打掃結果前，請先輸入密碼`,
        confirmLabel: '確認送出',
        onSuccess: async ()=>{
          const box = btn.closest('.submit-box');
          box.innerHTML = `
            <div class="hint">送出中，請稍候…</div>
            <div class="submit-progress-track"><div class="submit-progress-fill" id="submit-progress-fill"></div></div>
            <div class="submit-progress-pct" id="submit-progress-pct">0%</div>
          `;
          const fillEl = document.getElementById('submit-progress-fill');
          const pctEl = document.getElementById('submit-progress-pct');

          let pct = 0;
          const timer = setInterval(()=>{
            pct += (90 - pct) * 0.12 + 0.6;
            if(pct > 90) pct = 90;
            fillEl.style.width = pct + '%';
            pctEl.textContent = Math.round(pct) + '%';
          }, 120);

          try{
            const latestKV = await fetchDump();
            const serverChecklist = latestKV['checklist:'+DKEY] ? JSON.parse(latestKV['checklist:'+DKEY]) : {};
            floorsForBook(selectedBook).forEach(floor=>{
              tasksData[floor].filter(item=>item.book===selectedBook).forEach(item=>{
                const id = taskId(floor, item.label);
                if(checklistData[id]) serverChecklist[id] = checklistData[id];
                else delete serverChecklist[id];
              });
            });
            checklistData = serverChecklist;
            await saveJSON('checklist:'+DKEY, checklistData);

            const latestSubs = latestKV['submissions:'+DKEY] ? JSON.parse(latestKV['submissions:'+DKEY]) : {};
            latestSubs[selectedBook] = new Date().toISOString();
            submissions = latestSubs;
            await saveJSON('submissions:'+DKEY, submissions);
          } finally {
            clearInterval(timer);
            fillEl.style.width = '100%';
            pctEl.textContent = '100%';
          }

          setTimeout(render, 250);
        }
      });
    });
  }

  renderAdminSubmissions();
}

function renderAdminSubmissions(){
  const el = document.getElementById('admin-submissions');
  el.innerHTML = BOOKS.map(book=>{
    const sub = submissions[book];
    const status = sub ? `已於 ${pad(new Date(sub).getHours())}:${pad(new Date(sub).getMinutes())} 送出` : '尚未送出';
    return `<div class="admin-row">
      <span>${book}：${status}</span>
      ${sub ? `<button data-unsubmit="${book}" type="button">撤銷送出</button>` : ''}
    </div>`;
  }).join('');
  el.querySelectorAll('[data-unsubmit]').forEach(btn=>{
    btn.addEventListener('click', async ()=>{
      const book = btn.dataset.unsubmit;
      if(!confirm(`確定要撤銷 ${book} 今日的送出紀錄嗎？`)) return;
      delete submissions[book];
      await saveJSON('submissions:'+DKEY, submissions);
      render();
    });
  });
}

function renderPendingPlaces() {
  const container = document.getElementById('pending-places-container');
  if(!tasksData || !checklistData || !inspectorData){
    container.innerHTML = '<div class="empty-hint">資料載入中，請稍候幾秒再切換…</div>';
    return;
  }

  let hasPending = false;
  let html = '';

  FLOOR_ORDER.forEach(floor => {
    const uncleanedItems = tasksData[floor].filter(item => {
      const status = checklistData[taskId(floor, item.label)];
      return !status || status === '3';
    });

    if (uncleanedItems.length > 0) {
      hasPending = true;
      html += `
        <div class="floor" style="margin-bottom:14px;">
          <div class="floor-head" style="background:#fff;">
            <div class="floor-num">${floor}</div>
            <div class="floor-meta">
              <div style="font-weight:600; font-size:14px; color:var(--bad);">
                剩餘 ${uncleanedItems.length} 個區域待處理
              </div>
            </div>
          </div>
          <div class="task-list">
            ${uncleanedItems.map(item => {
              const status = checklistData[taskId(floor, item.label)];
              const isBad = status === '3';
              const statusText = isBad ? '檢查不合格' : '尚未打掃／未檢查';
              const statusColor = isBad ? 'var(--bad)' : 'var(--warn)';
              const bgColor = isBad ? 'rgba(178,59,59,0.08)' : 'rgba(184,134,11,0.08)';

              return `
                <div class="task-row" style="background:${bgColor}; border-left:4px solid ${statusColor}; margin-bottom:6px; padding:10px; border-radius:6px;">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <div>
                      <div class="label" style="font-weight:600;">${item.label}</div>
                      <div style="font-size:12px; color:var(--ink-soft); margin-top:2px;">
                        負責書院：${item.book} (${inspectorData[item.book] || '未定'})
                      </div>
                    </div>
                    <span style="font-size:12px; padding:4px 8px; border-radius:4px; background:#fff; color:${statusColor}; font-weight:600; white-space:nowrap;">
                      ${statusText}
                    </span>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }
  });

  if (!hasPending) {
    container.innerHTML = `
      <div class="empty-hint" style="background:#e5f2ea; color:var(--good); border-style:solid; border-color:var(--good);">
        🎉 全校所有區域皆已完成打掃且評分合格！
      </div>`;
    return;
  }

  container.innerHTML = html;
}

async function renderWeeklyMatrix() {
  const container = document.getElementById('weekly-matrix-container');
  if (!container) return;
  if(!tasksData){
    container.innerHTML = '<div class="empty-hint">資料載入中，請稍候幾秒再切換…</div>';
    return;
  }

  container.innerHTML = '<div class="loading">載入當週 (週一至週五) 紀錄中…<div class="loading-bar-track"><div class="loading-bar-fill"></div></div></div>';

  const latestKV = await fetchDump();

  // 1. 計算當週「週一」的日期
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0(日), 1(一), 2(二), ..., 6(六)

  // 計算距離本週一相差幾天（如果今天是週日 0，則當週一為 6 天前）
  const distanceToMonday = (dayOfWeek === 0) ? -6 : 1 - dayOfWeek;

  const monday = new Date(today);
  monday.setDate(today.getDate() + distanceToMonday);

  // 2. 依序產生當週 週一至週五 的 5 天日期
  const pastDays = [];
  const weekDays = ['一', '二', '三', '四', '五'];

  for (let i = 0; i < 5; i++) {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);

    pastDays.push({
      key: dateKey(d),
      label: `${d.getMonth() + 1}/${d.getDate()}`,
      dayName: weekDays[i]
    });
  }

  let html = '';

  FLOOR_ORDER.forEach(floor => {
    html += `
      <div class="floor" style="margin-bottom:16px;">
        <div class="floor-head" style="background:#fff;">
          <div class="floor-num">${floor}</div>
          <div style="font-weight:600; font-size:15px;">本週 (一～五) 打掃狀況</div>
        </div>
        <div style="padding:12px; overflow-x:auto;">
          <table style="width:100%; border-collapse:collapse; font-size:13px; text-align:center;">
            <thead>
              <tr style="border-bottom:2px solid var(--line); color:var(--ink-soft);">
                <th style="text-align:left; padding:8px 6px;">位置名稱</th>
                ${pastDays.map(d => `<th style="padding:6px; min-width:48px;">${d.label}<br><span style="font-size:11px; font-weight:normal;">(${d.dayName})</span></th>`).join('')}
              </tr>
            </thead>
            <tbody>
              ${tasksData[floor].map(item => {
                const id = taskId(floor, item.label);

                const statusCols = pastDays.map(d => {
                  const dayData = latestKV['checklist:' + d.key] ? JSON.parse(latestKV['checklist:' + d.key]) : {};
                  const status = dayData[id];

                  let mark = '•';
                  let color = 'var(--line)';

                  if (status === '1' || status === '2') {
                    mark = '✓';
                    color = 'var(--good)';
                  } else if (status === '3') {
                    mark = '✕';
                    color = 'var(--bad)';
                  }

                  return `<td style="padding:8px 4px; color:${color}; font-weight:bold; font-size:14px;">${mark}</td>`;
                }).join('');

                return `
                  <tr style="border-bottom:1px solid var(--line);">
                    <td style="text-align:left; padding:10px 6px; font-weight:500;">${item.label}</td>
                    ${statusCols}
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// document.getElementById('reroll-btn').addEventListener('click', async ()=>{
//   if(!confirm('確定要重新抽選本週清潔工嗎？這會覆蓋目前的名單。')) return;
//   BOOKS.forEach(book=>{ inspectorData[book] = pickBookRepresentative(book); });
//   await saveJSON('inspectors:'+WKEY, inspectorData);
//   render();
// });

async function startApp(){
  if(APPS_SCRIPT_URL.indexOf('PASTE_YOUR') === 0){
    document.getElementById('floors').innerHTML =
      '<div class="empty-hint">尚未設定資料庫網址：請把程式碼最上面的 APPS_SCRIPT_URL 換成你部署 Apps Script 後拿到的 /exec 網址。</div>';
    return;
  }
  document.getElementById('floors').innerHTML =
    '<div class="loading">載入中…<div class="loading-bar-track"><div class="loading-bar-fill"></div></div></div>';
  await loadAll();
  dataReady = true;
  render();
}

/* ---------- 密碼確認（送出時才會彈出，其他人可以自由瀏覽） ---------- */
async function verifyPassword_(password){
  try{
    const res = await fetch(APPS_SCRIPT_URL + '?action=checkPassword&password=' + encodeURIComponent(password));
    const data = await res.json();
    return !!data.ok;
  }catch(e){
    console.error('password check error', e);
    return false;
  }
}

// opts: { title, sub, confirmLabel, onSuccess, onCancel }
function showPasswordGate(opts){
  const gate = document.getElementById('pw-gate');
  const input = document.getElementById('pw-input');
  const btn = document.getElementById('pw-submit');
  const cancelBtn = document.getElementById('pw-cancel');
  const err = document.getElementById('pw-error');
  const titleEl = document.getElementById('pw-title');
  const subEl = document.getElementById('pw-sub');

  titleEl.textContent = opts.title || '請輸入密碼';
  subEl.textContent = opts.sub || '';
  input.value = '';
  err.style.display = 'none';
  btn.disabled = false;
  btn.textContent = opts.confirmLabel || '確認';
  gate.style.display = 'flex';

  function cleanup(){
    gate.style.display = 'none';
    btn.removeEventListener('click', onSubmit);
    input.removeEventListener('keydown', onKey);
    cancelBtn.removeEventListener('click', onCancel);
  }

  async function onSubmit(){
    const pw = input.value.trim();
    if(!pw) return;
    btn.disabled = true;
    btn.textContent = '確認中…';
    err.style.display = 'none';

    const ok = await verifyPassword_(pw);
    if(ok){
      cleanup();
      if(opts.onSuccess) opts.onSuccess();
    }else{
      err.style.display = 'block';
      input.value = '';
      input.focus();
      btn.disabled = false;
      btn.textContent = opts.confirmLabel || '確認';
    }
  }
  function onKey(e){ if(e.key === 'Enter') onSubmit(); }
  function onCancel(){
    cleanup();
    if(opts.onCancel) opts.onCancel();
  }

  btn.addEventListener('click', onSubmit);
  input.addEventListener('keydown', onKey);
  cancelBtn.addEventListener('click', onCancel);
  input.focus();
}

startApp(); // 大家都可以直接瀏覽，不用先輸入密碼