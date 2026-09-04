alert("網站正在修改中")

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
    { label:'教研樞旁花圃', book:'馭風書院' },
    { label:'教研樞旁空地地板維護', book:'馭風書院' },
    { label:'一般教室（一）', book:'馭風書院' },
    { label:'一般教室（二）', book:'馭風書院' },
    { label:'廁所－地板', book:'馭風書院' },
    { label:'廁所－男廁刷馬桶等', book:'馭風書院' },
    { label:'廁所－女廁刷馬桶等', book:'馭風書院' },
    { label:'教研樞旁廁所－男廁', book:'馭風書院' },
    { label:'教研樞旁廁所－女廁', book:'馭風書院' },
    { label:'走廊＋無障礙廁所', book:'馭風書院' },
    { label:'議策樞維護', book:'馭風書院' },
    { label:'教研樞前空地', book:'馭風書院' },
    { label:'通往一樓校園鏤空處（欄杆＋地板）', book:'馭風書院' },
    { label:'向陽階梯附近地板一', book:'馭風書院' },
    { label:'向陽階梯附近地板二', book:'馭風書院' },
    { label:'樓梯－向陽階梯＋後方花圃維護（到 2F）', book:'馭風書院' },
    { label:'樓梯－廁所樓梯（靠近一般教室）', book:'馭風書院' },
    { label:'樓梯－廁所樓梯（靠近教研樞）', book:'馭風書院' }
  ],
  '3F': [
    { label:'淬維護', book:'矽晶書院' },
    { label:'一般教室（一）', book:'矽晶書院' },
    { label:'一般教室（二）', book:'矽晶書院' },
    { label:'廁所－地板', book:'矽晶書院' },
    { label:'廁所－男廁刷馬桶等', book:'矽晶書院' },
    { label:'廁所－女廁刷馬桶等', book:'矽晶書院' },
    { label:'花圃旁廁所－男廁', book:'矽晶書院' },
    { label:'花圃旁廁所－女廁', book:'矽晶書院' },
    { label:'走廊＋無障礙廁所', book:'矽晶書院' },
    { label:'地科／生物教室維護', book:'矽晶書院' },
    { label:'PBL 研創維護', book:'矽晶書院' },
    { label:'迴響維護', book:'矽晶書院' },
    { label:'走廊－第一部分（掃加拖）', book:'矽晶書院' },
    { label:'走廊－第二部分（掃加拖）', book:'矽晶書院' },
    { label:'走廊－第三部分（掃加拖）', book:'矽晶書院' },
    { label:'走廊－第四部分（掃加拖）', book:'矽晶書院' },
    { label:'走廊－第五部分（掃加拖）', book:'矽晶書院' },
    { label:'花圃空間', book:'矽晶書院' }
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

function buildRoster(){
  const counts = { '矽晶書院':21, '曦華書院':20, '靛織書院':20 };
  const roster = {
    '馭風書院': ['馭風固定員'] // 👈 在這裡填入馭風書院的固定人員姓名或編號
  };
  
  // 只針對其他三個書院動態產生名冊
  ['矽晶書院', '曦華書院', '靛織書院'].forEach(book => {
    const n = counts[book];
    roster[book] = Array.from({length:n}, (_,i)=> book.slice(0,2) + String(i+1).padStart(2,'0'));
  });
  return roster;
}
const ROSTER = buildRoster();

function pad(n){ return String(n).padStart(2,'0'); }
function monthKey(d){ return d.getFullYear() + '-' + pad(d.getMonth()+1); }
function dateKey(d){ return monthKey(d) + '-' + pad(d.getDate()); }

function weekKey(d) {
  const target = new Date(d.valueOf());
  const dayNr = (d.getDay() + 6) % 7;
  target.setDate(target.getDate() - dayNr + 3);
  const firstThursday = target.valueOf();
  target.setMonth(0, 1);
  if (target.getDay() !== 4) {
    target.setMonth(0, 1 + ((4 - target.getDay() + 7) % 7));
  }
  const weekNum = 1 + Math.round((firstThursday - target.valueOf()) / 604800000);
  return target.getFullYear() + '-W' + pad(weekNum);
}

function pick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

const now = new Date();
const MKEY = monthKey(now);
const DKEY = dateKey(now);
const WKEY = weekKey(now);

let tasksData = null;
let inspectorData = null;
let checklistData = null;
let submissions = null;
let selectedBook = null;

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz0LAXu9Kqg9GAwCjm2U_wMkpeB8mNp-deenaZ95RABFbK8O5RFUd8IYyedwGItMR7v/exec';

async function loadAll(){
  tasksData = DEFAULT_TASKS;
  const kv = await fetchDump();

  inspectorData = kv['inspectors:'+WKEY] ? JSON.parse(kv['inspectors:'+WKEY]) : null;
  // 在 loadAll() 函式裡面找到這段並替換：
if(!inspectorData){
  inspectorData = {};
  BOOKS.forEach(book => {
    if (book === '馭風書院') {
      inspectorData[book] = ROSTER['馭風書院'][0]; // 👈 固定選擇陣列的第一位
    } else {
      inspectorData[book] = pick(ROSTER[book]); // 其他書院隨機抽取
    }
  });
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

  if (tabName === 'pending') {
    renderPendingPlaces();
  } else if (tabName === 'weekly') {
    renderWeeklyMatrix();
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
    if(btn.disabled) return;
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
    btn.addEventListener('click', async ()=>{
      if(!allDone){
        const ok = confirm(`還有 ${totalTasks-passCount} 項尚未達到合格以上，確定要送出嗎？`);
        if(!ok) return;
      }

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

  container.innerHTML = '<div class="loading">載入當週 (週一至週五) 紀錄中…<div class="loading-bar-track"><div class="loading-bar-fill"></div></div></div>';

  const latestKV = await fetchDump();

  const today = new Date();
  const dayOfWeek = today.getDay();
  const distanceToMonday = (dayOfWeek === 0) ? -6 : 1 - dayOfWeek;
  
  const monday = new Date(today);
  monday.setDate(today.getDate() + distanceToMonday);

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

                  let mark = '➖';
                  let color = 'var(--ink-soft)';

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

document.getElementById('reroll-btn').addEventListener('click', async ()=>{
  if(!confirm('確定要重新抽選本週清潔工嗎？這會覆蓋目前的名單。')) return;
  
  BOOKS.forEach(book => {
    if (book === '馭風書院') {
      inspectorData[book] = ROSTER['馭風書院'][0]; // 👈 維持固定人員
    } else {
      inspectorData[book] = pick(ROSTER[book]); // 其他書院重新抽選
    }
  });
  
  await saveJSON('inspectors:'+WKEY, inspectorData);
  render();
});

(async function init(){
  if(APPS_SCRIPT_URL.indexOf('PASTE_YOUR') === 0){
    document.getElementById('floors').innerHTML =
      '<div class="empty-hint">尚未設定資料庫網址：請把程式碼最上面的 APPS_SCRIPT_URL 換成你部署 Apps Script 後拿到的 /exec 網址。</div>';
    return;
  }
  document.getElementById('floors').innerHTML =
    '<div class="loading">載入中…<div class="loading-bar-track"><div class="loading-bar-fill"></div></div></div>';
  await loadAll();
  render();
})();
